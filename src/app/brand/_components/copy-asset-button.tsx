"use client";

import { useEffect, useRef, useState } from "react";
import { Check, CircleAlert, Copy, LoaderCircle } from "lucide-react";

type CopyAssetButtonProps = {
  format: "SVG" | "PNG";
  href: string;
  label: string;
};

type CopyStatus = "idle" | "copying" | "copied" | "copied-link" | "error";

const resetDelay = 2000;

function getAssetName(label: string) {
  return label.replace(/^Download /, "").replace(/ as (SVG|PNG)$/, "");
}

async function fetchAsset(href: string) {
  const response = await fetch(href);

  if (!response.ok) {
    throw new Error(`Unable to fetch ${href}`);
  }

  return response;
}

function canWriteClipboardItem(mimeType: string) {
  return (
    typeof ClipboardItem !== "undefined" &&
    typeof navigator.clipboard.write === "function" &&
    (typeof ClipboardItem.supports !== "function" ||
      ClipboardItem.supports(mimeType))
  );
}

async function copyAsset(format: "SVG" | "PNG", href: string) {
  if (!navigator.clipboard) {
    throw new Error("Clipboard access is unavailable");
  }

  if (format === "SVG") {
    const markup = fetchAsset(href).then((response) => response.text());

    if (canWriteClipboardItem("text/plain")) {
      try {
        await navigator.clipboard.write([
          new ClipboardItem({ "text/plain": markup }),
        ]);
        return "copied" as const;
      } catch {
        // Fall through to writeText for browsers with partial ClipboardItem support.
      }
    }

    await navigator.clipboard.writeText(await markup);
    return "copied" as const;
  }

  if (canWriteClipboardItem("image/png")) {
    const image = fetchAsset(href).then(async (response) => {
      const blob = await response.blob();

      if (blob.type === "image/png") {
        return blob;
      }

      return new Blob([await blob.arrayBuffer()], { type: "image/png" });
    });

    try {
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": image }),
      ]);
      return "copied" as const;
    } catch {
      // Fall through to a link when the browser rejects binary clipboard data.
    }
  }

  await navigator.clipboard.writeText(
    new URL(href, window.location.origin).toString(),
  );
  return "copied-link" as const;
}

export function CopyAssetButton({
  format,
  href,
  label,
}: CopyAssetButtonProps) {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const isMounted = useRef(true);
  const resetTimer = useRef<number | null>(null);
  const assetName = getAssetName(label);
  const copyLabel =
    format === "SVG"
      ? `Copy ${assetName} SVG markup`
      : `Copy ${assetName} PNG image`;

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;

      if (resetTimer.current !== null) {
        window.clearTimeout(resetTimer.current);
      }
    };
  }, []);

  function resetAfterDelay() {
    if (resetTimer.current !== null) {
      window.clearTimeout(resetTimer.current);
    }

    resetTimer.current = window.setTimeout(() => {
      setStatus("idle");
      resetTimer.current = null;
    }, resetDelay);
  }

  async function handleCopy() {
    if (resetTimer.current !== null) {
      window.clearTimeout(resetTimer.current);
      resetTimer.current = null;
    }

    setStatus("copying");

    try {
      const nextStatus = await copyAsset(format, href);

      if (!isMounted.current) {
        return;
      }

      setStatus(nextStatus);
    } catch {
      if (!isMounted.current) {
        return;
      }

      setStatus("error");
    }

    resetAfterDelay();
  }

  const title =
    status === "copying"
      ? `Copying ${format}...`
      : status === "copied"
        ? format === "SVG"
          ? "SVG markup copied"
          : "PNG image copied"
        : status === "copied-link"
          ? "PNG link copied"
          : status === "error"
            ? `Could not copy ${format}`
            : copyLabel;

  const statusMessage =
    status === "copied" || status === "copied-link" || status === "error"
      ? title
      : "";

  return (
    <>
      <button
        aria-label={copyLabel}
        className="relative -ml-px inline-flex size-10 shrink-0 items-center justify-center border border-white/20 bg-white/[0.04] text-white/65 transition-[background-color,border-color,color] duration-150 hover:z-10 hover:border-white/45 hover:bg-white/[0.09] hover:text-white focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5f5f2] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808] disabled:cursor-wait disabled:text-white/42"
        data-state={status}
        disabled={status === "copying"}
        onClick={handleCopy}
        title={title}
        type="button"
      >
        {status === "copying" ? (
          <LoaderCircle
            aria-hidden="true"
            className="size-3.5 animate-spin motion-reduce:animate-none"
            strokeWidth={1.8}
          />
        ) : status === "copied" || status === "copied-link" ? (
          <Check aria-hidden="true" className="size-3.5" strokeWidth={1.8} />
        ) : status === "error" ? (
          <CircleAlert
            aria-hidden="true"
            className="size-3.5"
            strokeWidth={1.8}
          />
        ) : (
          <Copy aria-hidden="true" className="size-3.5" strokeWidth={1.8} />
        )}
      </button>
      <span aria-live="polite" className="sr-only" role="status">
        {statusMessage}
      </span>
    </>
  );
}

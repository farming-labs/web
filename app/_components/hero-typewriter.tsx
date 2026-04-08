"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon } from "lucide-react";

const LINE1 = "JS needs a dopamine hit—we already knew.";
const LINE2 = "So we just started fixing it for you.";

const CHAR_MS = 26;
const BETWEEN_MS = 520;

const PROJECTS: {
  pkg: string;
  description: string;
  href: string;
  label: string;
}[] = [
  {
    pkg: "@farming-labs/docs",
    description: "Docs framework",
    href: "https://docs.farming-labs.dev",
    label: "docs.farming-labs.dev",
  },
  {
    pkg: "@farming-labs/orm",
    description: "ORM",
    href: "https://orm.farming-labs.dev",
    label: "orm.farming-labs.dev",
  },
  {
    pkg: "@farming-labs/mini-dev",
    description: "Dev server",
    href: "https://github.com/farming-labs/mini-dev",
    label: "github.com/farming-labs/mini-dev",
  },
  {
    pkg: "farm-ui",
    description: "UI kit",
    href: "https://farm-ui.com",
    label: "farm-ui.com",
  },
];

function Cursor({ active }: { active: boolean }) {
  return (
    <span
      className={cn(
        "ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[0.08em] align-middle",
        "bg-zinc-400/90 shadow-[0_0_12px_rgba(255,255,255,0.12)]",
        active ? "animate-pulse" : "opacity-0",
      )}
      aria-hidden
    />
  );
}

export function HeroTypewriter() {
  const [phase, setPhase] = useState<"l1" | "l2" | "done">("l1");
  const [i1, setI1] = useState(0);
  const [i2, setI2] = useState(0);

  useEffect(() => {
    if (phase === "l1") {
      if (i1 < LINE1.length) {
        const t = window.setTimeout(() => setI1((n) => n + 1), CHAR_MS);
        return () => window.clearTimeout(t);
      }
      const t = window.setTimeout(() => setPhase("l2"), BETWEEN_MS);
      return () => window.clearTimeout(t);
    }
    if (phase === "l2") {
      if (i2 < LINE2.length) {
        const t = window.setTimeout(() => setI2((n) => n + 1), CHAR_MS);
        return () => window.clearTimeout(t);
      }
      setPhase("done");
    }
  }, [phase, i1, i2]);

  const cursorLine1 = phase === "l1";

  const lineClass =
    "font-code text-base leading-snug tracking-tight text-zinc-300/95 drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)] sm:text-lg md:text-xl";

  return (
    <div className="mt-6 max-w-4xl text-left" aria-live="polite">
      <h2 className="sr-only">
        {LINE1} {LINE2}
      </h2>
      {/* Invisible full line 2 reserves space from the start so typing line 2 does not push layout */}
      <div className="flex flex-col gap-4 sm:gap-5">
        <p className={lineClass}>
          {LINE1.slice(0, i1)}
          <Cursor active={cursorLine1} />
        </p>
        <p className={cn(lineClass, "relative text-zinc-400/95")}>
          <span className="invisible block select-none" aria-hidden>
            {LINE2}
          </span>
          <span className="absolute left-0 top-0 block max-w-full text-zinc-400/95">
            {LINE2.slice(0, i2)}
            <Cursor active={phase === "l2"} />
          </span>
        </p>
      </div>

      <div className="mt-8 border-t border-zinc-500/20 pt-6 text-left md:mt-10 md:pt-8">
        <p className="mb-4 font-code text-[0.65rem] uppercase tracking-[0.18em] text-zinc-500 sm:text-xs">
          Building & shipping
        </p>
        <ul className="flex flex-col gap-4 sm:gap-5">
          {PROJECTS.map((item) => (
            <li key={item.pkg}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block font-code text-sm text-zinc-200/95 transition-colors hover:text-zinc-50 sm:text-base md:text-lg"
              >
                <span className="text-zinc-100">{item.pkg}</span>
                <span className="mx-2 text-zinc-600">—</span>
                <span className="text-zinc-400">{item.description}</span>
                <span className="mt-1 block text-xs text-zinc-500 sm:text-sm md:text-base">
                  <span className="text-zinc-500">{item.label}</span>
                  <ExternalLinkIcon className="ml-1.5 inline-block size-3 shrink-0 opacity-50 transition-opacity group-hover:opacity-90 sm:size-3.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-code text-xs text-zinc-500 sm:text-sm md:text-base">
          …and more tools and experiments in the pipeline—follow{" "}
          <a
            href="https://github.com/farming-labs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 underline decoration-zinc-600 underline-offset-4 transition-colors hover:text-zinc-100"
          >
            @farming-labs
          </a>{" "}
          on GitHub for releases.
        </p>
        <p className="mt-10 font-code text-xs text-zinc-500 sm:text-sm">
          Built by{" "}
          <a
            href="https://github.com/Kinfe123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 underline decoration-zinc-600 underline-offset-4 transition-colors hover:text-zinc-100"
          >
            Kinfe123
          </a>
          .
        </p>
      </div>
    </div>
  );
}

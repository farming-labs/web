"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ExternalLinkIcon } from "lucide-react";

const LINE1 = "JS needs a dopamine boost—we already knew.";
const LINE2 = "So we just started fixing it for you.";

const CHAR_MS = 26;
const BETWEEN_MS = 520;

const AUTHOR_SOCIAL = {
  github: "https://github.com/Kinfe123",
  x: "https://x.com/KinfishT",
  email: "mailto:kinfetare83@gmail.com",
  website: "https://kinfish.dev"
} as const;

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
      description: "UI library",
      href: "https://farmui.com",
      label: "farmui.com",
    },
    {
      pkg: "@farming-labs/befter",
      description: "a lightweight hook on your server and client",
      href: "https://github.com/farming-labs/befter",
      label: "github.com/farming-labs/befter",
    },
  ];

function TypewriterCursor({ visible }: { visible: boolean }) {
  return (
    <span
      className={cn(
        "ml-0.5 inline-block h-[1.12em] w-[2px] min-w-[2px] translate-y-[0.05em] align-middle rounded-[1px]",
        "bg-zinc-100/85 shadow-[0_0_14px_rgba(255,255,255,0.35)]",
        visible
          ? "animate-typewriter-cursor-blink [animation-fill-mode:none]"
          : "pointer-events-none opacity-0",
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

  const lineClass =
    "font-code text-base leading-snug tracking-tight text-zinc-300/95 drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)] sm:text-lg md:text-xl";

  return (
    <div className="mt-6 max-w-4xl text-left" aria-live="polite">
      <h2 className="sr-only">
        {LINE1} {LINE2}
      </h2>
      <div className="flex flex-col gap-4 sm:gap-5">
        <p className={lineClass}>
          {LINE1.slice(0, i1)}
          <TypewriterCursor visible={phase === "l1"} />
        </p>
        <p className={cn(lineClass, "relative text-zinc-400/95")}>
          <span className="invisible block select-none" aria-hidden>
            {LINE2}
          </span>
          <span className="absolute left-0 top-0 block max-w-full text-zinc-400/95">
            {LINE2.slice(0, i2)}
            <TypewriterCursor visible={phase === "l2" || phase === "done"} />
          </span>
        </p>
      </div>
      <div className="mt-8 border-t border-zinc-500/70 pt-6 text-left md:mt-10 md:pt-8">
        <p className="mb-7 font-code text-[0.65rem] uppercase tracking-wide text-zinc-200 underline decoration-zinc-500 underline-offset-4 decoration-dashed sm:text-xs">
          fixing & shipping
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
                <span className="mx-2 text-zinc-400">—</span>
                <span className="text-zinc-400 uppercase text-sm">{item.description}</span>
                <span className="mt-1 block text-xs text-zinc-400 sm:text-[12px]">
                  <span className="text-zinc-500">{item.label}</span>
                  <ArrowUpRight className="ml-1.5 inline-block size-2 shrink-0 opacity-50 transition-opacity group-hover:opacity-90 sm:size-3.5" />
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
        <div className="mt-10 border-t border-zinc-500/20 pt-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-code text-xs text-zinc-500 sm:text-sm">
          <span
            className="inline-block h-4 w-[3px] shrink-0 self-center bg-zinc-500/45"
            aria-hidden
          />
          <span className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-zinc-400">
            <a
              href={AUTHOR_SOCIAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-100"
            >
              github
            </a>
            <span className="text-zinc-600/80" aria-hidden>
              ·
            </span>
            <a
              href={AUTHOR_SOCIAL.x}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-100"
            >
              twitter [ x ]
            </a>
            <span className="text-zinc-600/80" aria-hidden>
              ·
            </span>
            <a
              href={AUTHOR_SOCIAL.email}
              className="transition-colors hover:text-zinc-100"
            >
              email
            </a>
            <span className="text-zinc-600/80" aria-hidden>
              ·
            </span>
            <a
              href={AUTHOR_SOCIAL.website}
              className="transition-colors hover:text-zinc-100"
            >
             website 
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

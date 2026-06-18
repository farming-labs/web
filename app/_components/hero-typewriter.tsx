"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const LINE1 = "JS needs a dopamine boost—we already knew.";
const LINE2 = "So we just started fixing it for you.";

const CHAR_MS = 26;
const BETWEEN_MS = 520;

const AUTHOR_SOCIAL = {
  github: "https://github.com/Kinfe123",
  x: "https://x.com/KinfishT",
  email: "mailto:kinfetare83@gmail.com",
  website: "https://kinfish.dev",
} as const;

const PROJECTS: {
  pkg: string;
  description: string;
  href: string;
  label: string;
}[] = [
  {
    pkg: "@farmjs/core",
    description: "meta-framework that is performant with intuitive api and DX",
    href: "https://farmjs.dev",
    label: "farmjs.dev",
  },
  {
    pkg: "@farming-labs/docs",
    description: "Docs framework",
    href: "https://docs.farming-labs.dev",
    label: "docs.farming-labs.dev",
  },
  {
    pkg: "@farming-labs/orm",
    description: "Unified DSL Schema. Many Output",
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
    "font-code text-sm leading-snug tracking-tight text-zinc-300/95 drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)] sm:text-base md:text-lg";

  return (
    <div className="mt-4 max-w-5xl text-left sm:mt-5" aria-live="polite">
      <h2 className="sr-only">
        {LINE1} {LINE2}
      </h2>
      <div className="flex flex-col gap-2 sm:gap-2.5">
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
      <div className="mt-4 border-t border-zinc-500/70 pt-4 text-left sm:mt-5 sm:pt-5 md:mt-6 md:pt-6">
        <ul className="grid grid-cols-1 gap-2 sm:gap-2.5 md:gap-3">
          {PROJECTS.map((item) => (
            <li key={item.pkg}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block font-code text-[0.72rem] leading-snug text-zinc-200/95 transition-colors hover:text-zinc-50 sm:text-xs md:text-sm"
              >
                <span className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5 sm:gap-x-2">
                  <span className="break-all text-zinc-100 sm:break-normal">
                    {item.pkg}
                  </span>
                  <span className="hidden shrink-0 text-zinc-400 sm:inline">
                    —
                  </span>
                  <span className="hidden min-w-0 text-[0.68rem] uppercase text-zinc-400 sm:inline md:text-xs">
                    {item.description}
                  </span>
                </span>
                <span className="mt-0.5 hidden text-[11px] text-zinc-400 sm:block">
                  <span className="text-zinc-500">{item.label}</span>
                  <ArrowUpRight className="ml-1.5 inline-block size-2 shrink-0 opacity-50 transition-opacity group-hover:opacity-90 sm:size-3.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 max-w-2xl font-code text-[0.68rem] leading-snug text-zinc-500 sm:mt-5 sm:text-xs md:text-sm">
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
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-zinc-500/20 pt-4 font-code text-[0.68rem] text-zinc-500 sm:mt-5 sm:text-xs">
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
              href={AUTHOR_SOCIAL.website}
              className="transition-colors hover:text-zinc-100"
            >
              website
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
          </span>
        </div>
      </div>
    </div>
  );
}

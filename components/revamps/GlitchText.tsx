"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FC,
} from "react";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
  children: string;
  speed?: number;
  enableShadows?: boolean;
  className?: string;
  /** Seconds between glitch bursts when not hovered */
  autoIntervalSec?: number;
  /** Duration of each auto burst (seconds) */
  autoBurstSec?: number;
}

interface CustomCSSProperties extends CSSProperties {
  "--after-duration"?: string;
  "--before-duration"?: string;
  "--after-shadow"?: string;
  "--before-shadow"?: string;
}

const GlitchText: FC<GlitchTextProps> = ({
  children,
  speed = 0.5,
  enableShadows = true,
  className = "",
  autoIntervalSec = 10,
  autoBurstSec = 2.2,
}) => {
  const [hovered, setHovered] = useState(false);
  const [burst, setBurst] = useState(false);
  const hoveredRef = useRef(false);

  useEffect(() => {
    hoveredRef.current = hovered;
  }, [hovered]);

  useEffect(() => {
    const intervalMs = Math.max(3, autoIntervalSec) * 1000;
    const burstMs = Math.max(0.8, autoBurstSec) * 1000;

    const tick = () => {
      if (hoveredRef.current) return;
      setBurst(true);
      window.setTimeout(() => setBurst(false), burstMs);
    };

    const id = window.setInterval(tick, intervalMs);
    return () => window.clearInterval(id);
  }, [autoIntervalSec, autoBurstSec]);

  const active = hovered || burst;

  const inlineStyles: CustomCSSProperties = {
    "--after-duration": `${speed * 3}s`,
    "--before-duration": `${speed * 2}s`,
    "--after-shadow": enableShadows ? "3px 0 rgba(255,255,255,0.95)" : "none",
    "--before-shadow": enableShadows ? "-3px 0 rgba(0,0,0,0.92)" : "none",
  };

  const baseClasses =
    "relative inline-block max-w-full select-none whitespace-nowrap font-pixel uppercase tracking-tight text-zinc-100";

  const glitchLayers = active
    ? "after:content-[attr(data-text)] after:pointer-events-none after:absolute after:left-[3px] after:top-0 after:z-0 after:whitespace-nowrap after:text-zinc-100 after:bg-transparent after:overflow-hidden after:[clip-path:inset(0_0_0_0)] after:[text-shadow:var(--after-shadow)] after:animate-glitch-after " +
      "before:content-[attr(data-text)] before:pointer-events-none before:absolute before:left-[-3px] before:top-0 before:z-0 before:whitespace-nowrap before:text-zinc-100 before:bg-transparent before:overflow-hidden before:[clip-path:inset(0_0_0_0)] before:[text-shadow:var(--before-shadow)] before:animate-glitch-before"
    : "after:content-none before:content-none";

  return (
    <div
      style={inlineStyles}
      data-text={children}
      className={cn(baseClasses, glitchLayers, className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="relative z-[1] whitespace-nowrap">{children}</span>
    </div>
  );
};

export default GlitchText;

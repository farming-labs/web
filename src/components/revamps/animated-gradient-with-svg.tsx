"use client";

import React, { useId, useMemo, useRef } from "react";

import { cn } from "@/lib/utils";
import { useDimensions } from "@/hooks/use-debounced-dimensions";

interface AnimatedGradientProps {
  colors: string[];
  speed?: number;
  blur?: "light" | "medium" | "heavy";
}

const hashSeed = (value: string) => {
  let hash = 2166136261;

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
};

const createSeededRandom = (seed: number) => {
  let state = seed;

  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
};

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  colors,
  speed = 5,
  blur = "light",
}) => {
  const gradientId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const dimensions = useDimensions(containerRef);

  const circleSize = useMemo(
    () => Math.max(dimensions.width, dimensions.height),
    [dimensions.width, dimensions.height],
  );

  const gradientMotion = useMemo(
    () =>
      colors.map((_, index) => {
        const random = createSeededRandom(hashSeed(`${gradientId}:${index}`));

        return {
          top: `${random() * 50}%`,
          left: `${random() * 50}%`,
          tx1: random() - 0.5,
          ty1: random() - 0.5,
          tx2: random() - 0.5,
          ty2: random() - 0.5,
          tx3: random() - 0.5,
          ty3: random() - 0.5,
          tx4: random() - 0.5,
          ty4: random() - 0.5,
          widthScale: Math.floor(random() * 2) + 0.5,
          heightScale: Math.floor(random() * 2) + 0.5,
        };
      }),
    [colors, gradientId],
  );

  const blurClass =
    blur === "light"
      ? "blur-2xl"
      : blur === "medium"
        ? "blur-3xl"
        : "blur-[100px]";

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div className={cn(`absolute inset-0`, blurClass)}>
        {colors.map((color, index) => {
          const motion = gradientMotion[index];

          return (
            <svg
              key={index}
              className="absolute animate-background-gradient"
              opacity={0.6}
              suppressHydrationWarning
              style={
                {
                  top: motion.top,
                  left: motion.left,
                  "--background-gradient-speed": `${1 / speed}s`,
                  "--tx-1": motion.tx1,
                  "--ty-1": motion.ty1,
                  "--tx-2": motion.tx2,
                  "--ty-2": motion.ty2,
                  "--tx-3": motion.tx3,
                  "--ty-3": motion.ty3,
                  "--tx-4": motion.tx4,
                  "--ty-4": motion.ty4,
                } as React.CSSProperties
              }
              width={circleSize * motion.widthScale}
              height={circleSize * motion.heightScale}
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="50" fill={color} />
            </svg>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedGradient;

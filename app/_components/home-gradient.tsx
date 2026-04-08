"use client";

import Grainient from "@/components/revamps/Grainient";
import { HeroTypewriter } from "@/app/_components/hero-typewriter";

export default function HomeGradient() {
  return (
    <div className="relative w-full flex-1">
      <div className="relative min-h-[100dvh] w-full">
        <div className="absolute inset-0 z-0">
          <Grainient
          //  color1="#3D3D3D"
          color1="#7C7C7C"
           color2="#0A0A0A"
           color3="#000000"
            // color1="#7C7C7C"
            // color2="#181818"
            // color3="#050505"
            timeSpeed={0.2}
            colorBalance={0.02}
            warpStrength={0.8}
            warpFrequency={4}
            warpSpeed={1.4}
            warpAmplitude={55}
            blendAngle={-12}
            blendSoftness={0.14}
            rotationAmount={240}
            noiseScale={1.4}
            grainAmount={0.08}
            grainScale={2.2}
            grainAnimated={false}
            contrast={1.02}
            gamma={1.12}
            saturation={0}
            centerX={0}
            centerY={0}
            zoom={0.95}
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-black/62 via-black/42 to-black/68"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_85%_65%_at_50%_32%,transparent_8%,rgba(0,0,0,0.62)_100%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-black/18"
          aria-hidden
        />

        <div className="relative z-10 flex min-h-[100dvh] flex-col px-6 pb-20 pt-[12vh] text-left md:px-12 md:pb-24 md:pt-[14vh] lg:px-16">
          <div className="pointer-events-auto w-full max-w-3xl text-left lg:max-w-4xl">
            <h1 className="font-pixel text-3xl uppercase leading-[1.05] tracking-tight text-zinc-100/85 sm:text-4xl md:text-5xl drop-shadow-[0_4px_32px_rgba(0,0,0,0.55)]">
              Farming Labs
            </h1>
            {/* <div
              className="mt-5 h-px w-full max-w-md bg-gradient-to-r from-zinc-500/55 via-zinc-400/25 to-transparent"
              aria-hidden
            /> */}
            <HeroTypewriter />
          </div>
        </div>
      </div>
    </div>
  );
}

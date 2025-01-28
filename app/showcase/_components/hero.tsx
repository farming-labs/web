"use client";
import { cn } from "@/lib/utils";
import PixelTrail from "@/components/revamps/pixel-trail";
import AnimatedGradient from "@/components/revamps/animated-gradient-with-svg";
import { FlickeringGrid } from "@/components/flickering-partilce";
import { StarBorder } from "@/components/two-border-btn";
import { CommandIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const cardContent = {
  title: "Lorem ipsum dolor",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, hic ipsum! Qui dicta debitis aliquid quo molestias explicabo iure!",
};
const CardBody = ({ className = "p-4" }) => (
  <div className={cn("text-start mb-7 space-y-5  pt-10", className)}>
    <h2 className="font-pixel text-3xl sm:text-4xl md:text-6xl uppercase">
      Showcasing - Farming Labs
    </h2>
    <p className="text-gray-700 max-w-xl mr-auto dark:text-gray-300">
      {cardContent.description}
    </p>
  </div>
);
const ShoowcaseHeroSection = () => {
  const Ellipses = () => {
    const sharedClasses =
      "rounded-full outline outline-8 dark:outline-gray-950 sm:my-6 md:my-8 size-1 my-4 outline-gray-50 bg-zinc-400";
    return (
      <div className="absolute z-0 grid h-full w-full items-center gap-8 lg:grid-cols-2">
        <section className="absolute z-0 grid h-full w-full grid-cols-2 place-content-between">
          <div className={`${sharedClasses} -mx-[2.5px]`}></div>
          <div className={`${sharedClasses} -mx-[2px] place-self-end`}></div>
          <div className={`${sharedClasses} -mx-[2.5px]`}></div>
          <div className={`${sharedClasses} -mx-[2px] place-self-end`}></div>
        </section>
      </div>
    );
  };
  const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="relative mx-auto max-w-[68rem] w-full  sm:px-6 md:px-8">
      <div className="absolute left-0 top-4 -z-0 h-px w-full bg-zinc-400 dark:bg-zinc-700 sm:top-6 md:top-8"></div>
      <div className="absolute bottom-4 left-0 z-0 h-px w-full bg-zinc-400 dark:bg-zinc-700 sm:bottom-6 md:bottom-8"></div>
      <div className="relative w-full border-x border-zinc-400 dark:border-zinc-700">
        <Ellipses />
        <div className="relative z-20  mx-auto py-8">{children}</div>
      </div>
    </div>
  );
  return (
    <div className="min-h-full flex justify-start items-start mt-10">
      <Container>
        <div className="relative p-3 w-full flex flex-col gap-2 center">
          <CardBody />

          <div className="absolute inset-0 z-0">
            <AnimatedGradient
              colors={["#27272a", "#1f2937", "#262626"]}
              speed={0.05}
              blur="medium"
            />
            <FlickeringGrid
              className="z-0 w-full h-full absolute inset-0 size-full"
              squareSize={4}
              gridGap={6}
              color="#6B7280"
              maxOpacity={0.5}
              flickerChance={0.1}
            />
            <PixelTrail
              pixelSize={24}
              fadeDuration={500}
              pixelClassName="bg-white"
            />
          </div>
          <div className="p-3 flex relative z-20 justify-start items-center gap-2">
            <Link href="/docs/introduction">
              <StarBorder>
                <CommandIcon className="w-4 h-4 mr-1.5" />
                Go to Docs
              </StarBorder>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ShoowcaseHeroSection;

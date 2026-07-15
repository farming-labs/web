import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GeistSans } from "geist/font/sans";
import { ArrowDown, GithubIcon } from "lucide-react";

import {
  AssetPanel,
  AssetSection,
  CornerTicks,
} from "./_components/brand-assets";

export const metadata: Metadata = {
  title: "Brand Assets | Farming Labs",
  description:
    "Download the official Farming Labs logo, wordmark, banner, and avatar assets.",
  openGraph: {
    images: [],
  },
  twitter: {
    images: [],
  },
};

const logoDownloads = {
  dark: [
    {
      format: "SVG" as const,
      href: "/brand/logo-dark.svg",
      label: "Download the Farming Labs logo for dark backgrounds as SVG",
    },
    {
      format: "PNG" as const,
      href: "/brand/logo-dark.png",
      label: "Download the Farming Labs logo for dark backgrounds as PNG",
    },
  ],
  light: [
    {
      format: "SVG" as const,
      href: "/brand/logo-light.svg",
      label: "Download the Farming Labs logo for light backgrounds as SVG",
    },
    {
      format: "PNG" as const,
      href: "/brand/logo-light.png",
      label: "Download the Farming Labs logo for light backgrounds as PNG",
    },
  ],
};

const wordmarkDownloads = {
  dark: [
    {
      format: "SVG" as const,
      href: "/brand/logo-wordmark-dark.svg",
      label:
        "Download the Farming Labs logo with wordmark for dark backgrounds as SVG",
    },
    {
      format: "PNG" as const,
      href: "/brand/logo-wordmark-dark.png",
      label:
        "Download the Farming Labs logo with wordmark for dark backgrounds as PNG",
    },
  ],
  light: [
    {
      format: "SVG" as const,
      href: "/brand/logo-wordmark-light.svg",
      label:
        "Download the Farming Labs logo with wordmark for light backgrounds as SVG",
    },
    {
      format: "PNG" as const,
      href: "/brand/logo-wordmark-light.png",
      label:
        "Download the Farming Labs logo with wordmark for light backgrounds as PNG",
    },
  ],
};

const bannerDownloads = {
  dark: [
    {
      format: "SVG" as const,
      href: "/brand/banner-dark.svg",
      label: "Download the Farming Labs dark banner as SVG",
    },
    {
      format: "PNG" as const,
      href: "/brand/banner-dark.png",
      label: "Download the Farming Labs dark banner as PNG",
    },
  ],
  light: [
    {
      format: "SVG" as const,
      href: "/brand/banner-light.svg",
      label: "Download the Farming Labs light banner as SVG",
    },
    {
      format: "PNG" as const,
      href: "/brand/banner-light.png",
      label: "Download the Farming Labs light banner as PNG",
    },
  ],
};

const avatarDownloads = {
  dark: [
    {
      format: "SVG" as const,
      href: "/brand/avatar-dark.svg",
      label: "Download the Farming Labs dark avatar as SVG",
    },
    {
      format: "PNG" as const,
      href: "/brand/avatar-dark.png",
      label: "Download the Farming Labs dark avatar as PNG",
    },
  ],
  light: [
    {
      format: "SVG" as const,
      href: "/brand/avatar-light.svg",
      label: "Download the Farming Labs light avatar as SVG",
    },
    {
      format: "PNG" as const,
      href: "/brand/avatar-light.png",
      label: "Download the Farming Labs light avatar as PNG",
    },
  ],
};

export default function BrandPage() {
  return (
    <div
      className={`${GeistSans.className} relative isolate min-h-screen overflow-hidden bg-[#080808] tracking-normal text-[#f5f5f2]`}
    >
      <div className="relative mx-auto min-h-screen w-full max-w-[1320px] border-x border-white/15 bg-[#080808]">
        <header className="flex h-16 items-center justify-between border-b border-white/15 px-5 sm:px-7 lg:px-9">
          <Link
            className="group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5f5f2] focus-visible:ring-offset-4 focus-visible:ring-offset-[#080808]"
            href="/"
          >
            <Image
              alt=""
              aria-hidden="true"
              className="h-[19px] w-auto"
              height={152}
              priority
              src="/brand/logo-dark.svg"
              width={161}
            />
            <span className="font-code text-[11px] uppercase tracking-[0.02em] text-white/72 transition-colors duration-150 group-hover:text-white">
              Farming-Labs
            </span>
          </Link>
          <span className="font-code text-[10px] uppercase tracking-[0.02em] text-white/38">
            Brand 
          </span>
        </header>

        <main>
          <section className="relative grid min-h-[28rem] border-b border-white/15 lg:grid-cols-[13rem_1fr]">
            <CornerTicks />
            <div className="hidden border-r border-white/15 px-7 py-9 lg:block">
              <p className="font-code text-[10px] uppercase tracking-[0.04em] text-white/40">
                Identity system
              </p>
              <p className="mt-3 font-code text-[10px] uppercase tracking-[0.04em] text-white/72">
                16 assets
              </p>
            </div>

            <div className="relative flex flex-col justify-end overflow-hidden px-5 pb-12 pt-24 sm:px-8 sm:pb-16 lg:px-14 lg:pb-20">
              <div
                aria-hidden="true"
                className="absolute -right-6 top-8 select-none font-code text-[clamp(6rem,20vw,17rem)] font-medium leading-none tracking-[-0.11em] text-white/[0.025]"
              >
                FL
              </div>
              <p className="relative mb-5 font-code text-[10px] uppercase tracking-[0.04em] text-white/72">
                @farming-labs/*
              </p>
              <h1 className="relative max-w-4xl text-balance text-[clamp(2.8rem,8vw,6.9rem)] font-medium leading-[0.92] tracking-[-0.065em] text-white">
                Brand assets,
                <br />
                ready to ship.
              </h1>
              <div className="relative mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-xl text-sm leading-6 text-white/52 sm:text-base sm:leading-7">
                  Official logos, wordmarks, banners, and avatars for the Farming
                  Labs ecosystem. SVG first, PNG where it matters.
                </p>
                <a
                  className="inline-flex min-h-11 shrink-0 items-center gap-2 self-start border-b border-dotted border-white/40 font-code text-[11px] uppercase tracking-[0.01em] text-white/80 transition-[border-color,color] duration-150 hover:border-white hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5f5f2] focus-visible:ring-offset-4 focus-visible:ring-offset-[#080808] sm:self-auto"
                  href="#logo"
                >
                  Browse assets
                  <ArrowDown aria-hidden="true" className="size-3.5" />
                </a>
              </div>
            </div>
          </section>

          <AssetSection
            description="Use the standalone logo when the product name already appears nearby or the available space is compact."
            eyebrow="Logo only"
            id="logo"
            index="01"
            title="The core Farming Labs logo"
          >
            <div className="grid gap-3 md:grid-cols-2">
              <AssetPanel
                alt="Cream Farming Labs logo for dark backgrounds"
                background="dark"
                downloads={logoDownloads.dark}
                label="For dark backgrounds"
                src="/brand/logo-dark.svg"
                width={161}
                height={152}
              />
              <AssetPanel
                alt="Black Farming Labs logo for light backgrounds"
                background="light"
                downloads={logoDownloads.light}
                label="For light backgrounds"
                src="/brand/logo-light.svg"
                width={161}
                height={152}
              />
            </div>
          </AssetSection>

          <AssetSection
            description="Choose the complete lockup for headers, launch graphics, partner pages, and any surface that needs the full name."
            eyebrow="Logo + wordmark"
            id="logo-wordmark"
            index="02"
            title="Logo and wordmark, locked together"
          >
            <div className="grid gap-3">
              <AssetPanel
                alt="Cream Farming Labs logo and horizontal wordmark for dark backgrounds"
                assetClassName="max-h-24 w-auto max-w-[88%]"
                background="dark"
                downloads={wordmarkDownloads.dark}
                heightClassName="min-h-60 sm:min-h-72"
                label="For dark backgrounds"
                src="/brand/logo-wordmark-dark.svg"
                width={776}
                height={152}
              />
              <AssetPanel
                alt="Black Farming Labs logo and horizontal wordmark for light backgrounds"
                assetClassName="max-h-24 w-auto max-w-[88%]"
                background="light"
                downloads={wordmarkDownloads.light}
                heightClassName="min-h-60 sm:min-h-72"
                label="For light backgrounds"
                src="/brand/logo-wordmark-light.svg"
                width={776}
                height={152}
              />
            </div>
          </AssetSection>

          <AssetSection
            description="Wide, high-contrast artwork for launch pages, social previews, repository READMEs, and organization headers."
            eyebrow="Banner"
            id="banner"
            index="03"
            title="A flexible wide-format banner"
          >
            <div className="grid gap-3">
              <AssetPanel
                alt="Farming Labs banner with a cream logo and custom wordmark on black"
                assetClassName="w-full max-w-none"
                background="dark"
                downloads={bannerDownloads.dark}
                heightClassName="min-h-0"
                label="Dark · 1600 × 640"
                src="/brand/banner-dark.svg"
                width={1600}
                height={640}
              />
              <AssetPanel
                alt="Farming Labs banner with a black logo and custom wordmark on cream"
                assetClassName="w-full max-w-none"
                background="light"
                downloads={bannerDownloads.light}
                heightClassName="min-h-0"
                label="Light · 1600 × 640"
                src="/brand/banner-light.svg"
                width={1600}
                height={640}
              />
            </div>
          </AssetSection>

          <AssetSection
            description="Square profile assets with enough breathing room to stay legible at small sizes across products and communities."
            eyebrow="Avatar"
            id="avatar"
            index="04"
            title="The logo, framed for profile use"
          >
            <div className="grid gap-3 md:grid-cols-2">
              <AssetPanel
                alt="Square Farming Labs avatar with a cream logo on black"
                assetClassName="w-full max-w-[22rem]"
                background="dark"
                downloads={avatarDownloads.dark}
                heightClassName="min-h-0"
                label="Dark · 512 × 512"
                src="/brand/avatar-dark.svg"
                width={512}
                height={512}
              />
              <AssetPanel
                alt="Square Farming Labs avatar with a black logo on cream"
                assetClassName="w-full max-w-[22rem]"
                background="light"
                downloads={avatarDownloads.light}
                heightClassName="min-h-0"
                label="Light · 512 × 512"
                src="/brand/avatar-light.svg"
                width={512}
                height={512}
              />
            </div>
          </AssetSection>
        </main>

        <footer className="flex min-h-20 items-center justify-between gap-3 px-5 py-5 font-code text-[10px] uppercase tracking-[0.02em] text-white/38 sm:px-8">
          <span>Farming Labs brand assets</span>
          <a
            aria-label="Farming Labs on GitHub"
            className="inline-flex size-10 items-center justify-center border border-white/15 text-white/58 transition-[border-color,color,background-color] duration-150 hover:border-white/40 hover:bg-white/[0.04] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5f5f2] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
            href="https://github.com/farming-labs"
            rel="noreferrer"
            target="_blank"
          >
            <GithubIcon aria-hidden="true" className="size-4" strokeWidth={1.8} />
          </a>
        </footer>
      </div>
    </div>
  );
}

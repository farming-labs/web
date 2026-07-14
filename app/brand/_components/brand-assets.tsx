import Image from "next/image";
import { Download } from "lucide-react";

import { CopyAssetButton } from "./copy-asset-button";

type DownloadAsset = {
  format: "SVG" | "PNG";
  href: string;
  label: string;
};

type AssetPanelProps = {
  alt: string;
  assetClassName?: string;
  background: "dark" | "light";
  downloads: DownloadAsset[];
  heightClassName?: string;
  label: string;
  src: string;
  width: number;
  height: number;
};

const focusStyles =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5f5f2] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]";

export function CornerTicks() {
  const horizontal = "absolute h-px w-3 bg-white/60";
  const vertical = "absolute h-3 w-px bg-white/60";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-20"
    >
      <span className={`${horizontal} left-2 top-2`} />
      <span className={`${vertical} left-2 top-2`} />
      <span className={`${horizontal} right-2 top-2`} />
      <span className={`${vertical} right-2 top-2`} />
      <span className={`${horizontal} bottom-2 left-2`} />
      <span className={`${vertical} bottom-2 left-2`} />
      <span className={`${horizontal} bottom-2 right-2`} />
      <span className={`${vertical} bottom-2 right-2`} />
    </div>
  );
}

export function DownloadLink({
  asset,
  compact = false,
}: {
  asset: DownloadAsset;
  compact?: boolean;
}) {
  return (
    <a
      aria-label={asset.label}
      className={`${focusStyles} inline-flex min-h-10 items-center justify-center gap-2 border border-white/20 bg-white px-3 font-code text-[11px] font-medium uppercase tracking-[0.01em] text-black transition-[background-color,color,border-color] duration-150 hover:border-white hover:bg-white/85 sm:px-4 ${
        compact ? "min-w-20" : "min-w-24"
      }`}
      download
      href={asset.href}
    >
      <Download aria-hidden="true" className="size-3.5" strokeWidth={1.8} />
      {asset.format}
    </a>
  );
}

export function AssetPanel({
  alt,
  assetClassName = "max-h-28 w-auto max-w-[72%]",
  background,
  downloads,
  heightClassName = "min-h-64",
  label,
  src,
  width,
  height,
}: AssetPanelProps) {
  const isDark = background === "dark";

  return (
    <article className="relative flex min-w-0 flex-col border border-white/15 bg-[#080808]">
      <CornerTicks />
      <div
        className={`relative flex ${heightClassName} items-center justify-center overflow-hidden px-6 py-14 ${
          isDark ? "bg-[#080808]" : "bg-[#f2f1ed]"
        }`}
      >
        <span
          className={`absolute left-5 top-4 font-code text-[10px] uppercase tracking-[0.04em] ${
            isDark ? "text-white/45" : "text-black/45"
          }`}
        >
          {label}
        </span>
        <Image
          alt={alt}
          className={`h-auto object-contain ${assetClassName}`}
          height={height}
          priority={false}
          src={src}
          width={width}
        />
      </div>

      <div className="relative z-10 flex min-h-16 flex-col gap-3 border-t border-white/15 bg-[#080808] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <span className="min-w-0 truncate font-code text-[11px] tracking-normal text-white/55">
          {downloads[0]?.href.replace("/brand/", "")}
        </span>
        <div className="flex flex-wrap gap-2 sm:justify-end">
          {downloads.map((asset) => (
            <div className="inline-flex shrink-0" key={asset.href}>
              <DownloadLink asset={asset} compact />
              <CopyAssetButton
                format={asset.format}
                href={asset.href}
                label={asset.label}
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export function AssetSection({
  children,
  description,
  eyebrow,
  id,
  index,
  title,
}: {
  children: React.ReactNode;
  description: string;
  eyebrow: string;
  id: string;
  index: string;
  title: string;
}) {
  const headingId = `${id}-heading`;

  return (
    <section
      aria-labelledby={headingId}
      className="scroll-mt-6 border-b border-white/15"
      id={id}
    >
      <div className="grid border-b border-white/15 lg:grid-cols-[13rem_1fr]">
        <div className="flex items-center gap-3 border-b border-white/15 px-5 py-4 lg:border-b-0 lg:border-r lg:px-7">
          <span className="font-code text-[10px] tracking-[0.02em] text-white/80">
            {index}
          </span>
          <span className="font-code text-[10px] uppercase tracking-[0.04em] text-white/45">
            {eyebrow}
          </span>
        </div>
        <div className="grid gap-3 px-5 py-6 md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.72fr)] md:items-end md:px-8 lg:px-10">
          <h2
            className="text-balance text-2xl font-medium tracking-[-0.035em] text-white sm:text-3xl"
            id={headingId}
          >
            {title}
          </h2>
          <p className="max-w-xl text-sm leading-6 text-white/52 md:justify-self-end">
            {description}
          </p>
        </div>
      </div>
      <div className="p-3 sm:p-5 lg:p-7">{children}</div>
    </section>
  );
}

export type { DownloadAsset };

import { ComponentProps } from "react";
import Copy from "./copy";
import { cn } from "@/lib/utils";
const Icon = ({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...rest}
      className={cn(
        "dark:border-zinc-200/20 border-zinc-700/80 size-3 absolute",
        className,
      )}
    />
  );
};
export default function Pre({
  children,
  raw,
  ...rest
}: ComponentProps<"pre"> & { raw?: string }) {
  return (
    <div className="my-5  relative">
      {/* <Icon className="-top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-sm" />
      <Icon className="-top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-sm" />
      <Icon className="-bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-sm" />
      <Icon className="-bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-sm" /> */}
      <div className="absolute top-3 right-2.5 z-10 sm:block hidden">
        <Copy content={raw!} />
      </div>
      <div className="relative rounded-none">
        <pre className="rounded-none">{children}</pre>
      </div>
    </div>
  );
}

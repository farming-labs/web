import { ComponentProps } from "react";
import Copy from "./copy";
import { cn } from "@/lib/utils";
const Icon = ({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...rest}
      className={cn(
        "dark:border-zinc-200/10 border-zinc-700/80 size-3 absolute",
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
      <Icon className="top-[0.2px] z-20 -left-0.5 border-l-2 border-t-2 rounded-tl-lg" />
      <Icon className="top-[0.2px] z-20 -right-0.5 border-r-2 border-t-2 rounded-tr-lg" />
      <Icon className="-bottom-[0.2px] z-20 -left-0.5 border-l-2 border-b-2 rounded-bl-lg" />
      <Icon className="-bottom-[0.2px] z-20 -right-0.5 border-r-2 border-b-2 rounded-br-lg" />
      <div className="absolute top-3 right-2.5 z-10 sm:block hidden">
        <Copy content={raw!} />
      </div>
      <div className="relative  rounded-none">
        <pre className="" {...rest}>
          {children}
        </pre>
      </div>
    </div>
  );
}

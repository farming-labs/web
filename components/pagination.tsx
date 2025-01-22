import { getPreviousNext } from "@/lib/markdown";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
const Icon = ({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...rest}
      className={cn(
        "dark:border-zinc-200/40 border-zinc-700/80 size-4 absolute",
        className,
      )}
    />
  );
};
export default function Pagination({ pathname }: { pathname: string }) {
  const res = getPreviousNext(pathname);

  return (
    <div className="grid mb-10 grid-cols-2 flex-grow sm:py-10 py-7 gap-3">
      <div>
        {res.prev && (
          <div className="px-4 hover:dark:bg-zinc-900 py-3 w-full  flex flex-col  border-2 border-zinc-100 dark:border-zinc-700/20 relative rounded-sm">
            <Link
              className="no-underline border-none px-4 w-full hover:bg-transparent flex flex-col !items-start"
              href={`/docs${res.prev.href}`}
            >
              <Icon className="-top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-sm" />
              <Icon className="-top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-sm" />
              <Icon className="-bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-sm" />
              <Icon className="-bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-sm" />
              <span className="flex items-center text-muted-foreground text-xs">
                <ChevronLeftIcon className="w-[1rem] h-[1rem] mr-1" />
                Previous
              </span>

              <span className="mt-1 mr-1">{res.prev.title}</span>
            </Link>
          </div>
        )}
      </div>
      <div>
        {res.next && (
          <div className="px-4 hover:dark:bg-zinc-900 py-3 w-full  flex flex-col  border-2 border-zinc-100 dark:border-zinc-700/20 relative rounded-sm">
            <Link
              className="no-underline border-none px-4  w-full hover:bg-transparent flex flex-col !items-start"
              href={`/docs${res.next.href}`}
            >
              <Icon className="-top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-sm" />
              <Icon className="-top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-sm" />
              <Icon className="-bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-sm" />
              <Icon className="-bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-sm" />
              <span className="flex items-center text-muted-foreground text-xs">
                <ChevronRightIcon className="w-[1rem] h-[1rem] mr-1" />
                Next
              </span>

              <span className="mt-1 mr-1">{res.next.title}</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

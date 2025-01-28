import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo, NavMenu } from "./navbar";
import { Button } from "./ui/button";
import { AlignLeftIcon } from "lucide-react";
import { FooterButtons } from "./footer";
import { DialogTitle } from "./ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import DocsMenu from "./docs-menu";
import { cn } from "@/lib/utils";
const Icon = ({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...rest}
      className={cn(
        "dark:border-zinc-200/20 border-zinc-700/80 size-6 absolute",
        className,
      )}
    />
  );
};
export function Leftbar() {
  return (
    <aside className="md:flex bg-gradient-to-tr from-background via-backgroud/50 to-zinc-900/50 mt-5 sticky top-16 h-[80vh] hidden flex-[1.5] flex-col  overflow-y-auto">
      <div className="px-4 py-4 border-2 border-zinc-100 dark:border-zinc-700/20 relative min-w-[238px]  h-full rounded-sm">
        <Icon className="-top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-sm" />
        <Icon className="-top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-sm" />
        <Icon className="-bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-sm" />
        <Icon className="-bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-sm" />
        <ScrollArea className="py-4">
          <DocsMenu />
        </ScrollArea>
      </div>
    </aside>
  );
}

export function SheetLeftbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden flex">
          <AlignLeftIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4 px-0" side="left">
        <DialogTitle className="sr-only">Menu</DialogTitle>
        <SheetHeader>
          <SheetClose className="px-5" asChild>
            <Logo />
          </SheetClose>
        </SheetHeader>
        <div className="flex flex-col gap-4 overflow-y-auto">
          <div className="flex flex-col gap-2.5 mt-3 mx-2 px-5">
            <NavMenu isSheet />
          </div>
          <div className="mx-2 px-5">
            <DocsMenu isSheet />
          </div>
          <div className="p-6 pb-4 flex gap-2.5">
            <FooterButtons />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

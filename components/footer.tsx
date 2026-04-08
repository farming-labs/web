import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { CommandIcon, HeartIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-20 mt-auto flex h-16 w-full shrink-0 border-t bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
        <div className="flex items-center gap-3">
          <CommandIcon className="sm:block hidden w-5 h-5 text-muted-foreground" />
          <p className="text-center">
            Build by{" "}
            <Link className="px-1" href="https://github.com/Kinfe123">
              kinfish
            </Link>
            . The source code is available on{" "}
            <Link
              className="px-1 underline underline-offset-2"
              href="https://github.com/farming-labs"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
        <div className="gap-4 items-center hidden md:flex">
          <FooterButtons />
        </div>
      </div>
    </footer>
  );
}

export function FooterButtons() {
  return (
    <>
      <Link
        href="https://github.com/sponsors/Kinfe123"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <HeartIcon className="h-4 w-4 mr-2 text-red-600 fill-current" />
        Sponsor
      </Link>
    </>
  );
}

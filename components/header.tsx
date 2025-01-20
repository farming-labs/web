import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PartyPopper } from "lucide-react";
import Search from "./search";
import { buttonVariants } from "./ui/button";
import { GithubIcon, TwitterIcon, CommandIcon } from "lucide-react";
import { ModeToggle } from "@/components/theme-toggle";
export function Header() {
  return (
    <>
      <div className="sticky top-0 left-0 right-0 z-50 bg-white dark:bg-black/5">
        <div className="flex items-center justify-center w-full flex-col">
          <div
            className={`
                        flex items-center justify-between
                        bg-gradient-to-b from-white/90 via-gray-50/90 to-white/90
                        dark:from-zinc-900/20 dark:via-zinc-800/50 dark:to-zinc-900/90
                        shadow-[0_2px_20px_-2px_rgba(0,0,0,0.1)]
                        backdrop-blur-md
                        border-x border-b
                        border-[rgba(230,230,230,0.7)] dark:border-[rgba(70,70,70,0.4)]
                        w-full sm:min-w-[800px] sm:max-w-5xl
                        rounded-b-none
                        px-4 py-2.5
                        relative
                        transition-all duration-300 ease-in-out
                    `}
          >
            <div className="relative z-10 flex items-center justify-between w-full gap-2">
              {/* Logo Section with Navigation Links */}
              <div className="flex items-center gap-6">
                <Link href="/" className="flex items-center gap-2">
                  <span className="hidden sm:block font-semibold">
                    Farming Labs
                  </span>
                </Link>
                <span className="text-zinc-300 dark:text-zinc-700">|</span>
                {/* Desktop Navigation Links */}
                <div className="hidden sm:flex items-center gap-4">
                  <Link
                    href="/docs"
                    className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                  >
                    Docs
                  </Link>
                  <Link
                    href="/showcase"
                    className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                  >
                    Showcases
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-3">
                  <span className="text-zinc-300 dark:text-zinc-700">|</span>
                </div>
                <Search />
                <div className="flex ml-2.5 sm:ml-0">
                  <Link
                    href="https://github.com/nisabmohd/NexDocs"
                    className={buttonVariants({
                      variant: "ghost",
                      size: "icon",
                    })}
                  >
                    <GithubIcon className="h-[1.1rem] w-[1.1rem]" />
                  </Link>
                  <Link
                    href="#"
                    className={buttonVariants({
                      variant: "ghost",
                      size: "icon",
                    })}
                  >
                    <TwitterIcon className="h-[1.1rem] w-[1.1rem]" />
                  </Link>
                  <ModeToggle />
                </div>
              </div>
              <div className="flex sm:hidden items-center gap-4">
                <Link
                  href="/docs"
                  className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                >
                  Docs
                </Link>
                <Link
                  href="/showcase"
                  className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                >
                  Showcase
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

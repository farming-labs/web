// "use client";
// import { Menu } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import { ArrowUpRight } from "lucide-react";
// import { PartyPopper } from "lucide-react";
// import Search from "./search";
// import { buttonVariants } from "./ui/button";
// import { GithubIcon, TwitterIcon, CommandIcon } from "lucide-react";
// import { ModeToggle } from "@/components/theme-toggle";
// import { useState } from "react";
// import { cn } from "@/lib/utils";
// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   return (
//     <>
//       <div className="sticky top-0 left-0 right-0 z-50 bg-white dark:bg-black/5">
//         <div className="flex items-center justify-center w-full flex-col">
//           <div
//             className={`
//                         flex items-center justify-between
//                         bg-gradient-to-b from-white/90 via-gray-50/90 to-white/90
//                         dark:from-zinc-900/20 dark:via-zinc-800/50 dark:to-zinc-900/90
//                         shadow-[0_2px_20px_-2px_rgba(0,0,0,0.1)]
//                         backdrop-blur-md
//                         border-x border-b
//                         border-[rgba(230,230,230,0.7)] dark:border-[rgba(70,70,70,0.4)]
//                         w-full sm:min-w-[800px] sm:max-w-5xl
//                         rounded-b-none
//                         px-4 py-2.5
//                         relative
//                         transition-all duration-300 ease-in-out
//                     `}
//           >
//             <div className="relative z-10 flex items-center justify-between w-full gap-2">
//               {/* Logo Section with Navigation Links */}
//               <div className="flex items-center gap-6">
//                 <Link href="/" className="flex items-center gap-2">
//                   <span className="hidden sm:block font-semibold">
//                     Farming Labs
//                   </span>
//                 </Link>
//                 <span className="text-zinc-300 dark:text-zinc-700">|</span>
//                 {/* Desktop Navigation Links */}
//                 <div className="hidden sm:flex items-center gap-4">
//                   <Link
//                     href="/docs"
//                     className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
//                   >
//                     Docs
//                   </Link>
//                   <Link
//                     href="/showcase"
//                     className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
//                   >
//                     Showcases
//                   </Link>
//                 </div>
//               </div>

//               <div className="flex items-center gap-2">
//                 <div className="hidden sm:flex items-center gap-3">
//                   <span className="text-zinc-300 dark:text-zinc-700">|</span>
//                 </div>
//                 <Search />
//                 <button
//                   onClick={() => setIsMenuOpen(!isMenuOpen)}
//                   className={buttonVariants({
//                     variant: "ghost",
//                     size: "icon",
//                   })}
//                 >
//                   <Menu className="h-[1.1rem] w-[1.1rem]" />
//                 </button>
//                 <div className="hidden sm:flex ml-2.5 sm:ml-0">
//                   <Link
//                     href="https://github.com/nisabmohd/NexDocs"
//                     className={buttonVariants({
//                       variant: "ghost",
//                       size: "icon",
//                     })}
//                   >
//                     <GithubIcon className="h-[1.1rem] w-[1.1rem]" />
//                   </Link>
//                   <Link
//                     href="#"
//                     className={buttonVariants({
//                       variant: "ghost",
//                       size: "icon",
//                     })}
//                   >
//                     <TwitterIcon className="h-[1.1rem] w-[1.1rem]" />
//                   </Link>
//                   <ModeToggle />
//                 </div>
//               </div>

//               <div className="flex relative sm:hidden items-center gap-4">
//                 <div
//                   className={cn(
//                     "fixed inset-0 z-[99] bg-white dark:bg-zinc-950 transition-transform duration-300 ease-in-out transform md:hidden",
//                     isMenuOpen ? "translate-x-0" : "translate-x-full",
//                   )}
//                 >
//                   <div className="flex flex-col h-full p-4">
//                     <div className="flex justify-between items-center mb-8">
//                       <Link
//                         href="/"
//                         className="flex items-center gap-2"
//                         onClick={() => setIsMenuOpen(false)}
//                       >
//                         <span className="font-semibold">Farming Labs</span>
//                       </Link>
//                       <button
//                         onClick={() => setIsMenuOpen(false)}
//                         className={buttonVariants({
//                           variant: "ghost",
//                           size: "icon",
//                         })}
//                       >
//                         <Menu className="h-[1.1rem] w-[1.1rem]" />
//                       </button>
//                     </div>
//                     <nav className="flex flex-col gap-4">
//                       <Link
//                         href="/docs/introduction"
//                         className="text-lg text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
//                         onClick={() => setIsMenuOpen(false)}
//                       >
//                         Docs
//                       </Link>
//                       <Link
//                         href="/showcase"
//                         className="text-lg text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
//                         onClick={() => setIsMenuOpen(false)}
//                       >
//                         Showcases
//                       </Link>
//                     </nav>
//                     <div className="mt-auto flex items-center gap-4">
//                       <Link
//                         href="https://github.com/nisabmohd/NexDocs"
//                         className={buttonVariants({
//                           variant: "ghost",
//                           size: "icon",
//                         })}
//                       >
//                         <GithubIcon className="h-[1.1rem] w-[1.1rem]" />
//                       </Link>
//                       <Link
//                         href="#"
//                         className={buttonVariants({
//                           variant: "ghost",
//                           size: "icon",
//                         })}
//                       >
//                         <TwitterIcon className="h-[1.1rem] w-[1.1rem]" />
//                       </Link>
//                       <ModeToggle />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import { Menu, GithubIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { buttonVariants } from "./ui/button";
import { ModeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import Search from "./search";
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white dark:bg-black/5">
      <div className="flex items-center justify-center w-full">
        <div className="flex items-center justify-between w-full sm:min-w-[800px] sm:max-w-5xl px-4 py-2.5 bg-gradient-to-b from-white/90 via-gray-50/90 to-white/90 dark:from-zinc-900/20 dark:via-zinc-800/50 dark:to-zinc-900/90 shadow-[0_2px_20px_-2px_rgba(0,0,0,0.1)] backdrop-blur-md border-x border-b border-[rgba(230,230,230,0.7)] dark:border-[rgba(70,70,70,0.4)] rounded-b-none relative transition-all duration-300 ease-in-out">
          <div className="relative z-10 flex items-center justify-between w-full gap-2">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2">
                <span className="font-semibold">Farming Labs</span>
              </Link>
              <span className="ml-2 text-zinc-300 dark:text-zinc-700">|</span>
            </div>{" "}
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Search />
              <Link
                href="/docs/introduction"
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
              <div className="flex items-center gap-3">
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
            </nav>
            {/* Mobile Navigation */}
            <div className="flex md:hidden items-center gap-2">
              <Search className="h-[1.1rem] w-[1.1rem]" />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
              >
                <Menu className="h-[1.1rem] w-[1.1rem]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-white dark:bg-zinc-950 transition-transform duration-300 ease-in-out transform md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full p-4">
          <div className="flex justify-between items-center mb-8">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="font-semibold">Farming Labs</span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className={buttonVariants({
                variant: "ghost",
                size: "icon",
              })}
            >
              <Menu className="h-[1.1rem] w-[1.1rem]" />
            </button>
          </div>
          <nav className="flex flex-col gap-4">
            <Link
              href="/docs/introduction"
              className="text-lg text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Docs
            </Link>
            <Link
              href="/showcase"
              className="text-lg text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Showcases
            </Link>
          </nav>
          <div className="mt-auto flex items-center gap-4">
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
      </div>
    </header>
  );
}

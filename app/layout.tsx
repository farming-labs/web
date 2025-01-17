import type { Metadata } from "next";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import { Navbar } from "@/components/navbar";
import { Space_Mono, Space_Grotesk, VT323 } from "next/font/google";
import { Footer } from "@/components/footer";
import "@/styles/globals.css";
import { Header } from "@/components/header";

const sansFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
  weight: "400",
});
const vt = VT323({
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
  weight: "400",
});
const monoFont = Space_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Farming Labs",
  metadataBase: new URL("https://farming-labs.vercel.app/"),
  description: "Fixing JS problems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sansFont.variable} ${monoFont.variable} ${vt.variable} font-regular antialiased tracking-wide`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {/* <Navbar /> */}
          <main className="sm:container mx-auto w-[90vw] scroll-smooth">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

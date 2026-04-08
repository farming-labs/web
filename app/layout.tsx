import type { Metadata } from "next";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import { Space_Grotesk, VT323 } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

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
        className={`${sansFont.variable} ${GeistMono.variable} ${vt.variable} font-regular antialiased tracking-wide`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen w-full scroll-smooth">{children}</main>
        </ThemeProvider>
        <Analytics />
        <Databuddy
        clientId="aeff7d3b-69f3-42a1-ba24-1b986bca54ed"/>
      </body>
    </html>
  );
}

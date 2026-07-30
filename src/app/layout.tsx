import type { LayoutProps, Metadata } from "@farm.js/core";
import { Analytics } from "@vercel/analytics/react";
import { Databuddy } from "@databuddy/sdk/react";

import { ThemeProvider } from "../components/contexts/theme-provider";
import "@fontsource-variable/geist";
import "@fontsource-variable/geist-mono";
import "@fontsource-variable/space-grotesk";
import "@fontsource/vt323";
import "./globals.css";

export const metadata: Metadata = {
  title: "Farming Labs - @farming-labs/*",
  metadataBase: new URL("https://farming-labs.dev/"),
  description: "Fixing JS problems",
  icons: "/favicon.ico",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="font-regular antialiased tracking-wide"
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
        <Databuddy clientId="aeff7d3b-69f3-42a1-ba24-1b986bca54ed" />
        <script src="/mdx-copy.js" defer />
      </body>
    </html>
  );
}

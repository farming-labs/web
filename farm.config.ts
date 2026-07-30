import { defineConfig } from "@farm.js/core";
import path from "node:path";

export default defineConfig({
  deploy: {
    target: "vercel",
  },
  experimental: {
    serverComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.magnific.com",
        pathname: "/**",
      },
    ],
    qualities: [40, 75, 80, 90],
  },
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(process.cwd(), "src"),
      },
      dedupe: ["react", "react-dom"],
    },
  },
});

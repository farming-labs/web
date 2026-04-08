import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1300px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        code: ["var(--font-geist-mono)"],
        regular: ["var(--font-geist-sans)"],
        pixel: ["var(--font-pixel)"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },

        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "star-movement-bottom": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(-100%, 0%)", opacity: "0" },
        },
        "star-movement-top": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(100%, 0%)", opacity: "0" },
        },
        "background-gradient": {
          "0%, 100%": {
            transform: "translate(0, 0)",
            animationDelay: "var(--background-gradient-delay, 0s)",
          },
          "20%": {
            transform:
              "translate(calc(100% * var(--tx-1, 1)), calc(100% * var(--ty-1, 1)))",
          },
          "40%": {
            transform:
              "translate(calc(100% * var(--tx-2, -1)), calc(100% * var(--ty-2, 1)))",
          },
          "60%": {
            transform:
              "translate(calc(100% * var(--tx-3, 1)), calc(100% * var(--ty-3, -1)))",
          },
          "80%": {
            transform:
              "translate(calc(100% * var(--tx-4, -1)), calc(100% * var(--ty-4, -1)))",
          },
        },
        "typewriter-cursor-blink": {
          "0%, 45%": { opacity: "1" },
          "55%, 100%": { opacity: "0" },
        },
        glitch: {
          "0%": { clipPath: "inset(20% 0 50% 0)" },
          "5%": { clipPath: "inset(10% 0 60% 0)" },
          "10%": { clipPath: "inset(15% 0 55% 0)" },
          "15%": { clipPath: "inset(25% 0 35% 0)" },
          "20%": { clipPath: "inset(30% 0 40% 0)" },
          "25%": { clipPath: "inset(40% 0 20% 0)" },
          "30%": { clipPath: "inset(10% 0 60% 0)" },
          "35%": { clipPath: "inset(15% 0 55% 0)" },
          "40%": { clipPath: "inset(25% 0 35% 0)" },
          "45%": { clipPath: "inset(30% 0 40% 0)" },
          "50%": { clipPath: "inset(20% 0 50% 0)" },
          "55%": { clipPath: "inset(10% 0 60% 0)" },
          "60%": { clipPath: "inset(15% 0 55% 0)" },
          "65%": { clipPath: "inset(25% 0 35% 0)" },
          "70%": { clipPath: "inset(30% 0 40% 0)" },
          "75%": { clipPath: "inset(40% 0 20% 0)" },
          "80%": { clipPath: "inset(20% 0 50% 0)" },
          "85%": { clipPath: "inset(10% 0 60% 0)" },
          "90%": { clipPath: "inset(15% 0 55% 0)" },
          "95%": { clipPath: "inset(25% 0 35% 0)" },
          "100%": { clipPath: "inset(30% 0 40% 0)" },
        },
      },
      animation: {
        "star-movement-bottom":
          "star-movement-bottom linear infinite alternate",
        "star-movement-top": "star-movement-top linear infinite alternate",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "background-gradient":
          "background-gradient var(--background-gradient-speed, 15s) cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite",
        "typewriter-cursor-blink":
          "typewriter-cursor-blink 1.05s step-end infinite",
        "glitch-after":
          "glitch var(--after-duration) infinite linear alternate-reverse",
        "glitch-before":
          "glitch var(--before-duration) infinite linear alternate-reverse",
      },
    },
  },
  plugins: [animate, typography],
} satisfies Config;

export default config;

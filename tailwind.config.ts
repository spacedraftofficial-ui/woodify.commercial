import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Woodify Brand Colors (from logo)
        "brand-red": "#C41E14",         // Primary crimson red
        "brand-red-light": "#DC2626",   // Lighter red
        "brand-red-dark": "#A81515",    // Darker crimson
        "brand-orange": "#E8421A",      // Logo orange-red gradient
        "brand-orange-light": "#F05A28",
        "brand-orange-dark": "#CC3010",

        // Legacy aliases kept for compatibility
        "forest-green": "#C41E14",
        "forest-green-light": "#DC2626",
        "forest-green-dark": "#1A0808",

        // Charcoal (logo wordmark text color)
        "charcoal": "#3A3535",
        "charcoal-light": "#4A4444",
        "charcoal-dark": "#1A0808",

        // Neutrals
        "off-white": "#F8F7F3",
        "warm-white": "#FDF5F0",

        // Accent – kept as warm amber/gold
        gold: "#C9A96A",
        "gold-light": "#d4b87e",
        "gold-dark": "#b8924a",

        // Text
        "text-dark": "#3A3535",
        "text-muted": "#6B7280",
        "text-light": "#9CA3AF",
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(4rem, 10vw, 9rem)", { lineHeight: "0.9" }],
        "display-lg": ["clamp(3rem, 7vw, 7rem)", { lineHeight: "0.95" }],
        "display-md": ["clamp(2.5rem, 5vw, 5rem)", { lineHeight: "1.0" }],
        "display-sm": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.1" }],
      },
      spacing: {
        "section-y": "clamp(5rem, 10vw, 10rem)",
        "section-x": "clamp(1.5rem, 5vw, 6rem)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        "luxury-sm": "0 4px 30px rgba(0,0,0,0.08)",
        luxury: "0 10px 60px rgba(0,0,0,0.12)",
        "luxury-lg": "0 20px 80px rgba(0,0,0,0.18)",
        gold: "0 0 40px rgba(201,169,106,0.25)",
        "gold-lg": "0 0 80px rgba(201,169,106,0.35)",
        red: "0 0 40px rgba(196,30,20,0.3)",
        "red-lg": "0 0 80px rgba(196,30,20,0.45)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "brand-gradient":
          "linear-gradient(135deg, #E8421A 0%, #CC1F1A 50%, #A81515 100%)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 4s ease-in-out infinite",
        "float-fast": "float 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        blob: "blob 7s infinite",
        "spin-slow": "spin 20s linear infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        "pulse-red": "pulseRed 2s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marqueeReverse 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(201,169,106,0.3)" },
          "50%": { boxShadow: "0 0 60px rgba(201,169,106,0.6)" },
        },
        pulseRed: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(196,30,20,0.3)" },
          "50%": { boxShadow: "0 0 60px rgba(232,66,26,0.6)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;

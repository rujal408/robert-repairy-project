export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/container/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        1: "8px",
        2: "16px",
        3: "24px",
        4: "32px",
        5: "40px",
        6: "48px",
        7: "56px",
        8: "64px",
      },
      screens: {
        sm: "480px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1200px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      fontWeight: {
        bold: "700",
        medium: "500",
        normal: "400",
        hairline: "300",
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }], // 12px - Captions, labels
        sm: ["0.875rem", { lineHeight: "1.25rem" }], // 14px - Secondary text
        base: ["1rem", { lineHeight: "1.5rem" }], // 16px - Body text
        lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px - Subheadings
        xl: ["1.25rem", { lineHeight: "1.75rem" }], // 20px - Headings
        "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px - Main titles
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px - Hero text
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // 36px - Display text
      },
      colors: {
        background: "#dde4e8",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        primary: {
          DEFAULT: "#3B82F6",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        grey: {
          DEFAULT: "#bbbdc0",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

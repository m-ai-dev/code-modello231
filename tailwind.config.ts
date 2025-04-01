import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "var(--background)",
        foreground: "var(--foreground)",
        text: "var(--text)",
      },
    },
  },
  plugins: [
    function({ addUtilities }: { addUtilities: (utilities: Record<string, Record<string, string>>) => void }) {
      const newUtilities = {
        '.branded-scrollbar::-webkit-scrollbar': {
          'background': '#59455f',
        },
        '.branded-scrollbar': {
          'scrollbar-color': '#59455f transparent',
          'padding-right': '1rem',
        },
        '.branded-scrollbar::-webkit-scrollbar:hover': {
          'background': '#7b6580',
        },
        '.branded-scrollbar:hover': {
          'scrollbar-color': '#7b6580 transparent',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} satisfies Config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        "roboto-condensed": ["var(--font-roboto-condensed)"],
        inter: ["var(--font-inter)"],
        playfair: ["var(--font-playfair)"],
        uiserif: ["var(--font-serif)"],
      },
      colors: {
        "brand-blue": {
          50: "#21409A",
        },
        "brand-grey": {
          50: "#E5E4E2",
          600: "#C0C0C0",
          800: "#71797E",
          900: "#4C4E52",
        },
      },
      height: {
        '64': '16rem',  // 256px
        '80': '20rem',  // 320px
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;

import plugin from 'tailwindcss/plugin';
import type { Config } from "tailwindcss";
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary:"#2b2b2b",
        secondary:"#232323",
        second_secondary:"#272727",
        third_secondary:"#323232",
        brown_primary:"#D69667",
        brown_secondary:"#6F3D2E",
        brown_secondary_hover:"#5A3427",
        c_green:"#195D51",
        c_green_hover:"#165348",
        wht:"#ffffff",
        light_black:'#999999',
        redii:"#ff3104"

      },
      fontFamily: {
        urbanist: ['var(--font-urbanist)'],
        jost: ['var(--font-jost)']
      },
      screens:{
        'md':'795px',
        'mid':'900px'
      },
      backgroundImage: {
        'custom-linear': 'linear-gradient(rgb(43, 43, 43) 50%, rgb(35, 35, 35) 50%)',
        },


    },
  },
  plugins: [
    plugin(function ({ addVariant }: { addVariant: (name: string, selector: string) => void }) {
      // Custom autofill variant
      addVariant('autofill', '&:-webkit-autofill');
    }),
  ],
} satisfies Config;

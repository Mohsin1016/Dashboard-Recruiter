/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "360px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: "#2F9379",
        gray: "#E7E7E7",
        orange: "#F3692E",
        lightorange: "#FFA33D",
        darkgray: "rgba(51, 51, 51, 1)",
        lightgray: "#E7E7E7",
        skyBlue: "#DCDCDC",
        lightergray: "#F9FAFB",
        darkblakish: "#D3D3D3",
        dark: "#333333",
        lightdarkbg: "#F6F6F6",
      },
      fontFamily: {
        montserrat: "Montserrat",
        dmsans: "DM Sans",
        poppins: "Poppins",
        mulish: "Mulish",
        barlow: "Barlow",
      },
    },
  },
  plugins: [],
};

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "white-background": "#fff",
        black: "#000",
        "boder-g": "#c1bfbf",
        "black-fonts-headings": "#2d2e2e",
        bbb: "#dbdce5",
        gray: {
          "100": "#fcfcfc",
          "200": "#0a0a0a",
          "300": "#060606",
        },
        gainsboro: {
          "100": "#e6e6e6",
          "200": "rgba(230, 230, 230, 0.09)",
        },
        lightyellow: "#edffe2",
        lime: "#1cff00",
      },
      spacing: {},
      fontFamily: {
        "roboto-slab": "'Roboto Slab'",
      },
      borderRadius: {
        "14xl": "33px",
        "31xl": "50px",
        "3xs": "10px",
        mini: "15px",
        "9xl": "28px",
      },
    },
    fontSize: {
      "9xl": "28px",
      "3xl": "22px",
      lg: "18px",
      "19xl": "38px",
      "4xl": "23px",
      "11xl": "30px",
      "49xl": "68px",
      "35xl": "54px",
      "8xl": "27px",
      "22xl": "41px",
      "5xl": "24px",
      xl: "20px",
      "6xl": "25px",
      "12xl": "31px",
      lgi: "19px",
      inherit: "inherit",
    },
    screens: {
      mq1650: {
        raw: "screen and (max-width: 1650px)",
      },
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
export default config;

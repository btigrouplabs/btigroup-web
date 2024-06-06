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
        black: "#000",
        lime: {
          "100": "#45ff2c",
          "200": "#2eff13",
        },
        dominant: "#fff",
        gray: {
          "100": "#1f2236",
          "200": "#141414",
          "300": "rgba(255, 255, 255, 0.6)",
        },
        "light-gray": "#989898",
        "light-green": "#1cf800",
        limegreen: {
          "100": "#1bc904",
          "200": "#00c400",
        },
        "gray-text": "#3c3c3c",
        whitesmoke: {
          "100": "#f5f5f5",
          "200": "#f3f3f3",
        },
        gainsboro: "#e7e7e7",
        dimgray: "#6d6d6d",
        cornflowerblue: "#1c6dc1",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        "country-font-type-and-size": "'Open Sans'",
        inherit: "inherit",
      },
      borderRadius: {
        "9xl": "28px",
        "3xs": "10px",
        "8xl": "27px",
        "6xl": "25px",
        "8xs": "5px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      xl: "20px",
      "3xs": "10px",
      lg: "18px",
      base: "16px",
      "21xl": "40px",
      "13xl": "32px",
      inherit: "inherit",
    },
    screens: {
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
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

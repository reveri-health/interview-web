import type { Config } from "tailwindcss";

const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "content-card": "4px 0px 18px 4px #BDB9B714",
        "stripe-input":
          "0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(0, 0, 0, 0.02)",
      },
      padding: {
        "0!": "0px !important",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
      backgroundImage: {
        "banner-gradient":
          "linear-gradient(38deg, rgba(167,23,255,1) 59%, rgba(227,66,253,1) 88%)",
      },
      fontFamily: {
        stripe: [
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Open Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
        montreal: ["var(--font-montreal)"],
        bradford: ["var(--font-bradford)"],
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        base: "18px",
        lg: "20px",
        xl: "24px",
        xxl: "28px",
        xxxl: "32px",
        xxxxl: "40px",
      },
      spacing: {
        xxs: "2px",
        xs: "4px",
        sm: "8px",
        md: "12px",
        base: "16px",
        lg: "20px",
        xl: "24px",
        xxl: "32px",
        xxxl: "40px",
      },
      colors: {
        black: "#000",
        white: "#fff",
        default: "#1C1C1C",
        stripe: "#e6e6e6",
        "stripe-text-input": "#30313d",
        "stripe-text-placeholder": "#757680",
        grey: {
          10: "#EEECEA",
          20: "#E0DFDD",
          30: "#A2A19F",
          40: "#757474",
          50: "#403F3F",
          60: "#2B2B2B",
          70: "#1C1C1C",
          80: "#050505",
        },
        lightGrey: {
          10: "#FBF9F7",
          20: "#F3EEE9",
          30: "#F1EAE4",
          40: "#BFBCB8",
        },
        violet: {
          10: "#FFF3FA",
          20: "#FF6CC4",
          30: "#E342FD",
          40: "#A717FF",
        },
        red: {
          10: "#FAF7E9",
          20: "#FDAAFF",
          30: "#FF6CC4",
          40: "#FF4B2D",
        },
        green: {
          10: "#F5FFE6",
          20: "#C0FF70",
          30: "#55F161",
          40: "#18DFA3",
        },
        blue: {
          10: "#ECFFFA",
          20: "#7EFFE0",
          30: "#16D5FF",
          40: "#1673FF",
        },
        contentBorder: "#F1ECE7",
      },
    },
  },
  plugins: [nextui()],
};
export default config;

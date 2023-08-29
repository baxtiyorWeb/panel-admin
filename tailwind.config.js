/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        bgColor: "rgb(255, 246, 224)",
        btnBgColor: "rgb(255, 242, 217)",
        iconColor: "rgb(233, 233, 233)",
        productBg: "rgba(255, 255, 255, 1)",
        bgColor1: "#FAFAFA",
        bgColor2: "#1E0559",
        bgColor3: "rgb(57, 40, 113) ",
        bgColor4: "rgb(30, 5, 89)",
        bgColor5: "#cde7d9",
        bgColor6: "rgba(0, 0, 0, 0.50)",
      },
      textColor: {
        textColors: "rgba(187, 38, 73, 1)",
        textColor1: "rgba(197, 197, 197, 1)",
        textColor2: "rgba(159, 159, 159, 1)",
        textColor3: "rgba(30, 5, 89, 1)",
        textColor4: "#C8C8C8",
        textColor5: "#242424",
        textColor6: "#DBDBDB",
        textColor7: "#1E0559",
        textColor8: "#C8C8C8",
        textColor9: "#C5C5C5",
        textColor10: "#F8F802",
        textColor11: "#959EA7",
        textColor12: "#bf3354",
        textColor13: "#242424",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".link": {
          display: "flex",
          "justify-content": "",
          "align-items": "center",
          padding: "0.5rem",
          "font-size": "24px",
          "font-weight": "300",
          "font-style": "normal",
          "line-height": "120%",
          "letter-spacing": "-0.24px",
          "margin-top": "3px",
          color: "rgba(30, 5, 89, 1)",
          transition: "0.1s",
          "border-radius": "5px",
          "&:hover": {
            "background-color": "rgb(245, 245, 245)",
          },
          "&:focus": {
            "background-color": "rgb(245, 245, 245)",
          },
        },
        theme: {
          screens: {
            sm: "640px",
            // => @media (min-width: 640px) { ... }
            body: {
              backgroundColor: "red",
            },

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
          },
        },
      });
    }),
  ],
};
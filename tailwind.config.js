/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-50": "#f9fafb",
        "blue-500": "#3b82f6",
        cornflowerblue: "#549cff",
        white: "#fff",
        "colors-gray-500": "#666d80",
        "colors-gray-200": "#c1c7d0",
        "colors-gray-300": "#a4acb9",
        "blue-100": "#dbeafe",
        "colors-gray-100": "#dfe1e7",
      },
      spacing: {
        "spacing-spacing-24": "24px",
        "spacing-spacing-12": "12px",
        "spacing-spacing-16": "16px",
      },
      fontFamily: {
        "new-style-text-2xl": "ActualR",
      },
    },
    fontSize: {
      "5xl": "24px",
      lgi: "19px",
      ActualR: "ActualR",
    },
    screens: {
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
}

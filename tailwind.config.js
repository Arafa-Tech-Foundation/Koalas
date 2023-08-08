/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ffdfe2",
          200: "#ffbfc5",
          300: "#ff9fa7",
          400: "#ff7f8a",
          500: "#ff5f6d",
          600: "#cc4c57",
          700: "#993941",
          800: "#66262c",
          900: "#331316",
          DEFAULT: "#ff5f6d",
        },
        neutral: {
          100: "#d0d0d1",
          200: "#a0a2a3",
          300: "#717375",
          400: "#414547",
          500: "#121619",
          600: "#161b21",
          700: "#0b0d0f",
          800: "#07090a",
          900: "#040405",
          DEFAULT: "#121619",
          card: "#161b21",
        },
        secondary: {
          100: "#fff3e3",
          200: "#ffe7c6",
          300: "#ffdbaa",
          400: "#ffcf8d",
          500: "#ffc371",
          600: "#161b21",
          700: "#997544",
          800: "#664e2d",
          900: "#332717",
        },
      },
    },
  },
  plugins: [],
};

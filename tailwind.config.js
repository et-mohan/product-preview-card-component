/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Fraunces: ["Fraunces", "serif"],
        JosefinSans: ["Josefin Sans", "sans-serif"]
     }
    },
  },
  plugins: [],
}
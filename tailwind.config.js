/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto:['Roboto','sans']
      },
      colors:{
        hyundai_blue:["#013686"],
        green:["#00C853"],
        boxgray:["#EFF1F5"],
        textgray:["#828282"],
        button_bg:["D0DDF1"],
      },
    },
  },
  plugins: [],
}
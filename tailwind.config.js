/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#00c9a7",
        "secondary-color": "#4d8076",
        "tertiary-color": "#845ec2",
        "text-color": "c4fcef",
      },
    },
  },
  plugins: [],
};

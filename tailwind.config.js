const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      margin: {
        "150px": "150px",
      },
      width: {
        "425px": "425px",
        "375px": "375px",
      },
      height: {
        "800px": "800px",
      },
      colors: {
        "gradual-yellow": "#F4B860",
        
      },
    },
  },
  plugins: [nextui({
    themes: {
      light:{
        colors:{
          background: "#f9f9f9",
        }
      }
    }
  }
  )],
};

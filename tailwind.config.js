/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hover: "#5D3FD3",
        'nav-bg': "#1A1B25",
        'sub-nav-bg': "#64748b",
      }
    },
    keyframes: {
      "move-down": {
        "from": {
          transform: "translateY(-100px)",
          opacity: "0.5"
        },
        "to": {
          transform: "translateY(0px)",
          opacity: "1"
        }
      },
      "move-down-2": {
        "from": {
          transform: "translateY(-150px)",
          opacity: "0.5"
        },
        "to": {
          transform: "translateY(0px)",
          opacity: "1"
        }
      },
      "move-right": {
        "from": {
          transform: "translateX(-200px)",
          opacity: "0.75"
        },
        "to": {
          transform: "translateX(0px)",
          opacity: "1",
        }
      },
      "move-left": {
        "from": {
          transform: "translateX(200px)",
          opacity: "0.75"
        },
        "to": {
          transform: "translateX(0px)",
          opacity: "1",
        }
      },
    },
    animation: {
      "move-down": "move-down ease-in-out 1s",
      "move-down-2": "move-down-2 ease-in-out 1s",
      "move-left": "move-left ease-in-out 1s",
      "move-right": "move-right ease-in-out 1s",
    }
  },
  plugins: [],
}
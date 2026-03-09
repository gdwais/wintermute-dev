/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      xs: "450px",
      sm: "575px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      colors: {
        background: "#0a0a12",
        "background-alt": "#0e0e1a",
        surface: "#121220",
        "surface-light": "#1a1a2e",
        cyan: {
          DEFAULT: "#3E78B2",
          dark: "#2d5a8a",
          glow: "rgba(62, 120, 178, 0.15)",
        },
        magenta: {
          DEFAULT: "#E36397",
          dark: "#b34d78",
          glow: "rgba(227, 99, 151, 0.15)",
        },
        purple: {
          DEFAULT: "#9b59ff",
          dark: "#6b2fb3",
          glow: "rgba(155, 89, 255, 0.15)",
        },
        neon: {
          green: "#39ff14",
          orange: "#ff6b00",
          yellow: "#ffe600",
          red: "#ff1744",
          teal: "#00bfa5",
        },
        "body-color": "#8888aa",
        "text-main": "#e0e0f0",
        white: "#FFFFFF",
        black: "#000000",
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "monospace"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
      },
      boxShadow: {
        "neon-cyan": "0 0 20px rgba(62, 120, 178, 0.3)",
        "neon-magenta": "0 0 20px rgba(227, 99, 151, 0.3)",
        "neon-purple": "0 0 20px rgba(155, 89, 255, 0.3)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.3)",
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite alternate",
        "blink": "blink 1s step-end infinite",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

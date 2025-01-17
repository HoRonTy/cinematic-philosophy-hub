import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "#222222",
        foreground: "#F1F1F1",
        accent: "#D6BCFA",
        card: "#333333",
        "card-hover": "#444444",
        // Добавляем цвета для персонажей
        "joker-dark": "#1A1F2C",      // Темно-фиолетовый для Джокера
        "tyler-dark": "#221F26",      // Темный бордовый для Тайлера
        "morpheus-dark": "#403E43",   // Темно-серый для Морфеуса
        "v-dark": "#2C1F1A",          // Темно-красный для V
        "yoda-dark": "#1F2C1A",       // Темно-зеленый для Йоды
        "terminator-dark": "#1A1C2C",  // Темно-синий для Терминатора
        "rick-dark": "#1F262C",       // Темно-бирюзовый для Рика
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
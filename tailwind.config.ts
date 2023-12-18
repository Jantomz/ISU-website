import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
    colors: {
      techGreen: "#00A676",
      mustyGray: "#586F7C",
      seashell: "#F4F4F9",
      nightPurple: "#17183B",
      black: "#000",
    },
  },
  plugins: [],
} satisfies Config;

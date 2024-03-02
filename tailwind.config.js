/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#02263D",
          secondary: "#585A5C",
          accent: "#075985",
          neutral: "#1c1917",
          "base-100": "#f5f5f4",
          info: "#115e59",
          success: "#047857",
          warning: "#b45309",
          error: "#991b1b",
        },
      },
    ],
  },
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      screens: {},
    },
    extend: {
      colors: {
        w_color: "#fff",
        g_color: "#59C378",
        y_color: "#f9E600",
        r_color: "#DD5846",
        hover_color: "#57B665",
      },
      screens: {
        "res-menu": { max: "990px" },
        "com": {min: "990px"},
        "mob": {max:"768px"},
        // => @media (max-width: 1535px) { ... }

        // 'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }

        // 'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }

        // 'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }

        // 'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};

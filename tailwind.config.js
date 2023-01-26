/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html", "./contact/*.html", "./about/*.html"],
    theme: {
      extend: {},
    },
    plugins: [
      require("@catppuccin/tailwindcss")({
        prefix: "cat",
        defaultFlavour: "frappe",
      }),
      require("tailwindcss"),
      require("autoprefixer"),
    ],
  };
  
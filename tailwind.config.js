/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./Contact.js"],
  theme: {
    extend: {
      // Add your custom CSS styles here
      scrollbar: {
        width: "thin",
        color: "var(--secondary) var(--primary)",
      },
      "::-webkit-scrollbar": {
        width: "15px",
      },
      "::-webkit-scrollbar-track": {
        background: "var(--primary)",
        borderRadius: "5px",
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: "var(--secondary)",
        borderRadius: "14px",
        border: "3px solid var(--primary)",
      },
    },
  },
  plugins: [],
};

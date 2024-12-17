/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        logoPrimary: "#18E7B6",
        buttonPrimary: "#2F85ED",
        buttonSecondary: "#F7F7F7",
        buttonThird: "#13B992", 
        textSecondary: "#666666",
        textThird: "#002733",
        textFourth: "#4C4C4C",
        borderColor: '#ccc',
        bgSecondary: '#F7F7F7',
        bgStep: '#E6E6E6'
      },
    },
  },
  plugins: [],
};

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        spin: 'spin 1s linear infinite',
        bounce: 'bounce 1s infinite',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif', 'Poppins'],
      },
      colors: {
        primary: '#ffffff', // Warna putih untuk teks
      },
    },
  },
  plugins: [],
};

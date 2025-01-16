/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",          // Archivo HTML principal
    "./src/**/*.{js,jsx,ts,tsx}", // Archivos dentro de `src` que usarán Tailwind
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Young Serif'], // Cambia la fuente predeterminada
      },
      colors: {
        primary: '#252B42',       // Azul principal
        secondary: '#737373',     // Púrpura secundario
        bg1: '#FAFAFA',        // Verde de acento
        bg2: '#FFFFFF',    // Color de fondo
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      ssm: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px'
    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #bdc3c7, #2c3e50)'
      },
      colors: {
        'custom-gray': '#D9D9D9' // Add your custom color here
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        aboreto: ['"Aboreto"', 'cursive']
      }
    }
  },
  plugins: []
}

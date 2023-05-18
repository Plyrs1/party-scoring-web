const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      //   fontFamily: {
      //     sans: ['Monsterrat', ...defaultTheme.fontFamily.sans],
      //     'lemon-milk': ['Lemon\\ Milk'],
      //     'kozuka-gothic': ['Kozuka\\ Gothic']
      //   },
      colors: {
        'party-background': '#D9D9D9',
        'party-orange': '#EAA033'
        // 'kusogaki-purple': '#6167c5',
        // 'kusogaki-blue': '#91a8dd',
        // 'kusogaki-red': '#eba3b4',
        // 'kusogaki-yellow': '#f5e9a4',
        // 'kusogaki-blue': '#91a8dd',
        // 'kusogaki-cyan': '#8ad3e0',
        // 'kusogaki-green': '#ade9db'
      },
      borderRadius: {
        'party-radius': '30px'
      }
    }
  },
  plugins: []
}

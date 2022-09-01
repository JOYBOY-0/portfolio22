module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        devBlue: {
          50: '#effaff',
          100: '#dbf3fe',
          200: '#bfebfe',
          300: '#93e0fd',
          400: '#61ccf9',
          500: '#3cb1f5',
          // 600 is the default
          600: '#2f9aeb',
          700: '#1e7dd7',
          800: '#1f65ae',
          900: '#1e568a'
        }
      }
    },
  },
  plugins: [],
}

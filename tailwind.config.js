module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        blue: {
          '100': '#11111F',
          '200': '#3893C4',
          '300': '#60A9D0',
        },
        gray: {
          '100': '#A4B0C0',
        }
      }
    },
    spacing: {
      '0': '0px',
      '0.4': '4px',
      '2': '16px',
      '2.5': '18px',
      '3': '24px',
      '4': '32px',
      '5': '50px',
      '399': '399px',
      '275': '275px'
    },
  },
  variants: {},
  plugins: [],
}
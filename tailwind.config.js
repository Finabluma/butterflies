// const colors = require('tailwindcss/colors')
const settingsScreens = require('./tailwind.settings.screens')
const settingsFontSizes = require('./tailwind.settings.fontSizes')
module.exports = {
  purge: [],
  purgeCSS: {
    whitelist: ['dark-mode'],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
      },
      fontFamily: {
        darkmode: ['darkmode-on', 'sans-serif'],
        niti: ['nitti-typewriter-normal', 'sans-serif'],
        cameo: ['nitti-typewriter-cameo', 'sans-serif'],
        open: ['nitti-typewriter-open', 'sans-serif']
      },
      screens: settingsScreens,
      fontSize: settingsFontSizes,
    },
  },
  variants: {
    backgroundColor: ["dark", "dark-hover", "dark-group-hover", "dark-even", "dark-odd", "hover", "responsive"],
    borderColor: ["dark", "dark-focus", "dark-focus-within", "hover", "responsive"],
    textColor: ["dark", "dark-hover", "dark-active", "hover", "responsive"]
  },
  plugins: [
    require('tailwindcss-dark-mode')(),
    require('tailwindcss-pseudo-elements')()
  ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': "url('/images/bg-image.png')",
        'elevate-bg': "url('/images/Image.png')",
        'bg-alt': "url('/images/bg-mid.jpg')",
        'gradient-primary': "linear-gradient(0deg,#8a00cc 0%,#cf6aff 100%)",
        'newsletter-bg': "linear-gradient(90deg,rgba(30,28,50,.8) 0%,rgba(43,22,29,.7) 100%)"
      },
      fontFamily: {
        'ProstoOne': ['Prosto One' ],
        'Poppins': ['Poppins']

      },
    }

  },
  plugins: [],
}


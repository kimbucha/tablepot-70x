     /** @type {import('tailwindcss').Config} */
     module.exports = {
      content: [
        "./app/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            sky: {
              500: '#59C5ED',
              600: '#47B3E0',
            },
          },
        },
      },
      plugins: [],
    }
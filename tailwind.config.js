// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.html', 
    './src/**/*.{js,ts,jsx,tsx}'
  ],

  theme: {
    extend: {
        colors: {
            maroon: {
                50: '#fdf2f8',
                100: '#fce7f3',
                200: '#fbcfe8',
                300: '#f9a8d4',
                400: '#f472b6',
                500: '#44001b',
                600: '#44001b',
                700: '#2d0012',
                800: '#1a000a',
                900: '#0d0005',
            },
        },
        fontFamily: {
            'poppins': ['Poppins', 'sans-serif'],
        },
        animation: {
            'float': 'float 3s ease-in-out infinite',
            'pulse-ring': 'pulse-ring 2s linear infinite',
            'shine': 'shine 1.5s ease-out',
        },
        keyframes: {
            float: {
                '0%, 100%': { transform: 'translateY(0px)' },
                '50%': { transform: 'translateY(-10px)' },
            },
            'pulse-ring': {
                '0%, 100%': { transform: 'scale(0.8)', opacity: '0.8' },
                '50%': { transform: 'scale(1.1)', opacity: '0.4' },
            },
            shine: {
                '0%': { left: '-50%', opacity: '0' },
                '50%': { opacity: '1' },
                '100%': { left: '150%', opacity: '0' },
            },
        },
    },
},

  plugins: [
    // require('daisyui'),
  ],
}
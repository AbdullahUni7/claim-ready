/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#087A58',
          strong: '#066748',
          ink: '#065F43',
          soft: '#EEFAF5',
          'soft-2': '#DCF3EA',
          border: '#B9E6D6',
          bright: '#34D399',
        },
        secondary: '#0D1117',
        surface: {
          DEFAULT: '#FFFFFF',
          2: '#FBFCFD',
          muted: '#F7F8FA',
          sunken: '#F2F4F7',
        },
        'on-surface': {
          DEFAULT: '#363C47',
          strong: '#0D1117',
          variant: '#5B6472',
          muted: '#697382',
        },
        outline: {
          DEFAULT: '#E7EAEF',
          strong: '#D6DBE3',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}

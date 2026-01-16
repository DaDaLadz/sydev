/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#FF3701',
        black: '#000',
        white: '#FFF',
        // Legacy colors for gradual transition
        midnight: '#000',
        dark: '#000',
        card: '#000',
      },
      fontFamily: {
        display: ['Chinese Rocks', 'Impact', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'bounce': 'bounce 2s infinite',
        'tape-wave-1': 'tapeWave1 3s ease-in-out infinite',
        'tape-wave-2': 'tapeWave2 3.5s ease-in-out infinite',
        'tape-wave-3': 'tapeWave3 4s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        tapeWave1: {
          '0%, 100%': { transform: 'translateY(0) rotate(-1deg)' },
          '50%': { transform: 'translateY(-5px) rotate(1deg)' },
        },
        tapeWave2: {
          '0%, 100%': { transform: 'translateY(0) rotate(1deg)' },
          '50%': { transform: 'translateY(-3px) rotate(-0.5deg)' },
        },
        tapeWave3: {
          '0%, 100%': { transform: 'translateY(0) rotate(-0.5deg)' },
          '50%': { transform: 'translateY(-4px) rotate(0.5deg)' },
        },
      },
    },
  },
  plugins: [],
}

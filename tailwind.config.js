/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#ffffff',
        'bg-secondary': '#f1f5f9',
        'bg-card': '#ffffff',
        navy: '#0f172a',
        blue: '#1d4ed8',
        'blue-light': '#3b82f6',
        'text-primary': '#1e293b',
        'text-muted': '#64748b',
        border: '#e2e8f0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

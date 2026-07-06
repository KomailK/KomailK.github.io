/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-card': 'var(--bg-card)',
        navy: 'var(--text-primary)',
        blue: 'var(--blue)',
        'blue-light': 'var(--blue-light)',
        'blue-pale': 'var(--blue-pale)',
        accent: 'var(--accent)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        border: 'var(--border)',
        'timeline-line': 'var(--timeline-line)',
        'tag-bg': 'var(--tag-bg)',
        'tag-text': 'var(--tag-text)',
        'tag-border': 'var(--tag-border)',
        'success-bg': 'var(--success-bg)',
        'success-text': 'var(--success-text)',
        'purple-bg': 'var(--purple-bg)',
        'purple-text': 'var(--purple-text)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 3px var(--shadow), 0 1px 2px var(--shadow)',
        'card-hover': '0 8px 24px var(--shadow)',
        navbar: '0 1px 8px var(--shadow)',
      },
    },
  },
  plugins: [],
}

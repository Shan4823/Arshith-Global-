/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './*.html', './src/**/*.{js,jsx}'],
  // Each ecosystem defines its own `.container` class with project-specific
  // max-widths (1400px / 1200px / etc.) — disable Tailwind's built-in
  // responsive `.container` utility to avoid colliding rules.
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors: {
        // Shared semantic tokens — concrete values are defined per-ecosystem in
        // each tailwind-*.css entry file's `:root` (see Architecture decision #3).
        primary: 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        'primary-hover': 'var(--primary-hover)',
        accent: 'var(--accent)',
        secondary: 'var(--secondary)',
        'text-main': 'var(--text-main)',
        'text-muted': 'var(--text-muted)',
        'bg-main': 'var(--bg-main)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-alt': 'var(--bg-alt)',
        'bg-light': 'var(--bg-light)',
        'bg-white': 'var(--bg-white)',
        border: 'var(--border)',
        'border-light': 'var(--border-light)',
        ink: 'var(--ink)',
        gold: 'var(--gold)',
        gold2: 'var(--gold2)',
        blue3: 'var(--blue3)',

        // Internship (.mncfix) scoped tokens
        'mnc-bg0': 'var(--bg0)',
        'mnc-bg1': 'var(--bg1)',
        'mnc-txt': 'var(--txt)',
        'mnc-muted': 'var(--muted)',
        'mnc-brand': 'var(--brand)',
        'mnc-brand2': 'var(--brand2)',

        // Home companies-showcase / poster-rail tokens
        'comp-bg-soft': 'var(--comp-bg-soft)',
        'comp-text': 'var(--comp-text)',
        'comp-muted': 'var(--comp-muted)',
        'comp-border': 'var(--comp-border)',
        'comp-accent': 'var(--comp-accent)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        full: 'var(--radius-full)',
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
        main: ['var(--font-main)'],
      },
      keyframes: {
        // Populated incrementally per ecosystem during migration phases.
      },
      animation: {
        // Populated incrementally per ecosystem during migration phases.
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      // WSJ 品牌色系
      colors: {
        wsj: {
          gold: '#d4a843',
          'gold-light': '#e8c97a',
          'gold-dark': '#b8922e',
          text: '#1a1a1a',
          muted: '#6b7280',
          bg: '#f5f2ed',
          'bg-white': '#fafaf9',
          border: '#e5e0d5',
        },
      },

      // WSJ 衬线字体
      fontFamily: {
        serif: ['Playfair Display', 'Merriweather', 'Georgia', 'serif'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Merriweather', 'Georgia', 'serif'],
      },

      // 扩展阴影效果
      boxShadow: {
        'wsj-sm': '0 1px 2px rgba(26, 26, 26, 0.05)',
        'wsj-md': '0 4px 6px rgba(26, 26, 26, 0.07), 0 2px 4px rgba(26, 26, 26, 0.04)',
        'wsj-lg': '0 10px 25px rgba(26, 26, 26, 0.1), 0 4px 10px rgba(26, 26, 26, 0.05)',
        'wsj-xl': '0 20px 40px rgba(26, 26, 26, 0.12)',
      },
    },
  },
}

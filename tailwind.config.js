/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './sunshine-content.js'],
  theme: {
    extend: {
      colors: {
        navy: '#0B2657',
        gold: '#F4B82C',
        paper: '#F7FAF7',
        mist: '#EEF6F0',
        ink: '#10254A',
        body: '#52657D'
      },
      boxShadow: {
        soft: '0 18px 60px rgba(16,37,74,.09)'
      }
    }
  }
};

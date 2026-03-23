// Uncle Tallest Productions — Theme toggle
// Defaults to dark (Matrix Noir), persists preference
const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
const stored = localStorage.getItem('ut-theme') || 'dark';

if (stored === 'light') root.classList.add('theme-light');

toggle?.addEventListener('click', () => {
  const isLight = root.classList.toggle('theme-light');
  localStorage.setItem('ut-theme', isLight ? 'light' : 'dark');
});

function switchTheme(themeFile) {
  const themeLink = document.getElementById('themeLink');
  if (themeLink) {
    themeLink.setAttribute('href', getSiteUrl(themeFile));
  }
}

function getSiteUrl(fileName) {
  const script = document.currentScript || document.querySelector('script[src$="theme.js"]');
  return new URL(fileName, script.src).href;
}

function setThemeIcon(themeIcon, isDarkMode) {
  if (!themeIcon) {
    return;
  }

  themeIcon.src = getSiteUrl(isDarkMode ? 'png/Cmoon.png' : 'png/sun.png');
  themeIcon.closest('#themeToggle').setAttribute(
    'aria-label',
    isDarkMode ? 'الوضع الداكن نشط' : 'الوضع الفاتح نشط'
  );
}

function toggleTheme() {
  const isDarkMode = localStorage.getItem('darkMode') !== 'true';
  const themeIcon = document.querySelector('.theme-icon');

  switchTheme(isDarkMode ? 'but.css' : 'old.css');
  setThemeIcon(themeIcon, isDarkMode);
  localStorage.setItem('darkMode', String(isDarkMode));
}

window.addEventListener('DOMContentLoaded', () => {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  const themeIcon = document.querySelector('.theme-icon');

  switchTheme(isDarkMode ? 'but.css' : 'old.css');
  setThemeIcon(themeIcon, isDarkMode);
});

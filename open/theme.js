function switchTheme(themeFile) {
const themeLink = document.getElementById('themeLink');
if (themeLink) {
themeLink.setAttribute('href', themeFile);
}
}
function setThemeLabel(isDarkMode) {
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) { themeToggle.setAttribute('aria-label', isDarkMode ? 'الوضع الفاتح' : 'الوضع الداكن');
}
}

function toggleTheme() {
const isDarkMode = localStorage.getItem('darkMode') !== 'true';
switchTheme(isDarkMode ? 'but.css' : 'old.css');
localStorage.setItem('darkMode', String(isDarkMode));
setThemeLabel(isDarkMode);
}

window.addEventListener('DOMContentLoaded', () => {
const storedTheme = localStorage.getItem('darkMode');
const isDarkMode = storedTheme === null ? true : storedTheme === 'true';
switchTheme(isDarkMode ? 'but.css' : 'old.css');
setThemeLabel(isDarkMode);
});

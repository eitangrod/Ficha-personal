document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark-mode') {
        body.classList.add('dark-mode');
        updateThemeIcon(true);
    } else {
        
        updateThemeIcon(false);
    }

    function updateThemeIcon(isDarkMode) {
        themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
        themeToggle.setAttribute('aria-label', isDarkMode ? 'Activar modo claro' : 'Activar modo oscuro');
    }

    themeToggle.addEventListener('click', () => {
        const isDarkMode = body.classList.toggle('dark-mode');
        
        if (isDarkMode) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.setItem('theme', 'light-mode');
        }

        updateThemeIcon(isDarkMode);
    });
});
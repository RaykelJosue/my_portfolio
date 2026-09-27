document.addEventListener('DOMContentLoaded', () => {

    /* ----- Año dinámico en el footer ----- */
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();


    /* ----- Lógica del Menú Móvil ----- */
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        const mobileLinks = menu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });
    }


    /* ----- Lógica del Modo Oscuro (Dark Mode Toggle) ----- */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleIcon = document.getElementById('theme-toggle-icon');
    const themeToggleBtnMobile = document.getElementById('theme-toggle-mobile');
    const themeToggleIconMobile = document.getElementById('theme-toggle-icon-mobile');

    // Función para cambiar el icono basado en el tema actual
    function updateIcons() {
        const isDark = document.documentElement.classList.contains('dark');

        [themeToggleIcon, themeToggleIconMobile].forEach(icon => {
            if (!icon) return;
            icon.classList.toggle('fa-moon', !isDark);
            icon.classList.toggle('fa-sun', isDark);
        });
    }

    // Ejecutar al inicio para poner el icono correcto
    updateIcons();

    // Función central para alternar el tema
    function toggleTheme() {
        document.documentElement.classList.toggle('dark');

        if (document.documentElement.classList.contains('dark')) {
            localStorage.setItem('color-theme', 'dark');
        } else {
            localStorage.setItem('color-theme', 'light');
        }

        updateIcons();
    }

    // Asignar eventos a los botones (escritorio y móvil)
    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
    if (themeToggleBtnMobile) themeToggleBtnMobile.addEventListener('click', toggleTheme);

});
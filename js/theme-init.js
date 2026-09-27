/* ============================================
   Inicialización del tema ANTES del render.
   Evita el "flash" blanco (FOUC) si el usuario
   prefiere modo oscuro o ya lo tenía guardado.
   ============================================ */

(function () {
    const storedTheme = localStorage.getItem('color-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
})();
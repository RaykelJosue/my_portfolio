/* ============================================
   Configuración personalizada de Tailwind CSS
   Debe cargarse DESPUÉS del CDN de Tailwind
   y ANTES de que el DOM sea renderizado.
   ============================================ */

tailwind.config = {
    darkMode: 'class', // Habilitar modo oscuro por clase
    theme: {
        extend: {
            colors: {
                // Color para Modo Claro (Corporativo)
                primary: '#0ea5e9',
                // Colores para Modo Oscuro (Ciberseguridad)
                cyber: '#00E5FF',
                cyberBg: '#0B0F19',
                cyberSurface: '#111827',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        }
    }
};
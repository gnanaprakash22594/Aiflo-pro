/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#a00fbd",
                "accent-magenta": "#e91e63",
                "accent-amber": "#ffb74d",
                "accent-coral": "#ff7043",
                "background-light": "#fdfcfd",
                "background-dark": "#130a16",
                "text-main": "#0f0a11",
            },
            fontFamily: {
                "display": ["Inter", "sans-serif"],
                "body": ["Inter", "sans-serif"],
            },
            borderRadius: {
                "DEFAULT": "0.375rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "2xl": "1rem",
                "full": "9999px"
            },
            backgroundImage: {
                'gradient-pop': 'linear-gradient(135deg, #a00fbd 0%, #e91e63 50%, #ffb74d 100%)',
            }
        },
    },
    plugins: [],
}

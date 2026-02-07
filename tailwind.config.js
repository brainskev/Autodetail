/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#FF6B35',
                    50: '#FFE8E0',
                    100: '#FFD4C7',
                    200: '#FFAD94',
                    300: '#FF8661',
                    400: '#FF6B35',
                    500: '#FF5002',
                    600: '#D13E00',
                    700: '#9E2F00',
                    800: '#6B2000',
                    900: '#381100',
                },
                secondary: '#1a1a1a',
                dark: '#0a0a0a',
                light: '#f5f5f5',
                border: '#e5e5e5',
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
                heading: ['var(--font-oxanium)', 'Oxanium', 'system-ui', 'sans-serif'],
                manrope: ['var(--font-manrope)', 'Manrope', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'display': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'marquee': 'marquee 22s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
        },
    },
    plugins: [],
}

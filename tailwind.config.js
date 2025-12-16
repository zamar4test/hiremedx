/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'light-grey': '#ECF0F1',
                'dark-charcoal': '#2C3E50',
                'pure-white': '#FFFFFF',
                'accent-blue': '#3498DB',
                'accent-blue-hover': '#2980B9'
            }
        },
    },
    plugins: [],
}

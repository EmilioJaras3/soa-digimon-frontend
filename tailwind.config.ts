import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#5b13ec",
                "primary-light": "#8b5cf6",
                "background-light": "#f6f6f8",
                "background-dark": "#020617",
                "surface-dark": "rgba(15, 23, 42, 0.6)",
                "surface-border": "rgba(255, 255, 255, 0.08)",
                "mega": "#ef4444",
                "ultimate": "#d946ef",
                "champion": "#06b6d4",
                "rookie": "#10b981"
            },
            fontFamily: {
                "display": ["var(--font-space-grotesk)", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "0.5rem",
                "lg": "1rem",
                "xl": "1.5rem",
                "full": "9999px"
            },
        },
    },
    plugins: [],
};

export default config;

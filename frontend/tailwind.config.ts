import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'google-blue': '#4285F4',
                brand: {
                    pink: "#FF5E8E",
                    blue: "#0061FF",
                    dark: "#0A0A0A",
                },
            },
            fontFamily: {
                inter: ["var(--font-inter)"],
                nepali: ["var(--font-mukta)"],
                magnolia: ["var(--font-magnolia)"],
                helvetica: ["Helvetica Now Display", "Helvetica", "Arial", "sans-serif"],
            },
            backgroundImage: {
                'workspace-left': 'radial-gradient(ellipse 200px 50% at -8% 40%, rgba(33, 123, 254, 0.3) 30%, transparent 100%)',
                'workspace-right': 'radial-gradient(ellipse 200px 50% at 115% 40%, rgba(33, 123, 254, 0.4) 100%, transparent)',
            },
        },
    },
    plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
    theme: {
        extend: {
            colors: {
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
        },
    },
};

export default config;

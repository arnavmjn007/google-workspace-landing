import localFont from "next/font/local";

export const magnolia = localFont({
    src: [
        {
            path: "../../public/fonts/Magnolia-Script.woff2",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-magnolia",
});

export const mukta = {
    variable: "--font-mukta",
};

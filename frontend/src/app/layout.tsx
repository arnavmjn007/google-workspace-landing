import { Inter, Mukta } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const mukti = Mukta({
  subsets: ["devanagari"],
  weight: ["400", "500", "700"],
  variable: "--font-mukta",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${mukti.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

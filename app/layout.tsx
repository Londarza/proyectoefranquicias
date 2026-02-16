import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "e-Franquicias",
  description:
    "Plataforma para explorar oportunidades de franquicias con informacion clara y acompanamiento profesional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,100..700,0..1,0&display=optional"
        />
      </head>
      <body
        className={`${manrope.variable} font-display bg-background-light text-[#141217] antialiased selection:bg-accent/30`}
      >
        {children}
      </body>
    </html>
  );
}

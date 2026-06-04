import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import MovingLines from "@/components/MovingLines";
import ClickEffect from "@/components/ClickEffect";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Rasel Ahmed | Web Developer",
  description: "Portfolio of Rasel Ahmed, a Full Stack Developer building modern web applications with a focus on aesthetics and functionality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col relative overflow-x-hidden">
        <CustomCursor />
        <MovingLines />
        <ClickEffect />
        <SmoothScroll>
          <div className="fixed inset-0 pointer-events-none bg-noise z-0"></div>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}



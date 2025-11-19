import "./globals.css";
import NavBar from "../components/NavBar";
import {
    Geist,
    Geist_Mono,
    Solway,
    Kantumruy_Pro,
    Sedgwick_Ave_Display,
    Manrope
} from "next/font/google";
import type { ReactNode } from "react";
import Footer from "../components/Footer";

const geistSans  = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono  = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const solway     = Solway({ variable: "--font-solway", weight: "700", subsets: ["latin"] });
const kantumruy  = Kantumruy_Pro({ variable: "--font-kantumruy", weight: ["400","500","700"], subsets: ["latin"] });
const sedgwick   = Sedgwick_Ave_Display({ variable: "--font-sedgwick", weight: "400", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-manrope", weight: "600", subsets: ["latin"] })

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${kantumruy.variable} ${sedgwick.variable}`}>
      <body className={`${geistSans.variable} ${geistMono.variable} ${solway.variable} 
                        ${manrope.variable}`}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

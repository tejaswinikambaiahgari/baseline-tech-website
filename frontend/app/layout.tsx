import "./globals.css";
import NavBar from "../components/NavBar";
import { Geist, Geist_Mono, Solway, Kantumruy_Pro, Sedgwick_Ave_Display, Epilogue, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import { Providers } from "./providers";

const geistSans  = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono  = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const solway     = Solway({ variable: "--font-solway", weight: "700", subsets: ["latin"] });
const kantumruy  = Kantumruy_Pro({ variable: "--font-kantumruy", weight: ["400","500","700"], subsets: ["latin"] });
const sedgwick   = Sedgwick_Ave_Display({ variable: "--font-sedgwick", weight: "400", subsets: ["latin"] });
const epilogue   = Epilogue({ variable: "--font-epilogue", weight: "600", subsets: ["latin"] })
const manrope    = Manrope({ variable: "--font-manrope", weight: ["400", "600"], subsets: ["latin"] })

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${solway.variable} 
                        ${kantumruy.variable} ${sedgwick.variable} ${epilogue.variable} 
                        ${manrope.variable} bg-gray-100`}>
        <Providers>
            <NavBar />
            <main className="mt-24">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
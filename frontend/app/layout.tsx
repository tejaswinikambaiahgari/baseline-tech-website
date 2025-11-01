import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import { Solway } from "next/font/google"
import {Providers} from "./providers";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const solway = Solway({
    variable: "--font-solway",
    weight: "700",
});

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} ${solway.variable} bg-gray-100`}>
                <Providers>
                    <NavBar />
                    <main className="mt-24">{children}</main>
                </Providers>
            </body>
        </html>
    );
}
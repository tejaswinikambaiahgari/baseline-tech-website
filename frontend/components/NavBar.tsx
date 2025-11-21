"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/flowmersion_logo.png"
import {useState} from "react";

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const [ symbol, setSymbol ] = useState("☰");

    function closeTheBurger() {
        setOpen(false);
        setSymbol("☰")
    }

    {/* Notice how some features will have "sm:", "md:" and "lg:" These change the NavBar such it
     presents differently for mobile, small, medium and large-screens respectively. */}
    return (
        <nav className="w-full h-[15vh] backdrop-blur-sm fixed top-0 left-0 z-50">
            <div className="w-full h-full px-10 flex justify-between items-center">
                <Link href="/" className="flex items-center sm:pl-6 md: pl-8 lg:pl-10">
                    <Image src={logo} alt="Logo" width={400}
                           height={400} className="cursor-pointer" priority/>
                </Link>

                <div className="hidden md:flex items-center sm:space-x-4 md:text-xl lg:text-2xl md:space-x-8 lg:space-x-16
                                [font-family:var(--font-manrope)] sm:pr-6 md:pr-8 lg:pr-10">
                    <Link href="/product"
                          className="text-white hover:text-gray-300 transition-colors duration-200">
                        SmartRide
                    </Link>

                    <Link href="/simulator"
                          className="text-white hover:text-gray-300 transition-colors duration-200">
                        Upcoming
                    </Link>

                    <Link href="/joinus"
                          className="text-white hover:text-gray-300 transition-colors duration-200">
                        Community
                    </Link>

                    <Link href="/about"
                          className="text-white hover:text-gray-300 transition-colors duration-200">
                        About
                    </Link>
                </div>

                <button className="md:hidden bg-transparent backdrop-blur-sm text-3xl"
                        onClick={() => {
                            setOpen(!open);
                            setSymbol( symbol == "☰" ? "✕" : "☰" )
                        }}>
                    { symbol }
                </button>
            </div>

            {open && (
                <div className="md:hidden
                        w-[20vw]
                        ml-[75%]
                        bg-black/45 backdrop-blur-sm
                        flex flex-col
                        text-right
                        px-6 py-6
                        space-y-4
                        text-lg
                        [font-family:var(--font-manrope)]
                        transition-all duration-300">

                    <Link href="/product" onClick={() => closeTheBurger()} className="text-white hover:text-gray-300 transition-colors duration-200">SmartRide</Link>
                    <Link href="/simulator" onClick={() => closeTheBurger()} className="text-white hover:text-gray-300 transition-colors duration-200">Upcoming</Link>
                    <Link href="/joinus" onClick={() => closeTheBurger()} className="text-white hover:text-gray-300 transition-colors duration-200">Community</Link>
                    <Link href="/about" onClick={() => closeTheBurger()} className="text-white hover:text-gray-300 transition-colors duration-200">About</Link>
                </div>
            )}
        </nav>
    );
}
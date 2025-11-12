"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/Flowmersion_Logo.png"

export default function NavBar() {
    return (
        <nav className="w-full h-[15vh] backdrop-blur-sm fixed top-0 left-0 z-50 transition-transform duration-300 md:translate-y-0 -translate-y-full md:h-[15vh]">
            <div className="w-full h-full px-10 flex justify-between items-center">
                <Link href="/" className="flex items-center sm:pl-6 md: pl-8 lg:pl-10">
                    <Image src={logo} alt="Logo" width={400}
                           height={400} className="cursor-pointer" priority />
                </Link>

                <div className="flex items-center sm:space-x-4 md:text-xl lg:text-2xl md:space-x-8 lg:space-x-16
                                [font-family:var(--font-manrope)] sm:pr-6 md:pr-8 lg:pr-10">
                    <Link href="/product" className="text-white hover:text-gray-300 transition-colors duration-200">
                        SmartRide
                    </Link>

                    <Link href="/simulator" className="text-white hover:text-gray-300 transition-colors duration-200">
                        Upcoming
                    </Link>

                    <Link href="/joinus" className="text-white hover:text-gray-300 transition-colors duration-200">
                        Community
                    </Link>

                    <Link href="/about" className="text-white hover:text-gray-300 transition-colors duration-200">
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
}
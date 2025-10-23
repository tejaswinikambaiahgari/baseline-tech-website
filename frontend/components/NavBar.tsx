"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/baseline_tech_OG_logo.png"

export default function NavBar() {
    return (
        <nav className="w-full h-[12.5vh] bg-[#65b4d0] shadow-sm fixed top-0 left-0 z-50">
            <div className="mx-auto w-full h-full px-12 lg:px-20 py-3 flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <Image src={logo} alt="Logo" width={383}
                           height={100} className="cursor-pointer" priority />
                </Link>

                <div className="space-x-6 md:space-x-10 lg:space-x-14
                        text-md md:text-lg lg:text-xl [font-family:var(--font-solway)] whitespace-nowrap">
                    <Link href="/product" className="text-white hover:text-gray-600">
                        PRODUCT
                    </Link>

                    <Link href="/simulator" className="text-white hover:text-gray-600">
                        SIMULATOR
                    </Link>

                    <Link href="/about" className="text-white hover:text-gray-600">
                        ABOUT
                    </Link>

                    <Link href="/joinus" className="bg-white text-[#65b4d0] font-semibold px-4
                                                        py-2 rounded-lg hover:bg-[#4aa0bc]
                                                        hover:text-white transition-all
                                                        duration-200 shadow-sm hover:shadow-md">
                        JOIN US!
                    </Link>
                </div>
            </div>
        </nav>
    );
}
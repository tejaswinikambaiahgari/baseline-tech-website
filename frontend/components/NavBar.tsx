"use client";
import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
            <div className="mx-auto max-w-7xl px-6 py-3 flex justify-between items-center">
                <Link href="/" className="text-xl font-semibold text-gray-800">SnoWin</Link>

                <div className="space-x-6">
                    <Link href="/about" className="text-gray-600 hover:text-gray-900">
                        About
                    </Link>

                    <Link href="/projects" className="text-gray-600 hover:text-gray-900">
                        Projects
                    </Link>

                    <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
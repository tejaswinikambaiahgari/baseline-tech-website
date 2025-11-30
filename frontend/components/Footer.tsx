"use client";

import Image from "next/image";
import Link from "next/link";

const year = new Date().getFullYear();

const navLinks = [
  { href: "/smartride", label: "SmartRide" },
  { href: "/upcoming", label: "Upcoming" },
  { href: "/community", label: "Community" },
  { href: "/about", label: "About" },
];

function IconYouTube(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" />
      <path d="M10 9l6 3-6 3V9z" fill="currentColor" />
    </svg>
  );
}
function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" />
      <circle cx="8" cy="9" r="1.5" fill="currentColor" />
      <path d="M6.5 17v-5.5h3V17h-3zm5 0v-3.2c0-1.6 1.3-2.8 2.8-2.8 1 0 1.8.5 2.2 1.2V17h-3v-3c0-.5-.4-.9-.9-.9s-.9.4-.9.9V17h-1.2z" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full mt-0 bg-[#2f2f30] text-white font-sans">
      <div className="mx-auto w-full max-w-7xl px-6 py-10">
        {/* top grid */}
        <div className="grid gap-10 md:gap-14 lg:gap-20 md:grid-cols-[2fr_1fr_1fr]">
          {/* LEFT: brand + mission + socials */}
          <div>
            <div className="flex items-center">
              <Image
                src="/flowmersion_logo.png"
                alt="Flowmersion"
                width={1000}
                height={200}
                priority
                className="block w-auto h-[72px]"
              />
            </div>

            <p className="mt-6 text-white/85 text-lg leading-snug max-w-2xl">
              On a mission to make mountain sports safe, smart and accessible.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <Link aria-label="YouTube" href="#" className="text-white hover:text-white/80">
                <IconYouTube className="h-6 w-6" />
              </Link>
              <Link aria-label="LinkedIn" href="#" className="text-white hover:text-white/80">
                <IconLinkedIn className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* MIDDLE: links */}
        <div className="ml-16 md:ml-24">
        <ul className="space-y-3 text-white">
            {navLinks.map((l) => (
            <li key={l.href}>
                <Link
                href={l.href}
                className="text-white hover:text-white/80 visited:text-white active:text-white"
                >
                {l.label}
                </Link>
            </li>
            ))}
        </ul>
        </div>

          {/* RIGHT: contact */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-white">Contact</h3>
            <div className="space-y-1">
              <p className="text-white">Naman Gupta, Co-Founder</p>
              <a
                href="mailto:naman.eidar@gmail.com"
                className="text-white hover:text-white/80 visited:text-white active:text-white break-all"
              >
                naman.eidar@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* divider */}
        <hr className="mt-10 border-t-2 border-[#86bfd3]" />

        {/* bottom bar */}
        <div className="py-4 text-center text-sm text-white/80">
          Copyright © {year} | Boston, MA, US
        </div>
      </div>
    </footer>
  );
}

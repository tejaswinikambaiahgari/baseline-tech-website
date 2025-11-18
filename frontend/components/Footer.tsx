"use client";

import Image from "next/image";
import Link from "next/link";

const year = new Date().getFullYear();

const navLinks = [
  { href: "/", label: "Snowin" },
  { href: "/simulator", label: "Simulator" },
  { href: "/product", label: "Product" },
  { href: "/community", label: "Community" },
];

// icons
function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}
function IconX(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
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
    <footer className="w-full bg-[#4b4b4b] text-white font-sans">
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        {/* top grid */}
        <div className="grid md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 md:gap-14 lg:gap-20">
          {/* BRAND COLUMN (wrap everything in one container) */}
          <div>
          <div className="flex items-center gap-0">
          <Image
            src="/flowmersion-logo.png"
            alt="Flowmersion"
            width={1200}
            height={240}                   
            priority
            className="block w-auto h-[55px]"              
        />
            </div>

            {/* social icons */}
            <div className="mt-6 flex items-center gap-4">
              <Link aria-label="Instagram" href="#" className="text-white hover:text-white/80">
                <IconInstagram className="h-6 w-6" />
              </Link>
              <Link aria-label="X (Twitter)" href="#" className="text-white hover:text-white/80">
                <IconX className="h-6 w-6" />
              </Link>
              <Link aria-label="YouTube" href="#" className="text-white hover:text-white/80">
                <IconYouTube className="h-6 w-6" />
              </Link>
              <Link aria-label="LinkedIn" href="#" className="text-white hover:text-white/80">
                <IconLinkedIn className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* LINKS COLUMN (pushed right with padding) */}
          <div className="md:pl-16 lg:pl-24">
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

          {/* ADDRESS COLUMN */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-white">Address</h3>
            <address className="not-italic text-white/80">
              123 Street Boston, MA 12345
            </address>
          </div>

          {/* CONTACT COLUMN */}
          <div>
            <h3 className="mb-4 text-lg font-medium text-white">Contact</h3>
            <div className="space-y-1">
              <p className="text-white">Naman Gupta, Co-Founder</p>
              <a
                href="mailto:naman.eidar@gmail.com"
                className="text-white hover:text-white/80 visited:text-white active:text-white"
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

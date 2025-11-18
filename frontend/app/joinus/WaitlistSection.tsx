"use client"

import waitlistBG from "../../public/images/joinus/waitlist_bg.png"
import WaitlistModal from "../../components/joinus/WaitlistModal"

export default function WaitlistSection() {
    return (
        <section className="relative w-full h-[90vh] flex flex-col items-start justify-center text-white
                            bg-cover bg-center [font-family:var(--font-manrope)]"
                 style={{ backgroundImage: `url(${waitlistBG.src})` }}>

            <div className="absolute inset-0 bg-gray-800/15" />

            <div className="relative flex flex-col items-start text-left ml-[10%] max-w-xl [text-shadow:0_4px_12px_rgba(0,0,0,0.35)]">
                <h1 className="text-7xl font-bold mb-4">Join The Waitlist</h1>

                <p className="mb-8 text-2xl font-bold">
                    Be the first to know when we launch. Get early access and exclusive updates.
                </p>

                <WaitlistModal trigger={
                    <button className="px-6 py-3 text-lg rounded-xl backdrop-blur-sm border-2 border-white
                                     hover:bg-gray-300 hover:text-gray-800 font-black transition">
                        Get Early Access →
                    </button>
                }/>
            </div>
        </section>
    );
}
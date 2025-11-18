"use client"

import { useState } from "react";
import waitlistBG from "../../public/images/joinus/waitlist_bg.png"
import WaitlistModal from "../../components/joinus/WaitlistModal"

export default function WaitlistSection() {
    const [ open, setOpen ] = useState(false);

    return (
        <section className="relative w-full h-[80vh] flex items-center justify-center text-white
                            bg-cover bg-center"
                 style={{ backgroundImage: `url(${waitlistBG})` }}>
            <h2 className="text-4xl font-bold mb-4">Join The Waitlist</h2>
            <p className="text-gray-600 mb-8 text-center max-w-lg">
                Be the first to know when we launch. Get early access and exclusive updates.
            </p>

            <WaitlistModal trigger={
                <button className="px-6 py-3 rounded-xl bg-black text-white font-semibold
                                 hover:bg-gray-800 transition">
                    Join Waitlist
                </button>
            }/>
        </section>
    );
}
"use client"
import Image from "next/image"
import snowflake from "../../public/snowflake_sample.jpg"
import { useState } from "react";
import JoinWaitlistModal from "../../components/joinus/JoinWaitlistModal";

export default function JoinUsPage() {
    const [ isModalOpen, setIsModalOpen ] = useState(false)

    return (
        <main className="min-h-screen flex flex-col items-center justify-start bg-white
                         text-gray-800">
            <section className="w-full bg-gray-100 py-20 flex flex-col items-center text-center">
                {/* Top Section of Updates */}
                <section className="w-[49%] bg-[#e8f4f8] rounded-t-3xl shadow-lg py-16 px-8 flex
                                    flex-col items-center text-center">
                    <h1 className="text-5xl font-extrabold text-[#65b4d0] mb-6">STAY TUNED</h1>
                    <p className="max-w-2xl text-lg text-gray-700 italic">
                        "SnoWin is launching updates soon! Keep on the lookout and be the first to
                        experience the snow all-year round from the comfort of indoors through our very
                        own snow simulators. Be the first to get early access updates!"
                    </p>
                </section>

                {/* Second Row - Join Us + Button */}
                <section className="w-[49%] bg-white rounded-b-3xl shadow-lg flex flex-col
                                    md:flex-row justify-between items-stretch overflow-hidden">
                    {/* Left Box */}
                    <div className="flex-1 bg-gray-100 flex flex-col justify-center items-center
                                    md:items-start px-8 py-12 relative">
                        <h3 className="text-3xl font-semibold text-[#65b4d0] mb-3 text-center
                                       md:text-left">
                            Keep up with the latest updates →
                        </h3>
                    </div>

                    {/* Right Box (Button) */}

                    <div onClick={() => setIsModalOpen(true)}
                         className="flex-[0.4] bg-[#65b4d0] flex items-center justify-center
                                    hover:scale-[1.03] transition-transform cursor-pointer">
                        <span className="text-white font-semibold text-2xl hover:text-gray-100
                                           transition">
                            Join Waitlist
                        </span>
                    </div>
                </section>
            </section>

            <section className="w-full bg-[#65b4d0] py-24 flex flex-col items-center text-center">
                <h1 className="text-[6rem] font-extrabold tracking-tight mb-16 text-white
                               leading-tight max-w-[40%]">
                    OUR COMMUNITY
                </h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-6 w-[92%]
                                max-w-7xl">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-full aspect-square bg-gray-200 rounded-2xl
                                                overflow-hidden shadow-md hover:scale-[1.03]
                                                transition-transform">
                            <Image src={snowflake} alt={`Community Image ${i + 1}`}
                                   width={500} height={500}
                                   className="object-cover w-full h-full"/>
                        </div>
                    ))}
                </div>
            </section>
            
            <JoinWaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </main>
    );
}

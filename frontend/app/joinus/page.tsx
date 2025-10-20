"use client"
import Image from "next/image"
import snowflake from "../../public/snowflake_sample.jpg"

export default function JoinUsPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-start bg-white
                         text-gray-800">
            <section className="w-full bg-gray-100 py-20 flex flex-col items-center text-center">
                {/* Top Section of Updates */}
                <section className="px-6">
                    <h1 className="text-5xl font-bold text-[#65b4d0] mb-6">Stay Tuned</h1>
                    <p className="max-w-3xl text-lg mb-8">
                        SnoWin is launching updates soon! Keep on the lookout and be the first to
                        experience the snow all-year round from the comfort of indoors through our very
                        own snow simulators. Be the first to get early access updates!
                    </p>
                </section>

                {/* Second Row - Join Us + Button */}
                <section className="w-full bg-white py-12 flex flex-col md:flex-row items-center
                                    justify-center gap-8 px-6">
                    {/* Left Box */}
                    <div className="flex-1 bg-gray-100 rounded-2xl shadow-md p-8 text-center
                                    md:text-left">
                        <h3 className="text-3xl font-semibold text-[#65b4d0] mb-3">
                            Keep up with the latest updates
                        </h3>
                    </div>

                    {/* Right Box (Button) */}
                    <div className="w-[200px] h-[150px] bg-[#65b4d0] flex items-center justify-center
                                    rounded-2xl shadow-md hover:scale-105 transition-transform">
                        <button className="text-white font-semibold text-xl hover:text-gray-100 transition">
                            Join Waitlist
                        </button>
                    </div>
                </section>
            </section>

            <section className="w-full bg-white py-16 flex flex-col items-center">
                <h1 className="text-5xl font-semibold mb-10 text-[#65b4d0]">OUR COMMUNITY</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6
                                max-w-5xl">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-full aspect-square bg-gray-200 rounded-lg
                                                overflow-hidden">
                            <Image src={snowflake} alt={`Community Image ${i + 1}`}
                                   width={300} height={300}
                                   className="object-cover w-full h-full"/>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

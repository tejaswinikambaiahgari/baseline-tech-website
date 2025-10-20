"use client"
import Image from "next/image"
import snowflake from "../../public/snowflake_sample.jpg"

export default function JoinUsPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-start bg-white
                         text-gray-800"> {/* Skipping mt-[12.5vh] for now */}
            <section className="w-full bg-gray-100 py-20 flex flex-col items-center text-center">
                <h1 className="text-5xl font-bold mb-4 text-[#65b4d0]">Join The Waitlist</h1>
                <p className="text-lg max-w-2xl mb-8">
                    SnoWin is launching updates soon! Keep on the lookout and be the first to
                    experience the snow all-year round from the comfort of indoors through our very
                    own snow simulators. Be the first to get early access updates!
                </p>
                <button className="bg-[#65b4d0] text-white px-6 py-3 rounded-lg text-lg
                                    font-semibold hover:bg-[#4a9ebd] transition">
                    Join Waitlist
                </button>
            </section>

            <section className="w-full bg-white py-16 flex flex-col items-center">
                <h2 className="text-3xl font-semibold mb-10 text-[#65b4d0]">Our Community</h2>
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

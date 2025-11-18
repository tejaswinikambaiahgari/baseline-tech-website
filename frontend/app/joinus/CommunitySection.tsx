import Image from "next/image"

import comm1 from "../../public/images/joinus/community1.png"
import comm2 from "../../public/images/joinus/community2.png"
import comm3 from "../../public/images/joinus/community3.png"
import comm4 from "../../public/images/joinus/community4.png"
import comm5 from "../../public/images/joinus/community5.png"
import comm6 from "../../public/images/joinus/community6.png"
import comm7 from "../../public/images/joinus/community7.png"
import comm8 from "../../public/images/joinus/community8.png"

export default function CommunitySection() {
    const images = [ comm1, comm2, comm3, comm4, comm5, comm6, comm7, comm8 ];

    return (
        <section className="bg-[#4b4b4b] text-white py-16 px-8">
            <h1 className="text-left mb-24 font-normal tracking-tight text-8xl px-10
                            bg-gradient-to-r from-white to-gray-800
                           bg-clip-text text-transparent">
                Our Community
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-xs sm:max-w-2xl md:max-w-5xl lg:max-w-7xl mx-auto">
                {images.map((src, index) => (
                    <Image
                        key={index}
                        src={src}
                        alt={`Community Image ${index + 1}`}
                        className="rounded-lg object-cover w-full h-80"
                    />
                ))}
            </div>
        </section>
    );
}
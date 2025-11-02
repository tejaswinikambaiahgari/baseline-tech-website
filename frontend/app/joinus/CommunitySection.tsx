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
        <section className="bg-[radial-gradient(circle_at_center,_#65b4d0_0%,_#232222_100%)]
                            text-white py-16 px-8">
            <h2 className="text-3xl font-semibold mb-10 text-center">Our Community</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {images.map((src, index) => (
                    <Image key={index} src={src} alt={`Community Image ${index + 1}`}
                         className="rounded-lg object-cover w-full h-60"/>
                ))}
            </div>
        </section>
    );
}
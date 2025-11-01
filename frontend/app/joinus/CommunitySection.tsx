export default function CommunitySection() {
    // TODO: Get me the community images, NOW!
    const images = [
        "/images/community1.jpg",
        "/images/community2.jpg",
        "/images/community3.jpg",
        "/images/community4.jpg",
        "/images/community5.jpg",
        "/images/community6.jpg",
        "/images/community7.jpg",
        "/images/community8.jpg",
    ];

    return (
        <section className="bg-gradient-to-b from-slate-800 to-slate-900 text-white py-16 px-8">
            <h2 className="text-3xl font-semibold mb-10 text-center">Our Community</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {images.map((src, index) => (
                    <img key={index} src={src} alt={`Community Image ${index + 1}`}
                         className="rounded-lg object-cover w-full h-60"/>
                ))}
            </div>
        </section>
    );
}
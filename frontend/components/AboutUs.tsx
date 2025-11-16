import Image from "next/image";

/**
 * FAQ Data
 * Add or change faq data to update FAQ panel
 */
const faqData = [
    {
        question: "How does it work?",
        answer: "Placeholder copy"
    },
    {
        question: "How do you attach it to a snowboard?",
        answer: "Placeholder copy"
    },
    {
        question: "How do you attach it to a snowboard?",
        answer: "Placeholder copy"
    },
    {
        question: "Can I use it with other sports?",
        answer: "The Snowboarding Wearable is a standalone hardware device with embedded sensors " +
            "that include a gyroscope, accelerometer, and magnetometer, which transmit data wirelessly " +
            "to a mobile application.  The mobile application provides the user interface for data visualization, " +
            "performance insights, and suggestions.  The system is design to operate in cold conditions with minimal " +
            "power consumption."
    },
];


export default function AboutUs() {
    return (
        <div className="relative min-h-screen py-16 px-4 bg-gradient-to-b from-[#071013] via-[#172A31] to-[#071013] overflow-hidden">
            {/* Circle 1 - Top Left/Center */}
            <div
                className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-50 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, #383838 0%, #1c252b 100%)',
                    filter: 'blur(80px)'
                }}
            />

            {/* Circle 2 - Bottom Right/Center */}
            <div
                className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-50 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, #383838 0%, #1c252b 100%)',
                    filter: 'blur(80px)'
                }}
            />

            {/* Content */}
            <div className="relative z-10">
                {/* Panel 1 - Why Us */}
                <div className="max-w-7xl mx-auto mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Why Us Text - Left */}
                        <div className="space-y-6 w-[603px] h-[330px] text-center md:text-left mx-auto md:mx-0">
                            <h2 className="font-['Manrope'] text-[56px] font-semibold">
                                <span className="bg-gradient-to-r from-white to-[#A6A6A6] bg-clip-text text-transparent">
                                    Why Us
                                </span>
                            </h2>
                            <p className="text-white font-['Manrope'] text-[24px] font-medium leading-[100%]">
                                Why Flowmersion? Because we design with one rule: the mountain comes
                                first.
                            </p>
                            <p className="text-white font-['Manrope'] text-[24px] font-medium leading-[100%]">
                                Our devices are built to be nearly invisible on your board, deliver
                                pro-grade
                                performance monitoring, and survive the cold, wet, and impact of
                                real
                                riding.
                                We pair rugged hardware with simple, beautiful software so your runs
                                are
                                safer,
                                smarter, and more fun — whether you're carving groomers, hitting
                                cliffs,
                                or
                                teaching a friend to ride.
                            </p>
                        </div>

                        {/* Why Us Image - Right */}
                        <div className="flex items-center justify-center">
                            <Image
                                src="/WhyUsPanel.png"
                                alt="Why Us"
                                width={581}
                                height={462}
                                priority
                                className="block w-full h-auto max-h-[330px] object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Panel 2 - Who We Are */}
                <div className="max-w-7xl mx-auto mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Who We Are Image - Left on desktop, below text on mobile */}
                        <div className="flex items-center justify-center order-2 md:order-1">
                            <Image
                                src="/WhoAreWePanel.png"
                                alt="Who We Are"
                                width={581}
                                height={462}
                                priority
                                className="block w-full h-auto max-h-[330px] object-contain"
                            />
                        </div>

                        {/* Who We Are Text - Right on desktop, above image on mobile */}
                        <div className="space-y-6 w-[603px] h-[330px] order-1 md:order-2 text-center md:text-left mx-auto md:mx-0">
                            <h2 className="font-['Manrope'] text-[56px] font-semibold">
                                <span className="bg-gradient-to-r from-white to-[#A6A6A6] bg-clip-text text-transparent">
                                    Who We Are
                                </span>
                            </h2>
                            <p className="text-white font-['Manrope'] text-[24px] font-medium leading-[100%]">
                                Founded by snowboarders for snowboarders, we design gear built
                                to perform and last. We believe the best days on the mountain start
                                with reliable equipment and a deep respect for the outdoors.
                                Every product we make is tested on real slopes, by real riders.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Panel 3 - FAQ */}
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-8">
                        <div className="tspace-y-4">
                            <h2 className="font-['Manrope'] text-[56px] font-semibold">
                                <span className="bg-gradient-to-r from-white to-[#A6A6A6] bg-clip-text text-transparent">
                                    Frequently Asked Questions
                                </span>
                            </h2>
                            <p className="text-white font-['Manrope'] text-[24px] font-medium leading-[100%]">
                                Everything you need to know. <br/>Can't find what you're looking for? Reach
                                out to our customer support team.
                            </p>
                        </div>

                        {/* FAQ Items - Mapped from data */}
                        <div className="space-y-4 mt-12">
                            {faqData.map((faq, index) => (
                                <details
                                    key={index}
                                    className="group"
                                >
                                    <summary
                                        className="text-xl font-semibold text-white cursor-pointer flex justify-between items-center">
                                        {faq.question}
                                        <svg
                                            width="25"
                                            height="50"
                                            viewBox="0 0 25 50"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="transition-transform duration-300 group-open:rotate-90"
                                        >
                                            {/*SVG for arrow*/}
                                            <path d="M5.07147 13.6089L7.26587 11.4166L19.2182 23.3648C19.4109 23.5562 19.5638 23.7839 19.6681 24.0347C19.7725 24.2854 19.8262 24.5544 19.8262 24.826C19.8262 25.0976 19.7725 25.3665 19.6681 25.6173C19.5638 25.8681 19.4109 26.0957 19.2182 26.2872L7.26587 38.2416L5.07354 36.0492L16.2917 24.8291L5.07147 13.6089Z" fill="white"/>
                                        </svg>
                                    </summary>
                                    <p className="mt-4 text-gray-300">
                                        {faq.answer}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
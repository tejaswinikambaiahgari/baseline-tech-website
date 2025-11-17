"use client";


import Image from "next/image";
import React, { useEffect, useRef} from 'react';
import { StaticImageData } from "next/image";


/**
 * Add images to public then add them here to add companies to Trusted By Panel
 */
const companies = [
    '/SnowBoundExpoTrustByPanel.png',
    '/LynxTrustByPanel.png',
    '/SkiHausTrustByPanel.png'
];


/**
 * Image carousel for trusted by section
 * @constructor
 */
const ImageCarousel = () => {
    const scrollRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;


        let pos = -1;


        const scroll = () => {
            if (!container) return;


            pos += 1; // Scroll speed
            if (pos >= container.scrollWidth / 2) {
                pos = 0;
            }


            container.style.transform = `translateX(-${pos}px)`;
            requestAnimationFrame(scroll);
        };


        requestAnimationFrame(scroll);
    }, []);


    return (
        <div className="overflow-hidden w-full">
            <div
                ref={scrollRef}
                className="flex gap-12 items-center"
                style={{width: "max-content"}}
            >
                {[...companies, ...companies, ...companies].map((logo, i) => (
                    <Image
                        key={i}
                        src={logo}
                        alt="company logo"
                        width={200}
                        height={200}
                        className="object-contain h-[200px] w-auto"
                    />
                ))}
            </div>
        </div>
    );
}


/**
 * Template for testimonial cards
 */
interface TestimonialCardProps {
    picture: string | StaticImageData;
    quote: string;
    name: string;
    position: string;
}


const TestimonialCard: React.FC<TestimonialCardProps> = ({ picture, quote, name, position }) => {
    return (
        <div className="flex flex-col gap-6 w-full max-w-[364px] h-auto bg-[#D9D9D91A] rounded-[10px] p-4">
            {/* Image */}
            <div className="relative h-[111px] w-[113px] mx-auto">
                <Image
                    src={picture}
                    alt="profile picture"
                    fill
                    className="object-cover rounded-lg"
                />
            </div>


            {/* Content */}
            <div className="flex-1 flex flex-col">
                {/*Quote*/}
                <div>
                    <p className="font-inter text-white text-[18px] md:text-[20px] font-medium leading-[150%] tracking-[-1.1px]">
                        &#34;{quote}&#34;
                    </p>
                </div>


                {/* Name and Position */}
                <div className="mt-2">
                    <p className="font-inter text-center text-white text-[16px] md:text-[18px]">
                        - {name}, {position}
                    </p>
                </div>
            </div>
        </div>
    );
};


export default function ProductPage() {
    return (
        <div className="w-full overflow-x-hidden">
            {/* Panel 1 */}
            <div className="flex px-6 md:px-12 lg:px-20 py-12 md:py-20">
                <div className="flex flex-col lg:flex-row gap-8 md:gap-12 w-full items-center lg:items-start max-w-7xl mx-auto">
                    {/*Image Left*/}
                    <div className="relative h-[300px] w-full md:h-[400px] lg:flex-1 lg:ml-8 flex-shrink-0">
                        <Image
                            src= '/SmartRidePanel.png'
                            alt="Product animation"
                            fill
                            className="object-contain rounded-[14px]"
                        />
                    </div>


                    {/* Text on Right*/}
                    <div className="lg:flex-1 text-white flex flex-col space-y-6 md:space-y-8 lg:pr-8 text-center lg:text-left">
                        <h1 className="text-white text-[40px] md:text-[56px] leading-[100%] font-bold">
                            SnowIn
                        </h1>
                        <p className="text-base md:text-lg leading-[1.7]">
                            With the SnoWin device, snowboarding has never been more accessible.
                            Track all your moves with the touch of a button.
                        </p>
                        <button
                            className="w-auto px-8 md:px-9 py-3 md:py-[14px] rounded-[8px] bg-transparent border-2 border-[#40E0D0] text-[#40E0D0] font-semibold flex items-center justify-center gap-3 transition-all duration-300 ease-in-out hover:bg-[rgba(64,224,208,0.2)] hover:shadow-[0_0_20px_rgba(64,224,208,0.4)] mx-auto lg:mx-0"
                            style={{
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            Buy Now
                            <span className="text-xl">→</span>
                        </button>
                    </div>
                </div>
            </div>


            {/* Panel 2 */}
            <div className="flex px-6 md:px-12 lg:px-20 py-12 md:py-20 mb-20">
                <div className="flex flex-col lg:flex-row gap-8 items-center max-w-7xl mx-auto w-full">
                    {/* Text Left */}
                    <div className="flex-1 lg:pl-8 text-center lg:text-left">
                        <h2 className="bg-gradient-to-b from-[#65B4D0] to-[#FFFFFF] inline-block text-transparent bg-clip-text text-[40px] md:text-[56px] mb-8 md:mb-10 font-bold leading-[1.2]">
                            Precision.<br/>Performance.<br/>Potential.
                        </h2>
                    </div>


                    {/* Image*/}
                    <div className="px-4 md:px-12 w-full max-w-[772px] aspect-[772/675] rounded-[10px] overflow-hidden mx-auto">
                        <video
                            src="/snowboardingvideo.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover rounded-[10px]"
                        />
                    </div>
                </div>
            </div>


            {/* Panel 3  */}
            <div className="px-6 md:px-12 lg:px-20 py-20 md:py-32 relative">
                <div className="max-w-7xl mx-auto relative">
                    {/* ountain Background */}
                    <div className="absolute left-0 top-[-100px] md:top-[-150px] lg:top-[-200px] z-0 h-[400px] w-[600px] md:h-[700px] md:w-[1000px] lg:h-[800px] lg:w-[1200px] pointer-events-none opacity-40">
                        <Image
                            src="/mountain.png"
                            alt="mountain"
                            fill
                            className="object-contain object-left"
                        />
                    </div>




                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">


                        {/* Phone */}
                        <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
                            <h2 className="bg-gradient-to-b from-[#65B4D0] to-[#959595] text-transparent bg-clip-text font-bold text-4xl md:text-5xl lg:text-[40px] mb-8 lg:mb-12 text-center lg:text-left font-manrope leading-tight lg:ml-12 xl:ml-16">
                                Improve<br/> With Every<br/> Run
                            </h2>


                            {/* Phone */}
                            <div
                                className="relative h-[500px] w-[250px] md:h-[600px] md:w-[300px] lg:h-[640px] lg:w-[330px]"
                                style={{
                                    filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5))'
                                }}
                            >
                                <Image src="/phoneproduct.png" alt="Phone mockup" fill className="object-cover rounded-[14px]"/>
                            </div>
                        </div>


                        {/* Cards */}
                        <div className="lg:col-span-7 flex flex-col justify-center gap-8 lg:gap-12 lg:-ml-32 xl:-ml-40 lg:mt-20 xl:mt-24 relative z-10">


                            {/* Analytics Card 1 */}
                            <div className="flex flex-col md:flex-row items-start gap-4 relative">
                                {/* Connector Line*/}
                                <div className="hidden md:block relative h-[80px] w-[120px] lg:w-[150px] xl:w-[200px] flex-shrink-0">
                                    <Image src="/line2.png" alt="connector line" fill className="object-contain"/>
                                </div>


                                <div className="flex-1">
                                    {/* Label */}
                                    <div className="bg-[#606060] text-white rounded-[20px] px-3 py-2 w-fit mb-4">
                                        <p className="text-[10px] md:text-xs font-medium whitespace-nowrap">LIVE TRACKING ANALYTICS</p>
                                    </div>


                                    {/* Icon + Text */}
                                    <div className="flex items-start gap-4">
                                        <div className="relative h-[50px] w-[50px] md:h-[60px] md:w-[60px] flex-shrink-0">
                                            <Image src="/AnalyticsIcon.png" alt="analytics icon" fill className="object-contain"/>
                                        </div>
                                        <p className="text-white text-sm md:text-base">
                                            Lorem ipsum dolor sit amet consectetur. Condimentum aliquam nunc vestibulum proin aliquam tellus habitasse suspendisse gravida. Metus phasellus ridiculus nisi velit libero vel id.
                                        </p>
                                    </div>
                                </div>
                            </div>


                            {/* Analytics Card 2 */}
                            <div className="flex flex-col md:flex-row items-start gap-4 relative md:translate-y-8">
                                {/* Connector Line */}
                                <div className="hidden md:block relative h-[80px] w-[120px] lg:w-[150px] xl:w-[200px] flex-shrink-0">
                                    <Image src="/snowboardicon.png" alt="connector line" fill className="object-contain"/>
                                </div>


                                <div className="flex-1">
                                    {/* Label */}
                                    <div className="bg-[#606060] text-white rounded-[20px] px-3 py-2 w-fit mb-4">
                                        <p className="text-[10px] md:text-xs font-medium whitespace-nowrap">LIVE TRACKING ANALYTICS</p>
                                    </div>


                                    {/* Icon + Text */}
                                    <div className="flex items-start gap-4">
                                        <div className="relative h-[50px] w-[50px] md:h-[60px] md:w-[60px] flex-shrink-0">
                                            <Image src="/snowboardicon.png" alt="analytics icon" fill className="object-contain"/>
                                        </div>
                                        <p className="text-white text-sm md:text-base">
                                            Lorem ipsum dolor sit amet consectetur. Condimentum aliquam nunc vestibulum proin aliquam tellus habitasse suspendisse gravida. Metus phasellus ridiculus nisi velit libero vel id.
                                        </p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>


            {/* Panel 4*/}
            <div className="flex px-6 md:px-12 lg:px-20 py-12 md:py-20">
                <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center mx-auto w-full max-w-7xl">
                    {/* Text Left */}
                    <div className="w-full lg:flex-1 lg:pl-8 text-center lg:text-left">
                        <h2 className="bg-gradient-to-r from-[#959595] to-[#65B4D0] inline-block text-transparent bg-clip-text mb-6 md:mb-4 font-bold text-[40px] md:text-[56px] font-manrope">
                            Trusted By
                        </h2>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center w-full lg:pr-8">
                        <ImageCarousel/>
                    </div>
                </div>
            </div>


            {/* Panel 5*/}
            <div className="flex flex-col px-6 md:px-12 lg:px-20 py-12 md:py-20">
                {/* Text */}
                <div className="flex items-center justify-center gap-4">
                    {/* Left Line */}
                    <div className="flex-1 h-[5px] bg-gradient-to-l from-white to-transparent opacity-70"></div>


                    <h2 className="text-center text-[32px] md:text-[40px] text-white font-bold">
                        Testimonies
                    </h2>


                    {/* Right Line */}
                    <div className="flex-1 h-[5px] bg-gradient-to-r from-white to-transparent opacity-70"></div>
                </div>


                {/* Testimonial Cards */}
                <div className="flex flex-col lg:flex-row gap-8 items-center justify-center max-w-7xl mx-auto w-full">
                    <TestimonialCard
                        picture="/BradleyTestimonial.png"
                        quote="Snowin has changed how I ride. Can't imagine boarding without it now!"
                        name="HALEY"
                        position="MEMBER"
                    />


                    <TestimonialCard
                        picture="/ChrisTestimmonial.png"
                        quote="Seeing each run mapped out like Strava makes it so easy to spot where I can improve."
                        name="CHRIS"
                        position="MEMBER"
                    />


                    <TestimonialCard
                        picture="HaleyTestimonialsPanel.png"
                        quote="It's made reviewing runs faster and more precise, and my riders stay motivated chasing local leaderboard rankings."
                        name="BRADLEY"
                        position="MEMBER"
                    />
                </div>
            </div>
        </div>
    );
};

import Image from "next/image";

export default function SimulatorPage() {
  return (
    <div className="w-full bg-black min-h-screen">

      {/* Hero Panel — text first on mobile, side-by-side on desktop */}
      <div className="w-full px-6 md:px-12 lg:px-20 pt-16 pb-12 md:pt-20 md:pb-20 bg-black">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center justify-center">

            {/* Text — order-1 on mobile so it appears first */}
            <div className="w-full lg:w-1/2 text-white flex flex-col items-center lg:items-start order-1 lg:order-2">
              <div className="w-full text-center lg:text-left">
                <p className="text-[#40E0D0] uppercase tracking-widest text-sm font-semibold mb-3">
                  Meet our Simulator
                </p>
                <h1 className="text-white text-[36px] md:text-[56px] leading-[1.05] font-bold mb-4">
                  Indoor Simulator
                </h1>
                <h2 className="text-white text-[20px] md:text-[28px] font-bold leading-[1.3] mb-4">
                  Make snowboarding safe, trainable,
                  <br />and accessible all year round.
                </h2>
                <p className="text-base md:text-lg leading-[1.7] text-gray-300 mb-6">
                  Train smarter before you hit the snow.
                </p>
                <button
                  className="w-auto px-8 py-3 rounded-[8px] bg-transparent border-2 border-[#40E0D0] text-[#40E0D0] font-semibold inline-flex items-center justify-center gap-3 transition-all duration-300 ease-in-out hover:bg-[rgba(64,224,208,0.2)] hover:shadow-[0_0_20px_rgba(64,224,208,0.4)]"
                >
                  Learn More
                  <span className="text-xl">&rarr;</span>
                </button>
              </div>
            </div>

            {/* Image — order-2 on mobile so it appears below text */}
            <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
              <div className="relative w-full h-[220px] md:h-[380px] max-w-[560px]">
                <Image
                  src="/drone.png"
                  alt="Indoor Simulator"
                  fill
                  className="object-contain rounded-[14px]"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Features Panel */}
      <div className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-20 bg-black">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Text */}
            <div className="w-full lg:w-1/2 lg:pl-8 text-center lg:text-left">
              <h2 className="bg-gradient-to-b from-[#65B4D0] to-[#FFFFFF] inline-block text-transparent bg-clip-text text-[40px] md:text-[56px] mb-6 font-bold leading-[1.2]">
                Train.<br />Improve.<br />Conquer.
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-[1.7] mt-4">
                Our indoor simulator lets you practice every technique, carve every turn, and build muscle memory all without leaving the building.
              </p>
            </div>
            {/* Image */}
            <div className="w-full lg:w-1/2 px-4 md:px-12">
              <div className="relative w-full h-[260px] md:h-[380px] rounded-[10px] overflow-hidden mx-auto">
                <Image
                  src="/drone.png"
                  alt="Simulator in action"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-20 pb-24 md:pb-32 bg-black">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="flex-1 h-[5px] bg-gradient-to-l from-white to-transparent opacity-70"></div>
            <h2 className="text-center text-[32px] md:text-[40px] text-white font-bold">Why Simulator?</h2>
            <div className="flex-1 h-[5px] bg-gradient-to-r from-white to-transparent opacity-70"></div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center w-full">
            {[
              { icon: "snowboardicon.png", label: "Year-Round Access", desc: "Practice any time, regardless of season or weather." },
              { icon: "AnalyticsIcon.png", label: "Data-Driven Training", desc: "Get real-time feedback on your technique and progress." },
              { icon: "snowboardicon.png", label: "Safe Environment", desc: "Learn falls, jumps, and tricks without mountain risks." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-4 w-full max-w-[364px] h-auto bg-[#D9D9D91A] rounded-[10px] p-6 mx-auto">
                <div className="relative h-[60px] w-[60px] mx-auto">
                  <Image src={`/${item.icon}`} alt={item.label} fill className="object-contain" />
                </div>
                <h3 className="text-white text-[20px] font-bold text-center">{item.label}</h3>
                <p className="text-gray-300 text-center text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

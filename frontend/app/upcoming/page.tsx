import Image from "next/image";

export default function SimulatorPage() {
  return (
    <div className="w-full bg-black min-h-screen">

      {/* Hero Panel */}
      <div className="w-full px-6 md:px-12 lg:px-20 py-12 md:py-20 bg-black">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center justify-center">
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full h-[300px] md:h-[400px] max-w-[600px]">
                <Image
                  src="/drone.png"
                  alt="Indoor Simulator"
                  fill
                  className="object-contain rounded-[14px]"
                  priority
                />
              </div>
            </div>
            {/* Text */}
            <div className="w-full lg:w-1/2 text-white flex flex-col items-center lg:items-start">
              <div className="w-full text-center lg:text-left">
                <p className="text-[#40E0D0] uppercase tracking-widest text-sm font-semibold mb-3">
                  Meet our Simulator
                </p>
                <h1 className="text-white text-[40px] md:text-[56px] leading-[100%] font-bold mb-5">
                  Indoor Simulator
                </h1>
                <h2 className="text-white text-[24px] md:text-[32px] font-bold leading-[1.3] mb-5">
                  Make snowboarding{" "}
                  <br />safe, trainable, and
                  <br />accessible all year round.
                </h2>
                <p className="text-base md:text-lg leading-[1.7] text-gray-300 mb-7">
                  Train smarter before you hit the snow.
                </p>
                <button
                  className="w-auto px-8 md:px-9 py-3 md:py-[14px] rounded-[8px] bg-transparent border-2 border-[#40E0D0] text-[#40E0D0] font-semibold inline-flex items-center justify-center gap-3 transition-all duration-300 ease-in-out hover:bg-[rgba(64,224,208,0.2)] hover:shadow-[0_0_20px_rgba(64,224,208,0.4)]"
                >
                  Learn More
                  <span className="text-xl">&rarr;</span>
                </button>
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
              <h2 className="bg-gradient-to-b from-[#65B4D0] to-[#FFFFFF] inline-block text-transparent bg-clip-text text-[40px] md:text-[56px] mb-8 md:mb-10 font-bold leading-[1.2]">
                Train.<br />Improve.<br />Conquer.
              </h2>
              <p className="text-gray-300 text-base md:text-lg leading-[1.7] mt-4">
                Our indoor simulator lets you practice every technique, carve every turn, and build muscle memory all without leaving the building.
              </p>
            </div>
            {/* Image */}
            <div className="w-full lg:w-1/2 px-4 md:px-12">
              <div className="relative w-full h-[300px] md:h-[420px] rounded-[10px] overflow-hidden mx-auto">
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

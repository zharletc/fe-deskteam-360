import React, { useState } from "react";
import image4 from "../assets/image-4.webp";
import image5bg from "../assets/image-5-bg.webp";

// Impor gambar Anda

// 1. Data untuk accordion, agar kode lebih rapi
const featuresData = [
  {
    id: 1,
    title: "Unified Strategy, Maximum Impact",
    description:
      "Stop juggling multiple vendors. Our integrated platform ensures your message stays consistent across every voter touchpoint—saving you time, money, and headaches.",
  },
  {
    id: 2,
    title: "Built for Political Success",
    description:
      "Designed by campaign veterans, our tools are tailored for the unique challenges of political campaigns, not adapted from corporate software.",
  },
  {
    id: 3,
    title: "Scale to Your Race",
    description:
      "Whether you're running for school board or a statewide office, our platform scales to meet your needs and budget, providing the right tools at the right time.",
  },
];

// Komponen ikon panah kecil
const PlayArrowIcon = ({ className }) => (
  <svg
    viewBox="0 0 8 8"
    fill="currentColor"
    className={`w-3 h-3 flex-shrink-0 transition-transform duration-300 ${className}`}
  >
    <path d="M0 0L8 4L0 8V0Z" />
  </svg>
);

const WinningSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-black text-white py-24 px-6 md:px-16 overflow-hidden rounded-tl-[6rem] md:rounded-tl  -[12rem]">
   
      <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
        <img
          src={image5bg}
          alt="Background texture"
          className="absolute -top-1/4 -left-1/4 w-[150%] h-auto md:w-auto md:h-[150%]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Why Winning Campaigns Choose
          <br />
          Campaign Butler
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <img
              src={image4}
              alt="Strategy chess piece"
              className="rounded-2xl shadow-2xl shadow-blue-900/20"
            />
          </div>


          <div className="flex flex-col">
            {featuresData.map((feature, index) => {
              const isActive = index === activeIndex;

              return (
                <div key={feature.id} className="border-b border-gray-800">
                  <button
                    onClick={() => setActiveIndex(index)}
                    className="w-full flex items-start text-left py-6"
                  >
                    <PlayArrowIcon
                      className={`mr-4 mt-1.5 ${
                        isActive ? "text-red-500" : "text-gray-600"
                      }`}
                    />
                    <span
                      className={`text-xl font-semibold ${
                        isActive ? "text-white" : "text-gray-500"
                      }`}
                    >
                      {feature.title}
                    </span>
                  </button>

                  {isActive && (
                    <div className="pb-6 pl-10 text-gray-400 animate-fade-in">
                      <p>{feature.description}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinningSection;

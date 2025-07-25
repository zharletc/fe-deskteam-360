import React from "react";
import image13 from "../assets/image-13.png";
import image14 from "../assets/image-14.png";
import image15 from "../assets/image-15.png";
import image16 from "../assets/image-16.png";
import image17 from "../assets/image-17.webp";
const ServiceSection = () => {
  return (
    <>
      <section className="relative bg-[#EBF0FA] py-20 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0 flex justify-end items-center opacity-60 pointer-events-none">
          <img
            src={image17}
            alt="USA Map Background"
            className="w-auto h-full"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 text-gray-900">
            Serving Campaigns Nationwide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="flex rounded-full gap-2 items-center">
                <img src={image13} className="w-12" />
                <h3 className="font-bold text-black text-lg">All 50 States</h3>
              </div>

              <p className="text-black text-sm mt-2">
                Compliant solutions for campaigns anywhere in America
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex rounded-full gap-2 items-center">
                <img src={image14} className="w-12" />
                <h3 className="font-bold text-black text-lg">
                  Every Race Level
                </h3>
              </div>

              <p className="text-black text-sm mt-2">
                From city council to congressional campaigns
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex rounded-full gap-2 items-center">
                <img src={image15} className="w-12" />
                <h3 className="font-bold text-black text-lg">
                  Specialized Knowledge
                </h3>
              </div>

              <p className="text-black text-sm mt-2">
                Expertise in school board, judicial, and other specialized races
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex rounded-full gap-2 items-center">
                <img src={image16} className="w-12" />
                <h3 className="font-bold text-black text-lg">
                  Partisan & Non-Partisan
                </h3>
              </div>

              <p className="text-black text-sm mt-2">
                Solutions for every type of campaign
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;

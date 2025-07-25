import React from "react";

import image11 from "../assets/image-11.webp";
import image12 from "../assets/image-12.webp";

const ExperienceSection = () => {
  return (
    <section className="relative bg-black text-white  px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
        <img
          src={image11}
          alt="Background texture"
          className="absolute -top-1/4 -left-1/4 w-[150%] h-auto md:w-auto md:h-[150%]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto py-24 px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              <span className="text-red-500">30+</span> Years of Campaign
              Victory Experience
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              <strong className="text-red-500 font-semibold">
                Campaign Butler
              </strong>{" "}
              combines decades of political expertise with cutting-edge
              marketing technology. We've helped candidates at every level—from
              school board to statewide office—connect with voters and win
              elections. Our team understands that exposure wins elections, but
              only when it's strategic, consistent, and targeted. That's why
              we've built the only truly integrated campaign marketing platform
              that unites traditional outreach with digital essentials.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={image12}
              alt="Campaign Victory Experience Illustration"
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

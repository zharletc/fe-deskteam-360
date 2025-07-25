import React from "react";
import image2 from "../assets/image-2.png";
import image3 from "../assets/image-3.webp";
const CampaignSection = () => {
  return (
    <div className="bg-white px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <section className="py-16 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 flex justify-end">
            <div className="bg-gray-100 rounded-lg flex items-center justify-center">
              <img src={image2} className="max-w-[720px]  w-full" />
            </div>
          </div>


          <div className="flex-1 text-left">
            <h2 className="text-3xl font-bold mb-4 text-black">
              The Campaign Challenge
            </h2>
            <p className="text-gray-600">
              From digital presence to boots on the ground, we deliver the
              tools, technology, and expertise that modern campaigns need to
              connect with voters and secure victory.
            </p>
            <hr className="border-gray-300 my-10" />
          </div>
        </section>

        <section className="py-16 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-left order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4 text-black">
              The Campaign Butler Solution
            </h2>
            <p className="text-gray-600">
              We've created the first truly integrated campaign platform that
              handles everything from your domain name to your door-knocking
              strategy. Our unified approach eliminates communication gaps,
              reduces costs, and dramatically increases your campaign's
              effectiveness.
            </p>
          </div>

          <div className="flex-1 flex justify-center order-1 md:order-2">
            <div className="bg-gray-100 rounded-lg flex items-center justify-center">
              <img src={image3} className="max-w-[720px] w-full" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CampaignSection;

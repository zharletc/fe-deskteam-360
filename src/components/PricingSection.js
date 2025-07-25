import React from "react";
import image18 from "../assets/image-18.webp";
import image19 from "../assets/image-19.webp";
import image20 from "../assets/image-20.webp";
import Button from "./base/Button";
const PricingSection = () => {
  return (
    <>
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-black">
            Campaign Solutions for Every Budget
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-8 text-left">
              <div className="mb-6 flex justify-end">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img src={image18} alt="Icon" />
                </div>
              </div>
              <h3 className="font-bold text-xl mb-4 text-black">
                À La Carte Services
              </h3>
              <p className="text-gray-600 mb-6 font-medium">
                Build your custom campaign toolkit Starting at{" "}
                <strong>$99/month</strong>
              </p>
              <Button variant="secondary-outline">See Options →</Button>
            </div>

            <div className="bg-gray-900 text-white rounded-xl p-8 text-left">
              <div className="mb-6 flex justify-end">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img src={image20} alt="Icon" />
                </div>
              </div>
              <h3 className="font-bold text-xl mb-4">Full Suite Package</h3>
              <p className="text-gray-300 mb-6 font-medium">
                Everything you need to launch and run a professional campaign{" "}
                <strong>$500/month</strong>
              </p>
              <Button>Get Started →</Button>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 text-left">
              <div className="mb-6 flex justify-end">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img src={image19} alt="Icon" />
                </div>
              </div>
              <h3 className="font-bold text-xl mb-4 text-black">
                Custom Solutions
              </h3>
              <p className="text-gray-600 mb-6 font-medium">
                For larger campaigns with specialized needs
              </p>
              <Button variant="secondary-outline">Request Quote →</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingSection;

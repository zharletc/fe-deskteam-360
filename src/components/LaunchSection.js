import React from "react";
import image21 from "../assets/image-21.webp";
import image22 from "../assets/image-22.webp";
const ExternalLinkIcon = ({ className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
    />
  </svg>
);

const BulletIcon = () => (
  <svg
    viewBox="0 0 8 8"
    fill="currentColor"
    className="w-3 h-3 text-red-500 mr-3 mt-1.5 flex-shrink-0"
  >
    <path d="M0 0L8 4L0 8V0Z" />
  </svg>
);

const featuresList = [
  { strong: "Same-day", text: "domain and email setup" },
  { strong: "Professional", text: "website within 72 hours" },
  { strong: "Dedicated", text: "campaign strategist" },
  { strong: "Complete", text: "onboarding and training" },
];

const LaunchSection = () => {
  return (
    <>
      <section className="relative bg-black overflow-hidden text-white pt-24 pb-48 px-6 md:px-16">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-[40%] top-[20%] w-full h-full bg-gradient-to-br from-blue-500/40 via-blue-500/10 to-transparent blur-[250px] rounded-full scale-80 z-10"></div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Ready to Launch Your
                <br />
                <span className="text-red-500">Winning Campaign?</span>
              </h2>
              <p className="text-lg font-semibold mb-6">
                Get started today with Campaign Butler and receive:
              </p>
              <ul className="space-y-4">
                {featuresList.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <BulletIcon />
                    <span>
                      <strong className="text-white">{feature.strong}</strong>
                      <span className="text-gray-400"> {feature.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-gray-900 border border-gray-700 rounded-md px-4 py-3 placeholder:text-gray-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-gray-900 border border-gray-700 rounded-md px-4 py-3 placeholder:text-gray-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-900 border border-gray-700 rounded-md px-4 py-3 placeholder:text-gray-500"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number (optional)"
                  className="bg-gray-900 border border-gray-700 rounded-md px-4 py-3 placeholder:text-gray-500"
                />

                <div className="flex items-start space-x-3 mt-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 h-4 w-4 bg-gray-900 border-gray-700 text-red-500 focus:ring-red-500"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-400">
                    I agree to receive text messages from Campaign Butler. By
                    checking this box and providing your phone number,{" "}
                    <a
                      href="#"
                      className="text-red-500 underline hover:text-red-400"
                    >
                      read more...
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center space-x-2 bg-red-500 mt-4 px-6 py-3 rounded-md font-semibold hover:bg-red-600 transition-colors"
                >
                  <span>Launch My Campaign</span>
                  <ExternalLinkIcon />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#101827] text-white">
        <div className="absolute inset-0 z-0 opacity-70 pointer-events-none">
          <img
            src={image22}
            alt="background texture"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute z-10 bottom-0 left-0 w-full lg:w-1/2 flex justify-center pointer-events-none">
          <img
            src={image21}
            alt="Campaign expert"
            className="max-w-md w-full"
          />
        </div>

        <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-16">
          <div className="flex justify-end min-h-[30rem]">
            <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left py-24">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Visibility Starts Here. Victory Follows.
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto lg:mx-0">
                Don't leave your campaign success to chance. Partner with the
                experts who understand what it takes to win in today's complex
                political landscape.
              </p>
              <a
                href="#"
                className="inline-flex self-center lg:self-start items-center justify-center space-x-2 bg-red-500 px-6 py-3 rounded-md font-semibold hover:bg-red-600 transition-colors"
              >
                <span>Get Started Today</span>
                <ExternalLinkIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LaunchSection;

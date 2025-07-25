import React, { useState } from "react";
import ExternalLinkIcon from "./ExternalLinkIcon";
import image1 from "../assets/image-1.webp";
import Anchor from "./base/Anchor";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative bg-[#0D121C] text-white overflow-hidden rounded-br-[6rem] md:rounded-br-[12rem]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-radial-gradient from-gray-900/30 via-transparent to-transparent" />
      </div>
      <div className="absolute top-0 right-[10%] h-full w-1/2 z-10 hidden lg:flex items-center max-w-[780px]">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-blue-500/10 to-transparent blur-[120px] rounded-full scale-150 z-10"></div>
          <img
            src={image1}
            alt="Campaign network illustration"
            className="relative w-full h-full object-contain mix-blend-screen"
          />
        </div>
      </div>

      <div className="relative z-20 flex flex-col min-h-screen max-w-7xl mx-auto px-6 md:px-16 lg:px-8">
        <header className="flex justify-between items-center py-6 w-full relative">

          <div className="text-2xl font-bold">
            <span>Campaign</span>
            <span className="text-red-500">Butler</span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8 text-sm text-gray-300">
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing
            </a>
            <a
              href="#quickstart"
              className="hover:text-white transition-colors"
            >
              Quick Start
            </a>
            <a href="#support" className="hover:text-white transition-colors">
              Support
            </a>
            <a href="#blog" className="hover:text-white transition-colors">
              Blog
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden lg:flex items-center space-x-2 bg-red-500 px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-red-600 transition-colors"
          >
            <span>Contact</span>
            <ExternalLinkIcon className="w-4 h-4" />
          </a>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div
            className={`fixed inset-0 z-50 transform transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
  
            <div
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={() => setIsOpen(false)}
            ></div>

            <div className="absolute top-0 left-0 w-3/4 max-w-sm h-full bg-gray-900 text-white flex flex-col p-6 space-y-6">
  
              <button
                className="self-end text-white"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>

              <a
                href="#services"
                className="hover:text-red-500"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="#pricing"
                className="hover:text-red-500"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#quickstart"
                className="hover:text-red-500"
                onClick={() => setIsOpen(false)}
              >
                Quick Start
              </a>
              <a
                href="#support"
                className="hover:text-red-500"
                onClick={() => setIsOpen(false)}
              >
                Support
              </a>
              <a
                href="#blog"
                className="hover:text-red-500"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </a>
              <a
                href="#contact"
                className="bg-red-500 px-5 py-2.5 rounded-md font-semibold hover:bg-red-600 text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        </header>

        <div className="w-full h-px bg-white/10" />
        <main className="flex-grow flex items-center py-12 md:py-0 w-full lg:w-1/2">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Win Your Next Election with Campaign Butler's All-in-One Solution
            </h1>
            <p className="text-gray-300 max-w-lg mb-10 text-lg">
              From digital presence to boots on the ground, we deliver the
              tools, technology, and expertise that modern campaigns need to
              connect with voters and secure victory.
            </p>

            <form className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0">
              <label
                htmlFor="domain-search"
                className="font-semibold mr-4 text-gray-300"
              >
                Find Your Domain
              </label>
              <div className="flex w-full max-w-md bg-[#1F2937] rounded-md p-1">
                <input
                  id="domain-search"
                  type="text"
                  placeholder="Type here..."
                  className="bg-transparent px-3 py-2 w-full text-white placeholder:text-gray-500 focus:outline-none"
                />
                <span className="text-gray-400 px-3 flex items-center border-l border-gray-600">
                  .vote
                </span>
                <button
                  type="submit"
                  className="flex items-center space-x-2 text-white px-4 py-2 rounded-md border border-gray-600 hover:bg-gray-700 transition-colors text-sm"
                >
                  <span>Search</span>
                  <ExternalLinkIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        </main>

        <footer className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 py-10 w-full">
          <Anchor variant="primary-solid" href="#quickstart">
            <span>Launch Your Campaign Today</span>
            <ExternalLinkIcon />
          </Anchor>
          <div className="hidden md:block w-24 h-px bg-gray-700" />
          <div className="flex items-center space-x-4 text-sm text-gray-300">
            <a
              href="#pricing"
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
            >
              <span>See Our Pricing</span>
              <ExternalLinkIcon className="w-3.5 h-3.5" />
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="#demo"
              className="flex items-center space-x-1.5 hover:text-white transition-colors"
            >
              <span>Schedule a Demo</span>
              <ExternalLinkIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HeroSection;

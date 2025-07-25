import React, { useState, useEffect } from 'react';

const toolkitData = [
  {
    id: 1,
    categoryTitle: 'Digital Presence',
    imageUrl: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: [
      {
        title: 'Official .Vote Domain',
        description: 'Secure instant credibility with a trusted .vote domain that voters recognize and trust.',
      },
      {
        title: 'Professional Campaign Website',
        description: 'Launch a mobile-friendly, conversion-focused site that tells your story and drives action.',
      },
      {
        title: 'Official .Vote Email',
        description: 'Create a professional, branded email address that enhances your campaign’s legitimacy.',
      },
    ],
  },
  {
    id: 2,
    categoryTitle: 'Voter Outreach',
    imageUrl: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: [
      {
        title: 'Smart Canvassing App',
        description: 'Optimize routes for volunteers and collect data in real-time with our mobile app.',
      },
      {
        title: 'Automated Phone Banking',
        description: 'Reach thousands of voters efficiently with pre-recorded messages and smart dialing.',
      },
      {
        title: 'Peer-to-Peer Texting',
        description: 'Engage in authentic, one-on-one conversations with voters at scale.',
      },
    ],
  },
  {
    id: 3,
    categoryTitle: 'Fundraising Tools',
    imageUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    features: [
      {
        title: 'Donation Pages',
        description: 'Create beautiful, high-converting donation forms in minutes with no coding required.',
      },
      {
        title: 'Recurring Donations',
        description: 'Build a sustainable base of support with easy-to-manage recurring donor options.',
      },
      {
        title: 'Compliance Reporting',
        description: 'Automatically generate and file financial reports to stay compliant with election laws.',
      },
    ],
  },
];

// Komponen Ikon SVG
const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

const BulletIcon = () => (
    <svg viewBox="0 0 8 8" fill="currentColor" className="w-3 h-3 text-red-500 mr-4 mt-1 flex-shrink-0">
        <path d="M0 0L8 4L0 8V0Z" />
    </svg>
);


const ToolkitSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? toolkitData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === toolkitData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="py-20 px-6 md:px-16 bg-white h-full">
      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between items-start mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Your Complete<br />Campaign Toolkit
          </h2>
          <div className="flex space-x-2 mt-2">
            <button
              onClick={handlePrev}
              className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-md transition-colors"
              aria-label="Previous slide"
            >
              <ArrowLeftIcon />
            </button>
            <button
              onClick={handleNext}
              className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-md transition-colors"
              aria-label="Next slide"
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>

        <div className="relative min-h-[650px]  md:min-h-[400px]">
          {toolkitData.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                index === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
                <div className="flex flex-col justify-between h-full order-2 md:order-1">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">{slide.categoryTitle}</h3>
                    <ul className="space-y-5">
                      {slide.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <BulletIcon />
                          <div>
                            <strong className="text-gray-900">{feature.title}</strong> — <span className="text-gray-600">{feature.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex space-x-2 mt-8">
                    {toolkitData.map((_, dotIndex) => (
                      <button
                        key={dotIndex}
                        onClick={() => setActiveIndex(dotIndex)}
                        className={`w-3 h-3 transition-colors ${
                          dotIndex === activeIndex ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to slide ${dotIndex + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="h-full flex items-center justify-center order-1 md:order-2">
                  <img
                    src={slide.imageUrl}
                    alt={slide.categoryTitle}
                    className="w-full h-auto max-h-250px] lg:max-h-[400px] object-contain rounded-2xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolkitSection;
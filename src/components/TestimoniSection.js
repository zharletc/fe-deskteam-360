import React, { useState } from "react";
import image6 from "../assets/image-6.webp";
import image7 from "../assets/image-7.webp";
import image8 from "../assets/image-8.webp";
import image9 from "../assets/image-9.webp";
import image10 from "../assets/image-10.webp";

import LogoCarousel from "./LogoCarousel";
const testimonialsData = [
  {
    id: 1,
    type: "video", 
    mediaUrl: "https://videos.pexels.com/video-files/854213/854213-hd.mp4",
    posterUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Gambar preview untuk video
    quote:
      '"The volunteer walking app revolutionized our ground game. We knocked 40% more doors with the same number of volunteers."',
    name: "Michael Thompson",
    title: "County Commissioner",
    stat: "40%",
  },
  {
    id: 2,
    type: "image",
    mediaUrl:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote:
      '"A game-changer for our local elections. The data analytics helped us target key demographics with precision."',
    name: "Sarah Jenkins",
    title: "Campaign Manager",
    stat: "25%",
  },
  {
    id: 3,
    type: "image",
    mediaUrl:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote:
      '"We saw an unprecedented increase in voter turnout in our district. This platform was instrumental to our success."',
    name: "David Chen",
    title: "Political Strategist",
    stat: "30%",
  },
  {
    id: 4,
    type: "image",
    mediaUrl:
      "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote:
      '"Finally, a tool that understands the needs of a modern campaign. Intuitive, powerful, and effective."',
    name: "Maria Garcia",
    title: "City Council Member",
    stat: "50%",
  },
  {
    id: 5,
    type: "image",
    mediaUrl:
      "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote:
      '"The fundraising features alone paid for the service tenfold. Highly recommended for any serious candidate."',
    name: "James Wilson",
    title: "State Senator",
    stat: "60%",
  },
];

const logosData = [
  { src: image6, alt: "Human Rights Campaign" },
  { src: image7, alt: "Planned Parenthood" },
  { src: image8, alt: "The National Children's Cancer Society" },
  { src: image9, alt: "U.S. Immigration and Customs Enforcement" },
  { src: image10, alt: "NARAL Pro-Choice America" },
];

// Komponen SVG untuk ikon
const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-16 h-16 text-white"
  >
    <path
      fillRule="evenodd"
      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.717-2.779-.217-2.779-1.643V5.653z"
      clipRule="evenodd"
    />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
);

const StatIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-8 h-8 text-red-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-3.75-.625m3.75.625V18"
    />
  </svg>
);

const TestimoniSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Menentukan index untuk slide yang terlihat di kiri dan kanan
  const prevVisibleIndex =
    (currentIndex - 1 + testimonialsData.length) % testimonialsData.length;
  const nextVisibleIndex = (currentIndex + 1) % testimonialsData.length;

  return (
    <section
      className="relative py-24 px-6 md:px-16"
      style={{
        background: "linear-gradient(to bottom, white 50%, #101827 50%)",
      }}
    >
      ={" "}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-gray-900">
          Trusted by Winning Candidates
        </h2>

        <div className="relative h-[450px] md:h-[500px] flex items-center justify-center">
          <button
            onClick={handlePrev}
            className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-20 bg-red-500 hover:bg-red-600 text-white p-3 rounded-md transition-colors"
            aria-label="Previous testimonial"
          >
            <ArrowLeftIcon />
          </button>

          <div className="relative w-full md:w-4/5 lg:w-3/5 h-full">
            {testimonialsData.map((testimonial, index) => {
              const isActive = index === currentIndex;
              const isPrevVisible = index === prevVisibleIndex;
              const isNextVisible = index === nextVisibleIndex;

              let positionClasses =
                "opacity-0 scale-75 transform transition-all duration-500 ease-in-out";
              if (isActive) {
                positionClasses = "opacity-100 scale-100 z-10";
              } else if (isPrevVisible) {
                positionClasses =
                  "opacity-90 scale-90 -translate-x-1/4 md:-translate-x-1/2 z-0";
              } else if (isNextVisible) {
                positionClasses =
                  "opacity-90 scale-90 translate-x-1/4 md:translate-x-1/2 z-0";
              }

              return (
                <div
                  key={testimonial.id}
                  className={`absolute w-full h-full ${positionClasses}`}
                >
                  <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden shadow-2xl">
                    {testimonial.type === "video" ? (
                      <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        src={testimonial.mediaUrl}
                        poster={testimonial.posterUrl}
                        loop
                        muted
                        autoPlay
                      />
                    ) : (
                      <img
                        src={testimonial.mediaUrl}
                        alt={testimonial.name}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                      />
                    )}

                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60" />

                    <div className="relative h-full flex flex-col justify-center items-center p-8 text-center">
                      {testimonial.type === "video" && isActive && (
                        <button
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                          aria-label="Play video"
                        >
                          <PlayIcon />
                        </button>
                      )}
                      {isActive && (
                        <div className="absolute top-8 right-8 text-center">
                          <StatIcon />
                          <p className="text-3xl font-bold mt-1">
                            {testimonial.stat}
                          </p>
                        </div>
                      )}

                      <div className="absolute bottom-10 left-0 right-0 px-8">
                        <p className="text-xl md:text-2xl font-light italic mb-6">
                          {testimonial.quote}
                        </p>
                        <div className="w-20 h-px bg-white mx-auto my-4 opacity-50"></div>
                        <p className="font-semibold text-lg">
                          {testimonial.name}
                        </p>
                        <p className="text-gray-300">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-20 bg-red-500 hover:bg-red-600 text-white p-3 rounded-md transition-colors"
            aria-label="Next testimonial"
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-20">
        <LogoCarousel logos={logosData} />
      </div>
    </section>
  );
};

export default TestimoniSection;

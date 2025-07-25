const LogoCarousel = ({ logos }) => {
  return (
    <div className="relative w-full overflow-hidden py-4">
      <div className="absolute top-0 left-0 bottom-0 z-10 w-24 bg-gradient-to-r from-[#101827] to-transparent" />
      <div className="flex animate-infinite-scroll">
        {logos.map((logo, index) => (
          <div key={`logo-${index}`} className="flex-shrink-0 mx-8">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-10 max-w-none filter grayscale opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={`logo-clone-${index}`} className="flex-shrink-0 mx-8">
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-10 max-w-none filter grayscale opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
      <div className="absolute top-0 right-0 bottom-0 z-10 w-24 bg-gradient-to-l from-[#101827] to-transparent" />
    </div>
  );
};

export default LogoCarousel;

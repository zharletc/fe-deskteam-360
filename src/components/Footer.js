import React from "react";
import icFb from "../assets/ic-fb.svg";
import icIg from "../assets/ic-ig.svg";
import icTk from "../assets/ic-tk.svg";
import icX from "../assets/ic-x.svg";
import icYt from "../assets/ic-yt.svg";

const ArrowUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
    />
  </svg>
);

const socialLinks = [
  { href: "#", src: icIg, alt: "Instagram" },
  { href: "#", src: icFb, alt: "Facebook" },
  { href: "#", src: icYt, alt: "YouTube" },
  { href: "#", src: icX, alt: "X (Twitter)" },
  { href: "#", src: icTk, alt: "TikTok" },
];


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-black text-gray-400 overflow-hidden">

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-300/40 via-blue-500/10 to-transparent blur-[120px] rounded-full scale-80 z-10"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto pt-24 pb-10 px-6 md:px-16">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-white">
              Campaign<span className="text-red-500">Butler</span>
            </h2>
            <p className="mt-2 text-sm">
              Win Your Next Election with Campaign Butler's All-in-One Solution
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Support Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Campaign Resources</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          <div className="flex justify-start md:justify-end">
            <button onClick={scrollToTop} className="bg-red-500 hover:bg-red-600 w-10 h-10 flex items-center justify-center rounded-md text-white transition-colors" aria-label="Scroll to top">
              <ArrowUpIcon />
            </button>
          </div>
        </div>

        {/* Garis pemisah dan konten bawah */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © {new Date().getFullYear()} Campaign Butler. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-6 md:mt-0">
            {socialLinks.map((social) => (
              <a key={social.alt} href={social.href} className="opacity-70 hover:opacity-100 transition-opacity">
                <img src={social.src} alt={social.alt} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;

import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 border-b border-gray-700">
      <div className="text-2xl font-bold">
        <span className="text-white">Campaign</span>
        <span className="text-red-500">Butler</span>
      </div>
      <nav className="space-x-8 hidden md:flex">
        <a href="#services" className="hover:text-red-500">Services</a>
        <a href="#pricing" className="hover:text-red-500">Pricing</a>
        <a href="#quickstart" className="hover:text-red-500">Quick Start</a>
        <a href="#support" className="hover:text-red-500">Support</a>
        <a href="#blog" className="hover:text-red-500">Blog</a>
      </nav>
      <a
        href="#contact"
        className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 text-white"
      >
        Contact
      </a>
    </header>
  );
};

export default Header;

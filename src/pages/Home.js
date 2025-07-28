import React from "react";
import HeroSection from "../components/HeroSection";
import CampaignSection from "../components/CampaignSection";
import WinningSection from "../components/WinningSection";
import ServiceSection from "../components/ServiceSection";
import PricingSection from "../components/PricingSection";
import GHLSection from "../components/GHLSection";
import Footer from "../components/Footer";
import TestimoniSection from "../components/TestimoniSection";
import ToolkitSection from "../components/ToolkitSection";
import ExperienceSection from "../components/ExperinceSection";
import LaunchSection from "../components/LaunchSection";

const Home = () => {
  return (
    <div className="bg-white overflow-x-hidden">
      <HeroSection />
      <CampaignSection />
      {/* <WinningSection /> */}
      <TestimoniSection />
      {/* <ToolkitSection />
      <ExperienceSection />
      <ServiceSection />
      <PricingSection />
      <LaunchSection /> */}
      <GHLSection />
      <Footer />
    </div>
  );
};

export default Home;

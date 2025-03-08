
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import HeroSection from "@/components/intelliagent/HeroSection";
import FeaturesGrid from "@/components/intelliagent/FeaturesGrid";
import AgentTypes from "@/components/intelliagent/AgentTypes";
import CallToAction from "@/components/intelliagent/CallToAction";

const IntelliAgent = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Initialize scroll animations
    useScrollAnimation();
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        <FeaturesGrid />
        <AgentTypes />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default IntelliAgent;

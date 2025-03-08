
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { initScrollAnimation } from "@/lib/useScrollAnimation";
import HeroSection from "@/components/intelliagent/HeroSection";
import FeaturesGrid from "@/components/intelliagent/FeaturesGrid";
import AgentTypes from "@/components/intelliagent/AgentTypes";
import CallToAction from "@/components/intelliagent/CallToAction";

const IntelliAgent = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Initialize scroll animations
    const cleanup = initScrollAnimation();
    
    return () => {
      // Clean up scroll animations when component unmounts
      if (cleanup) cleanup();
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
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

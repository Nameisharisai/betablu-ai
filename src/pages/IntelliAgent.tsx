
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { initScrollAnimation } from "@/lib/useScrollAnimation";
import HeroSection from "@/components/intelliagent/HeroSection";
import FeaturesGrid from "@/components/intelliagent/FeaturesGrid";
import AgentTypes from "@/components/intelliagent/AgentTypes";
import CallToAction from "@/components/intelliagent/CallToAction";
import { toast } from "@/components/ui/use-toast";

const IntelliAgent = () => {
  const navigate = useNavigate();
  const cosmicBgRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Check authentication
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      toast({
        title: "Authentication Required",
        description: "Please log in to access this feature",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Initialize scroll animations
    const cleanup = initScrollAnimation();
    
    // Create cosmic background
    if (cosmicBgRef.current) {
      const cosmicBg = cosmicBgRef.current;
      
      // Create stars
      for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.className = "star";
        
        const size = Math.random() * 2;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        cosmicBg.appendChild(star);
      }
      
      // Create nebulas
      for (let i = 0; i < 5; i++) {
        const nebula = document.createElement("div");
        nebula.className = "nebula";
        
        const size = Math.random() * 300 + 100;
        nebula.style.width = `${size}px`;
        nebula.style.height = `${size}px`;
        
        nebula.style.left = `${Math.random() * 100}%`;
        nebula.style.top = `${Math.random() * 100}%`;
        
        cosmicBg.appendChild(nebula);
      }
    }
    
    return () => {
      // Clean up scroll animations when component unmounts
      if (cleanup) cleanup();
      
      // Clean up cosmic background
      if (cosmicBgRef.current) {
        cosmicBgRef.current.innerHTML = '';
      }
    };
  }, [navigate]);
  
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Cosmic Background */}
      <div ref={cosmicBgRef} className="cosmic-bg fixed inset-0 pointer-events-none"></div>
      
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

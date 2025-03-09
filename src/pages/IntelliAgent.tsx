
import { useEffect } from "react";
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
    
    return () => {
      // Clean up scroll animations when component unmounts
      if (cleanup) cleanup();
    };
  }, [navigate]);
  
  return (
    <div className="min-h-screen bg-background text-foreground">
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

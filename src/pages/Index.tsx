
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Integration from "@/components/sections/Integration";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

const Index = () => {
  useScrollAnimation();
  
  useEffect(() => {
    // Add CSS classes for transition delays
    const style = document.createElement('style');
    for (let i = 1; i <= 20; i++) {
      style.innerHTML += `.transition-delay-${i * 100} { transition-delay: ${i * 100}ms; }`;
    }
    document.head.appendChild(style);
    
    // Smooth scroll to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Integration />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

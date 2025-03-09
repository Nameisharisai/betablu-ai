
import { Link } from "react-router-dom";
import Button from "@/components/common/Button";
import { useEffect, useRef } from "react";

const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Add cosmic stars to the background
    const container = containerRef.current;
    const starCount = 30;
    
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'cosmic-star';
      
      // Random positions
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random sizes
      const size = Math.random() * 3 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random twinkle duration
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      
      container.appendChild(star);
    }
    
    return () => {
      // Cleanup
      const stars = container.querySelectorAll('.cosmic-star');
      stars.forEach(star => container.removeChild(star));
    };
  }, []);
  
  return (
    <div className="py-20 bg-background relative overflow-hidden" ref={containerRef}>
      {/* Nebula-like gradients */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl overflow-hidden relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blu-400 to-blu-600"></div>
          
          <div className="px-8 py-16 md:p-16 text-center">
            <h2 className="h2 mb-6 max-w-2xl mx-auto">
              Ready to build your custom AI agent?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Get started with IntelliAgent today and transform your workflows with adaptive intelligence.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/agent-builder">
                <Button size="lg" className="animated-gradient pulse-glow">
                  Start Building
                </Button>
              </Link>
              <Link to="/documentation">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

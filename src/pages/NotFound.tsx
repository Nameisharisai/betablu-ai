
import { useLocation, Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Button from "@/components/common/Button";

const NotFound = () => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Create cosmic background
    if (containerRef.current) {
      const container = containerRef.current;
      
      // Create stars
      for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.className = "cosmic-star";
        
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        
        container.appendChild(star);
      }
    }
    
    return () => {
      if (containerRef.current) {
        const stars = containerRef.current.querySelectorAll('.cosmic-star');
        stars.forEach(star => star.remove());
      }
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden" ref={containerRef}>
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-accent/5 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
      
      <div className="text-center glass p-10 rounded-2xl">
        <h1 className="text-8xl font-bold mb-4 text-gradient">404</h1>
        <p className="text-xl text-muted-foreground mb-6">It seems you've ventured into the cosmic void</p>
        <Link to="/" className="inline-block">
          <Button className="animated-gradient">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

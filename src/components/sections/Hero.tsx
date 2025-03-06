
import { ArrowRight } from "lucide-react";
import Button from "../common/Button";
import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add fade-in animation on initial load
    setTimeout(() => {
      if (heroRef.current) {
        heroRef.current.classList.add("opacity-100", "translate-y-0");
      }
    }, 100);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] rounded-full bg-blu-100/50 blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] rounded-full bg-blu-200/30 blur-3xl" />
      </div>
      
      {/* Content */}
      <div 
        ref={heroRef}
        className="container-section flex flex-col items-center text-center space-y-12 opacity-0 translate-y-10 transition-all duration-1000"
      >
        <div className="inline-flex items-center px-3 py-1.5 border border-blu-200 rounded-full bg-blu-50">
          <span className="text-xs font-medium text-blu-600 uppercase tracking-wide">
            Introducing BetaBLU Platform
          </span>
        </div>

        <h1 className="h1 max-w-4xl text-balance">
          Create, deploy, and integrate
          <span className="text-gradient"> AI agents </span>
          into your workflows
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl text-balance">
          BetaBLU helps enterprises and developers create powerful AI agents that seamlessly integrate with existing systems and workflows.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
            Get Started
          </Button>
          <Button size="lg" variant="outline">
            View Documentation
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float hidden md:block">
          <div className="w-8 h-12 rounded-full border-2 border-foreground/20 flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-foreground/40 rounded-full animate-slide-down" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

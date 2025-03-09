
import { ArrowRight } from "lucide-react";
import Button from "../common/Button";
import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const cosmicBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add fade-in animation on initial load
    setTimeout(() => {
      if (heroRef.current) {
        heroRef.current.classList.add("opacity-100", "translate-y-0");
      }
    }, 100);

    // Add staggered animations for title, text, and buttons
    const animateItem = (element: HTMLElement | null, delay: number) => {
      setTimeout(() => {
        if (element) {
          element.classList.add("opacity-100", "translate-y-0");
        }
      }, delay);
    };

    animateItem(titleRef.current, 300);
    animateItem(textRef.current, 600);
    animateItem(buttonsRef.current, 900);
    
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
    
    // Initialize particles animation
    const createParticle = () => {
      const particles = document.querySelector('.particles');
      if (!particles) return;
      
      const particle = document.createElement('div');
      particle.className = 'space-dust';
      
      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      
      // Set styles
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      
      // Animation duration
      particle.style.animationDuration = `${Math.random() * 5 + 3}s`;
      
      particles.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode === particles) {
          particles.removeChild(particle);
        }
      }, 8000);
    };
    
    // Create particles at interval
    const particleInterval = setInterval(createParticle, 200);
    
    return () => {
      clearInterval(particleInterval);
      if (cosmicBgRef.current) {
        cosmicBgRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Cosmic Background */}
      <div ref={cosmicBgRef} className="cosmic-bg"></div>
      
      {/* Particles Container */}
      <div className="particles absolute inset-0 overflow-hidden z-0"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>
      
      {/* Content */}
      <div 
        ref={heroRef}
        className="container-section flex flex-col items-center text-center space-y-12 opacity-0 translate-y-10 transition-all duration-1000"
      >
        <div className="inline-flex items-center px-3 py-1.5 border border-accent rounded-full bg-card/50 pulse-glow">
          <span className="text-xs font-medium text-blu-400 uppercase tracking-wide">
            Introducing BetaBLU Platform
          </span>
        </div>

        <h1 
          ref={titleRef}
          className="h1 max-w-4xl text-balance opacity-0 translate-y-10 transition-all duration-1000"
        >
          Create, deploy, and integrate
          <span className="text-gradient"> AI agents </span>
          into your workflows
        </h1>

        <p 
          ref={textRef}
          className="text-xl text-muted-foreground max-w-2xl text-balance opacity-0 translate-y-10 transition-all duration-1000"
        >
          BetaBLU helps enterprises and developers create powerful AI agents that seamlessly integrate with existing systems and workflows.
        </p>

        <div 
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 mt-8 opacity-0 translate-y-10 transition-all duration-1000"
        >
          <Button size="lg" icon={<ArrowRight size={18} />} iconPosition="right" className="animated-gradient">
            Get Started
          </Button>
          <Button size="lg" variant="outline">
            View Documentation
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 floating hidden md:block">
          <div className="w-8 h-12 rounded-full border-2 border-foreground/20 flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-foreground/40 rounded-full animate-slide-down" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

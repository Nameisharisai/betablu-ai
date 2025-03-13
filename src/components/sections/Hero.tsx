
import { ArrowRight } from "lucide-react";
import Button from "../common/Button";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

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
    
    // Initialize particles animation
    const createParticle = () => {
      const particles = document.querySelector('.particles');
      if (!particles) return;
      
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-blu-400/30 rounded-full';
      
      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      
      // Random size
      const size = Math.random() * 3 + 1;
      
      // Set styles
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.opacity = (Math.random() * 0.5 + 0.2).toString();
      
      // Animation
      particle.animate(
        [
          { transform: 'translateY(0) rotate(0deg)', opacity: particle.style.opacity },
          { transform: `translateY(-${Math.random() * 100 + 50}px) rotate(${Math.random() * 360}deg)`, opacity: '0' }
        ],
        {
          duration: Math.random() * 3000 + 3000,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }
      );
      
      particles.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode === particles) {
          particles.removeChild(particle);
        }
      }, 6000);
    };
    
    // Create particles at interval
    const particleInterval = setInterval(createParticle, 200);
    
    return () => {
      clearInterval(particleInterval);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Particles Container */}
      <div className="particles absolute inset-0 overflow-hidden z-0"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] rounded-full bg-blu-900/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] rounded-full bg-blu-800/10 blur-3xl" />
      </div>
      
      {/* Content */}
      <div 
        ref={heroRef}
        className="container-section flex flex-col items-center text-center space-y-12 opacity-0 translate-y-10 transition-all duration-1000"
      >
        <div className="inline-flex items-center px-3 py-1.5 border border-blu-800 rounded-full bg-blu-900/50 pulse-glow">
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
          <Link to="/agent-builder">
            <Button size="lg" icon={<ArrowRight size={18} />} iconPosition="right" className="animated-gradient">
              Get Started
            </Button>
          </Link>
          <Link to="/documentation">
            <Button size="lg" variant="outline">
              View Documentation
            </Button>
          </Link>
        </div>
        
        {/* Floating animated elements replacing mouse scroll */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="flex space-x-2">
            {[1, 2, 3].map((i) => (
              <div 
                key={i}
                className="w-2 h-2 rounded-full bg-white/60"
                style={{
                  animation: `floatingDot 1.5s ease-in-out ${i * 0.2}s infinite alternate`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

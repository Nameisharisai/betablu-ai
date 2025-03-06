
import { useEffect, useRef } from "react";
import Card, { CardContent, CardHeader } from "../common/Card";
import { Bot, Code, Activity, Shield, Network, Lightbulb } from "lucide-react";

const FEATURES = [
  {
    icon: <Bot className="h-6 w-6 text-blu-500" />,
    title: "AI Agent Builder",
    description: "Create custom AI agents with advanced capabilities through an intuitive builder interface.",
  },
  {
    icon: <Code className="h-6 w-6 text-blu-500" />,
    title: "API Integration",
    description: "Seamlessly integrate AI agents into your existing systems via REST API and WebSocket endpoints.",
  },
  {
    icon: <Activity className="h-6 w-6 text-blu-500" />,
    title: "Adaptive Intelligence",
    description: "Agents learn and improve over time with reinforcement learning and vector memory.",
  },
  {
    icon: <Shield className="h-6 w-6 text-blu-500" />,
    title: "Enterprise Security",
    description: "End-to-end encryption with zero trust architecture for enterprise-grade security.",
  },
  {
    icon: <Network className="h-6 w-6 text-blu-500" />,
    title: "Flexible Deployment",
    description: "Deploy agents in the cloud, on-premises, or in a hybrid environment based on your needs.",
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-blu-500" />,
    title: "Multi-Agent Collaboration",
    description: "Create systems where multiple agents work together to solve complex problems.",
  },
];

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const animatedElements = useRef<HTMLElement[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".reveal");
      elements.forEach((el) => {
        observer.observe(el);
        animatedElements.current.push(el as HTMLElement);
      });
    }
    
    return () => {
      animatedElements.current.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section id="features" ref={sectionRef} className="py-20 lg:py-28 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-64 -left-64 w-[600px] h-[600px] rounded-full bg-blu-50/80 blur-3xl" />
      </div>
      
      <div className="container-section">
        <div className="text-center mb-16 reveal">
          <h2 className="h2 mb-4">
            Powerful Features for AI Integration
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            BetaBLU provides a comprehensive suite of tools to build, deploy, and manage AI agents in any environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <Card 
              key={index} 
              variant="glass" 
              animate
              className={`reveal`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-blu-50 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

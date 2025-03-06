
import { useEffect, useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import Card, { CardContent, CardHeader } from "@/components/common/Card";
import Button from "@/components/common/Button";
import { ArrowRight, Brain, Bot, Sparkles, Network, Database, Zap } from "lucide-react";

const IntelliAgent = () => {
  useScrollAnimation();
  const intelliRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] rounded-full bg-blu-100/30 dark:bg-blu-900/20 blur-3xl" />
          </div>
          
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="h1 mb-6 reveal">
                  <span className="text-gradient">IntelliAgent</span> Space
                </h1>
                <p className="text-xl text-muted-foreground mb-8 reveal">
                  Create, customize, and deploy AI agents with powerful capabilities through our intuitive builder interface.
                </p>
                <div className="reveal">
                  <Button 
                    size="lg" 
                    icon={<ArrowRight size={18} />} 
                    iconPosition="right"
                  >
                    Start Building
                  </Button>
                </div>
              </div>
              
              <div className="relative reveal">
                <div className="glass-card p-4 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e" 
                    alt="AI Robot Interface" 
                    className="rounded-xl w-full h-auto object-cover aspect-video" 
                  />
                </div>
                <div className="absolute -z-10 -bottom-10 -right-10 w-[300px] h-[300px] bg-blu-400/10 dark:bg-blu-400/5 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Builder Features */}
        <section className="py-16 bg-secondary/50 dark:bg-dark-700/30" ref={intelliRef}>
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <h2 className="h2 mb-4">Build Your Perfect AI Agent</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our IntelliAgent builder provides everything you need to create, customize, and deploy AI agents for your specific needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="h-6 w-6 text-blu-500" />,
                  title: "Cognitive Abilities",
                  description: "Configure reasoning capabilities, memory systems, and learning parameters for your agent."
                },
                {
                  icon: <Bot className="h-6 w-6 text-blu-500" />,
                  title: "Persona Design",
                  description: "Define your agent's personality, communication style, and interaction patterns."
                },
                {
                  icon: <Sparkles className="h-6 w-6 text-blu-500" />,
                  title: "Capability Modules",
                  description: "Add pre-built capabilities like text analysis, image recognition, or code generation."
                },
                {
                  icon: <Network className="h-6 w-6 text-blu-500" />,
                  title: "Knowledge Integration",
                  description: "Connect to data sources, APIs, and knowledge bases to enhance agent intelligence."
                },
                {
                  icon: <Database className="h-6 w-6 text-blu-500" />,
                  title: "Training & Tuning",
                  description: "Fine-tune your agent with custom data and feedback loops for optimal performance."
                },
                {
                  icon: <Zap className="h-6 w-6 text-blu-500" />,
                  title: "Deployment Options",
                  description: "Choose from cloud, on-premise, or hybrid deployment to fit your infrastructure needs."
                }
              ].map((feature, index) => (
                <Card 
                  key={index} 
                  variant="glass" 
                  animate
                  className={`reveal transition-delay-${index * 100}`}
                >
                  <CardHeader>
                    <div className="h-12 w-12 rounded-xl bg-blu-50 dark:bg-blu-900/30 flex items-center justify-center mb-4">
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
        
        {/* Builder Interface Preview */}
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-2">
                <div className="sticky top-24 reveal">
                  <h2 className="h2 mb-6">Intuitive Builder Interface</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Our drag-and-drop interface makes it easy to assemble complex AI agents without coding. Connect modules, define behaviors, and configure integration points all in one place.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Visual workflow designer",
                      "Real-time testing environment",
                      "Customizable templates",
                      "Performance analytics",
                      "Version control & history"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start reveal transition-delay-100">
                        <span className="h-6 w-6 rounded-full bg-blu-500/10 text-blu-500 flex items-center justify-center mr-3 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="lg:col-span-3 reveal">
                <div className="relative">
                  <div className="glass rounded-2xl overflow-hidden border border-white/20 dark:border-white/5 shadow-lg">
                    <div className="h-10 bg-secondary/80 dark:bg-dark-600 flex items-center px-4">
                      <div className="flex space-x-2">
                        <div className="h-3 w-3 rounded-full bg-red-400"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                        <div className="h-3 w-3 rounded-full bg-green-400"></div>
                      </div>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                      alt="Agent Builder Interface" 
                      className="w-full object-cover aspect-video"
                    />
                  </div>
                  <div className="absolute -z-10 -bottom-10 -left-10 w-[300px] h-[300px] bg-blu-400/10 dark:bg-blu-500/5 rounded-full blur-3xl" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IntelliAgent;

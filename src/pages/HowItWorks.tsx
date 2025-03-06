
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import Button from "@/components/common/Button";
import { ArrowRight, Check, Brain, Network, Database, Shield, GitBranch, Zap } from "lucide-react";

const HowItWorks = () => {
  useScrollAnimation();
  
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
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full bg-blu-50/80 dark:bg-blu-900/20 blur-3xl" />
          </div>
          
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto reveal">
              <h1 className="h1 mb-6">
                How <span className="text-gradient">BetaBLU</span> Works
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                BetaBLU leverages cutting-edge AI technologies to create, deploy, and manage intelligent agents that seamlessly integrate with your existing workflows.
              </p>
            </div>
          </div>
        </section>
        
        {/* Workflow Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute -z-10 inset-0">
            <div className="absolute -left-40 top-1/4 w-[500px] h-[500px] rounded-full bg-blu-100/30 dark:bg-blu-900/10 blur-3xl" />
          </div>
          
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 reveal">
                <h2 className="h2 mb-6">End-to-End Agent Workflow</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  From creation to deployment, BetaBLU manages the entire lifecycle of your AI agents with a streamlined process designed for both technical and non-technical users.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Create Your Agent",
                      description: "Define your agent's capabilities, knowledge sources, and integration points through our visual builder."
                    },
                    {
                      title: "Configure & Test",
                      description: "Fine-tune your agent's parameters and test its performance in a sandbox environment."
                    },
                    {
                      title: "Deploy Anywhere",
                      description: "Choose from cloud, on-premise, or hybrid deployment options based on your needs."
                    },
                    {
                      title: "Integrate & Connect",
                      description: "Connect your agent to existing systems via APIs, SDKs, or direct integration."
                    },
                    {
                      title: "Monitor & Improve",
                      description: "Track performance metrics and use feedback loops to continuously improve your agents."
                    }
                  ].map((step, index) => (
                    <div 
                      key={index}
                      className="flex items-start p-4 rounded-xl bg-white/50 dark:bg-dark-800/50 border border-border reveal"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="h-8 w-8 rounded-full bg-blu-500 text-white flex items-center justify-center shrink-0 mr-4">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="order-1 lg:order-2 reveal">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                    alt="BetaBLU Workflow" 
                    className="rounded-2xl shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-2xl flex items-end">
                    <div className="p-6">
                      <Button 
                        size="lg" 
                        icon={<ArrowRight size={18} />} 
                        iconPosition="right"
                      >
                        Get Started Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Technology Stack */}
        <section className="py-20 bg-secondary/50 dark:bg-dark-700/30">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <h2 className="h2 mb-4">Powered by Advanced Technology</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                BetaBLU combines the latest in AI, cloud infrastructure, and enterprise-grade security to deliver a powerful yet flexible platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="h-6 w-6 text-blu-500" />,
                  title: "Large Language Models",
                  description: "Leverage state-of-the-art LLMs from OpenAI, Anthropic, or your custom models."
                },
                {
                  icon: <Network className="h-6 w-6 text-blu-500" />,
                  title: "Microservices Architecture",
                  description: "Scalable, resilient infrastructure that grows with your needs."
                },
                {
                  icon: <Database className="h-6 w-6 text-blu-500" />,
                  title: "Vector Databases",
                  description: "Efficient knowledge storage and retrieval for context-aware agents."
                },
                {
                  icon: <Shield className="h-6 w-6 text-blu-500" />,
                  title: "Zero Trust Security",
                  description: "Enterprise-grade security with fine-grained access controls."
                },
                {
                  icon: <GitBranch className="h-6 w-6 text-blu-500" />,
                  title: "Version Control",
                  description: "Track changes and roll back to previous versions of your agents."
                },
                {
                  icon: <Zap className="h-6 w-6 text-blu-500" />,
                  title: "Real-time Processing",
                  description: "Low-latency processing for responsive agent interactions."
                }
              ].map((tech, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-white dark:bg-dark-800 rounded-xl shadow-sm border border-border reveal"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="h-12 w-12 rounded-xl bg-blu-50 dark:bg-blu-900/30 flex items-center justify-center mb-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{tech.title}</h3>
                  <p className="text-muted-foreground">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;

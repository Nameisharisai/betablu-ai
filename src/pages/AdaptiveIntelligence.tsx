
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import Card, { CardContent, CardHeader } from "@/components/common/Card";
import { Brain, Lightbulb, LineChart, RefreshCw, Database, Network } from "lucide-react";

const AdaptiveIntelligence = () => {
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
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full bg-blu-50/80 dark:bg-blu-900/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-blu-100/50 dark:bg-blu-800/20 blur-3xl" />
            </div>
          </div>
          
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="reveal">
                <h1 className="h1 mb-6">
                  <span className="text-gradient">Adaptive Intelligence</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Our agents don't just execute static instructions – they learn, adapt, and improve over time through sophisticated learning mechanisms and feedback loops.
                </p>
              </div>
              
              <div className="relative reveal">
                <div className="glass-card p-4 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                    alt="Adaptive Intelligence" 
                    className="rounded-xl w-full h-auto object-cover aspect-video" 
                  />
                </div>
                <div className="absolute -z-10 -bottom-10 -right-10 w-[300px] h-[300px] bg-blu-400/10 dark:bg-blu-400/5 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-20 bg-secondary/50 dark:bg-dark-700/30">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <h2 className="h2 mb-4">How Adaptive Intelligence Works</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                BetaBLU's adaptive intelligence combines several powerful technologies to create agents that continuously improve through experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="h-6 w-6 text-blu-500" />,
                  title: "Reinforcement Learning",
                  description: "Agents improve through positive and negative feedback, optimizing their decision-making over time."
                },
                {
                  icon: <Database className="h-6 w-6 text-blu-500" />,
                  title: "Contextual Memory",
                  description: "Vector-based memory systems allow agents to recall relevant information and past interactions."
                },
                {
                  icon: <RefreshCw className="h-6 w-6 text-blu-500" />,
                  title: "Continuous Training",
                  description: "Agents automatically incorporate new data and user feedback to enhance their capabilities."
                },
                {
                  icon: <Network className="h-6 w-6 text-blu-500" />,
                  title: "Knowledge Graphs",
                  description: "Structured representation of information helps agents understand complex relationships."
                },
                {
                  icon: <LineChart className="h-6 w-6 text-blu-500" />,
                  title: "Performance Analytics",
                  description: "Detailed metrics help identify areas for improvement and track progress over time."
                },
                {
                  icon: <Lightbulb className="h-6 w-6 text-blu-500" />,
                  title: "Transfer Learning",
                  description: "Agents can apply knowledge from one domain to new, related problems."
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
        
        {/* Learning Cycle */}
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 reveal">
                <h2 className="h2 mb-6">The Continuous Learning Cycle</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  BetaBLU agents operate in a continuous improvement loop, getting better with every interaction and piece of feedback.
                </p>
                
                <div className="space-y-8">
                  {[
                    {
                      step: 1,
                      title: "Interaction & Data Collection",
                      description: "Agents gather information through user interactions and connected data sources."
                    },
                    {
                      step: 2,
                      title: "Analysis & Pattern Recognition",
                      description: "Advanced algorithms identify patterns and insights from collected data."
                    },
                    {
                      step: 3,
                      title: "Model Refinement",
                      description: "The agent's underlying models are adjusted based on new information."
                    },
                    {
                      step: 4,
                      title: "Knowledge Integration",
                      description: "New learnings are incorporated into the agent's knowledge base."
                    },
                    {
                      step: 5,
                      title: "Improved Performance",
                      description: "The agent delivers better, more personalized results in subsequent interactions."
                    }
                  ].map((step, index) => (
                    <div 
                      key={index}
                      className="relative pl-12 reveal"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="absolute left-0 top-0 h-10 w-10 rounded-full bg-blu-500 text-white flex items-center justify-center">
                        {step.step}
                      </div>
                      {index < 4 && (
                        <div className="absolute left-5 top-10 h-full w-0.5 bg-blu-200 dark:bg-blu-900/50"></div>
                      )}
                      <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="order-1 lg:order-2 reveal">
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                      alt="Learning Cycle" 
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  </div>
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

export default AdaptiveIntelligence;

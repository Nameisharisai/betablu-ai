
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import Card, { CardContent, CardHeader, CardFooter } from "@/components/common/Card";
import Button from "@/components/common/Button";
import { ArrowRight, Brain, Bot, Sparkles, Network, Database, Zap, Code, Globe, Lock, Server, Terminal, FileCode } from "lucide-react";
import { toast } from "sonner";

const IntelliAgent = () => {
  useScrollAnimation();
  const intelliRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('cognitive');
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  const handleStartBuilding = () => {
    // Open in new tab
    window.open('/agent-builder', '_blank');
    toast.success('Opening IntelliAgent Builder');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] rounded-full bg-blu-900/20 blur-3xl" />
            <div className="absolute -bottom-64 -left-32 w-[400px] h-[400px] rounded-full bg-blu-900/10 blur-3xl" />
          </div>
          
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1.5 border border-blu-900/40 rounded-full bg-blu-900/20 mb-6 reveal">
                  <span className="text-xs font-medium text-blu-400 uppercase tracking-wide">
                    Next-Gen AI Builder
                  </span>
                </div>
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
                    onClick={handleStartBuilding}
                    className="pulse-glow"
                  >
                    Start Building
                  </Button>
                </div>
              </div>
              
              <div className="relative reveal">
                <div className="glass-card p-4 rounded-2xl overflow-hidden shadow-xl floating">
                  <img 
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e" 
                    alt="AI Robot Interface" 
                    className="rounded-xl w-full h-auto object-cover aspect-video" 
                  />
                </div>
                <div className="absolute -z-10 -bottom-10 -right-10 w-[300px] h-[300px] bg-blu-400/10 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Builder Features */}
        <section className="py-16 bg-dark-700/30" ref={intelliRef}>
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
                    <div className="h-12 w-12 rounded-xl bg-blu-900/30 flex items-center justify-center mb-4">
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
                        <span className="h-6 w-6 rounded-full bg-blu-500/20 text-blu-400 flex items-center justify-center mr-3 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="lg:col-span-3 reveal">
                <div className="relative">
                  <div className="glass rounded-2xl overflow-hidden border border-white/5 shadow-lg">
                    <div className="h-10 bg-dark-600 flex items-center px-4">
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
                  <div className="absolute -z-10 -bottom-10 -left-10 w-[300px] h-[300px] bg-blu-500/5 rounded-full blur-3xl" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Natural Language Builder Section */}
        <section className="py-20 bg-dark-700/30 relative">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-background to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent"></div>
          </div>
          
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <h2 className="h2 mb-4">Natural Language Agent Building</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Create powerful AI agents by simply describing what you want in natural language. Our system translates your instructions into functional agents.
              </p>
            </div>
            
            <div className="glass-card rounded-2xl overflow-hidden reveal mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-4">Write Instructions, Get Agents</h3>
                  <p className="text-muted-foreground mb-6">
                    Describe your agent's capabilities, personality, and goals in plain language. Our system will generate a fully functional agent based on your description.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Sparkles className="h-5 w-5 text-blu-400 mr-3 mt-1" />
                      <p className="text-sm">Powerful prompting templates to guide your descriptions</p>
                    </div>
                    <div className="flex items-start">
                      <Bot className="h-5 w-5 text-blu-400 mr-3 mt-1" />
                      <p className="text-sm">Auto-generated agent configurations from text</p>
                    </div>
                    <div className="flex items-start">
                      <Terminal className="h-5 w-5 text-blu-400 mr-3 mt-1" />
                      <p className="text-sm">Fine-tune through iterative feedback</p>
                    </div>
                  </div>
                </div>
                <div className="bg-dark-600/50 p-8">
                  <div className="glass p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-2">Example Instruction</div>
                    <div className="text-foreground font-mono text-sm">
                      <p className="mb-2">Create a customer support agent that:</p>
                      <p className="mb-2">1. Can access our product documentation</p>
                      <p className="mb-2">2. Has a friendly, helpful personality</p>
                      <p className="mb-2">3. Can escalate to human support when needed</p>
                      <p className="mb-2">4. Remembers previous customer interactions</p>
                      <p>5. Integrates with our CRM system via API</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Terminal className="h-6 w-6 text-blu-400" />,
                  title: "Simplified Creation",
                  description: "No coding or technical skills required to build sophisticated agents."
                },
                {
                  icon: <Bot className="h-6 w-6 text-blu-400" />,
                  title: "Rapid Iteration",
                  description: "Quickly refine your agent through natural conversation and feedback."
                },
                {
                  icon: <FileCode className="h-6 w-6 text-blu-400" />,
                  title: "Technical Controls",
                  description: "Advanced users can still access technical configurations when needed."
                }
              ].map((feature, index) => (
                <Card 
                  key={index} 
                  variant="glass" 
                  animate
                  className="reveal"
                >
                  <CardHeader>
                    <div className="h-10 w-10 rounded-full bg-blu-900/30 flex items-center justify-center mb-3">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Agent Types Section */}
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 reveal">
              <h2 className="h2 mb-4">Build Any Type of Agent</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From simple task automation to complex reasoning agents with memory and learning capabilities.
              </p>
            </div>
            
            <div className="bg-dark-800/50 rounded-2xl p-6 mb-12 reveal">
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <button 
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'cognitive' ? 'bg-blu-600 text-white' : 'bg-dark-600 text-muted-foreground hover:bg-dark-500'}`}
                  onClick={() => setActiveTab('cognitive')}
                >
                  Cognitive Agents
                </button>
                <button 
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'automation' ? 'bg-blu-600 text-white' : 'bg-dark-600 text-muted-foreground hover:bg-dark-500'}`}
                  onClick={() => setActiveTab('automation')}
                >
                  Automation Agents
                </button>
                <button 
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'data' ? 'bg-blu-600 text-white' : 'bg-dark-600 text-muted-foreground hover:bg-dark-500'}`}
                  onClick={() => setActiveTab('data')}
                >
                  Data Agents
                </button>
                <button 
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'custom' ? 'bg-blu-600 text-white' : 'bg-dark-600 text-muted-foreground hover:bg-dark-500'}`}
                  onClick={() => setActiveTab('custom')}
                >
                  Custom Agents
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {activeTab === 'cognitive' && (
                  <>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-4">Advanced Reasoning Agents</h3>
                      <p className="text-muted-foreground mb-6">
                        Build agents with sophisticated reasoning capabilities, memory systems, and adaptive learning that can handle complex decision-making and problem-solving tasks.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="h-5 w-5 rounded-full bg-blu-500/20 text-blu-400 flex items-center justify-center mr-3 mt-0.5 text-xs">✓</span>
                          <span className="text-sm">Multi-step reasoning chains</span>
                        </li>
                        <li className="flex items-start">
                          <span className="h-5 w-5 rounded-full bg-blu-500/20 text-blu-400 flex items-center justify-center mr-3 mt-0.5 text-xs">✓</span>
                          <span className="text-sm">Long-term memory for persistent context</span>
                        </li>
                        <li className="flex items-start">
                          <span className="h-5 w-5 rounded-full bg-blu-500/20 text-blu-400 flex items-center justify-center mr-3 mt-0.5 text-xs">✓</span>
                          <span className="text-sm">Continuous learning from interactions</span>
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-xl overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1677442135136-760c813456dc" 
                        alt="Cognitive Agent" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </>
                )}
                
                {activeTab === 'automation' && (
                  <>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-4">Workflow Automation Agents</h3>
                      <p className="text-muted-foreground mb-6">
                        Create agents that automate repetitive tasks, orchestrate workflows, and integrate with your existing tools and systems.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="h-5 w-5 rounded-full bg-blu-500/20 text-blu-400 flex items-center justify-center mr-3 mt-0.5 text-xs">✓</span>
                          <span className="text-sm">Multi-step workflow automation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="h-5 w-5 rounded-full bg-blu-500/20 text-blu-400 flex items-center justify-center mr-3 mt-0.5 text-xs">✓</span>
                          <span className="text-sm">Trigger-based execution</span>
                        </li>
                        <li className="flex items-start">
                          <span className="h-5 w-5 rounded-full bg-blu-500/20 text-blu-400 flex items-center justify-center mr-3 mt-0.5 text-xs">✓</span>
                          <span className="text-sm">Integration with 100+ tools</span>
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-xl overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1607746747627-8f2311dfa22f" 
                        alt="Automation Agent" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </>
                )}
                
                {activeTab === 'data' && (
                  <>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-4">Data Processing Agents</h3>
                      <p className="text-muted-foreground mb-6">
                        Build agents that analyze, transform, and extract insights from structured and unstructured data sources.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="h-5 w-5 rounded-full bg-blu-500/20 text-blu-400 flex items-center justify-center mr-3 mt-0.5 text-xs">✓</span>
                          <span className="text-sm">Automated data extraction and analysis</span>
                        </li>
                        <li className="flex items-start">
                          <span className="h-5 w-5 rounded-full bg-blu-500/20 text-blu-400 flex items-center justify-center mr-3 mt-0.5 text-xs">✓</span>
                          <span className="text-sm">Natural language data querying</span>
                        </li>
                        <li className="flex items-start">
                          <span className="h-5 w-5 rounded-full bg-blu-500/20 text-blu-400 flex items-center justify-center mr-3 mt-0.5 text-xs">✓</span>
                          <span className="text-sm">Intelligent data summarization</span>
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-xl overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
                        alt="Data Agent" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </>
                )}
                
                {activeTab === 'custom' && (
                  <>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-4">Custom Enterprise Agents</h3>
                      <p className="text-muted-foreground mb-6">
                        Design specialized agents tailored to your unique business requirements and industry-specific challenges.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="h-5 w-5 rounded-full bg-blu-500/20 text-blu-400 flex items-center justify-center mr-3 mt-0.5 text-xs">✓</span>
                          <span className="text-sm">Proprietary data integration</span>
                        </li>
                        <li className="flex items-start">
                          <span className="h-5 w-5 rounded-full bg-blu-500/20 text-blu-400 flex items-center justify-center mr-3 mt-0.5 text-xs">✓</span>
                          <span className="text-sm">Custom security configurations</span>
                        </li>
                        <li className="flex items-start">
                          <span className="h-5 w-5 rounded-full bg-blu-500/20 text-blu-400 flex items-center justify-center mr-3 mt-0.5 text-xs">✓</span>
                          <span className="text-sm">Industry-specific compliance</span>
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-xl overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1544731612-de7f96afe55f" 
                        alt="Custom Agent" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
            
            <div className="text-center reveal">
              <Button 
                size="lg" 
                onClick={handleStartBuilding}
              >
                Start Building Your Agent
              </Button>
            </div>
          </div>
        </section>
        
        {/* API Integration */}
        <section className="py-20 bg-dark-700/30">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <h2 className="h2 mb-4">Seamless API Integration</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Integrate your AI agents with existing systems through our comprehensive API and SDK options.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3 order-2 lg:order-1 reveal">
                <div className="glass p-6 rounded-2xl">
                  <div className="bg-dark-900/70 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
                    <pre>{`// Example: Call your AI agent via our REST API
const response = await fetch('https://api.betablu.ai/v1/agents/invoke', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    agent_id: 'cust-support-agent-01',
    input: {
      message: "I need help with my subscription",
      context: {
        customer_id: "cust_123456",
        subscription_tier: "premium"
      }
    },
    options: {
      stream: true,
      memory: true
    }
  })
});

const result = await response.json();
console.log(result.response);`}</pre>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2 order-1 lg:order-2">
                <div className="reveal">
                  <h3 className="text-2xl font-semibold mb-6">Connect to Any System</h3>
                  <p className="text-muted-foreground mb-6">
                    Our APIs and SDKs make it simple to integrate AI agents into your applications, websites, and backend systems.
                  </p>
                  
                  <ul className="space-y-4">
                    {[
                      { icon: <Globe className="h-5 w-5 text-blu-400" />, text: "REST API with comprehensive endpoints" },
                      { icon: <Code className="h-5 w-5 text-blu-400" />, text: "SDKs for Python, JavaScript, Java and more" },
                      { icon: <Server className="h-5 w-5 text-blu-400" />, text: "Webhooks for event-driven architectures" },
                      { icon: <Lock className="h-5 w-5 text-blu-400" />, text: "Secure authentication and access controls" }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start reveal">
                        <span className="h-8 w-8 rounded-lg bg-blu-900/30 flex items-center justify-center mr-3">
                          {item.icon}
                        </span>
                        <span className="mt-1">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card p-10 rounded-3xl relative overflow-hidden reveal">
              <div className="absolute inset-0 animated-gradient opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <h2 className="h2 mb-6">Ready to Build Your First Agent?</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join innovative companies already using BetaBLU to create powerful AI agents that transform how they work.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    size="lg" 
                    icon={<ArrowRight size={18} />} 
                    iconPosition="right"
                    onClick={handleStartBuilding}
                  >
                    Start Building Now
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => window.open('/documentation', '_blank')}
                  >
                    Read Documentation
                  </Button>
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

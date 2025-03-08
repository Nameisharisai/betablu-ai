import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/sections/CTA";
import Card, { CardContent, CardHeader } from "@/components/common/Card";
import Button from "@/components/common/Button";
import { Bot, Brain, Sparkles, Code, FileText, MessageSquare, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/lib/useScrollAnimation";

const IntelliAgent = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Initialize scroll animations
    useScrollAnimation();
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blu-950/20 to-background z-[-1]"></div>
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto reveal">
              <h1 className="h1 mb-6">
                <span className="text-gradient">IntelliAgent</span> Space
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Build and deploy AI agents tailored to your needs. Harness the power of adaptive intelligence to solve complex problems and automate workflows.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/agent-builder" target="_blank">
                  <Button size="lg" className="animated-gradient">
                    Start Building
                  </Button>
                </Link>
                <Link to="#agent-types">
                  <Button variant="outline" size="lg">
                    Explore Agent Types
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Grid */}
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <h2 className="h2 mb-4">Discover Our AI Workspaces</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our specialized AI environments designed for different use cases
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
              {/* Agent Builder */}
              <Link to="/agent-builder" target="_blank" className="group">
                <Card className="h-full glass-card hover:shadow-blu transition-all duration-500 group-hover:translate-y-[-5px]">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-full bg-blu-900/50 flex items-center justify-center mb-4">
                      <Bot className="h-6 w-6 text-blu-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Agent Builder</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Create custom AI agents using natural language descriptions. Define personality, capabilities, and integration points.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs px-2 py-1 rounded-full bg-blu-900/50 text-blu-400">
                        No-Code Solution
                      </span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
              
              {/* AI Chat */}
              <Link to="/ai-chat" className="group">
                <Card className="h-full glass-card hover:shadow-blu transition-all duration-500 group-hover:translate-y-[-5px]">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-full bg-blu-900/50 flex items-center justify-center mb-4">
                      <MessageSquare className="h-6 w-6 text-blu-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">AI Chat Space</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Chat with multiple AI models in one interface. Compare responses from different providers and fine-tune your experience.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs px-2 py-1 rounded-full bg-blu-900/50 text-blu-400">
                        Multiple Models
                      </span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
              
              {/* Code Studio */}
              <Link to="/code-studio" className="group">
                <Card className="h-full glass-card hover:shadow-blu transition-all duration-500 group-hover:translate-y-[-5px]">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-full bg-blu-900/50 flex items-center justify-center mb-4">
                      <Code className="h-6 w-6 text-blu-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Code Studio</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Generate code from natural language descriptions. Build applications, scripts, and algorithms without extensive programming knowledge.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs px-2 py-1 rounded-full bg-blu-900/50 text-blu-400">
                        Multi-Language
                      </span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
              
              {/* Research Space */}
              <Link to="/research-space" className="group lg:col-span-3 md:col-span-2">
                <Card className="h-full glass-card hover:shadow-blu transition-all duration-500 group-hover:translate-y-[-5px]">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-full bg-blu-900/50 flex items-center justify-center mb-4">
                      <FileText className="h-6 w-6 text-blu-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Research Space</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Enhanced research capabilities with RAG technology. Search, analyze, and synthesize information from multiple sources with AI assistance.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs px-2 py-1 rounded-full bg-blu-900/50 text-blu-400">
                        RAG-Powered
                      </span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Agent Types */}
        <section className="py-20 bg-dark-800/50" id="agent-types">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 reveal">
              <h2 className="h2 mb-4">Specialized Agent Types</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore pre-configured agent templates designed for specific use cases
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
              <Card className="glass-card hover:shadow-blu transition-all duration-500">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-blu-900/50 flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-blu-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Knowledge Assistants</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Train on your data to create specialized knowledge workers that understand your business context and documentation.
                  </p>
                  <Link to="/agent-builder" target="_blank">
                    <Button variant="outline" size="sm" full>Start Building</Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="glass-card hover:shadow-blu transition-all duration-500">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-blu-900/50 flex items-center justify-center mb-4">
                    <Bot className="h-6 w-6 text-blu-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Customer Support</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Create intelligent support agents that handle customer inquiries, troubleshoot problems, and escalate when necessary.
                  </p>
                  <Link to="/agent-builder" target="_blank">
                    <Button variant="outline" size="sm" full>Start Building</Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="glass-card hover:shadow-blu transition-all duration-500">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-blu-900/50 flex items-center justify-center mb-4">
                    <Sparkles className="h-6 w-6 text-blu-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Creative Assistants</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Deploy agents that assist with content creation, idea generation, writing, design suggestions, and creative workflows.
                  </p>
                  <Link to="/agent-builder" target="_blank">
                    <Button variant="outline" size="sm" full>Start Building</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <div className="py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="h2 mb-4">Ready to build your custom AI agent?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get started with IntelliAgent today and transform your workflows with adaptive intelligence.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/agent-builder" target="_blank">
                  <Button size="lg" className="animated-gradient">
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
      </main>
      
      <Footer />
    </div>
  );
};

export default IntelliAgent;

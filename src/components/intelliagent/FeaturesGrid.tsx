
import { Bot, Code, FileText, MessageSquare } from "lucide-react";
import FeatureCard from "./FeatureCard";

const FeaturesGrid = () => {
  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="h2 mb-4">Discover Our AI Workspaces</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our specialized AI environments designed for different use cases
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
          <FeatureCard 
            icon={Bot}
            title="Agent Builder"
            description="Create custom AI agents using natural language descriptions. Define personality, capabilities, and integration points."
            badgeText="No-Code Solution"
            linkTo="/agent-builder"
          />
          
          <FeatureCard 
            icon={MessageSquare}
            title="AI Chat Space"
            description="Chat with multiple AI models in one interface. Compare responses from different providers and fine-tune your experience."
            badgeText="Multiple Models"
            linkTo="/ai-chat"
          />
          
          <FeatureCard 
            icon={Code}
            title="Code Studio"
            description="Generate code from natural language descriptions. Build applications, scripts, and algorithms without extensive programming knowledge."
            badgeText="Multi-Language"
            linkTo="/code-studio"
          />
          
          <div className="lg:col-span-3 md:col-span-2">
            <FeatureCard 
              icon={FileText}
              title="Research Space"
              description="Enhanced research capabilities with RAG technology. Search, analyze, and synthesize information from multiple sources with AI assistance."
              badgeText="RAG-Powered"
              linkTo="/research-space"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;

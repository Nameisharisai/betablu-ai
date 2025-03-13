
import { Brain, Bot, Sparkles } from "lucide-react";
import AgentTypeCard from "./AgentTypeCard";

const AgentTypes = () => {
  return (
    <section className="py-20 bg-pro-900" id="agent-types">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="h2 mb-4 text-white">Specialized Agent Types</h2>
          <p className="text-pro-200 max-w-2xl mx-auto">
            Explore pre-configured agent templates designed for specific use cases
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
          <AgentTypeCard 
            icon={Brain}
            title="Knowledge Assistants"
            description="Train on your data to create specialized knowledge workers that understand your business context and documentation."
            linkTo="/agent-builder"
          />
          
          <AgentTypeCard 
            icon={Bot}
            title="Customer Support"
            description="Create intelligent support agents that handle customer inquiries, troubleshoot problems, and escalate when necessary."
            linkTo="/agent-builder"
          />
          
          <AgentTypeCard 
            icon={Sparkles}
            title="Creative Assistants"
            description="Deploy agents that assist with content creation, idea generation, writing, design suggestions, and creative workflows."
            linkTo="/agent-builder"
          />
        </div>
      </div>
    </section>
  );
};

export default AgentTypes;

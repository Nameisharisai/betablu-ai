
import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import Button from "@/components/common/Button";
import { Search, Code, ArrowRight, Copy, CheckCircle2 } from "lucide-react";

const Documentation = () => {
  useScrollAnimation();
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  const handleCopyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };
  
  const codeExamples = [
    {
      title: "Initialize BetaBLU Client",
      language: "python",
      code: `from betablu import Agent

# Initialize client
client = Agent.initialize(api_key="your_api_key")

# Create an agent
agent = client.create_agent(
    name="Customer Support",
    model="gpt-4",
    capabilities=["reasoning", "memory"]
)`
    },
    {
      title: "Connect to Data Sources",
      language: "python",
      code: `# Connect to your database
agent.connect_datasource(
    source_type="database",
    connection_string="postgresql://user:pass@host/db"
)

# Connect to your API
agent.connect_datasource(
    source_type="api",
    base_url="https://api.example.com",
    headers={"Authorization": "Bearer token"}
)`
    },
    {
      title: "Deploy the Agent",
      language: "python",
      code: `# Deploy to cloud
deployment = agent.deploy(
    environment="cloud",
    auto_scale=True
)

# Get API endpoint
api_endpoint = deployment.api_endpoint
print(f"Agent deployed at: {api_endpoint}")`
    },
    {
      title: "JavaScript SDK Integration",
      language: "javascript",
      code: `import { BetaBluClient } from '@betablu/sdk';

// Initialize client
const client = new BetaBluClient({ apiKey: 'your_api_key' });

// Create a conversation with an agent
const conversation = await client.createConversation({
  agentId: 'agent_id',
  context: {
    user: 'John Doe',
    topic: 'Technical Support'
  }
});

// Send message to agent
const response = await conversation.sendMessage('How do I reset my password?');
console.log(response.content);`
    }
  ];
  
  const documentationCategories = [
    {
      title: "Getting Started",
      items: ["Introduction", "Installation", "Quick Start", "Key Concepts"]
    },
    {
      title: "Agent Development",
      items: ["Creating Agents", "Agent Capabilities", "Data Sources", "Testing Agents"]
    },
    {
      title: "Deployment",
      items: ["Cloud Deployment", "On-Premise Solutions", "Serverless Functions", "Docker Containers"]
    },
    {
      title: "Integration",
      items: ["API Reference", "JavaScript SDK", "Python SDK", "Webhooks"]
    },
    {
      title: "Advanced Topics",
      items: ["Agent Memory", "Reinforcement Learning", "Multi-Agent Systems", "Security Best Practices"]
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-20 relative">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full bg-blu-50/80 dark:bg-blu-900/20 blur-3xl" />
          </div>
          
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 reveal">
              <h1 className="h1 mb-6">
                <span className="text-gradient">BetaBLU</span> Documentation
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive guides and references to help you integrate BetaBLU agents into your workflows.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto mb-16 reveal">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full py-3 px-5 pl-12 rounded-full border border-border bg-background dark:bg-dark-800/70 focus:outline-none focus:ring-2 focus:ring-blu-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
              {documentationCategories.map((category, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-dark-800 rounded-xl shadow-sm border border-border p-6"
                >
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a href="#" className="text-muted-foreground hover:text-blu-500 hover:underline">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Integration Examples */}
        <section className="py-16 bg-secondary/50 dark:bg-dark-700/30">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 reveal">
              <h2 className="h2 mb-4">Integration Examples</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Copy and paste code examples to quickly integrate BetaBLU agents into your applications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {codeExamples.map((example, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-dark-800 rounded-xl border border-border overflow-hidden reveal"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-center px-6 py-3 border-b border-border">
                    <h3 className="font-medium flex items-center">
                      <Code size={18} className="mr-2 text-blu-500" />
                      {example.title}
                    </h3>
                    <div className="flex items-center">
                      <span className="mr-2 text-sm text-muted-foreground">{example.language}</span>
                      <button 
                        className="p-1.5 hover:bg-secondary dark:hover:bg-dark-600 rounded-md"
                        onClick={() => handleCopyCode(example.code, index)}
                        aria-label="Copy code"
                      >
                        {copiedIndex === index ? (
                          <CheckCircle2 size={18} className="text-green-500" />
                        ) : (
                          <Copy size={18} className="text-muted-foreground" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="p-4 bg-secondary/50 dark:bg-dark-700/50 overflow-x-auto">
                    <pre className="text-sm font-mono text-foreground">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12 reveal">
              <Button 
                size="lg" 
                icon={<ArrowRight size={18} />} 
                iconPosition="right"
              >
                View Full Documentation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;

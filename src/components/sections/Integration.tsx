
import { useEffect, useRef } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "../common/Button";

const INTEGRATION_STEPS = [
  {
    title: "API Integration",
    description: "Access AI agents via REST API/WebSocket endpoints for seamless integration.",
    checks: ["No code changes required", "Secure authentication", "Real-time updates"],
  },
  {
    title: "SDKs & Libraries",
    description: "Use our Python & JavaScript SDKs to integrate agents directly into your code.",
    checks: ["Simple function calls", "Extensive documentation", "Community support"],
  },
  {
    title: "Webhooks & Events",
    description: "Configure agents to trigger workflows when specific events occur.",
    checks: ["Custom event triggers", "Workflow automation", "Advanced filtering"],
  },
  {
    title: "On-Premise Deployment",
    description: "Self-host AI agents with a simple Docker deployment inside your infrastructure.",
    checks: ["Full control", "Data privacy", "Custom security policies"],
  },
];

const Integration = () => {
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
    <section id="integration" ref={sectionRef} className="py-20 lg:py-28 bg-secondary/50 relative">
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal">
            <h2 className="h2 mb-6">
              Enterprise Integration Made Simple
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              BetaBLU offers multiple integration options to fit perfectly into your existing infrastructure, whether you're a startup or an enterprise.
            </p>
            
            <div className="space-y-6">
              {INTEGRATION_STEPS.map((step, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-white rounded-xl shadow-sm border border-border reveal"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  
                  <ul className="space-y-2">
                    {step.checks.map((check, checkIndex) => (
                      <li key={checkIndex} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blu-500 mr-2 mt-0.5 shrink-0" />
                        <span className="text-sm">{check}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <Button 
              className="mt-8" 
              icon={<ArrowRight size={16} />} 
              iconPosition="right"
            >
              Explore Integration Options
            </Button>
          </div>
          
          <div className="relative h-[500px] hidden lg:block reveal">
            <div className="absolute inset-0 glass rounded-2xl overflow-hidden border border-white/30 shadow-blu">
              <div className="absolute top-0 left-0 right-0 h-12 bg-white/50 border-b border-white/20 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                <div className="ml-4 px-2 py-1 rounded bg-white/50 text-xs">integration.py</div>
              </div>
              
              <div className="mt-12 p-6 font-mono text-sm text-left overflow-hidden">
                <pre className="text-left">
                  <code className="language-python">
                    <div className="text-muted-foreground"># Import BetaBLU SDK</div>
                    <div className="text-blu-600">from</div>
                    <div className="text-foreground"> betablu </div>
                    <div className="text-blu-600">import</div>
                    <div className="text-foreground"> Agent, Workflow</div>
                    <br/>
                    <div className="text-muted-foreground"># Initialize client</div>
                    <div className="text-foreground">client = Agent.initialize(api_key="your_api_key")</div>
                    <br/>
                    <div className="text-muted-foreground"># Create an AI agent</div>
                    <div className="text-foreground">agent = client.create_agent(</div>
                    <div className="text-foreground pl-8">name="Customer Support",</div>
                    <div className="text-foreground pl-8">model="gpt-4",</div>
                    <div className="text-foreground pl-8">capabilities=["reasoning", "memory"]</div>
                    <div className="text-foreground">)</div>
                    <br/>
                    <div className="text-muted-foreground"># Connect to your data sources</div>
                    <div className="text-foreground">agent.connect_datasource(</div>
                    <div className="text-foreground pl-8">source_type="database",</div>
                    <div className="text-foreground pl-8">connection_string="postgresql://..."</div>
                    <div className="text-foreground">)</div>
                    <br/>
                    <div className="text-muted-foreground"># Deploy the agent</div>
                    <div className="text-foreground">deployment = agent.deploy(</div>
                    <div className="text-foreground pl-8">environment="cloud",</div>
                    <div className="text-foreground pl-8">auto_scale=True</div>
                    <div className="text-foreground">)</div>
                    <br/>
                    <div className="text-muted-foreground"># Get API endpoint</div>
                    <div className="text-foreground">api_endpoint = deployment.api_endpoint</div>
                    <div className="text-foreground">print(f"Agent deployed at: {api_endpoint}")</div>
                  </code>
                </pre>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 h-[500px] w-[500px] bg-blu-50/50 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 h-[300px] w-[300px] bg-blu-100/30 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;

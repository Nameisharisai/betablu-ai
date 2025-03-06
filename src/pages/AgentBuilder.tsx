
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Card, { CardContent, CardHeader } from "@/components/common/Card";
import Button from "@/components/common/Button";
import { Bot, Brain, Sparkles, Settings, Save, Play, Rocket, Plus } from "lucide-react";
import { toast } from "sonner";

const AgentBuilder = () => {
  const [activeTab, setActiveTab] = useState('design');
  const [agentName, setAgentName] = useState('My New Agent');
  const [isBuilding, setIsBuilding] = useState(false);
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Add event listener for beforeunload
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
      return '';
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  
  const handleSave = () => {
    toast.success('Agent configuration saved successfully');
  };
  
  const handleTest = () => {
    setIsBuilding(true);
    
    // Simulate loading
    setTimeout(() => {
      setIsBuilding(false);
      toast.success('Agent ready for testing');
    }, 2000);
  };
  
  const handleDeploy = () => {
    toast.success('Agent deployed successfully');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Builder Header */}
          <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                <span className="text-gradient">IntelliAgent</span> Builder
              </h1>
              <p className="text-muted-foreground">Create, test, and deploy your AI agent</p>
            </div>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button 
                variant="outline" 
                size="sm"
                icon={<Save size={16} />}
                onClick={handleSave}
              >
                Save
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                icon={<Play size={16} />}
                onClick={handleTest}
                disabled={isBuilding}
              >
                {isBuilding ? 'Building...' : 'Test Agent'}
              </Button>
              <Button 
                size="sm"
                icon={<Rocket size={16} />}
                onClick={handleDeploy}
              >
                Deploy
              </Button>
            </div>
          </div>
          
          {/* Agent Name Input */}
          <div className="mb-8">
            <div className="glass-card p-4 flex items-center">
              <div className="mr-4">
                <Bot className="h-6 w-6 text-blu-400" />
              </div>
              <input
                type="text"
                value={agentName}
                onChange={(e) => setAgentName(e.target.value)}
                className="bg-transparent border-none text-xl font-semibold focus:outline-none focus:ring-0 w-full"
                aria-label="Agent name"
              />
            </div>
          </div>
          
          {/* Builder Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="glass-card p-6 sticky top-24">
                <nav className="space-y-2">
                  <button
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${
                      activeTab === 'design' ? 'bg-blu-600 text-white' : 'hover:bg-dark-700'
                    }`}
                    onClick={() => setActiveTab('design')}
                  >
                    <Brain className="h-5 w-5 mr-3" />
                    <span>Agent Design</span>
                  </button>
                  <button
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${
                      activeTab === 'capabilities' ? 'bg-blu-600 text-white' : 'hover:bg-dark-700'
                    }`}
                    onClick={() => setActiveTab('capabilities')}
                  >
                    <Sparkles className="h-5 w-5 mr-3" />
                    <span>Capabilities</span>
                  </button>
                  <button
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center ${
                      activeTab === 'settings' ? 'bg-blu-600 text-white' : 'hover:bg-dark-700'
                    }`}
                    onClick={() => setActiveTab('settings')}
                  >
                    <Settings className="h-5 w-5 mr-3" />
                    <span>Settings</span>
                  </button>
                </nav>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              {activeTab === 'design' && (
                <div className="space-y-8">
                  <div className="glass-card p-6">
                    <h2 className="text-xl font-semibold mb-4">Natural Language Description</h2>
                    <p className="text-muted-foreground text-sm mb-4">
                      Describe your agent's purpose, personality, and capabilities in natural language.
                    </p>
                    <textarea
                      className="w-full h-40 p-4 rounded-lg bg-dark-800 border border-border focus:border-blu-500 focus:ring-blu-500"
                      placeholder="E.g., Create a customer support agent that can answer questions about our products, handle returns, and escalate complex issues to human support when needed..."
                    ></textarea>
                    <div className="mt-4">
                      <Button>Generate Agent Configuration</Button>
                    </div>
                  </div>
                  
                  <div className="glass-card p-6">
                    <h2 className="text-xl font-semibold mb-4">Personality & Tone</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                          Communication Style
                        </label>
                        <select className="w-full p-2 rounded-lg bg-dark-800 border border-border">
                          <option>Professional</option>
                          <option>Friendly</option>
                          <option>Technical</option>
                          <option>Casual</option>
                          <option>Formal</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                          Verbosity
                        </label>
                        <select className="w-full p-2 rounded-lg bg-dark-800 border border-border">
                          <option>Concise</option>
                          <option>Balanced</option>
                          <option>Detailed</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-card p-6">
                    <h2 className="text-xl font-semibold mb-4">Cognitive Parameters</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                          Base Model
                        </label>
                        <select className="w-full p-2 rounded-lg bg-dark-800 border border-border">
                          <option>GPT-4</option>
                          <option>Claude 3</option>
                          <option>Llama 3</option>
                          <option>Mistral Large</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                          Memory Type
                        </label>
                        <select className="w-full p-2 rounded-lg bg-dark-800 border border-border">
                          <option>Stateless</option>
                          <option>Session Memory</option>
                          <option>Long-term Memory</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                          Reasoning Depth
                        </label>
                        <input
                          type="range"
                          min="1"
                          max="10"
                          defaultValue="5"
                          className="w-full"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground mt-1">
                          <span>Simple</span>
                          <span>Complex</span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                          Creativity
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.1"
                          defaultValue="0.7"
                          className="w-full"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground mt-1">
                          <span>Deterministic</span>
                          <span>Creative</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'capabilities' && (
                <div className="space-y-8">
                  <div className="glass-card p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-semibold">Active Capabilities</h2>
                      <Button size="sm" variant="outline" icon={<Plus size={16} />}>
                        Add Capability
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        {
                          name: "Web Search",
                          description: "Search the web for up-to-date information",
                          enabled: true
                        },
                        {
                          name: "Document Analysis",
                          description: "Extract and analyze information from documents",
                          enabled: true
                        },
                        {
                          name: "Code Generation",
                          description: "Generate code in multiple programming languages",
                          enabled: false
                        }
                      ].map((capability, index) => (
                        <div key={index} className="p-4 border border-border rounded-lg bg-dark-800/50">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">{capability.name}</h3>
                              <p className="text-sm text-muted-foreground">{capability.description}</p>
                            </div>
                            <div className="flex items-center">
                              <div className="mr-2 text-sm">
                                {capability.enabled ? (
                                  <span className="text-green-500">Enabled</span>
                                ) : (
                                  <span className="text-muted-foreground">Disabled</span>
                                )}
                              </div>
                              <div className="relative inline-block w-10 h-5 transition duration-200 ease-in-out">
                                <input
                                  type="checkbox"
                                  id={`toggle-${index}`}
                                  className="opacity-0 w-0 h-0"
                                  defaultChecked={capability.enabled}
                                />
                                <label
                                  htmlFor={`toggle-${index}`}
                                  className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition-colors duration-200 ${
                                    capability.enabled ? 'bg-blu-600' : 'bg-dark-600'
                                  }`}
                                >
                                  <span
                                    className={`absolute left-0.5 bottom-0.5 bg-white w-4 h-4 rounded-full transition-transform duration-200 ${
                                      capability.enabled ? 'transform translate-x-5' : ''
                                    }`}
                                  ></span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="glass-card p-6">
                    <h2 className="text-xl font-semibold mb-4">API Integrations</h2>
                    <p className="text-muted-foreground mb-4">
                      Connect your agent to external APIs and services.
                    </p>
                    
                    <div className="p-4 border border-border rounded-lg bg-dark-800/50">
                      <h3 className="font-medium mb-4">Add API Integration</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-muted-foreground mb-2">
                            API Name
                          </label>
                          <input
                            type="text"
                            className="w-full p-2 rounded-lg bg-dark-800 border border-border"
                            placeholder="E.g., CRM API"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-muted-foreground mb-2">
                            Endpoint URL
                          </label>
                          <input
                            type="text"
                            className="w-full p-2 rounded-lg bg-dark-800 border border-border"
                            placeholder="https://api.example.com/v1"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <Button size="sm">Add Integration</Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'settings' && (
                <div className="space-y-8">
                  <div className="glass-card p-6">
                    <h2 className="text-xl font-semibold mb-4">Deployment Settings</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                          Deployment Environment
                        </label>
                        <select className="w-full p-2 rounded-lg bg-dark-800 border border-border">
                          <option>Cloud (BetaBLU Servers)</option>
                          <option>On-Premise</option>
                          <option>Hybrid</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-2">
                          Access Control
                        </label>
                        <select className="w-full p-2 rounded-lg bg-dark-800 border border-border">
                          <option>Public (API Key Required)</option>
                          <option>Private (Authentication Required)</option>
                          <option>Team Only</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-card p-6">
                    <h2 className="text-xl font-semibold mb-4">Security & Compliance</h2>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="data-encryption"
                          className="h-4 w-4 text-blu-600 rounded border-border bg-dark-800"
                        />
                        <label htmlFor="data-encryption" className="ml-2">
                          Enable end-to-end encryption
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="data-logging"
                          className="h-4 w-4 text-blu-600 rounded border-border bg-dark-800"
                        />
                        <label htmlFor="data-logging" className="ml-2">
                          Enable conversation logging
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="gdpr-compliance"
                          className="h-4 w-4 text-blu-600 rounded border-border bg-dark-800"
                          defaultChecked
                        />
                        <label htmlFor="gdpr-compliance" className="ml-2">
                          GDPR Compliance Mode
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass-card p-6">
                    <h2 className="text-xl font-semibold mb-4">Performance Monitoring</h2>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="usage-analytics"
                          className="h-4 w-4 text-blu-600 rounded border-border bg-dark-800"
                          defaultChecked
                        />
                        <label htmlFor="usage-analytics" className="ml-2">
                          Enable usage analytics
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="performance-alerts"
                          className="h-4 w-4 text-blu-600 rounded border-border bg-dark-800"
                          defaultChecked
                        />
                        <label htmlFor="performance-alerts" className="ml-2">
                          Receive performance alerts
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AgentBuilder;

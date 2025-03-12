
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/Button";
import { 
  Play, 
  Code, 
  Download, 
  Copy, 
  Settings, 
  Save, 
  RefreshCw, 
  Layers, 
  Share2, 
  ExternalLink, 
  Github, 
  Server, 
  Terminal, 
  Bug, 
  FileCode, 
  Cpu, 
  MonitorCheck
} from "lucide-react";
import { toast } from "sonner";

const AdvancedCodeSpace = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("code");
  const [prompt, setPrompt] = useState("");
  const [code, setCode] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [language, setLanguage] = useState("javascript");
  const [deployTarget, setDeployTarget] = useState("github");
  const [consoleOutput, setConsoleOutput] = useState("");
  const [debugInfo, setDebugInfo] = useState("");
  const [isDeploying, setIsDeploying] = useState(false);
  const editorRef = useRef<HTMLTextAreaElement>(null);
  
  useEffect(() => {
    // Check authentication
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loginStatus);
    
    if (!loginStatus) {
      toast.error("Please log in to access Advanced Code Space");
      navigate("/login");
    }
  }, [navigate]);
  
  // Languages supported
  const languages = [
    { id: "javascript", name: "JavaScript" },
    { id: "typescript", name: "TypeScript" },
    { id: "python", name: "Python" },
    { id: "go", name: "Go" },
    { id: "rust", name: "Rust" },
    { id: "java", name: "Java" },
    { id: "c", name: "C" },
    { id: "cpp", name: "C++" },
    { id: "csharp", name: "C#" },
    { id: "php", name: "PHP" },
    { id: "html", name: "HTML" },
    { id: "css", name: "CSS" },
    { id: "react", name: "React" },
    { id: "vue", name: "Vue" },
    { id: "angular", name: "Angular" },
  ];
  
  // Deployment targets
  const deploymentTargets = [
    { id: "github", name: "GitHub", icon: <Github className="h-4 w-4" /> },
    { id: "netlify", name: "Netlify", icon: <Server className="h-4 w-4" /> },
    { id: "vercel", name: "Vercel", icon: <Terminal className="h-4 w-4" /> },
    { id: "aws", name: "AWS", icon: <Cpu className="h-4 w-4" /> },
    { id: "azure", name: "Azure", icon: <MonitorCheck className="h-4 w-4" /> },
  ];
  
  const generateCode = () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt first");
      return;
    }
    
    setIsGenerating(true);
    setConsoleOutput("");
    setDebugInfo("");
    
    // Simulate code generation with more advanced examples
    setTimeout(() => {
      let sampleCode = "";
      
      if (language === "javascript" || language === "typescript") {
        sampleCode = `// Advanced BetaBLU code: ${prompt}
import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * BetaBLU Advanced API Integration Module
 * @param {string} endpoint - API endpoint to connect to
 * @param {Object} options - Configuration options
 * @returns {Object} - Response data and control methods
 */
export const useBetaBluAPI = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(\`https://api.betablu.ai/\${endpoint}\`, {
        headers: {
          'Authorization': \`Bearer \${process.env.BETABLU_API_KEY}\`,
          'Content-Type': 'application/json',
          ...options.headers
        },
        params: options.params
      });
      
      setData(response.data);
      return response.data;
    } catch (err) {
      setError(err);
      console.error('BetaBLU API Error:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    if (options.autoFetch !== false) {
      fetchData();
    }
  }, [endpoint, JSON.stringify(options.params)]);
  
  return { data, loading, error, refetch: fetchData };
};

// Usage example:
const MyComponent = () => {
  const { data, loading, error } = useBetaBluAPI('ai-models/latest');
  
  if (loading) return <div>Loading BetaBLU models...</div>;
  if (error) return <div>Error loading models</div>;
  
  return (
    <div>
      <h1>BetaBLU AI Models</h1>
      <ul>
        {data?.models.map(model => (
          <li key={model.id}>
            {model.name} - {model.capabilities.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;`;
      } else if (language === "python") {
        sampleCode = `"""
BetaBLU Advanced Data Processing Module
Generated based on prompt: ${prompt}
"""
import numpy as np
import pandas as pd
from typing import Dict, List, Union, Optional
import logging
import json
from datetime import datetime

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger('betablu')

class BetaBluDataProcessor:
    """Advanced data processing for BetaBLU AI systems"""
    
    def __init__(self, config_path: Optional[str] = None):
        """Initialize the processor with optional configuration"""
        self.config = {}
        if config_path:
            try:
                with open(config_path, 'r') as f:
                    self.config = json.load(f)
                logger.info(f"Loaded configuration from {config_path}")
            except Exception as e:
                logger.error(f"Failed to load configuration: {e}")
                raise
        
        self.data: Optional[pd.DataFrame] = None
        self.metadata: Dict = {
            "version": "1.0.0",
            "created_at": datetime.now().isoformat(),
            "processing_steps": []
        }
    
    def load_data(self, filepath_or_data: Union[str, pd.DataFrame]) -> pd.DataFrame:
        """Load data from file or directly as DataFrame"""
        try:
            if isinstance(filepath_or_data, str):
                if filepath_or_data.endswith('.csv'):
                    self.data = pd.read_csv(filepath_or_data)
                elif filepath_or_data.endswith('.json'):
                    self.data = pd.read_json(filepath_or_data)
                else:
                    raise ValueError(f"Unsupported file format: {filepath_or_data}")
                
                logger.info(f"Loaded data from {filepath_or_data} with {len(self.data)} rows")
            else:
                self.data = filepath_or_data
                logger.info(f"Loaded data with {len(self.data)} rows")
                
            self._add_processing_step("load_data")
            return self.data
        except Exception as e:
            logger.error(f"Error loading data: {e}")
            raise
    
    def preprocess(self, columns: Optional[List[str]] = None) -> pd.DataFrame:
        """Preprocess the data with standard cleaning operations"""
        if self.data is None:
            raise ValueError("No data loaded. Call load_data first.")
        
        try:
            # Select columns if specified
            if columns:
                self.data = self.data[columns]
            
            # Remove duplicates
            initial_rows = len(self.data)
            self.data = self.data.drop_duplicates()
            dup_removed = initial_rows - len(self.data)
            
            # Handle missing values
            self.data = self.data.fillna(self.data.mean(numeric_only=True))
            
            # Log preprocessing results
            logger.info(f"Preprocessing complete. Removed {dup_removed} duplicate rows.")
            self._add_processing_step("preprocess", {
                "columns": columns,
                "duplicates_removed": dup_removed
            })
            
            return self.data
        except Exception as e:
            logger.error(f"Error during preprocessing: {e}")
            raise
    
    def _add_processing_step(self, step_name: str, metadata: Dict = None) -> None:
        """Add processing step to metadata"""
        self.metadata["processing_steps"].append({
            "step": step_name,
            "timestamp": datetime.now().isoformat(),
            "metadata": metadata or {}
        })
    
    def export(self, output_path: str, format: str = 'csv') -> str:
        """Export processed data to file"""
        if self.data is None:
            raise ValueError("No data to export. Process data first.")
        
        try:
            if format == 'csv':
                self.data.to_csv(output_path, index=False)
            elif format == 'json':
                with open(output_path, 'w') as f:
                    json.dump({
                        "data": self.data.to_dict(orient='records'),
                        "metadata": self.metadata
                    }, f, indent=2)
            else:
                raise ValueError(f"Unsupported export format: {format}")
                
            logger.info(f"Data exported to {output_path} in {format} format")
            return output_path
        except Exception as e:
            logger.error(f"Error exporting data: {e}")
            raise

# Example usage
if __name__ == "__main__":
    processor = BetaBluDataProcessor()
    data = processor.load_data("sample_data.csv")
    processed_data = processor.preprocess(columns=["feature1", "feature2", "target"])
    processor.export("processed_data.json", format="json")
    print("Processing complete!")`;
      } else {
        sampleCode = `// Generated ${language} code based on your prompt:
// "${prompt}"

// This is an advanced ${language} implementation for the BetaBLU platform.
// The code follows best practices for ${language} development.
// In a production environment, this would be a fully featured implementation.`;
      }
      
      setCode(sampleCode);
      setIsGenerating(false);
      setConsoleOutput("Compilation successful! Code ready for deployment.");
      toast.success("Advanced code generated successfully");
    }, 2000);
  };
  
  const handleRunCode = () => {
    if (!code) {
      toast.error("No code to run");
      return;
    }
    
    setConsoleOutput("Running code...");
    
    // Simulate code execution
    setTimeout(() => {
      setConsoleOutput(prevOutput => prevOutput + "\n> Initializing BetaBLU runtime...\n> Executing in secure sandbox environment\n> Output: BetaBLU integration successful\n> Process completed with exit code 0");
      toast.success("Code executed successfully");
    }, 1500);
  };
  
  const handleDebug = () => {
    if (!code) {
      toast.error("No code to debug");
      return;
    }
    
    setDebugInfo("Starting debugger...");
    
    // Simulate debugging
    setTimeout(() => {
      setDebugInfo(prevInfo => prevInfo + "\n> Analyzing code structure...\n> Running static analysis\n> Performance optimization opportunities identified\n> No critical issues found\n> Suggestion: Consider adding error boundaries for React components\n> Debug complete");
      toast.success("Debugging complete");
    }, 2000);
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard");
  };
  
  const downloadCode = () => {
    const extension = language === "python" ? "py" : language === "typescript" ? "ts" : "js";
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `betablu-advanced-code.${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Code downloaded");
  };
  
  const handleDeploy = () => {
    if (!code) {
      toast.error("No code to deploy");
      return;
    }
    
    setIsDeploying(true);
    setConsoleOutput(prev => prev + "\n\n> Initiating deployment to " + deployTarget + "...");
    
    // Simulate deployment
    setTimeout(() => {
      setConsoleOutput(prev => prev + "\n> Connecting to " + deployTarget + "...\n> Building application...\n> Running tests...\n> Tests passed\n> Deploying to production environment\n> Deployment successful!\n> Application is now live at https://betablu-app-" + Math.floor(Math.random() * 10000) + ".domain.com");
      setIsDeploying(false);
      toast.success(`Deployed successfully to ${deployTarget}`);
    }, 3000);
  };
  
  if (!isLoggedIn) {
    return null; // Will redirect via useEffect
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 fade-in-animation">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold">
                  <span className="logo-text text-gradient">Advanced</span> Code Space
                </h1>
                <p className="text-muted-foreground">
                  Professional-grade code development, debugging, and deployment
                </p>
              </div>
              
              <Link to="/advanced-code-space-explained">
                <Button variant="outline" size="sm" icon={<ExternalLink className="h-4 w-4" />}>
                  Learn About Advanced Code Space
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="flex border-b border-border mb-6 pop-animation">
            <button
              className={`px-4 py-2 font-medium ${activeTab === "code" ? "border-b-2 border-blu-600 text-blu-600" : "text-muted-foreground"}`}
              onClick={() => setActiveTab("code")}
            >
              <div className="flex items-center gap-2">
                <FileCode className="h-4 w-4" />
                Code Editor
              </div>
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === "debug" ? "border-b-2 border-blu-600 text-blu-600" : "text-muted-foreground"}`}
              onClick={() => setActiveTab("debug")}
            >
              <div className="flex items-center gap-2">
                <Bug className="h-4 w-4" />
                Debug
              </div>
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === "deploy" ? "border-b-2 border-blu-600 text-blu-600" : "text-muted-foreground"}`}
              onClick={() => setActiveTab("deploy")}
            >
              <div className="flex items-center gap-2">
                <Server className="h-4 w-4" />
                Deploy
              </div>
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
            {/* Main Content Area */}
            <div className="lg:col-span-12 glass-card p-6 slide-up-animation">
              {activeTab === "code" && (
                <>
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <Code className="mr-2 h-5 w-5 text-blu-400" />
                    Professional Code Generation
                  </h2>
                  
                  <form onSubmit={(e) => { e.preventDefault(); generateCode(); }}>
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Describe the advanced functionality you want to build (e.g., 'Create a React hook for fetching and caching data from multiple APIs with request deduplication and error handling')"
                      className="w-full p-4 h-32 rounded-lg bg-background border border-border focus:border-blu-500 focus:ring-blu-500 mb-4"
                    />
                    
                    <div className="flex flex-wrap gap-4 justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <label htmlFor="language" className="text-sm font-medium">
                          Language:
                        </label>
                        <select
                          id="language"
                          value={language}
                          onChange={(e) => setLanguage(e.target.value)}
                          className="bg-background border border-border rounded-md px-3 py-1 text-sm"
                        >
                          {languages.map((lang) => (
                            <option key={lang.id} value={lang.id}>
                              {lang.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          icon={<RefreshCw className="h-4 w-4" />}
                          onClick={() => setPrompt("")}
                        >
                          Clear
                        </Button>
                        <Button
                          type="submit"
                          icon={<Play className="h-4 w-4" />}
                          disabled={isGenerating || !prompt.trim()}
                          className="pulse-glow"
                        >
                          {isGenerating ? "Generating..." : "Generate Advanced Code"}
                        </Button>
                      </div>
                    </div>
                  </form>
                  
                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-semibold">Code Editor</h3>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          icon={<Copy className="h-4 w-4" />}
                          onClick={copyToClipboard}
                          disabled={!code}
                        >
                          Copy
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          icon={<Download className="h-4 w-4" />}
                          onClick={downloadCode}
                          disabled={!code}
                        >
                          Download
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          icon={<Play className="h-4 w-4" />}
                          onClick={handleRunCode}
                          disabled={!code}
                        >
                          Run
                        </Button>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute top-2 right-2 flex space-x-2">
                        <span className="text-xs px-2 py-0.5 rounded bg-blu-600 text-white">
                          {languages.find(lang => lang.id === language)?.name || language}
                        </span>
                      </div>
                      
                      <textarea
                        ref={editorRef}
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Your generated code will appear here..."
                        className="w-full p-4 pt-10 h-96 rounded-lg bg-background border border-border focus:border-blu-500 focus:ring-0 font-mono text-sm"
                      />
                    </div>
                    
                    {consoleOutput && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium mb-2">Console Output:</h4>
                        <pre className="p-3 bg-background border border-border rounded-lg text-sm overflow-auto max-h-40 whitespace-pre-wrap">
                          {consoleOutput}
                        </pre>
                      </div>
                    )}
                  </div>
                </>
              )}
              
              {activeTab === "debug" && (
                <>
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <Bug className="mr-2 h-5 w-5 text-blu-400" />
                    Advanced Debugging
                  </h2>
                  
                  <div className="mb-4">
                    <p className="text-muted-foreground mb-4">
                      Debug your code with advanced tools and static analysis to identify issues, optimize performance, and ensure code quality.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="p-4 border border-border rounded-lg bg-background">
                        <h3 className="font-medium mb-2">Static Analysis</h3>
                        <p className="text-sm text-muted-foreground">
                          Scan your code for potential bugs, security vulnerabilities, and style issues.
                        </p>
                        <Button 
                          className="mt-3 w-full"
                          variant="outline"
                          onClick={handleDebug}
                          disabled={!code}
                        >
                          Run Static Analysis
                        </Button>
                      </div>
                      
                      <div className="p-4 border border-border rounded-lg bg-background">
                        <h3 className="font-medium mb-2">Performance Analysis</h3>
                        <p className="text-sm text-muted-foreground">
                          Identify performance bottlenecks and optimization opportunities.
                        </p>
                        <Button 
                          className="mt-3 w-full"
                          variant="outline"
                          onClick={handleDebug}
                          disabled={!code}
                        >
                          Analyze Performance
                        </Button>
                      </div>
                    </div>
                    
                    {debugInfo && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium mb-2">Debug Output:</h4>
                        <pre className="p-3 bg-background border border-border rounded-lg text-sm overflow-auto max-h-60 whitespace-pre-wrap">
                          {debugInfo}
                        </pre>
                      </div>
                    )}
                  </div>
                </>
              )}
              
              {activeTab === "deploy" && (
                <>
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <Server className="mr-2 h-5 w-5 text-blu-400" />
                    Deployment
                  </h2>
                  
                  <div className="mb-4">
                    <p className="text-muted-foreground mb-4">
                      Deploy your code directly to GitHub repositories or cloud hosting platforms with integrated CI/CD.
                    </p>
                    
                    <div className="mb-6">
                      <h3 className="font-medium mb-3">Select Deployment Target</h3>
                      <div className="flex flex-wrap gap-3">
                        {deploymentTargets.map(target => (
                          <button
                            key={target.id}
                            onClick={() => setDeployTarget(target.id)}
                            className={`flex items-center gap-2 py-2 px-4 rounded-lg transition-all ${
                              deployTarget === target.id
                                ? "bg-blu-600 text-white"
                                : "bg-background border border-border hover:border-blu-500"
                            }`}
                          >
                            {target.icon}
                            <span>{target.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium">Deployment Settings</h3>
                      <Button variant="outline" size="sm" icon={<Settings className="h-4 w-4" />}>
                        Configure
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="p-4 border border-border rounded-lg bg-background">
                        <h4 className="font-medium mb-2">Repository Settings</h4>
                        <div className="space-y-2">
                          <div>
                            <label className="text-sm text-muted-foreground">Repository Name</label>
                            <input 
                              type="text" 
                              className="mt-1 w-full p-2 rounded border border-border" 
                              placeholder="betablu-advanced-project"
                            />
                          </div>
                          <div>
                            <label className="text-sm text-muted-foreground">Branch</label>
                            <input 
                              type="text" 
                              className="mt-1 w-full p-2 rounded border border-border" 
                              placeholder="main"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 border border-border rounded-lg bg-background">
                        <h4 className="font-medium mb-2">Deployment Options</h4>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <input type="checkbox" id="runTests" className="mr-2" checked />
                            <label htmlFor="runTests" className="text-sm">Run tests before deploying</label>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id="autoPublish" className="mr-2" checked />
                            <label htmlFor="autoPublish" className="text-sm">Auto-publish release</label>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id="notify" className="mr-2" checked />
                            <label htmlFor="notify" className="text-sm">Notify on completion</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Button
                      onClick={handleDeploy}
                      disabled={isDeploying || !code}
                      className="w-full pulse-glow"
                      size="lg"
                    >
                      {isDeploying ? "Deploying..." : `Deploy to ${deploymentTargets.find(t => t.id === deployTarget)?.name || deployTarget}`}
                    </Button>
                    
                    {consoleOutput && (
                      <div className="mt-4">
                        <h4 className="text-sm font-medium mb-2">Deployment Log:</h4>
                        <pre className="p-3 bg-background border border-border rounded-lg text-sm overflow-auto max-h-60 whitespace-pre-wrap">
                          {consoleOutput}
                        </pre>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
          
          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 pop-animation">
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-2">Advanced AI Code Generation</h3>
              <p className="text-muted-foreground text-sm">
                Generate production-quality code with intelligent architecture planning, documentation, and best practices.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-2">GitHub Integration</h3>
              <p className="text-muted-foreground text-sm">
                Push code directly to GitHub repositories and create pull requests with detailed descriptions.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-2">CI/CD Pipeline</h3>
              <p className="text-muted-foreground text-sm">
                Deploy code to production with integrated CI/CD workflows, automated testing, and release management.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdvancedCodeSpace;

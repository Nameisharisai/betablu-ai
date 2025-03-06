
import { useState, useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/Button";
import { Play, Code, Download, Copy, Settings, Save, RefreshCw, Layers, Share2, ExternalLink } from "lucide-react";
import { toast } from "sonner";

const CodeStudio = () => {
  const [prompt, setPrompt] = useState("");
  const [code, setCode] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [language, setLanguage] = useState("javascript");
  const editorRef = useRef<HTMLTextAreaElement>(null);
  
  // Sample language options
  const languages = [
    { id: "javascript", name: "JavaScript" },
    { id: "python", name: "Python" },
    { id: "typescript", name: "TypeScript" },
    { id: "html", name: "HTML" },
    { id: "css", name: "CSS" },
    { id: "react", name: "React" },
  ];
  
  const generateCode = () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt first");
      return;
    }
    
    setIsGenerating(true);
    
    // Simulate code generation (would connect to actual API in production)
    setTimeout(() => {
      let sampleCode = "";
      
      if (language === "javascript") {
        sampleCode = `// Generated JavaScript code based on your prompt:
// "${prompt}"

function processData(data) {
  // Parse the input data
  const parsedData = JSON.parse(data);
  
  // Transform the data according to requirements
  const result = parsedData.map(item => {
    return {
      id: item.id,
      name: item.name.toUpperCase(),
      value: item.value * 2
    };
  });
  
  // Filter out any invalid entries
  return result.filter(item => item.value > 10);
}

// Example usage
const sampleData = '[{"id": 1, "name": "example", "value": 8}, {"id": 2, "name": "test", "value": 12}]';
console.log(processData(sampleData));`;
      } else if (language === "python") {
        sampleCode = `# Generated Python code based on your prompt:
# "${prompt}"

import json

def process_data(data):
    # Parse the input data
    parsed_data = json.loads(data)
    
    # Transform the data according to requirements
    result = [
        {
            "id": item["id"],
            "name": item["name"].upper(),
            "value": item["value"] * 2
        }
        for item in parsed_data
    ]
    
    # Filter out any invalid entries
    return [item for item in result if item["value"] > 10]

# Example usage
sample_data = '[{"id": 1, "name": "example", "value": 8}, {"id": 2, "name": "test", "value": 12}]'
print(process_data(sample_data))`;
      } else {
        sampleCode = `// Generated ${language} code based on your prompt:
// "${prompt}"

// This is placeholder code for ${language}
// In a production environment, this would be properly generated
// based on your specific requirements.`;
      }
      
      setCode(sampleCode);
      setIsGenerating(false);
      toast.success("Code generated successfully");
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
    a.download = `code.${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Code downloaded");
  };
  
  const handlePromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generateCode();
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              <span className="text-gradient">Code</span> Studio
            </h1>
            <p className="text-muted-foreground">Generate, edit, and deploy code using natural language</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
            {/* Prompt Area */}
            <div className="lg:col-span-12 glass-card p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Code className="mr-2 h-5 w-5 text-blu-400" />
                Describe what you want to build
              </h2>
              
              <form onSubmit={handlePromptSubmit}>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="E.g., Create a function that processes JSON data, transforms the names to uppercase, doubles the values, and filters out entries with values less than 10..."
                  className="w-full p-4 h-32 rounded-lg bg-dark-800 border border-border focus:border-blu-500 focus:ring-blu-500 mb-4"
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
                      className="bg-dark-700 border border-border rounded-md px-3 py-1 text-sm"
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
                    >
                      {isGenerating ? "Generating..." : "Generate Code"}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
            
            {/* Code Editor */}
            <div className="lg:col-span-12 glass-card p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold flex items-center">
                  <Layers className="mr-2 h-5 w-5 text-blu-400" />
                  Generated Code
                </h2>
                
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
                    icon={<Share2 className="h-4 w-4" />}
                    disabled={!code}
                  >
                    Share
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
                  className="w-full p-4 pt-10 h-96 rounded-lg bg-dark-800 border border-border focus:border-blu-500 focus:ring-0 font-mono text-sm"
                />
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  {code ? `${code.split("\n").length} lines` : "No code generated yet"}
                </div>
                
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    icon={<Settings className="h-4 w-4" />}
                  >
                    Settings
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    icon={<Save className="h-4 w-4" />}
                    disabled={!code}
                  >
                    Save Project
                  </Button>
                  <Button
                    size="sm"
                    icon={<ExternalLink className="h-4 w-4" />}
                    disabled={!code}
                  >
                    Open Full IDE
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-2">Natural Language to Code</h3>
              <p className="text-muted-foreground text-sm">
                Describe what you want to build in plain English and our AI will generate the code for you.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-2">Multiple Languages</h3>
              <p className="text-muted-foreground text-sm">
                Generate code in JavaScript, Python, TypeScript, and many other programming languages.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-2">Deploy Instantly</h3>
              <p className="text-muted-foreground text-sm">
                Deploy your code to our cloud infrastructure with one click or export to your own environment.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CodeStudio;

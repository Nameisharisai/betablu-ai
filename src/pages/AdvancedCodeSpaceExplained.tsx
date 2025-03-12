
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/Button";
import { 
  Github, 
  Code, 
  Server, 
  Terminal, 
  Bug, 
  ArrowRight, 
  Braces, 
  Cpu, 
  LayoutGrid, 
  Workflow,
  CheckCircle,
  XCircle,
  GitBranch,
  GitPullRequest,
  Boxes
} from "lucide-react";

const AdvancedCodeSpaceExplained = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 fade-in-animation">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="logo-text text-gradient">Advanced Code Space</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A professional-grade development environment for writing, debugging, and deploying code
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/advanced-code-space">
                <Button icon={<Terminal className="h-4 w-4 mr-1" />} className="pulse-glow">
                  Open Code Space
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline" icon={<ArrowRight className="h-4 w-4 ml-1" />}>
                  Sign Up for Access
                </Button>
              </Link>
            </div>
          </div>
          
          {/* What is Advanced Code Space */}
          <div className="mb-16 glass-card p-8 rounded-xl pop-animation">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Code className="h-6 w-6 mr-2 text-blu-500" />
              What is Advanced Code Space?
            </h2>
            <p className="text-lg mb-6">
              BetaBLU's Advanced Code Space is a professional development environment that combines powerful code generation capabilities with robust debugging tools and seamless deployment integrations.
            </p>
            <p className="text-lg mb-6">
              Unlike basic code editors, Advanced Code Space provides an end-to-end solution for software developers who need to not only write code but also test, debug, and deploy it directly to production environments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-background p-6 rounded-lg border border-border">
                <Braces className="h-10 w-10 text-blu-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Multi-Language Support</h3>
                <p className="text-muted-foreground">
                  Write code in over 15 programming languages with intelligent syntax highlighting and autocomplete.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <Bug className="h-10 w-10 text-blu-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Advanced Debugging</h3>
                <p className="text-muted-foreground">
                  Identify and fix issues with intelligent static analysis and runtime debugging tools.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border">
                <Workflow className="h-10 w-10 text-blu-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">CI/CD Integration</h3>
                <p className="text-muted-foreground">
                  Deploy code directly to GitHub, Vercel, AWS, and other platforms with built-in CI/CD workflows.
                </p>
              </div>
            </div>
          </div>
          
          {/* Key Features */}
          <div className="mb-16 slide-up-animation">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-start">
                  <Github className="h-8 w-8 text-blu-500 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">GitHub Integration</h3>
                    <p className="text-muted-foreground mb-4">
                      Connect directly to your GitHub repositories to push code, create branches, and manage pull requests from within the code space.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Push code to repositories</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Create and manage branches</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Open pull requests</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-start">
                  <Server className="h-8 w-8 text-blu-500 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Deployment Options</h3>
                    <p className="text-muted-foreground mb-4">
                      Deploy your code directly to popular hosting platforms with built-in CI/CD workflows and automated testing.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Vercel, Netlify, and more</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>AWS and Azure integration</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Custom deployment targets</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-start">
                  <Cpu className="h-8 w-8 text-blu-500 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Advanced AI Code Generation</h3>
                    <p className="text-muted-foreground mb-4">
                      Generate production-ready code from detailed prompts with intelligent architecture planning and best practices.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Production-quality code</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Automatic documentation</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>15+ languages supported</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-start">
                  <Bug className="h-8 w-8 text-blu-500 mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Debugging Tools</h3>
                    <p className="text-muted-foreground mb-4">
                      Identify and fix issues with intelligent static analysis, runtime debugging, and performance optimization tools.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Static code analysis</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Performance profiling</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Security vulnerability detection</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Comparison with Basic Code Editor */}
          <div className="mb-16 glass-card p-8 rounded-xl pop-animation">
            <h2 className="text-3xl font-bold mb-6">
              How It Compares to Basic Code Studio
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-background">
                    <th className="p-4 text-left border-b border-border">Feature</th>
                    <th className="p-4 text-center border-b border-border">Basic Code Studio</th>
                    <th className="p-4 text-center border-b border-border bg-blu-50">Advanced Code Space</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-b border-border">Code Generation</td>
                    <td className="p-4 text-center border-b border-border">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="p-4 text-center border-b border-border bg-blu-50">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-border">Multiple Languages</td>
                    <td className="p-4 text-center border-b border-border">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="p-4 text-center border-b border-border bg-blu-50">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-border">Advanced Static Analysis</td>
                    <td className="p-4 text-center border-b border-border">
                      <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                    <td className="p-4 text-center border-b border-border bg-blu-50">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-border">GitHub Integration</td>
                    <td className="p-4 text-center border-b border-border">
                      <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                    <td className="p-4 text-center border-b border-border bg-blu-50">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-border">CI/CD Deployment</td>
                    <td className="p-4 text-center border-b border-border">
                      <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                    <td className="p-4 text-center border-b border-border bg-blu-50">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-b border-border">Production-Quality Code</td>
                    <td className="p-4 text-center border-b border-border">
                      <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                    <td className="p-4 text-center border-b border-border bg-blu-50">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* How to Access */}
          <div className="mb-16 slide-up-animation">
            <h2 className="text-3xl font-bold mb-6 text-center">How to Access</h2>
            <div className="max-w-3xl mx-auto glass-card p-8 rounded-xl">
              <div className="text-center mb-8">
                <p className="text-lg mb-4">
                  Advanced Code Space is available to all registered BetaBLU users. Sign up or log in to access this powerful development environment.
                </p>
                <div className="flex justify-center gap-4">
                  <Link to="/signup">
                    <Button>Sign Up</Button>
                  </Link>
                  <Link to="/login">
                    <Button variant="outline">Log In</Button>
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4">
                  <div className="bg-blu-100 text-blu-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3">1</div>
                  <h3 className="font-medium mb-2">Create Account</h3>
                  <p className="text-sm text-muted-foreground">Sign up for a BetaBLU account</p>
                </div>
                <div className="p-4">
                  <div className="bg-blu-100 text-blu-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3">2</div>
                  <h3 className="font-medium mb-2">Navigate to Code Space</h3>
                  <p className="text-sm text-muted-foreground">Go to Advanced Code Space</p>
                </div>
                <div className="p-4">
                  <div className="bg-blu-100 text-blu-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-3">3</div>
                  <h3 className="font-medium mb-2">Start Coding</h3>
                  <p className="text-sm text-muted-foreground">Begin creating and deploying code</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center mb-16 fade-in-animation">
            <h2 className="text-3xl font-bold mb-6">Ready to Build Professional Code?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Start using Advanced Code Space today and transform your development workflow with BetaBLU's powerful AI-enhanced tools.
            </p>
            <Link to="/advanced-code-space">
              <Button size="lg" className="animated-gradient pulse-glow">
                Launch Advanced Code Space
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdvancedCodeSpaceExplained;

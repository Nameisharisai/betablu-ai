import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/Button";
import { useToast } from "@/hooks/use-toast";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Plus, 
  Image as ImageIcon, 
  Video, 
  FileText, 
  Share2, 
  Calendar, 
  Download 
} from "lucide-react";
import { toast } from "sonner";

const ContentAgent = () => {
  const navigate = useNavigate();
  const { toast: uiToast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [contentType, setContentType] = useState("post");
  const [prompt, setPrompt] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isScheduling, setIsScheduling] = useState(false);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loginStatus);
    
    if (!loginStatus) {
      uiToast({
        title: "Authentication Required",
        description: "Please log in to access Betablu content features",
        variant: "destructive",
      });
      navigate("/login");
    }
  }, [navigate, uiToast]);

  const socialPlatforms = [
    { name: "Facebook", icon: <Facebook className="h-5 w-5" />, color: "bg-blue-600" },
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, color: "bg-sky-500" },
    { name: "Instagram", icon: <Instagram className="h-5 w-5" />, color: "bg-pink-600" },
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, color: "bg-blue-700" },
    { name: "YouTube", icon: <Youtube className="h-5 w-5" />, color: "bg-red-600" },
  ];

  const contentTypes = [
    { id: "post", name: "Text Post", icon: <FileText className="h-5 w-5" /> },
    { id: "image", name: "Image", icon: <ImageIcon className="h-5 w-5" /> },
    { id: "video", name: "Video", icon: <Video className="h-5 w-5" /> },
  ];

  const togglePlatform = (platformName: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformName) 
        ? prev.filter(p => p !== platformName) 
        : [...prev, platformName]
    );
  };

  const handleGenerate = () => {
    if (selectedPlatforms.length === 0) {
      uiToast({
        title: "Platform Required",
        description: "Please select at least one social media platform",
        variant: "destructive",
      });
      return;
    }

    if (!prompt.trim()) {
      uiToast({
        title: "Prompt Required",
        description: "Please enter a prompt for your content",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);

    setTimeout(() => {
      const platforms = selectedPlatforms.join(", ");
      const betabluPrompts = {
        post: `Amazing news from Betablu! Our adaptive AI technology just got smarter. ${prompt}. Try it today and transform your workflow! #Betablu #AIInnovation`,
        image: `[Image Description]: A sleek visualization of Betablu's interface showing ${prompt}. The image highlights our cutting-edge AI capabilities with a modern, professional aesthetic.`,
        video: `[Video Script]\nIntro: Quick animation of Betablu logo\nHost: "Welcome to Betablu where we're redefining AI assistance. Today we're exploring ${prompt}."\nMiddle: Demonstration of the feature in action\nClosing: "Join the AI revolution with Betablu today!"\nOutro: Call-to-action with subscription information`
      };
      
      setGeneratedContent(betabluPrompts[contentType as keyof typeof betabluPrompts]);
      setIsGenerating(false);
      
      uiToast({
        title: "Content Generated",
        description: `Your ${contentType} content for ${platforms} has been created`,
      });
    }, 2000);
  };

  const handleSchedule = () => {
    if (!generatedContent) {
      uiToast({
        title: "No Content",
        description: "Please generate content first before scheduling",
        variant: "destructive",
      });
      return;
    }

    setIsScheduling(true);

    setTimeout(() => {
      setIsScheduling(false);
      uiToast({
        title: "Content Scheduled",
        description: `Your Betablu content has been scheduled for posting on ${selectedPlatforms.join(", ")}`,
      });
    }, 1500);
  };

  const handlePostNow = () => {
    if (!generatedContent) {
      uiToast({
        title: "No Content",
        description: "Please generate content first before posting",
        variant: "destructive",
      });
      return;
    }

    uiToast({
      title: "Content Posted",
      description: `Your Betablu content has been posted to ${selectedPlatforms.join(", ")}`,
    });
  };

  const handleDownload = () => {
    if (!generatedContent) {
      toast.error("No content to download");
      return;
    }

    const element = document.createElement("a");
    const file = new Blob([generatedContent], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `betablu-content-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    toast.success("Content downloaded successfully!");
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-10">
        <div className="container-section">
          <div className="mb-12 text-center fade-in-animation">
            <h1 className="h2 mb-4">Betablu Content Creation</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Create and schedule Betablu content for multiple social media platforms with AI assistance. 
              Connect your accounts and streamline your social media workflow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-6 rounded-xl pop-animation">
              <h3 className="text-xl font-semibold mb-4">Create Betablu Content</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    1. Select Social Platforms
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {socialPlatforms.map((platform) => (
                      <button
                        key={platform.name}
                        onClick={() => togglePlatform(platform.name)}
                        className={`flex items-center gap-2 py-2 px-4 rounded-full transition-all scale-hover ${
                          selectedPlatforms.includes(platform.name)
                            ? `${platform.color} text-white`
                            : "bg-secondary hover:bg-secondary/80"
                        }`}
                      >
                        {platform.icon}
                        <span>{platform.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    2. Select Content Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {contentTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setContentType(type.id)}
                        className={`flex items-center gap-2 py-2 px-4 rounded-full transition-all scale-hover ${
                          contentType === type.id
                            ? "bg-blu-600 text-white"
                            : "bg-secondary hover:bg-secondary/80"
                        }`}
                      >
                        {type.icon}
                        <span>{type.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    3. Describe Betablu Content
                  </label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe the Betablu features or news you want to highlight..."
                    className="w-full p-3 rounded-lg bg-white border border-border focus:ring-blu-500 focus:border-blu-500 min-h-[120px]"
                  />
                </div>
                
                <Button 
                  onClick={handleGenerate} 
                  disabled={isGenerating}
                  full
                  className="pulse-glow"
                >
                  {isGenerating ? "Generating..." : "Generate Betablu Content"}
                </Button>
                
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">Connect More Accounts</h4>
                    <Button variant="ghost" size="sm" icon={<Plus className="h-4 w-4" />}>
                      Add Platform
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Connect additional social media accounts to expand Betablu's reach
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-xl slide-up-animation">
              <h3 className="text-xl font-semibold mb-4">Generated Betablu Content</h3>
              
              {isGenerating ? (
                <div className="flex flex-col items-center justify-center min-h-[300px]">
                  <div className="mb-4">
                    <div className="h-12 w-12 border-t-2 border-blu-500 rounded-full animate-spin"></div>
                  </div>
                  <p className="text-muted-foreground">Generating your Betablu content...</p>
                </div>
              ) : generatedContent ? (
                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-lg min-h-[300px] whitespace-pre-line border border-border">
                    {generatedContent}
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <Button 
                      icon={<Share2 className="h-4 w-4" />}
                      onClick={handlePostNow}
                      className="scale-hover"
                    >
                      Post Now
                    </Button>
                    <Button 
                      variant="outline" 
                      icon={<Calendar className="h-4 w-4" />}
                      onClick={handleSchedule}
                      disabled={isScheduling}
                      className="scale-hover"
                    >
                      {isScheduling ? "Scheduling..." : "Schedule Post"}
                    </Button>
                    <Button
                      variant="outline"
                      icon={<Download className="h-4 w-4" />}
                      onClick={handleDownload}
                      className="scale-hover"
                    >
                      Download
                    </Button>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <h4 className="font-medium mb-2">Platform Preview</h4>
                    <div className="bg-white p-3 rounded-lg border border-border">
                      <p className="text-sm text-muted-foreground">
                        Betablu content preview: see how your post will appear on selected platforms.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center min-h-[300px] text-muted-foreground">
                  <p>Your generated Betablu content will appear here</p>
                  <p className="text-sm mt-2">Select platforms and enter a prompt to get started</p>
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

export default ContentAgent;

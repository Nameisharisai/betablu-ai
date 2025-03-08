
import { useState } from "react";
import { Link } from "react-router-dom";
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
  Calendar 
} from "lucide-react";

const ContentAgent = () => {
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would be replaced with actual auth check
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [contentType, setContentType] = useState("post");
  const [prompt, setPrompt] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isScheduling, setIsScheduling] = useState(false);

  // Check login status on component mount (would use useEffect in real implementation)
  // This is a placeholder for demo purposes
  const checkLoginStatus = () => {
    // In reality, this would check with your auth system
    const fakeLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(fakeLoggedIn);
    return fakeLoggedIn;
  };

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
    if (!isLoggedIn && !checkLoginStatus()) {
      toast({
        title: "Authentication Required",
        description: "Please log in to use the content creation features",
        variant: "destructive",
      });
      return;
    }

    if (selectedPlatforms.length === 0) {
      toast({
        title: "Platform Required",
        description: "Please select at least one social media platform",
        variant: "destructive",
      });
      return;
    }

    if (!prompt.trim()) {
      toast({
        title: "Prompt Required",
        description: "Please enter a prompt for your content",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);

    // Simulate content generation
    setTimeout(() => {
      const platforms = selectedPlatforms.join(", ");
      setGeneratedContent(
        `Sample ${contentType} for ${platforms} based on prompt: "${prompt}"\n\n` +
        "This is where the AI-generated content would appear. In a production environment, " +
        "this would connect to an AI service to generate platform-specific content based on your prompt."
      );
      setIsGenerating(false);
      
      toast({
        title: "Content Generated",
        description: `Your ${contentType} content for ${platforms} has been created`,
      });
    }, 2000);
  };

  const handleSchedule = () => {
    if (!generatedContent) {
      toast({
        title: "No Content",
        description: "Please generate content first before scheduling",
        variant: "destructive",
      });
      return;
    }

    setIsScheduling(true);

    // Simulate scheduling
    setTimeout(() => {
      setIsScheduling(false);
      toast({
        title: "Content Scheduled",
        description: `Your content has been scheduled for posting on ${selectedPlatforms.join(", ")}`,
      });
    }, 1500);
  };

  const handlePostNow = () => {
    if (!generatedContent) {
      toast({
        title: "No Content",
        description: "Please generate content first before posting",
        variant: "destructive",
      });
      return;
    }

    // Simulate posting
    toast({
      title: "Content Posted",
      description: `Your content has been posted to ${selectedPlatforms.join(", ")}`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-10">
        <div className="container-section">
          <div className="mb-12 text-center">
            <h1 className="h2 mb-4">Content Creation Agent</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Create and schedule content for multiple social media platforms with AI assistance. 
              Connect your accounts and streamline your social media workflow.
            </p>
          </div>
          
          {!isLoggedIn ? (
            <div className="glass-card p-8 text-center max-w-xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Authentication Required</h3>
              <p className="mb-6 text-muted-foreground">
                You need to be logged in to use the content creation features.
              </p>
              <div className="flex gap-4 justify-center">
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
                <Link to="/signup">
                  <Button variant="outline">Sign Up</Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-4">Create Content</h3>
                
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
                          className={`flex items-center gap-2 py-2 px-4 rounded-full transition-all ${
                            selectedPlatforms.includes(platform.name)
                              ? `${platform.color} text-white`
                              : "bg-dark-700 hover:bg-dark-600"
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
                          className={`flex items-center gap-2 py-2 px-4 rounded-full transition-all ${
                            contentType === type.id
                              ? "bg-blu-600 text-white"
                              : "bg-dark-700 hover:bg-dark-600"
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
                      3. Describe What You Want
                    </label>
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Describe the content you want to create..."
                      className="w-full p-3 rounded-lg bg-dark-700 border border-border focus:ring-blu-500 focus:border-blu-500 min-h-[120px]"
                    />
                  </div>
                  
                  <Button 
                    onClick={handleGenerate} 
                    disabled={isGenerating}
                    full
                  >
                    {isGenerating ? "Generating..." : "Generate Content"}
                  </Button>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Connect More Accounts</h4>
                      <Button variant="ghost" size="sm" icon={<Plus className="h-4 w-4" />}>
                        Add Platform
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Connect additional social media accounts to expand your reach
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-4">Generated Content</h3>
                
                {isGenerating ? (
                  <div className="flex flex-col items-center justify-center min-h-[300px]">
                    <div className="mb-4">
                      <div className="h-12 w-12 border-t-2 border-blu-500 rounded-full animate-spin"></div>
                    </div>
                    <p className="text-muted-foreground">Generating your content...</p>
                  </div>
                ) : generatedContent ? (
                  <div className="space-y-6">
                    <div className="bg-dark-700 p-4 rounded-lg min-h-[300px] whitespace-pre-line">
                      {generatedContent}
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <Button 
                        icon={<Share2 className="h-4 w-4" />}
                        onClick={handlePostNow}
                      >
                        Post Now
                      </Button>
                      <Button 
                        variant="outline" 
                        icon={<Calendar className="h-4 w-4" />}
                        onClick={handleSchedule}
                        disabled={isScheduling}
                      >
                        {isScheduling ? "Scheduling..." : "Schedule Post"}
                      </Button>
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <h4 className="font-medium mb-2">Platform Preview</h4>
                      <div className="bg-dark-800 p-3 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          In a complete implementation, this area would show a preview of how your content would look on each selected platform.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center min-h-[300px] text-muted-foreground">
                    <p>Your generated content will appear here</p>
                    <p className="text-sm mt-2">Select platforms and enter a prompt to get started</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContentAgent;

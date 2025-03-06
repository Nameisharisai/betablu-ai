
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useScrollAnimation } from "@/lib/useScrollAnimation";
import Button from "@/components/common/Button";
import { CheckCircle2, Briefcase, Code, Brain, MessageSquare, Building } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Careers = () => {
  useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "Software Engineer",
    resume: null as File | null,
    coverLetter: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application Submitted!",
        description: "We've received your application and will review it shortly.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        position: "Software Engineer",
        resume: null,
        coverLetter: ""
      });
      
      // In a real implementation, you would send an email to betablu.ai@gmail.com
      // This would typically be handled by a backend service
      console.log("Application submitted:", formData);
    }, 1500);
  };
  
  const openPositions = [
    {
      title: "Senior Software Engineer",
      location: "Remote",
      type: "Full-time",
      description: "Join our core engineering team to build and scale our AI agent platform with cutting-edge technologies.",
      icon: <Code className="h-6 w-6 text-blu-500" />
    },
    {
      title: "AI Research Scientist",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Research and develop next-generation AI agent capabilities and learning algorithms.",
      icon: <Brain className="h-6 w-6 text-blu-500" />
    },
    {
      title: "Product Manager",
      location: "Remote",
      type: "Full-time",
      description: "Lead the product vision for our adaptive intelligence platform and drive feature development.",
      icon: <Building className="h-6 w-6 text-blu-500" />
    },
    {
      title: "Customer Success Specialist",
      location: "New York, NY",
      type: "Full-time",
      description: "Help enterprise customers integrate and optimize BetaBLU agents within their workflows.",
      icon: <MessageSquare className="h-6 w-6 text-blu-500" />
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full bg-blu-50/80 dark:bg-blu-900/20 blur-3xl" />
          </div>
          
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto reveal">
              <h1 className="h1 mb-6">
                Join the <span className="text-gradient">BetaBLU</span> Team
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Help us build the future of AI agents and transform how enterprises integrate intelligent automation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 reveal">
              {[
                {
                  title: "Innovative Work",
                  description: "Build cutting-edge AI technology that pushes the boundaries of what's possible."
                },
                {
                  title: "Remote-First Culture",
                  description: "Work from anywhere with flexible hours and a focus on results, not hours."
                },
                {
                  title: "Competitive Benefits",
                  description: "Comprehensive healthcare, generous PTO, and meaningful equity packages."
                }
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-dark-800 p-6 rounded-xl shadow-sm border border-border"
                >
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Open Positions */}
        <section className="py-16 bg-secondary/50 dark:bg-dark-700/30">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 reveal">
              <h2 className="h2 mb-4">Open Positions</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore our current opportunities and find your perfect role.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {openPositions.map((position, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-dark-800 rounded-xl shadow-sm border border-border overflow-hidden reveal"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="h-12 w-12 rounded-xl bg-blu-50 dark:bg-blu-900/30 flex items-center justify-center mr-4">
                        {position.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                        <div className="flex items-center text-sm text-muted-foreground mb-4">
                          <span className="mr-3">{position.location}</span>
                          <span>{position.type}</span>
                        </div>
                        <p className="text-muted-foreground mb-6">{position.description}</p>
                        <div className="flex space-x-3">
                          <a href="#application-form">
                            <Button>Apply Now</Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Application Form */}
        <section id="application-form" className="py-20">
          <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 reveal">
              <h2 className="h2 mb-4">Apply Now</h2>
              <p className="text-lg text-muted-foreground">
                Submit your application below and we'll get back to you soon.
              </p>
            </div>
            
            <div className="bg-white dark:bg-dark-800 rounded-xl shadow-md border border-border p-6 md:p-8 reveal">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background dark:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-blu-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background dark:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-blu-500"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="position" className="block text-sm font-medium mb-2">
                    Position*
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background dark:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-blu-500"
                  >
                    <option value="Software Engineer">Senior Software Engineer</option>
                    <option value="AI Researcher">AI Research Scientist</option>
                    <option value="Product Manager">Product Manager</option>
                    <option value="Customer Success">Customer Success Specialist</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="resume" className="block text-sm font-medium mb-2">
                    Resume/CV* (PDF, DOC, DOCX)
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    required
                    onChange={handleFileChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background dark:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-blu-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="coverLetter" className="block text-sm font-medium mb-2">
                    Cover Letter
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    rows={5}
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background dark:bg-dark-700 focus:outline-none focus:ring-2 focus:ring-blu-500"
                    placeholder="Tell us why you're interested in joining BetaBLU..."
                  ></textarea>
                </div>
                
                <div className="flex justify-center">
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;

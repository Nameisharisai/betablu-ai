
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/Button";
import { Check, X } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

type PlanFeature = {
  name: string;
  included: boolean;
};

type Plan = {
  id: string;
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  highlighted?: boolean;
};

const Subscription = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  // Check login status on component mount
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loginStatus);
    
    if (!loginStatus) {
      toast({
        title: "Authentication Required",
        description: "Please log in to view subscription options",
        variant: "destructive",
      });
      navigate("/login");
    }
  }, [navigate]);

  const plans: Plan[] = [
    {
      id: "starter",
      name: "Starter",
      price: billingCycle === "monthly" ? "$19" : "$190",
      description: "Perfect for individuals just getting started with BetaBLU AI agents",
      features: [
        { name: "Build 3 custom agents", included: true },
        { name: "5,000 AI chat tokens per month", included: true },
        { name: "Basic content generation", included: true },
        { name: "Single social media integration", included: true },
        { name: "Email support", included: true },
        { name: "Advanced agent customization", included: false },
        { name: "Advanced analytics", included: false },
        { name: "Priority support", included: false },
      ],
    },
    {
      id: "pro",
      name: "Professional",
      price: billingCycle === "monthly" ? "$49" : "$490",
      description: "Designed for professionals who need more powerful BetaBLU agents",
      features: [
        { name: "Build 10 custom agents", included: true },
        { name: "25,000 AI chat tokens per month", included: true },
        { name: "Advanced content generation", included: true },
        { name: "5 social media integrations", included: true },
        { name: "Priority email support", included: true },
        { name: "Advanced agent customization", included: true },
        { name: "Basic analytics", included: true },
        { name: "API access", included: false },
      ],
      highlighted: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: billingCycle === "monthly" ? "$149" : "$1,490",
      description: "For businesses requiring full BetaBLU AI agent capabilities",
      features: [
        { name: "Unlimited custom agents", included: true },
        { name: "100,000 AI chat tokens per month", included: true },
        { name: "Premium content generation", included: true },
        { name: "Unlimited social media integrations", included: true },
        { name: "24/7 dedicated support", included: true },
        { name: "Advanced agent customization", included: true },
        { name: "Advanced analytics dashboard", included: true },
        { name: "Full API access", included: true },
      ],
    },
  ];

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
    
    // Simulate subscription process
    toast({
      title: "Plan Selected",
      description: `You've selected the ${plans.find(p => p.id === planId)?.name} plan. Thank you for subscribing to BetaBLU!`,
    });
  };

  const toggleBillingCycle = () => {
    setBillingCycle(prev => prev === "monthly" ? "yearly" : "monthly");
  };

  if (!isLoggedIn) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-10">
        <div className="container-section">
          <div className="mb-12 text-center">
            <h1 className="h2 mb-4">BetaBLU Subscription Plans</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Unlock the full potential of BetaBLU with our flexible subscription plans. 
              Select the package that best fits your needs.
            </p>
            
            <div className="flex justify-center mt-8">
              <div className="bg-secondary p-1 rounded-full inline-flex">
                <button
                  className={`py-2 px-6 rounded-full text-sm font-medium transition-all ${
                    billingCycle === "monthly" ? "bg-blu-600 text-white" : "text-muted-foreground"
                  }`}
                  onClick={() => setBillingCycle("monthly")}
                >
                  Monthly
                </button>
                <button
                  className={`py-2 px-6 rounded-full text-sm font-medium transition-all ${
                    billingCycle === "yearly" ? "bg-blu-600 text-white" : "text-muted-foreground"
                  }`}
                  onClick={() => setBillingCycle("yearly")}
                >
                  Yearly <span className="text-xs text-green-600">(-20%)</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`relative glass-card p-6 rounded-xl transition-all duration-300 ${
                  plan.highlighted ? "border-blu-500 shadow-lg transform hover:-translate-y-2" : "hover:-translate-y-1"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-blu-600 text-white py-1 px-4 rounded-full text-xs font-semibold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold mb-2">{plan.price}<span className="text-sm font-normal text-muted-foreground">/{billingCycle === "monthly" ? "mo" : "yr"}</span></div>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground shrink-0 mr-2" />
                      )}
                      <span className={feature.included ? "" : "text-muted-foreground"}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant={plan.highlighted ? "primary" : "outline"}
                  full
                  onClick={() => handleSelectPlan(plan.id)}
                >
                  {plan.highlighted ? "Get Started" : "Subscribe"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Subscription;

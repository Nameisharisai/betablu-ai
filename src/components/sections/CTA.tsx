
import Button from "../common/Button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent to-cosmos-50/20" />
        <div className="absolute -bottom-32 right-0 w-[600px] h-[600px] rounded-full bg-cosmos-100/10 blur-3xl" />
      </div>
      
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl overflow-hidden relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cosmos-700 to-cosmos-900" />
          
          <div className="px-8 py-16 md:p-16 text-center">
            <h2 className="h2 mb-6 max-w-2xl mx-auto">
              Ready to transform your workflows with BetaBLU agents?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join enterprises already using BetaBLU to automate tasks, enhance customer experiences, and unlock new business capabilities.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <Button 
                  size="lg" 
                  icon={<ArrowRight size={18} />} 
                  iconPosition="right"
                >
                  Get Started Free
                </Button>
              </Link>
              <Link to="/careers">
                <Button 
                  size="lg" 
                  variant="outline"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

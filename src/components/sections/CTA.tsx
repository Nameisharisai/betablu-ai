
import Button from "../common/Button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent to-blu-50/50" />
        <div className="absolute -bottom-32 right-0 w-[600px] h-[600px] rounded-full bg-blu-100/30 blur-3xl" />
      </div>
      
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl overflow-hidden relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blu-400 to-blu-600" />
          
          <div className="px-8 py-16 md:p-16 text-center">
            <h2 className="h2 mb-6 max-w-2xl mx-auto">
              Ready to transform your workflows with BetaBLU agents?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join enterprises already using BetaBLU to automate tasks, enhance customer experiences, and unlock new business capabilities.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                icon={<ArrowRight size={18} />} 
                iconPosition="right"
              >
                Get Started Free
              </Button>
              <Button 
                size="lg" 
                variant="outline"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

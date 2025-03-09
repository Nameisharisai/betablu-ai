
import { Link } from "react-router-dom";
import Button from "@/components/common/Button";

const CallToAction = () => {
  return (
    <div className="py-20 bg-secondary/50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto reveal">
          <h2 className="h2 mb-4">Ready to build your custom AI agent?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get started with IntelliAgent today and transform your workflows with adaptive intelligence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/agent-builder">
              <Button size="lg" className="animated-gradient pulse-glow">
                Start Building
              </Button>
            </Link>
            <Link to="/documentation">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

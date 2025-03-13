
import { Link } from "react-router-dom";
import Button from "@/components/common/Button";

const HeroSection = () => {
  return (
    <section className="pt-40 pb-20 relative bg-cosmos-700">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmos-900/60 to-cosmos-700 z-[-1]"></div>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto reveal">
          <h1 className="h1 mb-6 text-white">
            <span className="text-gradient-light">IntelliAgent</span> Space
          </h1>
          <p className="text-xl text-cosmos-100 mb-8 max-w-3xl mx-auto font-serif">
            Build and deploy AI agents tailored to your needs. Harness the power of adaptive intelligence to solve complex problems and automate workflows.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/agent-builder">
              <Button size="lg" className="animated-gradient-light pulse-glow">
                Start Building
              </Button>
            </Link>
            <Link to="#agent-types">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-cosmos-600">
                Explore Agent Types
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

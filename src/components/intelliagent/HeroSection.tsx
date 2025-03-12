
import { Link } from "react-router-dom";
import Button from "@/components/common/Button";

const HeroSection = () => {
  return (
    <section className="pt-40 pb-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmos-100/20 to-background z-[-1]"></div>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto reveal">
          <h1 className="h1 mb-6">
            <span className="text-gradient">
              <img 
                src="/lovable-uploads/eb6ebe1a-41bd-49a6-9d7f-5331a7fb4984.png" 
                alt="Betablu Logo" 
                className="inline-block h-12 w-auto mr-2 transform hover:scale-110 transition-transform duration-300"
              />
              Betablu
            </span> Space
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto font-serif">
            Build and deploy AI agents tailored to your needs. Harness the power of adaptive intelligence to solve complex problems and automate workflows.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/agent-builder" target="_blank">
              <Button size="lg" className="animated-gradient">
                Start Building
              </Button>
            </Link>
            <Link to="#agent-types">
              <Button variant="outline" size="lg">
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

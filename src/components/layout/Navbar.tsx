
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "../common/Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 glass shadow-sm" : "py-5 bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gradient">BetaBLU</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-foreground/90 hover:text-blu-600 font-medium transition-colors"
            >
              Features
            </a>
            <a
              href="#integration"
              className="text-foreground/90 hover:text-blu-600 font-medium transition-colors"
            >
              Integration
            </a>
            <a
              href="#platform"
              className="text-foreground/90 hover:text-blu-600 font-medium transition-colors"
            >
              Platform
            </a>
            <Button>Get Started</Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-foreground p-2 rounded-md"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#features"
              className="block px-3 py-4 text-foreground hover:text-blu-600 font-medium border-b border-border"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#integration"
              className="block px-3 py-4 text-foreground hover:text-blu-600 font-medium border-b border-border"
              onClick={() => setMobileMenuOpen(false)}
            >
              Integration
            </a>
            <a
              href="#platform"
              className="block px-3 py-4 text-foreground hover:text-blu-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Platform
            </a>
            <div className="px-3 py-4">
              <Button full>Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;


import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
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
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gradient">BetaBLU</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/intelliagent"
              className="text-foreground/90 hover:text-blu-600 font-medium transition-colors"
            >
              IntelliAgent Space
            </Link>
            <Link
              to="/how-it-works"
              className="text-foreground/90 hover:text-blu-600 font-medium transition-colors"
            >
              How It Works
            </Link>
            <Link
              to="/adaptive-intelligence"
              className="text-foreground/90 hover:text-blu-600 font-medium transition-colors"
            >
              Adaptive Intelligence
            </Link>
            <Link
              to="/documentation"
              className="text-foreground/90 hover:text-blu-600 font-medium transition-colors"
            >
              Documentation
            </Link>
            <Link
              to="/careers"
              className="text-foreground/90 hover:text-blu-600 font-medium transition-colors"
            >
              Careers
            </Link>
            <div className="flex space-x-2">
              <Link to="/login">
                <Button variant="outline" size="sm">Login</Button>
              </Link>
              <Link to="/signup">
                <Button size="sm">Sign Up</Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
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
            <Link
              to="/intelliagent"
              className="block px-3 py-4 text-foreground hover:text-blu-600 font-medium border-b border-border"
              onClick={() => setMobileMenuOpen(false)}
            >
              IntelliAgent Space
            </Link>
            <Link
              to="/how-it-works"
              className="block px-3 py-4 text-foreground hover:text-blu-600 font-medium border-b border-border"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              to="/adaptive-intelligence"
              className="block px-3 py-4 text-foreground hover:text-blu-600 font-medium border-b border-border"
              onClick={() => setMobileMenuOpen(false)}
            >
              Adaptive Intelligence
            </Link>
            <Link
              to="/documentation"
              className="block px-3 py-4 text-foreground hover:text-blu-600 font-medium border-b border-border"
              onClick={() => setMobileMenuOpen(false)}
            >
              Documentation
            </Link>
            <Link
              to="/careers"
              className="block px-3 py-4 text-foreground hover:text-blu-600 font-medium border-b border-border"
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <div className="flex flex-col space-y-2 px-3 py-4">
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" full>Login</Button>
              </Link>
              <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                <Button full>Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

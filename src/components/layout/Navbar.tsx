
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, User, LogOut } from "lucide-react";
import Button from "../common/Button";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    // Check login status
    const checkLoginStatus = () => {
      const loginStatus = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(loginStatus);
    };

    window.addEventListener("scroll", handleScroll);
    checkLoginStatus();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setUserMenuOpen(false);
    
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out of BetaBLU",
    });
    
    navigate("/");
  };

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
              to="/content-agent"
              className="text-foreground/90 hover:text-blu-600 font-medium transition-colors"
            >
              Content Creation
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
              to="/subscription"
              className="text-foreground/90 hover:text-blu-600 font-medium transition-colors"
            >
              Pricing
            </Link>
            
            {!isLoggedIn ? (
              <div className="flex space-x-2">
                <Link to="/login">
                  <Button variant="outline" size="sm">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm">Sign Up</Button>
                </Link>
              </div>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-1 p-1 rounded-full hover:bg-secondary transition-colors"
                >
                  <div className="w-8 h-8 bg-blu-600 rounded-full flex items-center justify-center text-white font-medium">
                    U
                  </div>
                </button>
                
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 glass rounded-lg shadow-lg py-1 z-50">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 hover:bg-secondary transition-colors"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        Profile
                      </div>
                    </Link>
                    <Link
                      to="/subscription"
                      className="block px-4 py-2 hover:bg-secondary transition-colors"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <div className="flex items-center">
                        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 12V8H6a2 2 0 01-2-2c0-1.1.9-2 2-2h12v4" />
                          <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
                          <path d="M18 12c-1.1 0-2 .9-2 2s.9 2 2 2h4v-4h-4z" />
                        </svg>
                        Subscription
                      </div>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-secondary transition-colors text-red-600 hover:text-red-500"
                    >
                      <div className="flex items-center">
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </div>
                    </button>
                  </div>
                )}
              </div>
            )}
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
              to="/content-agent"
              className="block px-3 py-4 text-foreground hover:text-blu-600 font-medium border-b border-border"
              onClick={() => setMobileMenuOpen(false)}
            >
              Content Creation
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
              to="/subscription"
              className="block px-3 py-4 text-foreground hover:text-blu-600 font-medium border-b border-border"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            
            {isLoggedIn ? (
              <>
                <Link
                  to="/profile"
                  className="block px-3 py-4 text-foreground hover:text-blu-600 font-medium border-b border-border"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-4 text-red-600 hover:text-red-500 font-medium border-b border-border"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex flex-col space-y-2 px-3 py-4">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" full>Login</Button>
                </Link>
                <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                  <Button full>Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

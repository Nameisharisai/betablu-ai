
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import NavLogo from "./nav/NavLogo";
import NavLinks from "./nav/NavLinks";
import UserMenu from "./nav/UserMenu";
import MobileMenu from "./nav/MobileMenu";

const Navbar = () => {
  const { toast } = useToast();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

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
    
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out of Betablu",
    });
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
            <NavLogo />
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <NavLinks />
            <UserMenu isLoggedIn={isLoggedIn} />
          </nav>

          <MobileMenu 
            isOpen={mobileMenuOpen}
            setIsOpen={setMobileMenuOpen}
            isLoggedIn={isLoggedIn}
            onLogout={handleLogout}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

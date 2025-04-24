
import { Link } from "react-router-dom";
import Button from "../../common/Button";
import { Menu, X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isLoggedIn: boolean;
  onLogout: () => void;
}

const MobileMenu = ({ isOpen, setIsOpen, isLoggedIn, onLogout }: MobileMenuProps) => {
  return (
    <>
      <div className="md:hidden flex items-center">
        <button
          type="button"
          className="text-foreground p-2 rounded-md mobile-menu-button overflow-visible"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-[4rem] md:hidden bg-background/95 backdrop-blur-sm z-50 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <Link
              to="/intelliagent"
              className="block px-3 py-4 text-foreground hover:text-blu-600 font-medium border-b border-border"
              onClick={() => setIsOpen(false)}
            >
              IntelliAgent Space
            </Link>
            <Link
              to="/content-agent"
              className="block px-3 py-4 text-foreground hover:text-blu-600 font-medium border-b border-border"
              onClick={() => setIsOpen(false)}
            >
              Content Creation
            </Link>
            <Link
              to="/how-it-works"
              className="block px-3 py-4 text-foreground hover:text-blu-600 font-medium border-b border-border"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link
              to="/deep-research"
              className="block px-3 py-4 text-foreground hover:text-blu-600 font-medium border-b border-border"
              onClick={() => setIsOpen(false)}
            >
              Deep Research
            </Link>
            <Link
              to="/advanced-code-space"
              className="block px-3 py-4 text-foreground hover:text-blu-600 font-medium border-b border-border"
              onClick={() => setIsOpen(false)}
            >
              Advanced Code Space
            </Link>
            <Link
              to="/subscription"
              className="block px-3 py-4 text-foreground hover:text-blu-600 font-medium border-b border-border"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            
            {isLoggedIn ? (
              <>
                <Link
                  to="/profile"
                  className="block px-3 py-4 text-foreground hover:text-blu-600 font-medium border-b border-border"
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    onLogout();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-4 text-red-600 hover:text-red-500 font-medium border-b border-border"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex flex-col space-y-2 px-3 py-4">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" full>Login</Button>
                </Link>
                <Link to="/signup" onClick={() => setIsOpen(false)}>
                  <Button full>Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;

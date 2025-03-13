
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, LogOut } from "lucide-react";
import Button from "../../common/Button";
import { useToast } from "@/hooks/use-toast";

interface UserMenuProps {
  isLoggedIn: boolean;
}

const UserMenu = ({ isLoggedIn }: UserMenuProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setUserMenuOpen(false);
    
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out of Betablu",
    });
    
    navigate("/");
  };

  if (!isLoggedIn) {
    return (
      <div className="flex space-x-2 fade-in-animation">
        <Link to="/login">
          <Button variant="outline" size="sm">Login</Button>
        </Link>
        <Link to="/signup">
          <Button size="sm">Sign Up</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setUserMenuOpen(!userMenuOpen)}
        className="flex items-center space-x-1 p-2 rounded-full hover:bg-pro-100 transition-colors"
      >
        <div className="w-8 h-8 bg-accent1-600 rounded-full flex items-center justify-center text-white">
          <User className="h-4 w-4" />
        </div>
      </button>
      
      {userMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-pro py-1 z-50 slide-up-animation border border-pro-100">
          <Link
            to="/profile"
            className="block px-4 py-2 hover:bg-pro-50 transition-colors"
            onClick={() => setUserMenuOpen(false)}
          >
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              Profile
            </div>
          </Link>
          <Link
            to="/subscription"
            className="block px-4 py-2 hover:bg-pro-50 transition-colors"
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
            className="block w-full text-left px-4 py-2 hover:bg-pro-50 transition-colors text-red-600 hover:text-red-500"
          >
            <div className="flex items-center">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;

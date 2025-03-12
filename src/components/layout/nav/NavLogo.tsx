
import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img 
        src="/lovable-uploads/eb6ebe1a-41bd-49a6-9d7f-5331a7fb4984.png" 
        alt="Betablu Logo" 
        className="h-8 w-auto transform hover:scale-110 transition-transform duration-300"
      />
      <span className="text-2xl font-bold text-gradient font-sans">Betablu</span>
    </Link>
  );
};

export default NavLogo;

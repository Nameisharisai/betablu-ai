
import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <span className="text-2xl font-bold text-gradient font-sans">Betablu</span>
    </Link>
  );
};

export default NavLogo;


import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <Link
        to="/intelliagent"
        className="text-foreground/90 hover:text-accent1-600 font-medium transition-colors hover:scale-hover"
      >
        IntelliAgent Space
      </Link>
      <Link
        to="/content-agent"
        className="text-foreground/90 hover:text-accent1-600 font-medium transition-colors hover:scale-hover"
      >
        Content Creation
      </Link>
      <Link
        to="/how-it-works"
        className="text-foreground/90 hover:text-accent1-600 font-medium transition-colors hover:scale-hover"
      >
        How It Works
      </Link>
      <Link
        to="/deep-research"
        className="text-foreground/90 hover:text-accent1-600 font-medium transition-colors hover:scale-hover"
      >
        Deep Research
      </Link>
      <Link
        to="/advanced-code-space"
        className="text-foreground/90 hover:text-accent1-600 font-medium transition-colors hover:scale-hover"
      >
        Advanced Code Space
      </Link>
      <Link
        to="/subscription"
        className="text-foreground/90 hover:text-accent1-600 font-medium transition-colors hover:scale-hover"
      >
        Pricing
      </Link>
    </>
  );
};

export default NavLinks;

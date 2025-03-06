
import { useEffect } from "react";
import { Moon } from "lucide-react";

const ThemeToggle = () => {
  useEffect(() => {
    // Always set to dark theme
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <button
      className="p-2 rounded-full hover:bg-secondary/80 transition-colors"
      aria-label="Dark mode enabled"
    >
      <Moon className="h-5 w-5 text-foreground" />
    </button>
  );
};

export default ThemeToggle;

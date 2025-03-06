
import { useEffect } from "react";

const ThemeToggle = () => {
  useEffect(() => {
    // Always set to dark theme
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  // No button rendered - just the effect to apply dark theme
  return null;
};

export default ThemeToggle;

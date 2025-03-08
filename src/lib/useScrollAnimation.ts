
import { useEffect } from 'react';

export const initScrollAnimation = () => {
  // Add intersection observer to handle reveal animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.1 }
  );
  
  const elements = document.querySelectorAll(".reveal");
  elements.forEach((el) => observer.observe(el));
  
  return () => {
    elements.forEach((el) => observer.unobserve(el));
  };
};

// Custom hook that uses the initScrollAnimation function
export const useScrollAnimation = () => {
  useEffect(() => {
    return initScrollAnimation();
  }, []);
};

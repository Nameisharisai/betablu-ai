
import { useEffect } from 'react';

export const initScrollAnimation = () => {
  // Add CSS for animation
  const style = document.createElement('style');
  style.innerHTML = `
    .reveal {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.6s ease-out;
    }
    .reveal.active {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);
  
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
    document.head.removeChild(style);
  };
};

export const useScrollAnimation = () => {
  useEffect(() => {
    return initScrollAnimation();
  }, []);
};

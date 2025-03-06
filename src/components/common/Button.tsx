
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  full?: boolean;
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  icon,
  iconPosition = "left",
  disabled = false,
  type = "button",
  full = false,
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blu-500";
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-blu-500 to-blu-400 text-white hover:shadow-blu",
    secondary: "bg-secondary text-foreground hover:bg-secondary/80",
    outline: "border border-blu-300 text-blu-600 hover:bg-blu-50",
    ghost: "bg-transparent text-foreground hover:bg-secondary",
  };
  
  const sizeStyles = {
    sm: "text-sm px-4 py-2 gap-1.5",
    md: "text-base px-6 py-2.5 gap-2",
    lg: "text-lg px-8 py-3 gap-2.5",
  };
  
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "transform hover:-translate-y-0.5";
  
  return (
    <button
      type={type}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        disabledStyles,
        full ? "w-full" : "",
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && iconPosition === "left" && <span>{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
};

export default Button;

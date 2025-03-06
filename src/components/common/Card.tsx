
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "glass" | "bordered";
  onClick?: () => void;
  animate?: boolean;
};

const Card = ({
  children,
  className,
  variant = "default",
  onClick,
  animate = false,
}: CardProps) => {
  const baseStyles = "rounded-2xl overflow-hidden transition-all duration-500";
  
  const variantStyles = {
    default: "bg-white shadow-sm hover:shadow",
    glass: "glass-card",
    bordered: "border border-border bg-background",
  };
  
  const animationStyles = animate ? "hover:-translate-y-1" : "";
  
  return (
    <div
      className={cn(
        baseStyles,
        variantStyles[variant],
        animationStyles,
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;

export const CardHeader = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("p-6", className)}>
      {children}
    </div>
  );
};

export const CardContent = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("px-6 pb-6", className)}>
      {children}
    </div>
  );
};

export const CardFooter = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("px-6 pb-6 pt-0", className)}>
      {children}
    </div>
  );
};

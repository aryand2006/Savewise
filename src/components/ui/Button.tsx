import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  ...props 
}: ButtonProps) => {
  const variants = {
    primary: "bg-primary hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20",
    secondary: "bg-surface hover:bg-white/5 text-white border border-white/10",
    outline: "border border-white/20 hover:bg-white/5 text-white",
    ghost: "hover:bg-white/5 text-gray-400 hover:text-white"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <button
      className={cn(
        "rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 active:scale-95",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
};

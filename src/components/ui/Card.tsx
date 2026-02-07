import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "bg-surface border border-white/5 rounded-2xl p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { colors } from '@/lib/design-system';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  isLoading?: boolean;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export default function PrimaryButton({
  children,
  className,
  variant = 'default',
  size = 'default',
  isLoading = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  disabled,
  ...props
}: PrimaryButtonProps) {
  // Base styles
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-linkedin focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:translate-y-[1px] shadow-button";
  
  // Variant styles
  const variantStyles = {
    default: "bg-linkedin text-white hover:bg-linkedin-600",
    outline: "border border-linkedin bg-transparent hover:bg-linkedin-50 text-linkedin",
    secondary: "border border-slate-200 bg-white hover:bg-slate-50 text-slate-800",
    ghost: "bg-transparent hover:bg-slate-100 text-slate-700 shadow-none"
  };
  
  // Size styles
  const sizeStyles = {
    default: "h-11 py-2.5 px-6 text-sm",
    sm: "h-9 px-4 text-xs",
    lg: "h-12 px-8 text-base",
    icon: "h-10 w-10 p-2"
  };
  
  // Width styles
  const widthStyles = fullWidth ? "w-full" : "";
  
  // Icon rendering helper
  const renderIcon = () => {
    if (!icon) return null;
    return (
      <span className={cn(
        "flex items-center", 
        iconPosition === 'left' ? "mr-2" : "ml-2",
        isLoading && "opacity-0"
      )}>
        {icon}
      </span>
    );
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        widthStyles,
        className
      )}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading && (
        <svg 
          className="absolute animate-spin h-5 w-5 text-current" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          ></circle>
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      <div className={cn("flex items-center", isLoading && "opacity-0")}>
        {iconPosition === 'left' && renderIcon()}
        {children}
        {iconPosition === 'right' && renderIcon()}
      </div>
    </button>
  );
}

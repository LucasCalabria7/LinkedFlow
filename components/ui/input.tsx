'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

// Omit the native 'size' attribute to avoid type conflict with our custom size prop
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  error?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onIconClick?: () => void;
  fullWidth?: boolean;
  variant?: 'default' | 'filled' | 'outline';
  size?: 'sm' | 'default' | 'lg';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type, 
    label, 
    helperText, 
    error, 
    icon,
    iconPosition = 'left',
    onIconClick,
    fullWidth = true,
    variant = 'default',
    size = 'default',
    disabled,
    ...props 
  }, ref) => {
    // Base styles
    const baseInputStyles = cn(
      'flex w-full rounded-lg border transition-all duration-200 text-slate-800 placeholder:text-slate-400',
      'file:border-0 file:bg-transparent file:text-sm file:font-medium',
      'focus:outline-none focus:ring-2 focus:ring-linkedin focus:ring-offset-0',
      'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-slate-50',
      error && 'border-error-400 focus:ring-error-400',
      fullWidth ? 'w-full' : 'w-auto',
    );

    // Variant styles
    const variantStyles = {
      default: 'border-slate-200 bg-white hover:border-slate-300',
      filled: 'border-transparent bg-slate-100 hover:bg-slate-200',
      outline: 'border-slate-300 bg-transparent hover:border-linkedin',
    };

    // Size styles
    const sizeStyles = {
      sm: 'h-9 px-3 py-1 text-xs',
      default: 'h-11 px-4 py-2 text-sm',
      lg: 'h-12 px-5 py-3 text-base',
    };

    // Icon container styles
    const iconContainerStyles = cn(
      'absolute inset-y-0 flex items-center',
      iconPosition === 'left' ? 'left-0 pl-3' : 'right-0 pr-3'
    );

    // Input padding adjustment for icon
    const inputPaddingWithIcon = {
      left: 'pl-10',
      right: 'pr-10',
    };

    return (
      <div className={cn('flex flex-col space-y-1.5', fullWidth && 'w-full')}>
        {label && (
          <label 
            htmlFor={props.id} 
            className="text-sm font-medium text-slate-700"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {icon && (
            <div 
              className={cn(iconContainerStyles, onIconClick && 'cursor-pointer')} 
              onClick={onIconClick}
            >
              {icon}
            </div>
          )}
          
          <input
            type={type}
            className={cn(
              baseInputStyles,
              variantStyles[variant],
              sizeStyles[size],
              icon && iconPosition === 'left' && inputPaddingWithIcon.left,
              icon && iconPosition === 'right' && inputPaddingWithIcon.right,
              className
            )}
            disabled={disabled}
            ref={ref}
            {...props}
          />
        </div>
        
        {(helperText || error) && (
          <p className={cn(
            'text-xs',
            error ? 'text-error-500' : 'text-slate-500'
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };


'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center gap-1 rounded-full border px-3 py-1 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-linkedin text-white hover:bg-linkedin-600',
        secondary: 'border-transparent bg-slate-100 text-slate-800 hover:bg-slate-200',
        success: 'border-transparent bg-success-50 text-success-600 hover:bg-success-100',
        warning: 'border-transparent bg-warning-50 text-warning-600 hover:bg-warning-100',
        error: 'border-transparent bg-error-50 text-error-600 hover:bg-error-100',
        outline: 'border-slate-200 bg-transparent text-slate-700 hover:bg-slate-50',
        ghost: 'border-transparent bg-transparent text-slate-700 hover:bg-slate-100',
        linkedin: 'border-transparent bg-linkedin-50 text-linkedin hover:bg-linkedin-100',
      },
      size: {
        default: 'h-6 px-3 py-1',
        sm: 'h-5 px-2 py-0.5 text-[10px]',
        lg: 'h-7 px-4 py-1.5 text-sm',
      },
      rounded: {
        default: 'rounded-full',
        md: 'rounded-md',
        lg: 'rounded-lg',
      },
      withDot: {
        true: 'pl-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      rounded: 'default',
    },
    compoundVariants: [
      {
        withDot: true,
        variant: 'default',
        className: 'before:mr-1 before:h-1.5 before:w-1.5 before:rounded-full before:bg-white before:content-[""]',
      },
      {
        withDot: true,
        variant: 'secondary',
        className: 'before:mr-1 before:h-1.5 before:w-1.5 before:rounded-full before:bg-slate-500 before:content-[""]',
      },
      {
        withDot: true,
        variant: 'success',
        className: 'before:mr-1 before:h-1.5 before:w-1.5 before:rounded-full before:bg-success before:content-[""]',
      },
      {
        withDot: true,
        variant: 'warning',
        className: 'before:mr-1 before:h-1.5 before:w-1.5 before:rounded-full before:bg-warning before:content-[""]',
      },
      {
        withDot: true,
        variant: 'error',
        className: 'before:mr-1 before:h-1.5 before:w-1.5 before:rounded-full before:bg-error before:content-[""]',
      },
      {
        withDot: true,
        variant: 'outline',
        className: 'before:mr-1 before:h-1.5 before:w-1.5 before:rounded-full before:bg-slate-500 before:content-[""]',
      },
      {
        withDot: true,
        variant: 'ghost',
        className: 'before:mr-1 before:h-1.5 before:w-1.5 before:rounded-full before:bg-slate-500 before:content-[""]',
      },
      {
        withDot: true,
        variant: 'linkedin',
        className: 'before:mr-1 before:h-1.5 before:w-1.5 before:rounded-full before:bg-linkedin before:content-[""]',
      },
    ],
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
  removable?: boolean;
  onRemove?: () => void;
}

function Badge({ 
  className, 
  variant, 
  size, 
  rounded, 
  withDot, 
  icon,
  removable,
  onRemove,
  children,
  ...props 
}: BadgeProps) {
  return (
    <div 
      className={cn(badgeVariants({ variant, size, rounded, withDot }), className)} 
      {...props}
    >
      {icon && <span className="inline-flex">{icon}</span>}
      {children}
      {removable && (
        <button 
          type="button" 
          className="ml-1 -mr-1 h-3.5 w-3.5 rounded-full hover:bg-slate-300/20 inline-flex items-center justify-center"
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
        >
          <svg width="7" height="7" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="sr-only">Remove</span>
        </button>
      )}
    </div>
  );
}

export { Badge, badgeVariants };

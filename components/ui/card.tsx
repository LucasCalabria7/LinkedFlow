'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'elevated' | 'glass';
  hover?: boolean;
  clickable?: boolean;
  noPadding?: boolean;
  borderColor?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = false, clickable = false, noPadding = false, borderColor, ...props }, ref) => {
    const baseStyles = cn(
      'rounded-xl transition-all duration-200',
      !noPadding && 'p-6',
      hover && 'hover:translate-y-[-2px] hover:shadow-lg',
      clickable && 'cursor-pointer active:translate-y-[1px]'
    );

    const variantStyles = {
      default: 'bg-white border border-slate-200 shadow-card',
      outline: `border ${borderColor || 'border-slate-200'} bg-white`,
      elevated: 'bg-white border border-slate-100 shadow-elevated',
      glass: 'backdrop-blur-md bg-white/80 shadow-sm border border-white/20'
    };

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  compact?: boolean;
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, compact = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-col', 
        compact ? 'space-y-1 mb-3' : 'space-y-1.5 mb-4',
        className
      )}
      {...props}
    />
  )
);
CardHeader.displayName = 'CardHeader';

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, as: Comp = 'h3', ...props }, ref) => (
    <Comp
      ref={ref}
      className={cn(
        'font-urbanist font-semibold leading-tight tracking-tight text-slate-800',
        className
      )}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-slate-500 leading-relaxed', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  noPadding?: boolean;
}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, noPadding = false, ...props }, ref) => (
    <div 
      ref={ref} 
      className={cn(noPadding ? '' : 'py-2', className)} 
      {...props} 
    />
  )
);
CardContent.displayName = 'CardContent';

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  bordered?: boolean;
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, justify = 'between', bordered = false, ...props }, ref) => {
    const justifyStyles = {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly'
    };

    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center mt-4',
          bordered && 'pt-4 border-t border-slate-200',
          justifyStyles[justify],
          className
        )}
        {...props}
      />
    );
  }
);
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};

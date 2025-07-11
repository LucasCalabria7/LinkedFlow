'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type BaseProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'default' | 'lg';
  fullWidth?: boolean;
  className?: string;
  isLoading?: boolean;
};

type ButtonAsButtonProps = BaseProps & {
  href?: undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>;

type ButtonAsLinkProps = BaseProps & {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className'>;

type CTAButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

// Componente de loading para reutilização
const LoadingSpinner = () => (
  <span className="flex items-center">
    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    Carregando...
  </span>
);

const CTAButton = (props: CTAButtonProps) => {
  const {
    children,
    variant = 'primary',
    size = 'default',
    fullWidth = false,
    className,
    isLoading = false,
    ...rest
  } = props;

  // Base styles
  const baseStyles = cn(
    'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-linkedin',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    fullWidth && 'w-full'
  );

  // Variant styles
  const variantStyles = {
    primary: 'bg-linkedin text-white hover:bg-linkedin-600 shadow-sm',
    secondary: 'bg-slate-100 text-slate-800 hover:bg-slate-200',
    outline: 'bg-transparent border-2 border-linkedin text-linkedin hover:bg-linkedin/5',
  };

  // Size styles
  const sizeStyles = {
    sm: 'text-sm py-1.5 px-3',
    default: 'text-base py-2.5 px-5',
    lg: 'text-lg py-3 px-6',
  };

  const buttonClasses = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  // Se for um link
  if ('href' in props && props.href !== undefined) {
    return (
      <Link href={props.href} className={buttonClasses}>
        {isLoading ? <LoadingSpinner /> : children}
      </Link>
    );
  }

  // Se for um botão
  return (
    <button
      className={buttonClasses}
      disabled={isLoading}
      {...(rest as ButtonAsButtonProps)}
    >
      {isLoading ? <LoadingSpinner /> : children}
    </button>
  );
};

export default CTAButton;

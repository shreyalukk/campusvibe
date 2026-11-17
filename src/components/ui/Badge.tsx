import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'outline' | 'warning' | 'neutral';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({
  children,
  variant = 'secondary',
  size = 'sm',
  className = '',
}: BadgeProps) {
  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 rounded-full font-medium',
    md: 'text-sm px-3 py-1 rounded-full font-medium',
  };

  const variantStyles = {
    primary: 'bg-[#F0EBFC] text-[#6D45D9] border border-[#6D45D9]/20',
    secondary: 'bg-[#F5F5F8] text-[#555568] border border-gray-200',
    success: 'bg-[#E7F6F0] text-[#22A06B] border border-[#22A06B]/20',
    warning: 'bg-amber-50 text-amber-700 border border-amber-200',
    neutral: 'bg-slate-100 text-slate-700 border border-slate-200',
    outline: 'bg-transparent text-[#191923] border border-gray-300',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 transition-colors ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

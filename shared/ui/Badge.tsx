import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'warning' | 'neutral';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'neutral' }) => {
  const colors = {
    success: 'bg-green-500/20 text-green-400 border-green-500/30',
    warning: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    neutral: 'bg-cine-700/50 text-cine-500 border-cine-700/50',
  };

  return (
    <span className={`px-2 py-0.5 rounded text-xs font-medium border ${colors[variant]}`}>
      {children}
    </span>
  );
};
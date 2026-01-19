import React from 'react';

export const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-12 h-12 flex items-center justify-center">{children}</div>
);

export const Symbol = ({ name, size = "text-4xl" }: { name: string; size?: string }) => (
  <span className={`material-symbols-outlined ${size}`}>{name}</span>
);
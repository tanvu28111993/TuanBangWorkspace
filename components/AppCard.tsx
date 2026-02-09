import React from 'react';

interface AppCardProps {
  icon: React.ReactNode;
  title: string;
  href: string;
}

export const AppCard: React.FC<AppCardProps> = ({ icon, title, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center justify-center p-6 text-center text-white bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:-translate-y-1 transform-gpu hover:shadow-xl active:scale-95">
        <div className="w-14 h-14 mb-3 text-white/80 transition-colors duration-300 group-hover:text-[#DA291C] flex items-center justify-center bg-white/5 rounded-full group-hover:bg-white/10">
            {icon}
        </div>
        <span className="text-sm font-medium tracking-wide text-white/90 group-hover:text-white">{title}</span>
    </a>
);
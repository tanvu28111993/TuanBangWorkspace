import React from 'react';

interface WorkspaceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

export const WorkspaceCard: React.FC<WorkspaceCardProps> = ({ icon, title, description, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative w-full bg-gradient-to-br from-black/30 to-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col items-center text-center text-white transition-all duration-300 ease-out hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] overflow-hidden"
    >
      {/* Hover Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#DA291C]/0 to-[#DA291C]/0 transition-all duration-500 group-hover:from-[#DA291C]/10 group-hover:to-transparent opacity-0 group-hover:opacity-100" />
      
      <div className="relative z-10 mb-6 bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 text-white/80 shadow-lg transition-all duration-300 group-hover:bg-white/10 group-hover:scale-110 group-hover:text-[#DA291C] group-hover:border-white/20">
        {icon}
      </div>
      
      <div className="relative z-10 flex flex-col gap-2">
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight group-hover:text-white transition-colors">{title}</h3>
        <p className="text-xs sm:text-sm font-medium text-white/50 uppercase tracking-widest group-hover:text-[#DA291C] transition-colors duration-300">{description}</p>
      </div>

      {/* Decorative arrow */}
      <div className="absolute bottom-6 right-6 opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-50 group-hover:translate-x-0">
         <span className="material-symbols-outlined">arrow_forward</span>
      </div>
    </button>
  );
};
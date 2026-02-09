import React from 'react';
import { WorkspaceItem } from '../types';
import { AppCard } from './AppCard';

interface WorkspaceModalProps {
  activeItem: WorkspaceItem | null;
  onClose: () => void;
}

export const WorkspaceModal: React.FC<WorkspaceModalProps> = ({ activeItem, onClose }) => {
  if (!activeItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      {/* Modal content */}
      <div 
        className="relative bg-[#1a1a1a]/95 backdrop-blur-2xl border border-white/10 rounded-[2rem] w-full max-w-4xl shadow-2xl animate-zoom-in flex flex-col max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Fixed at top */}
        <div className="flex-shrink-0 flex justify-between items-center p-6 sm:p-8 border-b border-white/10 bg-[#1a1a1a]/50">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-[#DA291C]/20 text-white rounded-xl border border-[#DA291C]/20">
                    {activeItem.icon}
                </div>
                <div className="text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">{activeItem.title}</h2>
                    <p className="text-white/50 text-sm uppercase tracking-wider">{activeItem.description}</p>
                </div>
            </div>
            <button 
                onClick={onClose} 
                className="group bg-white/5 hover:bg-[#DA291C] p-2 rounded-full transition-all duration-300 border border-white/10 hover:border-[#DA291C]"
                aria-label="Close"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/70 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>

        {/* Content Grid - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 custom-scrollbar min-h-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {activeItem.apps.map(app => (
                    <AppCard key={app.id} icon={app.icon} title={app.title} href={app.href} />
                ))}
            </div>
             {/* Footer hint inside scroll area to ensure spacing */}
             <div className="mt-8 text-center text-white/30 text-xs uppercase tracking-widest pb-2">
                Chọn ứng dụng để truy cập
            </div>
        </div>
      </div>
    </div>
  );
};
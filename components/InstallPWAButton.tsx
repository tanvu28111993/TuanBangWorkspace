import React from 'react';

interface InstallPWAButtonProps {
  deferredPrompt: any;
  onInstallClick: () => void;
}

export const InstallPWAButton: React.FC<InstallPWAButtonProps> = ({ deferredPrompt, onInstallClick }) => {
  if (!deferredPrompt) return null;

  return (
    <button
        onClick={onInstallClick}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 bg-[#DA291C] text-white rounded-full shadow-[0_4px_20px_rgba(218,41,28,0.4)] hover:bg-[#b01e14] hover:scale-105 transition-all duration-300 animate-fade-in font-semibold border border-white/10"
    >
        <span className="material-symbols-outlined">download</span>
        <span>Cài đặt App</span>
    </button>
  );
};
import React from 'react';

interface HeaderProps {
  formattedTime: string;
  formattedDate: string;
}

export const Header: React.FC<HeaderProps> = ({ formattedTime, formattedDate }) => {
  return (
    <header className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        <div className="flex-1 flex justify-center md:justify-start">
            <div className="flex items-center gap-3">
                <img 
                src="https://i.postimg.cc/8zF3c24h/image.png" 
                alt="PTB Logo" 
                className="h-16 sm:h-20 object-contain drop-shadow-md"
                />
                <div className="hidden sm:block text-left">
                     <div className="text-sm font-bold tracking-wide text-white/80">TNHH THƯƠNG MẠI</div>
                     <div className="text-base font-bold tracking-tight uppercase text-white">IN BAO BÌ TUẤN BẰNG</div>
                </div>
            </div>
        </div>
        
        <div className="flex-1 flex justify-center">
            <div className="bg-[#DA291C] text-white font-bold tracking-wide py-1.5 px-6 rounded-full shadow-[0_0_15px_rgba(218,41,28,0.5)] border border-white/10 text-sm sm:text-base">
            BAO BÌ TUẤN BẰNG
            </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
            <div className="text-center md:text-right">
            <p className="text-5xl sm:text-6xl font-black tracking-tighter tabular-nums leading-none mb-1" style={{textShadow: '0 4px 12px rgba(0,0,0,0.5)'}}>{formattedTime}</p>
            <p className="text-sm sm:text-base text-white/70 font-medium">{formattedDate}</p>
            </div>
        </div>
    </header>
  );
};
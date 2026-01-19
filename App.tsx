import React, { useState, useEffect } from 'react';
import { WorkspaceCard } from './components/WorkspaceCard';
import { WORKSPACE_ITEMS } from './constants';

// Card for individual applications - to be used inside the modal
interface AppCardProps {
  icon: React.ReactNode;
  title: string;
  href: string;
}
const AppCard: React.FC<AppCardProps> = ({ icon, title, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center justify-center p-6 text-center text-white bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:-translate-y-1 transform-gpu hover:shadow-xl active:scale-95">
        <div className="w-14 h-14 mb-3 text-white/80 transition-colors duration-300 group-hover:text-[#DA291C] flex items-center justify-center bg-white/5 rounded-full group-hover:bg-white/10">
            {icon}
        </div>
        <span className="text-sm font-medium tracking-wide text-white/90 group-hover:text-white">{title}</span>
    </a>
);


const App: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);
  
  const activeItem = WORKSPACE_ITEMS.find(item => item.id === activeCategory);

  const formatTime = (date: Date) => date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' };
    const dateString = date.toLocaleDateString('vi-VN', options);
    // Capitalize first letter of the weekday
    return dateString.charAt(0).toUpperCase() + dateString.slice(1);
  };

  const getGreeting = () => {
    const hour = time.getHours();
    if (hour < 12) return "Chào buổi sáng";
    if (hour < 18) return "Chào buổi chiều";
    return "Chào buổi tối";
  };


  return (
    <div className="relative min-h-screen w-full bg-black/60 flex flex-col font-sans text-white overflow-hidden">
        
      {/* Main content area - gets blurred when modal is open */}
      <div className={`w-full min-h-screen flex flex-col items-center p-4 sm:p-6 md:p-8 transition-all duration-500 ease-in-out ${activeItem ? 'blur-lg brightness-50 scale-[0.98] pointer-events-none' : ''}`}>
        <header className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            <div className="flex-1 flex justify-center md:justify-start">
                <div className="flex items-center gap-3">
                    <img 
                    src="https://i.postimg.cc/8zF3c24h/image.png" 
                    alt="PTB Logo" 
                    className="h-20 sm:h-24 object-contain drop-shadow-md"
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
                <p className="text-5xl sm:text-6xl font-black tracking-tighter tabular-nums leading-none mb-1" style={{textShadow: '0 4px 12px rgba(0,0,0,0.5)'}}>{formatTime(time)}</p>
                <p className="text-sm sm:text-base text-white/70 font-medium">{formatDate(time)}</p>
                </div>
            </div>
        </header>

        <main className="w-full max-w-7xl flex flex-col items-center justify-center flex-grow text-center my-8 sm:my-12">
            <div className="animate-fade-in mb-12 flex flex-col items-center">
                <div className="inline-block mb-3 px-4 py-1 bg-white/10 rounded-full text-sm font-medium text-white/80 border border-white/10 backdrop-blur-sm">
                    {getGreeting()}, Chúc bạn làm việc hiệu quả
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-sm text-center">
                PTB TUAN BANG WORKSPACE
                </h1>
                <div className="w-[160px] md:w-[240px] lg:w-[360px] h-1 bg-[#DA291C] rounded-full shadow-[0_0_10px_#DA291C]"></div>
            </div>
            
            <div className="w-full px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto animate-fade-in" style={{animationDelay: '0.1s'}}>
                {WORKSPACE_ITEMS.map((item) => {
                    const isManagement = item.id === 'management';
                    return (
                        <div 
                            key={item.id}
                            className={isManagement ? 'col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center' : ''}
                        >
                            <div className={isManagement ? 'w-full max-w-md' : 'w-full h-full'}>
                                <WorkspaceCard
                                    icon={item.icon}
                                    title={item.title}
                                    description={item.description}
                                    onClick={() => setActiveCategory(item.id)}
                                />
                            </div>
                        </div>
                    );
                })}
                </div>
            </div>
        </main>
        
        <footer className="w-full text-center py-6 mt-auto">
            <p className="text-white/40 text-xs tracking-widest uppercase">© 2025 TUẤN BẰNG PACKAGING SYSTEM</p>
        </footer>
      </div>

      {/* Modal for active category */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
            onClick={() => setActiveCategory(null)}
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
                    onClick={() => setActiveCategory(null)} 
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
      )}
    </div>
  );
};

export default App;
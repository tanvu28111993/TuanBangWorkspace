import React, { useState } from 'react';
import { WorkspaceCard } from './components/WorkspaceCard';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WorkspaceModal } from './components/WorkspaceModal';
import { useCurrentTime } from './hooks/useCurrentTime';
import { WORKSPACE_ITEMS } from './constants';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Custom Hooks
  const { time, formatTime, formatDate, getGreeting } = useCurrentTime();

  const activeItem = WORKSPACE_ITEMS.find(item => item.id === activeCategory) || null;

  return (
    <div className="relative min-h-screen w-full bg-black/60 flex flex-col font-sans text-white overflow-hidden">
        
      {/* Main content area */}
      <div className={`w-full min-h-screen flex flex-col items-center p-4 sm:p-6 md:p-8 transition-all duration-500 ease-in-out ${activeItem ? 'blur-lg brightness-50 scale-[0.98] pointer-events-none' : ''}`}>
        
        <Header 
          formattedTime={formatTime(time)} 
          formattedDate={formatDate(time)} 
        />

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
        
        <Footer />
      </div>

      <WorkspaceModal 
        activeItem={activeItem} 
        onClose={() => setActiveCategory(null)} 
      />
    </div>
  );
};

export default App;
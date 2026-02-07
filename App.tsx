
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TimerDisplay from './components/TimerDisplay';
import HistoryView from './components/HistoryView';
import { View } from './types';
import { getAllDailyStats } from './services/storage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('timer');
  const [refreshKey, setRefreshKey] = useState(0);
  
  const handleSessionComplete = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-white">
      <Sidebar currentView={currentView} setView={setCurrentView} />
      
      <main className="md:ml-64 p-4 md:p-8 min-h-screen">
        <header className="max-w-4xl mx-auto flex justify-between items-center mb-10 pb-4 border-b-2 border-gray-100">
           <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                 {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-3 h-3 rounded-full bg-[#58cc02] border-2 border-white"></div>
                 ))}
              </div>
              <span className="text-sm font-black text-gray-400">DON'T GIVE UP</span>
           </div>
           
           <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border-2 border-[#e5e5e5]">
                 <i className="fa-solid fa-fire text-[#ff9600]"></i>
                 <span className="font-black text-[#ff9600]">{getAllDailyStats().reduce((x, b) => x + b.totalPoints, 0)}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border-2 border-[#e5e5e5]">
                 <i className="fa-solid fa-hourglass-half text-[#1cb0f6]"></i>
                 <span className="font-black text-[#1cb0f6]">{getAllDailyStats().reduce((x, b) => x + b.totalFocusMinutes, 0)}</span>
              </div>
           </div>
        </header>

        <div className="max-w-4xl mx-auto">
          {currentView === 'timer' && <TimerDisplay onSessionComplete={handleSessionComplete} />}
          {currentView === 'history' && <HistoryView />}
        </div>
      </main>
    </div>
  );
};

export default App;

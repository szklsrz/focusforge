
import React from 'react';
import { View } from '../types';
import icon from '../icon.png';

interface SidebarProps {
  currentView: View;
  setView: (view: View) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView }) => {
  const navItems = [
    { id: 'timer' as View, label: 'SESSION', icon: 'fa-clock' },
    { id: 'history' as View, label: 'HISTORY', icon: 'fa-calendar-days' },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full md:w-64 md:h-screen bg-white border-t-2 md:border-t-0 md:border-r-2 border-[#e5e5e5] flex md:flex-col z-50">
      <div className="hidden md:flex p-8 items-center gap-3">
        <div className="w-10 h-10 flex items-center justify-center text-white">
            <img src={icon} alt="FocusForge Icon" className="w-full h-full object-contain"/>
        </div>
        <span className="text-2xl font-black text-[#58cc02] tracking-tighter">ForgeFocus</span>
      </div>

      <nav className="flex flex-1 md:flex-col md:px-4 md:py-2 justify-around md:justify-start gap-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setView(item.id)}
            className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all font-bold tracking-wide text-sm md:text-base ${
              currentView === item.id
                ? 'bg-[#ddf4ff] text-[#1cb0f6] border-2 border-[#84d8ff]'
                : 'text-[#777] hover:bg-gray-100'
            }`}
          >
            <i className={`fa-solid ${item.icon} text-2xl`}></i>
            <span className="hidden md:inline">{item.label}</span>
          </button>
        ))}
      </nav>
      
      <div className="hidden md:block p-4 mt-auto">
        <div className="bg-[#58cc02] p-4 rounded-2xl text-white">
          <p className="font-bold mb-1">Stay Focused!</p>
          <p className="text-sm opacity-90">Every minute counts toward your daily goal.</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

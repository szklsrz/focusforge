
import React, { useState, useEffect } from 'react';
import { getAllDailyStats } from '../services/storage';
import { DailyStats, SessionRecord } from '../types';
import { COLORS } from '../constants';

const HistoryView: React.FC = () => {
  const [history, setHistory] = useState<DailyStats[]>([]);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  useEffect(() => {
    setHistory(getAllDailyStats());
  }, []);

  const formatDate = (dateStr: string) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr + 'T00:00:00').toLocaleDateString(undefined, options);
  };

  const formatTime = (isoStr: string) => {
    return new Date(isoStr).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (history.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <i className="fa-solid fa-calendar-xmark text-7xl text-gray-200 mb-6"></i>
        <h2 className="text-2xl font-bold text-gray-400">No sessions recorded yet</h2>
        <p className="text-gray-400 mt-2">Finish a focus session to see your progress here!</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 pb-24 md:pb-8">
      <h1 className="text-3xl font-black text-[#4b4b4b] mb-8">YOUR HISTORY</h1>
      
      <div className="space-y-4">
        {history.map((day) => (
          <div key={day.date} className="bg-white border-2 border-[#e5e5e5] rounded-2xl overflow-hidden">
            <button 
              onClick={() => setSelectedDay(selectedDay === day.date ? null : day.date)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <div>
                <h3 className="text-lg font-black text-[#4b4b4b] capitalize">{formatDate(day.date)}</h3>
                <div className="flex gap-4 mt-1">
                   <span className="text-sm font-bold text-[#58cc02] flex items-center gap-1">
                     <i className="fa-solid fa-fire"></i> {day.totalPoints} XP
                   </span>
                   <span className="text-sm font-bold text-[#1cb0f6] flex items-center gap-1">
                     <i className="fa-solid fa-hourglass-half"></i> {day.totalFocusMinutes} min Focus
                   </span>
                </div>
              </div>
              <i className={`fa-solid fa-chevron-${selectedDay === day.date ? 'up' : 'down'} text-[#afafaf]`}></i>
            </button>
            
            {selectedDay === day.date && (
              <div className="border-t-2 border-[#e5e5e5] bg-gray-50 p-4 space-y-3">
                {day.sessions.map((session, idx) => (
                  <div key={session.id} className="bg-white border-2 border-[#e5e5e5] rounded-xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${session.type === 'focus' ? 'bg-[#ddf4ff] text-[#1cb0f6]' : 'bg-orange-100 text-orange-500'}`}>
                         <i className={`fa-solid ${session.type === 'focus' ? 'fa-brain' : 'fa-mug-hot'}`}></i>
                      </div>
                      <div>
                        <p className="font-bold text-[#4b4b4b]">{session.taskName}</p>
                        <p className="text-xs text-[#777]">
                          {formatTime(session.startTime)} - {formatTime(session.endTime)}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                       <p className={`font-black ${session.type === 'focus' ? 'text-[#58cc02]' : 'text-gray-400'}`}>
                         +{session.points} XP
                       </p>
                       <p className="text-xs text-[#777]">{session.focusMinutes} min</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryView;

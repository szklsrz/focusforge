
export type TimerMode = 'focus' | 'rest';

export interface SessionConfig {
  focusTime: number; // in minutes
  restTime: number;  // in minutes
  points: number;
  label: string;
}

export interface SessionRecord {
  id: string;
  taskName: string;
  startTime: string; // ISO String
  endTime: string;   // ISO String
  points: number;
  focusMinutes: number;
  type: TimerMode;
}

export interface DailyStats {
  date: string; // YYYY-MM-DD
  totalPoints: number;
  totalFocusMinutes: number;
  sessions: SessionRecord[];
}

export type StorageData = Record<string, DailyStats>;

export type View = 'timer' | 'history' | 'stats';

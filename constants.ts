
import { SessionConfig } from './types';

export const SESSION_OPTIONS: SessionConfig[] = [
  { focusTime: 10, restTime: 2, points: 20, label: "Short Burst" },
  { focusTime: 15, restTime: 3, points: 35, label: "Steady Flow" },
  { focusTime: 20, restTime: 4, points: 55, label: "Deep Work" },
  { focusTime: 25, restTime: 5, points: 80, label: "Elite Grind" },
];

export const COLORS = {
  duoGreen: '#58cc02',
  duoGreenDark: '#46a302',
  duoBlue: '#1cb0f6',
  duoBlueDark: '#1899d6',
  duoOrange: '#ff9600',
  duoGray: '#afafaf',
  duoBorder: '#e5e5e5',
  duoText: '#4b4b4b',
};

// Simplified Audio Helpers
export const SOUNDS = {
  success: 'https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3', // Pleasant "Level Up"
  fail: 'https://assets.mixkit.co/active_storage/sfx/212/212-preview.mp3', // Buzzing "Wrong"
};

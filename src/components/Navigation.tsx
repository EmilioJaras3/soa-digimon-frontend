import React from 'react';
import { VIEW_TYPES } from '@/lib/constants';

interface NavigationProps {
  view: string;
  onViewChange: (view: string) => void;
}

export function Navigation({ view, onViewChange }: NavigationProps) {
  const getButtonClass = (isActive: boolean) =>
    `text-sm font-medium transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-primary-light after:transition-all ${
      isActive ? 'text-white after:w-full' : 'text-slate-300 hover:text-white after:w-0 hover:after:w-full'
    }`;

  return (
    <nav className="hidden md:flex items-center gap-8">
      <button
        onClick={() => onViewChange(VIEW_TYPES.ALL)}
        className={getButtonClass(view === VIEW_TYPES.ALL)}
      >
        Todos
      </button>
      <button
        onClick={() => onViewChange(VIEW_TYPES.MEGA)}
        className={getButtonClass(view === VIEW_TYPES.MEGA)}
      >
        Mega Level
      </button>
    </nav>
  );
}

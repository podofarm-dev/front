import { create } from 'zustand';

interface DashboardTabState {
  tab: 'statistics' | 'solved' | 'cumulative';
  setTab: (tab: 'statistics' | 'solved' | 'cumulative') => void;
}

export const useDashboardTabStore = create<DashboardTabState>((set) => ({
  tab: 'statistics',
  setTab: (tab) => {
    set({
      tab,
    });
  },
}));

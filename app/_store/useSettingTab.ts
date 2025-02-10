import { create } from 'zustand';

interface SettingTabState {
  tab: 'user' | 'study';
  setTab: (tab: 'user' | 'study') => void;
}

export const useSettingTabStore = create<SettingTabState>((set) => ({
  tab: 'user',
  setTab: (tab) => {
    set({
      tab,
    });
  },
}));

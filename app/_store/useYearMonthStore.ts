import dayjs from 'dayjs';
import { create } from 'zustand';

interface YearMonthStore {
  currentYearMonth: string;
  prevMonth: () => void;
  nextMonth: () => void;
  setMonth: (newMonth: string) => void;
}

export const useYearMonthStore = create<YearMonthStore>((set) => ({
  currentYearMonth: dayjs().format('YYYY-MM'),
  prevMonth: () =>
    set((state) => ({
      currentYearMonth: dayjs(state.currentYearMonth).subtract(1, 'month').format('YYYY-MM'),
    })),
  nextMonth: () =>
    set((state) => ({
      currentYearMonth: dayjs(state.currentYearMonth).add(1, 'month').format('YYYY-MM'),
    })),
  setMonth: (newMonth) => set({ currentYearMonth: newMonth }),
}));

import dayjs from 'dayjs';
import { create } from 'zustand';

interface YearMonthStore {
  currentYearMonth: string;
  currentYearMonthDay: string;
  prevMonth: () => void;
  nextMonth: () => void;
  setYearMonthDay: (newMonth: string) => void;
}

export const useYearMonthStore = create<YearMonthStore>((set) => ({
  currentYearMonth: dayjs().format('YYYY-MM'),
  currentYearMonthDay: dayjs().format('YYYY-MM-DD'),
  prevMonth: () =>
    set((state) => ({
      currentYearMonth: dayjs(state.currentYearMonth).subtract(1, 'month').format('YYYY-MM'),
    })),
  nextMonth: () =>
    set((state) => ({
      currentYearMonth: dayjs(state.currentYearMonth).add(1, 'month').format('YYYY-MM'),
    })),
  setYearMonthDay: (newYearMonthDay) =>
    set((state) => ({
      currentYearMonthDay: `${state.currentYearMonth}-${newYearMonthDay.padStart(2, '0')}`,
    })),
}));

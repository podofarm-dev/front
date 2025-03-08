import dayjs from 'dayjs';

export const showMonthStart = (currentYearMonth: string, days: number) => {
  const date = dayjs().subtract(days, 'day').format('YYYY-MM');
  const isMonthStart = currentYearMonth === date;

  return isMonthStart;
};

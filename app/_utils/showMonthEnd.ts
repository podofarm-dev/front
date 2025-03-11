import dayjs from 'dayjs';

export const showMonthEnd = (currentYearMonth: string) => {
  const currentDay = dayjs().format('YYYY-MM');
  const isMonthEnd = currentDay === currentYearMonth;

  return isMonthEnd;
};

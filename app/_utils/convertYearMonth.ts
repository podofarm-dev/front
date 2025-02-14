export const convertYearMonth = (yearMonth: string) => {
  const [year, month] = yearMonth.split('-');
  const changeYearMonth = [year, Number(month)].join('.');

  return changeYearMonth;
};

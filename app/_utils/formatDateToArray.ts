import dayjs from 'dayjs';

// dateString이 2025-12-25 이런식으로 들어와야 함
const formatDateToArray = (dateString: string) => {
  const date = dayjs(dateString);
  const monthDay = date.format('MMM D');
  const year = date.format('YYYY');

  return [monthDay, year];
};

export default formatDateToArray;

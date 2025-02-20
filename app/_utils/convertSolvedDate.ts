import dayjs from 'dayjs';

const convertSolvedDate = (dateString: string) => {
  const date = dayjs(dateString);
  const formattedDate = date.format('YY.MM.DD');

  return formattedDate;
};

export default convertSolvedDate;

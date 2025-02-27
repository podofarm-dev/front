import dayjs from 'dayjs';

const convertCommentDate = (dateString: string) => {
  const date = dayjs(dateString);
  const formattedCommentDate = date.format('YYYY.MM.DD HH:mm');

  return formattedCommentDate;
};

export default convertCommentDate;

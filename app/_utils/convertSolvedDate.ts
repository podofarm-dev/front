// dateString이 2025-03-12 06:05:41 이렇게 옴
const convertSolvedDate = (dateString: string) => {
  const date = dateString.split(' ')[0];
  const formattedDate = date.replaceAll('-', '.');

  return formattedDate;
};

export default convertSolvedDate;

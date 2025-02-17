export const convertSolvedBefore = (solvedBefore: string) => {
  if (solvedBefore.includes('y')) return solvedBefore.replace('y', '년');
  if (solvedBefore.includes('M')) return solvedBefore.replace('M', '월');
  if (solvedBefore.includes('d')) return solvedBefore.replace('d', '일');
  if (solvedBefore.includes('h')) return solvedBefore.replace('h', '시간');
  if (solvedBefore.includes('m')) return solvedBefore.replace('m', '분');
  if (solvedBefore.includes('s')) return solvedBefore.replace('s', '초');
  return solvedBefore;
};

export const activateNav = (path: string) => {
  const splitPath = path.split('/');
  const navigation = splitPath[3];

  if (navigation === 'dashboard') return '대시보드';
  if (navigation === 'problem-list') return '알고리즘 테스트';
  if (navigation === 'solved') return '푼 문제 보기';
  if (navigation === 'setting') return '관리';
};

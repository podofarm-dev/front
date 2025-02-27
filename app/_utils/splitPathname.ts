export const splitPathname = (path: string) => {
  const splitPath = path.split('/');
  const navigation = splitPath[3];

  if (navigation === 'dashboard') return '대시보드';
  if (navigation === 'problem-list') return '알고리즘 테스트';
  if (navigation === 'solved') {
    if (!!splitPath[4]) {
      return '문제 상세 화면';
    }
    return '푼 문제';
  }
  if (navigation === 'setting') return '관리';
};

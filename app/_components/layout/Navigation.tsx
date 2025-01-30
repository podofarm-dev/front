const navigationItem = [
  { title: '대시보드' },
  { title: '알고리즘 테스트' },
  { title: '푼 문제 보기' },
  { title: '관리' },
];

const Navigation = () => {
  return (
    <nav className="bg-primary">
      {navigationItem.map((item) => (
        <div>{item.title}</div>
      ))}
    </nav>
  );
};

export default Navigation;

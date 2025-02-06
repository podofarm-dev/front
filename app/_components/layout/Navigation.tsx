const navigationItem = [
  { title: '대시보드' },
  { title: '알고리즘 테스트' },
  { title: '푼 문제 보기' },
  { title: '관리' },
];

const Navigation = () => {
  return (
    <nav className="flex h-12 items-center gap-4 border-b border-bolder bg-primary px-8">
      {navigationItem.map((item, index) => (
        <div key={index} className="flex cursor-pointer flex-row gap-2">
          <div>아이콘</div>
          <div>{item.title}</div>
        </div>
      ))}
    </nav>
  );
};

export default Navigation;

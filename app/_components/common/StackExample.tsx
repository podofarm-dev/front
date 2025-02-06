import SquareStack from '@/app/_components/common/SquareStack';

const StackExample = () => {
  const squares = Array.from({ length: 5 }, (_, index) => ({
    className: index === 0 ? '' : `bg-main-${5 - index}`,
  }));

  return (
    <div className="flex items-center gap-1">
      <span className="text-secondary-foreground">Less</span>
      {squares.map((item, index) => (
        <SquareStack key={index} className={`h-3 w-3 ${item.className}`} />
      ))}
      <span className="text-secondary-foreground">More</span>
    </div>
  );
};

export default StackExample;

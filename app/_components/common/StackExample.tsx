import SquareStack from '@/app/_components/common/SquareStack';

const StackExample = () => {
  return (
    <div className="flex items-center gap-1">
      <span className="text-secondary-foreground">Less</span>
      <SquareStack className={`h-3 w-3`} />
      <SquareStack className={`h-3 w-3 bg-main-1`} />
      <SquareStack className={`h-3 w-3 bg-main-2`} />
      <SquareStack className={`h-3 w-3 bg-main-3`} />
      <SquareStack className={`h-3 w-3 bg-main-4`} />
      <span className="text-secondary-foreground">More</span>
    </div>
  );
};

export default StackExample;

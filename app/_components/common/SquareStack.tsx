import { cn } from '@/lib/utils';

interface SquareStackProps {
  className?: string;
}

const SquareStack = ({ className }: SquareStackProps) => {
  return <div className={cn('h-5 w-5 rounded bg-tertiary', className)}></div>;
};

export default SquareStack;

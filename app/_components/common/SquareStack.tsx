import { cn } from '@/lib/utils';

interface SquareStackProps {
  className?: string;
  value?: number;
}

const SquareStack = ({ className, value }: SquareStackProps) => {
  if (!!value) {
    if (value === 0) return <div className={cn('h-5 w-5 rounded bg-tertiary', className)}></div>;
    if (value <= 1) return <div className={cn('h-5 w-5 rounded bg-main-4', className)}></div>;
    if (value <= 2) return <div className={cn('h-5 w-5 rounded bg-main-3', className)}></div>;
    if (value <= 3) return <div className={cn('h-5 w-5 rounded bg-main-2', className)}></div>;
    return <div className={cn('h-5 w-5 rounded bg-main-1', className)}></div>;
  }

  return <div className={cn('h-5 w-5 rounded bg-tertiary', className)}></div>;
};

export default SquareStack;

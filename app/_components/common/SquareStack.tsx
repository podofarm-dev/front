import { useUserStore } from '@/app/_store/useUserStore';
import { useYearMonthStore } from '@/app/_store/useYearMonthStore';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface SquareStackProps {
  className?: string;
  value?: number;
  date?: number;
  memberId?: string;
  showTooltip?: boolean;
}

const SquareStack = ({
  className,
  value,
  date,
  memberId,
  showTooltip = true,
}: SquareStackProps) => {
  let colorClass = 'bg-tertiary';
  const { setYearMonthDay } = useYearMonthStore();
  const { memberId: userMemberId, setMemberId } = useUserStore();

  if (value !== undefined) {
    if (value === 0) colorClass = 'bg-tertiary';
    else if (value <= 1) colorClass = 'bg-main-4';
    else if (value <= 2) colorClass = 'bg-main-3';
    else if (value <= 3) colorClass = 'bg-main-2';
    else colorClass = 'bg-main-1';
  }

  const onChangeDailyStack = () => {
    if (memberId && userMemberId !== memberId) {
      setMemberId(memberId);
    }
    setYearMonthDay(String(date));
  };

  return (
    <>
      {showTooltip ? (
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild onClick={onChangeDailyStack}>
              <div className={cn('h-5 w-5 rounded', colorClass, className)} />
            </TooltipTrigger>
            <TooltipContent>
              <p>푼 문제: {value ?? 'N/A'}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        <div className={cn('h-5 w-5 rounded', colorClass, className)} />
      )}
    </>
  );
};

export default SquareStack;

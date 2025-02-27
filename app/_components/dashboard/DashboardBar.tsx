'use client';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface DashboardBarProps {
  solved: number;
  maxSolved: number;
}

const DashboardBar = ({ solved, maxSolved }: DashboardBarProps) => {
  return (
    <TooltipProvider delayDuration={500}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className="h-6 bg-gradient-to-r from-purple-900 to-purple-300"
            style={{ width: `${(solved / maxSolved) * 100}%` }}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>푼 문제 : {solved}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default DashboardBar;

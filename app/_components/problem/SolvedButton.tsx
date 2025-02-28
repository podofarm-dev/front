'use client';

import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
} from '@/components/ui/dropdown-menu';
import { SOLVED_STATUS } from '@/app/_constants/status';

interface SolvedButtonProps {
  onChange: (value: string) => void;
  value: string;
}

const SolvedButton = ({ onChange, value }: SolvedButtonProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-lg bg-accent px-4 py-2">
        <div className="flex flex-row gap-1">
          Status <ChevronDown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="items-center justify-center gap-6 border-bolder bg-accent py-6 text-primary-foreground">
        <DropdownMenuRadioGroup onValueChange={onChange} value={value}>
          <DropdownMenuRadioItem className="cursor-pointer px-10 text-lg" value={SOLVED_STATUS.ALL}>
            전체 문제
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            className="cursor-pointer px-10 text-lg"
            value={SOLVED_STATUS.COMPLETE}
          >
            푼 문제
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            className="cursor-pointer px-10 text-lg"
            value={SOLVED_STATUS.INCOMPLETE}
          >
            틀린 문제
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SolvedButton;

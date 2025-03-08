'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { convertYearMonth } from '@/app/_utils/convertYearMonth';
import { showMonthEnd } from '@/app/_utils/showMonthEnd';
import { showMonthStart } from '@/app/_utils/showMonthStart';
import { useYearMonthStore } from '@/app/_store/useYearMonthStore';

interface DashboardMonthNavigatorProps {
  days: number;
}

const DashboardMonthNavigator = ({ days }: DashboardMonthNavigatorProps) => {
  const { currentYearMonth, prevMonth, nextMonth } = useYearMonthStore();
  const isMonthStart = showMonthStart(currentYearMonth, days);
  const isMonthEnd = showMonthEnd(currentYearMonth);

  return (
    <div className="flex gap-1">
      {!isMonthStart && <ChevronLeft className="cursor-pointer" onClick={prevMonth} />}
      {convertYearMonth(currentYearMonth)}
      {!isMonthEnd && <ChevronRight className="cursor-pointer" onClick={nextMonth} />}
    </div>
  );
};

export default DashboardMonthNavigator;

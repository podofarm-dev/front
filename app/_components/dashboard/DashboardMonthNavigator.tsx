'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { convertYearMonth } from '@/app/_utils/convertYearMonth';
import { useYearMonthStore } from '@/app/_store/useYearMonthStore';

const DashboardMonthNavigator = () => {
  const { currentYearMonth, prevMonth, nextMonth } = useYearMonthStore();

  return (
    <div className="flex gap-1">
      <ChevronLeft className="cursor-pointer" onClick={prevMonth} />
      {convertYearMonth(currentYearMonth)}
      <ChevronRight className="cursor-pointer" onClick={nextMonth} />
    </div>
  );
};

export default DashboardMonthNavigator;

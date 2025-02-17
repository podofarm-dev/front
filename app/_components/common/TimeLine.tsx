'use client';

import { convertSolvedBefore } from '@/app/_utils/convertSolvedBefore';

interface TimeLineProps {
  time: string;
  name: string;
  title: string;
}

const TimeLine = ({ time, name, title }: TimeLineProps) => {
  return (
    <div className="relative pb-6 pl-6">
      {/* 타임라인 원형 아이콘 */}
      <span className="absolute left-[-9px] top-1 h-3 w-3 rounded-full bg-gray-400"></span>
      <span className="absolute left-[-4px] top-2 h-full w-[0.1rem] bg-gray-400"></span>
      {/* 시간 정보 */}
      <p className="mb-1 text-sm text-secondary-foreground">{convertSolvedBefore(time)} 전</p>

      {/* 내용 */}
      <p className="text-sm text-primary-foreground">
        <span className="font-semibold">{name}</span>님이 {title}문제를 풀었습니다.
      </p>
    </div>
  );
};

export default TimeLine;

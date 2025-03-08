'use client';

import { PATH } from '@/app/_constants/path';
import { convertSolvedBefore } from '@/app/_utils/convertSolvedBefore';
import Link from 'next/link';

interface TimeLineProps {
  time: string;
  name: string;
  title: string;
  studyId: string;
  memberId: string;
  problemId: number;
}

const TimeLine = ({ time, name, title, studyId, memberId, problemId }: TimeLineProps) => {
  return (
    <div className="relative pb-6 pl-6">
      {/* 타임라인 원형 아이콘 */}
      <span className="absolute left-[-9px] top-1 h-3 w-3 rounded-full bg-bolder" />
      <span className="absolute left-[-4px] top-2 h-full w-[0.1rem] bg-bolder" />
      {/* 시간 정보 */}
      <p className="mb-1 text-sm text-secondary-foreground">{convertSolvedBefore(time)} 전</p>

      {/* 내용 */}
      <p className="text-sm text-primary-foreground">
        <span className="font-semibold">{name}</span>님이{' '}
        <Link href={PATH.STUDY_SOLVED_DETAIL(studyId, problemId, memberId)} className="underline">
          {title}
        </Link>
        문제를 풀었습니다.
      </p>
    </div>
  );
};

export default TimeLine;

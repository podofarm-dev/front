import { Suspense } from 'react';

import SolvedContent from '@/app/_components/solved/SolvedContent';
import Loader from '@/app/_components/common/Loader';

interface SolvedPageProps {
  params: {
    studyId: string;
  };
}

export default function SolvedPage({ params }: SolvedPageProps) {
  const { studyId } = params;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-semibold">푼 문제</span>
        <span className="text-sm text-secondary-foreground">
          문제를 클릭하면 프로그래머스 페이지로 이동합니다
        </span>
      </div>
      <Suspense fallback={<Loader />}>
        <SolvedContent studyId={studyId} />
      </Suspense>
    </div>
  );
}

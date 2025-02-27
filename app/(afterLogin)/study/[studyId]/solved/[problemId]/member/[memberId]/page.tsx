import Loader from '@/app/_components/common/Loader';
import SolvedDetailContent from '@/app/_components/solvedDetail/SolvedDetailContent';
import { Suspense } from 'react';

interface SolvedDetailPageProps {
  params: {
    studyId: string;
    problemId: string;
    memberId: string;
  };
}

export default function SolvedDetailPage({ params }: SolvedDetailPageProps) {
  const { studyId, problemId, memberId } = params;

  return (
    <Suspense fallback={<Loader />}>
      <SolvedDetailContent studyId={studyId} problemId={problemId} memberId={memberId} />
    </Suspense>
  );
}

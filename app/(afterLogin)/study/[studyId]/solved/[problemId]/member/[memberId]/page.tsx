import SolvedDetailContent from '@/app/_components/solvedDetail/SolvedDetailContent';

interface SolvedDetailPageProps {
  params: {
    studyId: string;
    problemId: string;
    memberId: string;
  };
}

export default function SolvedDetailPage({ params }: SolvedDetailPageProps) {
  const { studyId, problemId, memberId } = params;

  return <SolvedDetailContent studyId={studyId} problemId={problemId} memberId={memberId} />;
}

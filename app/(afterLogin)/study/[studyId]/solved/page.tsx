import SolvedContent from '@/app/_components/solved/SolvedContent';

interface SolvedPageProps {
  params: {
    studyId: string;
  };
}

export default function SolvedPage({ params }: SolvedPageProps) {
  const { studyId } = params;

  return (
    <div className="flex flex-col">
      <div className="mb-8 flex flex-col gap-2 md:mb-0">
        <span className="text-2xl font-semibold">푼 문제</span>
        <span className="text-sm text-secondary-foreground">
          프로그래머스에서 푼 문제를 확인할 수 있습니다
        </span>
      </div>
      <SolvedContent studyId={studyId} />
    </div>
  );
}

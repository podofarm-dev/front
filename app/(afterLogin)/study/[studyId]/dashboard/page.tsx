import { Suspense } from 'react';

import Loader from '@/app/_components/common/Loader';
import DashboardContent from '@/app/_components/dashboard/DashboardContent';

interface DashboardStudyPageProps {
  params: {
    studyId: string;
  };
}

export default function DashboardStudyPage({ params }: DashboardStudyPageProps) {
  const { studyId } = params;

  return (
    <div className="flex flex-col gap-2">
      <Suspense fallback={<Loader />}>
        <DashboardContent studyId={studyId} />
      </Suspense>
    </div>
  );
}

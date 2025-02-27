import { Suspense } from 'react';

import SettingContent from '@/app/_components/Setting/SettingContent';
import Loader from '@/app/_components/common/Loader';

interface SettingPageProps {
  params: {
    studyId: string;
  };
}

export default function SettingPage({ params }: SettingPageProps) {
  const { studyId } = params;

  return (
    <div className="flex flex-col gap-8">
      <span className="text-2xl font-semibold">Settings</span>
      <Suspense fallback={<Loader />}>
        <SettingContent studyId={studyId} />
      </Suspense>
    </div>
  );
}

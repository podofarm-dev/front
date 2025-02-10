import { InfoIcon } from 'lucide-react';

import StudyButton from '@/app/_components/study/StudyButton';

export default async function DashboardPage() {
  return (
    <div className="relative my-auto flex h-dvh flex-col">
      <div className="mr-8 mt-16 text-end">
        <StudyButton />
      </div>
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
        <span className="text-xl font-medium text-primary-foreground">No Study yet</span>
        <div className="flex gap-1">
          <span>Create a new Study</span>
          <InfoIcon />
        </div>
      </div>
    </div>
  );
}

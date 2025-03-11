import SettingContent from '@/app/_components/Setting/SettingContent';

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
      <SettingContent studyId={studyId} />
    </div>
  );
}

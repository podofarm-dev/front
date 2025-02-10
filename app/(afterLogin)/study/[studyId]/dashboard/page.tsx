import DashboardTab from '@/app/_components/common/DashboardTab';
import StackExample from '@/app/_components/common/StackExample';
import TimeLine from '@/app/_components/common/TimeLine';

const events = [
  {
    user: 'user7',
    action: '다트',
    time: '1시간 전',
  },
  {
    user: 'user7',
    action: '다트',
    time: '1시간 전',
  },
  {
    user: 'user7',
    action: '다트',
    time: '1시간 전',
  },
  {
    user: 'user7',
    action: '다트',
    time: '1시간 전',
  },
  {
    user: 'user7',
    action: '다트',
    time: '1시간 전',
  },
  {
    user: 'user7',
    action: '다트',
    time: '1시간 전',
  },
];

interface DashboardStudyPageProps {
  params: {
    studyId: string;
  };
}

export default function DashboardStudyPage({ params }: DashboardStudyPageProps) {
  const { studyId } = params;
  const studyTitle = '스터디명';
  const days = '142';

  return (
    <div className="flex flex-col gap-2">
      <span className="text-2xl font-semibold">
        {studyTitle} • {studyId}
      </span>
      <span className="text-sm text-secondary-foreground">포도농장이 {days}일째 운영 중이에요</span>
      <div className="flex w-full flex-row gap-6 py-4">
        <div className="relative flex w-9/12 flex-col rounded-lg border border-bolder px-11 py-8">
          <div className="flex justify-center">
            <DashboardTab />
          </div>
          <div className="flex-1 py-4">여기 이제 컴포넌트가 들어감 아직 안만듦</div>
          <div className="flex justify-end">
            <StackExample />
          </div>
        </div>
        <div className="relative flex w-3/12 flex-col gap-1 rounded-lg border border-bolder px-11 py-8">
          <span className="mb-4 font-semibold">최근활동</span>
          {events.map((item, index) => (
            <TimeLine key={index} time={item.time} name={item.user} title={item.action} />
          ))}
        </div>
      </div>
    </div>
  );
}

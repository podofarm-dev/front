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

export default function DashboardStudyPage() {
  return (
    <div>
      <div className="relative max-w-4xl rounded-lg border border-secondary-foreground px-11 py-8">
        <p>타이틀 자리입니다</p>
        <hr className="my-8 h-[1px] border-0 bg-secondary-foreground" />
        <div className="flex justify-center">
          <DashboardTab isActive={true} />
        </div>
        <div className="flex justify-end">
          <StackExample />
        </div>
      </div>
      <div className="mx-auto max-w-72">
        <div className="relative flex flex-col gap-1 rounded-lg border border-secondary-foreground px-11 py-8">
          <span className="mb-4 font-semibold">최근활동</span>
          {events.map((item, index) => (
            <TimeLine key={index} time={item.time} name={item.user} title={item.action} />
          ))}
        </div>
      </div>
    </div>
  );
}

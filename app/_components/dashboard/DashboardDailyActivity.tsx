import { useUserStore } from '@/app/_store/useUserStore';
import { StudyMemberListDetail } from '@/app/_types/study';
import { filterMember } from '@/app/_utils/filterMember';

interface DashboardDailyActivityProps {
  title: string;
  level: number;
  type?: string;
  memberDetails: StudyMemberListDetail[];
}

const DashboardDailyActivity = ({
  title,
  level,
  type,
  memberDetails,
}: DashboardDailyActivityProps) => {
  const { memberId } = useUserStore();
  const findMember = filterMember(memberDetails, memberId);

  return (
    <div className="flex flex-row">
      <span className="absolute left-6 top-2 h-full w-[0.1px] bg-bolder" />
      <div className="flex w-full flex-col gap-2">
        <span className="font-semibold">{title}</span>
        <div className="flex flex-row justify-between text-secondary-foreground">
          <span>{findMember?.name}</span>
          <div className="flex flex-row gap-24">
            <div className="flex flex-row items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-main-1" />
              <span>{type}</span>
            </div>
            <span>Lv.{level}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardDailyActivity;

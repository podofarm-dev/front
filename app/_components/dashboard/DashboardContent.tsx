'use client';

import DashboardTab from '@/app/_components/dashboard/DashboardTab';
import StackExample from '@/app/_components/common/StackExample';
import TimeLine from '@/app/_components/common/TimeLine';
import DashboardHeader from '@/app/_components/dashboard/DashboardHeader';
import DashboardTabDecider from '@/app/_components/dashboard/DashboardTabDecider';
import { useStudyMemberQuery } from '@/app/_hooks/api/useStudyMemberQuery';
import { useRecentLogsQuery } from '@/app/_hooks/api/useRecentLogsQuery';

interface DashboardContentProps {
  studyId: string;
}

const DashboardContent = ({ studyId }: DashboardContentProps) => {
  const { studyMemberData } = useStudyMemberQuery(studyId);
  const { recentLogsData } = useRecentLogsQuery(studyId);

  return (
    <>
      {studyMemberData && (
        <DashboardHeader
          studyTitle={studyMemberData.studyName}
          studyId={studyMemberData.studyId}
          days={studyMemberData.lapsedDate}
        />
      )}
      <div className="flex w-full flex-row gap-6 py-4">
        <div className="relative flex w-9/12 flex-col rounded-lg border border-bolder px-11 py-8">
          <div className="flex justify-center">
            <DashboardTab />
          </div>
          <div className="flex-1 py-4">
            {studyMemberData && (
              <DashboardTabDecider
                studyId={studyMemberData.studyId}
                memberDetails={studyMemberData.memberDetails}
              />
            )}
          </div>
          <div className="flex justify-end">
            <StackExample />
          </div>
        </div>
        <div className="relative flex w-3/12 flex-col gap-1 rounded-lg border border-bolder px-11 py-8">
          <span className="mb-4 font-semibold">최근활동</span>
          {recentLogsData &&
            recentLogsData.map((item, index) => (
              <TimeLine
                key={index}
                time={item.solvedBefore}
                name={item.memberName}
                title={item.problemTitle}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default DashboardContent;

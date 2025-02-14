'use client';

interface DashboardHeaderProps {
  studyTitle: string;
  studyId: string;
  days: number;
}

const DashboardHeader = ({ studyTitle, studyId, days }: DashboardHeaderProps) => {
  return (
    <div className="flex flex-col">
      <span className="text-2xl font-semibold">
        {studyTitle} • {studyId}
      </span>
      <span className="text-sm text-secondary-foreground">포도농장이 {days}일째 운영 중이에요</span>
    </div>
  );
};

export default DashboardHeader;

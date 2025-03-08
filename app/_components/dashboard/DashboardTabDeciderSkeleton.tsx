import DashboardTabListSkeleton from '@/app/_components/dashboard/DashboardTabListSkeleton';

const DashboardTabDeciderSkeleton = () => {
  return (
    <div className="relative flex flex-col gap-2 overflow-x-auto py-4">
      {Array.from({ length: 6 }, (_, index) => (
        <DashboardTabListSkeleton key={index} />
      ))}
    </div>
  );
};

export default DashboardTabDeciderSkeleton;

import StackExample from '@/app/_components/common/StackExample';
import TimeLineSkeleton from '@/app/_components/common/TimeLineSkeleton';
import DashboardHeaderSkeleton from '@/app/_components/dashboard/DashboardHeaderSkeleton';
import DashboardSolvedAlgorithmSkeleton from '@/app/_components/dashboard/DashboardSolvedAlgorithmSkeleton';
import DashboardTab from '@/app/_components/dashboard/DashboardTab';
import DashboardTabDeciderSkeleton from '@/app/_components/dashboard/DashboardTabDeciderSkeleton';
import { Skeleton } from '@/components/ui/skeleton';

const DashboardContentSkeleton = () => {
  return (
    <>
      <DashboardHeaderSkeleton />
      <div className="flex w-full flex-col gap-6 py-4 md:flex-row">
        <div className="flex w-full flex-col gap-6 md:w-9/12">
          <div className="flex flex-col rounded-lg border border-bolder px-11 py-8">
            <div className="flex justify-center">
              <DashboardTab />
            </div>
            <div className="flex-1 py-4">
              <div className="flex flex-col">
                <Skeleton className="h-5 w-24" />
                <DashboardTabDeciderSkeleton />
              </div>
            </div>
            <div className="flex justify-end">
              <StackExample />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-base font-semibold">Solved Algorithm</span>
            <DashboardSolvedAlgorithmSkeleton />
          </div>
        </div>
        <div className="flex h-fit w-full flex-col gap-1 rounded-lg border border-bolder px-11 py-8 md:w-3/12">
          <span className="mb-4 font-semibold">최근활동</span>
          {Array.from({ length: 3 }, (_, index) => (
            <TimeLineSkeleton key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DashboardContentSkeleton;

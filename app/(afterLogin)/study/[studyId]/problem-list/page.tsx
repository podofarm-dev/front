import UserCard from '@/app/_components/common/UserCard';
import ProblemList from '@/app/_components/problem/ProblemList';

export default function ProblemListPage() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-semibold">알고리즘 테스트</span>
        <span className="text-sm text-secondary-foreground">
          문제를 클릭하면 프로그래머스 페이지로 이동합니다
        </span>
      </div>
      <div className="flex flex-row gap-6">
        <div className="flex w-10/12">
          <ProblemList />
        </div>
        <div className="flex w-2/12">
          <UserCard
            src={'https://github.com/shadcn.png'}
            name="홍길동"
            memberId="GKPGDV"
            solved="27"
          />
        </div>
      </div>
    </div>
  );
}

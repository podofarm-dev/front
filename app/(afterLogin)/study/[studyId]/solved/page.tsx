import UserCard from '@/app/_components/common/UserCard';
import SolvedList from '@/app/_components/solved/SolvedList';
import UserSolvedList from '@/app/_components/solved/UserSolvedList';

export default function SolvedPage() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-semibold">푼 문제 보기</span>
        <span className="text-sm text-secondary-foreground">
          문제를 클릭하면 프로그래머스 페이지로 이동합니다
        </span>
      </div>
      <div className="flex flex-row gap-6">
        <SolvedList />
        <div className="flex flex-col gap-10">
          <UserCard
            src={'https://github.com/shadcn.png'}
            name="홍길동"
            memberId="GKPGDV"
            solved={27}
          />
          <div className="flex flex-col">
            <UserSolvedList isUser={true} name="유저명" memberId="SDWDX" />
            <UserSolvedList name="유저명" memberId="SDWDX" />
          </div>
        </div>
      </div>
    </div>
  );
}

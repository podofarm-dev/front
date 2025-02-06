import UserCard from '@/app/_components/common/UserCard';
import ProblemList from '@/app/_components/problem/ProblemList';

export default function ProblemListPage() {
  return (
    <div>
      <ProblemList />
      <UserCard src={'https://github.com/shadcn.png'} name="홍길동" memberId="GKPGDV" solved="27" />
    </div>
  );
}

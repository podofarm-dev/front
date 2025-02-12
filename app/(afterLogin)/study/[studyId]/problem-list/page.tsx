import { Suspense } from 'react';

import ProblemListContent from '@/app/_components/problem/ProblemListContent';

export default async function ProblemListPage() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-semibold">알고리즘 테스트</span>
        <span className="text-sm text-secondary-foreground">
          문제를 클릭하면 프로그래머스 페이지로 이동합니다
        </span>
      </div>
      <Suspense fallback={<div>로딩중...</div>}>
        <ProblemListContent />
      </Suspense>
    </div>
  );
}

'use client';

import { ChevronRight } from 'lucide-react';

import { splitPathname } from '@/app/_utils/splitPathname';
import { useParams, useRouter } from 'next/navigation';
import { useSolvedContentQuery } from '@/app/_hooks/api/useSolvedContentQuery';

interface HeaderNameProps {
  pathname: string;
}

const HeaderName = ({ pathname }: HeaderNameProps) => {
  const router = useRouter();
  const headerName = splitPathname(pathname);

  const { problemId } = useParams();
  const id = Array.isArray(problemId) ? problemId[0] : problemId;

  const { solvedContentData } = useSolvedContentQuery(id);

  if (headerName === '문제 상세 화면') {
    return (
      <div className="flex flex-row">
        <span className="cursor-pointer" onClick={() => router.back()}>
          푼 문제
        </span>
        <ChevronRight />
        <span>{solvedContentData?.title ?? '불러오는 중...'}</span>
      </div>
    );
  }

  return (
    <div>
      <span>{headerName}</span>
    </div>
  );
};

export default HeaderName;

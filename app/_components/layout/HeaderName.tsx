'use client';

import { ChevronRight } from 'lucide-react';

import { splitPathname } from '@/app/_utils/splitPathname';
import { useRouter } from 'next/navigation';

interface HeaderNameProps {
  pathname: string;
}

const HeaderName = ({ pathname }: HeaderNameProps) => {
  const router = useRouter();
  const headerName = splitPathname(pathname);

  if (headerName === '문제 상세 화면') {
    return (
      <div className="flex flex-row">
        <span className="cursor-pointer" onClick={() => router.back()}>
          푼 문제
        </span>
        <ChevronRight />
        <span>문제 상세 화면</span>
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

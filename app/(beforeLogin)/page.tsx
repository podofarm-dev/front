'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { PATH } from '@/app/_constants/path';
import LogoutButton from '../_components/common/LogoutButton';
import getTest from '../_api/user/getTest';

export default function LandingPage() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <Button>
        <Link href={PATH.LOGIN}>로그인</Link>
      </Button>
      <Button onClick={() => getTest()}>테스트</Button>
      <Button>
        <Link href={PATH.DASHBOARD}>대시보드</Link>
      </Button>
      <LogoutButton isButton={true} />
    </div>
  );
}

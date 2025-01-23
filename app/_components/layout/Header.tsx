'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { PATH } from '@/app/_constants/path';
import sessionStore from '@/app/_store/useSession';
import { Button } from '@/components/ui/button';

const Header = () => {
  const router = useRouter();
  const accessToken = sessionStore((state) => state.access_token);
  const isLoggedIn = Boolean(accessToken);

  return (
    <header className="sticky flex h-28 w-full items-center bg-slate-600 px-6 max-sm:max-h-16">
      <div className="flex w-full items-center justify-between">
        <div>로고</div>
        {isLoggedIn ? (
          <Button onClick={() => {}}>스터디 입장</Button>
        ) : (
          <Button>
            <Link href={PATH.LOGIN}>로그인</Link>
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;

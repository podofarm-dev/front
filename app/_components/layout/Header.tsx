'use client';

import Link from 'next/link';

import { PATH } from '@/app/_constants/path';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import LogoutButton from '../common/LogoutButton';

// import { useRouter } from 'next/navigation';

// import sessionStore from '@/app/_store/useSession';
// import { Button } from '@/components/ui/button';

const Header = () => {
  // const router = useRouter();
  // const accessToken = sessionStore((state) => state.access_token);
  // const isLoggedIn = Boolean(accessToken);

  return (
    <header className="flex h-14 w-full items-center justify-between bg-primary px-8 max-sm:max-h-16">
      <Link href={PATH.ROOT}>
        <div className="flex w-full items-center gap-2">
          <div>로고</div>
          <span>대시보드</span>
        </div>
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div>프로필</div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="items-center justify-center gap-6 border-bolder bg-accent px-10 py-6 text-primary-foreground">
          <DropdownMenuItem className="cursor-pointer text-lg">마이 프로필</DropdownMenuItem>
          <LogoutButton isButton={false} />
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;

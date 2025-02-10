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
import { useUserInfoQuery } from '@/app/_hooks/api/useUserInfoQuery';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Header = () => {
  const { userInfoData } = useUserInfoQuery();

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
          <Avatar>
            <AvatarImage src={userInfoData?.imgUrl} />
            <AvatarFallback>{userInfoData?.name}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="items-center justify-center gap-6 border-bolder bg-accent py-6 text-primary-foreground">
          <DropdownMenuItem className="cursor-pointer px-10 text-lg !text-primary-foreground hover:!bg-bolder">
            마이 프로필
          </DropdownMenuItem>
          <LogoutButton isButton={false} />
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;

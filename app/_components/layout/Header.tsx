'use client';

import Link from 'next/link';

import { PATH } from '@/app/_constants/path';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import LogoutButton from '@/app/_components/common/LogoutButton';
import { useUserInfoQuery } from '@/app/_hooks/api/useUserInfoQuery';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { usePathname } from 'next/navigation';
import { splitPathname } from '@/app/_utils/splitPathname';

const Header = () => {
  const pathname = usePathname();
  const headerName = splitPathname(pathname);
  const { userInfoData } = useUserInfoQuery();

  return (
    <header className="flex h-14 w-full items-center justify-between bg-primary px-8 max-sm:max-h-16">
      <Link href={PATH.ROOT}>
        <div className="flex w-full items-center gap-2">
          <div>로고</div>
          <span>{headerName}</span>
        </div>
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={userInfoData?.imgUrl} />
            <AvatarFallback>{userInfoData?.name}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="items-center justify-center border-bolder bg-accent py-6 text-primary-foreground">
          <DropdownMenuItem className="cursor-pointer px-10 text-lg !text-primary-foreground hover:!bg-bolder">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={userInfoData?.imgUrl} />
                <AvatarFallback>{userInfoData?.name}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="text-sm">{userInfoData?.name}</p>
                <p className="text-xs text-secondary-foreground">{userInfoData?.memberId}</p>
              </div>
            </div>
          </DropdownMenuItem>
          <hr className="my-3 border-bolder" />
          <LogoutButton isButton={false} />
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;

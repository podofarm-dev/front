'use client';

import { ACCESS_TOKEN_KEY } from '@/app/_constants/api';
import { useLogOutMutation } from '@/app/_hooks/api/useLogOutMutation';
import { Button } from '@/components/ui/button';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import Exit from '@/app/_svg/exit.svg';

interface LogoutButtonProps {
  isButton: boolean;
}

const LogoutButton = ({ isButton }: LogoutButtonProps) => {
  const logoutMutation = useLogOutMutation();

  const logout = () => {
    const authStorage = localStorage.getItem(ACCESS_TOKEN_KEY);

    if (authStorage) {
      const { state } = JSON.parse(authStorage);
      const memberId = state?.memberId;

      const memberData = {
        memberId: memberId,
      };
      logoutMutation.mutate({ memberData: memberData });
    }
  };

  return isButton ? (
    <Button onClick={logout}>로그아웃</Button>
  ) : (
    <DropdownMenuItem
      className="cursor-pointer px-10 text-lg !text-primary-foreground hover:!bg-bolder"
      onClick={logout}
    >
      <div className="flex flex-row items-center gap-2">
        <Exit />
        <p>로그아웃</p>
      </div>
    </DropdownMenuItem>
  );
};

export default LogoutButton;

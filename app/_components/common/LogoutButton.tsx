'use client';

import { ACCESS_TOKEN_KEY } from '@/app/_constants/api';
import { useLogOutMutation } from '@/app/_hooks/api/useLogOutMutation';
import { Button } from '@/components/ui/button';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';

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
    <DropdownMenuItem className="cursor-pointer text-lg">로그아웃</DropdownMenuItem>
  );
};

export default LogoutButton;

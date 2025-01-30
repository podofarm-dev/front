'use client';

import { useLogOutMutation } from '@/app/_hooks/useLogOutMutation';
import { Button } from '@/components/ui/button';

const LogoutButton = () => {
  const logoutMutation = useLogOutMutation();

  const logout = () => {
    logoutMutation.mutate();
  };

  return <Button onClick={logout}>로그아웃</Button>;
};

export default LogoutButton;

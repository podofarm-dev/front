import { ReactNode } from 'react';

import Header from '@/app/_components/layout/Header';
import RedirectLogin from '@/app/_components/common/RedirectLogin';
import { LayoutProps } from '@/app/_types/layout';

const AfterLoginLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <RedirectLogin />
      {children}
    </>
  );
};

export default AfterLoginLayout;

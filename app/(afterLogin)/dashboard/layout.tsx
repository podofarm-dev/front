import { ReactNode } from 'react';

import RedirectStudy from '@/app/_components/common/RedirectStudy';
import { LayoutProps } from '@/app/_types/layout';

const AfterLoginDashboardLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <RedirectStudy />
      {children}
    </>
  );
};

export default AfterLoginDashboardLayout;

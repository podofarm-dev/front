import { ReactNode } from 'react';

import RedirectStudy from '@/app/_components/common/RedirectStudy';

type Props = { children: ReactNode };

const AfterLoginDashboardLayout = ({ children }: Props) => {
  return (
    <>
      <RedirectStudy />
      {children}
    </>
  );
};

export default AfterLoginDashboardLayout;

import { ReactNode } from 'react';
import RedirectDashboard from '@/app/_components/common/RedirectDashboard';

type Props = { children: ReactNode };

const BeforeLoginLayout = ({ children }: Props) => {
  return (
    <>
      {children}
      <RedirectDashboard />
    </>
  );
};

export default BeforeLoginLayout;

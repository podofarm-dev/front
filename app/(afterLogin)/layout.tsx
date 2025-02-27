import { ReactNode } from 'react';

import Header from '@/app/_components/layout/Header';
import RedirectLogin from '@/app/_components/common/RedirectLogin';

type Props = { children: ReactNode };

const AfterLoginLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <RedirectLogin />
      {children}
    </>
  );
};

export default AfterLoginLayout;

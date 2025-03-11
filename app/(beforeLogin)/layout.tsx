import { ReactNode } from 'react';

import LandingRedirectHandler from '@/app/_components/common/LandingRedirectHandler';

type Props = { children: ReactNode };

const BeforeLoginLayout = ({ children }: Props) => {
  return (
    <>
      {children}
      <LandingRedirectHandler />
    </>
  );
};

export default BeforeLoginLayout;

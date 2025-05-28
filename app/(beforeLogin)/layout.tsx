import { ReactNode } from 'react';

import LandingRedirectHandler from '@/app/_components/common/LandingRedirectHandler';
import { LayoutProps } from '@/app/_types/layout';

const BeforeLoginLayout = ({ children }: LayoutProps) => {
  return (
    <>
      {children}
      <LandingRedirectHandler />
    </>
  );
};

export default BeforeLoginLayout;

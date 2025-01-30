import { ReactNode } from 'react';

import Navigation from '@/app/_components/layout/Navigation';

type Props = { children: ReactNode };

const StudyIdLayout = ({ children }: Props) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default StudyIdLayout;

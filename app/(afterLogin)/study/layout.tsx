import { ReactNode } from 'react';

import Navigation from '@/app/_components/layout/Navigation';

type Props = { children: ReactNode };

const StudyIdLayout = ({ children }: Props) => {
  return (
    <>
      <Navigation />
      <div className="mx-[120px] flex flex-col py-12">{children}</div>
    </>
  );
};

export default StudyIdLayout;

import { ReactNode } from 'react';

import Navigation from '@/app/_components/layout/Navigation';

type Props = { children: ReactNode };

const StudyIdLayout = ({ children }: Props) => {
  return (
    <>
      <Navigation />
      <div className="mx-10 flex max-w-[1200px] flex-col py-12 sm:mx-16 xl:mx-auto">{children}</div>
    </>
  );
};

export default StudyIdLayout;

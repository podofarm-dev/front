import { ReactNode } from 'react';

import Navigation from '@/app/_components/layout/Navigation';

type Props = { children: ReactNode };

const StudyIdLayout = ({ children }: Props) => {
  return (
    <>
      <Navigation />
      <div className="mx-10 flex flex-col py-12 sm:mx-20 md:mx-[120px]">{children}</div>
    </>
  );
};

export default StudyIdLayout;

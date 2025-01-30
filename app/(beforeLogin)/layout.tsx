import { ReactNode } from 'react';

import RQProvider from '@/app/_components/common/RQProvider';
import Header from '@/app/_components/layout/Header';

type Props = { children: ReactNode };

const BeforeLoginLayout = ({ children }: Props) => {
  return <>{children}</>;
};

export default BeforeLoginLayout;

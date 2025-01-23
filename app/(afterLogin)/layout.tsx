import { ReactNode } from 'react';

import RQProvider from '@/app/_components/common/RQProvider';

type Props = { children: ReactNode };

const AfterLoginLayout = ({ children }: Props) => {
  return <RQProvider>{children}</RQProvider>;
};

export default AfterLoginLayout;

import { ReactNode } from 'react';

type Props = { children: ReactNode };

const BeforeLoginLayout = ({ children }: Props) => {
  return <>{children}</>;
};

export default BeforeLoginLayout;

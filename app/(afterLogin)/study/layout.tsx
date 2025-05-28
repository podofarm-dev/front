import Navigation from '@/app/_components/layout/Navigation';
import { LayoutProps } from '@/app/_types/layout';
import MainContentContainer from '@/app/_components/layout/MainContentContainer';

const StudyIdLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navigation />
      <MainContentContainer>{children}</MainContentContainer>
    </>
  );
};

export default StudyIdLayout;

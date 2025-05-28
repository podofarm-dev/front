import { ReactNode } from 'react';

type MainContentContainerProps = {
  children: ReactNode;
  className?: string;
};

/**
 * 메인 콘텐츠를 감싸는 컨테이너 컴포넌트
 * 기본 스타일에 추가 클래스를 적용할 수 있습니다.
 */
const MainContentContainer = ({ children, className = '' }: MainContentContainerProps) => {
  return (
    <div className={`mx-10 flex max-w-[1200px] flex-col py-12 sm:mx-16 xl:mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default MainContentContainer;

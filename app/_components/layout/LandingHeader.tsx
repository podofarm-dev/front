'use client';

import { useEffect, useState } from 'react';

import LoginModal from '@/app/_components/common/LoginModal';
import Logo from '@/app/_components/common/Logo';

const LandingHeader = () => {
  const [bgColor, setBgColor] = useState('bg-transparent');
  const [openModal, setOpenModal] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor('bg-secondary shadow-lg'); // 스크롤 내리면 배경 + 그림자 추가
      } else {
        setBgColor('bg-transparent'); // 스크롤 맨 위에서는 투명
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-50 flex w-full justify-between px-36 py-4 transition-all duration-300 ${bgColor} left-0`}
      >
        <div className="flex flex-row items-center gap-2">
          <Logo />
          <h1 className="text-2xl font-bold">PodoFarm</h1>
        </div>
        <button className="text-gray-300 hover:text-white" onClick={() => setOpenModal('login')}>
          로그인
        </button>
      </header>
      {openModal === 'login' && <LoginModal onClose={() => setOpenModal(null)} />}
    </>
  );
};

export default LandingHeader;

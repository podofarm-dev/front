'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import LoginModal from '@/app/_components/common/LoginModal';

const GetStartedButton = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <>
      <Button
        className="min-w-40 rounded-lg border border-bolder bg-accent px-4 py-5"
        onClick={() => setOpenModal('login')}
      >
        Get Started
      </Button>
      {openModal === 'login' && <LoginModal onClose={() => setOpenModal(null)} />}
    </>
  );
};

export default GetStartedButton;

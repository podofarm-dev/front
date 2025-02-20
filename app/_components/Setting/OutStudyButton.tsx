'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import OutStudyModal from './OutStudyModal';

const OutStudyButton = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <>
      <Button className="my-8 max-w-28 bg-warning" onClick={() => setOpenModal('study-out')}>
        스터디 나가기
      </Button>
      {openModal === 'study-out' && (
        <OutStudyModal title="스터디 나가기" label="스터디" onClose={() => setOpenModal(null)} />
      )}
    </>
  );
};

export default OutStudyButton;

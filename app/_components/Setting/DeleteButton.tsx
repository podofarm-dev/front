'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import DeleteModal from '@/app/_components/Setting/DeleteModal';

interface DeleteButtonProps {
  isUser: boolean;
}

const DeleteButton = ({ isUser }: DeleteButtonProps) => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <>
      {isUser ? (
        <Button className="my-8 max-w-28 bg-warning" onClick={() => setOpenModal('user')}>
          계정 삭제하기
        </Button>
      ) : (
        <Button className="my-8 max-w-28 bg-warning" onClick={() => setOpenModal('study')}>
          스터디 삭제하기
        </Button>
      )}

      {openModal === 'user' && (
        <DeleteModal title="계정 삭제하기" label="계정" onClose={() => setOpenModal(null)} />
      )}
      {openModal === 'study' && (
        <DeleteModal title="스터디 삭제하기" label="스터디" onClose={() => setOpenModal(null)} />
      )}
    </>
  );
};

export default DeleteButton;

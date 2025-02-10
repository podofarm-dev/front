'use client';

import { useState } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Arrow from '@/app/_svg/arrow.svg';
import { StudyModal } from '@/app/_components/study/StudyModal';

const StudyButton = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="max-w-40 rounded-lg bg-accent-foreground px-4 py-3">
          <div className="flex flex-row gap-1 font-bold">
            Create New <Arrow />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="items-center justify-center gap-6 border-bolder bg-accent py-6 text-primary-foreground">
          <DropdownMenuItem
            className="cursor-pointer px-10 text-lg !text-primary-foreground hover:!bg-bolder"
            onClick={() => setOpenModal('create')}
          >
            스터디 생성하기
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer px-10 text-lg !text-primary-foreground hover:!bg-bolder"
            onClick={() => setOpenModal('join')}
          >
            스터디 참여하기
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {openModal === 'create' && (
        <StudyModal
          title="스터디 생성"
          studyLabel="스터디명"
          buttonLabel="생성"
          onClose={() => setOpenModal(null)}
        />
      )}
      {openModal === 'join' && (
        <StudyModal
          title="스터디 참여"
          studyLabel="스터디 코드"
          buttonLabel="참여"
          onClose={() => setOpenModal(null)}
        />
      )}
    </>
  );
};

export default StudyButton;

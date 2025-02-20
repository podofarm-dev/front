'use client';

import { useState } from 'react';
import { Ellipsis } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { StudyParticipantModal } from '@/app/_components/Setting/StudyParticipantModal';

interface StudyParticipantButtonProps {
  id: string;
  name: string;
}

const StudyParticipantButton = ({ id, name }: StudyParticipantButtonProps) => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Ellipsis />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col items-center justify-center gap-2 border-0 bg-tertiary py-2 text-primary-foreground">
          <DropdownMenuItem
            className="cursor-pointer gap-4 px-10 py-3 text-center !text-primary-foreground hover:!bg-bolder"
            onClick={() => setOpenModal('mandate')}
          >
            <span className="text-base font-medium">스터디장 위임</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer gap-4 px-14 py-3 text-center !text-primary-foreground hover:!bg-bolder"
            onClick={() => setOpenModal('kick')}
          >
            <span className="text-base font-medium">내보내기</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {openModal === 'mandate' && (
        <StudyParticipantModal
          title="스터디장 위임"
          id={id}
          name={name}
          onClose={() => setOpenModal(null)}
        />
      )}
      {openModal === 'kick' && (
        <StudyParticipantModal
          title="내보내기"
          id={id}
          name={name}
          onClose={() => setOpenModal(null)}
        />
      )}
    </>
  );
};

export default StudyParticipantButton;

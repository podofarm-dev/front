'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowDownToLine, ChevronDown, Plus, Search } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { StudyModal } from '@/app/_components/study/StudyModal';
import { EXTENSION_PATH } from '@/app/_constants/path';

const StudyButton = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="max-w-40 rounded-lg bg-accent-foreground px-4 py-3">
          <div className="flex flex-row gap-1 font-bold">
            Create New <ChevronDown />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col items-center justify-center gap-2 border-0 bg-tertiary py-2 text-primary-foreground">
          <DropdownMenuItem
            className="cursor-pointer gap-4 px-10 py-3 text-center !text-primary-foreground hover:!bg-bolder"
            onClick={() => setOpenModal('create')}
          >
            <Plus className="!h-6 !w-6" />
            <span className="text-base font-medium">스터디 생성하기</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer gap-4 px-10 py-3 text-center !text-primary-foreground hover:!bg-bolder"
            onClick={() => setOpenModal('join')}
          >
            <Search className="!h-6 !w-6" />
            <span className="text-base font-medium">스터디 참여하기</span>
          </DropdownMenuItem>
          <hr className="w-full border-bolder" />
          <DropdownMenuItem className="cursor-pointer gap-4 px-10 py-3 text-center !text-primary-foreground hover:!bg-bolder">
            <Link
              href={EXTENSION_PATH}
              className="flex flex-row gap-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowDownToLine className="!h-6 !w-6" />
              <span className="text-base font-medium">확장 프로그램 설치</span>
            </Link>
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

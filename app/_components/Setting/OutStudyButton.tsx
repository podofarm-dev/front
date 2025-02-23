'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import OutStudyModal from '@/app/_components/Setting/OutStudyModal';
import { GoStudySettingModal } from './GoStudySettingModal';
import { useSettingTabStore } from '@/app/_store/useSettingTab';

interface OutStudyButtonProps {
  studyId: string;
  isStudyLeader: boolean;
}

const OutStudyButton = ({ studyId, isStudyLeader }: OutStudyButtonProps) => {
  const { setTab } = useSettingTabStore();
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <>
      <Button className="my-8 max-w-28 bg-warning" onClick={() => setOpenModal('study-out')}>
        스터디 나가기
      </Button>
      {openModal === 'study-out' && (
        <OutStudyModal
          title="스터디 나가기"
          label="스터디"
          studyId={studyId}
          onClose={() => setOpenModal(null)}
          onStudySetting={() => setOpenModal('study-setting')}
          isStudyLeader={isStudyLeader}
        />
      )}
      {openModal === 'study-setting' && (
        <GoStudySettingModal onClose={() => setOpenModal(null)} onHandle={() => setTab('study')} />
      )}
    </>
  );
};

export default OutStudyButton;

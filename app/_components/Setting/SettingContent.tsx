'use client';

import SettingTabDecider from '@/app/_components/Setting/SettingTabDecider';
import SettingTab from '@/app/_components/Setting/SettingTab';
import { useUserInfoQuery } from '@/app/_hooks/api/useUserInfoQuery';
import { judgeStudyLeader } from '@/app/_utils/judgeStudyLeader';
import { useStudyInfoQuery } from '@/app/_hooks/api/useStudyInfoQuery';
import Loader from '@/app/_components/common/Loader';

interface SettingContentProps {
  studyId: string;
}

const SettingContent = ({ studyId }: SettingContentProps) => {
  const { userInfoData } = useUserInfoQuery();
  const { studyInfoData } = useStudyInfoQuery(studyId);

  if (!userInfoData || !studyInfoData) {
    return <Loader />;
  }

  const isStudyLeader = judgeStudyLeader(studyInfoData.members, userInfoData.memberId);

  return (
    <>
      {isStudyLeader && <SettingTab />}
      <SettingTabDecider
        userInfoData={userInfoData}
        studyMemberData={studyInfoData}
        isStudyLeader={isStudyLeader}
      />
    </>
  );
};

export default SettingContent;

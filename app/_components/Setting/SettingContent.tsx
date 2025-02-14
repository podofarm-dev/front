'use client';

import SettingTabDecider from '@/app/_components/Setting/SettingTabDecider';
import SettingTab from '@/app/_components/Setting/SettingTab';
import { useUserInfoQuery } from '@/app/_hooks/api/useUserInfoQuery';
import { useStudyMemberQuery } from '@/app/_hooks/api/useStudyMemberQuery';
import { judgeStudyLeader } from '@/app/_utils/judgeStudyLeader';

interface SettingContentProps {
  studyId: string;
}

const SettingContent = ({ studyId }: SettingContentProps) => {
  const { userInfoData } = useUserInfoQuery();
  const { studyMemberData } = useStudyMemberQuery(studyId);

  if (!userInfoData || !studyMemberData) {
    return null;
  }

  const isStudyLeader = judgeStudyLeader(studyMemberData.memberDetails, userInfoData.memberId);

  return (
    <>
      {isStudyLeader && <SettingTab />}
      <SettingTabDecider userInfoData={userInfoData} studyMemberData={studyMemberData} />
    </>
  );
};

export default SettingContent;

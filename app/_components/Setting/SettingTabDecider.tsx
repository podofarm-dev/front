'use client';

import { useSettingTabStore } from '@/app/_store/useSettingTab';
import UserSetting from '@/app/_components/Setting/UserSetting';
import StudySetting from '@/app/_components/Setting/StudySetting';
import { UserData } from '@/app/_types/user';
import { StudyInfoData } from '@/app/_types/study';

interface SettingTabDeciderProps {
  userInfoData: UserData;
  studyMemberData: StudyInfoData;
  isStudyLeader: boolean;
}

const SettingTabDecider = ({
  userInfoData,
  studyMemberData,
  isStudyLeader,
}: SettingTabDeciderProps) => {
  const { tab } = useSettingTabStore();

  if (tab === 'user') {
    return (
      <UserSetting
        memberId={userInfoData.memberId}
        studyId={studyMemberData.studyId}
        name={userInfoData.name}
        email={userInfoData.email}
        imgUrl={userInfoData.imgUrl}
        isStudyLeader={isStudyLeader}
      />
    );
  }

  return (
    <StudySetting
      username={userInfoData.name}
      studyId={studyMemberData.studyId}
      studyName={studyMemberData.studyName}
      memberDetails={studyMemberData.members}
    />
  );
};

export default SettingTabDecider;

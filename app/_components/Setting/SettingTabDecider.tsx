'use client';

import { useSettingTabStore } from '@/app/_store/useSettingTab';
import UserSetting from '@/app/_components/Setting/UserSetting';
import StudySetting from '@/app/_components/Setting/StudySetting';
import { UserData } from '@/app/_types/user';
import { StudyMemberData } from '@/app/_types/study';

interface SettingTabDeciderProps {
  userInfoData: UserData;
  studyMemberData: StudyMemberData;
}

const SettingTabDecider = ({ userInfoData, studyMemberData }: SettingTabDeciderProps) => {
  const { tab } = useSettingTabStore();

  if (tab === 'user') {
    return (
      <UserSetting
        memberId={userInfoData.memberId}
        name={userInfoData.name}
        email={userInfoData.email}
        imgUrl={userInfoData.imgUrl}
      />
    );
  }

  return (
    <StudySetting
      username={userInfoData.name}
      studyId={studyMemberData.studyId}
      studyName={studyMemberData.studyName}
      memberDetails={studyMemberData.memberDetails}
    />
  );
};

export default SettingTabDecider;

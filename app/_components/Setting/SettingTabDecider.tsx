'use client';

import { useSettingTabStore } from '@/app/_store/useSettingTab';
import UserSetting from '@/app/_components/Setting/UserSetting';
import StudySetting from '@/app/_components/Setting/StudySetting';

const SettingTabDecider = () => {
  const { tab } = useSettingTabStore();

  if (tab === 'user') {
    return <UserSetting />;
  }

  return <StudySetting />;
};

export default SettingTabDecider;

'use client';

import { useSettingTabStore } from '@/app/_store/useSettingTab';
import { Button } from '@/components/ui/button';

const SettingTab = () => {
  const { tab, setTab } = useSettingTabStore();

  const onClickUser = () => {
    setTab('user');
  };

  const onClickStudy = () => {
    setTab('study');
  };

  return (
    <div className="flex flex-row">
      <Button
        onClick={onClickUser}
        className={`w-24 rounded-r-none bg-tertiary py-5 text-bolder hover:bg-accent-foreground hover:text-primary-foreground ${tab === 'user' && 'bg-accent-foreground text-primary-foreground'}`}
      >
        계정
      </Button>
      <Button
        onClick={onClickStudy}
        className={`w-24 rounded-l-none bg-tertiary py-5 text-bolder hover:bg-accent-foreground hover:text-primary-foreground ${tab === 'study' && 'bg-accent-foreground text-primary-foreground'}`}
      >
        스터디 관리
      </Button>
    </div>
  );
};

export default SettingTab;

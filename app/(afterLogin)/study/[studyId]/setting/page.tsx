import SettingTabDecider from '@/app/_components/Setting/SettingTabDecider';
import SettingTab from '@/app/_components/Setting/SettingTab';

export default function SettingPage() {
  return (
    <div className="flex flex-col gap-8">
      <span className="text-2xl font-semibold">Settings</span>
      <SettingTab />
      <SettingTabDecider />
    </div>
  );
}

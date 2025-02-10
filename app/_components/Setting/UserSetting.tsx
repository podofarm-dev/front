'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ImageUpload from './ImageUpload';
import { useState } from 'react';
import { useUserInfoQuery } from '@/app/_hooks/api/useUserInfoQuery';

const UserSetting = () => {
  const { userInfoData } = useUserInfoQuery();
  const [image, setImage] = useState<File | null>(null);

  return (
    <div className="flex flex-col gap-8">
      <span className="text-xl font-semibold">프로필</span>
      <div className="flex flex-row gap-20">
        <div className="flex w-full flex-col gap-8 md:w-5/12">
          <div className="flex flex-col gap-4">
            <Label htmlFor="username" className="text-base">
              유저네임
            </Label>
            <Input
              id="username"
              defaultValue={userInfoData?.name}
              className="col-span-3 w-full border-bolder py-5"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="email" className="text-base">
              이메일
            </Label>
            <Input
              id="email"
              type="email"
              defaultValue={userInfoData?.email}
              className="col-span-3 w-full border-bolder bg-bolder py-5 text-secondary-foreground"
              disabled
            />
          </div>
          <Button className="my-8 max-w-28 border border-bolder bg-accent">변경사항 저장</Button>
        </div>

        <div className="flex w-2/12 items-center">
          <ImageUpload imageUrl={userInfoData?.imgUrl} setImage={setImage} />
        </div>
      </div>
      <hr className="border-bolder" />
      <div className="flex flex-col gap-8">
        <span className="text-xl font-semibold">계정탈퇴</span>
        <span className="text-base">
          한번 계정을 삭제하면 다시 전으로 돌아갈 수 없습니다. 반드시 확인하세요.{' '}
        </span>
        <Button className="my-8 max-w-28 bg-warning">계정 삭제하기</Button>
      </div>
    </div>
  );
};

export default UserSetting;

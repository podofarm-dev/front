'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ImageUpload from '@/app/_components/Setting/ImageUpload';
import DeleteButton from '@/app/_components/Setting/DeleteButton';
import { useUsernameMutation } from '@/app/_hooks/api/useUsernameMutation';
import { useProfileUploadMutation } from '@/app/_hooks/api/useProfileUploadMutation';
import OutStudyButton from '@/app/_components/Setting/OutStudyButton';

interface FormValues {
  name?: string;
  file?: File;
}

interface UserSettingProps {
  memberId: string;
  studyId: string;
  name: string;
  email: string;
  imgUrl: string;
  isStudyLeader: boolean;
}

const UserSetting = ({
  memberId,
  name,
  studyId,
  email,
  imgUrl,
  isStudyLeader,
}: UserSettingProps) => {
  const usernameMutation = useUsernameMutation();
  const profileUploadMutation = useProfileUploadMutation();
  const { register, handleSubmit, setValue, watch } = useForm<FormValues>();
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);

  const onSubmit = (data: FormValues) => {
    if (!memberId) {
      return;
    }

    if (data.name && name !== data.name) {
      usernameMutation.mutate({ data: { memberId: memberId, name: data.name } });
    }

    if (data.file && uploadedImage !== data.file) {
      const formData = new FormData();
      formData.append('file', data.file);

      profileUploadMutation.mutate(
        { memberId: memberId, data: formData },
        {
          onSuccess: () => {
            if (data.file) setUploadedImage(data.file);
          },
        },
      );
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <span className="text-xl font-semibold">프로필</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row gap-20">
          <div className="flex w-full flex-col gap-8 md:w-5/12">
            <div className="flex flex-col gap-4">
              <Label htmlFor="username" className="text-base">
                유저네임
              </Label>
              <Input
                id="username"
                defaultValue={name}
                className="col-span-3 w-full border-bolder py-5"
                {...register('name')}
              />
            </div>
            <div className="flex flex-col gap-4">
              <Label htmlFor="email" className="text-base">
                이메일
              </Label>
              <Input
                id="email"
                type="email"
                defaultValue={email}
                className="col-span-3 w-full border-bolder bg-bolder py-5 text-secondary-foreground"
                disabled
              />
            </div>
            <Button className="my-8 max-w-28 border border-bolder bg-accent">변경사항 저장</Button>
          </div>
          <div className="flex w-2/12 items-center">
            <ImageUpload imageUrl={imgUrl} setValue={setValue} watch={watch} />
          </div>
        </div>
      </form>
      <hr className="border-bolder" />
      <div className="flex flex-col gap-8">
        <span className="text-xl font-semibold">스터디 나가기</span>
        <span className="text-base">스터디 참여가 어렵다면 언제든 나가실 수 있습니다.</span>
        <OutStudyButton studyId={studyId} isStudyLeader={isStudyLeader} />
      </div>
      <hr className="border-bolder" />
      <div className="flex flex-col gap-8">
        <span className="text-xl font-semibold">계정탈퇴</span>
        <span className="text-base">
          Podofarm을 더 이상 사용하지 않으려면 계정을 영구적으로 삭제할 수 있습니다.
        </span>
        <DeleteButton isUser={true} studyId={studyId} />
      </div>
    </div>
  );
};

export default UserSetting;

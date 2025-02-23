'use client';

import { ChangeEvent, useState } from 'react';

import DeleteButton from '@/app/_components/Setting/DeleteButton';
import { StudyMemberDetail } from '@/app/_types/study';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import StudyParticipant from '@/app/_components/Setting/StudyParticipant';
import { useUpdateStudyNameMutation } from '@/app/_hooks/api/useUpdateStudyNameMutation';

interface StudySettingProps {
  username: string;
  studyId: string;
  studyName: string;
  memberDetails: StudyMemberDetail[];
}

const StudySetting = ({ username, studyId, studyName, memberDetails }: StudySettingProps) => {
  const [currentStudy, SetCurrentStudy] = useState(studyName);
  const updateStudyNameMutation = useUpdateStudyNameMutation();

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    SetCurrentStudy(value);
  };

  const handlePatchStudyName = () => {
    if (currentStudy !== studyName) {
      updateStudyNameMutation.mutate({
        studyId: studyId,
        studyNameData: { name: currentStudy },
      });
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <span className="text-xl font-semibold">스터디 관리</span>
      <div className="flex flex-col">
        <div className="flex w-full flex-col gap-8 md:w-5/12">
          <div className="flex flex-col gap-4">
            <Label htmlFor="studyTitle" className="text-base">
              스터디명
            </Label>
            <Input
              id="studyTitle"
              value={currentStudy}
              onChange={handleChangeInput}
              className="col-span-3 w-full border-bolder py-5"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="email" className="text-base">
              스터디 코드
            </Label>
            <Input
              id="email"
              type="email"
              defaultValue={studyId}
              className="col-span-3 w-full border-bolder bg-bolder py-5 text-secondary-foreground"
              disabled
            />
            <Button
              className="mt-12 max-w-28 border border-bolder bg-accent"
              onClick={handlePatchStudyName}
            >
              변경사항 저장
            </Button>
          </div>
        </div>
        <hr className="my-12 border-bolder" />
        <div className="flex flex-col gap-7">
          <span className="text-xl font-semibold">참여자 관리</span>
          <div className="flex flex-col gap-4">
            <span className="text-base font-normal">참여자 목록</span>
            <div className="flex flex-col rounded-lg border border-bolder md:w-5/12">
              {memberDetails.map((item) => (
                <StudyParticipant
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  isLeader={item.isLeader}
                  studyId={studyId}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="my-12 border-bolder" />
      <div className="flex flex-col gap-8">
        <span className="text-xl font-semibold">스터디 영구 삭제</span>
        <span className="text-base">
          한번 스터디를 삭제하면 다시 전으로 돌아갈 수 없습니다. 반드시 확인하세요.
        </span>
        <DeleteButton isUser={false} studyId={studyId} />
      </div>
    </div>
  );
};

export default StudySetting;

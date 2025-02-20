'use client';

import DeleteButton from '@/app/_components/Setting/DeleteButton';
import { StudyMemberListDetail } from '@/app/_types/study';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import StudyParticipant from '@/app/_components/Setting/StudyParticipant';

interface StudySettingProps {
  username: string;
  studyId: string;
  studyName: string;
  memberDetails: StudyMemberListDetail[];
}

const StudySetting = ({ username, studyId, studyName, memberDetails }: StudySettingProps) => {
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
              defaultValue={studyName}
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
            <Button className="mt-12 max-w-28 border border-bolder bg-accent">변경사항 저장</Button>
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
        <DeleteButton isUser={false} />
      </div>
    </div>
  );
};

export default StudySetting;

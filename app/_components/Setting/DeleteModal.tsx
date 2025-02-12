'use client';

import { ChangeEvent, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useDeleteUserMutation } from '@/app/_hooks/api/useDeleteUserMutation';
import { useUserInfoQuery } from '@/app/_hooks/api/useUserInfoQuery';

interface DeleteModalProps {
  title: string;
  label: string;
  onClose: () => void;
}

const DeleteModal = ({ title, label, onClose }: DeleteModalProps) => {
  const { userInfoData } = useUserInfoQuery();
  const deleteUserMutation = useDeleteUserMutation();
  const [inputValue, setInputValue] = useState('');

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleDelete = () => {
    if (!userInfoData?.memberId) {
      return;
    }

    if (label === '계정') {
      deleteUserMutation.mutate({ memberId: userInfoData.memberId });
    }

    if (label === '스터디') {
      console.log('스터디 삭제');
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="rounded-lg bg-secondary sm:max-w-[425px]">
        <DialogHeader className="relative before:absolute before:-bottom-4 before:-left-6 before:w-[calc(100%+3rem)] before:border-b before:border-secondary-foreground">
          <DialogTitle className="text-left text-xl">{title}</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-6">
          <div className="flex flex-col items-start gap-4">
            {label === '계정' && (
              <>
                <Label htmlFor="user" className="text-left text-base">
                  한번 {label}을 삭제하면 다시 전으로 돌아갈 수 없습니다.
                  <br /> 반드시 확인하세요.
                  <br />
                  <br />
                  {label}을 삭제하기 희망하시면 아래 유저네임을 작성해주세요.
                </Label>
                <Input
                  id="user"
                  value={inputValue}
                  onChange={handleChangeInput}
                  className="col-span-3 border-secondary-foreground py-5"
                />
              </>
            )}
            {label === '스터디' && (
              <>
                <Label htmlFor="study" className="text-left text-base">
                  한번 {label}를 삭제하면 다시 전으로 돌아갈 수 없습니다.
                  <br /> 반드시 확인하세요.
                  <br />
                  <br />
                  {label}그룹을 삭제하기 희망하시면 아래 {label}명을 작성해주세요.
                </Label>
                <Input
                  id="study"
                  value={inputValue}
                  onChange={handleChangeInput}
                  className="col-span-3 border-secondary-foreground py-5"
                />
              </>
            )}
          </div>
        </div>
        <DialogFooter className="flex flex-row justify-end sm:flex sm:flex-row sm:justify-end">
          <Button type="submit" className="bg-secondary-foreground text-bolder" onClick={onClose}>
            취소
          </Button>
          <Button
            type="submit"
            className="bg-warning"
            disabled={!inputValue}
            onClick={handleDelete}
          >
            삭제하기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;

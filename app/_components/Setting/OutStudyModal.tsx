'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { useUserInfoQuery } from '@/app/_hooks/api/useUserInfoQuery';
import { toast } from 'react-toastify';

interface DeleteModalProps {
  title: string;
  label: string;
  onClose: () => void;
}

const OutStudyModal = ({ title, label, onClose }: DeleteModalProps) => {
  const { userInfoData } = useUserInfoQuery();

  const handleDelete = () => {
    if (!userInfoData?.memberId) {
      return;
    }

    toast.success('스터디 나가기');
    onClose();
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="rounded-lg bg-secondary sm:max-w-[425px]">
        <DialogHeader className="relative before:absolute before:-bottom-4 before:-left-6 before:w-[calc(100%+3rem)] before:border-b before:border-secondary-foreground">
          <DialogTitle className="text-left text-xl">{title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-6">
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="study" className="text-left text-base">
              한번 {label}를 나가면 다시 전으로 돌아갈 수 없습니다.
              <br />
              <br />
              반드시 확인하세요.
            </Label>
          </div>
        </div>
        <DialogFooter className="flex flex-row justify-end sm:flex sm:flex-row sm:justify-end">
          <Button type="submit" className="bg-secondary-foreground text-bolder" onClick={onClose}>
            취소
          </Button>
          <Button type="submit" className="bg-warning" onClick={handleDelete}>
            삭제하기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default OutStudyModal;

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
import { useDeleteStudyOutMutation } from '@/app/_hooks/api/useDeleteStudyOutMutation';

interface OutStudyModalProps {
  title: string;
  label: string;
  studyId: string;
  isStudyLeader: boolean;
  onStudySetting: () => void;
  onClose: () => void;
}

const OutStudyModal = ({
  title,
  label,
  studyId,
  isStudyLeader,
  onStudySetting,
  onClose,
}: OutStudyModalProps) => {
  const deleteStudyOutMutation = useDeleteStudyOutMutation();

  const handleDelete = () => {
    if (isStudyLeader) {
      return onStudySetting();
    }

    deleteStudyOutMutation.mutate(studyId, { onSuccess: onClose });
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="rounded-lg sm:max-w-[425px] [&>button]:hidden">
        <DialogHeader className="relative before:absolute before:-bottom-4 before:-left-6 before:w-[calc(100%+3rem)] before:border-b before:border-bolder">
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
          <Button className="bg-secondary-foreground text-bolder" onClick={onClose}>
            취소
          </Button>
          <Button className="bg-warning" onClick={handleDelete}>
            나가기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default OutStudyModal;

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

interface StudyModalProps {
  onClose: () => void;
  onHandle: () => void;
}

export function GoStudySettingModal({ onClose, onHandle }: StudyModalProps) {
  const goStudySetting = () => {
    onHandle();
    onClose();
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="rounded-lg sm:max-w-[425px] [&>button]:hidden">
        <DialogHeader className="relative before:absolute before:-bottom-4 before:-left-6 before:w-[calc(100%+3rem)] before:border-b before:border-bolder">
          <DialogTitle className="text-left text-xl">스터디장을 위임해주세요</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-6">
          <div className="flex flex-col items-start gap-4">
            <Label htmlFor="mandate" className="text-left text-base">
              스터디를 나가려면 다른 스터디원에게 스터디장 권한을 위임해야 합니다.
              <br />
              <br />
              위임을 완료한 후 다시 시도해주세요.
            </Label>
          </div>
        </div>
        <DialogFooter className="flex flex-row justify-end sm:flex sm:flex-row sm:justify-end">
          <Button className="bg-secondary-foreground text-bolder" onClick={onClose}>
            취소
          </Button>
          <Button className="bg-accent-foreground" onClick={goStudySetting}>
            위임하러 가기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

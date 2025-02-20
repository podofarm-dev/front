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
  title: string;
  id: string;
  name: string;
  onClose: () => void;
}

export function StudyParticipantModal({ title, id, name, onClose }: StudyModalProps) {
  const handleMandate = () => {
    console.log('스터디장 위임');
  };

  const handleKick = () => {
    console.log('내보내기');
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="rounded-lg bg-secondary sm:max-w-[425px]">
        <DialogHeader className="relative before:absolute before:-bottom-4 before:-left-6 before:w-[calc(100%+3rem)] before:border-b before:border-secondary-foreground">
          <DialogTitle className="text-left text-xl">{title}</DialogTitle>
        </DialogHeader>
        {title === '스터디장 위임' && (
          <div className="grid gap-4 py-6">
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="mandate" className="text-left text-base">
                '{name}'에게 스터디장을 위임하시겠습니까?
              </Label>
            </div>
          </div>
        )}
        {title === '내보내기' && (
          <div className="grid gap-4 py-6">
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="kick" className="text-left text-base">
                '{name}'을 스터디에서 내보내시겠습니까?
              </Label>
            </div>
          </div>
        )}
        <DialogFooter className="flex flex-row justify-end sm:flex sm:flex-row sm:justify-end">
          <Button type="submit" className="bg-secondary-foreground text-bolder" onClick={onClose}>
            취소
          </Button>
          {title === '스터디장 위임' && (
            <Button className="bg-accent-foreground" onClick={handleMandate}>
              위임하기
            </Button>
          )}
          {title === '내보내기' && (
            <Button className="bg-warning" onClick={handleKick}>
              강퇴하기
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

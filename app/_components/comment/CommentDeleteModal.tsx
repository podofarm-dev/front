'use client';

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface CommentDeleteModalProps {
  onHandleDelete: () => void;
  onClose: () => void;
}

const CommentDeleteModal = ({ onHandleDelete, onClose }: CommentDeleteModalProps) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] [&>button]:hidden">
        <DialogHeader className="relative before:absolute before:-bottom-4 before:-left-6 before:w-[calc(100%+3rem)] before:border-b before:border-bolder">
          <DialogTitle className="text-left text-xl">코멘트 삭제</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-6">
          <span className="text-left text-base">코멘트를 완전히 삭제하시겠습니까?</span>
        </div>
        <DialogFooter className="flex flex-row justify-end sm:flex sm:flex-row sm:justify-end">
          <Button className="bg-secondary-foreground text-bolder" onClick={onClose}>
            취소
          </Button>
          <Button className="bg-warning" onClick={onHandleDelete}>
            삭제
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CommentDeleteModal;

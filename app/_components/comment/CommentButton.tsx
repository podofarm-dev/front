'use client';

import { Dispatch, SetStateAction, useState } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { Pencil, Trash2, EllipsisVertical } from 'lucide-react';
import { useDeleteCommentMutation } from '@/app/_hooks/api/useDeleteCommentMutation';
import CommentDeleteModal from './CommentDeleteModal';

interface CommentButtonProps {
  setIsModify: Dispatch<SetStateAction<boolean>>;
  codeNo: number;
  commentNo: number;
}

const CommentButton = ({ setIsModify, codeNo, commentNo }: CommentButtonProps) => {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const deleteCommentMutation = useDeleteCommentMutation();

  const onHandleDelete = () => {
    deleteCommentMutation.mutate({ codeId: String(codeNo), commentId: String(commentNo) });
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <EllipsisVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col items-center justify-center gap-2 border-0 bg-tertiary px-2 py-4 text-primary-foreground">
          <DropdownMenuItem
            className="cursor-pointer gap-4 px-10 py-3 text-center !text-primary-foreground hover:!bg-bolder"
            onClick={() => setIsModify(true)}
          >
            <div className="flex flex-row gap-4">
              <Pencil />
              <span className="text-base font-normal">수정</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer gap-4 px-10 py-3 text-center !text-primary-foreground hover:!bg-bolder"
            onClick={() => setOpenModal('delete-comment')}
          >
            <div className="flex flex-row gap-4">
              <Trash2 />
              <span className="text-base font-normal">삭제</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {openModal === 'delete-comment' && (
        <CommentDeleteModal onClose={() => setOpenModal(null)} onHandleDelete={onHandleDelete} />
      )}
    </>
  );
};

export default CommentButton;

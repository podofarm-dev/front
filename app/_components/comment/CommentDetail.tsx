'use client';

import { useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import CommentButton from '@/app/_components/comment/CommentButton';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { StudyMemberListDetail } from '@/app/_types/study';
import convertCommentDate from '@/app/_utils/convertCommentDate';
import { useUserInfoQuery } from '@/app/_hooks/api/useUserInfoQuery';
import { useUpdateCommentMutation } from '@/app/_hooks/api/useUpdateCommentMutation';

interface CommentDetailProps {
  codeNo: number;
  commentNo: number;
  member?: StudyMemberListDetail;
  date: string;
  description: string;
}

const CommentDetail = ({ codeNo, commentNo, member, date, description }: CommentDetailProps) => {
  const { userInfoData } = useUserInfoQuery();
  const memberId = userInfoData?.memberId ?? '';
  const updateCommentMutation = useUpdateCommentMutation();
  const [isModify, setIsModify] = useState(false);
  const [comment, setComment] = useState(description);

  const onHandleModify = () => {
    updateCommentMutation.mutate(
      {
        codeId: String(codeNo),
        commentId: String(commentNo),
        commentData: { commentContent: comment },
      },
      { onSuccess: () => setIsModify(false) },
    );
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center justify-between gap-4">
        <div className="flex flex-row items-center gap-4">
          <Avatar>
            <AvatarImage src={member?.imgUrl} />
            <AvatarFallback>{member?.name}</AvatarFallback>
          </Avatar>
          <div>{member?.name}</div>
          <div>{convertCommentDate(date)}</div>
        </div>
        {memberId === member?.id && (
          <CommentButton setIsModify={setIsModify} codeNo={codeNo} commentNo={commentNo} />
        )}
      </div>
      {isModify ? (
        <div className="flex flex-col items-end gap-6 pl-14">
          <Textarea
            className="h-28 resize-none rounded-lg border border-bolder bg-tertiary p-4 focus:border-accent-foreground"
            placeholder="코멘트를 남겨주세요"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="flex flex-row gap-2">
            <Button
              className="cursor-pointer border border-bolder bg-accent"
              onClick={() => setIsModify(false)}
            >
              취소
            </Button>
            <Button
              className="cursor-pointer border border-bolder bg-accent disabled:bg-secondary-foreground disabled:text-bolder disabled:opacity-100"
              disabled={comment === description}
              onClick={onHandleModify}
            >
              수정하기
            </Button>
          </div>
        </div>
      ) : (
        <span className="pl-14 pr-12">{description}</span>
      )}
    </div>
  );
};

export default CommentDetail;

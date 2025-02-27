'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import CommentDetail from '@/app/_components/comment/CommentDetail';
import { StudyMemberListDetail } from '@/app/_types/study';
import { filterMember } from '@/app/_utils/filterMember';
import { useCommentMutation } from '@/app/_hooks/api/useCommentMutation';
import { useCommentListQuery } from '@/app/_hooks/api/useCommentListQuery';

interface CommentContentProps {
  codeNo: number;
  memberDetail: StudyMemberListDetail[];
}

const CommentContent = ({ codeNo, memberDetail }: CommentContentProps) => {
  const [comment, setComment] = useState('');
  const { commentListData } = useCommentListQuery(String(codeNo));
  const commentMutation = useCommentMutation();

  const onHandleComment = () => {
    commentMutation.mutate(
      { codeId: String(codeNo), commentData: { commentContent: comment } },
      { onSuccess: () => setComment('') },
    );
  };

  return (
    <div className="flex flex-col">
      <div className="text-2xl font-semibold">코멘트</div>
      <div className="mb-14 mt-4 flex flex-col gap-14">
        {commentListData?.map((item) => (
          <CommentDetail
            key={item.codeNo}
            codeNo={item.codeNo}
            commentNo={item.commentNo}
            member={filterMember(memberDetail, item.memberId)}
            date={item.commentDate}
            description={item.commentContent}
          />
        ))}
      </div>
      <div className="flex flex-col items-end gap-6">
        <Textarea
          className="h-28 resize-none rounded-lg border border-bolder p-4 focus:border-accent-foreground"
          placeholder="코멘트를 남겨주세요"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button
          className="cursor-pointer border border-bolder bg-accent disabled:bg-secondary-foreground disabled:text-bolder disabled:opacity-100"
          disabled={!comment}
          onClick={onHandleComment}
        >
          작성하기
        </Button>
      </div>
    </div>
  );
};

export default CommentContent;

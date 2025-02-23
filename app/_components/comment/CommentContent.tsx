'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import CommentDetail from '@/app/_components/comment/CommentDetail';
import { StudyMemberListDetail } from '@/app/_types/study';
import { CommentType } from '@/app/_types/comment';
import { filterMember } from '@/app/_utils/filterMember';
import { useCommentMutation } from '@/app/_hooks/api/useCommentMutation';

interface CommentContentProps {
  memberDetail: StudyMemberListDetail[];
  commentList: CommentType[];
}

const CommentContent = ({ memberDetail, commentList }: CommentContentProps) => {
  const [comment, setComment] = useState('');
  const commentMutation = useCommentMutation();

  const onHandleComment = () => {
    //이거 codeId가 아직 결정 안되서 코드 완성 못함
    commentMutation.mutate(
      { codeId: '2', commentData: { commentContent: comment } },
      { onSuccess: () => setComment('') },
    );
  };

  return (
    <div className="flex flex-col">
      <div className="text-2xl font-semibold">코멘트</div>
      <div className="mb-14 mt-4 flex flex-col gap-14">
        {commentList?.map((item) => (
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

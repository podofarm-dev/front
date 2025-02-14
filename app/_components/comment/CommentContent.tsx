'use client';

import { Textarea } from '@/components/ui/textarea';
import { Pencil, Trash2, SendHorizontal } from 'lucide-react';

const CommentContent = () => {
  return (
    <div className="flex flex-col">
      <div className="text-base font-semibold">코멘트</div>
      <div className="flex flex-col gap-4 p-6">
        <div className="flex flex-row justify-between gap-16">
          <div>
            코멘트내용입니다.코멘트내용입니다.코멘트내용입니다.코멘트내용입니다.코멘트내용입니다.코멘트내용입니다.코멘트내용입니다.코멘트내용입니다.코멘트내용입니다.코멘트내용입니다.코멘트내용입니다.코멘트내용입니다.코멘트내용입니다.코멘트내용입니다.코멘트내용입니다.코멘트내용입니다.
          </div>
          <div className="flex flex-row gap-2">
            <Pencil className="cursor-pointer text-secondary-foreground" />
            <Trash2 className="cursor-pointer text-secondary-foreground" />
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div>유저명</div>
          <div>2025.01.22 15:77</div>
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-lg border border-bolder pr-6">
        <Textarea className="resize-none border-none focus:border-0 focus-visible:border-0 focus-visible:ring-0 focus-visible:ring-offset-0" />
        <SendHorizontal className="cursor-pointer text-secondary-foreground" />
      </div>
    </div>
  );
};

export default CommentContent;

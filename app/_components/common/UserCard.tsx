'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface UserCardProps {
  name: string;
  src: string;
  memberId: string;
  solved: string;
}

const UserCard = ({ name, src, memberId, solved }: UserCardProps) => {
  return (
    <div className="flex max-w-48 flex-col items-start justify-center gap-6 rounded-lg border border-bolder px-6 py-8">
      <div className="flex justify-between gap-6">
        <Avatar>
          <AvatarImage src={src} />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-base font-semibold">{name}</span>
          <span className="text-xs font-medium text-secondary-foreground">{memberId}</span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-secondary-foreground">해결한 문제</span>
        <span className="text-xl font-semibold">{solved}개</span>
      </div>
    </div>
  );
};

export default UserCard;

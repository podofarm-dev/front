'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface UserCardProps {
  name: string;
  src: string;
  memberId: string;
  title: string;
  content: string;
}

const UserCard = ({ name, src, memberId, title, content }: UserCardProps) => {
  return (
    <div className="relative flex max-w-48 flex-col items-start justify-center gap-6 rounded-lg border border-bolder px-6 py-8">
      <div className="flex items-center justify-between gap-6">
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
        <span className="text-sm font-semibold text-secondary-foreground">{title}</span>
        <span className="text-xl font-semibold">{content}</span>
      </div>
    </div>
  );
};

export default UserCard;

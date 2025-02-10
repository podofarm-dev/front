'use client';

interface UserSolvedListProps {
  isUser?: boolean;
  name: string;
  memberId: string;
}

const UserSolvedList = ({ isUser = false, name, memberId }: UserSolvedListProps) => {
  return (
    <div
      className={`rounded px-5 py-4 text-base text-secondary-foreground ${isUser && 'bg-accent-foreground !text-primary-foreground'}`}
    >
      {name} • {memberId}
    </div>
  );
};

export default UserSolvedList;

'use client';

interface UserSolvedListProps {
  isUser: boolean;
  name: string;
  memberId: string;
  handleCurrentMember: (value: string) => void;
}

const UserSolvedList = ({
  isUser = false,
  name,
  memberId,
  handleCurrentMember,
}: UserSolvedListProps) => {
  return (
    <div
      className={`cursor-pointer rounded px-5 py-4 text-base text-secondary-foreground ${isUser && 'bg-accent-foreground !text-primary-foreground'} hover:bg-accent-foreground hover:text-primary-foreground`}
      onClick={() => handleCurrentMember(memberId)}
    >
      {name} • {memberId}
    </div>
  );
};

export default UserSolvedList;

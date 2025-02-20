'use client';

import StudyParticipantButton from '@/app/_components/Setting/StudyParticipantButton';

interface StudyParticipantProps {
  id: string;
  name: string;
  isLeader: boolean;
}

const StudyParticipant = ({ id, name, isLeader }: StudyParticipantProps) => {
  return (
    <div className="flex flex-row justify-between px-6 py-5">
      {isLeader ? (
        <p>
          {name}・<span className="text-accent-foreground">스터디장</span>
        </p>
      ) : (
        <>
          <span>{name}</span>
          <StudyParticipantButton id={id} name={name} />
        </>
      )}
    </div>
  );
};

export default StudyParticipant;

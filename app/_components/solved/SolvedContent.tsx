'use client';

import { useState } from 'react';

import UserCard from '@/app/_components/common/UserCard';
import SolvedList from '@/app/_components/solved/SolvedList';
import UserSolvedList from '@/app/_components/solved/UserSolvedList';
import { useSolvedRankingQuery } from '@/app/_hooks/api/useSolvedRankingQuery';
import { useStudyMemberQuery } from '@/app/_hooks/api/useStudyMemberQuery';
import { useRouter, useSearchParams } from 'next/navigation';
import { PATH } from '@/app/_constants/path';
import SolvedContentSkeleton from '@/app/_components/solved/SolvedContentSkeleton';

interface SolvedContentProps {
  studyId: string;
}

const SolvedContent = ({ studyId }: SolvedContentProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const memberId = searchParams.get('memberId') ?? '';
  const [currentMember, setCurrentMember] = useState(memberId);

  const { studyMemberData } = useStudyMemberQuery(studyId);
  const { solvedRankingData } = useSolvedRankingQuery(studyId, currentMember);

  const handleCurrentMember = (memberId: string) => {
    if (currentMember !== memberId) {
      setCurrentMember(memberId);
      router.replace(PATH.STUDY_SOLVED(studyId, memberId));
    }
  };

  if (!solvedRankingData) {
    return <SolvedContentSkeleton />;
  }

  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <div className="order-2 flex w-full md:order-1 md:w-10/12">
        <SolvedList memberId={currentMember} studyId={studyId} />
      </div>
      <div className="order-1 flex w-full md:order-2 md:w-2/12">
        <div className="flex flex-col gap-10">
          {solvedRankingData && (
            <UserCard
              name={solvedRankingData.name}
              src={solvedRankingData.imgUrl}
              memberId={solvedRankingData.memberId}
              title="총 누적 현재 랭킹"
              content={`${solvedRankingData.rank}위`}
            />
          )}
          <div className="grid grid-cols-3 gap-1 md:flex md:flex-col">
            {studyMemberData &&
              studyMemberData.memberDetails.map((item) => (
                <UserSolvedList
                  key={item.id}
                  isUser={currentMember === item.id}
                  name={item.name}
                  memberId={item.id}
                  handleCurrentMember={handleCurrentMember}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolvedContent;

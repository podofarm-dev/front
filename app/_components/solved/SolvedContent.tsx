'use client';

import { Suspense, useState } from 'react';

import UserCard from '@/app/_components/common/UserCard';
import { useUserInfoQuery } from '@/app/_hooks/api/useUserInfoQuery';
import SolvedList from '@/app/_components/solved/SolvedList';
import UserSolvedList from '@/app/_components/solved/UserSolvedList';
import { useSolvedRankingQuery } from '@/app/_hooks/api/useSolvedRankingQuery';
import { useStudyMemberQuery } from '@/app/_hooks/api/useStudyMemberQuery';
import Loader from '@/app/_components/common/Loader';
import { useRouter, useSearchParams } from 'next/navigation';
import { PATH } from '@/app/_constants/path';

interface SolvedContentProps {
  studyId: string;
}

const SolvedContent = ({ studyId }: SolvedContentProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const memberId = searchParams.get('memberId') ?? '';
  const [currentMember, setCurrentMember] = useState(memberId);

  const { userInfoData } = useUserInfoQuery();
  const { studyMemberData } = useStudyMemberQuery(studyId);
  const { solvedRankingData } = useSolvedRankingQuery(studyId, String(userInfoData?.memberId));

  const handleCurrentMember = (memberId: string) => {
    if (currentMember !== memberId) {
      setCurrentMember(memberId);
      router.replace(PATH.STUDY_SOLVED(studyId, memberId));
    }
  };

  if (!solvedRankingData) {
    return <Loader />;
  }

  return (
    <div className="flex flex-row gap-6">
      <div className="flex w-10/12">
        <Suspense fallback={<Loader />}>
          <SolvedList memberId={currentMember} studyId={studyId} />
        </Suspense>
      </div>
      <div className="flex w-2/12">
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
          <div className="flex flex-col gap-1">
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

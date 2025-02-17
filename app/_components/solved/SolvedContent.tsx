'use client';

import UserCard from '@/app/_components/common/UserCard';
import { useUserInfoQuery } from '@/app/_hooks/api/useUserInfoQuery';
import SolvedList from '@/app/_components/solved/SolvedList';
import UserSolvedList from '@/app/_components/solved/UserSolvedList';
import { useSolvedRankingQuery } from '@/app/_hooks/api/useSolvedRankingQuery';
import { useSolvedListQuery } from '@/app/_hooks/api/useSolvedListQuery';
import { useStudyMemberQuery } from '@/app/_hooks/api/useStudyMemberQuery';

interface SolvedContentProps {
  studyId: string;
}

const SolvedContent = ({ studyId }: SolvedContentProps) => {
  const { userInfoData } = useUserInfoQuery();
  const memberId = userInfoData?.memberId ?? '';
  const { studyMemberData } = useStudyMemberQuery(studyId);
  const { solvedRankingData } = useSolvedRankingQuery(studyId, memberId);
  const { solvedListData } = useSolvedListQuery({ memberId });

  if (!userInfoData || !solvedRankingData) {
    return null;
  }

  return (
    <div className="flex flex-row gap-6">
      <div className="flex w-10/12">
        <SolvedList />
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
          <div className="flex flex-col">
            {studyMemberData &&
              studyMemberData.memberDetails.map((item) => (
                <UserSolvedList name={item.name} memberId={item.id} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolvedContent;

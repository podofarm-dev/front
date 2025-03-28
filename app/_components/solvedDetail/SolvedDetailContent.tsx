'use client';

import CommentContent from '@/app/_components/comment/CommentContent';

import { useSolvedContentQuery } from '@/app/_hooks/api/useSolvedContentQuery';
import { useSolvedSummaryQuery } from '@/app/_hooks/api/useSolvedSummaryQuery';
import { useStudyMemberQuery } from '@/app/_hooks/api/useStudyMemberQuery';
import { filterMember } from '@/app/_utils/filterMember';
import SolvedDetailMain from '@/app/_components/solvedDetail/SolvedDetailMain';
import { useUserInfoQuery } from '@/app/_hooks/api/useUserInfoQuery';
import SolvedDetailContentSkeleton from '@/app/_components/solvedDetail/SolvedDetailContentSkeleton';

interface SolvedDetailContentProps {
  studyId: string;
  problemId: string;
  memberId: string;
}

const SolvedDetailContent = ({ studyId, problemId, memberId }: SolvedDetailContentProps) => {
  const { userInfoData } = useUserInfoQuery();
  const { solvedContentData } = useSolvedContentQuery(problemId);
  const { solvedSummaryData } = useSolvedSummaryQuery(memberId, problemId);
  const { studyMemberData } = useStudyMemberQuery(studyId);

  if (!solvedContentData || !solvedSummaryData || !studyMemberData) {
    return <SolvedDetailContentSkeleton />;
  }

  return (
    <div className="flex flex-col gap-8 py-8">
      {solvedSummaryData.map((item) => (
        <SolvedDetailMain
          problemId={problemId}
          memberId={memberId}
          title={solvedContentData.title}
          name={filterMember(studyMemberData.memberDetails, memberId)?.name}
          description={solvedContentData.readme}
          codeTime={item.codeTime}
          codeSolvedDate={item.codeSolvedDate}
          codeSource={item.codeSource}
          problemType={item.problemType}
          codePerformance={item.codePerformance}
          codeAccuracy={item.codeAccuracy}
          isUser={userInfoData?.memberId === memberId}
        />
      ))}
      <hr className="border-bolder" />
      <CommentContent
        memberDetail={studyMemberData.memberDetails}
        codeNo={solvedSummaryData[0].codeNo}
      />
    </div>
  );
};

export default SolvedDetailContent;

'use client';

import CommentContent from '@/app/_components/comment/CommentContent';

import { useSolvedContentQuery } from '@/app/_hooks/api/useSolvedContentQuery';
import { useSolvedSummaryQuery } from '@/app/_hooks/api/useSolvedSummaryQuery';
import { useStudyMemberQuery } from '@/app/_hooks/api/useStudyMemberQuery';
import { filterMember } from '@/app/_utils/filterMember';
import Loader from '@/app/_components/common/Loader';
import SolvedDetailMain from './SolvedDetailMain';
import convertSolvedDate from '@/app/_utils/convertSolvedDate';

interface SolvedDetailContentProps {
  studyId: string;
  problemId: string;
  memberId: string;
}

const commentListData = [
  {
    commentNo: 13,
    commentContent: '좋은 풀이입니다!',
    commentDate: '2025-02-15T20:00:39.255+00:00',
    memberId: 'GKPGDV',
    codeNo: 66,
  },
  {
    commentNo: 14,
    commentContent: '이 부분을 개선할 수 있을 것 같습니다.',
    commentDate: '2025-02-15T20:00:39.255+00:00',
    memberId: 'GKPGDV',
    codeNo: 66,
  },
  {
    commentNo: 17,
    commentContent: '홍길동임다ㅁㅁㅁ',
    commentDate: '2025-02-16T06:38:07.182+00:00',
    memberId: 'DDDDDD',
    codeNo: 66,
  },
  {
    commentNo: 18,
    commentContent: '홍길동임다ㅁ22ㅁㅁ',
    commentDate: '2025-02-16T07:01:27.144+00:00',
    memberId: 'GKPGDV',
    codeNo: 66,
  },
  {
    commentNo: 19,
    commentContent: '홍길동임다ㅁ22ㅁㅁ',
    commentDate: '2025-02-16T10:01:33.057+00:00',
    memberId: 'RTT123',
    codeNo: 66,
  },
];

const SolvedDetailContent = ({ studyId, problemId, memberId }: SolvedDetailContentProps) => {
  const { solvedContentData } = useSolvedContentQuery(problemId);
  const { solvedSummaryData } = useSolvedSummaryQuery(memberId, problemId);
  const { studyMemberData } = useStudyMemberQuery(studyId);

  if (!solvedContentData || !solvedSummaryData || !studyMemberData) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col gap-8 py-8">
      {solvedSummaryData.map((item) => (
        <SolvedDetailMain
          title={solvedContentData.title}
          name={filterMember(studyMemberData.memberDetails, memberId)?.name}
          description={solvedContentData.readme}
          codeTime={item.codeTime}
          codeSolvedDate={convertSolvedDate(item.codeSolvedDate)}
          codeSource={item.codeSource}
          problemType={item.problemType}
          codePerformance={item.codePerformance}
          codeStatus={item.codeStatus}
        />
      ))}
      <CommentContent memberDetail={studyMemberData.memberDetails} commentList={commentListData} />
    </div>
  );
};

export default SolvedDetailContent;

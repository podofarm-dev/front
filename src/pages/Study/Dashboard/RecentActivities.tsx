import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Member } from ".";
import { useQueries } from "@tanstack/react-query";
import { getCodeSolvedList } from "@/services/code.service";

interface CodeActivity {
  codeId: number;
  userId: string | null;
  codeTitle: string;
  codeReadme: string | null;
  codeSource: string | null;
  codeLikes: number | null;
  codeLevel: string | null;
  codeProblemId: number;
  codeSolvedTime: number;
  codeSolveDate: string;
  userName: string;
}

interface RecentActivitiesProps {
  memberList: Member[];
}

export default function RecentActivities({
  memberList,
}: RecentActivitiesProps) {
  // useQueries를 사용하여 각 멤버의 문제 해결 내역을 가져옴
  const memberActivityQueries = useQueries({
    queries: memberList.map((member) => ({
      queryKey: ["solved-list", member.userId],
      queryFn: () => getCodeSolvedList(member.userId),
      // 최근 24시간 내의 활동만 필터링
      select: (data: CodeActivity[]) => {
        const timeLimit = new Date();
        timeLimit.setHours(timeLimit.getHours() - 24);

        return data
          .filter((activity) => {
            const activityDate = new Date(activity.codeSolveDate);
            return activityDate > timeLimit;
          })
          .map((activity) => ({
            ...activity,
            userName: member.userName,
          }));
      },
      // 1분마다 자동으로 데이터 새로고침
      refetchInterval: 60000,
    })),
  });

  // 모든 멤버의 활동 데이터를 하나의 배열로 정렬
  const formattedRecentActivities = memberActivityQueries
    .filter((query) => query.data)
    .flatMap((query) => query.data)
    .sort(
      (a, b) =>
        new Date(b?.codeSolveDate ?? "").getTime() -
        new Date(a?.codeSolveDate ?? "").getTime()
    )
    .slice(0, 10);
  console.log(formattedRecentActivities);

  return (
    <>
      {/* 최근 24시간 내 활동이 없는 경우 */}
      {!formattedRecentActivities.length && (
        <Typography>최근 24시간 동안의 활동이 없습니다.</Typography>
      )}

      {/* 최근 10건의 문제 해결 활동 렌더링 */}
      {formattedRecentActivities.map((activity) => (
        <TimeAgoTypography
          key={activity?.codeId ?? ""}
          date={activity?.codeSolveDate ?? ""}
          userName={activity?.userName ?? ""}
          problemName={activity?.codeTitle ?? ""}
        />
      ))}
    </>
  );
}

function TimeAgoTypography({
  date,
  userName,
  problemName,
}: {
  date: string;
  userName: string;
  problemName: string;
}) {
  const [timeAgo, setTimeAgo] = useState<string>("");

  const formatTimeAgo = () => {
    const submitDateTime = new Date(date);
    const diffInSeconds = Math.floor(
      (new Date().getTime() - submitDateTime.getTime()) / 1000
    );

    if (diffInSeconds > 24 * 60 * 60) return null;
    if (diffInSeconds < 60) return "방금 전에";

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `${diffInMinutes}분 전에`;

    const diffInHours = Math.floor(diffInMinutes / 60);
    return `${diffInHours}시간 전에`;
  };

  useEffect(() => {
    // 초기값 설정
    const initialTimeAgo = formatTimeAgo();
    if (initialTimeAgo) {
      setTimeAgo(initialTimeAgo);
    }

    // 1분마다 업데이트
    const interval = setInterval(() => {
      const formattedTime = formatTimeAgo();
      if (formattedTime) {
        setTimeAgo(formattedTime);
      } else {
        clearInterval(interval);
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [date]);

  return (
    <Typography variant="body1">
      {userName}님이 {timeAgo} {problemName} 을(를) 풀었습니다
    </Typography>
  );
}

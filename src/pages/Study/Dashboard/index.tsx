import { Box, Button, CardMedia, Grid2, Typography } from "@mui/material";
import { Suspense, useState } from "react";
import { Await, useLoaderData, useRouteLoaderData } from "react-router-dom";
import studyIcon from "@/assets/images/studyIcon.png";
import recentIcon from "@/assets/images/dashboard/RecentActivity.png";
import Mildo from "@/components/Mildo";
import MildoContainer from "./MildoContainer";
import RecentActivities from "./RecentActivities";
import userStore from "@/store/userStore";
import { useParams } from "react-router-dom";

export interface Member {
  userId: string;
  userName: string;
  userEmail: string;
  userParticipant: string;
  userLeader: string;
  userSolvedProblem: number;
  userTheme: string | null;
}

interface DayValue {
  day: number;
  value: number;
}

interface MonthlyData {
  month: string;
  data: {
    member: string;
    days: DayValue[];
  }[];
}

interface StudyDays {
  elapsedDays: number;
  remainingDays: number;
}

export interface DeferredData {
  memberList: Promise<Member[]>;
  studyDays: Promise<StudyDays>;
  studyName: Promise<string>;
}

interface LoaderMonthlyData {
  monthlyData: Promise<MonthlyData[]>; // MonthlyData 배열로 변경
}

const INITIAL_DISPLAY_COUNT = 6;

export default function Dashboard() {
  const { monthlyData, memberList, studyDays, studyName } = useLoaderData() as LoaderMonthlyData & DeferredData; // 월별 데이터
  const [showAll, setShowAll] = useState<boolean>(false); // 6개씩 보여주기
  const { studyId } = useParams<{ studyId: string }>(); // 스터디 아이디
  const { userId } = userStore.getState(); // 사용자 아이디

  return (
    <Box sx={{ p: 3, overflow: "hidden" }}>
      <Grid2 container size={12} className="flex flex-1">
        <Grid2 size={8} className="flex flex-1 flex-col">
          <Box className="flex justify-between items-center">
            {/* Header */}
            <Box className="flex items-center justify-center" sx={{ gap: 2 }}>
              <CardMedia
                src={studyIcon}
                sx={{ width: 50, height: 50 }}
                component={"img"}
              />
              <div className="flex flex-col items-start">
                <Suspense fallback={<Typography>Loading...</Typography>}>
                  <Await resolve={studyName}>
                    {(resolvedStudyName) => (
                      <Typography variant="h2">
                        {resolvedStudyName ?? ""}
                      </Typography>
                    )}
                  </Await>
                </Suspense>
                <Typography variant="caption">
                  사용자ID: {userId} 스터디ID: {studyId}
                </Typography>
              </div>
            </Box>
            <Box className="flex flex-col items-end justify-center">
              <Suspense fallback={<Typography>Loading...</Typography>}>
                <Await resolve={studyDays}>
                  {(resolvedDays) => (
                    <Typography>
                      스터디 진행 {resolvedDays?.elapsedDays}일째
                    </Typography>
                  )}
                </Await>
              </Suspense>
              <Box className="flex items-center" sx={{ gap: 0.5 }}>
                <Mildo count={1} />
                <Mildo count={2} />
                <Mildo count={3} />
                <Mildo count={4} />
                <Mildo count={5} />
              </Box>
            </Box>
          </Box>
          <Suspense
            fallback={
              <Box sx={{ p: 2, textAlign: "center" }}>
                <Typography>Loading data...</Typography>
              </Box>
            }
          >
            <Await resolve={Promise.all([memberList, monthlyData])}>
              {([resolvedMembers, resolvedMonthlyData]) => {
                const monthKeys = resolvedMonthlyData.sort(
                  (a: MonthlyData, b: MonthlyData) =>
                    new Date(b.month).getTime() - new Date(a.month).getTime()
                );

                const displayedMonths = showAll
                  ? monthKeys
                  : monthKeys?.slice(0, INITIAL_DISPLAY_COUNT);

                const remainingCount =
                  monthKeys?.length - INITIAL_DISPLAY_COUNT;

                return (
                  <>
                    {displayedMonths.map((monthData: MonthlyData) => (
                      <MildoContainer
                        key={`mildo-container-${studyId}-${monthData.month}`}
                        monthlyData={monthData}
                        memberList={resolvedMembers}
                      />
                    ))}
                    {monthKeys.length > INITIAL_DISPLAY_COUNT && (
                      <Box className="flex justify-center">
                        <Button
                          variant="outlined"
                          onClick={() => setShowAll((prev) => !prev)}
                          sx={{ mt: 2 }}
                        >
                          {showAll ? "접기" : `더보기 (${remainingCount}개)`}
                        </Button>
                      </Box>
                    )}
                  </>
                );
              }}
            </Await>
          </Suspense>
        </Grid2>
        <Grid2 size={4} className="flex items-center flex-1 flex-col">
          <Box className="flex justify-center items-center " sx={{ gap: 2 }}>
            <CardMedia
              src={recentIcon}
              sx={{ width: 50, height: 50 }}
              component={"img"}
            />
            <Typography variant="h2">최근 활동</Typography>
          </Box>
          <Box
            className="flex flex-col  items-center"
            sx={{
              bgcolor: "#1b1b23",
              p: 5,
              borderRadius: "24px",
              gap: 2,
              textAlign: "center",
              mt: 6.3,
              maxWidth: 500
            }}
          >
            <Suspense
              fallback={
                <Box sx={{ p: 2, textAlign: "center" }}>
                  <Typography>Loading recent activities...</Typography>
                </Box>
              }
            >
              <Await resolve={memberList}>
                {(resolvedMembers) => (
                  <RecentActivities
                    key={`recent-activities-${studyId}`}
                    memberList={resolvedMembers}
                  />
                )}
              </Await>
            </Suspense>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}

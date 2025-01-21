import Mildo from "@/components/Mildo";
import { Box, CardMedia, Typography } from "@mui/material";
import { Member } from ".";
import userIcon from "@/assets/images/user/userIconSmall.png";
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

interface MildoContainerProps {
  monthlyData: MonthlyData;
  memberList: Member[];
}

const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month, 0).getDate();
};

export default function MildoContainer({
  monthlyData,
  memberList,
}: MildoContainerProps) {
  const [year, month] = monthlyData.month.split("-").map(Number);
  const daysInMonth = getDaysInMonth(year, month);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const activeMembers = memberList.filter((member) =>
    monthlyData.data.some((data) => data.member === member.userName)
  );

  return (
    <Box
      className="flex items-start"
      sx={{
        bgcolor: "#1B1B23",
        p: 5,
        borderRadius: "24px",
        mt: "40px",
        overflow: "hidden",
        overflowX: "auto",
      }}
    >
      {/* 왼쪽 사용자명 부분 */}
      <Box
        className="flex flex-col"
        sx={{
          minWidth: "130px", // 사용자명 영역 최소 너비 설정

        }}
      >
        <Typography variant="body1" sx={{ mb: 1.5 }}>
          {/* 월 표시와 첫 사용자 사이 간격 */}
          {year}년 {month}월
        </Typography>
        {activeMembers.map((user) => (
          <Box
            className="flex items-center"
            key={user.userId}
            sx={{
              height: "32px",
              gap: 2,
            }}
          >
            <CardMedia
              src={userIcon}
              sx={{ width: 24, height: 24 }}
              component={"img"}
            />
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: 16,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {user.userName}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* 날짜별 밀도 표시 */}
      <Box className="flex" sx={{ flexGrow: 1 }}>
        {days.map((day) => (
          <Box
            key={day}
            className="flex flex-col w-8"
            sx={{
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: "#808080",
                mb: 1.5, // 날짜와 첫 번째 Mildo 사이 간격
              }}
              variant="body1"
            >
              {day}
            </Typography>
            {activeMembers.map((user) => {
              const userData = monthlyData.data.find(
                (data) => data.member === user.userName
              );
              const dayData = userData?.days.find((d) => d.day === day);
              const formattedDate = `${year}/${String(month).padStart(
                2,
                "0"
              )}/${String(day).padStart(2, "0")}`;

              return (
                <Box className="flex items-center" sx={{ height: "32px" }}>
                  <Mildo
                    key={`${user.userId}-${day}`}
                    count={dayData?.value ?? 0}
                    tooltipDate={formattedDate}
                  />
                </Box>
              );
            })}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

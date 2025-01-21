import { Box, Typography, Button, Grid2 } from "@mui/material";
import { useEffect, useState } from "react";
import Highlight from "react-highlight";
import FeatureCard from "@/pages/Landing/FeatureCard";
import TeamMember from "@/pages/Landing/TeamMember";
import StepCard from "@/pages/Landing/StepCard";
import foldlerIcon from "@/assets/images/landing/folder.png";
import userIcon from "@/assets/images/landing/userCheck.png";
import searchIcon from "@/assets/images/landing/search.png";
import studyIcon from "@/assets/images/landing/study.png";
import redBarIcon from "@/assets/images/landing/red.png";
import blueBarIcon from "@/assets/images/landing/blue.png";
import greenBarIcon from "@/assets/images/landing/green.png";
import bgImg1 from "@/assets/images/landing/landingImage1.png";
import bgImg2 from "@/assets/images/landing/landingImage2.png";
import LandingAppBar from "./LandingAppbar";
import userStore from "@/store/userStore";
import sessionStore from "@/store/useSession";

export default function LandingPage() {
  const [appBarHeight, setAppBarHeight] = useState(118);
  const codeDetail =
    '# [level 1] 크기가 작은 부분문자열 - 147355 \n\n[문제 링크](https://programmers.co.kr/) \n\n### 성능 요약\n\n메모리: 74 MB, 시간: 0.12 ms\n\n### 구분\n\n코딩테스트 연습 > 연습문제\n\n### 채점결과\n\n정확성: 100.0<br/>합계: 100.0 / 100.0\n\n### 제출 일자\n\n2024-12-16 12:42:01\n\n### 문제 설명\n\n<p>숫자로 이루어진 문자열 <code>t</code>와 <code>p</code>가 주어질 때, <code>t</code>에서 <code>p</code>와 길이가 같은 부분문자열 중에서, 이 부분문자열이 나타내는 수가 <code>p</code>가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.</p>\n\n<p>예를 들어, <code>t</code>="3141592"이고 <code>p</code>="271" 인 경우, <code>t</code>의 길이가 3인 부분 문자열은 314, 141, 415, 159, 592입니다. 이 문자열이 나타내는 수 중 271보다 작거나 같은 수는 141, 159 2개 입니다.</p>\n\n<hr>\n\n<h5>제한사항</h5>\n\n<ul>\n<li>1 ≤ <code>p</code>의 길이 ≤ 18</li>\n<li><code>p</code>의 길이 ≤ <code>t</code>의 길이 ≤ 10,000</li>\n<li><code>t</code>와 <code>p</code>는 숫자로만 이루어진 문자열이며, 0으로 시작하지 않습니다.</li>\n</ul>\n\n<hr>\n\n<h5>입출력 예</h5>\n<table class="table">\n        <thead><tr>\n<th>t</th>\n<th>p</th>\n<th>result</th>\n</tr>\n</thead>\n        <tbody><tr>\n<td>"3141592"</td>\n<td>"271"</td>\n<td>2</td>\n</tr>\n<tr>\n<td>"500220839878"</td>\n<td>"7"</td>\n<td>8</td>\n</tr>\n<tr>\n<td>"10203"</td>\n<td>"15"</td>\n<td>3</td>\n</tr>\n</tbody>\n      </table>\n<hr>\n\n<h5>입출력 예 설명</h5>\n\n<p>입출력 예 #1<br>\n본문과 같습니다.</p>\n\n<p>입출력 예 #2<br>\n<code>p</code>의 길이가 1이므로 <code>t</code>의 부분문자열은 "5", "0", 0", "2", "2", "0", "8", "3", "9", "8", "7", "8"이며 이중 7보다 작거나 같은 숫자는 "5", "0", "0", "2", "2", "0", "3", "7" 이렇게 8개가 있습니다.</p>\n\n<p>입출력 예 #3<br>\n<code>p</code>의 길이가 2이므로 <code>t</code>의 부분문자열은 "10", "02", "20", "03"이며, 이중 15보다 작거나 같은 숫자는 "10", "02", "03" 이렇게 3개입니다. "02"와 "03"은 각각 2, 3에 해당한다는 점에 주의하세요</p>\n\n\n> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges';

  return (
    <Box className="flex flex-col items-center justify-center" sx={{ bgcolor: " #101010" }}>
      <LandingAppBar setAppBarHeight={setAppBarHeight} />
      {/* Main section */}
      <div className="flex relative w-full flex-col" style={{ maxWidth: "2000px" }}>
        <Box
          className="relative"
          sx={{
            height: 2100,
            overflow: "hidden",
            "&::before": {
              // 첫 번째 큐브 (상단 오른쪽)
              content: '""',
              position: "absolute",
              top: "-1%",
              right: "-34%",
              width: "2400px",
              height: "1530px",
              transform: "rotate(-2deg)",
              backgroundImage: `url(${bgImg2})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              zIndex: 1,
            },
            "&::after": {
              // 두 번째 큐브 (하단 왼쪽)
              content: '""',
              position: "absolute",
              bottom: "-25%",
              left: "-8%",
              width: "1800px",
              height: "1277px",
              transform: "rotate(10deg)",
              backgroundImage: `url(${bgImg1})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              zIndex: 1,
            },
            "& > *": {
              position: "relative",
              zIndex: 2,
            },
          }}
        >
          {/* Main section */}
          <Box className="flex flex-col items-start" sx={{ px: 20, pt: 20 }}>
            <Box sx={{ mb: 9 }}>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "Pretendard",
                  fontStyle: "normal",
                  fontWeight: 200,
                  fontSize: "96px",
                  lineHeight: "130%",
                  letterSpacing: "-0.02em",
                  color: "#FFFFFF",
                }}
              >
                알고리즘 스터디,
                <br />
                <Typography
                  component="span"
                  variant="inherit"
                  sx={{
                    fontWeight: 700,
                    color: "#1770FF",
                  }}
                >
                  밀도
                </Typography>{" "}
                있게
              </Typography>
            </Box>

            <Typography
              variant="subtitle1"
              sx={{
                fontSize: "32px",
                letterSpacing: "-0.02em",
              }}
            >
              Mildo는 프로그래머스의 코딩테스트 기반의
              <br />
              스터디 모임 관리 서비스입니다.
            </Typography>
          </Box>

          {/* Feature Cards */}
          <Box className="flex justify-between" sx={{ px: 20, mt: 70 }}>
            <FeatureCard
              title={`인생은 작은 순간들로 만들어집니다.`}
              text={`그 순간이란 하루가
               될 수도 있고 그 하루 중
                유난히 중요했던
                몇 분이 될 수도 있습니다.`}
              color={blueBarIcon}
            />
            <FeatureCard
              title={`작은 순간을 모아 
              더 큰 이야기를 만들어보세요.`}
              text={` 매 순간을 꽉 채워
               살아 간다면  
               인생을 좀 더 길게
                느낄수 있을것입니다.`}
              color={redBarIcon}
            />
            <FeatureCard
              title={`Mildo에 인생을 
              기록해보세요.`}
              text={`Mildo는 중요한 순간을 
              기록하고 함께 공유하며,
               당신의 여정을 응원하는
               서비스입니다.`}
              color={greenBarIcon}
            />
          </Box>
        </Box>

        {/* How to Section */}

        <Grid2
          container
          size={12}
          sx={{
            px: 20,

            background: "#FFFFFF",
            py: 10,
            position: "relative", // position 추가
            zIndex: 2, // z-index 추가
          }}
        >
          <Grid2 size={12}>
            <Typography variant="h1" sx={{ color: "#1770FF", mb: 13, fontSize: 60 }}>
              How to
            </Typography>
          </Grid2>
          <StepCard
            icon={foldlerIcon}
            title="크롬 확장 프로그램 설치"
            description={`프로그래머스의 코딩테스트 연습 결과를
              Mildo로 가져옵니다.`}
          />
          <StepCard
            icon={userIcon}
            title="간편한 소셜 로그인"
            description={`구글 또는 깃허브 계정으로 빠르게 
              소셜 로그인하세요.`}
          />
          <StepCard
            icon={searchIcon}
            title="스터디 검색 및 참여"
            description={`새 스터디를 생성하거나 기존 스터디를
             검색하여 스터디에 참여하세요.`}
          />
          <StepCard
            icon={studyIcon}
            title="스터디 진행"
            description={`프로그래머스의 코딩테스트 연습 결과를 
            Mildo에서 확인할 수 있습니다.`}
          />
        </Grid2>

        {/* Team Section */}
        <Grid2 container size={12} sx={{ px: 20, my: 25 }}>
          <Grid2 size={12}>
            <Typography variant="h1" sx={{ color: "#1770FF", mb: 13, fontSize: 60 }}>
              Team
            </Typography>
          </Grid2>
          <TeamMember
            size={3}
            name="박준모"
            role={`Product
             Manager`}
            description="파이썬과 게임을 좋아하는 PM입니다."
          />
          <TeamMember
            size={3}
            name="오현지"
            role="Grph./UXUI Designer"
            description="다양한 스타일을 탐구하는 UXUI 디자이너입니다."
          />
          <TeamMember
            size={3}
            name="장형원"
            role={`Frontend 
            Engineer`}
            description="순항을 기원하는 주니어 개발자입니다."
          />
          <TeamMember
            size={3}
            name="이지훈"
            role={`Frontend 
            Engineer`}
            description="사용자 경험에 가치를 더하고싶은 개발자입니다."
          />
          <TeamMember
            size={4}
            name="우종호"
            role={`Backend
            Engineer`}
            description="소통을 중시하는 개발자입니다."
          />
          <TeamMember
            size={4}
            name="임도현"
            role={`Backend
            Engineer`}
            description="매일 발전하는 긍정적인 개발자입니다."
          />
          <TeamMember
            size={4}
            name="이성훈"
            role={`Backend
            Engineer`}
            description="최선의 코드로 가치를 더하는 개발자입니다."
          />
        </Grid2>

        {/* FAQ Section */}
        <Box className="flex " sx={{ px: 20, mt: 40, gap: 10 }}>
          <Typography variant="h1" sx={{ color: "#1770FF", mb: 6, fontSize: 60 }}>
            FAQ
          </Typography>
          <Box
            className="flex flex-col"
            sx={{
              gap: 5,
              "& > *:first-of-type": {
                borderTop: "none",
              },
            }}
          >
            <QuestionBox
              question="Mildo는 어떤 서비스인가요?"
              description={`Mildo는 스터디장과 스터디원들이 함께 학습할 수 있도록 돕는 스터디 관리 서비스입니다.
               특히 코딩 테스트를 기반으로 학습 성과를 기록하고 시각적으로 공유할 수 있는 플랫폼입니다.`}
            />
            <QuestionBox
              question="스터디는 어떻게 참여할 수 있나요?"
              description={`스터디장은 'Mildo' 플랫폼에서 스터디를 개설하고, 스터디원들은 검색을 통해 원하는 스터디에 참여할 수 있습니다. 
              참여 후, 코딩 활동 추적을 위해 크롬 확장 프로그램을 설치해야 합니다.`}
            />
            <QuestionBox
              question=" 코딩 테스트는 어떻게 진행되나요?"
              description={`스터디원들은 크롬 확장 프로그램이 설치된 브라우저를 사용해 프로그래머스에서 코딩 테스트를 풀이합니다. 
              정답 제출 시 확장 프로그램이 데이터를 자동으로 'Mildo'로 전송합니다.`}
            />
            <QuestionBox
              question="스터디 기록은 어디서 확인할 수 있나요?"
              description={`'Mildo' 플랫폼에 접속하면 스터디원 전체의 코딩 기록을 확인할 수 있습니다. 
              기록은 자동으로 업데이트되며, 스터디원들의 학습 진행 상황을 쉽게 파악할 수 있습니다.`}
            />
          </Box>
        </Box>

        {/* Footer */}
        <Box
          className="flex justify-center items-center "
          sx={{
            height: 400,
            py: 4,
          }}
        >
          <Typography variant="h1" sx={{ color: "#FFFFFF", fontFamily: "Roboto", fontSize: 45 }}>
            © 2024 Mildo. All rights reserved.
          </Typography>
        </Box>
      </div>
    </Box>
  );
}

interface QuestionProps {
  question: string;
  description: string;
}

const QuestionBox = ({ question, description }: QuestionProps) => {
  return (
    <Box
      className="flex flex-col "
      sx={{
        borderTop: "1px solid #FFFFFF",
        gap: 4,
        width: "70vw",
        pt: 3,
      }}
    >
      <Typography variant="h2" sx={{ color: "#FFFFFF", whiteSpace: "pre-line" }}>
        {question}
      </Typography>
      <Typography variant="body2" sx={{ color: "#FFFFFF", whiteSpace: "pre-line" }}>
        {description}
      </Typography>
    </Box>
  );
};

{
  /* <Button
  variant="contained"
  color="primary"
  onClick={() => {
    dialogOpen({
      id: "login-dialog",
      innerElement: <SocialLoginIDialog />,
    });
  }}
>
  로그인
</Button> */
}

// <div>
//   <AppBar>
//     <Card className="flex items-center justify-between">
//       <div className="flex items-center">
//         <IconButton>
//           <Menu />
//         </IconButton>
//         <Typography>Mildo</Typography>
//       </div>
//       <Button
//         startIcon={<Login />}
//         variant="contained"
//         color="primary"
//         onClick={() => {
//           //로그인 다이얼로그 열기 및 다이얼로그 스타일 설정
//           dialogOpen({
//             innerElement: <LoginDialog />,
//             id: "login-dialog",
//             sx: DIALOG_STYLES,
//           });
//         }}
//       >
//         로그인
//       </Button>
//       <Button
//         startIcon={<Login />}
//         variant="contained"
//         color="primary"
//         onClick={() => {
//           //로그인 다이얼로그 열기 및 다이얼로그 스타일 설정
//           dialogOpen({
//             // innerElement: <StudyCreateDialog />,
//             innerElement: <StudyJoinDialog />,
//             id: "study-create-dialog",
//             maxWidth: 'sm'
//           });
//         }}
//       >
//         스터디 생성
//       </Button>
//     </Card>
//   </AppBar>
//   <h1 style={{ marginTop: "64px" }}>Landing</h1>
//   <DialogContainer />
// </div>

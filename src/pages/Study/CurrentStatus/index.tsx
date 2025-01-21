import {
  Box,
  Button,
  CardMedia,
  FormControl,
  Grid2,
  InputAdornment,
  MenuItem,
  Pagination,
  PaginationItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { currentColor } from "@/themes";
import { Suspense, useEffect, useState } from "react";
import userStore from "@/store/userStore";
import {
  Await,
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";
import { DeferredData, Member } from "../Dashboard";
import studyIcon from "@/assets/images/studyIcon.png";
import userIcon from "@/assets/images/user/userIconMedium.png";
import solvedIcon from "@/assets/images/currentStatus/solved.png";
import rankIcon from "@/assets/images/currentStatus/ranking.png";
import daysIcon from "@/assets/images/currentStatus/days.png";
import levelIcon from "@/assets/images/currentStatus/level.png";
import firstArrowIcon from "@/assets/images/pagination/first.png";
import lastArrowIcon from "@/assets/images/pagination/last.png";
import prevArrowIcon from "@/assets/images/pagination/previous.png";
import nextArrowIcon from "@/assets/images/pagination/next.png";
import useDebounce from "@/hooks/useDebounce";

interface SolvedListProps {
  date: string;
  problemName: string;
  level: string;
  time: number;
  codeId: string;
  studyId: string;
}

interface CodeProblem {
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
}

interface TotalRank {
  rank: number;
  userName: string;
  solvedProblem: number;
  userId: string;
  studyId: string;
}

interface SolvedLevel {
  codeLevel: number | null;
  solvedCount: number;
}

interface CurrentStatusLoader {
  solvedList: Promise<CodeProblem[]>;
  totalRank: Promise<TotalRank[]>;
  solvedLevels: Promise<SolvedLevel[]>;
  totalSolved: Promise<number>;
}

export default function CurrentStatus() {
  const { userId } = userStore.getState();
  const { studyId } = useParams<{ studyId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const loaderData = useLoaderData() as CurrentStatusLoader;
  const { studyDays, memberList } = useLoaderData() as DeferredData;
  const [searchInput, setSearchInput] = useState("");
  const debounceValue = useDebounce(searchInput, 700);
  const queryParams = new URLSearchParams(location.search);
  const selectedUser = queryParams.get("selectedUser") || userId;
  const currentPage = Number(queryParams.get("cpage")) || 1;
  const category = queryParams.get("category") || "recent";
  const [searchTerm, setSearchTerm] = useState(() => {
    // URL에서 초기 검색어 가져오기
    const params = new URLSearchParams(location.search);
    return params.get("codeTitle") || "";
  });

  const handleSearch = () => {
    const params = new URLSearchParams(location.search);
    if (debounceValue) {
      params.set("cpage", "1");
      params.set("title", debounceValue);
    } else {
      params.delete("title");
    }
    navigate(`?${params.toString()}`);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    const params = new URLSearchParams(location.search);
    params.set("cpage", value.toString());
    navigate(`?${params.toString()}`);
  };

  const handleSortChange = (newCategory: string) => {
    const params = new URLSearchParams(location.search);
    params.set("category", newCategory);
    params.set("cpage", "1");
    navigate(`?${params.toString()}`);
  };

  const handleUserSelect = (newUserId: string) => {
    const params = new URLSearchParams(location.search);
    params.set("selectedUser", newUserId);
    params.set("cpage", "1");
    params.set("title", "");
    navigate(`?${params.toString()}`);
  };
  useEffect(() => {
    if (!debounceValue) return;
    console.log("here::::");
    handleSearch();
  }, [debounceValue]);
  return (
    <Box sx={{ p: 5 }} className="flex flex-col flex-1">
      <Grid2 container size={12} className="flex items-center justify-between">
        <Grid2
          size={12}
          className="flex w-full items-center"
          sx={{ mb: 3, gap: 2 }}
        >
          <CardMedia
            src={studyIcon}
            sx={{ width: 50, height: 50 }}
            component={"img"}
          />
          <Suspense fallback={<Typography>Loading members...</Typography>}>
            <Await resolve={memberList}>
              {(resolvedMembers) => {
                // userStore의 userId를 가진 멤버를 찾아서 맨 앞으로 정렬
                const sortedMembers = [...(resolvedMembers ?? [])].sort(
                  (a, b) => {
                    if (a?.userId === userId) return -1;
                    if (b?.userId === userId) return 1;
                    return 0;
                  }
                );

                return (
                  <>
                    <Typography variant="h2">
                      {userStore.getState()?.userName || ""}
                      <Typography variant="subtitle2" component={"span"}>
                        님의 스터디
                      </Typography>
                    </Typography>
                    <Box
                      className="flex items-center justify-between"
                      sx={{ gap: 3, ml: 3.5 }}
                    >
                      {sortedMembers.map(
                        (member) =>
                          member.userName && (
                            <Button
                              key={member.userId}
                              variant={
                                selectedUser === member.userId
                                  ? "contained"
                                  : "outlined"
                              }
                              onClick={() => handleUserSelect(member.userId)}
                              sx={{
                                width: "130px",
                                height: "62px",
                                borderRadius: "82px",
                              }}
                            >
                              <Box
                                className="flex items-center justify-center gap-2"
                                sx={{ gap: 1.5 }}
                              >
                                <CardMedia
                                  src={userIcon}
                                  sx={{ width: "38px", height: "38px" }}
                                  component={"img"}
                                />
                                <Typography variant="caption">
                                  {member.userName}
                                </Typography>
                              </Box>
                            </Button>
                          )
                      )}
                    </Box>
                  </>
                );
              }}
            </Await>
          </Suspense>
        </Grid2>
      </Grid2>

      <Grid2 container size={12}>
        <Grid2 size={9} sx={{ p: 2 }}>
          <Box
            className="flex flex-col flex-1 h-full"
            sx={{ bgcolor: "#1b1b23", p: 5, borderRadius: "24px" }}
          >
            <Box className="flex justify-between items-center">
              <TextField
                label="문제 내용 검색"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <FormControl>
                <Select
                  value={category}
                  onChange={(e) => handleSortChange(e.target.value)}
                  sx={{ bgcolor: currentColor }}
                >
                  <MenuItem value="level">난이도순</MenuItem>
                  <MenuItem value="recent">최근순</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Suspense
              fallback={<Typography>Loading solved problems...</Typography>}
            >
              <Await
                resolve={Promise.all([
                  loaderData.solvedList,
                  loaderData.totalSolved,
                ])}
              >
                {([resolvedSolvedList, resolvedTotalSolved]) => {
                  const calculatedTotalPages = Math.ceil(
                    resolvedTotalSolved["user_solvedproblem"] / 9
                  );
                  const urlParams = new URLSearchParams(location.search);
                  const urlSearchTerm = urlParams.get("title");

                  return (
                    <Box
                      className="flex flex-col flex-1"
                      sx={{ textAlign: "center", m: "20px 0px" }}
                      key={currentPage}
                    >
                      <Grid2
                        container
                        size={12}
                        sx={{
                          borderBottom: "1px solid #222A41",
                          pb: 1,
                          bgcolor: "#222A41",
                          pt: 2,
                          borderRadius: "12px 12px 0 0",
                        }}
                      >
                        <Grid2 size={2.5}>
                          <Typography variant="subtitle2">날짜</Typography>
                        </Grid2>
                        <Grid2 size={8}>
                          <Typography variant="subtitle2">문제</Typography>
                        </Grid2>
                        <Grid2 size={1.5}>
                          <Typography variant="subtitle2">난이도</Typography>
                        </Grid2>
                        {/* <Grid2 size={2}>
                          <Typography variant="subtitle2">시간</Typography>
                        </Grid2> */}
                      </Grid2>

                      {resolvedSolvedList.length === 0 ? (
                        <Typography
                          variant="body1"
                          sx={{ color: "#43495F", mt: 2.5 }}
                        >
                          아직 푼 문제가 없습니다.
                        </Typography>
                      ) : (
                        <>
                          {resolvedSolvedList.map(
                            (solved: CodeProblem, i: number) => {
                              return (
                                <SolvedList
                                  key={`${solved?.codeTitle}-${i}`}
                                  date={solved?.codeSolveDate ?? ""}
                                  problemName={solved?.codeTitle ?? ""}
                                  level={solved?.codeLevel ?? ""}
                                  time={solved?.codeSolvedTime ?? 0}
                                  codeId={solved?.codeId.toString() ?? ""}
                                  studyId={studyId ?? ""}
                                />
                              );
                            }
                          )}

                          {!urlSearchTerm && calculatedTotalPages > 1 && (
                            <Box className="flex w-full justify-center mt-4">
                              <Pagination
                                count={calculatedTotalPages}
                                page={currentPage}
                                onChange={handlePageChange}
                                renderItem={(item) => {
                                  if (item.type === "first") {
                                    return (
                                      <CardMedia
                                        src={firstArrowIcon}
                                        sx={{
                                          width: 24,
                                          height: 24,
                                          cursor: "pointer",
                                        }}
                                        component="img"
                                        onClick={(e) => handlePageChange(e, 1)}
                                      />
                                    );
                                  }
                                  if (item.type === "last") {
                                    return (
                                      <CardMedia
                                        src={lastArrowIcon}
                                        sx={{
                                          width: 24,
                                          height: 24,
                                          cursor: "pointer",
                                        }}
                                        component="img"
                                        onClick={(e) =>
                                          handlePageChange(
                                            e,
                                            calculatedTotalPages
                                          )
                                        }
                                      />
                                    );
                                  }
                                  if (item.type === "previous") {
                                    return (
                                      <CardMedia
                                        src={prevArrowIcon}
                                        sx={{
                                          width: 24,
                                          height: 24,
                                          cursor: "pointer",
                                        }}
                                        component="img"
                                        onClick={(e) =>
                                          handlePageChange(e, currentPage - 1)
                                        }
                                      />
                                    );
                                  }
                                  if (item.type === "next") {
                                    return (
                                      <CardMedia
                                        src={nextArrowIcon}
                                        sx={{
                                          width: 24,
                                          height: 24,
                                          cursor: "pointer",
                                        }}
                                        component="img"
                                        onClick={(e) =>
                                          handlePageChange(e, currentPage + 1)
                                        }
                                      />
                                    );
                                  }
                                  return <PaginationItem {...item} />;
                                }}
                                sx={{
                                  "& .MuiPaginationItem-root": {
                                    color: "#909090",
                                    "&.Mui-selected": {
                                      backgroundColor: "#0078FF",
                                      color: "#fff",
                                      "&:hover": {
                                        backgroundColor: "#0063D6",
                                      },
                                    },
                                    "&:hover": {
                                      backgroundColor: "rgba(0, 120, 255, 0.1)",
                                    },
                                  },
                                }}
                                boundaryCount={1}
                                siblingCount={1}
                                showFirstButton
                                showLastButton
                              />
                            </Box>
                          )}
                        </>
                      )}
                    </Box>
                  );
                }}
              </Await>
            </Suspense>
          </Box>
        </Grid2>

        <Grid2
          size={3}
          className="flex flex-col items-center "
          sx={{ p: 2, gap: 2 }}
        >
          <Box
            className="flex flex-col items-center justify-center"
            sx={{
              bgcolor: "#1b1b23",
              px: 4.5,
              py: 5,
              gap: 6,
              borderRadius: "24px",
              mb: 2.5,
            }}
          >
            <Suspense fallback={<Typography>Loading statistics...</Typography>}>
              <Await
                resolve={Promise.all([
                  loaderData.solvedList,
                  loaderData.totalRank,
                  loaderData.solvedLevels,
                  studyDays,
                ])}
              >
                {([
                  resolvedSolvedList,
                  resolvedTotalRank,
                  resolvedSolvedLevels,
                  resolvedStudyDays,
                ]) => {
                  const currentUserRank = resolvedTotalRank?.find(
                    (rank: TotalRank) => rank?.userId === selectedUser
                  );

                  return (
                    <>
                      <Box className="w-full flex flex-col" sx={{ gap: 6 }}>
                        <Box
                          className="flex w-full items-center"
                          sx={{ gap: 2 }}
                        >
                          <CardMedia
                            src={solvedIcon}
                            sx={{ width: 50, height: 50 }}
                            component={"img"}
                            className="shrink-0"
                          />
                          <Box
                            className="flex flex-col items-start flex-1"
                            sx={{ gap: 1 }}
                          >
                            <Typography
                              variant="subtitle2"
                              sx={{ color: "#43495F" }}
                            >
                              해결한 코딩 테스트
                            </Typography>
                            <Typography variant="body1">
                              총{" "}
                              {resolvedSolvedLevels.reduce(
                                (acc: number, level: SolvedLevel) =>
                                  acc + level.solvedCount,
                                0
                              )}{" "}
                              문제
                            </Typography>
                          </Box>
                        </Box>

                        <Box
                          className="flex w-full items-center"
                          sx={{ gap: 2 }}
                        >
                          <CardMedia
                            src={rankIcon}
                            sx={{ width: 50, height: 50 }}
                            component={"img"}
                            className="shrink-0"
                          />
                          <Box
                            className="flex flex-col items-start flex-1"
                            sx={{ gap: 1 }}
                          >
                            <Typography
                              variant="subtitle2"
                              sx={{ color: "#43495F" }}
                            >
                              스터디 현재 랭킹
                            </Typography>
                            <Typography variant="body1">
                              {currentUserRank
                                ? `${currentUserRank.rank} / ${resolvedTotalRank.length} 위`
                                : "랭킹 정보 없음"}
                            </Typography>
                          </Box>
                        </Box>

                        <Box
                          className="flex w-full items-center"
                          sx={{ gap: 2 }}
                        >
                          <CardMedia
                            src={daysIcon}
                            sx={{ width: 50, height: 50 }}
                            component={"img"}
                            className="shrink-0"
                          />
                          <Box
                            className="flex flex-col items-start flex-1"
                            sx={{ gap: 1 }}
                          >
                            <Typography
                              variant="subtitle2"
                              sx={{ color: "#43495F" }}
                            >
                              스터디 함께한지
                            </Typography>
                            <Typography variant="body1">
                              {resolvedStudyDays.elapsedDays}일 째
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </>
                  );
                }}
              </Await>
            </Suspense>
          </Box>

          <Box
            className="flex flex-col items-center justify-center"
            sx={{ bgcolor: "#1b1b23", p: "40px 56px", borderRadius: "24px" }}
          >
            <Box className="flex items-center justify-center" sx={{ gap: 2 }}>
              <CardMedia
                src={levelIcon}
                sx={{ width: 32, height: 32 }}
                component={"img"}
              />
              <Typography variant="h2">난이도별 문제</Typography>
            </Box>
            <Box
              className="flex flex-col items-center justify-center"
              sx={{ gap: 2.5, mt: 2.5 }}
            >
              <Suspense fallback={<Typography>Loading levels...</Typography>}>
                <Await resolve={loaderData.solvedLevels}>
                  {(resolvedLevels) =>
                    resolvedLevels.length > 0 ? (
                      resolvedLevels.map((level: SolvedLevel, i: number) => (
                        <Typography
                          key={`${level.codeLevel}-${i}`}
                          variant="body1"
                          sx={{ color: "#43495F" }}
                        >
                          Level {level.codeLevel} : {level.solvedCount}
                        </Typography>
                      ))
                    ) : (
                      <Typography variant="body1" sx={{ color: "#43495F" }}>
                        푼 문제 없음
                      </Typography>
                    )
                  }
                </Await>
              </Suspense>
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}

function SolvedList(props: SolvedListProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedUser =
    queryParams.get("selectedUser") || userStore.getState()?.userId; // 현재 선택된 유저 가져오기
  const { date, problemName, level, time, codeId, studyId } = props;
  const formatDate = date.split("T")[0];
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <Grid2
      container
      size={12}
      sx={{
        borderBottom: "1px solid #222A41",
      }}
    >
      <Grid2 size={2.5} sx={{ borderRight: "1px solid #222A41", py: 1.5 }}>
        <Typography variant="body2" sx={{ color: "#43495F" }}>
          {formatDate}
        </Typography>
      </Grid2>
      <Grid2 size={8} sx={{ borderRight: "1px solid #222A41", py: 1.5 }}>
        <Typography
          variant="body2"
          sx={{ color: "#43495F", cursor: "pointer" }}
          onClick={() => {
            navigate(
              `/study/${studyId}/current-status/code-detail/${codeId}?selectedUser=${selectedUser}`
            );
          }}
        >
          {problemName}
        </Typography>
      </Grid2>
      <Grid2 size={1.5} sx={{ py: 1.5 }}> {/* borderRight: "1px solid #222A41", */}
        <Typography variant="body2" sx={{ color: "#43495F" }}>
          {level}
        </Typography>
      </Grid2>
      {/* <Grid2 size={2} sx={{ py: 1.5 }}>
        <Typography variant="body2" sx={{ color: "#43495F" }}>
          {formatTime(time)}
        </Typography>
      </Grid2> */}
    </Grid2>
  );
}

// const SearchBar = ({ onSearch }: { onSearch: (term: string) => void }) => {
//   const [searchInput, setSearchInput] = useState("");

//   const handleSearch = () => {
//     onSearch(searchInput);
//     setSearchInput("");
//   };

//   return (
//     <TextField
//       label="문제 내용 검색"
//       value={searchInput}
//       onChange={(e) => setSearchInput(e.target.value)}
//       onKeyPress={(e) => {
//         if (e.key === "Enter") {
//           handleSearch();
//         }
//       }}
//       slotProps={{
//         input: {
//           startAdornment: (
//             <InputAdornment position="start">
//               <Search />
//             </InputAdornment>
//           ),
//         },
//       }}
//     />
//   );
// };

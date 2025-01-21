import {
  Avatar,
  Box,
  Button,
  CardMedia,
  FormControl,
  Grid2,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import studyIcon from "@/assets/images/management/studyManagement.png";
import userIcon from "@/assets/images/user/userLarge.png";
import userManagementIcon from "@/assets/images/user/userManagement.png";
import { useForm } from "react-hook-form";
import FormTextField from "@/modules/HookForm/FormTextField";
import { Suspense, useEffect, useMemo, useState } from "react";
import userStore from "@/store/userStore";
import { DeferredData, Member } from "../Dashboard";
import {
  Await,
  useLoaderData,
  useNavigate,
  useParams,
  useRevalidator,
  useRouteLoaderData,
} from "react-router-dom";
import {
  deleteStudy,
  putStudyLeader,
  putStudyName,
  secessionStudy,
} from "@/services/study.service";
import { secessionUser, patchUserInfo as patchUserInfoService } from "@/services/auth.service";
import { copyToClipboard } from "@/utils/copyToClipboard";
import userDefaultImg from "@/assets/images/management/defaultUserImage.png";
import accountImage from "@/assets/images/management/account.png";
import studyImage from "@/assets/images/management/study.png";
import { dialogOpen } from "@/modules/MuiDialog";

export default function Management() {
  const { studyId } = useParams<{ studyId: string }>();
  const { userEmail, userName, userId, userLeader, userTheme, patchUserInfo, userDate = '-' } = userStore();
  const memoTheme = useMemo(() => userTheme, [userTheme])
  const navigate = useNavigate();
  const revalidate = useRevalidator();
  const [selectedMember, setSelectedMember] = useState<any>();
  const form = useForm();
  const { studyName, memberList, studyDays } = useLoaderData() as DeferredData;


  const themeList = [
    { label: 'default', value: '#1770ff' },
    { label: 'red', value: '#ff3f3f' },
    { label: 'green', value: '#1fc62a' }
  ]
  console.log("selectedMember:::", selectedMember);
  return (
    <Box className="flex justify-center w-full">
      <Grid2
        container
        size={12}
        className="flex justify-center"
        sx={{
          maxWidth: "1500px",
          width: "100%",
          mt: 5,
        }}
      >
        {/* 계정 관리 부분 - 왼쪽 */}
        <Grid2
          size={4}
          className="flex w-full flex-col items-start"
          sx={{ p: 2 }}
        >
          <Box className="flex items-center" sx={{ gap: 1.5 }}>
            <CardMedia
              src={userManagementIcon}
              sx={{ width: 50, height: 50 }}
              component={"img"}
            />
            <Typography variant="h1">계정 관리</Typography>
          </Box>
          <Box
            sx={{
              bgcolor: "#1b1b23",
              p: 5,
              mt: 5,
              borderRadius: 3,
              width: "100%",
            }}
          >
            <Box className="flex w-full flex-col justify-center items-center">
              <Box
                className="flex items-center w-full"
                sx={{ gap: 3, mb: 5.5 }}
              >
                <Avatar src={userIcon} sx={{ width: 128, height: 128 }} />
                <Box className="flex flex-col justify-center">
                  <Typography variant="caption">이름</Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2">{userName}</Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                className="flex w-full flex-col justify-center"
                sx={{ mb: 5 }}
              >
                <Typography variant="caption">이메일</Typography>
                <Box className="w-full flex" sx={{ p: 2, bgcolor: '#111119', borderRadius: 1.5 }}>
                  <Typography variant="body2">{userEmail}</Typography>
                </Box>
              </Box>
              <Box className="flex w-full items-center  justify-between">
                <Typography variant="caption" sx={{ color: "#43495F" }}>
                  가입일
                </Typography>
                <Typography variant="caption">{userDate}</Typography>
              </Box>
            </Box>
          </Box>

          {/* 로그아웃 버튼 */}
          <Box
            sx={{
              bgcolor: "#1b1b23",
              p: 5,
              mt: 2.5,
              borderRadius: 3,
              gap: 5,
            }}
            className="flex justify-between items-center w-full"
          >
            <Box className="flex flex-col">
              <Typography variant="subtitle2">계정 로그아웃</Typography>
              <Typography variant="caption" sx={{ mt: 1, color: "#43495F" }}>
                현재 계정을 로그아웃합니다.
              </Typography>
            </Box>
            <Button
              variant="outlined"
              color="primary"
              sx={{ width: "116px", height: "40px" }}
              onClick={() => navigate(`/logout`)}
            >
              로그아웃
            </Button>
          </Box>
          {/* 계정 탈퇴 버튼 */}
          <Box
            sx={{
              bgcolor: "#1b1b23",
              p: 5,
              mt: 2.5,
              borderRadius: 3,
              gap: 5,
            }}
            className="flex justify-between items-center w-full"
          >
            <Box className="flex flex-col">
              <Typography variant="subtitle2">계정 탈퇴</Typography>
              <Typography variant="caption" sx={{ color: "#43495F" }}>
                현재 계정을 영구 탈퇴합니다.
              </Typography>
            </Box>
            <Button
              variant="outlined"
              color="error"
              sx={{ width: "116px", height: "40px" }}
              onClick={async () => {
                dialogOpen({
                  title: '계정 탈퇴하기',
                  id: 'quit-study',
                  message: '스터디 내용은 복구할 수 없습니다. <br/> 계속 진행하시겠습니까?',
                  isAllowHtml: true,
                  onConfirmed: async () => {
                    try {
                      await secessionUser(userId);
                      navigate("/");
                    } catch (error) {
                      throw error;
                    }
                  },
                  closeButtonProps: {
                    color: 'error',
                    variant: 'outlined'
                  },
                  confirmButtonProps: {
                    color: 'error',
                    variant: 'contained'
                  },
                  closeText: '취소',
                  confirmText: '탈퇴'
                })
              }}
            >
              탈퇴하기
            </Button>
          </Box>
        </Grid2>

        {/* 스터디 관리 부분 - 오른쪽 */}
        <Grid2 size={6} sx={{ p: 2 }}>
          <Box className="flex w-full items-center" sx={{ gap: 1.5 }}>
            <CardMedia
              src={studyIcon}
              sx={{ width: 50, height: 50 }}
              component={"img"}
            />
            <Typography variant="h1">스터디 관리</Typography>
          </Box>
          {!!(userLeader === "Y") ? (
            <Box
              sx={{
                bgcolor: "#1b1b23",
                p: 5,
                mt: 5,
                borderRadius: 3,
              }}
              className="flex flex-col"
            >
              <Typography variant="caption" sx={{ mb: 2 }}>
                스터디명
              </Typography>
              <Suspense
                fallback={<Typography>Loading study name...</Typography>}
              >
                <Await resolve={studyName}>
                  {(resolvedStudyName) => {
                    useEffect(() => {
                      form.setValue("studyName", resolvedStudyName ?? "");
                    }, [resolvedStudyName]);
                    return (
                      <Box className="flex w-full items-center" sx={{ gap: 2 }}>
                        <FormTextField
                          fullWidth
                          form={form}
                          name="studyName"
                          size="small"
                          value={form.watch("studyName") || ""}
                        />
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={async () => {
                            dialogOpen({
                              title: '스터디명 변경',
                              id: 'change-study-name',
                              message: '스터디명을 변경하시겠습니까?',
                              isAllowHtml: true,
                              onConfirmed: async () => {
                                try {
                                  await putStudyName(
                                    studyId || "-",
                                    form.getValues("studyName") || ""
                                  );
                                  revalidate.revalidate();
                                } catch (error) {
                                  throw error;
                                }
                              },
                              closeButtonProps: {
                                color: 'primary',
                                variant: 'outlined'
                              },
                              confirmButtonProps: {
                                color: 'primary',
                                variant: 'contained'
                              },
                              closeText: '취소',
                              confirmText: '변경'
                            })
                          }}
                        >
                          변경하기
                        </Button>
                      </Box>
                    );
                  }}
                </Await>
              </Suspense>

              <Typography variant="caption" sx={{ mb: 2 }}>
                스터디코드
              </Typography>
              <Box className="flex w-full items-center" sx={{ gap: 2 }}>
                <FormTextField
                  fullWidth
                  form={form}
                  name="studyCode"
                  size="small"
                  value={studyId}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => copyToClipboard(studyId)}
                >
                  복사하기
                </Button>
              </Box>

              {!!(userLeader === "Y") && (
                <>
                  <Typography variant="caption" sx={{ mb: 2 }}>
                    스터디장 위임
                  </Typography>
                  <Suspense
                    fallback={<Typography>Loading members...</Typography>}
                  >
                    <Await resolve={memberList}>
                      {(resolvedMembers) => {
                        useEffect(() => {
                          const filter = [...(resolvedMembers || [])].filter(
                            (member) => member?.userLeader === "Y"
                          );
                          setSelectedMember(filter[0]);
                        }, [resolvedMembers]);
                        return (
                          <Box className="flex items-center" sx={{ gap: 2 }}>
                            <FormControl fullWidth>
                              <Select
                                value={selectedMember?.userId || ""}
                                onChange={(e) => {
                                  const filter = [
                                    ...(resolvedMembers || []),
                                  ].filter(
                                    (member) =>
                                      member?.userId === e.target.value
                                  );
                                  setSelectedMember(filter[0]);
                                }}
                              >
                                {resolvedMembers?.map((member: Member) => (
                                  <MenuItem
                                    key={member?.userId}
                                    value={member?.userId}
                                  >
                                    {member?.userName}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                            <Button
                              variant="outlined"
                              disabled={!!(selectedMember?.userId === userId)}
                              onClick={async () => {
                                dialogOpen({
                                  title: '스터디장 위임',
                                  id: 'change-study-leader',
                                  message: '스터디장을 위임하시겠습니까?',
                                  isAllowHtml: true,
                                  onConfirmed: async () => {
                                    try {
                                      await putStudyLeader(
                                        studyId || "-",
                                        userId,
                                        selectedMember?.userId
                                      );
                                      revalidate.revalidate();
                                    } catch (error) {
                                      throw error;
                                    }
                                  },
                                  closeButtonProps: {
                                    color: 'primary',
                                    variant: 'outlined'
                                  },
                                  confirmButtonProps: {
                                    color: 'primary',
                                    variant: 'contained'
                                  },
                                  closeText: '취소',
                                  confirmText: '확인'
                                })
                              }}
                            >
                              변경하기
                            </Button>
                          </Box>
                        );
                      }}
                    </Await>
                  </Suspense>
                </>
              )}
            </Box>
          ) : undefined}


          <Box
            sx={{
              bgcolor: "#1b1b23",
              p: 5,
              mt: 2.5,
              borderRadius: 3,
            }}
            className="flex items-center justify-between"
          >
            <Typography variant="subtitle2">스터디 테마 색상</Typography>
            <Box className="flex items-center justify-center" sx={{ gap: 2 }}>
              {themeList.map(theme => {
                const isSelected = theme?.label === memoTheme
                return (
                  <Box key={theme.value} className="cursor-pointer" sx={{
                    width: 25, height: 25, bgcolor: theme.value,
                    borderRadius: '50%', border: !!isSelected ? '2px solid white' : undefined
                  }} onClick={async () => {
                    try {
                      await patchUserInfoService(userId, { userTheme: theme.label })
                      patchUserInfo({ userTheme: theme.label })
                      window.location.reload()
                    } catch (error) { throw error }
                  }} />

                )
              })}
            </Box>
          </Box>


          <Box
            sx={{
              bgcolor: "#1b1b23",
              p: 5,
              mt: 2.5,
              borderRadius: 3,
            }}
            className="flex flex-col"
          >
            <Typography variant="subtitle2" sx={{ mb: 2 }}>
              스터디 현황
            </Typography>
            <Suspense fallback={<Typography>Loading study days...</Typography>}>
              <Await resolve={studyDays}>
                {(resolvedDays) => (
                  <Box className="flex items-center justify-between">
                    <Box className="flex  items-center" sx={{ gap: 1.5 }}>
                      <Box sx={{ width: 8, height: 8, bgcolor: "#1FC62A" }} />
                      <Typography variant="caption">
                        {resolvedDays?.elapsedDays ?? 0}일 째 진행 중
                      </Typography>
                    </Box>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={async () => {
                        if (!!(userLeader === "Y")) {
                          // 스터디 삭제
                          dialogOpen({
                            title: '스터디 종료하기',
                            id: 'delete-study',
                            message: '종료한 스터디는 복구할 수 없습니다. <br/> 계속 진행하시겠습니까?',
                            isAllowHtml: true,
                            onConfirmed: async () => {
                              try {
                                await deleteStudy(studyId || "-");
                                navigate("/study");
                              } catch (error) {
                                throw error;
                              }
                            },
                            closeButtonProps: {
                              color: 'error',
                              variant: 'outlined'
                            },
                            confirmButtonProps: {
                              color: 'error',
                              variant: 'contained'
                            },
                            closeText: '취소',
                            confirmText: '종료'
                          })
                        } else {
                          // 스터디 탈퇴
                          dialogOpen({
                            title: '스터디 하차하기',
                            id: 'quit-study',
                            message: '스터디 내용은 복구할 수 없습니다. <br/> 계속 진행하시겠습니까?',
                            isAllowHtml: true,
                            onConfirmed: async () => {
                              try {
                                await secessionStudy(userId);
                                navigate("/study");
                              } catch (error) {
                                throw error;
                              }
                            },
                            closeButtonProps: {
                              color: 'error',
                              variant: 'outlined'
                            },
                            confirmButtonProps: {
                              color: 'error',
                              variant: 'contained'
                            },
                            closeText: '취소',
                            confirmText: '확인'
                          })
                        }
                      }}
                    >
                      {!!(userLeader === "Y") ? "삭제하기" : "탈퇴하기"}
                    </Button>
                  </Box>
                )}
              </Await>
            </Suspense>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}

import { Box, Button, CardMedia, Grid2, TextField, Typography } from "@mui/material";
// import mildoLogo from '@/assets/images/mildo-logo.png'
import { Await, useLoaderData, useLocation, useParams, useRevalidator } from "react-router-dom";
import { Suspense, useEffect, useMemo, useState } from "react";
import Highlight from "react-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

import userStore from "@/store/userStore";
import "highlight.js/styles/dracula.css";
import { LoadingButton } from "@/components/LoadingButton";
import { deleteComment, getComments, postComment } from "@/services/code.service";
import titleIcon from "@/assets/images/codeDetail/codeTitle.png";
import commentIcon from "@/assets/images/codeDetail/comment.png";
import codeIcon from "@/assets/images/codeDetail/code.png";

export default () => {
  const { codeDetail, comments } = useLoaderData() as any;
  const [commentList, setCommentList] = useState<any[]>([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const codeId = useParams().codeId || "";
  const memoCommentList = useMemo(() => {
    const result = [...(commentList || [])].length > 0;
    return !!result ? commentList : [];
  }, [commentList]);
  const userId = queryParams.get("selectedUser") || userStore.getState()?.userId;
  const [offset, setOffset] = useState(1);
  const [isEnd, setIsEnd] = useState(false);
  const [commentLoading, setCommentLoading] = useState(false);

  async function getMoreComments(targetOffset?: number) {
    try {
      setCommentLoading(true);
      await getComments(userId, codeId, targetOffset ? targetOffset : offset).then((r) => {
        console.log("r::::", r);
        if (!!targetOffset) {
          setCommentList(r);
          setOffset(1);
          setIsEnd(false);
        } else {
          setCommentList((prev) => [...prev, ...r]);
          setOffset((prev) => prev + 1);
        }
        if (Number(r?.length || 0) < 5) {
          console.log("asdf");
          setIsEnd(true);
        }
        return r;
      });
    } catch (error) {
      throw error;
    } finally {
      setCommentLoading(false);
    }
  }
  return (
    <div className="flex flex-col flex-1">
      <Suspense fallback={<>loading...</>}>
        <Await resolve={Promise.all([codeDetail, comments])}>
          {(value) => {
            const [codeDetail, comments] = value;
            useEffect(() => {
              setCommentList(comments);
              setOffset((prev) => prev + 1);
              if (comments?.length < 5) {
                setIsEnd(true);
              }
            }, [comments]);
            return (
              <Grid2 container size={12} className="flex flex-1" sx={{ mb: 10 }}>
                <Grid2 size={6} className="flex flex-col flex-1" sx={{ gap: 5, p: 4 }}>
                  <Box className="flex items-center" sx={{ gap: 2 }}>
                    <CardMedia component="img" src={titleIcon} sx={{ width: 50, height: 50 }} />
                    <Typography variant="h1">문제제목</Typography>
                  </Box>
                  <Box
                    className="flex-1 block w-full h-full"
                    sx={{
                      bgcolor: "#1b1b23",
                      borderRadius: "24px",
                      p: 5,
                      overflow: "auto",
                      maxHeight: "700px",
                    }}
                  >
                    <ReactMarkdown
                      children={codeDetail?.codeReadme || ""}
                      rehypePlugins={[rehypeRaw]} // HTML 태그를 허용
                      remarkPlugins={[remarkGfm]} // GFM 문법 지원
                      components={{
                        h1: ({ node, ...props }) => (
                          <Typography
                            variant="h4"
                            component="h1"
                            sx={{ fontWeight: "bold", color: "#FFD700" }}
                            {...(props as React.HTMLAttributes<HTMLHeadingElement>)}
                          />
                        ),
                        h3: ({ node, ...props }) => (
                          <Typography
                            variant="h6"
                            component="h3"
                            sx={{ fontWeight: "bold", color: "#ADFF2F" }}
                            {...(props as React.HTMLAttributes<HTMLHeadingElement>)}
                          />
                        ),
                        h5: ({ node, ...props }) => (
                          <Typography
                            variant="h6"
                            component="h5"
                            sx={{ fontWeight: "bold", color: "#281aa8" }}
                            {...(props as React.HTMLAttributes<HTMLHeadingElement>)}
                          />
                        ),
                        p: ({ node, ...props }) => (
                          <Typography
                            variant="body1"
                            component="p"
                            sx={{ lineHeight: 1.8, color: "#FFFFFF" }}
                            {...(props as React.HTMLAttributes<HTMLHeadingElement>)}
                          />
                        ),
                        code({ node, className, children, ...props }) {
                          const isInline = (props as any).inline ?? false;
                          const match = /language-(\w+)/.exec(className || "");
                          return !isInline && match ? (
                            <Highlight className={match[1]}>{String(children).trim()}</Highlight>
                          ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          );
                        },
                      }}
                    />
                    {/* <div
                                  dangerouslySetInnerHTML={{ __html: codeDetail?.codeReadme || "" }}
                                /> */}
                  </Box>

                  <Box className="flex items-center" sx={{ gap: 2 }}>
                    <CardMedia component="img" src={commentIcon} sx={{ width: 50, height: 50 }} />
                    <Typography variant="h1">코멘트</Typography>
                  </Box>
                  <Box
                    className="flex flex-col w-full"
                    sx={{
                      bgcolor: "#1b1b23",
                      borderRadius: "24px",
                      p: 5,
                      overflow: "auto",
                      gap: 4,
                    }}
                  >
                    <Box
                      className="flex flex-col w-full"
                      sx={{
                        gap: 2,
                        maxHeight: "500px",
                        overflow: "auto",
                      }}
                    >
                      {memoCommentList?.map((comment: any) => {
                        const isMine = comment?.userId === userId;
                        return (
                          <CommentItem
                            getMoreComments={getMoreComments}
                            key={comment?.commentId}
                            comment={comment}
                            isMine={isMine}
                          />
                        );
                      })}
                      {!isEnd && (
                        <Box className="flex items-center justify-center w-full">
                          <Button
                            variant="contained"
                            size="large"
                            sx={{ borderRadius: "24px" }}
                            onClick={async () => {
                              await getMoreComments();
                            }}
                          >
                            <Typography variant="h6">더 불러오기</Typography>
                          </Button>
                        </Box>
                      )}
                    </Box>
                    <CommentInput getMoreComments={getMoreComments} />
                  </Box>
                </Grid2>
                <Grid2 size={6} className="flex flex-col flex-1" sx={{ gap: 5, p: 4 }}>
                  <Box className="flex items-center" sx={{ gap: 2 }}>
                    <CardMedia component="img" src={codeIcon} sx={{ width: 50, height: 50 }} />
                    <Typography variant="h1">코드</Typography>
                  </Box>
                  <Box
                    className="flex h-full"
                    sx={{
                      // bgcolor: '#1b1b23',
                      borderRadius: "24px",
                    }}
                  >
                    <Highlight className="java w-full h-full rounded-lg p-10">
                      <div style={{ width: "30vw" }}>
                        <Typography sx={{ whiteSpace: "pre-wrap" }}>
                          {String(codeDetail?.codeSource)?.split("```java")[1]}
                        </Typography>
                      </div>
                    </Highlight>
                  </Box>
                </Grid2>
              </Grid2>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
};

function CommentItem({
  comment,
  isMine,
  getMoreComments,
}: {
  comment: any;
  isMine: boolean;
  getMoreComments: (targetOffset: number) => void;
}) {
  const revalidate = useRevalidator();
  const { codeId } = useParams();
  return (
    <Box key={comment?.commentId} className="flex items-center w-full" sx={{ gap: 2 }}>
      <Typography variant="body1">{comment?.userName || "닉네임"}:</Typography>
      <Typography variant="body1">{comment?.commentContent || ""}</Typography>
      {!!isMine && (
        <Button
          size="large"
          sx={{ color: "gray" }}
          onClick={async () => {
            await deleteComment(codeId || "", comment?.commentId);
            getMoreComments(1);
            // revalidate.revalidate()
          }}
        >
          삭제
        </Button>
      )}
    </Box>
  );
}

function CommentInput({ getMoreComments }: { getMoreComments: (targetOffset: number) => void }) {
  const userId = userStore.getState()?.userId || "";
  const codeId = useParams().codeId || "";
  const revalidate = useRevalidator();
  const [isLoading, setIsLoading] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  async function handleSubmit() {
    try {
      setIsLoading(true);
      await postComment(userId, codeId, commentValue);
      setCommentValue("");
      getMoreComments(1);
      // revalidate.revalidate()
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <Box className="flex items-center w-full" sx={{ gap: 2 }}>
      <TextField
        sx={{ pb: 0 }}
        fullWidth
        placeholder="코멘트를 입력하세요."
        value={commentValue}
        onChange={(e) => setCommentValue(e.target.value)}
      />
      <LoadingButton
        variant="contained"
        size="large"
        sx={{ py: 2, borderRadius: "24px" }}
        onClick={handleSubmit}
        isLoading={isLoading}
      >
        <Typography variant="body1">등록하기</Typography>
      </LoadingButton>
    </Box>
  );
}

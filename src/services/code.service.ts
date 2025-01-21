import axiosApi from "@/helpers/api_helper";

export const getCodeDetail = async (userId: string, codeId: string) => {
  try {
    return await axiosApi.get(`/code/${userId}/${codeId}/getCodeByProblemId`).then(r => r?.data || {})
  } catch (error) {
    throw error;
  }
};

export const getComments = async (userId: string, codeId: string, cpage: number) => {
  try {
    return await axiosApi.get(`/code/${userId}/${codeId}/getCommentList?cpage=${cpage}`).then(r => r?.data || {})
  } catch (error) {
    throw error;
  }
};
export const postComment = async (
  userId: string,
  codeId: string,
  comment: string
) => {
  try {
    return await axiosApi
      .post(`/code/${codeId}/comment`, { commentContent: comment, userId, codeId })
      .then((r) => r?.data || {});
  } catch (error) {
    throw error;
  }
};

export const deleteComment = async (codeId: string, commentId: string) => {
  try {
    return await axiosApi.delete(`/code/${codeId}/commentDelete?comment=${commentId}`).then(r => r?.data || {})
  } catch (error) {
    throw error;
  }
}

export const getCodeSolvedList = async (
  userId: string,
  page?: number,
  category?: string,
  title?: string
) => {
  try {
    const params = {
      cpage: page,
      ...(category && { category }),
      ...(title && { title }),
    };
    const url = `/code/${userId}/solvedList`;
    return await axiosApi.get(url, { params }).then((r) => r?.data || {});
  } catch (error) {
    throw error;
  }
};
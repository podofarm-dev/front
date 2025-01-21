import axiosApi from "@/helpers/api_helper";

export const getStudyMemberList = async (studyId: string) => {
  try {
    return await axiosApi
      .get(`/study/${studyId || '-'}/memberList`)
      .then((r) => r?.data || {});
  } catch (error) {
    throw error;
  }
};

export const getMonthlyData = async (studyId: string) => {
  try {
    return await axiosApi
      .get(`/study/${studyId || '-'}/monthData`)
      .then((r) => r?.data || {});
  } catch (error) {
    throw error;
  }
};

export const getStudyDays = async (studyId: string) => {
  try {
    return await axiosApi
      .get(`/study/${studyId || '-'}/studyDays`)
      .then((r) => r?.data || {});
  } catch (error) {
    throw error;
  }
};
export const postNewStudy = async (
  userId: string,
  payload: { studyName?: string; studyPassword: string }
) => {
  try {
    return await axiosApi
      .post(`/study/${userId}/create`, { ...payload })
      .then((r) => r?.data || {});
  } catch (error) {
    throw error;
  }
};

export const joinStudy = async (
  userId: string,
  payload: { studyId?: string; password: string }
) => {
  try {
    return await axiosApi
      .put(`/study/enterStudy`, { ...payload, userId })
      .then((r) => r?.data || {});
  } catch (error) {
    throw error;
  }
};

export const secessionStudy = async (userId: string) => {
  try {
    return await axiosApi.get(`/user/${userId || '-'}/studyOut`)
  } catch (error) { throw error }
}

export const deleteStudy = async (studyId: string) => {
  try {
    return await axiosApi.delete(`/study/${studyId || '-'}/delete-study`)
  } catch (error) { throw error }
}

export const getStudyName = async (studyId: string) => {
  try {
    return await axiosApi
      .get(`/study/${studyId || '-'}/studyName`)
      .then((r) => r?.data || "");
  } catch (error) {
    throw error;
  }
};

export const getTotalRank = async (studyId: string) => {
  try {
    return await axiosApi
      .get(`/study/${studyId || '-'}/rank`)
      .then((r) => r?.data || {});
  } catch (error) {
    throw error;
  }
};

export const putStudyLeader = async (studyId: string, userId: string, newLeaderId: string) => {
  try {
    return await axiosApi.put(`/study/${studyId || '-'}/update-leader`, { userId, newLeaderId })
  } catch (error) { throw error }
}

export const putStudyName = async (studyId: string, studyName: string) => {
  try {
    return await axiosApi.put(`/study/${studyId || '-'}/rename`, { studyName })
  } catch (error) { throw error }
}

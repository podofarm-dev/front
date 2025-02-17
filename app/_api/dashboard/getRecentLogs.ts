import { axiosInstance } from '@/app/_api/axiosInstance';
import { END_POINTS } from '@/app/_constants/api';
import { RecentLogList } from '@/app/_types/dashboard';

const getRecentLogs = async (studyId: string) => {
  const { data } = await axiosInstance.get<RecentLogList>(END_POINTS.RECENT_LOGS(studyId));

  return data.data;
};

export default getRecentLogs;

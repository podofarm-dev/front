import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { StudyInfoData } from '@/app/_types/study';
import getStudyInfo from '@/app/_api/study/getStudyInfo';

export const useStudyInfoQuery = (studyId: string) => {
  const { data: studyInfoData } = useQuery<StudyInfoData, AxiosError>({
    queryKey: ['study-info', studyId],
    queryFn: () => getStudyInfo(studyId),
  });

  return { studyInfoData };
};

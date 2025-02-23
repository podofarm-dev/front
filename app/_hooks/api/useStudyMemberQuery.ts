import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';

import { StudyMemberData } from '@/app/_types/study';
import getStudyMember from '@/app/_api/study/getStudyMember';

export const useStudyMemberQuery = (studyId: string) => {
  const { data: studyMemberData } = useQuery<StudyMemberData, AxiosError>({
    queryKey: ['study', studyId],
    queryFn: () => getStudyMember(studyId),
  });

  return { studyMemberData };
};

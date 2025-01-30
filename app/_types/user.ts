export interface UserState {
  userId: string;
  studyId: string;
  userNo: number;
  userName: string;
  userGoogleId: string;
  userEmail: string;
  userParticipant: string;
  userLeader: 'Y' | 'N';
  userSolvedProblem: number;
  userTheme: string;
  userDate: string;
}

export interface TokenRequestBody {
  memberId: string;
}

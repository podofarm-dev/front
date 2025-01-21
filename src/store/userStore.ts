import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserState {
  userId: string;
  studyId: string;
  userNo: number;
  userName: string;
  userGoogleId: string;
  userEmail: string;
  userParticipant: string;
  userLeader: "Y" | "N";
  userSolvedProblem: number;
  userTheme: string;
  userDate: string;
}
interface UserStatePatch {
  userId?: string;
  studyId?: string;
  userNo?: number;
  userName?: string;
  userGoogleId?: string;
  userEmail?: string;
  userParticipant?: string;
  userLeader?: "Y" | "N";
  userSolvedProblem?: number;
  userTheme?: string;
  userDate?: string;
}

interface UserStore extends UserState {
  setUserInfo: (user: UserState) => void;
  patchUserInfo: (user: UserStatePatch) => void;
  clearUser: () => void;
}

const userInitData: UserState = {
  userId: "",
  studyId: "",
  userNo: 0,
  userName: "",
  userGoogleId: "",
  userEmail: "",
  userParticipant: "",
  userLeader: "N",
  userSolvedProblem: 0,
  userTheme: "default",
  userDate:''
};

const userStore = create<UserStore>()(
  persist(
    (set) => ({
      ...userInitData,
      setUserInfo: (user: UserState) => {
        set((state) => ({
          ...state,
          ...user,
        }));
      },
      patchUserInfo: (user: UserStatePatch) => {
        set((state) => ({
          // id: user?.id || state?.id,
          userId: user?.userId || state?.userId,
          studyId: user?.studyId || state?.studyId,
          userNo: user?.userNo || state?.userNo,
          userName: user?.userName || state?.userName,
          userGoogleId: user?.userGoogleId || state?.userGoogleId,
          userEmail: user?.userEmail || state?.userEmail,
          userParticipant: user?.userParticipant || state?.userParticipant,
          userLeader: user?.userLeader || state?.userLeader,
          userSolvedProblem:
            user?.userSolvedProblem || state?.userSolvedProblem,
          userTheme: user?.userTheme || state?.userTheme,
          userDate: user?.userDate || state?.userDate,
        }));
      },
      clearUser: () => {
        set(userInitData);
      },
    }),
    {
      name: "mildo-user",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default userStore;

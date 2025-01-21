// defer 함수는 v7 버전에서 삭제 예정. v6 버전까지는 사용 가능함
import { Outlet, createBrowserRouter, defer, redirect } from "react-router-dom";
import sessionStore from "../store/useSession";
import TemplateDemo from "../pages/Template";
import ButtonDemos from "../pages/Template/Buttons";
import StudyLayout from "@/layout/StudyLayout";
import { env } from "@/constant/configure";
import {
  getAccessToken,
  getUserInfo,
  getUserSolvedLevels,
  getUserTotalSolved,
  googleLogout,
} from "@/services/auth.service";
import axiosApi from "@/helpers/api_helper";
import Landing from "@/pages/Landing";
import StudyDashboard from "@/pages/Study/Dashboard";
import StudyCurrentStatus from "@/pages/Study/CurrentStatus";
import StudyManagement from "@/pages/Study/Management";
import Privacy from "@/pages/Privacy";
import {
  getMonthlyData,
  getStudyDays,
  getStudyMemberList,
  getStudyName,
  getTotalRank,
} from "@/services/study.service";
import Search from "@/pages/Study/Search";
import CodeDetail from "@/pages/Study/CurrentStatus/CodeDetail";
import userStore from "@/store/userStore";
import {
  getCodeDetail,
  getCodeSolvedList,
  getComments,
} from "@/services/code.service";
import ErrorComponent from "./ErrorComponent";

const router = createBrowserRouter([
  {
    path: "",
    element: <Landing />,
    errorElement: <ErrorComponent />,
    loader: () => {
      // defer 함수는 비동기처리를 도와주는 함수.
      // 렌더링 컴포넌트 쪽에서 Suspense 및 Await 컴포넌트와 함께 사용할 수 있다.
      // API 호출 시 반드시 await 걸지 않도록 해야 한다.
      const { patchSessionInfo } = sessionStore.getState();
      patchSessionInfo({});
      return defer({});
    },
  },
  {
    path: "social-login/:social",
    element: <></>,
    errorElement: <ErrorComponent />,
    loader: async (to) => {
      try {
        const queryString = new URLSearchParams(window.location.search);
        const userId = String(queryString.get("userId"));
        const token = await getAccessToken(userId).then(
          (r) => r?.access_token || ""
        );
        axiosApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const userInfo = await getUserInfo(userId);
        const studyId = userInfo?.studyId || "";
        if (!!studyId) {
          return redirect(`/study/${studyId}/dashboard`);
        } else {
          return redirect("/study/search");
        }
      } catch (error) {
        return redirect("/");
      }
    },
  },
  {
    path: "study",
    element: <StudyLayout />,
    errorElement: <ErrorComponent />,
    id: "study-loader",
    loader: async (to) => {
      const userId = userStore.getState()?.userId || "";
      if (!userId) return redirect("/");
      await getUserInfo(userId);
      // return defer({
      //   memberList: getStudyMemberList(to?.params?.studyId || "").catch(
      //     () => []
      //   ),
      //   studyDays: getStudyDays(to?.params?.studyId || "").catch(() => []),
      //   studyName: getStudyName(to?.params?.studyId || "").catch(() => ""),
      // });
      return true;
    },
    children: [
      {
        path: "",
        loader: () => {
          return redirect("/study/search");
        },
      },
      {
        path: "search",
        element: <Search />,
        errorElement: <ErrorComponent />,
        loader: async () => {
          const userId = userStore.getState()?.userId || "";
          if (!!userId) {
            const studyId = await getUserInfo(userId).then(
              (r) => r?.studyId || ""
            );
            if (!!studyId) {
              return redirect(`/study/${studyId}/dashboard`);
            }
          }
          return true;
        },
      },
      {
        path: ":studyId/dashboard",
        element: <StudyDashboard />,
        errorElement: <ErrorComponent />,
        loader: async (to) => {
          return defer({
            monthlyData: getMonthlyData(to?.params?.studyId || "").catch(
              () => []
            ),
            memberList: getStudyMemberList(to?.params?.studyId || "").catch(
              () => []
            ),
            studyDays: getStudyDays(to?.params?.studyId || "").catch(() => []),
            studyName: getStudyName(to?.params?.studyId || "").catch(() => ""),
          });
        },
      },
      {
        path: ":studyId/current-status",
        element: <StudyCurrentStatus />,
        errorElement: <ErrorComponent />,
        loader: async (to) => {
          const { userId } = userStore.getState();
          const url = new URL(to.request.url);
          const page = Number(url.searchParams.get("cpage") || "1");
          const selectedUser = url.searchParams.get("selectedUser") || userId;
          const category = url.searchParams.get("category") || "";
          const title = url.searchParams.get("title") || "";

          return defer({
            solvedList: getCodeSolvedList(
              selectedUser,
              page,
              category,
              title
            ).catch(() => []),
            solvedLevels: getUserSolvedLevels(selectedUser).catch(() => []),
            totalRank: getTotalRank(to?.params?.studyId || "").catch(() => []),
            totalSolved: getUserTotalSolved(selectedUser).catch(() => 0),
            memberList: getStudyMemberList(to?.params?.studyId || "").catch(
              () => []
            ),
            studyDays: getStudyDays(to?.params?.studyId || "").catch(() => []),
          });
        },
      },
      {
        path: ":studyId/current-status/code-detail/:codeId",
        element: <CodeDetail />,
        errorElement: <ErrorComponent />,
        loader: async (to) => {
          const url = new URL(to.request.url);
          const userId =
            url.searchParams.get("selectedUser") ||
            userStore.getState()?.userId ||
            "";

          return defer({
            codeDetail: getCodeDetail(userId, to?.params?.codeId || "").catch(
              () => {}
            ),
            comments: getComments(userId, to?.params?.codeId || "", 1).catch(
              () => []
            ),
          });
        },
      },
      {
        path: ":studyId/management",
        element: <StudyManagement />,
        errorElement: <ErrorComponent />,
        loader: async (to) => {
          return defer({
            memberList: getStudyMemberList(to?.params?.studyId || "").catch(
              () => []
            ),
            studyDays: getStudyDays(to?.params?.studyId || "").catch(() => []),
            studyName: getStudyName(to?.params?.studyId || "").catch(() => ""),
          });
        },
      },
    ],
  },
  {
    path: "/privacy",
    element: <Privacy />,
    errorElement: <ErrorComponent />,
  },
  {
    path: "/logout",
    loader: async (to) => {
      const userId = userStore.getState()?.userId || "-";
      try {
        await googleLogout(userId);
      } catch (error) {
      } finally {
        return redirect("/");
      }
    },
  },
  {
    path: "/template-demo",
    element: <TemplateDemo />,
    loader: (to) => {
      if (env !== "prd") {
        return true;
      } else {
        return redirect("/");
      }
    },
    children: [
      {
        path: "buttons",
        element: <ButtonDemos />,
      },
    ],
  },
]);
export default router;

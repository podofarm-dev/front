import { env } from "./constant/configure";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./helpers/loader_helper";
import { useEffect } from "react";
import sessionStore from "./store/useSession";
import { checkRefreshToken, getRenewToken } from "./services/auth.service";
import axiosApi from "./helpers/api_helper";

if (env === "prd") {
  // 운영서버에서는 개발자도구에 console이 노출되지 않도록 하는 장치.
  const console: any = window.console || {};
  const methods = ["log", "debug", "warn", "info"];
  methods.forEach((method) => {
    if (!!console[method]) console[method] = () => { };
  });
}

function App() {
  useEffect(() => {
    (async () => {
      const { access_token, expires_in } = sessionStore.getState()
      if (!!access_token && !!expires_in) return;
      const check = await checkRefreshToken()
      console.log(check)
      if (!!check) {
        const { accessToken, expirationTime } = await getRenewToken()
        sessionStore.setState({ access_token: accessToken, expires_in: expirationTime })
        axiosApi.defaults.headers.common["Authorization"] = !!accessToken ? `Bearer ${accessToken}` : undefined;
      } else {
        router.navigate('/')
      }
    })()
  }, [])
  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} fallbackElement={<></>} />
      </QueryClientProvider>
    </div>
  );
}

export default App;

import axios from "axios";
import sessionStore from "../store/useSession";
import router from "../router";
import { apiUrl } from "@/constant/configure";
import { getRenewToken } from "@/services/auth.service";

const token = sessionStore.getState()?.access_token || ''
axios.defaults.withCredentials = true
const axiosApi = axios.create({
    baseURL: apiUrl
})
axiosApi.defaults.headers.common["Authorization"] = !!token ? `Bearer ${token}` : undefined;

const tokenExpiredCode = 205;

axiosApi.interceptors.request.use(
    async config => {
        return config
    }
)
axiosApi.interceptors.response.use(
    async function (res) {
        if (res.status === tokenExpiredCode) {
            try {
                const { accessToken, expirationTime } = await getRenewToken()
                sessionStore.setState({ access_token: accessToken, expires_in: expirationTime })
                axiosApi.defaults.headers.common["Authorization"] = !!token ? `Bearer ${accessToken}` : undefined;
                res.config.headers.Authorization = `Bearer ${accessToken}`;
                return axiosApi(res.config)
            } catch (error) {
                router.navigate('/logout')
            }
        }
        return res
    },
    async function (error) {
        const { response } = error
        if (response.status === 401) {
            router.navigate('/logout')
        }
        return Promise.reject(response || error);
    }
)
export default axiosApi
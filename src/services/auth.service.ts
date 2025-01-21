import axiosApi from "@/helpers/api_helper"
import userStore from "@/store/userStore"
import sessionStore from "@/store/useSession"

const { clearUser } = userStore.getState()

export const postSocialLogin = async (payload: any) => {
    try {
        return await axiosApi.post(`/login`, {}).then(r => r?.data || {})
    } catch (err) { throw err }
}

export const getAccessToken = async (userId: string) => {
    try {
        const response = await axiosApi.get(`/user/${userId}/tokenInfo`).then(r => r?.data || {})
        const { accessToken: access_token = '', expirationTime: expires_in = '' } = response
        if (!!access_token) {
            sessionStore.setState({ access_token, expires_in })
            axiosApi.defaults.headers.common["Authorization"] = `Bearer ${access_token}`
        }
        return { access_token, expires_in }
    } catch (error) { throw error }
}
export const getRenewToken = async () => {
    try {
        return await axiosApi.get(`/new-token`).then(r => r?.data || {})
    } catch (error) { throw error }
}
export const checkRefreshToken = async () => {
    try {
        return await axiosApi.get(`/check-token`).then(r => r?.data || false)
    } catch (error) { throw error }
}
export const getUserInfo = async (userId: string) => {
    try {
        const userInfo = await axiosApi.get(`/user/${userId}/info`).then(r => r?.data || {})
        if (!!userInfo?.userId) {
            userStore.setState({
                ...userInfo
            })
        }
        return userInfo
    } catch (error) { throw error }
}
export const logout = async () => {
    try {
        clearUser()
        sessionStore.setState({ access_token: '', expires_in: '' })
        axiosApi.defaults.headers.common["Authorization"] = ''
        await axiosApi.post(`/google-logout`).catch(() => { })
    } catch (error) { throw error }
}

export const getUserSolvedLevels = async (userId: string) => {
    try {
        return await axiosApi.get(`user/${userId}/solvedLevels`).then((r) => r?.data || {});
    } catch (error) { throw error }
};
export const googleLogout = async (userId: string) => {
    try {
        clearUser()
        sessionStore.setState({ access_token: '', expires_in: '' })
        axiosApi.defaults.headers.common["Authorization"] = ''
        await axiosApi.post(`/user/${userId}/google-logout`).catch(() => { })
    } catch (error) { throw error }
}

export const secessionUser = async (userId: string) => {
    try {
        return await axiosApi.delete(`/user/${userId || '-'}/secession`).then((r) => r?.data || {})
    } catch (error) { throw error }
}

export const patchUserInfo = async (userId: string, payload: any) => {
    try {
        return await axiosApi.patch(`/user/${userId}`, payload).then((r) => r?.data || {})
    } catch (error) { throw error }
}




export const getUserTotalSolved = async (userId: string) => {
    try {
        return await axiosApi.get(`/user/${userId}/userTotalSolved`).then((r) => r?.data || {})
    } catch (error) { throw error }
}

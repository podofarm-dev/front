import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

interface SessionState {
    access_token: string;
    expires_in: string;
}
interface SessionStatePatch {
    access_token?: string;
    expires_in?: string;
}
interface SessionStore extends SessionState {
    setSessionInfo: (session: SessionState) => void;
    patchSessionInfo: (session: SessionStatePatch) => void
    clearSession: () => void
}
const sessionInitData: SessionState = {
    access_token: '',
    expires_in: ''
}
const sessionStore = create<SessionStore>()(persist((set) => ({
    ...sessionInitData,
    setSessionInfo: (session: SessionState) => {
        console.log('session::::', session)
        set((state) => ({
            ...state,
            ...session
        }))
    },
    patchSessionInfo: (session: SessionStatePatch) => {
        set((state) => ({
            access_token: session?.access_token || state?.access_token,
            expires_in: session?.expires_in || state?.expires_in,
        }))
    },
    clearSession: () => { set(sessionInitData) }
}), {
    name: 'mildo-session',
    storage: createJSONStorage(() => localStorage)
}))
export default sessionStore
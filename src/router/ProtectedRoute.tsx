import { Navigate } from "react-router-dom"

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const isToken = false
    return (
        <>
            {!!isToken ? children : <Navigate to="/login" replace />}
        </>
    )
}
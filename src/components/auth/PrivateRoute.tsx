import { useUser } from "@/hooks/useUser"
import { Navigate } from "react-router-dom"

// 유저의 정보를 받아서 어떤페이지로 보낼지 결정
export default function PrivateRoute({
  children,
}: {
  children: React.ReactNode
}) {
  const user = useUser()
  if (!user) return <Navigate to="/signin" replace={true} />
  return <>{children}</>
}

import React, { useState } from "react"
import { useSetRecoilState } from "recoil"
import { userAtom } from "@/atoms/user"

import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/remote/firebase"

// 인증 처리 컴포넌트
export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [initalize, setInitialize] = useState(false)
  const setUser = useSetRecoilState(userAtom)

  //유저에 대한 인증상태 변경시 발생
  onAuthStateChanged(auth, (user) => {
    setInitialize(true)
    if (!user) return setUser(null)
    setUser({
      uid: user.uid,
      email: user.email ?? "",
      displayName: user.displayName ?? "",
    })
  })

  if (!initalize) return null
  return <>{children}</>
}

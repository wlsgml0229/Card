import { useRecoilValue } from "recoil"
import { userAtom } from "@/atoms/user"

export function useUser() {
  return useRecoilValue(userAtom)
}

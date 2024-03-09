import { useEffect } from "react"
import { useLocation } from "react-router-dom"

//pathname 이 바뀔때 마다 스크롤을 최상단으로 이동
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

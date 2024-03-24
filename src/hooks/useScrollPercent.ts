import { useState, useEffect } from "react"
export function useScrollPercent() {
  const [scrollPercent, setScrollPercent] = useState(0)

  const handleScroll = () => {
    console.log(document.body.scrollHeight)
    const scrollHeight = document.body.scrollHeight
    const scrollRealHegiht = scrollHeight - window.innerHeight

    const scrollPercent = (window.scrollY / scrollRealHegiht) * 100
    setScrollPercent(scrollPercent)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return scrollPercent
}

import AdBanners from "@/components/home/AdBanners"
import Top from "@/components/shared/Top"
import { getAdBanners } from "@/remote/adBanner"
import { getCards } from "@/remote/card"
import { useEffect } from "react"

const Home = () => {
  useEffect(() => {
    getCards().then((res) => console.log(res))

    getAdBanners().then((res) => console.log(res))
  }, [])
  return (
    <div>
      <Top
        title="혜택 좋은 카드"
        subTitle="회원님을 위해서 혜택좋은 카드를 모아봤어요"
      />
      <AdBanners />
    </div>
  )
}

export default Home

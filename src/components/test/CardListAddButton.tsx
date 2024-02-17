import Button from "@shared/Button"

import { card_list } from "@/mock/data"
import { store } from "@/remote/firebase"
import { collection, doc, writeBatch } from "firebase/firestore"
import { COLLECTIONS } from "@/constants"

// 카드리스트 추가에대한 관심사 분리
const CardListAddButton = () => {
  const handleButtonClick = async () => {
    const batch = writeBatch(store)

    card_list.forEach((card) => {
      // 문서 쌓기
      const docRef = doc(collection(store, COLLECTIONS.CARD))
      batch.set(docRef, card)
    })
    // 배치 저장
    await batch.commit()
    alert("카드리스트 추가완료")
  }
  return <Button onClick={handleButtonClick}>카드 리스트 추가하기</Button>
}

export default CardListAddButton

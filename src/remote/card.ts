import {
  doc,
  collection,
  getDocs,
  QuerySnapshot,
  query,
  limit,
  startAfter,
  getDoc,
} from "firebase/firestore"
import { store } from "./firebase"
import { COLLECTIONS } from "@/constants"
import { Card } from "@/models/card"

export async function getCards(pageParam?: QuerySnapshot<Card>) {
  //pageParam 지금 보이고 있는 맨 마지막 요소
  // 페이징할 커서가있다면 추가정보 조회 아니면 최초호출
  const cardQuery = pageParam
    ? await query(
        collection(store, COLLECTIONS.CARD),
        startAfter(pageParam),
        limit(10),
      )
    : await query(collection(store, COLLECTIONS.CARD), limit(10))

  const cardSnapShot = await getDocs(cardQuery)

  const lastVisible = cardSnapShot.docs[cardSnapShot.docs.length - 1]

  const items = cardSnapShot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Card),
  }))

  return { items, lastVisible }
}

export async function getCard(id: string) {
  const snapShot = await getDoc(doc(store, COLLECTIONS.CARD, id))
  return {
    id,
    ...(snapShot.data() as Card),
  }
}

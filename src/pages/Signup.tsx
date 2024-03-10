import Form from "@/components/signup/Form"

import { COLLECTIONS } from "@/constants"
import { FormValues } from "@models/signup"

import { auth } from "@remote/firebase"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { collection, doc, setDoc } from "firebase/firestore"
import { store } from "@remote/firebase"
import { useNavigate } from "react-router-dom"

export default function SignupPage() {
  const navigate = useNavigate()
  const handleSubmit = async (formValues: FormValues) => {
    const { email, password, name } = formValues
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    // 사용자 이름 업데이트
    await updateProfile(user, {
      displayName: name,
    })

    // 인증된 유저의 정보 가져오기
    const newUser = {
      uid: user.uid,
      email: user.email,
      displayName: name,
    }
    // uid를 id 값으로 지정하고 collection에 저장
    await setDoc(doc(collection(store, COLLECTIONS.USER), user.uid), newUser)

    navigate("/")
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  )
}

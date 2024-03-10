import Form from "@/components/signin/Form"
import { FormValues } from "@models/signin"
import { useCallback } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@remote/firebase"
import useAlertContext from "@contexts/AlertContext"
import { FirebaseError } from "firebase/app"
import { useNavigate } from "react-router-dom"

export default function SigninPage() {
  const { open } = useAlertContext()
  const navigate = useNavigate()

  const handleSubmit = useCallback(async (formValues: FormValues) => {
    const { email, password } = formValues

    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      navigate("/")
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.dir(e)
        if (e.code === "auth/invalid-credential") {
          open({
            title: "일치하는 계정 정보가 없습니다 ",
            onButtonClick: () => {},
          })
          return
        }
      }
      open({
        title: "잠시 후 시도해주세요",
        onButtonClick: () => {},
      })
    }
  }, [])

  return (
    <div>
      <Form onSubmit={handleSubmit}></Form>
    </div>
  )
}

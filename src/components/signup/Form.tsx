import { ChangeEvent, useCallback, useState, useMemo } from "react"
import TextField from "@shared/TextField"
import Flex from "@shared/Flex"
import FixedBottomButton from "@shared/FixedBottomButton"
import { css } from "@emotion/react"
import { FormValues } from "@models/signup"
import validator from "validator"

type BooleanFormValuse = {
  [key in keyof FormValues]: boolean
}

export default function Form({
  onSubmit,
}: {
  onSubmit: (FormValues: FormValues) => void
}) {
  const [formValues, setFormValues] = useState<FormValues>({
    email: "",
    password: "",
    rePassword: "",
    name: "",
  })

  const [dirty, setDirty] = useState<BooleanFormValuse>({
    email: false,
    password: false,
    rePassword: false,
    name: false,
  })

  const handleFormValues = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevFormValues) => {
      return {
        ...prevFormValues,
        [e.target.name]: e.target.value,
      }
    })
  }, [])

  const handleBlur = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setDirty((prevDirty) => ({
      ...prevDirty,
      [e.target.name]: true,
    }))
  }, [])

  const errors = useMemo(() => validate(formValues), [formValues])

  const isSubmit = Object.keys(errors).length === 0

  return (
    <Flex direction="column" css={formContainerStyles}>
      <TextField
        name="email"
        label="이메일"
        placeholder="email"
        value={formValues.email}
        onChange={handleFormValues}
        hasError={dirty.email && Boolean(errors.email)}
        helpMessage={dirty.email && errors.email}
        onBlur={handleBlur}
      />
      <TextField
        name="password"
        label="비밀번호"
        type="password"
        placeholder="password"
        value={formValues.password}
        onChange={handleFormValues}
        hasError={dirty.password && Boolean(errors.password)}
        helpMessage={dirty.password && errors.password}
        onBlur={handleBlur}
      />
      <TextField
        name="rePassword"
        label="비밀번호 확인"
        type="password"
        placeholder="password"
        value={formValues.rePassword}
        onChange={handleFormValues}
        hasError={dirty.rePassword && Boolean(errors.rePassword)}
        helpMessage={dirty.rePassword && errors.rePassword}
        onBlur={handleBlur}
      />
      <TextField
        name="name"
        label="이름"
        placeholder="name"
        value={formValues.name}
        onChange={handleFormValues}
        hasError={dirty.name && Boolean(errors.name)}
        helpMessage={dirty.name && errors.name}
        onBlur={handleBlur}
      />

      <FixedBottomButton
        label="회원가입"
        onClick={() => onSubmit(formValues)}
        disabled={!isSubmit}
      />
    </Flex>
  )
}

const formContainerStyles = css`
  padding: 24px;
  gap: 20px;
`

function validate(formValues: FormValues) {
  let errors: Partial<FormValues> = {}
  if (!validator.isEmail(formValues.email)) {
    errors.email = "이메일 형식을 확인해주세요."
  }

  if (formValues.password.length < 8) {
    errors.password = "비밀번호는 8글자 이상 입력해주세요"
  }

  if (!validator.equals(formValues.rePassword, formValues.password)) {
    errors.rePassword = "비밀번호와 비밀번호 확인이 다릅니다"
  }
  if (formValues.name.length < 2) {
    errors.name = "2글자 이상 입력 해 주세요"
  }
  return errors
}

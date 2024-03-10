import { ChangeEvent, useCallback, useState, useMemo } from "react"

import Flex from "@shared/Flex"
import TextField from "@shared/TextField"
import Button from "@shared/Button"
import Text from "@shared/Text"

import { Spacing } from "@shared/Spacing"
import { css } from "@emotion/react"
import { Link } from "react-router-dom"
import { colors } from "@styles/colorPalette"
import validator from "validator"
import { FormValues } from "@models/signin"

export default function Form({
  onSubmit,
}: {
  onSubmit: (formValues: FormValues) => void
}) {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  })

  const handleFormValues = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }, [])

  const handleOnKey = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        onSubmit(formValues)
      }
    },
    [onSubmit, formValues],
  )

  const errors = useMemo(() => validate(formValues), [formValues])

  const isSubmit = Object.keys(errors).length === 0

  return (
    <Flex direction="column" css={formContainerStyles}>
      <TextField
        label="이메일"
        name="email"
        placeholder="email"
        onChange={handleFormValues}
        value={formValues.email}
      />
      <Spacing size={16} />
      <TextField
        label="비밀번호"
        type="password"
        name="password"
        placeholder="password"
        onChange={handleFormValues}
        value={formValues.password}
        onKeyDown={handleOnKey} //
      />

      <Spacing size={32} />

      <Button
        size="medium"
        disabled={!isSubmit}
        onClick={() => {
          onSubmit(formValues)
        }}
      >
        로그인
      </Button>

      <Spacing size={12} />

      <Link to="/signup" css={linkStyles}>
        <Text>아직 계정이 없으신가요?</Text>
      </Link>
    </Flex>
  )
}

function validate(formValues: FormValues) {
  let errors: Partial<FormValues> = {}
  if (!validator.isEmail(formValues.email)) {
    errors.email = "이메일 형식을 확인해주세요."
  }

  if (formValues.password.length < 8) {
    errors.password = "비밀번호는 8글자 이상 입력해주세요"
  }

  return errors
}

const formContainerStyles = css`
  padding: 24px;
`

const linkStyles = css`
  text-align: center;

  & > span:hover {
    color: ${colors.blue};
  }
`

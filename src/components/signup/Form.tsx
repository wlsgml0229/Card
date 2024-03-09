import TextField from "@shared/TextLabel"
import Flex from "@shared/Flex"
import FixedBottomButton from "@shared/FixedBottomButton"
import { css } from "@emotion/react"
export default function Form() {
  return (
    <Flex direction="column" css={formContainerStyles}>
      <TextField label="이메일" placeholder="email" />
      <TextField label="패스워드" type="password" placeholder="password" />
      <TextField label="패스워드 재확인" placeholder="password" />
      <TextField label="이름" placeholder="name" />

      <FixedBottomButton label="회원가입" onClick={() => {}} disabled={true} />
    </Flex>
  )
}

const formContainerStyles = css`
  padding: 24px;
  gap: 20px;
`

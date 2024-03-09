import { createPortal } from "react-dom"
import { css } from "@emotion/react"
import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { colors } from "@/styles/colorPalette"

import Button from "@shared/Button"

interface FixedBottomButtonProps {
  label: string
  onClick: () => void
}
export default function FixedBottomButton({
  label,
  onClick,
}: FixedBottomButtonProps) {
  const $portalRoot = document.getElementById("root-portal")
  if ($portalRoot === null) {
    return null
  }

  return createPortal(
    <Container>
      <Button size="medium" full={true} onClick={onClick} css={buttonStyles}>
        {label}
      </Button>
    </Container>,
    $portalRoot,
  )
}

const slideup = keyframes`
  to {
    transform: translateY(0);
  }
`

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.white};
  padding: 20px 10px 8px;
  transform: translateY(100%);
  animation: ${slideup} 0.5s ease-in-out forwards;
`

const buttonStyles = css`
  border-radius: 8px;
`

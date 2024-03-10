import { Link, useLocation } from "react-router-dom"

import { css } from "@emotion/react"
import { colors } from "@/styles/colorPalette"

import Button from "./Button"
import Flex from "./Flex"

export default function Navbar() {
  const location = useLocation()
  const showSignButton =
    ["/signup", "/signin"].includes(location.pathname) === false

  return (
    <Flex justify="space-between" align="center" css={navbarContainerStyles}>
      <Link to="/">홈</Link>
      {showSignButton ? (
        <Link to="/signin">
          <Button>로그인/회원가입</Button>
        </Link>
      ) : null}
    </Flex>
  )
}

const navbarContainerStyles = css`
  padding: 10px 24px;
  position: sticky;
  top: 0;
  background: ${colors.white};
  z-index: 100;
  border-bottom: 1px solid ${colors.grey};
`

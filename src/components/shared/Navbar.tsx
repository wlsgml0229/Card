import { Link, useLocation } from "react-router-dom"

import { css } from "@emotion/react"
import { colors } from "@/styles/colorPalette"

import Button from "./Button"
import Flex from "./Flex"
import { useUser } from "@/hooks/useUser"
import { useCallback } from "react"
import { signOut } from "firebase/auth"
import { auth } from "@/remote/firebase"
import styled from "@emotion/styled"
import { useScrollPercent } from "@/hooks/useScrollPercent"

export default function Navbar() {
  const scrollPercent = useScrollPercent()
  const location = useLocation()
  const showSignButton =
    ["/signup", "/signin"].includes(location.pathname) === false
  const user = useUser()

  const handleLogout = useCallback(() => {
    signOut(auth)
  }, [])

  const renderButton = useCallback(() => {
    if (user) {
      return <Button onClick={handleLogout}>로그아웃</Button>
    }
    if (showSignButton) {
      return (
        <Link to="/signin">
          <Button>로그인/회원가입</Button>
        </Link>
      )
    }
    return null
  }, [user, showSignButton, handleLogout])

  return (
    <>
      <Flex justify="space-between" align="center" css={navbarContainerStyles}>
        <Link to="/">홈</Link>
        {renderButton()}
      </Flex>
      <LoadingBar scrollPercent={scrollPercent}></LoadingBar>
    </>
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

const LoadingBar = styled.div<{ scrollPercent: number }>`
  position: fixed;
  top: 50px;
  left: 0px;
  width: ${(props) => props.scrollPercent}%;
  height: 6px;
  background-color: ${colors.blue};
  will-change: width;
`

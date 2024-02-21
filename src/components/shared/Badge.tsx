import styled from "@emotion/styled"
import { colors } from "@/styles/colorPalette"
import Text from "./Text"

interface BadgeProps {
  label: string
}

const Badge = ({ label }: BadgeProps) => {
  return (
    <Container>
      <Text typography="t7" color="white" bold={true}>
        {label}
      </Text>
    </Container>
  )
}

const Container = styled.div`
  border-radius: 8px;
  background-color: ${colors.blue};
  padding: 2px 8px;
`

export default Badge

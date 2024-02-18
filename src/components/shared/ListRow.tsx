import Flex from "./Flex"
import { css } from "@emotion/react"
import Text from "./Text"

interface ListRowProps {
  left?: React.ReactNode
  contents: React.ReactNode
  right?: React.ReactNode
  withArrow?: boolean
  onClick?: () => void
}

const ListRow = ({ left, right, contents, withArrow }: ListRowProps) => {
  return (
    <Flex as="li" css={listrowContainerStyles} align="center">
      <Flex css={listRowLeftStyles}>{left}</Flex>
      <Flex css={listRowContentStyles}>{contents}</Flex>
      <Flex>{right}</Flex>
      <Flex>{withArrow ? <IconArrowRight /> : null}</Flex>
    </Flex>
  )
}

const listrowContainerStyles = css`
  padding: 8px 24px;
`

const listRowLeftStyles = css`
  margin-right: 14px;
`

const listRowContentStyles = css`
  flex: 1;
`

const ListRowTexts = ({
  title,
  subTitle,
}: {
  title: string
  subTitle: string
}) => {
  return (
    <Flex direction="column">
      <Text bold={true}>{title}</Text>
      <Text typography="t7">{subTitle}</Text>
    </Flex>
  )
}

const IconArrowRight = () => {
  return (
    <svg
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
    >
      <title />
      <path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z" />
    </svg>
  )
}

// 리스트에 정형화된 텍스트 삽입
ListRow.Texts = ListRowTexts

export default ListRow

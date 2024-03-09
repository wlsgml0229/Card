import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { getCard } from "@remote/card"
import { colors } from "@/styles/colorPalette"

import Top from "@/components/shared/Top"
import ListRow from "@/components/shared/ListRow"
import FixedBottomButton from "@/components/shared/FixedBottomButton"
import Flex from "@/components/shared/Flex"
import Text from "@/components/shared/Text"
import { css } from "@emotion/react"

const CardPage = () => {
  // id에 따른 키값 캐싱
  const { id = "" } = useParams()
  const { data } = useQuery(["card", id], () => getCard(id), {
    enabled: id !== "",
  })

  if (!data) return null
  const { name, corpName, promotion, tags, benefit } = data
  const subTitle = promotion ? removeHtmlTags(promotion.title) : tags.join(", ")

  return (
    <div>
      <Top title={`${corpName} ${name}`} subTitle={subTitle || ""}></Top>
      <ul>
        {benefit.map((text, idx) => {
          return (
            <ListRow
              key={idx}
              left={<IconCheck />}
              contents={
                <ListRow.Texts title={`혜택 ${idx + 1}`} subTitle={text} />
              }
            />
          )
        })}
      </ul>
      {promotion ? (
        <Flex direction="column" css={termsContainerStyles}>
          <Text bold={true}>유의사항</Text>
          <Text>{removeHtmlTags(promotion.terms)}</Text>
        </Flex>
      ) : null}
      <FixedBottomButton label="신청하기" onClick={() => {}} />
    </div>
  )
}

const termsContainerStyles = css`
  margin-top: 80px;
  padding: 0px 24px 80px 24px;
`

function removeHtmlTags(text: string) {
  let output = ""
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === "<") {
      for (let j = i + 1; j < text.length; j += 1) {
        if (text[j] === ">") {
          i = j
          break
        }
      }
    } else {
      output += text[i]
    }
  }
  return output
}

function IconCheck() {
  return (
    <svg
      height="24"
      version="1.1"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(0 -1028.4)">
        <path
          d="m22 12c0 5.523-4.477 10-10 10-5.5228 0-10-4.477-10-10 0-5.5228 4.4772-10 10-10 5.523 0 10 4.4772 10 10z"
          fill="#accde2"
          transform="translate(0 1029.4)"
        />
        <path
          d="m22 12c0 5.523-4.477 10-10 10-5.5228 0-10-4.477-10-10 0-5.5228 4.4772-10 10-10 5.523 0 10 4.4772 10 10z"
          fill={`${colors.blue}`}
          transform="translate(0 1028.4)"
        />
        <path
          d="m16 1037.4-6 6-2.5-2.5-2.125 2.1 2.5 2.5 2 2 0.125 0.1 8.125-8.1-2.125-2.1z"
          fill="#85b9e3"
        />
        <path
          d="m16 1036.4-6 6-2.5-2.5-2.125 2.1 2.5 2.5 2 2 0.125 0.1 8.125-8.1-2.125-2.1z"
          fill="#ecf0f1"
        />
      </g>
    </svg>
  )
}

export default CardPage

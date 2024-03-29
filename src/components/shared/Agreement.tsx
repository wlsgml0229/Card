import Flex from "./Flex"
import { css } from "@emotion/react"
import React from "react"
import Text from "./Text"
import { colors } from "@/styles/colorPalette"
import { MouseEvent } from "react"

function Agreement({ children }: { children: React.ReactNode }) {
  return (
    <Flex direction="column" css={agreementContainerStyles}>
      {children}
    </Flex>
  )
}
function AgreementTitle({
  children,
  checked,
  onChange,
}: {
  children: React.ReactNode
  checked: boolean
  onChange: (e: MouseEvent<HTMLElement>, checked: boolean) => void
}) {
  return (
    <Flex as="li" onClick={(e) => onChange(e, !checked)}>
      <IconCheckCircle checked={checked} />
      <Text bold={true}>{children}</Text>
    </Flex>
  )
}

function AgreementDescription({
  link,
  checked,
  children,
  onChange,
}: {
  link?: string
  children: React.ReactNode
  checked: boolean
  onChange: (e: MouseEvent<HTMLElement>, checked: boolean) => void
}) {
  return (
    <Flex as="li">
      <Flex
        onClick={(e) => {
          onChange(e, !checked)
        }}
      >
        <IconCheck checked={checked} />
        <Text typography="t6"> {children}</Text>
      </Flex>
      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          <Text>링크</Text>
        </a>
      )}
    </Flex>
  )
}

Agreement.Title = AgreementTitle
Agreement.Descrtiption = AgreementDescription

function IconCheckCircle({ checked }: { checked: boolean }) {
  return (
    <svg height={24} viewBox="0 0 128 128" width={24}>
      <g>
        <g>
          <path
            fill={checked ? colors.blue : colors.grey}
            d="M85.263,46.49L54.485,77.267L42.804,65.584c-0.781-0.782-2.047-0.782-2.828-0.002c-0.781,0.782-0.781,2.048,0,2.829    l14.51,14.513l33.605-33.607c0.781-0.779,0.781-2.046,0-2.827C87.31,45.708,86.044,45.708,85.263,46.49z M64.032,13.871    c-27.642,0-50.129,22.488-50.129,50.126c0.002,27.642,22.49,50.131,50.131,50.131h0.004c27.638,0,50.123-22.489,50.123-50.131    C114.161,36.358,91.674,13.871,64.032,13.871z M64.038,110.128h-0.004c-25.435,0-46.129-20.694-46.131-46.131    c0-25.434,20.693-46.126,46.129-46.126s46.129,20.693,46.129,46.126C110.161,89.434,89.471,110.128,64.038,110.128z"
          />
        </g>
      </g>
    </svg>
  )
}

function IconCheck({ checked }: { checked: boolean }) {
  return (
    <svg
      fill="none"
      height={18}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width={18}
    >
      <polyline
        points="20 6 9 17 4 12"
        color={checked ? colors.blue : colors.grey}
      />
    </svg>
  )
}

const agreementContainerStyles = css`
  padding: 24px;

  & li {
    cursor: pointer;
    padding: 5px;
  }
`

export default Agreement

/**
 * <Agreement/>>
 *
 */

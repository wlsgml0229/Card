import { Colors } from "@/styles/colorPalette"
import { Typography, typographyMap } from "@/styles/typography"
import { CSSProperties } from "react"
import { colors } from "@/styles/colorPalette"
import styled from "@emotion/styled"

interface TextProps {
  typography?: Typography
  color?: Colors
  display?: CSSProperties["display"]
  textAlign?: CSSProperties["textAlign"]
  fontWeight?: CSSProperties["fontWeight"]
  bold?: boolean
}

const Text = styled.span<TextProps>(
  ({ color = "black", display, textAlign, fontWeight, bold }) => ({
    color: colors[color],
    textAlign,
    display,
    fontWeight: bold ? "bold" : fontWeight,
  }),
  ({ typography = "t5" }) => typographyMap[typography],
)

export default Text

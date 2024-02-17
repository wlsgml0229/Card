import { css } from "@emotion/react"

export const colorPalette = css`
  :root {
    --red: #f44336;
    --blue: #2196f3;
    --green: #4caf50;
    --white: #fff;
    --black: #212121;
    --grey: #f2f5f7;
  }
`

export const colors = {
  red: "var(--red)",
  blue: "var(--blue)",
  green: "var(--green)",
  white: "var(--white)",
  black: "var(--black)",
  grey: "var(--grey)",
}

//key값들만 타입으로
export type Colors = keyof typeof colors

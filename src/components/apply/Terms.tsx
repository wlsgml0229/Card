import Agreement from "../shared/Agreement"

export default function Terms() {
  return (
    <Agreement>
      <Agreement.Title
        checked={false}
        onChange={(e, checked) => {
          console.log(e, checked)
        }}
      >
        약관에 모두 동의
      </Agreement.Title>
    </Agreement>
  )
}

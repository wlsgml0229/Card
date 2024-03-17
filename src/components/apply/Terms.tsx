import { useCallback, useState } from "react"
import Agreement from "@shared/Agreement"
import { termsList } from "@/atoms/apply"
import { MouseEvent } from "react"
import FixedBottomButton from "@shared/FixedBottomButton"

export default function Terms({
  onNext,
}: {
  onNext: (terms: string[]) => void
}) {
  const [termsAgreement, setTermsAgreement] = useState(() => {
    return termsList.reduce<Record<string, boolean>>(
      (prev, term) => ({
        ...prev,
        [term.id]: false,
      }),
      {},
    )
  })

  const isAllChecked = Object.values(termsAgreement).every((checked) => checked)

  const handleAllAgreement = useCallback(
    (_: MouseEvent<HTMLElement>, checked: boolean) => {
      setTermsAgreement((prevTerms) => {
        return Object.keys(prevTerms).reduce(
          (prev, key) => ({
            ...prev,
            [key]: checked,
          }),
          {},
        )
      })
    },
    [],
  )

  return (
    <div>
      <Agreement>
        <Agreement.Title checked={isAllChecked} onChange={handleAllAgreement}>
          약관에 모두 동의
        </Agreement.Title>
        {termsList.map(({ id, title, link }) => (
          <Agreement.Descrtiption
            key={id}
            link={link}
            checked={termsAgreement[id]}
            onChange={(_, checked) => {
              setTermsAgreement((prevTerms) => ({
                ...prevTerms,
                [id]: checked,
              }))
            }}
          >
            {title}
          </Agreement.Descrtiption>
        ))}
      </Agreement>
      <FixedBottomButton
        label="약관동의"
        disabled={!isAllChecked}
        onClick={() => {
          onNext(Object.keys(termsAgreement))
        }}
      />
    </div>
  )
}

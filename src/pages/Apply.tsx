import React from "react"
import { useState } from "react"

import Terms from "@components/apply/Terms"
import BasicInfo from "@components/apply/BasicInfo"
import CardInfo from "@components/apply/CardInfo"

export default function ApplyPage() {
  const [step, setStep] = useState(1)

  const handleTermsChange = (values: string[]) => {
    console.log(values)
  }

  return (
    <div>
      {step === 0 ? <Terms onNext={handleTermsChange} /> : null}
      {step === 1 ? <BasicInfo /> : null}
      {step === 2 ? <CardInfo /> : null}
    </div>
  )
}

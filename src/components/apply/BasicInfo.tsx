import { Select } from "@shared/Select"
import {
  annualIncomeOption,
  creditPointOption,
  paymentDateOption,
} from "@/atoms/apply"
import { useState } from "react"
import { ApplyValues } from "@/models/apply"

type InfoValues = Pick<ApplyValues, "salary" | "creditScore" | "payDate">

export default function BasicInfo() {
  const [] = useState({
    salary: "",
    creditScore: "",
    payDate: "",
  })

  return (
    <div>
      <Select
        label="연소득"
        options={annualIncomeOption}
        placeholder={annualIncomeOption[0].label}
        value=""
      ></Select>
      <Select
        label="신용점수"
        options={creditPointOption}
        placeholder={creditPointOption[0].label}
        value=""
      ></Select>
      <Select
        label="연소득"
        options={paymentDateOption}
        placeholder={paymentDateOption[0].label}
        value=""
      ></Select>
    </div>
  )
}

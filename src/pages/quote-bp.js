import React from "react"
import App from "./index"
import { BP_TYPE } from "../types/types"
import { getPGFromURL, DEFAULT_BP_VALUE } from "../pg/pg"

const paramObj = {
  1: {
    title: "Keyman Insurance - Get Quotes",
    header: (
      <>
        Keyman Insurance Quotes From <span>Under £2 Per Week*</span>
      </>
    ),
  },
  2: {
    title: "Relevant Life Insurance - Get Quotes",
    header: (
      <>
        Relevant Life Insurance Quotes From <span>Under £2 Per Week*</span>
      </>
    ),
  },
  3: {
    title: "Shareholder Protection - Get Quotes",
    header: (
      <>
        Shareholder Protection Quotes From <span>Under £2 Per Week*</span>
      </>
    ),
  },
  4: {
    title: "Key Person Insurance - Get Quotes",
    header: (
      <>
        Key Person Insurance Quotes From <span>Under £2 Per Week*</span>
      </>
    ),
  },
  5: {
    title: "Directors Life Insurance - Get Quotes",
    header: (
      <>
        Directors Life Insurance Quotes From <span>Under £2 Per Week*</span>
      </>
    ),
  },
  6: {
    title: "Self Employed Life Insurance - Get Quotes",
    header: (
      <>
        Self Employed Life Insurance Quotes From <span>Under £2 Per Week*</span>
      </>
    ),
  },
  7: {
    title: "Tax Efficient Life Insurance - Get Quotes",
    header: (
      <>
        Tax Efficient Life Insurance Quotes From <span>Under £2 Per Week*</span>
      </>
    ),
  },
  8: {
    title: "Shareholder Life Insurance - Get Quotes",
    header: (
      <>
        Shareholder Life Insurance Quotes From <span>Under £2 Per Week*</span>
      </>
    ),
  },
  9: {
    title: "Business Life Insurance - Get Quotes",
    header: (
      <>
        Business Life Insurance Quotes From <span>Under £2 Per Week*</span>
      </>
    ),
  },
  [DEFAULT_BP_VALUE]: {
    title: "Cheap Life Insurance",
    header: <>Compare Business Life Insurance</>,
  },
}

const handlePageTitle = () => {
  return paramObj[getPGFromURL()] === undefined
    ? paramObj[DEFAULT_BP_VALUE]
    : paramObj[getPGFromURL()]
}

const QuoteBP = () => {
  return <App handlePageTitle={handlePageTitle()} type={BP_TYPE}></App>
}

export default QuoteBP

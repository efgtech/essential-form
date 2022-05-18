import React from "react"
import App from "./index"
import { PP_TYPE } from "../types/types"
import { getPGFromURL, DEFAULT_PG_VALUE } from "../pg/pg"

const paramObj = {
  1: {
    title: "Term Life Insurance Quotes",
    header: (
      <>
        Term Life Insurance Quotes From <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  2: {
    title: "Buy Life Insurance From Under &pound;2 Per Week*",
    header: (
      <>
        Buy Life Insurance Quotes From <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  3: {
    title: "Life Insurance Quotes",
    header: (
      <>
        Life Insurance Quotes From <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  4: {
    title: "Compare Life Insurance Quotes",
    header: (
      <>
        Compare and Save On Life Insurance Quotes From{" "}
        <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  5: {
    title: "Online Life Insurance Quotes",
    header: (
      <>
        Online Life Insurance Quotes From <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  6: {
    title: "Death Cover Quotes",
    header: (
      <>
        Death Cover From <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  7: {
    title: "Friends Life Insurance Quotes",
    header: (
      <>
        Compare <span>Friends Life</span> Insurance - Quotes From{" "}
        <span>Under &pound;2 p/w</span>
      </>
    ),
  },
  8: {
    title: "Life Insurance Comparison",
    header: (
      <>
        Life Insurance Comparison Quotes From{" "}
        <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  9: {
    title: "Life Cover Quotes",
    header: (
      <>
        Life Cover From <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  10: {
    title: "Best Life Insurance Quotes",
    header: (
      <>
        Top 10 Best Life Insurance Quotes From{" "}
        <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  11: {
    title: "Life Assurance Quotes",
    header: (
      <>
        Life Assurance Quotes From <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  12: {
    title: "Bright Grey Life Insurance Quotes",
    header: (
      <>
        Compare <span>Bright Grey</span> Life Insurance - Quotes From{" "}
        <span>Under &pound;2 p/w</span>
      </>
    ),
  },
  13: {
    title: "Instant Insurance Quotes",
    header: (
      <>
        Cheap Life Insurance Quotes From <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  14: {
    title: "Life Insurance Quotes for Mums",
    header: (
      <>
        Life Insurance Quotes For Mums From{" "}
        <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  15: {
    title: "Friends Provident Life Insurance Quotes",
    header: (
      <>
        Compare <span>Friends Provident</span> Life Insurance - Quotes From{" "}
        <span>Under &pound;2 p/w</span>
      </>
    ),
  },
  16: {
    title: "Mortgage Life Insurance Quotes",
    header: (
      <>
        Mortgage Life Insurance Quotes From{" "}
        <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  17: {
    title: "Decreasing Life Insurance Quotes",
    header: (
      <>
        Decreasing Term Life Insurance Quotes From{" "}
        <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  18: {
    title: "Whole of Life Insurance Quotes",
    header: (
      <>
        Whole of Life Insurance Quotes From{" "}
        <span>Under &pound;2.50 Per Week*</span>
      </>
    ),
  },
  19: {
    title: "Family Life Insurance Quotes",
    header: (
      <>
        Save On Family Life Insurance - Quotes From{" "}
        <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  20: {
    title: "Critical Illness Insurance Quotes",
    header: (
      <>
        Quotes For <span>Over &pound;47,000</span> Critical Illness Cover From{" "}
        <span>Under &pound;2.60 Per Week*</span>
      </>
    ),
  },
  21: {
    title: "Short Term Life Insurance Quotes",
    header: (
      <>
        Short Term Life Insurance Quotes From{" "}
        <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  22: {
    title: "Joint Life Insurance Quotes",
    header: (
      <>
        Save On Joint Life Insurance Quotes From{" "}
        <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  23: {
    title: "Life Insurance Quotes For Diabetes",
    header: (
      <>
        <span>Top 10</span> Life Insurance Quotes For Diabetics
      </>
    ),
  },
  24: {
    title: "Cheaper Life Insurance Quotes",
    header: (
      <>
        Cheaper Life Insurance Quotes From <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  25: {
    title: "Death Insurance Quotes",
    header: (
      <>
        Death Insurance From <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  26: {
    title: "No Medical Life Insurance Quotes",
    header: (
      <>
        <span>No Medical</span> Life Insurance Quotes From{" "}
        <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  27: {
    title: "Life Insurance Costs Less Than You Think",
    header: (
      <>
        Life Insurance Costs Less Than You Think -{" "}
        <span>Get Quotes From Under &pound;2 p/w</span>
      </>
    ),
  },
  28: {
    title: "Level Term Life Insurance Quotes",
    header: (
      <>
        Level Term Life Insurance Quotes From{" "}
        <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  29: {
    title: "Aegon Life Insurance Quotes",
    header: (
      <>
        Compare <span>Aegon</span> Life Insurance - Quotes From{" "}
        <span>Under &pound;2 p/w</span>
      </>
    ),
  },
  30: {
    title: "Best Life Insurance Brokers - Get Quotes",
    header: (
      <>
        Best Life Insurance Brokers - Quotes From{" "}
        <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  31: {
    title: "Cheap Life Insurance Quotes",
    header: (
      <>
        Compare and Save on Life Insurance - Quotes From{" "}
        <span>Under &pound;2 p/w</span>
      </>
    ),
  },
  32: {
    title: "Terminal Illness Life Insurance Quotes",
    header: (
      <>
        Terminal Illness Life Insurance Quotes From{" "}
        <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  33: {
    title: "Life Insurance Quotes For High Blood Pressure",
    header: (
      <>
        <span>Top 10</span> Life Insurance Quotes For High Blood Pressure
      </>
    ),
  },
  34: {
    title: "Mortgage Protection Life Insurance Quotes",
    header: (
      <>
        Mortgage Protection Life Insurance Quotes From{" "}
        <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  35: {
    title: "Life Insurance Quotes For High BMI",
    header: (
      <>
        <span>Top 10</span> Life Insurance Quotes For High BMI
      </>
    ),
  },
  36: {
    title: "Life Insurance Advice - Get Quotes Now",
    header: (
      <>
        Best Life Insurance Advice - Quotes From{" "}
        <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  37: {
    title: "Scottish Equitable Life Insurance Quotes",
    header: (
      <>
        Compare <span>Scottish Equitable</span> Life Insurance - Quotes From{" "}
        <span>Under &pound;2 p/w</span>
      </>
    ),
  },
  38: {
    title: "Life Insurance Quotes For Smokers",
    header: (
      <>
        Compare Life Insurance For <span>Smokers</span>
      </>
    ),
  },
  39: {
    title: "Compare Scottish Life Insurance Quotes",
    header: (
      <>
        Compare Scottish Life Insurance - Quotes From{" "}
        <span>Under &pound;2 p/w</span>
      </>
    ),
  },
  40: {
    title: "Life Insurance For Epilepsy",
    header: (
      <>
        <span>Top 10</span> Life Insurance Quotes For Epilepsy
      </>
    ),
  },
  41: {
    title: "Life Insurance Online Quotes",
    header: (
      <>
        Life Insurance Online - Quotes From{" "}
        <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  42: {
    title: "Royal Liver Life Insurance Quotes",
    header: (
      <>
        Compare <span>Royal Liver</span> Life Insurance - Quotes From{" "}
        <span>Under &pound;2 p/w</span>
      </>
    ),
  },
  43: {
    title: "No Exam Life Insurance Quotes",
    header: (
      <>
        <span>No Exam</span> Life Insurance Quotes From{" "}
        <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  44: {
    title: "IHT Life Insurance Quotes",
    header: (
      <>
        Inheritence Tax For Life Insurance - Quotes From{" "}
        <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  45: {
    title: "Life Insurance Cover Quotes",
    header: (
      <>
        Life Insurance Cover From <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  46: {
    title: "Cheap Life Insurance Quotes",
    header: (
      <>
        Cheap Life Insurance Quotes From <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  47: {
    title: "Life Insurance Policy Quotes",
    header: (
      <>
        Quotes For A Life Insurance Policy From{" "}
        <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  48: {
    title: "Affordable Life Insurance Quotes",
    header: (
      <>
        Affordable Life Insurance From <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  49: {
    title: "Cheap Life Insurance Rates - Get Quotes",
    header: (
      <>
        Cheap Life Insurance Rates From <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  50: {
    title: "Life Insurance In The UK - Get Quotes",
    header: (
      <>
        Life Insurance In The UK From <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  51: {
    title: "Cheapest Life Insurance Quotes",
    header: (
      <>
        Cheapest Life Insurance Quotes From{" "}
        <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  52: {
    title: "Life Insurance For Depression",
    header: (
      <>
        <span>Top 10</span> Life Insurance Quotes For Depression
      </>
    ),
  },
  53: {
    title: "Scottish Provident Life Insurance Quotes",
    header: (
      <>
        Compare <span>Scottish Provident</span> Life Insurance - Quotes From{" "}
        <span>Under &pound;2 p/w</span>
      </>
    ),
  },
  54: {
    title: "Cheap Life Insurance Quotes",
    header: (
      <>
        Cheap Life Insurance Quotes From <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  55: {
    title: "20 Year Term Life Insurance Quotes",
    header: (
      <>
        20 Year Term Life Insurance Quotes - From{" "}
        <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  56: {
    title: "Couples Life Insurance Quotes",
    header: (
      <>
        Save On Couples Life Insurance - Quotes From{" "}
        <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  57: {
    title: "Cheap Life Insurance Quotes",
    header: (
      <>
        Cheap Life Insurance Quotes From <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  58: {
    title: "Cheap Life Insurance Quotes",
    header: (
      <>
        Cheap Life Insurance Quotes From <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  59: {
    title: "Zurich Life Insurance Quotes",
    header: (
      <>
        Compare <span>Zurich</span> Life Insurance - Quotes From{" "}
        <span>Under &pound;2 p/w</span>
      </>
    ),
  },
  60: {
    title: "Low Cost Life Insurance Quotes",
    header: (
      <>
        Low Cost Life Insurance Quotes From{" "}
        <span>Under &pound;2 Per Week*</span>
      </>
    ),
  },
  61: {
    title: "Life Insurance Quotes For Ex-Smokers",
    header: (
      <>
        <span>Top 10</span> Life Insurance Quotes For An <span>Ex-Smoker</span>
      </>
    ),
  },
  62: {
    title: "Life Insurance Quotes For MS",
    header: (
      <>
        <span>Top 10</span> Life Insurance Quotes For MS
      </>
    ),
  },
  63: {
    title: "Life Insurance Quotes For Arthritis",
    header: (
      <>
        <span>Top 10</span> Life Insurance Quotes For Arthritis
      </>
    ),
  },
  64: {
    title: "Life Insurance Quotes For Asthma",
    header: (
      <>
        <span>Top 10</span> Life Insurance Quotes For Asthma
      </>
    ),
  },
  65: {
    title: "Life Insurance Quotes For High Cholesterol",
    header: (
      <>
        <span>Top 10</span> Life Insurance Quotes For High Cholestertol
      </>
    ),
  },
  70: {
    title: "Life Insurance Quotes For Vaping",
    header: (
      <>
        <span>Top 10</span> Life Insurance Quotes For People Who Vape
      </>
    ),
  },
  71: {
    title: "Life Insurance Quotes For Pilots",
    header: (
      <>
        <span>Top 10</span> Life Insurance Quotes For Pilots
      </>
    ),
  },
  [DEFAULT_PG_VALUE]: {
    title: "Cheap Life Insurance",
    header: <>Compare Cheap Life Insurance</>,
  },
}

const handlePageTitle = () => {
  return paramObj[getPGFromURL()] === undefined
    ? paramObj[DEFAULT_PG_VALUE]
    : paramObj[getPGFromURL()]
}

const Quote = () => {
  return <App handlePageTitle={handlePageTitle()} type={PP_TYPE}></App>
}

export default Quote

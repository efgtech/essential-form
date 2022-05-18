import { useEffect } from "react"
import { isBrowser } from "./utils"

export const PhoneConversion = props => {
  const { phoneNumber, setPhoneNumber } = props

  useEffect(() => {
    if (isBrowser()) {
      if (window.gtag !== undefined) {
        window.gtag(
          "config",
          `${process.env.GATSBY_GOOGLE_CONVERSION_ID}/CV8BCLCGnJYBEMO8hv0D`,
          {
            phone_conversion_number: phoneNumber,
            phone_conversion_callback: formatted_number =>
              setPhoneNumber(formatted_number),
          }
        )
      }
    }
  })
  return null
}

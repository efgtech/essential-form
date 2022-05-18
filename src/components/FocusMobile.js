import React, { useState, useEffect } from "react"
import mobileMomentsImg from "../images/focus/mobile-moments-away-btn.png"
import mobileCloseBtn from "../images/focus/mobile-close-btn.png"
import mobileContinueBtn from "../images/focus/mobile-continue-now-btn.png"

const FocusMobile = props => {
  const { closePopup, clickPopup } = props
  const [seconds, setSeconds] = useState(59)

  useEffect(() => {
    const timer =
      seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000)
    return () => clearInterval(timer)
  }, [seconds])

  const formattedSeconds = () => {
    if (seconds < 10) {
      return `0:0${seconds}`
    } else {
      return `0:${seconds}`
    }
  }

  return (
    <>
      <div className="ukl-focus-mobile-wrapper">
        <div className="ukl-focus-mobile animate__animated animate__slideInUp">
          <p className="ukl-focus-countdown">{formattedSeconds()}</p>
          <img src={mobileMomentsImg} alt="moments away" />
          <img
            className="ukl-focus-mobile-close-btn"
            src={mobileCloseBtn}
            alt="close"
            onClick={closePopup}
          />
          <img
            className="ukl-focus-mobile-continue-btn"
            src={mobileContinueBtn}
            alt="continue now"
            onClick={clickPopup}
          />
        </div>
      </div>
      <div className="ukl-focus-background"></div>
    </>
  )
}

export default FocusMobile

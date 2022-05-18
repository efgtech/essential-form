import React from "react"
import desktopThanksForVisitingImg from "../images/focus/desktop-thanks-for-visiting-img.png"
import desktopCloseBtn from "../images/focus/desktop-close-btn.png"
import desktopGetQuotesBtn from "../images/focus/desktop-get-your-quotes-btn.png"

const FocusDesktop = props => {
  const { closePopup, clickPopup } = props

  return (
    <>
      <div className="ukl-focus-desktop-wrapper">
        <div className="ukl-focus-desktop animate__animated animate__slideInUp">
          <img src={desktopThanksForVisitingImg} alt="thanks for visiting" />
          <img
            className="ukl-focus-close-button"
            src={desktopCloseBtn}
            alt="close button"
            onClick={closePopup}
          />
          <img
            className="ukl-focus-quotes-button"
            src={desktopGetQuotesBtn}
            alt="get your quotes"
            onClick={clickPopup}
          />
        </div>
      </div>
      <div className="ukl-focus-background"></div>
    </>
  )
}

export default FocusDesktop

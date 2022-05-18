import React, { useState } from "react"
import Cookies from "universal-cookie"
import { isBrowser } from "../data/utils"
import FocusMobile from "./FocusMobile"
import FocusDesktop from "./FocusDesktop"

const Focus = () => {
  const cookies = new Cookies()
  // sets isVisible for popup on desktop and mobile
  const [isVisible, setIsVisible] = useState(false)

  // fire events on popup for Google
  const action = {
    closed: "closed",
    viewed: "viewed",
    clicked: "clicked",
  }

  //set cookie
  const setCookie = () => {
    cookies.set("ukl_focus", action, {
      path: "/",
      maxAge: 604800,
    })
  }

  //fire event for GA
  const fireEvent = (eventObj, action) => {
    if (isBrowser()) {
      if (window.gtag !== undefined) {
        window.gtag("event", action, {
          event_category: "ukl-focus",
          event_label: eventObj.label,
        })
      }
    }
  }

  //check if cookie exists
  const cookieExists = () => {
    return cookies.get("ukl_focus") ? true : false
  }

  //close popup on button click --> "x".
  const closePopup = () => {
    setIsVisible(false)
    fireEvent({ label: "close-popup" }, action.closed)
  }

  //close pop on button click --> "Get Quotes Now"
  const clickPopup = () => {
    setIsVisible(false)
    fireEvent({ label: "clicked-quotes" }, action.clicked)
  }

  if (isBrowser()) {
    window.document.addEventListener("visibilitychange", () => {
      if (!cookieExists()) {
        setCookie()
        setIsVisible(true)
        fireEvent({ label: "view-popup" }, action.viewed)
      }
    })
  }

  // display focus on desktop or mobile and sets cookie if the cookie doesn't exist
  // if mobile it will check against the browser and screen width
  const displayFocus = () => {
    if (!isBrowser() && isVisible) {
      return <FocusDesktop handleClose={closePopup} />
    }

    if (isVisible) {
      if (
        /Mobi/.test(navigator.userAgent) &&
        !window.matchMedia("(min-width: 768px)").matches
      ) {
        return (
          <FocusMobile
            isVisible={isVisible}
            closePopup={closePopup}
            clickPopup={clickPopup}
          />
        )
      } else {
        return (
          <FocusDesktop
            isVisible={isVisible}
            closePopup={closePopup}
            clickPopup={clickPopup}
          />
        )
      }
    }
  }

  return <div>{displayFocus()}</div>
}

export default Focus

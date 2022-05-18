import React from "react"
import { Container, Row, Col } from "react-bootstrap"
//button icons
import "@fortawesome/fontawesome-free/css/all.min.css"
import "@fortawesome/fontawesome-pro/css/all.min.css"

const Header = props => {
  const { phoneNumber } = props

  return (
    <header className="header">
      <Container>
        <Row className="header-row">
          <Col>
            <p className="ukl-brand">
              uk<span style={{ color: "#fe9900" }}>life</span>insurance.co.uk
            </p>
          </Col>
          <Col className="desktop-only-header col-sm-4 d-none d-md-block">
            <p className="uk-info">
              Get a quote over the phone: <strong>{phoneNumber}</strong>
              <br />
              Mon - Thurs: <strong>9:00am - 7:00pm</strong>
              <br />
              Fri: <strong>9:00am - 2:00pm</strong>
            </p>
          </Col>

          <Col className="d-sm-none telephone-icon">
            <a href={"tel:" + phoneNumber}>
              <i
                className="fas fa-phone-square fa-3x"
                style={{
                  color: "#FE9900",
                  marginTop: "10px",
                  textDecoration: "none",
                }}
              ></i>
            </a>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header

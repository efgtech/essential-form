import React from "react"
import { Row, Col } from "react-bootstrap"
import providers from "../data/providers.js"

//display insurance providers logo on Desktop

const ProvidersDesktop = () => {
  return (
    <div className="logo d-none d-md-block">
      <Row className="logo-bg ">
        {providers.map(provider => (
          <Col key={provider.id}>
            <img
              src={provider.src}
              alt={provider.alt}
              className="brand-logo"
              height="75px"
              width="75px"
            />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ProvidersDesktop

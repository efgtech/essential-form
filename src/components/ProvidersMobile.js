import React from "react";
import { Row, Col } from "react-bootstrap";
import providers from "../data/providers";

//display insurance providers logo on mobile

const ProvidersMobile = (props) => {
  return (
    <div className="mobile-logo-container d-block d-md-none">
      <Row>
        <Col>
          <div className="mobile-card">
            <div className="mobile-card-body">
              <Row>
                {providers.slice(0, 3).map((provider) => (
                  <Col key={provider.id}>
                    <img
                      src={provider.src}
                      alt={provider.alt}
                      className="brand-logo img-fluid"
                      height="75px"
                      width="75px"
                    />
                  </Col>
                ))}
              </Row>
              <Row>
                {providers
                  .slice(Math.max(providers.length - 3, 0))
                  .map((provider) => (
                    <Col key={provider.id}>
                      <img
                        src={provider.src}
                        alt={provider.alt}
                        className="brand-logo img-fluid"
                        height="75px"
                        width="75px"
                      />
                    </Col>
                  ))}
              </Row>{" "}
            </div>
            <div className="compare-title-container">
              <div>
                <h5 className="compare-title">{props.header}</h5>
              </div>
            </div>
          </div>
          <div className="arrow-container">
            <div className="arrow"></div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProvidersMobile;

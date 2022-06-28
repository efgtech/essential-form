import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../css/index.css";
import ess from "../images/ess.png";
import { isBrowser } from "../data/utils";
import { BP_TYPE } from "../types/types";

const Results = (props) => {
  // https://reach.tech/router/api/navigate
  // the state object is passed through navigate on useForm to have access to the formType prop.
  // isBP checks if null if user didn't navigate on submit
  // if navigated on submit, it will return formType and render text
  const isBp = () => {
    if (props.location.state) {
      return props.location.state.formType === BP_TYPE;
    }
  };

  useEffect(() => {
    const scriptTag = document.createElement("script");
    scriptTag.src = "https://api.feefo.com/api/javascript/essential-insurance";
    scriptTag.async = true;
    document.body.appendChild(scriptTag);
  });

  return (
    <>
      <div className="bg-img">
        <Container>
          <Row>
            <Col sm={12} xs={12}>
              <Card className="results-card">
                <Row style={{ justifyContent: "center" }}>
                  <img
                    src={ess}
                    alt="Essential Insurance"
                    className="img-fluid"
                  />
                </Row>
                {!isBp() && (
                  <>
                    <Row
                      className="in-touch-soon-txt"
                      style={{ justifyContent: "center" }}
                    >
                      <p>
                        Thank you for your enquiry, we will be in touch soon to:
                      </p>
                    </Row>
                    <Row style={{ justifyContent: "center" }}>
                      <ul className="bullet-ul" style={{ margin: "20px" }}>
                        <li>
                          Check your details to make sure you have been quoted
                          the best price
                        </li>
                        <li>
                          Explain the application process should you wish to go
                          ahead
                        </li>
                        <li>Answer any other questions you may have</li>
                      </ul>
                    </Row>
                  </>
                )}
                {isBp() && (
                  <>
                    <Row
                      className="in-touch-soon-txt"
                      style={{ justifyContent: "center" }}
                    >
                      <p>are your allocated broker and will be in touch soon</p>
                    </Row>
                    <Row style={{ justifyContent: "center" }}>
                      <ul className="bullet-ul" style={{ margin: "20px" }}>
                        <li>
                          You may be eligible for a{" "}
                          <strong>discounted price</strong>, so we need to check
                          a few details
                        </li>
                        <li>
                          We'll explain the application process should you wish
                          to go ahead
                        </li>
                        <li>Answer any other questions you may have</li>
                      </ul>
                    </Row>
                  </>
                )}
              </Card>
            </Col>
          </Row>
          <div
            id="feefo-service-review-carousel-widgetId"
            class="feefo-review-carousel-widget-service"
          ></div>
        </Container>
      </div>
    </>
  );
};

export default Results;

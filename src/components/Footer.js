import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import essentialLogo from "../images/essential-logo.png";

const Footer = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            {/* <---------------AGREE TERMS/POLICY--------------->*/}
            <p className="agree-terms">
              By clicking "compare quotes now" you confirm you have read and
              agree with our{" "}
              <a
                href="https://www.essentialinsurance.co.uk/privacy-policy/"
                rel="noreferrer nofollow"
                target="_blank"
              >
                privacy policy.
              </a>
            </p>
          </Col>
        </Row>
      </Container>

      <footer>
        <Container>
          <Row>
            <Col>
              <img
                src={essentialLogo}
                alt="Essential Insurance logo"
                className="img-fluid"
              ></img>
            </Col>
          </Row>
          <Row>
            <Col>
              <ul>
                <li>
                  <a
                    href="https://www.essentialinsurance.co.uk/privacy-policy/"
                    rel="noreferrer nofollow"
                    target="_blank"
                    className="terms"
                  >
                    Privacy & Cookies
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.essentialinsurance.co.uk/contact-us/"
                    rel="noreferrer nofollow"
                    target="_blank"
                    className="terms"
                  >
                    Contact Us
                    <br />
                  </a>
                </li>
                <li className="trading-info">
                  <p>
                    <br />
                    <strong>
                      {" "}
                      Essential Insurance Services is a trading style of
                      Essential Finance Group (UK) Limited an appointed
                      representative of Essential Finance Group Management
                      Limited authorised and regulated by the Financial Conduct
                      Authority No. 782710. Essential Finance Group (UK) Limited
                      is registered in England and Wales, No. 9357808.
                    </strong>
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="legal-info">
                *Over ??200,000 from under ??2 p/w: A 28 year old non-smoker can
                get Level Term Life Cover of ??207,000 over a 29 year term for a
                monthly premium of ??7.74/Aviva.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="legal-info">
                *Over ??100,000 from under ??3 p/w for smokers: A 28 year old
                smoker can get Level Term Life Cover of ??102,700 over a 44 year
                term for a monthly premium of ??11.64/Aviva.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="legal-info">
                *Over ??47,000 from under ??2.60 p/w for CIC: A 25 year old
                non-smoker can get Level Term Life and Critical Illness Cover of
                ??48,000 over a 26 year term for a monthly premium of
                ??10.39/HSBC.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="legal-info">
                *Over ??265,000 from under ??2 p/w for mortgage protection: A 25
                year old non-smoker can get Initial Life Cover of ??272,700 over
                a 40 year term for a monthly premium of ??7.43/Aviva. This life
                cover will decrease over the length of the policy to cover a
                mortgage. An interest rate of 8 % is used to calculate the life
                cover payable on death at any point in the future up to the end
                of the policy. This policy is therefore only suitable for all
                loans with an average mortgage interest rate of up to and
                including 8 %.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="legal-info">
                *Whole of Life Quotes from under ??2.50 p/w: A 20 year old
                non-smoker can get Level Term Life Cover (Whole of Life) of
                ??8,100 for a monthly premium of ??9.52/Zurich.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="legal-info">
                *Couples Life Insurance, over ??110,000 from under ??2 pw : A
                non-smoking couple aged 30 and 28 can get Level Term Life Cover
                of ??111,000 over a 20 year term for a monthly premium of
                ??7.54/Aviva. The life cover will be payable should either of the
                life insured die within the term of the policy.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="legal-info">*Prices correct December 2021</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;

import React from "react"
import { Row, Col, Form, Button } from "react-bootstrap"
import reviewImg from "../images/review.jpg"
import { insuranceType } from "../data/formOptions"

const Bp = props => {
  const { values, setValues, handleBlur, handleChange } = props

  //setState manually as they are buttons and use onClick instead of onChange like the rest of the form
  const setBpType = typeArg => {
    setValues({ ...values, type: typeArg })
  }

  const setSmoker = smokerArg => {
    setValues({ ...values, smoker: smokerArg })
  }

  return (
    <div>
      {/* <---------------Q1--------------->*/}
      <Row>
        <Col style={{ paddingLeft: "10px" }} xs={12} sm={6}>
          <Form.Label className="button-question">
            Type of insurance?
          </Form.Label>

          {/* <---------------BUTTON--------------->*/}
          <Row>
            <Col sm={4} md={3} xs={4} style={{ textAlign: "center" }}>
              <div>
                <Button
                  type="button"
                  className="orange-btn"
                  onClick={() => {
                    setBpType(insuranceType.keyman)
                  }}
                  active={values.type === insuranceType.keyman ? true : false}
                >
                  <i className="fa-solid fa-user-group-crown fa-2x"></i>
                </Button>
              </div>
              <Form.Label className="button-label">Keyman</Form.Label>
            </Col>
            {/* <---------------BUTTON--------------->*/}
            <Col sm={4} md={3} xs={4} style={{ textAlign: "center" }}>
              <div>
                <Button
                  type="button"
                  className="orange-btn"
                  onClick={() => setBpType(insuranceType.relevant)}
                  active={values.type === insuranceType.relevant ? true : false}
                >
                  <i className="fas fa-user-tie fa-2x"></i>
                </Button>
              </div>
              <Form.Label className="button-label">Relevant Life</Form.Label>
            </Col>
            {/* <---------------BUTTON--------------->*/}
            <Col sm={4} md={3} xs={4} style={{ textAlign: "center" }}>
              <div>
                <Button
                  type="button"
                  className="orange-btn"
                  onClick={() => setBpType(insuranceType.shareholder)}
                  active={
                    values.type === insuranceType.shareholder ? true : false
                  }
                >
                  <i className="fas fa-handshake fa-2x"></i>
                </Button>
              </div>
              <Form.Label className="button-label">
                Shareholder Protection
              </Form.Label>
            </Col>
            {/* <---------------BUTTON--------------->*/}
            <Col sm={4} md={3} xs={4} style={{ textAlign: "center" }}>
              <div>
                <Button
                  type="button"
                  className="orange-btn"
                  onClick={() => setBpType(insuranceType.ns)}
                  active={values.type === insuranceType.ns ? true : false}
                >
                  <i className="fas fa-question-circle fa-2x"></i>
                </Button>
              </div>
              <Form.Label className="button-label">Not sure</Form.Label>
            </Col>
          </Row>
        </Col>
        <Col sm={6} xs={6} className="d-none d-xl-block">
          <Col>
            <img
              src={reviewImg}
              className="img-fluid"
              alt="Reviews - 4.7 out of 5."
            />
          </Col>
        </Col>
      </Row>
      <Row>
        {/* <---------------Q2--------------->*/}
        <Col style={{ paddingLeft: "10px" }} xs={12} sm={6}>
          <Form.Label className="button-question">Do you smoke?</Form.Label>

          <Row>
            <Col sm={4} md={3} xs={4} style={{ textAlign: "center" }}>
              <div>
                <Button
                  type="button"
                  className="orange-btn"
                  onClick={() => setSmoker(true)}
                  active={values.smoker === true ? true : false}
                >
                  <i className="fas fa-smoking fa-2x"></i>
                </Button>
              </div>
              <Form.Label className="button-label">Yes</Form.Label>
            </Col>
            {/* <---------------BUTTON--------------->*/}
            <Col sm={4} md={3} xs={4} style={{ textAlign: "center" }}>
              <div>
                <Button
                  type="button"
                  className="orange-btn"
                  onClick={() => setSmoker(false)}
                  active={values.smoker === false ? true : false}
                >
                  <i className="fas fa-smoking-ban fa-2x"></i>
                </Button>
              </div>
              <Form.Label className="button-label">No</Form.Label>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* <---------------FIRST ROW--------------->*/}
      <Form.Row>
        <Form.Group as={Col} controlId="companyName" xs={12} sm={6} md={5}>
          <div className="row-question">
            <Form.Label>Company name</Form.Label>
            <Form.Control
              as="textarea"
              rows={1}
              name="companyName"
              placeholder="Company name"
              onChange={handleChange}
              value={values.companyName}
              onBlur={handleBlur}
              type="input"
              required
              className="text-field"
            ></Form.Control>
          </div>
        </Form.Group>
      </Form.Row>
    </div>
  )
}

export default Bp

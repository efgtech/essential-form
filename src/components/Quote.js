import React from "react"
import { Row, Col, Form, Button } from "react-bootstrap"
import { insuranceType, partyGrouping } from "../data/formOptions"

const Quote = props => {
  const { values, setType, setCic, setGrouping, setSmoker } = props

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
                    setType(insuranceType.level)
                  }}
                  active={values.type === insuranceType.level ? true : false}
                >
                  <i className="fas fa-umbrella fa-2x"></i>
                </Button>
              </div>
              <Form.Label className="button-label">Level Term</Form.Label>
            </Col>
            {/* <---------------BUTTON--------------->*/}
            <Col sm={4} md={3} xs={4} style={{ textAlign: "center" }}>
              <div>
                <Button
                  type="button"
                  className="orange-btn"
                  onClick={() => setType(insuranceType.mortgage)}
                  active={values.type === insuranceType.mortgage ? true : false}
                >
                  <i className="fas fa-home fa-2x"></i>
                </Button>
              </div>
              <Form.Label className="button-label">Mortgage</Form.Label>
            </Col>
            {/* <---------------BUTTON--------------->*/}
            <Col sm={4} md={3} xs={4} style={{ textAlign: "center" }}>
              <div>
                <Button
                  type="button"
                  className="orange-btn"
                  onClick={() => setType(insuranceType.wol)}
                  active={values.type === insuranceType.wol ? true : false}
                >
                  <i className="fas fa-heart fa-2x"></i>
                </Button>
              </div>
              <Form.Label className="button-label">Whole of Life</Form.Label>
            </Col>
          </Row>
        </Col>
        {/* <---------------Q2--------------->*/}
        <Col
          style={{
            display: values.type === "WOL" ? "none" : "block",
          }}
          xs={12}
          sm={6}
        >
          <Form.Label className="button-question">
            Critical illness cover?
          </Form.Label>
          {/* <---------------BUTTON--------------->*/}
          <Row>
            <Col sm={4} md={3} xs={4} style={{ textAlign: "center" }}>
              <div>
                <Button
                  type="button"
                  className="orange-btn"
                  onClick={() => setCic(true)}
                  active={values.cic === true ? true : false}
                >
                  <i className="fas fa-thumbs-up fa-2x"></i>
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
                  onClick={() => setCic(false)}
                  active={values.cic === false ? true : false}
                >
                  <i className="fas fa-thumbs-down fa-2x"></i>
                </Button>
              </div>
              <Form.Label className="button-label">No</Form.Label>
            </Col>
          </Row>
        </Col>

        <Col style={{ paddingLeft: "10px" }} xs={12} sm={6}>
          <Form.Label className="button-question">
            Who is the cover for?
          </Form.Label>

          <Row>
            <Col sm={4} md={3} xs={4} style={{ textAlign: "center" }}>
              <div>
                <Button
                  type="button"
                  className="orange-btn"
                  onClick={() => setGrouping(partyGrouping.me)}
                  active={values.grouping === partyGrouping.me ? true : false}
                >
                  <i className="fas fa-user fa-2x"></i>
                </Button>
              </div>
              <Form.Label className="button-label">Me</Form.Label>
            </Col>
            {/* <---------------BUTTON--------------->*/}
            <Col sm={4} md={3} xs={4} style={{ textAlign: "center" }}>
              <div>
                <Button
                  type="button"
                  className="orange-btn"
                  onClick={() => setGrouping(partyGrouping.plusOne)}
                  active={
                    values.grouping === partyGrouping.plusOne ? true : false
                  }
                >
                  <i className="fas fa-user-friends fa-2x"></i>
                </Button>
              </div>
              <Form.Label className="button-label">Myself + 1</Form.Label>
            </Col>
          </Row>
        </Col>

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
    </div>
  )
}

export default Quote

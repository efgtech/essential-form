import React from "react"
import { Container, Row, Col, Form, Alert } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import ProvidersMobile from "./ProvidersMobile"
import ProvidersDesktop from "./ProvidersDesktop"
import useForm from "./useForm"
import {
  coverAmtOptions,
  lengthOfCoverOptions,
  dobDayOptions,
  dobMonthOptions,
  dobYearOptions,
  titleOptions,
} from "../data/formOptions"
import Bp from "./Bp"
import Quote from "./Quote"
import { BP_TYPE, PP_TYPE } from "../types/types"
const QuoteForm = props => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    handleTermChange,
    errorMessage,
    setType,
    setCic,
    setGrouping,
    setSmoker,
    setValues,
    disabled,
  } = useForm(props.formType)

  return (
    <div>
      <Container>
        <ProvidersMobile />
        <Row className="justify-content-center">
          {errorMessage ? (
            <Col sm={11} md={12} lg={9}>
              <Alert variant="danger" className="alert" id="alert">
                {errorMessage}
              </Alert>
            </Col>
          ) : (
            <div></div>
          )}
          <Col sm={11} md={12} lg={9}>
            <div className="form-border">
              <div className="form-card">
                <h2 className="form-title logo d-none d-md-block">
                  {props.header}
                </h2>

                <ProvidersDesktop />
                <Form id="form" onSubmit={handleSubmit} autoComplete="on">
                  {/* <---------------FORM QUESTIONS--------------->*/}
                  {props.formType === PP_TYPE ? (
                    <Quote
                      values={values}
                      setType={setType}
                      setCic={setCic}
                      setGrouping={setGrouping}
                      setSmoker={setSmoker}
                    />
                  ) : null}

                  {props.formType === BP_TYPE ? (
                    <Bp
                      values={values}
                      setValues={setValues}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                    />
                  ) : null}

                  {/* <---------------FIRST ROW--------------->*/}
                  <Form.Row className="grey-row">
                    <Form.Group
                      as={Col}
                      controlId="amountOfCover"
                      xs={12}
                      sm={6}
                      md={5}
                    >
                      <div className="row-question">
                        <Form.Label>Amount of cover required?</Form.Label>
                        <Form.Control
                          as="select"
                          name="amountOfCover"
                          value={values.amountOfCover}
                          onChange={handleChange}
                          className="select"
                        >
                          {/* map through list of values from coverAmtOptions in formOptions.js*/}
                          {coverAmtOptions.map(({ value, formattedValue }) => (
                            <option key={value} value={value}>
                              {formattedValue}
                            </option>
                          ))}
                        </Form.Control>
                      </div>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      controlId="lengthOfCover"
                      xs={12}
                      sm={6}
                      md={5}
                      style={{
                        display: values.type === "WOL" ? "none" : "block",
                      }}
                    >
                      <div className="row-question">
                        <Form.Label>Length of cover?</Form.Label>
                        <Form.Control
                          as="select"
                          name="lengthOfCover"
                          value={values.lengthOfCover}
                          onChange={handleTermChange}
                          className="select"
                        >
                          {lengthOfCoverOptions.map(
                            ({ value, formattedValue }) => (
                              <option key={value} value={value}>
                                {formattedValue}
                              </option>
                            )
                          )}
                        </Form.Control>
                      </div>
                    </Form.Group>
                  </Form.Row>
                  {/* <---------------SECOND ROW--------------->*/}
                  <Form.Row>
                    <Form.Group as={Col} controlId="title" xs={12} sm={4}>
                      <div className="row-question">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                          as="select"
                          name="title"
                          value={values.title}
                          onChange={handleChange}
                          className="select"
                        >
                          {titleOptions.map(({ value, formattedValue }) => (
                            <option key={value} value={value}>
                              {formattedValue}
                            </option>
                          ))}
                        </Form.Control>
                      </div>
                    </Form.Group>
                    <Form.Group as={Col} controlId="firstName" xs={12} sm={4}>
                      <div className="row-question">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                          className="text-field"
                          as="input"
                          name="firstName"
                          placeholder="First name"
                          onChange={handleChange}
                          value={values.firstName}
                          onBlur={handleBlur}
                          type="text"
                          required
                          autoComplete="given-name"
                        ></Form.Control>
                      </div>
                    </Form.Group>
                    <Form.Group as={Col} controlId="lastName" xs={12} sm={4}>
                      <div className="row-question">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                          className="text-field"
                          as="input"
                          name="lastName"
                          value={values.lastName}
                          placeholder="Last name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="text"
                          required
                          autoComplete="family-name"
                        ></Form.Control>
                      </div>
                    </Form.Group>
                  </Form.Row>
                  {/* <---------------THIRD ROW--------------->*/}
                  <Form.Row className="grey-row dob">
                    <Form.Group as={Col} controlId="dobDay" sm={4}>
                      <div className="row-question">
                        <Form.Label>Date of birth</Form.Label>
                        <Form.Control
                          as="select"
                          name="dobDay"
                          value={values.dobDay}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        >
                          {dobDayOptions.map(({ value, formattedValue }) => (
                            <option key={value} value={value}>
                              {formattedValue}
                            </option>
                          ))}
                        </Form.Control>
                      </div>
                    </Form.Group>
                    <Form.Group as={Col} controlId="dobMonth" sm={4}>
                      <div className="row-question">
                        <Form.Control
                          as="select"
                          name="dobMonth"
                          value={values.dobMonth}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        >
                          {dobMonthOptions.map(({ value, formattedValue }) => (
                            <option key={value} value={value}>
                              {formattedValue}
                            </option>
                          ))}
                        </Form.Control>
                      </div>
                    </Form.Group>
                    <Form.Group as={Col} controlId="dobYear" sm={4}>
                      <div className="row-question">
                        <Form.Control
                          as="select"
                          name="dobYear"
                          value={values.dobYear}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        >
                          {dobYearOptions.map(({ value, formattedValue }) => (
                            <option key={value} value={value}>
                              {formattedValue}
                            </option>
                          ))}
                        </Form.Control>
                      </div>
                    </Form.Group>
                  </Form.Row>
                  {/* <---------------Fourth ROW--------------->*/}
                  <Form.Row>
                    <Form.Group as={Col} controlId="postcode" xs={12} sm={4}>
                      <div className="row-question">
                        <Form.Label>Postcode</Form.Label>
                        <Form.Control
                          className="text-field"
                          as="input"
                          type="text"
                          placeholder="Postcode"
                          name="postcode"
                          value={values.postcode}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          required
                          autoComplete="postal-code"
                        ></Form.Control>
                      </div>
                    </Form.Group>
                    <Form.Group as={Col} controlId="phone" xs={12} sm={4}>
                      <div className="row-question">
                        <Form.Label>Phone</Form.Label>

                        <Form.Control
                          className="text-field"
                          type="tel"
                          as="input"
                          placeholder="Phone"
                          name="phone"
                          value={values.phone}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          required
                          autoComplete="tel"
                        ></Form.Control>
                      </div>
                    </Form.Group>
                    <Form.Group as={Col} controlId="email" xs={12} sm={4}>
                      <div className="row-question">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          className="text-field"
                          type="email"
                          maxLength="321"
                          as="input"
                          placeholder="Email"
                          name="email"
                          value={values.email}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          required
                          autoComplete="email"
                        ></Form.Control>
                      </div>
                    </Form.Group>
                  </Form.Row>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row style={{ textAlign: "center" }}>
          <Col className="col">
            <Button
              className="compare-orange-btn"
              type="submit"
              form="form"
              disabled={disabled}
            >
              {/* -----------------DESKTOP----------------- */}
              <div className="d-block d-sm-none">
                <h5>
                  <strong>Compare Quotes Now >></strong>
                </h5>
              </div>
              {/* -----------------MOBILE-----------------*/}
              <div className="d-none d-sm-block">
                <h3>Compare Quotes Now >></h3>
              </div>
            </Button>
          </Col>
        </Row>
      </Container>
      {/* <---------------COMPARE QUOTES BUTTON--------------->*/}
      <div>
        <Container>
          <Row className="padlock-row">
            <i className="padlock fas fa-lock"></i>
            <p> Safe | Secure | Privacy Protected</p>
          </Row>
        </Container>
      </div>
      <hr />
    </div>
  )
}

export default QuoteForm

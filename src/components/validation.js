const axios = require("axios")
let validationErrors = []

const validationCriteria = {
  title: {
    required: true,
    msg: "Enter your title",
  },
  firstName: {
    required: true,
    msg: "Enter your first name",
  },
  lastName: {
    required: true,
    msg: "Enter your last name",
  },
  dobDay: {
    required: true,
    ne: "Day",
    msg: "Day required",
  },
  dobMonth: {
    required: true,
    ne: "Month",
    msg: "Month required",
  },
  dobYear: {
    required: true,
    ne: "Year",
    msg: "Year required",
  },
  email: {
    required: true,
    msg: "Email invalid",
    regex: /[^@]+@[^]+\..+/,
  },
  postcode: {
    required: true,
    msg: "Postcode invalid",
  },
  phone: {
    required: true,
    msg: "Invalid phone number",
    checkLength: true,
    maxLength: 14,
    minLength: 9,
    phoneValidation: false,
  },
  type: {
    required: false,
  },
  cic: {
    required: false,
  },
  grouping: {
    required: false,
  },
  smoker: {
    required: false,
  },
  lengthOfCover: {
    required: true,
  },
  amountOfCover: {
    required: true,
  },
  companyName: {
    required: true,
    msg: "Enter your company name",
  },
}

export const setCompanyNameIsRequiredToFalse = () => {
  validationCriteria.companyName.required = false
}

//no value
const valueNotPresent = value => {
  return value === undefined || value.length === 0 || value === ""
}

//invalid length
const valueLengthInvalid = (value, criteria) => {
  return (
    value.length < criteria.minLength ||
    value.length > criteria.maxLength ||
    value.length === 0
  )
}

export const validateData = validationObj => {
  // access key: value in validation obj

  //should we be using state here?
  validationErrors = []
  for (const [field, value] of Object.entries(validationObj)) {
    //key from validation obj
    let criteria = validationCriteria[field]
    //HTML id of field
    let target = document.getElementById(field)
    if (criteria.required) {
      if (valueNotPresent(value)) {
        handleError(criteria.msg, target, field)
      } else {
        removeError(field)
      }
    }
    if (criteria.ne !== undefined) {
      if (value === criteria.ne) {
        handleError(criteria.msg, target, field)
      } else {
        removeError(field)
      }
    }
    if (criteria.regex !== undefined) {
      if (!criteria.regex.test(value)) {
        handleError(criteria.msg, target, field)
      } else {
        removeError(field)
      }
    }
    if (criteria.minLength !== undefined && criteria.checkLength) {
      if (valueLengthInvalid(value, criteria)) {
        handleError(criteria.msg, target, field)
      } else {
        removeError(field)
      }
    }
  }
  if (validationErrors.length > 0) {
    //There is an error, return false
    return false
  }
  return true
}

export const validatePhoneNumber = async phoneNumber => {
  try {
    const res = await axios.post(
      `https://webservices.data-8.co.uk/InternationalTelephoneValidation/IsValid.json?key=${process.env.GATSBY_DATA_8_KEY}`,
      {
        telephoneNumber: phoneNumber,
        defaultCountry: "GB",
        options: {
          UseMobileValidation: true,
        },
      }
    )

    let validationCheck = res.data.Result
    if (validationCheck.ValidationResult === "Invalid") {
      handleError(validationCriteria.phone.msg, "phone")
      return false
    }
  } catch (err) {
    return false
  }
  return true
}

export const handleError = (msg, node, field) => {
  //IF validationErrors array already inclues the field/key - ignore
  if (validationErrors.includes(field)) {
    return false
  }
  //else if key doesn't exist, add new field/key to array.
  validationErrors.push(field)
  // and if key doesn't exist add error message
  addError(msg, node, field)
}

const addError = (msg, node, field) => {
  //e.g firstName_validation_error
  const fieldError = field + "_validation_error"

  //don't add the error again
  if (document.getElementById(fieldError)) {
    return false
  }

  node.classList.add("validation_error")

  //create div
  let div = document.createElement("div")

  // add id attribute with a name of fieldError (e.g firstName_validation_error)
  div.setAttribute("id", fieldError)

  // adds text/error message onto the div attribute
  div.appendChild(document.createTextNode(msg))
  node.parentNode.append(div)
  node.classList.remove("valid")
}

const removeError = field => {
  const fieldId = field + "_validation_error"
  const elem = document.getElementById(fieldId)

  if (elem) {
    elem.parentNode.removeChild(elem)
    let index = validationErrors.indexOf(field)
    validationErrors.splice(index, 1)
  }

  document.getElementById(field).classList.remove("validation_error")
  document.getElementById(field).classList.add("valid")
}

export default validatePhoneNumber

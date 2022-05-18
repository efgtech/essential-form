import axios from "axios";
import { useEffect, useState } from "react";
import {
  validateData,
  validatePhoneNumber,
  handleError,
  setCompanyNameIsRequiredToFalse,
} from "./validation.js";
import { insuranceType } from "../data/formOptions";
import Cookies from "universal-cookie";
import { navigate } from "gatsby";
import { isBrowser } from "../data/utils.js";
import { BP_TYPE, PP_TYPE } from "../types/types";

const UKL_LAST_SUBMISSION_COOKIE_NAME = "ukl_last_submission";

const useForm = (formType) => {
  const cookies = new Cookies();

  // set fields && state where values will be stored
  const [values, setValues] = useState({
    title: "Mr",
    firstName: "",
    lastName: "",
    postcode: "",
    phone: "",
    email: "",
    dobDay: "Day",
    dobMonth: "Month",
    dobYear: "Year",
    type: insuranceType.level,
    cic: false,
    grouping: "single",
    smoker: false,
    amountOfCover: "150000",
    lengthOfCover: 20,
    companyName: "",
  });
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    switch (formType) {
      case PP_TYPE:
        return setValues({ ...values, type: insuranceType.level });
      case BP_TYPE:
        return setValues({ ...values, type: insuranceType.keyman });
      default:
        return setValues({ ...values, type: insuranceType.level });
    }
  }, [formType]);

  const setType = (typeArg) => {
    setValues({ ...values, type: typeArg });
  };

  const setCic = (cicArg) => {
    setValues({ ...values, cic: cicArg });
  };

  const setGrouping = (groupingArg) => {
    setValues({ ...values, grouping: groupingArg });
  };

  const setSmoker = (smokerArg) => {
    setValues({ ...values, smoker: smokerArg });
  };

  // // hides critical illness cover and length of cover if type of insurance == whole of life
  const showHideCicAndLoc = () => {
    return values.type === insuranceType.wol ? "none" : "block";
  };

  const setCompanyNameCriteria = () => {
    if (formType === PP_TYPE) {
      setCompanyNameIsRequiredToFalse();
    }
  };

  //display error to user
  const [errorMessage, setErrorMessage] = useState("");

  const formatTitle = () => {
    return values.title.toUpperCase();
  };

  const formatDate = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString();

    return formattedDate;
  };

  const formatDateOfBirth = () => {
    const dateOfBirth = new Date(
      `${values.dobYear}-${values.dobMonth}-${values.dobDay}T00:00:00`
    );

    return dateOfBirth;
  };

  const hasExistingSubmission = () => {
    return cookies.get(UKL_LAST_SUBMISSION_COOKIE_NAME) ? true : false;
  };

  const getUrlParam = (param) => {
    if (isBrowser()) {
      const params = new URLSearchParams(window.location.search);
      return params.get(param);
    }
  };

  const getSource = () => {
    const sourceParam = getUrlParam("source");
    switch (sourceParam) {
      case "google":
        return { enum_string: "GOOGLE", click_id_key: "gclid" };
      case "bing":
        return { enum_string: "BING", click_id_key: "msclkid" };
      default:
        return { enum_string: "UNKNOWN", click_id_key: "undefined" };
    }
  };

  const setApiKey = () => {
    if (formType === PP_TYPE) {
      return process.env.GATSBY_PP_API_KEY;
    } else if (formType === BP_TYPE) {
      return process.env.GATSBY_BP_API_KEY;
    }
  };

  const setSourceCode = () => {
    if (formType === PP_TYPE) {
      return 2027;
    } else if (formType === BP_TYPE) {
      return 2209;
    }
  };

  const userData = {
    api_key: setApiKey(),
    provider: {
      created: formatDate(),
      source: setSourceCode(),
      note: values.companyName,
      reference: getUrlParam("cid"),
    },
    term: values.lengthOfCover,
    cover: {
      amount: values.amountOfCover,
      type: values.type,
    },
    contact: {
      address_line_one: "",
      postcode: values.postcode,
      email_address: values.email,
      numbers: {
        home: "",
        work: "",
        mobile: values.phone,
      },
    },
    applicants: [
      {
        first_name: values.firstName,
        last_name: values.lastName,
        dob: formatDateOfBirth(),
        title: formatTitle(),
      },
    ],
    utm: {
      brand: getSource().enum_string,
      click_id: getUrlParam(getSource().click_id_key),
      device: getUrlParam("device"),
      model: getUrlParam("model"),
      keyword: getUrlParam("kw"),
      match_type: getUrlParam("match"),
      pg: getUrlParam("pg"),
      camp: getUrlParam("camp"),
    },
  };

  const jsonUserData = JSON.stringify(userData, undefined, 4);

  const handleChange = (event) => {
    const { name, value } = event.target;

    //update values
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleTermChange = (event) => {
    const { value } = event.target;
    //update values
    setValues({
      ...values,
      lengthOfCover: parseInt(value),
    });
  };

  const handleBlur = (event) => {
    setCompanyNameCriteria();
    let name = event.target.name;
    validateData({
      [`${name}`]: values[name],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisabled(true);

    if (hasExistingSubmission()) {
      setErrorMessage("We have already recieved your enquiry.");
      window.location.hash = "alert";
      return false;
    }

    setCompanyNameCriteria();
    // Check if the form is valid
    let formValid = validateData(values);
    if (!formValid) {
      return false;
    }

    validatePhoneNumber(values.phone)
      .then((res) => {
        if (res === false) {
          handleError(
            "Invalid phone number",
            document.getElementById("phone"),
            "phone"
          );
          setDisabled(false);
          return false;
        }
        axios
          .post("https://leads.efgtech.co.uk", jsonUserData, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then(() => {
            //we only allow one submission every 24hrs
            cookies.set(UKL_LAST_SUBMISSION_COOKIE_NAME, true, {
              path: "/",
              maxAge: 86400,
            });
            navigate("/results/", { state: { formType } });
          })
          .catch(() => {
            setDisabled(false);
            setErrorMessage("Unable to submit.");
            return false;
          });
      })
      .catch(() => {
        //even if it fails, we still want to accept as not the customer's fault.
      })
      .catch(() => {});
  };

  return {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    setValues,
    handleTermChange,
    hasExistingSubmission,
    errorMessage,
    setType,
    setCic,
    setGrouping,
    setSmoker,
    showHideCicAndLoc,
    disabled,
  };
};

export default useForm;

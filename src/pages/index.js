import React, { useEffect, useState } from "react";
import "../css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import QuoteForm from "../components/QuoteForm.js";
import Footer from "../components/Footer";
import Focus from "../components/Focus";
import { Helmet } from "react-helmet";
import { PhoneConversion } from "../data/PhoneConversion";
import { PP_TYPE } from "../types/types";
import { isBrowser } from "../data/utils";

const App = (props) => {
  const [phoneNumber, setPhoneNumber] = useState("0161 694 8990");
  const [formType, setFormType] = useState(PP_TYPE);

  useEffect(() => {
    if (props.hasOwnProperty("type")) {
      setFormType(props.type);
    }
  }, [props]);

  useEffect(() => {
    if (isBrowser()) {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", `${process.env.GATSBY_GOOGLE_ANALYTICS_ID}`);
    }
  });

  // Helmet used to dynamically manage the head section
  return (
    <main>
      <Helmet>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GATSBY_GOOGLE_ANALYTICS_ID}`}
        />

        <script
          async={true}
          src="https://widget.reviews.co.uk/rich-snippet-reviews-widgets/dist.js"
          type="text/javascript"
        ></script>
        <script
          async={true}
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GATSBY_GOOGLE_CONVERSION_ID}`}
        ></script>
        <script
          aysnc={true}
          type="text/javascript"
          src="https://www.googleadservices.com/pagead/conversion.js"
        ></script>
        <script
          async={true}
          type="text/javascript"
          src={`https://www.googletagmanager.com/gtm.js?id=${process.env.GATSBY_GOOGLE_TAG_ID}`}
        ></script>
        {isBrowser() && (
          <script>
            {(function (h, o, t, j, a, r) {
              h.hj =
                h.hj ||
                function () {
                  (h.hj.q = h.hj.q || []).push(arguments);
                };
              h._hjSettings = {
                hjid: process.env.GATSBY_HOTJAR_ID,
                hjsv: process.env.GATSBY_HOTJAR_SNIPPET_VERSION,
              };
              a = o.getElementsByTagName("head")[0];
              r = o.createElement("script");
              r.async = 1;
              r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
              a.appendChild(r);
            })(
              window,
              document,
              "https://static.hotjar.com/c/hotjar-",
              ".js?sv="
            )}
          </script>
        )}
        <title>{props.handlePageTitle.title}</title>
      </Helmet>
      <>
        {/* Disable Focus for timing being --- Lewis Howe*/}
        {/* <Focus /> */}
        <PhoneConversion
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
        />
        <Header phoneNumber={phoneNumber} />
        <QuoteForm formType={formType} header={props.handlePageTitle.header} />
        <Footer />
      </>
    </main>
  );
};

// default values if props are not passed in
App.defaultProps = {
  handlePageTitle: {
    title: "Uk Life Insurance",
    header: <>Compare Cheap Life Insurance</>,
  },
};
export default App;

import React from "react";
import { FiSun } from "react-icons/fi";
import { BsMoon } from "react-icons/bs";
import { FiBox } from "react-icons/fi";
import { AiOutlineQuestion } from "react-icons/ai";

const schemeFaq = [
  {
    id: 1,
    faq: "What is a Payment Gateway?",
    des: "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.",
  },
  {
    id: 2,
    faq: "What is a Payment Gateway?",
    des: "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.",
  },
  {
    id: 3,
    faq: "What is a Payment Gateway?",
    des: "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.",
  },
  {
    id: 4,
    faq: "What is a Payment Gateway?",
    des: "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.",
  },
];
const instituteFaq = [
  {
    id: 1,
    faq: "What is a Institute?",
    des: "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.",
  },
  {
    id: 2,
    faq: "What is a Payment Gateway?",
    des: "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.",
  },
  {
    id: 3,
    faq: "What is a Payment Gateway?",
    des: "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.",
  },
  {
    id: 4,
    faq: "What is a Payment Gateway?",
    des: "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.",
  },
];
const productfaq = [
  {
    id: 1,
    faq: "What is a Product?",
    des: "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.",
  },
  {
    id: 2,
    faq: "What is a Payment Gateway?",
    des: "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.",
  },
  {
    id: 3,
    faq: "What is a Payment Gateway?",
    des: "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.",
  },
  {
    id: 4,
    faq: "What is a Payment Gateway?",
    des: "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.",
  },
];
const Eligibilityfaq = [
  {
    id: 1,
    faq: "What is a Eligibilty?",
    des: "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.",
  },
  {
    id: 2,
    faq: "What is a Payment Gateway?",
    des: "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.",
  },
  {
    id: 3,
    faq: "What is a Payment Gateway?",
    des: "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.",
  },
  {
    id: 4,
    faq: "What is a Payment Gateway?",
    des: "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.",
  },
];
const Faq = () => {
  return (
    <>
      <section id="faq">
        <div className="container">
          <h3 className="heading">F.A.Q</h3>

          <center>
            <ul className="nav nav-tabs faqmenu" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  <FiSun />
                  &nbsp;&nbsp;Scheme
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  <BsMoon />
                  &nbsp;&nbsp;Institute
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  <FiBox />
                  &nbsp;&nbsp;Product
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="eligibilty-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#eligibilty"
                  type="button"
                  role="tab"
                  aria-controls="eligibilty"
                  aria-selected="false"
                >
                  <AiOutlineQuestion />
                  &nbsp;&nbsp;Eligibility
                </button>
              </li>
            </ul>
          </center>

          <div className="col mt-5">
            <div className="tab-content " id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                {schemeFaq.map((item, key) => (
                  <div
                    key={item.id}
                    className="accordion-item tab-pane fade show "
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapsescheme${key}`}
                        aria-expanded="true"
                        aria-controls={`#collapsescheme${key}`}
                      >
                        <i className="fa fa-circle" id="faiconcolorfaqdrop"></i>
                        <span>&nbsp;&nbsp;</span>
                        <b>{item.faq}</b>
                      </button>
                    </h2>

                    <div
                      id={`collapsescheme${key}`}
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body parafix">
                        <h5 className="faqcardheading">{item.faq}</h5>
                        <p>{item.des}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
                  
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                {instituteFaq.map((item, key) => (
                  <div
                    key={item.id}
                    className="accordion-item tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapseinstitute${item.id}`}
                        aria-expanded="true"
                        aria-controls={`collapseinstitute${item.id}`}
                      >
                        <i className="fa fa-circle" id="faiconcolorfaqdrop"></i>
                        <span>&nbsp;&nbsp;</span>
                        <b>{item.faq}</b>
                      </button>
                    </h2>

                    <div
                      id={`collapseinstitute${item.id}`}
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body parafix">
                        <h5 className="faqcardheading">{item.faq}</h5>
                        <p>{item.des}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                {productfaq.map((item, key) => (
                  <div
                    key={item.id}
                    className="accordion-item tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapseproduct${item.id}`}
                        aria-expanded="true"
                        aria-controls={`collapseproduct${item.id}`}
                      >
                        <i className="fa fa-circle" id="faiconcolorfaqdrop"></i>
                        <span>&nbsp;&nbsp;</span>
                        <b>{item.faq}</b>
                      </button>
                    </h2>

                    <div
                      id={`collapseproduct${item.id}`}
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body parafix">
                        <h5 className="faqcardheading">{item.faq}</h5>
                        <p>{item.des}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="tab-pane fade"
                id="eligibilty"
                role="tabpanel"
                aria-labelledby="eligibilty-tab"
              >
                {Eligibilityfaq.map((item, key) => (
                  <div
                    key={item.id}
                    className="accordion-item tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapseEligibility${item.id}`}
                        aria-expanded="true"
                        aria-controls={`collapseEligibility${item.id}`}
                      >
                        <i className="fa fa-circle" id="faiconcolorfaqdrop"></i>
                        <span>&nbsp;&nbsp;</span>
                        <b>{item.faq}</b>
                      </button>
                    </h2>

                    <div
                      id={`collapseEligibility${item.id}`}
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body parafix">
                        <h5 className="faqcardheading">{item.faq}</h5>
                        <p>{item.des}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;

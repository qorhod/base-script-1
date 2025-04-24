import React from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Topbar from "@/components/common/Topbar";

const Page = () => {
  return (
    <>
      <Topbar />
      <Header />
      <Breadcrumb />
      <div className="faq-page-wrap pt-100 mb-100">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-4 d-lg-flex d-none">
              <div className="faq-img">
                <img src="/assets/img/inner-page/faq-img.png" alt="" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="faq-area">
                <div className="section-title-and-filter mb-40">
                  <div className="section-title">
                    <h4>FAQ’s &amp; Latest Answer</h4>
                  </div>
                </div>
                <div className="faq-wrap">
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="flush-headingOne">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          What is the process of buying a home?
                        </button>
                      </h5>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Consulting with a real estate attorney or professional
                          in your area can provide more specific and accurate
                          information regarding real estate titles.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="flush-headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          What is the process of selling a home?
                        </button>
                      </h5>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Consulting with a real estate attorney or professional
                          in your area can provide more specific and accurate
                          information regarding real estate titles.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="flush-headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          How do I determine the value of my property?
                        </button>
                      </h5>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Consulting with a real estate attorney or professional
                          in your area can provide more specific and accurate
                          information regarding real estate titles.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="flush-headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFour"
                          aria-expanded="false"
                          aria-controls="flush-collapseFour"
                        >
                          What should I look for in a property inspection?
                        </button>
                      </h5>
                      <div
                        id="flush-collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingFour"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Consulting with a real estate attorney or professional
                          in your area can provide more specific and accurate
                          information regarding real estate titles.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="flush-headingFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFive"
                          aria-expanded="false"
                          aria-controls="flush-collapseFive"
                        >
                          What is the role of a real estate agent in the
                          negotiation process?
                        </button>
                      </h5>
                      <div
                        id="flush-collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingFive"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Consulting with a real estate attorney or professional
                          in your area can provide more specific and accurate
                          information regarding real estate titles.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="flush-headingSix">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseSix"
                          aria-expanded="false"
                          aria-controls="flush-collapseSix"
                        >
                          What are some common contingencies in a purchase
                          agreement?
                        </button>
                      </h5>
                      <div
                        id="flush-collapseSix"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingSix"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Consulting with a real estate attorney or professional
                          in your area can provide more specific and accurate
                          information regarding real estate titles.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="flush-headingSeven">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseSeven"
                          aria-expanded="false"
                          aria-controls="flush-collapseSeven"
                        >
                          How long does it typically take to sell a property?
                        </button>
                      </h5>
                      <div
                        id="flush-collapseSeven"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingSeven"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Consulting with a real estate attorney or professional
                          in your area can provide more specific and accurate
                          information regarding real estate titles.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-inquiery-form pt-80 pb-80">
        <div className="form-img d-xl-flex d-none">
          <img src="/assets/img/inner-page/inquiery-form-img.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="section-title mb-20">
                <h4>If Any Inquirey, To Do Ask Somethings </h4>
              </div>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-30">
                    <div className="form-inner">
                      <label>Your Name* :</label>
                      <input type="text" placeholder="Jackson Mile" />
                    </div>
                  </div>
                  <div className="col-md-6 mb-30">
                    <div className="form-inner">
                      <label>Your Email* :</label>
                      <input type="text" placeholder="example@gamil.com" />
                    </div>
                  </div>
                  <div className="col-md-12 mb-30">
                    <div className="form-inner">
                      <label>Type Your Question*</label>
                      <textarea
                        placeholder="Type Your Question*"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-inner">
                      <button type="submit" className="primary-btn3">
                        Submit Now
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;

"use client"
import { useSidebar } from '@/context/SidebarContext';
import SelectComponent from '@/uitils/SelectComponent'
import React from 'react'




const Page = () => {
  const { isOpen } = useSidebar();
  return (
    <div className={`main-content ${isOpen?"slide":""}`}>
      <div className="row">
        <div className="col-lg-12">
          <div className="main-content-title-profile mb-30">
            <div className="main-content-title">
              <h3>Frequently Asked Question</h3>
              <img src="/assets/img/dashboard/icon/property-listing-icon.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-faqs-wrapper">
        <div className="row g-xl-4 gy-5">
          <div className="col-xl-6">
            <div className="dashboard-faqs-area">
              <div className="dashboard-faqs-top">
                <div className="dashboard-faqs-title">
                  <h6>Your Generate FAQ’s</h6>
                </div>
                <div className="dashboard-faqs-filter">
                  <span>Filter By:</span>
                  <div className="filter-dropdown">
                  <SelectComponent placeholder={"Apertmant"} options={["Houses","Apertmant"]} />
                  
                  </div>
                </div>
              </div>
              <div className="faq-wrap">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="flush-headingOne">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">What is the process of buying a home?
                        <span className="edit-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                            <path d="M9.68857 1.2125C9.74697 1.27108 9.77976 1.35042 9.77976 1.43313C9.77976 1.51584 9.74697 1.59517 9.68857 1.65375L9.0367 2.30625L7.7867 1.05625L8.43857 0.403752C8.49717 0.345167 8.57665 0.312256 8.65951 0.312256C8.74237 0.312256 8.82184 0.345167 8.88045 0.403752L9.68857 1.21188V1.2125ZM8.59482 2.7475L7.34482 1.4975L3.0867 5.75625C3.0523 5.79064 3.0264 5.83259 3.01107 5.87875L2.50795 7.3875C2.49882 7.41501 2.49753 7.44451 2.50421 7.47271C2.51088 7.50091 2.52527 7.52669 2.54576 7.54718C2.56626 7.56768 2.59204 7.58206 2.62024 7.58874C2.64844 7.59542 2.67794 7.59413 2.70545 7.585L4.2142 7.08188C4.2603 7.06673 4.30224 7.04105 4.3367 7.00688L8.59482 2.7475Z" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.625 8.4375C0.625 8.68614 0.723772 8.9246 0.899587 9.10041C1.0754 9.27623 1.31386 9.375 1.5625 9.375H8.4375C8.68614 9.375 8.9246 9.27623 9.10041 9.10041C9.27623 8.9246 9.375 8.68614 9.375 8.4375V4.6875C9.375 4.60462 9.34208 4.52513 9.28347 4.46653C9.22487 4.40792 9.14538 4.375 9.0625 4.375C8.97962 4.375 8.90013 4.40792 8.84153 4.46653C8.78292 4.52513 8.75 4.60462 8.75 4.6875V8.4375C8.75 8.52038 8.71708 8.59987 8.65847 8.65847C8.59987 8.71708 8.52038 8.75 8.4375 8.75H1.5625C1.47962 8.75 1.40013 8.71708 1.34153 8.65847C1.28292 8.59987 1.25 8.52038 1.25 8.4375V1.5625C1.25 1.47962 1.28292 1.40013 1.34153 1.34153C1.40013 1.28292 1.47962 1.25 1.5625 1.25H5.625C5.70788 1.25 5.78737 1.21708 5.84597 1.15847C5.90458 1.09987 5.9375 1.02038 5.9375 0.9375C5.9375 0.85462 5.90458 0.775134 5.84597 0.716529C5.78737 0.657924 5.70788 0.625 5.625 0.625H1.5625C1.31386 0.625 1.0754 0.723772 0.899587 0.899587C0.723772 1.0754 0.625 1.31386 0.625 1.5625V8.4375Z" />
                          </svg>
                        </span>
                      </button>
                    </h5>
                    <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">Consulting with a real estate attorney or professional in your area can provide more specific and accurate information regarding real estate titles.</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="flush-headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">What is the process of selling a home?
                        <span className="edit-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                            <path d="M9.68857 1.2125C9.74697 1.27108 9.77976 1.35042 9.77976 1.43313C9.77976 1.51584 9.74697 1.59517 9.68857 1.65375L9.0367 2.30625L7.7867 1.05625L8.43857 0.403752C8.49717 0.345167 8.57665 0.312256 8.65951 0.312256C8.74237 0.312256 8.82184 0.345167 8.88045 0.403752L9.68857 1.21188V1.2125ZM8.59482 2.7475L7.34482 1.4975L3.0867 5.75625C3.0523 5.79064 3.0264 5.83259 3.01107 5.87875L2.50795 7.3875C2.49882 7.41501 2.49753 7.44451 2.50421 7.47271C2.51088 7.50091 2.52527 7.52669 2.54576 7.54718C2.56626 7.56768 2.59204 7.58206 2.62024 7.58874C2.64844 7.59542 2.67794 7.59413 2.70545 7.585L4.2142 7.08188C4.2603 7.06673 4.30224 7.04105 4.3367 7.00688L8.59482 2.7475Z" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.625 8.4375C0.625 8.68614 0.723772 8.9246 0.899587 9.10041C1.0754 9.27623 1.31386 9.375 1.5625 9.375H8.4375C8.68614 9.375 8.9246 9.27623 9.10041 9.10041C9.27623 8.9246 9.375 8.68614 9.375 8.4375V4.6875C9.375 4.60462 9.34208 4.52513 9.28347 4.46653C9.22487 4.40792 9.14538 4.375 9.0625 4.375C8.97962 4.375 8.90013 4.40792 8.84153 4.46653C8.78292 4.52513 8.75 4.60462 8.75 4.6875V8.4375C8.75 8.52038 8.71708 8.59987 8.65847 8.65847C8.59987 8.71708 8.52038 8.75 8.4375 8.75H1.5625C1.47962 8.75 1.40013 8.71708 1.34153 8.65847C1.28292 8.59987 1.25 8.52038 1.25 8.4375V1.5625C1.25 1.47962 1.28292 1.40013 1.34153 1.34153C1.40013 1.28292 1.47962 1.25 1.5625 1.25H5.625C5.70788 1.25 5.78737 1.21708 5.84597 1.15847C5.90458 1.09987 5.9375 1.02038 5.9375 0.9375C5.9375 0.85462 5.90458 0.775134 5.84597 0.716529C5.78737 0.657924 5.70788 0.625 5.625 0.625H1.5625C1.31386 0.625 1.0754 0.723772 0.899587 0.899587C0.723772 1.0754 0.625 1.31386 0.625 1.5625V8.4375Z" />
                          </svg>
                        </span>
                      </button>
                    </h5>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">Consulting with a real estate attorney or professional in your area can provide more specific and accurate information regarding real estate titles.</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="flush-headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">How do I determine the value of my property?
                        <span className="edit-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                            <path d="M9.68857 1.2125C9.74697 1.27108 9.77976 1.35042 9.77976 1.43313C9.77976 1.51584 9.74697 1.59517 9.68857 1.65375L9.0367 2.30625L7.7867 1.05625L8.43857 0.403752C8.49717 0.345167 8.57665 0.312256 8.65951 0.312256C8.74237 0.312256 8.82184 0.345167 8.88045 0.403752L9.68857 1.21188V1.2125ZM8.59482 2.7475L7.34482 1.4975L3.0867 5.75625C3.0523 5.79064 3.0264 5.83259 3.01107 5.87875L2.50795 7.3875C2.49882 7.41501 2.49753 7.44451 2.50421 7.47271C2.51088 7.50091 2.52527 7.52669 2.54576 7.54718C2.56626 7.56768 2.59204 7.58206 2.62024 7.58874C2.64844 7.59542 2.67794 7.59413 2.70545 7.585L4.2142 7.08188C4.2603 7.06673 4.30224 7.04105 4.3367 7.00688L8.59482 2.7475Z" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.625 8.4375C0.625 8.68614 0.723772 8.9246 0.899587 9.10041C1.0754 9.27623 1.31386 9.375 1.5625 9.375H8.4375C8.68614 9.375 8.9246 9.27623 9.10041 9.10041C9.27623 8.9246 9.375 8.68614 9.375 8.4375V4.6875C9.375 4.60462 9.34208 4.52513 9.28347 4.46653C9.22487 4.40792 9.14538 4.375 9.0625 4.375C8.97962 4.375 8.90013 4.40792 8.84153 4.46653C8.78292 4.52513 8.75 4.60462 8.75 4.6875V8.4375C8.75 8.52038 8.71708 8.59987 8.65847 8.65847C8.59987 8.71708 8.52038 8.75 8.4375 8.75H1.5625C1.47962 8.75 1.40013 8.71708 1.34153 8.65847C1.28292 8.59987 1.25 8.52038 1.25 8.4375V1.5625C1.25 1.47962 1.28292 1.40013 1.34153 1.34153C1.40013 1.28292 1.47962 1.25 1.5625 1.25H5.625C5.70788 1.25 5.78737 1.21708 5.84597 1.15847C5.90458 1.09987 5.9375 1.02038 5.9375 0.9375C5.9375 0.85462 5.90458 0.775134 5.84597 0.716529C5.78737 0.657924 5.70788 0.625 5.625 0.625H1.5625C1.31386 0.625 1.0754 0.723772 0.899587 0.899587C0.723772 1.0754 0.625 1.31386 0.625 1.5625V8.4375Z" />
                          </svg>
                        </span>
                      </button>
                    </h5>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">Consulting with a real estate attorney or professional in your area can provide more specific and accurate information regarding real estate titles.</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="flush-headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">What should I look for in a property inspection?
                        <span className="edit-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                            <path d="M9.68857 1.2125C9.74697 1.27108 9.77976 1.35042 9.77976 1.43313C9.77976 1.51584 9.74697 1.59517 9.68857 1.65375L9.0367 2.30625L7.7867 1.05625L8.43857 0.403752C8.49717 0.345167 8.57665 0.312256 8.65951 0.312256C8.74237 0.312256 8.82184 0.345167 8.88045 0.403752L9.68857 1.21188V1.2125ZM8.59482 2.7475L7.34482 1.4975L3.0867 5.75625C3.0523 5.79064 3.0264 5.83259 3.01107 5.87875L2.50795 7.3875C2.49882 7.41501 2.49753 7.44451 2.50421 7.47271C2.51088 7.50091 2.52527 7.52669 2.54576 7.54718C2.56626 7.56768 2.59204 7.58206 2.62024 7.58874C2.64844 7.59542 2.67794 7.59413 2.70545 7.585L4.2142 7.08188C4.2603 7.06673 4.30224 7.04105 4.3367 7.00688L8.59482 2.7475Z" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.625 8.4375C0.625 8.68614 0.723772 8.9246 0.899587 9.10041C1.0754 9.27623 1.31386 9.375 1.5625 9.375H8.4375C8.68614 9.375 8.9246 9.27623 9.10041 9.10041C9.27623 8.9246 9.375 8.68614 9.375 8.4375V4.6875C9.375 4.60462 9.34208 4.52513 9.28347 4.46653C9.22487 4.40792 9.14538 4.375 9.0625 4.375C8.97962 4.375 8.90013 4.40792 8.84153 4.46653C8.78292 4.52513 8.75 4.60462 8.75 4.6875V8.4375C8.75 8.52038 8.71708 8.59987 8.65847 8.65847C8.59987 8.71708 8.52038 8.75 8.4375 8.75H1.5625C1.47962 8.75 1.40013 8.71708 1.34153 8.65847C1.28292 8.59987 1.25 8.52038 1.25 8.4375V1.5625C1.25 1.47962 1.28292 1.40013 1.34153 1.34153C1.40013 1.28292 1.47962 1.25 1.5625 1.25H5.625C5.70788 1.25 5.78737 1.21708 5.84597 1.15847C5.90458 1.09987 5.9375 1.02038 5.9375 0.9375C5.9375 0.85462 5.90458 0.775134 5.84597 0.716529C5.78737 0.657924 5.70788 0.625 5.625 0.625H1.5625C1.31386 0.625 1.0754 0.723772 0.899587 0.899587C0.723772 1.0754 0.625 1.31386 0.625 1.5625V8.4375Z" />
                          </svg>
                        </span>
                      </button>
                    </h5>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">Consulting with a real estate attorney or professional in your area can provide more specific and accurate information regarding real estate titles.</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="flush-headingFive">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">What is the role of a real estate agent in the negotiation process?
                        <span className="edit-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                            <path d="M9.68857 1.2125C9.74697 1.27108 9.77976 1.35042 9.77976 1.43313C9.77976 1.51584 9.74697 1.59517 9.68857 1.65375L9.0367 2.30625L7.7867 1.05625L8.43857 0.403752C8.49717 0.345167 8.57665 0.312256 8.65951 0.312256C8.74237 0.312256 8.82184 0.345167 8.88045 0.403752L9.68857 1.21188V1.2125ZM8.59482 2.7475L7.34482 1.4975L3.0867 5.75625C3.0523 5.79064 3.0264 5.83259 3.01107 5.87875L2.50795 7.3875C2.49882 7.41501 2.49753 7.44451 2.50421 7.47271C2.51088 7.50091 2.52527 7.52669 2.54576 7.54718C2.56626 7.56768 2.59204 7.58206 2.62024 7.58874C2.64844 7.59542 2.67794 7.59413 2.70545 7.585L4.2142 7.08188C4.2603 7.06673 4.30224 7.04105 4.3367 7.00688L8.59482 2.7475Z" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.625 8.4375C0.625 8.68614 0.723772 8.9246 0.899587 9.10041C1.0754 9.27623 1.31386 9.375 1.5625 9.375H8.4375C8.68614 9.375 8.9246 9.27623 9.10041 9.10041C9.27623 8.9246 9.375 8.68614 9.375 8.4375V4.6875C9.375 4.60462 9.34208 4.52513 9.28347 4.46653C9.22487 4.40792 9.14538 4.375 9.0625 4.375C8.97962 4.375 8.90013 4.40792 8.84153 4.46653C8.78292 4.52513 8.75 4.60462 8.75 4.6875V8.4375C8.75 8.52038 8.71708 8.59987 8.65847 8.65847C8.59987 8.71708 8.52038 8.75 8.4375 8.75H1.5625C1.47962 8.75 1.40013 8.71708 1.34153 8.65847C1.28292 8.59987 1.25 8.52038 1.25 8.4375V1.5625C1.25 1.47962 1.28292 1.40013 1.34153 1.34153C1.40013 1.28292 1.47962 1.25 1.5625 1.25H5.625C5.70788 1.25 5.78737 1.21708 5.84597 1.15847C5.90458 1.09987 5.9375 1.02038 5.9375 0.9375C5.9375 0.85462 5.90458 0.775134 5.84597 0.716529C5.78737 0.657924 5.70788 0.625 5.625 0.625H1.5625C1.31386 0.625 1.0754 0.723772 0.899587 0.899587C0.723772 1.0754 0.625 1.31386 0.625 1.5625V8.4375Z" />
                          </svg>
                        </span>
                      </button>
                    </h5>
                    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">Consulting with a real estate attorney or professional in your area can provide more specific and accurate information regarding real estate titles.</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="flush-headingSix">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">What are some common contingencies in a purchase agreement?
                        <span className="edit-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                            <path d="M9.68857 1.2125C9.74697 1.27108 9.77976 1.35042 9.77976 1.43313C9.77976 1.51584 9.74697 1.59517 9.68857 1.65375L9.0367 2.30625L7.7867 1.05625L8.43857 0.403752C8.49717 0.345167 8.57665 0.312256 8.65951 0.312256C8.74237 0.312256 8.82184 0.345167 8.88045 0.403752L9.68857 1.21188V1.2125ZM8.59482 2.7475L7.34482 1.4975L3.0867 5.75625C3.0523 5.79064 3.0264 5.83259 3.01107 5.87875L2.50795 7.3875C2.49882 7.41501 2.49753 7.44451 2.50421 7.47271C2.51088 7.50091 2.52527 7.52669 2.54576 7.54718C2.56626 7.56768 2.59204 7.58206 2.62024 7.58874C2.64844 7.59542 2.67794 7.59413 2.70545 7.585L4.2142 7.08188C4.2603 7.06673 4.30224 7.04105 4.3367 7.00688L8.59482 2.7475Z" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.625 8.4375C0.625 8.68614 0.723772 8.9246 0.899587 9.10041C1.0754 9.27623 1.31386 9.375 1.5625 9.375H8.4375C8.68614 9.375 8.9246 9.27623 9.10041 9.10041C9.27623 8.9246 9.375 8.68614 9.375 8.4375V4.6875C9.375 4.60462 9.34208 4.52513 9.28347 4.46653C9.22487 4.40792 9.14538 4.375 9.0625 4.375C8.97962 4.375 8.90013 4.40792 8.84153 4.46653C8.78292 4.52513 8.75 4.60462 8.75 4.6875V8.4375C8.75 8.52038 8.71708 8.59987 8.65847 8.65847C8.59987 8.71708 8.52038 8.75 8.4375 8.75H1.5625C1.47962 8.75 1.40013 8.71708 1.34153 8.65847C1.28292 8.59987 1.25 8.52038 1.25 8.4375V1.5625C1.25 1.47962 1.28292 1.40013 1.34153 1.34153C1.40013 1.28292 1.47962 1.25 1.5625 1.25H5.625C5.70788 1.25 5.78737 1.21708 5.84597 1.15847C5.90458 1.09987 5.9375 1.02038 5.9375 0.9375C5.9375 0.85462 5.90458 0.775134 5.84597 0.716529C5.78737 0.657924 5.70788 0.625 5.625 0.625H1.5625C1.31386 0.625 1.0754 0.723772 0.899587 0.899587C0.723772 1.0754 0.625 1.31386 0.625 1.5625V8.4375Z" />
                          </svg>
                        </span>
                      </button>
                    </h5>
                    <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">Consulting with a real estate attorney or professional in your area can provide more specific and accurate information regarding real estate titles.</div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h5 className="accordion-header" id="flush-headingSeven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">How long does it typically take to sell a property?
                        <span className="edit-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                            <path d="M9.68857 1.2125C9.74697 1.27108 9.77976 1.35042 9.77976 1.43313C9.77976 1.51584 9.74697 1.59517 9.68857 1.65375L9.0367 2.30625L7.7867 1.05625L8.43857 0.403752C8.49717 0.345167 8.57665 0.312256 8.65951 0.312256C8.74237 0.312256 8.82184 0.345167 8.88045 0.403752L9.68857 1.21188V1.2125ZM8.59482 2.7475L7.34482 1.4975L3.0867 5.75625C3.0523 5.79064 3.0264 5.83259 3.01107 5.87875L2.50795 7.3875C2.49882 7.41501 2.49753 7.44451 2.50421 7.47271C2.51088 7.50091 2.52527 7.52669 2.54576 7.54718C2.56626 7.56768 2.59204 7.58206 2.62024 7.58874C2.64844 7.59542 2.67794 7.59413 2.70545 7.585L4.2142 7.08188C4.2603 7.06673 4.30224 7.04105 4.3367 7.00688L8.59482 2.7475Z" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.625 8.4375C0.625 8.68614 0.723772 8.9246 0.899587 9.10041C1.0754 9.27623 1.31386 9.375 1.5625 9.375H8.4375C8.68614 9.375 8.9246 9.27623 9.10041 9.10041C9.27623 8.9246 9.375 8.68614 9.375 8.4375V4.6875C9.375 4.60462 9.34208 4.52513 9.28347 4.46653C9.22487 4.40792 9.14538 4.375 9.0625 4.375C8.97962 4.375 8.90013 4.40792 8.84153 4.46653C8.78292 4.52513 8.75 4.60462 8.75 4.6875V8.4375C8.75 8.52038 8.71708 8.59987 8.65847 8.65847C8.59987 8.71708 8.52038 8.75 8.4375 8.75H1.5625C1.47962 8.75 1.40013 8.71708 1.34153 8.65847C1.28292 8.59987 1.25 8.52038 1.25 8.4375V1.5625C1.25 1.47962 1.28292 1.40013 1.34153 1.34153C1.40013 1.28292 1.47962 1.25 1.5625 1.25H5.625C5.70788 1.25 5.78737 1.21708 5.84597 1.15847C5.90458 1.09987 5.9375 1.02038 5.9375 0.9375C5.9375 0.85462 5.90458 0.775134 5.84597 0.716529C5.78737 0.657924 5.70788 0.625 5.625 0.625H1.5625C1.31386 0.625 1.0754 0.723772 0.899587 0.899587C0.723772 1.0754 0.625 1.31386 0.625 1.5625V8.4375Z" />
                          </svg>
                        </span>
                      </button>
                    </h5>
                    <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">Consulting with a real estate attorney or professional in your area can provide more specific and accurate information regarding real estate titles.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pagination-area">
                <ul className="paginations">
                  <li className="page-item active">
                    <a href="#">01</a>
                  </li>
                  <li className="page-item">
                    <a href="#">02</a>
                  </li>
                  <li className="page-item">
                    <a href="#">03</a>
                  </li>
                </ul>
                <ul className="paginations-buttons">
                  <li>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width={7} height={14} viewBox="0 0 7 14">
                        <path d="M0 7.00008L7 0L2.54545 7.00008L7 14L0 7.00008Z" />
                      </svg>
                      Prev
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Next
                      <svg xmlns="http://www.w3.org/2000/svg" width={7} height={14} viewBox="0 0 7 14" fill="none">
                        <path d="M7 7.00008L0 0L4.45455 7.00008L0 14L7 7.00008Z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="dashboard-faqs-question">
              <div className="dashboard-faqs-title two">
                <h6>To Generate Question</h6>
                <p>Generally, real estate transactions do not have a standard refund policy like traditional retail purchases.</p>
              </div>
              <div className="dashboard-faqs-question-form">
                <form>
                  <div className="row">
                    <div className="col-lg-12 mb-30">
                      <div className="form-inner">
                        <label>Question Category*</label>
                        <SelectComponent placeholder={"Home Town"} options={["Home Town","City Town"]} />
                        
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-inner mb-30">
                        <label>What’s Your Question*</label>
                        <input type="text" placeholder="Type your question" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-inner mb-50">
                        <label>Question’s Answer*</label>
                        <textarea placeholder="Write your answer" defaultValue={""} />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="primary-btn3">Add FAQ’s</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page

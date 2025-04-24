"use client"
import SubscriptionPlanModal from '@/components/uiModal/SubscriptionPlanModal';
import { useSidebar } from '@/context/SidebarContext';
import React, { useEffect, useRef } from 'react'

const Page = () => {
  const { isOpen } = useSidebar();
  const downloadBtnRef = useRef(null);
  const downloadBtnRef2 = useRef(null);
  const downloadBtnRef3= useRef(null);

  const toggleActiveClass = (element) => {
    element.classList.toggle('download');
  };



  useEffect(() => {
    const skillPers = document.querySelectorAll(".subscription-bar-per");

    skillPers.forEach(function (skillPer) {
      var per = parseFloat(skillPer.getAttribute("data-per"));
      skillPer.style.width = per + "%";

      var animatedValue = 0;
      var startTime = null;

      function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = timestamp - startTime;
        var stepPercentage = progress / 1000; // Dividing by duration in milliseconds (1000ms = 1s)

        if (stepPercentage < 1) {
          animatedValue = per * stepPercentage;
          skillPer.setAttribute("data-per", Math.floor(animatedValue) + "%");
          requestAnimationFrame(animate);
        } else {
          animatedValue = per;
          skillPer.setAttribute("data-per", Math.floor(animatedValue) + "%");
        }
      }
      requestAnimationFrame(animate);
    });
  }, []);
  return (
    <>
      <SubscriptionPlanModal/>
      <div className={`main-content ${isOpen?"slide":""}`}>
        <div className="row">
          <div className="col-lg-12">
            <div className="main-content-title-profile mb-30">
              <div className="main-content-title">
                <h3>Your Subscription Plan</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="subscription-package-wrapper mb-40">
          <div className="row g-4 mb-35">
            <div className="col-xl-6">
              <div className="subscription-package-card">
                <div className="package-card-top">
                  <div className="card-title-subs-bar">
                    <div className="package-card-title">
                      <span>Pricing Plan</span>
                      <h4>Business Package</h4>
                    </div>
                    <div className="package-subscription-bar-wrrap">
                      <div className="subscription-bar-title">
                        <span>Subscription Used</span>
                      </div>
                      <div className="subscription-bar">
                        <div className="subscription-bar-per" data-per={40} />
                      </div>
                    </div>
                  </div>
                  <div className="package-card-price">
                    <h2>$35.00 <br /> <span>/per month</span></h2>
                  </div>
                </div>
                <div className="package-card-btns">
                  <button type="button" className="cancle-btn order-sm-1 order-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width={11} height={13} viewBox="0 0 11 13">
                      <path d="M9.9 1.52344H8.06667V1.14258C8.06667 0.512561 7.57321 0 6.96667 0H4.03333C3.42679 0 2.93333 0.512561 2.93333 1.14258V1.52344H1.1C0.49346 1.52344 0 2.036 0 2.66602C0 3.172 0.318389 3.60194 0.7579 3.75174L1.41191 11.9523C1.45902 12.5398 1.94052 13 2.5081 13H8.4919C9.0595 13 9.54101 12.5398 9.58814 11.9521L10.2421 3.75172C10.6816 3.60194 11 3.172 11 2.66602C11 2.036 10.5065 1.52344 9.9 1.52344ZM3.66667 1.14258C3.66667 0.932572 3.83115 0.761719 4.03333 0.761719H6.96667C7.16885 0.761719 7.33333 0.932572 7.33333 1.14258V1.52344H3.66667V1.14258ZM8.8573 11.8891C8.84158 12.0849 8.6811 12.2383 8.4919 12.2383H2.5081C2.31892 12.2383 2.15842 12.0849 2.14275 11.8892L1.4983 3.80859H9.5017L8.8573 11.8891ZM9.9 3.04688H1.1C0.89782 3.04688 0.733333 2.87602 0.733333 2.66602C0.733333 2.45601 0.89782 2.28516 1.1 2.28516H9.9C10.1022 2.28516 10.2667 2.45601 10.2667 2.66602C10.2667 2.87602 10.1022 3.04688 9.9 3.04688Z" />
                      <path d="M4.03389 11.0722L3.66722 4.92762C3.65468 4.71767 3.47973 4.55799 3.27858 4.57106C3.07645 4.58409 2.92277 4.76482 2.93528 4.97475L3.30195 11.1193C3.314 11.3212 3.47543 11.4766 3.66757 11.4766C3.87991 11.4766 4.04692 11.2908 4.03389 11.0722ZM5.50127 4.57035C5.29877 4.57035 5.1346 4.74087 5.1346 4.95121V11.0957C5.1346 11.3061 5.29877 11.4766 5.50127 11.4766C5.70376 11.4766 5.86793 11.3061 5.86793 11.0957V4.95121C5.86793 4.74087 5.70376 4.57035 5.50127 4.57035ZM7.72393 4.57109C7.52226 4.55806 7.3478 4.71769 7.33528 4.92765L6.96862 11.0722C6.95613 11.2821 7.10981 11.4628 7.31191 11.4759C7.51414 11.4889 7.68804 11.3292 7.70056 11.1193L8.06722 4.97477C8.07974 4.76482 7.92606 4.58409 7.72393 4.57109Z" />
                    </svg>
                    Cancel Plan
                  </button>
                  <button type="submit" className="primary-btn6 order-sm-2 order-1" data-bs-toggle="modal" data-bs-target="#subscriptionPlanModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                      <path d="M8.33624 2.84003L1.17627 10L0 8.82373L7.15914 1.66376H0.849347V0H10V9.15065H8.33624V2.84003Z" />
                    </svg>
                    Upgrade Plan
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="subscription-package-card">
                <div className="package-card-title two">
                  <h4>Package Info</h4>
                </div>
                <table className="package-info-table">
                  <thead>
                    <tr>
                      <th>Status</th>
                      <th>Active</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="status">
                          <span />
                          <p>Validation Date</p>
                        </div>
                      </td>
                      <td>24 April, 2024</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="status">
                          <span />
                          <p>Subscription Activate Date</p>
                        </div>
                      </td>
                      <td>20 July, 2023</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="status">
                          <span />
                          <p>Monthly Payment</p>
                        </div>
                      </td>
                      <td>$35.00 <span>per month</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="subscription-payment-wrapper">
            <h4>Payment Method</h4>
            <ul className="payment-list">
              <li>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                  <label className="form-check-label" htmlFor="exampleRadios1">
                    <span className="list-content">
                      <span className="icon">
                        <img src="/assets/img/dashboard/icon/mastercard-icon.svg" alt="" />
                      </span>
                      <span className="content" id="cardnumber" data-card="143 323 445 5484">
                        <span className="card-number-show">
                          <span className="title">143 323 4** ****</span>
                          <span>Show</span>
                        </span>
                        <span className="exp-date">Expire Date: 02 April, 2024</span>
                      </span>
                    </span>
                  </label>
                </div>
                <div className="dot-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width={3} height={13} viewBox="0 0 3 13">
                    <path d="M3 11.5C3 11.8978 2.84196 12.2794 2.56066 12.5607C2.27936 12.842 1.89782 13 1.5 13C1.10218 13 0.720644 12.842 0.43934 12.5607C0.158035 12.2794 0 11.8978 0 11.5C0 11.1022 0.158035 10.7206 0.43934 10.4393C0.720644 10.158 1.10218 10 1.5 10C1.89782 10 2.27936 10.158 2.56066 10.4393C2.84196 10.7206 3 11.1022 3 11.5ZM3 6.5C3 6.89782 2.84196 7.27936 2.56066 7.56066C2.27936 7.84196 1.89782 8 1.5 8C1.10218 8 0.720644 7.84196 0.43934 7.56066C0.158035 7.27936 0 6.89782 0 6.5C0 6.10218 0.158035 5.72064 0.43934 5.43934C0.720644 5.15804 1.10218 5 1.5 5C1.89782 5 2.27936 5.15804 2.56066 5.43934C2.84196 5.72064 3 6.10218 3 6.5ZM3 1.5C3 1.89782 2.84196 2.27936 2.56066 2.56066C2.27936 2.84196 1.89782 3 1.5 3C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0C1.89782 0 2.27936 0.158035 2.56066 0.43934C2.84196 0.720644 3 1.10218 3 1.5Z" />
                  </svg>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                  <label className="form-check-label" htmlFor="exampleRadios2">
                    <span className="list-content">
                      <span className="icon">
                        <img src="/assets/img/dashboard/icon/visa-icon.svg" alt="" />
                      </span>
                      <span className="content" id="cardnumber2" data-card="143 323 445 5484">
                        <span className="card-number-show">
                          <span className="title">143 323 4** ****</span>
                          <span>Show</span>
                        </span>
                        <span className="exp-date">Expire Date: 02 April, 2024</span>
                      </span>
                    </span>
                  </label>
                </div>
                <div className="dot-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width={3} height={13} viewBox="0 0 3 13">
                    <path d="M3 11.5C3 11.8978 2.84196 12.2794 2.56066 12.5607C2.27936 12.842 1.89782 13 1.5 13C1.10218 13 0.720644 12.842 0.43934 12.5607C0.158035 12.2794 0 11.8978 0 11.5C0 11.1022 0.158035 10.7206 0.43934 10.4393C0.720644 10.158 1.10218 10 1.5 10C1.89782 10 2.27936 10.158 2.56066 10.4393C2.84196 10.7206 3 11.1022 3 11.5ZM3 6.5C3 6.89782 2.84196 7.27936 2.56066 7.56066C2.27936 7.84196 1.89782 8 1.5 8C1.10218 8 0.720644 7.84196 0.43934 7.56066C0.158035 7.27936 0 6.89782 0 6.5C0 6.10218 0.158035 5.72064 0.43934 5.43934C0.720644 5.15804 1.10218 5 1.5 5C1.89782 5 2.27936 5.15804 2.56066 5.43934C2.84196 5.72064 3 6.10218 3 6.5ZM3 1.5C3 1.89782 2.84196 2.27936 2.56066 2.56066C2.27936 2.84196 1.89782 3 1.5 3C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0C1.89782 0 2.27936 0.158035 2.56066 0.43934C2.84196 0.720644 3 1.10218 3 1.5Z" />
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="subscription-package-wrapper">
          <div className="subscription-payment-wrapper">
            <h4>Payment Invoice</h4>
            <ul className="payment-list">
              <li className="style-2">
                <div className="list-content-status">
                  <div className="list-serial-content">
                    <div className="serial">
                      <span>01.</span>
                    </div>
                    <div className="list-content two">
                      <div className="icon">
                        <img src="/assets/img/dashboard/icon/payment-invoice-pdf-icon.svg" alt="" />
                      </div>
                      <div className="content">
                        <div className="card-number-show">
                          <h6>Businsess Invoice-2023.pdf</h6>
                        </div>
                        <p>Invoice Date: 02 April, 2024</p>
                      </div>
                    </div>
                  </div>
                  <div className="payment-status">
                    <h6>Status</h6>
                    <span>Paid</span>
                  </div>
                </div>
                <div className="download-btn-and-dot" onClick={() => toggleActiveClass(downloadBtnRef2.current)}>
                  <div className="download-btn" ref={downloadBtnRef2}>
                    <a href="/assets/img/dashboard/lesson1.pdf" download="lesson1.pdf">
                      Download
                      <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                        <g clipPath="url(#clip0_987_964)">
                          <path d="M0.4375 8.6626C0.553532 8.6626 0.664812 8.70869 0.746859 8.79074C0.828906 8.87279 0.875 8.98407 0.875 9.1001V11.2876C0.875 11.5197 0.967187 11.7422 1.13128 11.9063C1.29538 12.0704 1.51794 12.1626 1.75 12.1626H12.25C12.4821 12.1626 12.7046 12.0704 12.8687 11.9063C13.0328 11.7422 13.125 11.5197 13.125 11.2876V9.1001C13.125 8.98407 13.1711 8.87279 13.2531 8.79074C13.3352 8.70869 13.4465 8.6626 13.5625 8.6626C13.6785 8.6626 13.7898 8.70869 13.8719 8.79074C13.9539 8.87279 14 8.98407 14 9.1001V11.2876C14 11.7517 13.8156 12.1968 13.4874 12.525C13.1592 12.8532 12.7141 13.0376 12.25 13.0376H1.75C1.28587 13.0376 0.840752 12.8532 0.512563 12.525C0.184374 12.1968 0 11.7517 0 11.2876V9.1001C0 8.98407 0.0460936 8.87279 0.128141 8.79074C0.210188 8.70869 0.321468 8.6626 0.4375 8.6626Z" />
                          <path d="M6.68983 10.3722C6.73047 10.413 6.77874 10.4453 6.8319 10.4674C6.88505 10.4894 6.94203 10.5008 6.99958 10.5008C7.05712 10.5008 7.1141 10.4894 7.16726 10.4674C7.22041 10.4453 7.26869 10.413 7.30933 10.3722L9.93433 7.74725C10.0165 7.6651 10.0626 7.55368 10.0626 7.4375C10.0626 7.32132 10.0165 7.2099 9.93433 7.12775C9.85218 7.0456 9.74076 6.99945 9.62458 6.99945C9.5084 6.99945 9.39698 7.0456 9.31483 7.12775L7.43708 9.00638V1.3125C7.43708 1.19647 7.39098 1.08519 7.30894 1.00314C7.22689 0.921094 7.11561 0.875 6.99958 0.875C6.88354 0.875 6.77226 0.921094 6.69022 1.00314C6.60817 1.08519 6.56208 1.19647 6.56208 1.3125V9.00638L4.68433 7.12775C4.60218 7.0456 4.49076 6.99945 4.37458 6.99945C4.2584 6.99945 4.14698 7.0456 4.06483 7.12775C3.98268 7.2099 3.93652 7.32132 3.93652 7.4375C3.93652 7.55368 3.98268 7.6651 4.06483 7.74725L6.68983 10.3722Z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className="dot-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width={3} height={13} viewBox="0 0 3 13">
                      <path d="M3 11.5C3 11.8978 2.84196 12.2794 2.56066 12.5607C2.27936 12.842 1.89782 13 1.5 13C1.10218 13 0.720644 12.842 0.43934 12.5607C0.158035 12.2794 0 11.8978 0 11.5C0 11.1022 0.158035 10.7206 0.43934 10.4393C0.720644 10.158 1.10218 10 1.5 10C1.89782 10 2.27936 10.158 2.56066 10.4393C2.84196 10.7206 3 11.1022 3 11.5ZM3 6.5C3 6.89782 2.84196 7.27936 2.56066 7.56066C2.27936 7.84196 1.89782 8 1.5 8C1.10218 8 0.720644 7.84196 0.43934 7.56066C0.158035 7.27936 0 6.89782 0 6.5C0 6.10218 0.158035 5.72064 0.43934 5.43934C0.720644 5.15804 1.10218 5 1.5 5C1.89782 5 2.27936 5.15804 2.56066 5.43934C2.84196 5.72064 3 6.10218 3 6.5ZM3 1.5C3 1.89782 2.84196 2.27936 2.56066 2.56066C2.27936 2.84196 1.89782 3 1.5 3C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0C1.89782 0 2.27936 0.158035 2.56066 0.43934C2.84196 0.720644 3 1.10218 3 1.5Z" />
                    </svg>
                  </div>
                </div>
              </li>
              <li className="style-2">
                <div className="list-content-status">
                  <div className="list-serial-content">
                    <div className="serial">
                      <span>02.</span>
                    </div>
                    <div className="list-content two">
                      <div className="icon">
                        <img src="/assets/img/dashboard/icon/payment-invoice-pdf-icon.svg" alt="" />
                      </div>
                      <div className="content">
                        <div className="card-number-show">
                          <h6>Businsess Invoice-2023.pdf</h6>
                        </div>
                        <p>Invoice Date: 02 April, 2024</p>
                      </div>
                    </div>
                  </div>
                  <div className="payment-status">
                    <h6>Status</h6>
                    <span>Paid</span>
                  </div>
                </div>
                <div className="download-btn-and-dot" onClick={() => toggleActiveClass(downloadBtnRef3.current)}>
                  <div className="download-btn" ref={downloadBtnRef3}>
                    <a href="/assets/img/dashboard/lesson1.pdf" download="lesson1.pdf">
                      Download
                      <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                        <g clipPath="url(#clip0_987_964)">
                          <path d="M0.4375 8.6626C0.553532 8.6626 0.664812 8.70869 0.746859 8.79074C0.828906 8.87279 0.875 8.98407 0.875 9.1001V11.2876C0.875 11.5197 0.967187 11.7422 1.13128 11.9063C1.29538 12.0704 1.51794 12.1626 1.75 12.1626H12.25C12.4821 12.1626 12.7046 12.0704 12.8687 11.9063C13.0328 11.7422 13.125 11.5197 13.125 11.2876V9.1001C13.125 8.98407 13.1711 8.87279 13.2531 8.79074C13.3352 8.70869 13.4465 8.6626 13.5625 8.6626C13.6785 8.6626 13.7898 8.70869 13.8719 8.79074C13.9539 8.87279 14 8.98407 14 9.1001V11.2876C14 11.7517 13.8156 12.1968 13.4874 12.525C13.1592 12.8532 12.7141 13.0376 12.25 13.0376H1.75C1.28587 13.0376 0.840752 12.8532 0.512563 12.525C0.184374 12.1968 0 11.7517 0 11.2876V9.1001C0 8.98407 0.0460936 8.87279 0.128141 8.79074C0.210188 8.70869 0.321468 8.6626 0.4375 8.6626Z" />
                          <path d="M6.68983 10.3722C6.73047 10.413 6.77874 10.4453 6.8319 10.4674C6.88505 10.4894 6.94203 10.5008 6.99958 10.5008C7.05712 10.5008 7.1141 10.4894 7.16726 10.4674C7.22041 10.4453 7.26869 10.413 7.30933 10.3722L9.93433 7.74725C10.0165 7.6651 10.0626 7.55368 10.0626 7.4375C10.0626 7.32132 10.0165 7.2099 9.93433 7.12775C9.85218 7.0456 9.74076 6.99945 9.62458 6.99945C9.5084 6.99945 9.39698 7.0456 9.31483 7.12775L7.43708 9.00638V1.3125C7.43708 1.19647 7.39098 1.08519 7.30894 1.00314C7.22689 0.921094 7.11561 0.875 6.99958 0.875C6.88354 0.875 6.77226 0.921094 6.69022 1.00314C6.60817 1.08519 6.56208 1.19647 6.56208 1.3125V9.00638L4.68433 7.12775C4.60218 7.0456 4.49076 6.99945 4.37458 6.99945C4.2584 6.99945 4.14698 7.0456 4.06483 7.12775C3.98268 7.2099 3.93652 7.32132 3.93652 7.4375C3.93652 7.55368 3.98268 7.6651 4.06483 7.74725L6.68983 10.3722Z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className="dot-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width={3} height={13} viewBox="0 0 3 13">
                      <path d="M3 11.5C3 11.8978 2.84196 12.2794 2.56066 12.5607C2.27936 12.842 1.89782 13 1.5 13C1.10218 13 0.720644 12.842 0.43934 12.5607C0.158035 12.2794 0 11.8978 0 11.5C0 11.1022 0.158035 10.7206 0.43934 10.4393C0.720644 10.158 1.10218 10 1.5 10C1.89782 10 2.27936 10.158 2.56066 10.4393C2.84196 10.7206 3 11.1022 3 11.5ZM3 6.5C3 6.89782 2.84196 7.27936 2.56066 7.56066C2.27936 7.84196 1.89782 8 1.5 8C1.10218 8 0.720644 7.84196 0.43934 7.56066C0.158035 7.27936 0 6.89782 0 6.5C0 6.10218 0.158035 5.72064 0.43934 5.43934C0.720644 5.15804 1.10218 5 1.5 5C1.89782 5 2.27936 5.15804 2.56066 5.43934C2.84196 5.72064 3 6.10218 3 6.5ZM3 1.5C3 1.89782 2.84196 2.27936 2.56066 2.56066C2.27936 2.84196 1.89782 3 1.5 3C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0C1.89782 0 2.27936 0.158035 2.56066 0.43934C2.84196 0.720644 3 1.10218 3 1.5Z" />
                    </svg>
                  </div>
                </div>
              </li>
              <li className="style-2">
                <div className="list-content-status">
                  <div className="list-serial-content">
                    <div className="serial">
                      <span>03.</span>
                    </div>
                    <div className="list-content two">
                      <div className="icon">
                        <img src="/assets/img/dashboard/icon/payment-invoice-pdf-icon.svg" alt="" />
                      </div>
                      <div className="content">
                        <div className="card-number-show">
                          <h6>Businsess Invoice-2023.pdf</h6>
                        </div>
                        <p>Invoice Date: 02 April, 2024</p>
                      </div>
                    </div>
                  </div>
                  <div className="payment-status">
                    <h6>Status</h6>
                    <span>Paid</span>
                  </div>
                </div>
                <div className="download-btn-and-dot" onClick={() => toggleActiveClass(downloadBtnRef.current)}>
                  <div className="download-btn" ref={downloadBtnRef}>
                    <a href="/assets/img/dashboard/lesson1.pdf" download="lesson1.pdf">
                      Download
                      <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                        <g clipPath="url(#clip0_987_964)">
                          <path d="M0.4375 8.6626C0.553532 8.6626 0.664812 8.70869 0.746859 8.79074C0.828906 8.87279 0.875 8.98407 0.875 9.1001V11.2876C0.875 11.5197 0.967187 11.7422 1.13128 11.9063C1.29538 12.0704 1.51794 12.1626 1.75 12.1626H12.25C12.4821 12.1626 12.7046 12.0704 12.8687 11.9063C13.0328 11.7422 13.125 11.5197 13.125 11.2876V9.1001C13.125 8.98407 13.1711 8.87279 13.2531 8.79074C13.3352 8.70869 13.4465 8.6626 13.5625 8.6626C13.6785 8.6626 13.7898 8.70869 13.8719 8.79074C13.9539 8.87279 14 8.98407 14 9.1001V11.2876C14 11.7517 13.8156 12.1968 13.4874 12.525C13.1592 12.8532 12.7141 13.0376 12.25 13.0376H1.75C1.28587 13.0376 0.840752 12.8532 0.512563 12.525C0.184374 12.1968 0 11.7517 0 11.2876V9.1001C0 8.98407 0.0460936 8.87279 0.128141 8.79074C0.210188 8.70869 0.321468 8.6626 0.4375 8.6626Z" />
                          <path d="M6.68983 10.3722C6.73047 10.413 6.77874 10.4453 6.8319 10.4674C6.88505 10.4894 6.94203 10.5008 6.99958 10.5008C7.05712 10.5008 7.1141 10.4894 7.16726 10.4674C7.22041 10.4453 7.26869 10.413 7.30933 10.3722L9.93433 7.74725C10.0165 7.6651 10.0626 7.55368 10.0626 7.4375C10.0626 7.32132 10.0165 7.2099 9.93433 7.12775C9.85218 7.0456 9.74076 6.99945 9.62458 6.99945C9.5084 6.99945 9.39698 7.0456 9.31483 7.12775L7.43708 9.00638V1.3125C7.43708 1.19647 7.39098 1.08519 7.30894 1.00314C7.22689 0.921094 7.11561 0.875 6.99958 0.875C6.88354 0.875 6.77226 0.921094 6.69022 1.00314C6.60817 1.08519 6.56208 1.19647 6.56208 1.3125V9.00638L4.68433 7.12775C4.60218 7.0456 4.49076 6.99945 4.37458 6.99945C4.2584 6.99945 4.14698 7.0456 4.06483 7.12775C3.98268 7.2099 3.93652 7.32132 3.93652 7.4375C3.93652 7.55368 3.98268 7.6651 4.06483 7.74725L6.68983 10.3722Z" />
                        </g>
                      </svg>
                    </a>
                  </div>
                  <div className="dot-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width={3} height={13} viewBox="0 0 3 13">
                      <path d="M3 11.5C3 11.8978 2.84196 12.2794 2.56066 12.5607C2.27936 12.842 1.89782 13 1.5 13C1.10218 13 0.720644 12.842 0.43934 12.5607C0.158035 12.2794 0 11.8978 0 11.5C0 11.1022 0.158035 10.7206 0.43934 10.4393C0.720644 10.158 1.10218 10 1.5 10C1.89782 10 2.27936 10.158 2.56066 10.4393C2.84196 10.7206 3 11.1022 3 11.5ZM3 6.5C3 6.89782 2.84196 7.27936 2.56066 7.56066C2.27936 7.84196 1.89782 8 1.5 8C1.10218 8 0.720644 7.84196 0.43934 7.56066C0.158035 7.27936 0 6.89782 0 6.5C0 6.10218 0.158035 5.72064 0.43934 5.43934C0.720644 5.15804 1.10218 5 1.5 5C1.89782 5 2.27936 5.15804 2.56066 5.43934C2.84196 5.72064 3 6.10218 3 6.5ZM3 1.5C3 1.89782 2.84196 2.27936 2.56066 2.56066C2.27936 2.84196 1.89782 3 1.5 3C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0C1.89782 0 2.27936 0.158035 2.56066 0.43934C2.84196 0.720644 3 1.10218 3 1.5Z" />
                    </svg>
                  </div>
                </div>
              </li>
            </ul>
            <div className="pagination-area pt-30">
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
      </div>
    </>

  )
}

export default Page

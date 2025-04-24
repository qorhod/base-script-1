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
              <h3>Message Box</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-message-wrapper">
        <div className="row">
          <div className="col-xl-4 col-md-5 col-3 s-d-p-0">
            <div className="inbox-wrap">
              <div className="inbox-top-area">
                <div className="inbox-title">
                  <h6>Inbox</h6>
                </div>
                <div className="inbox-search-and-dropdown">
                  <div className="inbox-search-icon">
                    <i className="bi bi-search" />
                  </div>
                  <div className="inbox-dropdown-area">
                  <SelectComponent placeholder={"unseen"} options={["seen","unseen"]} />
                  
                  </div>
                </div>
              </div>
              <div className="inbox-message-list">
                <span>All Message</span>
                <ul>
                  <li>
                    <div className="author-area">
                      <div className="author-img">
                        <img src="/assets/img/dashboard/message-author-img1.png" alt="" />
                      </div>
                      <div className="author-content">
                        <h6>Jacoline Franqly</h6>
                        <p>Jacoline is typing...</p>
                      </div>
                    </div>
                    <div className="time-status">
                      <div className="time">
                        <span>10.00 AM</span>
                      </div>
                      <div className="status">
                        <span>2</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="author-area">
                      <div className="author-img">
                        <img src="/assets/img/dashboard/inbox-author-img2.png" alt="" />
                      </div>
                      <div className="author-content">
                        <h6>Robert Smith</h6>
                        <p>Robert Smith</p>
                      </div>
                    </div>
                    <div className="time-status">
                      <div className="time">
                        <span>09.00 AM</span>
                      </div>
                      <div className="status seen">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                          <path d="M8.97016 4.97004C9.11103 4.83593 9.29848 4.76179 9.49298 4.76326C9.68747 4.76473 9.87378 4.8417 10.0126 4.97793C10.1514 5.11416 10.2319 5.29899 10.237 5.49342C10.2422 5.68785 10.1716 5.87667 10.0402 6.02004L6.05016 11.01C5.98155 11.0839 5.89874 11.1432 5.80669 11.1844C5.71464 11.2256 5.61523 11.2478 5.51441 11.2496C5.41359 11.2515 5.31343 11.233 5.21991 11.1953C5.1264 11.1575 5.04146 11.1013 4.97016 11.03L2.32416 8.38404C2.25047 8.31538 2.19137 8.23258 2.15038 8.14058C2.10938 8.04858 2.08734 7.94927 2.08557 7.84857C2.08379 7.74786 2.10231 7.64783 2.14003 7.55445C2.17776 7.46106 2.2339 7.37622 2.30512 7.305C2.37634 7.23379 2.46117 7.17764 2.55456 7.13992C2.64795 7.1022 2.74798 7.08367 2.84868 7.08545C2.94938 7.08723 3.0487 7.10927 3.1407 7.15026C3.2327 7.19125 3.3155 7.25036 3.38416 7.32404L5.47816 9.41704L8.95016 4.99204C8.95639 4.98432 8.96306 4.97698 8.97016 4.97004ZM8.05016 10.11L8.97016 11.03C9.04144 11.1012 9.12632 11.1573 9.21974 11.1949C9.31316 11.2325 9.4132 11.251 9.5139 11.2491C9.6146 11.2472 9.71389 11.2251 9.80585 11.184C9.89781 11.143 9.98056 11.0838 10.0492 11.01L14.0412 6.02004C14.1129 5.94924 14.1696 5.86472 14.2079 5.77152C14.2462 5.67832 14.2654 5.57835 14.2642 5.47758C14.263 5.37682 14.2415 5.27732 14.2011 5.18504C14.1606 5.09276 14.1019 5.00958 14.0286 4.94047C13.9552 4.87137 13.8687 4.81775 13.7742 4.78282C13.6797 4.74789 13.5791 4.73237 13.4784 4.73718C13.3778 4.742 13.2791 4.76705 13.1883 4.81084C13.0976 4.85462 13.0166 4.91625 12.9502 4.99204L9.47716 9.41704L8.99216 8.93104L8.04916 10.11H8.05016Z" />
                        </svg>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="author-area">
                      <div className="author-img">
                        <img src="/assets/img/dashboard/inbox-author-img3.png" alt="" />
                      </div>
                      <div className="author-content">
                        <h6>Daniel Scoot</h6>
                        <p>You: It's important to consult...</p>
                      </div>
                    </div>
                    <div className="time-status">
                      <div className="time">
                        <span>19.00 AM</span>
                      </div>
                      <div className="status">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                          <path d="M10.9702 4.96999C11.111 4.83588 11.2985 4.76173 11.493 4.76321C11.6875 4.76468 11.8738 4.84165 12.0126 4.97787C12.1514 5.1141 12.2319 5.29893 12.237 5.49336C12.2422 5.68779 12.1716 5.87661 12.0402 6.01999L8.05016 11.01C7.98155 11.0839 7.89874 11.1432 7.80669 11.1844C7.71464 11.2255 7.61523 11.2477 7.51441 11.2496C7.41359 11.2514 7.31343 11.2329 7.21991 11.1952C7.1264 11.1575 7.04146 11.1013 6.97016 11.03L4.32416 8.38399C4.25047 8.31532 4.19137 8.23252 4.15038 8.14052C4.10938 8.04853 4.08734 7.94921 4.08557 7.84851C4.08379 7.74781 4.10231 7.64778 4.14004 7.55439C4.17776 7.461 4.2339 7.37617 4.30512 7.30495C4.37634 7.23373 4.46117 7.17758 4.55456 7.13986C4.64795 7.10214 4.74798 7.08362 4.84868 7.08539C4.94938 7.08717 5.0487 7.10921 5.1407 7.15021C5.2327 7.1912 5.3155 7.2503 5.38416 7.32399L7.47816 9.41699L10.9512 4.99199C10.9574 4.98429 10.9631 4.97694 10.9702 4.96999Z" />
                        </svg>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="author-area">
                      <div className="author-img">
                        <img src="/assets/img/dashboard/inbox-author-img4.png" alt="" />
                      </div>
                      <div className="author-content">
                        <h6>Andraliye Skew</h6>
                        <p>It's important to consult...</p>
                      </div>
                    </div>
                    <div className="time-status">
                      <div className="time">
                        <span>10.00 AM</span>
                      </div>
                      <div className="status">
                        <span>2</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="author-area">
                      <div className="author-img">
                        <img src="/assets/img/dashboard/inbox-author-img5.png" alt="" />
                      </div>
                      <div className="author-content">
                        <h6>Rakhab Uddin</h6>
                        <p>You: It's important to consult...</p>
                      </div>
                    </div>
                    <div className="time-status">
                      <div className="time">
                        <span>10.00 AM</span>
                      </div>
                      <div className="status seen">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                          <path d="M8.97016 4.97004C9.11103 4.83593 9.29848 4.76179 9.49298 4.76326C9.68747 4.76473 9.87378 4.8417 10.0126 4.97793C10.1514 5.11416 10.2319 5.29899 10.237 5.49342C10.2422 5.68785 10.1716 5.87667 10.0402 6.02004L6.05016 11.01C5.98155 11.0839 5.89874 11.1432 5.80669 11.1844C5.71464 11.2256 5.61523 11.2478 5.51441 11.2496C5.41359 11.2515 5.31343 11.233 5.21991 11.1953C5.1264 11.1575 5.04146 11.1013 4.97016 11.03L2.32416 8.38404C2.25047 8.31538 2.19137 8.23258 2.15038 8.14058C2.10938 8.04858 2.08734 7.94927 2.08557 7.84857C2.08379 7.74786 2.10231 7.64783 2.14003 7.55445C2.17776 7.46106 2.2339 7.37622 2.30512 7.305C2.37634 7.23379 2.46117 7.17764 2.55456 7.13992C2.64795 7.1022 2.74798 7.08367 2.84868 7.08545C2.94938 7.08723 3.0487 7.10927 3.1407 7.15026C3.2327 7.19125 3.3155 7.25036 3.38416 7.32404L5.47816 9.41704L8.95016 4.99204C8.95639 4.98432 8.96306 4.97698 8.97016 4.97004ZM8.05016 10.11L8.97016 11.03C9.04144 11.1012 9.12632 11.1573 9.21974 11.1949C9.31316 11.2325 9.4132 11.251 9.5139 11.2491C9.6146 11.2472 9.71389 11.2251 9.80585 11.184C9.89781 11.143 9.98056 11.0838 10.0492 11.01L14.0412 6.02004C14.1129 5.94924 14.1696 5.86472 14.2079 5.77152C14.2462 5.67832 14.2654 5.57835 14.2642 5.47758C14.263 5.37682 14.2415 5.27732 14.2011 5.18504C14.1606 5.09276 14.1019 5.00958 14.0286 4.94047C13.9552 4.87137 13.8687 4.81775 13.7742 4.78282C13.6797 4.74789 13.5791 4.73237 13.4784 4.73718C13.3778 4.742 13.2791 4.76705 13.1883 4.81084C13.0976 4.85462 13.0166 4.91625 12.9502 4.99204L9.47716 9.41704L8.99216 8.93104L8.04916 10.11H8.05016Z" />
                        </svg>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="author-area">
                      <div className="author-img">
                        <img src="/assets/img/dashboard/inbox-author-img6.png" alt="" />
                      </div>
                      <div className="author-content">
                        <h6>Noriya Jahan</h6>
                        <p>It's important to consult...</p>
                      </div>
                    </div>
                    <div className="time-status">
                      <div className="time">
                        <span>12.00 AM</span>
                      </div>
                      <div className="status seen">
                        <span>4</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="author-area">
                      <div className="author-img">
                        <img src="/assets/img/dashboard/inbox-author-img7.png" alt="" />
                      </div>
                      <div className="author-content">
                        <h6>Andrason Mike</h6>
                        <p>It's important to consult...</p>
                      </div>
                    </div>
                    <div className="time-status">
                      <div className="time">
                        <span>10.00 AM</span>
                      </div>
                      <div className="status">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                          <path d="M10.9702 4.96999C11.111 4.83588 11.2985 4.76173 11.493 4.76321C11.6875 4.76468 11.8738 4.84165 12.0126 4.97787C12.1514 5.1141 12.2319 5.29893 12.237 5.49336C12.2422 5.68779 12.1716 5.87661 12.0402 6.01999L8.05016 11.01C7.98155 11.0839 7.89874 11.1432 7.80669 11.1844C7.71464 11.2255 7.61523 11.2477 7.51441 11.2496C7.41359 11.2514 7.31343 11.2329 7.21991 11.1952C7.1264 11.1575 7.04146 11.1013 6.97016 11.03L4.32416 8.38399C4.25047 8.31532 4.19137 8.23252 4.15038 8.14052C4.10938 8.04853 4.08734 7.94921 4.08557 7.84851C4.08379 7.74781 4.10231 7.64778 4.14004 7.55439C4.17776 7.461 4.2339 7.37617 4.30512 7.30495C4.37634 7.23373 4.46117 7.17758 4.55456 7.13986C4.64795 7.10214 4.74798 7.08362 4.84868 7.08539C4.94938 7.08717 5.0487 7.10921 5.1407 7.15021C5.2327 7.1912 5.3155 7.2503 5.38416 7.32399L7.47816 9.41699L10.9512 4.99199C10.9574 4.98429 10.9631 4.97694 10.9702 4.96999Z" />
                        </svg>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="author-area">
                      <div className="author-img">
                        <img src="/assets/img/dashboard/inbox-author-img8.png" alt="" />
                      </div>
                      <div className="author-content">
                        <h6>Norman Mane</h6>
                        <p>It's important to consult...</p>
                      </div>
                    </div>
                    <div className="time-status">
                      <div className="time">
                        <span>10.00 AM</span>
                      </div>
                      <div className="status seen">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                          <path d="M8.97016 4.97004C9.11103 4.83593 9.29848 4.76179 9.49298 4.76326C9.68747 4.76473 9.87378 4.8417 10.0126 4.97793C10.1514 5.11416 10.2319 5.29899 10.237 5.49342C10.2422 5.68785 10.1716 5.87667 10.0402 6.02004L6.05016 11.01C5.98155 11.0839 5.89874 11.1432 5.80669 11.1844C5.71464 11.2256 5.61523 11.2478 5.51441 11.2496C5.41359 11.2515 5.31343 11.233 5.21991 11.1953C5.1264 11.1575 5.04146 11.1013 4.97016 11.03L2.32416 8.38404C2.25047 8.31538 2.19137 8.23258 2.15038 8.14058C2.10938 8.04858 2.08734 7.94927 2.08557 7.84857C2.08379 7.74786 2.10231 7.64783 2.14003 7.55445C2.17776 7.46106 2.2339 7.37622 2.30512 7.305C2.37634 7.23379 2.46117 7.17764 2.55456 7.13992C2.64795 7.1022 2.74798 7.08367 2.84868 7.08545C2.94938 7.08723 3.0487 7.10927 3.1407 7.15026C3.2327 7.19125 3.3155 7.25036 3.38416 7.32404L5.47816 9.41704L8.95016 4.99204C8.95639 4.98432 8.96306 4.97698 8.97016 4.97004ZM8.05016 10.11L8.97016 11.03C9.04144 11.1012 9.12632 11.1573 9.21974 11.1949C9.31316 11.2325 9.4132 11.251 9.5139 11.2491C9.6146 11.2472 9.71389 11.2251 9.80585 11.184C9.89781 11.143 9.98056 11.0838 10.0492 11.01L14.0412 6.02004C14.1129 5.94924 14.1696 5.86472 14.2079 5.77152C14.2462 5.67832 14.2654 5.57835 14.2642 5.47758C14.263 5.37682 14.2415 5.27732 14.2011 5.18504C14.1606 5.09276 14.1019 5.00958 14.0286 4.94047C13.9552 4.87137 13.8687 4.81775 13.7742 4.78282C13.6797 4.74789 13.5791 4.73237 13.4784 4.73718C13.3778 4.742 13.2791 4.76705 13.1883 4.81084C13.0976 4.85462 13.0166 4.91625 12.9502 4.99204L9.47716 9.41704L8.99216 8.93104L8.04916 10.11H8.05016Z" />
                        </svg>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="author-area">
                      <div className="author-img">
                        <img src="/assets/img/dashboard/inbox-author-img9.png" alt="" />
                      </div>
                      <div className="author-content">
                        <h6>Natrison Mongla</h6>
                        <p>It's important to consult...</p>
                      </div>
                    </div>
                    <div className="time-status">
                      <div className="time">
                        <span>10.00 AM</span>
                      </div>
                      <div className="status">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                          <path d="M10.9702 4.96999C11.111 4.83588 11.2985 4.76173 11.493 4.76321C11.6875 4.76468 11.8738 4.84165 12.0126 4.97787C12.1514 5.1141 12.2319 5.29893 12.237 5.49336C12.2422 5.68779 12.1716 5.87661 12.0402 6.01999L8.05016 11.01C7.98155 11.0839 7.89874 11.1432 7.80669 11.1844C7.71464 11.2255 7.61523 11.2477 7.51441 11.2496C7.41359 11.2514 7.31343 11.2329 7.21991 11.1952C7.1264 11.1575 7.04146 11.1013 6.97016 11.03L4.32416 8.38399C4.25047 8.31532 4.19137 8.23252 4.15038 8.14052C4.10938 8.04853 4.08734 7.94921 4.08557 7.84851C4.08379 7.74781 4.10231 7.64778 4.14004 7.55439C4.17776 7.461 4.2339 7.37617 4.30512 7.30495C4.37634 7.23373 4.46117 7.17758 4.55456 7.13986C4.64795 7.10214 4.74798 7.08362 4.84868 7.08539C4.94938 7.08717 5.0487 7.10921 5.1407 7.15021C5.2327 7.1912 5.3155 7.2503 5.38416 7.32399L7.47816 9.41699L10.9512 4.99199C10.9574 4.98429 10.9631 4.97694 10.9702 4.96999Z" />
                        </svg>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-md-7 col-9 s-d-p-0">
            <div className="conversation-wrap">
              <div className="conversation-top">
                <div className="conversation-author-area">
                  <div className="author-img">
                    <img src="/assets/img/dashboard/message-author-img1.png" alt="" />
                    <span className="active-status" />
                  </div>
                  <div className="author-content">
                    <h6>Jacoline Franqly</h6>
                    <p>Jacoline is typing...</p>
                  </div>
                </div>
              </div>
              <div className="conversation-area">
                <div className="conversation-date">
                  <span>Today, 25 July</span>
                </div>
                <div className="single-conversation mb-30">
                  <div className="author-img">
                    <img src="/assets/img/dashboard/message-author-img1.png" alt="" />
                  </div>
                  <div className="author-content">
                    <div className="author-name-and-date">
                      <h6>Jacoline Franqly</h6>
                      <span>10.00 AM.</span>
                    </div>
                    <ul className="conversation-list">
                      <li>Hi, What about you?</li>
                      <li>I’ve some question of your Harmoney House property.</li>
                    </ul>
                  </div>
                </div>
                <div className="single-conversation two mb-40">
                  <div className="author-content">
                    <div className="author-name-and-date">
                      <span>10.00 AM.</span>
                      <h6>You</h6>
                    </div>
                    <ul className="conversation-list">
                      <li>Fine. About you?</li>
                      <li>Yeah! Sure. Ask me anything.</li>
                    </ul>
                  </div>
                  <div className="author-img">
                    <img src="/assets/img/dashboard/inbox-author-img7.png" alt="" />
                  </div>
                </div>
                <form className="from-wrapper">
                  <div className="from-inner">
                    <div className="input-area">
                      <div className="add-icon">
                        <i className="bi bi-plus-lg" />
                      </div>
                      <input type="text" placeholder="Type your message" />
                    </div>
                    <ul className="icon-list">
                      <li>
                        <button type="button">
                          <img src="/assets/img/dashboard/icon/message-input-smile-emoji.svg" alt="" />
                        </button>
                      </li>
                      <li>
                        <button type="submit">
                          <img src="/assets/img/dashboard/icon/message-input-send-icon.svg" alt="" />
                        </button>
                      </li>
                    </ul>
                  </div>
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

"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Topbar from "@/components/common/Topbar";
import SelectComponent from "@/uitils/SelectComponent";
import Marquee from "react-fast-marquee";

const Page = () => {
  const [isGridView, setIsGridView] = useState(true);
  useEffect(() => {
    const saveView = localStorage.getItem("viewPreference");
    if (saveView === "list") {
      setIsGridView(false);
    }
  }, []);

  const handleGridClick = () => {
    setIsGridView(true);
    localStorage.setItem("viewPreference", "grid");
  };

  const handleListClick = () => {
    setIsGridView(false);
    localStorage.setItem("viewPreference", "list");
  };

  return (
    <>
      <Topbar />
      <Header />
      <Breadcrumb pageName="Special Offer" pageTitle="Special Offer" />
      <div className="home6-search-area two mb-100">
        <div className="container">
          <form>
            <div className="row row-cols-xl-5 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4 justify-content-center">
              <div className="col">
                <div className="form-inner">
                  <label>Property Type*</label>
                  <SelectComponent
                    options={["For Sale", "For Rent", "Devlopment"]}
                    placeholder="Select"
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-inner">
                  <label>Location*</label>
                  <SelectComponent
                    options={[
                      "Panama City",
                      "Chicago City",
                      "New Delhi",
                      "Sydne City",
                    ]}
                    placeholder="Select"
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-inner">
                  <label>Min. Bed*</label>
                  <SelectComponent
                    options={["03 Beds", "05 Beds"]}
                    placeholder="Select"
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-inner">
                  <label>Price*</label>
                  <SelectComponent
                    options={[
                      "$4,345 - $12,456",
                      "$7,345 - $17,456",
                      "$9,345 - $19,456",
                    ]}
                    placeholder="Select"
                  />
                </div>
              </div>
              <div className="col d-flex align-items-end">
                <div className="form-inner d-flex align-items-center justify-content-md-between">
                  <button className="primary-btn3" type="submit">
                    Sale
                  </button>
                  <button className="primary-btn6" type="submit">
                    Rent
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="product-page no-sidebar mb-100">
        <div className="container">
          <div className="row g-xl-4 gy-5">
            <div className="col-xl-12">
              <div className="row mb-40">
                <div className="col-lg-12">
                  <div className="show-item-and-filte">
                    <p>
                      Showing <strong>2,928</strong> property available in stock
                    </p>
                    <div className="filter-view">
                      <div className="filter-atra">
                        <h6>Filter By:</h6>
                        <form>
                          <div className="form-inner">
                            <SelectComponent
                              placeholder={"Select Price"}
                              options={["Highest Price", "Low Price"]}
                            />
                          </div>
                        </form>
                      </div>
                      <div className="view d-xl-flex d-none">
                        <ul className="btn-group list-grid-btn-group">
                          <li
                            className={`grid ${isGridView ? "active" : ""}`}
                            onClick={handleGridClick}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={14}
                              viewBox="0 0 14 14"
                            >
                              <mask
                                id="mask0_1631_19"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x={0}
                                y={0}
                                width={14}
                                height={14}
                              >
                                <rect width={14} height={14} fill="#D9D9D9" />
                              </mask>
                              <g mask="url(#mask0_1631_19)">
                                <path d="M5.47853 6.08726H0.608726C0.272536 6.08726 0 5.81472 0 5.47853V0.608726C0 0.272536 0.272536 0 0.608726 0H5.47853C5.81472 0 6.08726 0.272536 6.08726 0.608726V5.47853C6.08726 5.81472 5.81472 6.08726 5.47853 6.08726Z" />
                                <path d="M13.3911 6.08726H8.52132C8.18513 6.08726 7.9126 5.81472 7.9126 5.47853V0.608726C7.9126 0.272536 8.18513 0 8.52132 0H13.3911C13.7273 0 13.9999 0.272536 13.9999 0.608726V5.47853C13.9999 5.81472 13.7273 6.08726 13.3911 6.08726Z" />
                                <path d="M5.47853 14.0013H0.608726C0.272536 14.0013 0 13.7288 0 13.3926V8.52279C0 8.1866 0.272536 7.91406 0.608726 7.91406H5.47853C5.81472 7.91406 6.08726 8.1866 6.08726 8.52279V13.3926C6.08726 13.7288 5.81472 14.0013 5.47853 14.0013Z" />
                                <path d="M13.3916 14.0013H8.52181C8.18562 14.0013 7.91309 13.7288 7.91309 13.3926V8.52279C7.91309 8.1866 8.18562 7.91406 8.52181 7.91406H13.3916C13.7278 7.91406 14.0003 8.1866 14.0003 8.52279V13.3926C14.0003 13.7288 13.7278 14.0013 13.3916 14.0013Z" />
                              </g>
                            </svg>
                          </li>
                          <li
                            className={`lists ${!isGridView ? "active" : ""}`}
                            onClick={handleListClick}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={14}
                              viewBox="0 0 14 14"
                            >
                              <mask
                                id="mask0_1631_3"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x={0}
                                y={0}
                                width={14}
                                height={14}
                              >
                                <rect width={14} height={14} fill="#D9D9D9" />
                              </mask>
                              <g mask="url(#mask0_1631_3)">
                                <path d="M1.21747 2C0.545203 2 0 2.55848 0 3.24765C0 3.93632 0.545203 4.49433 1.21747 4.49433C1.88974 4.49433 2.43494 3.93632 2.43494 3.24765C2.43494 2.55848 1.88974 2 1.21747 2Z" />
                                <path d="M1.21747 5.75195C0.545203 5.75195 0 6.30996 0 6.99913C0 7.68781 0.545203 8.24628 1.21747 8.24628C1.88974 8.24628 2.43494 7.68781 2.43494 6.99913C2.43494 6.30996 1.88974 5.75195 1.21747 5.75195Z" />
                                <path d="M1.21747 9.50586C0.545203 9.50586 0 10.0643 0 10.753C0 11.4417 0.545203 12.0002 1.21747 12.0002C1.88974 12.0002 2.43494 11.4417 2.43494 10.753C2.43494 10.0643 1.88974 9.50586 1.21747 9.50586Z" />
                                <path d="M13.0845 2.31055H4.42429C3.91874 2.31055 3.50879 2.7305 3.50879 3.24886C3.50879 3.76677 3.91871 4.1867 4.42429 4.1867H13.0845C13.59 4.1867 14 3.76677 14 3.24886C14 2.7305 13.59 2.31055 13.0845 2.31055Z" />
                                <path d="M13.0845 6.06055H4.42429C3.91874 6.06055 3.50879 6.48047 3.50879 6.99886C3.50879 7.51677 3.91871 7.9367 4.42429 7.9367H13.0845C13.59 7.9367 14 7.51677 14 6.99886C14 6.48047 13.59 6.06055 13.0845 6.06055Z" />
                                <path d="M13.0845 9.81348H4.42429C3.91874 9.81348 3.50879 10.2334 3.50879 10.7513C3.50879 11.2692 3.91871 11.6891 4.42429 11.6891H13.0845C13.59 11.6891 14 11.2692 14 10.7513C14 10.2334 13.59 9.81348 13.0845 9.81348Z" />
                              </g>
                            </svg>
                          </li>
                        </ul>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-grid-main">
                <div
                  className={`list-grid-product-wrap ${
                    !isGridView ? "list" : "grid"
                  }-group-wrapper`}
                >
                  <div className="row g-4 justify-content-center mb-40">
                    {/*  */}
                    <div
                      className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp item"
                      data-wow-delay="200ms"
                    >
                      <div className="product-card4">
                        <div className="product-img">
                          <div className="batch">
                            <span className="red">20%</span>
                          </div>
                          <a href="#" className="fav">
                            <svg
                              width={14}
                              height={13}
                              viewBox="0 0 14 14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                            </svg>
                          </a>

                          <div className=" product-img-slider">
                            <img
                              src="/assets/img/inner-page/product-sb-img-01.png"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link
                              legacyBehavior
                              href="/property-list/left-sidebar"
                            >
                              <a>
                                <i className="bi bi-geo-alt" /> Panama City
                              </a>
                            </Link>
                          </div>
                          <h6>
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a>Harmony House</a>
                            </Link>
                          </h6>
                          <ul className="features">
                            <li>
                              <img
                                src="/assets/img/home1/icon/bed2.svg"
                                alt=""
                              />
                              04 Beds
                            </li>
                            <li>
                              <img
                                src="/assets/img/home1/icon/bath2.svg"
                                alt=""
                              />
                              02 Baths
                            </li>
                            <li>
                              <img
                                src="/assets/img/home1/icon/size2.svg"
                                alt=""
                              />
                              Sq.ft- 124,560
                            </li>
                          </ul>
                          <div className="button-and-price">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="primary-btn3">View Details</a>
                            </Link>
                            <div className="price-area">
                              <h6>$24,564.00</h6>
                              <del>$28,564.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp item"
                      data-wow-delay="300ms"
                    >
                      <div className="product-card4">
                        <div className="product-img">
                          <div className="batch">
                            <span className="red">20%</span>
                          </div>
                          <a href="#" className="fav">
                            <svg
                              width={14}
                              height={13}
                              viewBox="0 0 14 14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                            </svg>
                          </a>

                          <div className="swiper product-img-slider">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-02.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-01.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-03.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-04.png"
                                  alt="image"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link
                              legacyBehavior
                              href="/property-list/left-sidebar"
                            >
                              <a>
                                <i className="bi bi-geo-alt" /> Melbourne City
                              </a>
                            </Link>
                          </div>
                          <h6>
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a>Evergreen Realty</a>
                            </Link>
                          </h6>
                          <ul className="features">
                            <li>
                              <img
                                src="/assets/img/home1/icon/bed2.svg"
                                alt=""
                              />
                              04 Beds
                            </li>
                            <li>
                              <img
                                src="/assets/img/home1/icon/bath2.svg"
                                alt=""
                              />
                              02 Baths
                            </li>
                            <li>
                              <img
                                src="/assets/img/home1/icon/size2.svg"
                                alt=""
                              />
                              Sq.ft- 124,560
                            </li>
                          </ul>
                          <div className="button-and-price">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="primary-btn3">View Details</a>
                            </Link>
                            <div className="price-area">
                              <h6>$24,564.00</h6>
                              <del>$28,564.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp item"
                      data-wow-delay="400ms"
                    >
                      <div className="product-card4">
                        <div className="product-img">
                          <div className="batch">
                            <span className="red">20%</span>
                          </div>
                          <a href="#" className="fav">
                            <svg
                              width={14}
                              height={13}
                              viewBox="0 0 14 14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                            </svg>
                          </a>

                          <div className="swiper product-img-slider">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-03.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-02.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-01.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-04.png"
                                  alt="image"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link
                              legacyBehavior
                              href="/property-list/left-sidebar"
                            >
                              <a>
                                <i className="bi bi-geo-alt" /> Panama City
                              </a>
                            </Link>
                          </div>
                          <h6>
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a>Paradise Heights</a>
                            </Link>
                          </h6>
                          <ul className="features">
                            <li>
                              <img
                                src="/assets/img/home1/icon/bed2.svg"
                                alt=""
                              />
                              04 Beds
                            </li>
                            <li>
                              <img
                                src="/assets/img/home1/icon/bath2.svg"
                                alt=""
                              />
                              02 Baths
                            </li>
                            <li>
                              <img
                                src="/assets/img/home1/icon/size2.svg"
                                alt=""
                              />
                              Sq.ft- 124,560
                            </li>
                          </ul>
                          <div className="button-and-price">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="primary-btn3">View Details</a>
                            </Link>
                            <div className="price-area">
                              <h6>$24,564.00</h6>
                              <del>$28,564.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp item"
                      data-wow-delay="200ms"
                    >
                      <div className="product-card4">
                        <div className="product-img">
                          <div className="batch">
                            <span className="red">20%</span>
                          </div>
                          <a href="#" className="fav">
                            <svg
                              width={14}
                              height={13}
                              viewBox="0 0 14 14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                            </svg>
                          </a>

                          <div className="swiper product-img-slider">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-04.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-02.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-03.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-01.png"
                                  alt="image"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link
                              legacyBehavior
                              href="/property-list/left-sidebar"
                            >
                              <a>
                                <i className="bi bi-geo-alt" /> Melbourne City
                              </a>
                            </Link>
                          </div>
                          <h6>
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a>Serene Homes</a>
                            </Link>
                          </h6>
                          <ul className="features">
                            <li>
                              <img
                                src="/assets/img/home1/icon/bed2.svg"
                                alt=""
                              />
                              04 Beds
                            </li>
                            <li>
                              <img
                                src="/assets/img/home1/icon/bath2.svg"
                                alt=""
                              />
                              02 Baths
                            </li>
                            <li>
                              <img
                                src="/assets/img/home1/icon/size2.svg"
                                alt=""
                              />
                              Sq.ft- 124,560
                            </li>
                          </ul>
                          <div className="button-and-price">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="primary-btn3">View Details</a>
                            </Link>
                            <div className="price-area">
                              <h6>$24,564.00</h6>
                              <del>$28,564.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp item"
                      data-wow-delay="300ms"
                    >
                      <div className="product-card4">
                        <div className="product-img">
                          <div className="batch">
                            <span className="red">20%</span>
                          </div>
                          <a href="#" className="fav">
                            <svg
                              width={14}
                              height={13}
                              viewBox="0 0 14 14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                            </svg>
                          </a>

                          <div className="swiper product-img-slider">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-05.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-02.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-03.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-04.png"
                                  alt="image"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link
                              legacyBehavior
                              href="/property-list/left-sidebar"
                            >
                              <a>
                                <i className="bi bi-geo-alt" /> Sydne City
                              </a>
                            </Link>
                          </div>
                          <h6>
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a>Riverside Retreat</a>
                            </Link>
                          </h6>
                          <ul className="features">
                            <li>
                              <img
                                src="/assets/img/home1/icon/bed2.svg"
                                alt=""
                              />
                              04 Beds
                            </li>
                            <li>
                              <img
                                src="/assets/img/home1/icon/bath2.svg"
                                alt=""
                              />
                              02 Baths
                            </li>
                            <li>
                              <img
                                src="/assets/img/home1/icon/size2.svg"
                                alt=""
                              />
                              Sq.ft- 124,560
                            </li>
                          </ul>
                          <div className="button-and-price">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="primary-btn3">View Details</a>
                            </Link>
                            <div className="price-area">
                              <h6>$24,564.00</h6>
                              <del>$28,564.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp item"
                      data-wow-delay="400ms"
                    >
                      <div className="product-card4">
                        <div className="product-img">
                          <div className="batch">
                            <span className="red">20%</span>
                          </div>
                          <a href="#" className="fav">
                            <svg
                              width={14}
                              height={13}
                              viewBox="0 0 14 14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                            </svg>
                          </a>

                          <div className="swiper product-img-slider">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-06.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-02.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-03.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-04.png"
                                  alt="image"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link
                              legacyBehavior
                              href="/property-list/left-sidebar"
                            >
                              <a>
                                <i className="bi bi-geo-alt" /> Sydne City
                              </a>
                            </Link>
                          </div>
                          <h6>
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a>Riverfront Residence</a>
                            </Link>
                          </h6>
                          <ul className="features">
                            <li>
                              <img
                                src="/assets/img/home1/icon/bed2.svg"
                                alt=""
                              />
                              04 Beds
                            </li>
                            <li>
                              <img
                                src="/assets/img/home1/icon/bath2.svg"
                                alt=""
                              />
                              02 Baths
                            </li>
                            <li>
                              <img
                                src="/assets/img/home1/icon/size2.svg"
                                alt=""
                              />
                              Sq.ft- 124,560
                            </li>
                          </ul>
                          <div className="button-and-price">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="primary-btn3">View Details</a>
                            </Link>
                            <div className="price-area">
                              <h6>$24,564.00</h6>
                              <del>$28,564.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp item"
                      data-wow-delay="200ms"
                    >
                      <div className="product-card4">
                        <div className="product-img">
                          <div className="batch">
                            <span className="red">20%</span>
                          </div>
                          <a href="#" className="fav">
                            <svg
                              width={14}
                              height={13}
                              viewBox="0 0 14 14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                            </svg>
                          </a>

                          <div className="swiper product-img-slider">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-07.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-02.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-03.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-04.png"
                                  alt="image"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link
                              legacyBehavior
                              href="/property-list/left-sidebar"
                            >
                              <a>
                                <i className="bi bi-geo-alt" /> Panama City
                              </a>
                            </Link>
                          </div>
                          <h6>
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a>Lakeside Haven</a>
                            </Link>
                          </h6>
                          <ul className="features">
                            <li>
                              <img
                                src="/assets/img/home1/icon/bed2.svg"
                                alt=""
                              />
                              04 Beds
                            </li>
                            <li>
                              <img
                                src="/assets/img/home1/icon/bath2.svg"
                                alt=""
                              />
                              02 Baths
                            </li>
                            <li>
                              <img
                                src="/assets/img/home1/icon/size2.svg"
                                alt=""
                              />
                              Sq.ft- 124,560
                            </li>
                          </ul>
                          <div className="button-and-price">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="primary-btn3">View Details</a>
                            </Link>
                            <div className="price-area">
                              <h6>$24,564.00</h6>
                              <del>$28,564.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp item"
                      data-wow-delay="300ms"
                    >
                      <div className="product-card4">
                        <div className="product-img">
                          <div className="batch">
                            <span className="red">20%</span>
                          </div>
                          <a href="#" className="fav">
                            <svg
                              width={14}
                              height={13}
                              viewBox="0 0 14 14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                            </svg>
                          </a>

                          <div className="swiper product-img-slider">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-08.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-02.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-03.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-04.png"
                                  alt="image"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link
                              legacyBehavior
                              href="/property-list/left-sidebar"
                            >
                              <a>
                                <i className="bi bi-geo-alt" /> Menchester City
                              </a>
                            </Link>
                          </div>
                          <h6>
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a>Tranquil Haven</a>
                            </Link>
                          </h6>
                          <ul className="features">
                            <li>
                              <img
                                src="/assets/img/home1/icon/bed2.svg"
                                alt=""
                              />
                              04 Beds
                            </li>
                            <li>
                              <img
                                src="/assets/img/home1/icon/bath2.svg"
                                alt=""
                              />
                              02 Baths
                            </li>
                            <li>
                              <img
                                src="/assets/img/home1/icon/size2.svg"
                                alt=""
                              />
                              Sq.ft- 124,560
                            </li>
                          </ul>
                          <div className="button-and-price">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="primary-btn3">View Details</a>
                            </Link>
                            <div className="price-area">
                              <h6>$24,564.00</h6>
                              <del>$28,564.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp item"
                      data-wow-delay="400ms"
                    >
                      <div className="product-card4">
                        <div className="product-img">
                          <div className="batch">
                            <span className="red">20%</span>
                          </div>
                          <a href="#" className="fav">
                            <svg
                              width={14}
                              height={13}
                              viewBox="0 0 14 14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                            </svg>
                          </a>

                          <div className="swiper product-img-slider">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-09.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-02.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-03.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-04.png"
                                  alt="image"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link
                              legacyBehavior
                              href="/property-list/left-sidebar"
                            >
                              <a>
                                <i className="bi bi-geo-alt" /> Menchester City
                              </a>
                            </Link>
                          </div>
                          <h6>
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a>Whispering Pines</a>
                            </Link>
                          </h6>
                          <ul className="features">
                            <li>
                              <img
                                src="/assets/img/home1/icon/bed2.svg"
                                alt=""
                              />
                              04 Beds
                            </li>
                            <li>
                              <img
                                src="/assets/img/home1/icon/bath2.svg"
                                alt=""
                              />
                              02 Baths
                            </li>
                            <li>
                              <img
                                src="/assets/img/home1/icon/size2.svg"
                                alt=""
                              />
                              Sq.ft- 124,560
                            </li>
                          </ul>
                          <div className="button-and-price">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="primary-btn3">View Details</a>
                            </Link>
                            <div className="price-area">
                              <h6>$24,564.00</h6>
                              <del>$28,564.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp item"
                      data-wow-delay="200ms"
                    >
                      <div className="product-card4">
                        <div className="product-img">
                          <div className="batch">
                            <span className="red">20%</span>
                          </div>
                          <a href="#" className="fav">
                            <svg
                              width={14}
                              height={13}
                              viewBox="0 0 14 14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                            </svg>
                          </a>

                          <div className="swiper product-img-slider">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-03.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-02.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-07.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-04.png"
                                  alt="image"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link
                              legacyBehavior
                              href="/property-list/left-sidebar"
                            >
                              <a>
                                <i className="bi bi-geo-alt" /> New Delhi
                              </a>
                            </Link>
                          </div>
                          <h6>
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a>Meadowview Manor</a>
                            </Link>
                          </h6>
                          <ul className="features">
                            <li>
                              <img
                                src="/assets/img/home1/icon/bed2.svg"
                                alt=""
                              />
                              04 Beds
                            </li>
                            <li>
                              <img
                                src="/assets/img/home1/icon/bath2.svg"
                                alt=""
                              />
                              02 Baths
                            </li>
                            <li>
                              <img
                                src="/assets/img/home1/icon/size2.svg"
                                alt=""
                              />
                              Sq.ft- 124,560
                            </li>
                          </ul>
                          <div className="button-and-price">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="primary-btn3">View Details</a>
                            </Link>
                            <div className="price-area">
                              <h6>$24,564.00</h6>
                              <del>$28,564.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp item"
                      data-wow-delay="300ms"
                    >
                      <div className="product-card4">
                        <div className="product-img">
                          <div className="batch">
                            <span className="red">20%</span>
                          </div>
                          <a href="#" className="fav">
                            <svg
                              width={14}
                              height={13}
                              viewBox="0 0 14 14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                            </svg>
                          </a>

                          <div className="swiper product-img-slider">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-01.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-02.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-03.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-04.png"
                                  alt="image"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link
                              legacyBehavior
                              href="/property-list/left-sidebar"
                            >
                              <a>
                                <i className="bi bi-geo-alt" /> New Delhi
                              </a>
                            </Link>
                          </div>
                          <h6>
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a>Blissful Bungalow</a>
                            </Link>
                          </h6>
                          <ul className="features">
                            <li>
                              <img
                                src="/assets/img/home1/icon/bed2.svg"
                                alt=""
                              />
                              04 Beds
                            </li>
                            <li>
                              <img
                                src="/assets/img/home1/icon/bath2.svg"
                                alt=""
                              />
                              02 Baths
                            </li>
                            <li>
                              <img
                                src="/assets/img/home1/icon/size2.svg"
                                alt=""
                              />
                              Sq.ft- 124,560
                            </li>
                          </ul>
                          <div className="button-and-price">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="primary-btn3">View Details</a>
                            </Link>
                            <div className="price-area">
                              <h6>$24,564.00</h6>
                              <del>$28,564.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp item"
                      data-wow-delay="400ms"
                    >
                      <div className="product-card4">
                        <div className="product-img">
                          <div className="batch">
                            <span className="red">20%</span>
                          </div>
                          <a href="#" className="fav">
                            <svg
                              width={14}
                              height={13}
                              viewBox="0 0 14 14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z"></path>
                            </svg>
                          </a>

                          <div className="swiper product-img-slider">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-05.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-02.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-03.png"
                                  alt="image"
                                />
                              </div>
                              <div className="swiper-slide">
                                <img
                                  src="/assets/img/inner-page/product-sb-img-04.png"
                                  alt="image"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link
                              legacyBehavior
                              href="/property-list/left-sidebar"
                            >
                              <a>
                                <i className="bi bi-geo-alt" /> Panama City
                              </a>
                            </Link>
                          </div>
                          <h6>
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a>Mountain View Villa</a>
                            </Link>
                          </h6>
                          <ul className="features">
                            <li>
                              <img
                                src="/assets/img/home1/icon/bed2.svg"
                                alt=""
                              />
                              04 Beds
                            </li>
                            <li>
                              <img
                                src="/assets/img/home1/icon/bath2.svg"
                                alt=""
                              />
                              02 Baths
                            </li>
                            <li>
                              <img
                                src="/assets/img/home1/icon/size2.svg"
                                alt=""
                              />
                              Sq.ft- 124,560
                            </li>
                          </ul>
                          <div className="button-and-price">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="primary-btn3">View Details</a>
                            </Link>
                            <div className="price-area">
                              <h6>$24,564.00</h6>
                              <del>$28,564.00</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="pagination-and-next-prev">
                        <div className="pagination">
                          <ul>
                            <li className="active">
                              <a href="#">01</a>
                            </li>
                            <li>
                              <a href="#">02</a>
                            </li>
                            <li>
                              <a href="#">03</a>
                            </li>
                            <li>
                              <a href="#">04</a>
                            </li>
                            <li>
                              <a href="#">05</a>
                            </li>
                          </ul>
                        </div>
                        <div className="next-prev-btn">
                          <ul>
                            <li>
                              <a href="#">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={7}
                                  height={14}
                                  viewBox="0 0 7 14"
                                >
                                  <path d="M0 7.00008L7 0L2.54545 7.00008L7 14L0 7.00008Z" />
                                </svg>{" "}
                                Prev
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Next
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={7}
                                  height={14}
                                  viewBox="0 0 7 14"
                                >
                                  <path d="M7 7.00008L0 0L4.45455 7.00008L0 14L7 7.00008Z" />
                                </svg>
                              </a>
                            </li>
                          </ul>
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
      <div className="trusted-partner-section mb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="sub-title">
                <h6>Our Trusted Partners</h6>
                <div className="dash" />
              </div>
              <div className="partner-slider">
                <div className="marquee_text2">
                  <Marquee>
                    <img src="/assets/img/home1/company-logo-01.png" alt="" />
                    <img src="/assets/img/home1/company-logo-02.png" alt="" />
                    <img src="/assets/img/home1/company-logo-03.png" alt="" />
                    <img src="/assets/img/home1/company-logo-04.png" alt="" />
                    <img src="/assets/img/home1/company-logo-05.png" alt="" />
                    <img src="/assets/img/home1/company-logo-06.png" alt="" />
                    <img src="/assets/img/home1/company-logo-01.png" alt="" />
                    <img src="/assets/img/home1/company-logo-02.png" alt="" />
                    <img src="/assets/img/home1/company-logo-03.png" alt="" />
                    <img src="/assets/img/home1/company-logo-04.png" alt="" />
                    <img src="/assets/img/home1/company-logo-05.png" alt="" />
                    <img src="/assets/img/home1/company-logo-06.png" alt="" />
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;

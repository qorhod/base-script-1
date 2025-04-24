"use client";
import React, { useMemo } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);
const Home6TopRelated = () => {
  const slideSetting = useMemo(() => {
    return {
      speed: 1500,
      spaceBetween: 25,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".next-2",
        prevEl: ".prev-2",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        420: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1400: {
          slidesPerView: 3
        },
      }
    }
  }, []);
  return (
    <div className="home6-top-used-car-section mb-100">
      <div className="container">
        <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
          <div className="col-lg-12">
            <div className="section-title-2">
              <h2>Top Rated Home</h2>
              <p>To get the most accurate and up-to-date information.</p>
            </div>
          </div>
        </div>
        <div className="row mb-40 wow fadeInUp" data-wow-delay="300ms">
          <div className="col-lg-12">
            <div className="home6-filter-area d-flex align-items-center justify-content-between">
              <ul className="nav nav-tabs" id="myTab2" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="price1-tab" data-bs-toggle="tab" data-bs-target="#price1" type="button" role="tab" aria-controls="price1" aria-selected="true">$01K - 05K</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="price2-tab" data-bs-toggle="tab" data-bs-target="#price2" type="button" role="tab" aria-controls="price2" aria-selected="false">$06K -
                    10K</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="price3-tab" data-bs-toggle="tab" data-bs-target="#price3" type="button" role="tab" aria-controls="price3" aria-selected="false">$11-15
                    Lakhs</button>
                </li>
              </ul>
              <div className="slider-btn-group2 dark style-6 d-lg-flex d-none">
                <div className="slider-btn prev-2">
                  <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                  </svg>
                </div>
                <div className="slider-btn next-2">
                  <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row wow fadeInUp" data-wow-delay="400ms">
          <div className="col-lg-12">
            <div className="tab-content" id="myTab2Content">
              <div className="tab-pane fade show active" id="price1" role="tabpanel" aria-labelledby="price1-tab">
                <div className="row">
                  <div className="col-lg-12">
                    <Swiper {...slideSetting} className="swiper home6-top-use-car-slider">
                      <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                          <div className="product-card4 style-3">
                            <div className="product-img">
                              <div className="batch">
                                <span>For Sale</span>
                              </div>
                              <a href="#" className="fav">
                                <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                                  </path>
                                </svg>
                              </a>
                               
                              <div className="swiper product-img-slider">
                                <div className="swiper-wrapper">
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-06.png" alt="image" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <div className="location">
                                <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" /> Australia City</a></Link>
                              </div>
                              <h6><Link legacyBehavior href="/property-list/deatils1"><a>Prodigy Realty</a></Link></h6>
                              <ul className="features">
                                <li>
                                  <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                                  04 Beds
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                                  02 Baths
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/size2.svg" alt="" />
                                  Sq.ft- 124,560
                                </li>
                              </ul>
                              <div className="button-and-price">
                                <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                                <div className="price-area">
                                  <span>Great Price</span>
                                  <h6>$31,564.00</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="product-card4 style-3">
                            <div className="product-img">
                              <div className="batch">
                                <span>For Sale</span>
                              </div>
                              <a href="#" className="fav">
                                <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                                  </path>
                                </svg>
                              </a>
                               
                              <div className="swiper product-img-slider">
                                <div className="swiper-wrapper">
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-01.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-01.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-01.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-01.png" alt="image" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <div className="location">
                                <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" /> Sydne City</a></Link>
                              </div>
                              <h6><Link legacyBehavior href="/property-list/deatils1"><a>Keystone Realty</a></Link></h6>
                              <ul className="features">
                                <li>
                                  <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                                  04 Beds
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                                  02 Baths
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/size2.svg" alt="" />
                                  Sq.ft- 124,560
                                </li>
                              </ul>
                              <div className="button-and-price">
                                <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                                <div className="price-area">
                                  <span>Great Price</span>
                                  <h6>$3,564.00</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="product-card4 style-3">
                            <div className="product-img">
                              <a href="#" className="fav">
                                <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                                  </path>
                                </svg>
                              </a>
                               
                              <div className="swiper product-img-slider">
                                <div className="swiper-wrapper">
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-03.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-03.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-03.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-03.png" alt="image" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <div className="location">
                                <a href="#"><i className="bi bi-geo-alt" /> Canada City</a>
                              </div>
                              <h6><Link legacyBehavior href="/property-list/deatils1"><a>Cornerstone Properties</a></Link>
                              </h6>
                              <ul className="features">
                                <li>
                                  <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                                  04 Beds
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                                  02 Baths
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/size2.svg" alt="" />
                                  Sq.ft- 124,560
                                </li>
                              </ul>
                              <div className="button-and-price">
                                <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                                <div className="price-area">
                                  <span>Great Price</span>
                                  <h6>$4,564.00</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="product-card4 style-3">
                            <div className="product-img">
                              <div className="batch">
                                <span>For Sale</span>
                              </div>
                              <a href="#" className="fav">
                                <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                                  </path>
                                </svg>
                              </a>
                               
                              <div className="swiper product-img-slider">
                                <div className="swiper-wrapper">
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-05.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-05.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-05.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-05.png" alt="image" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <div className="location">
                                <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" /> New Delhi</a></Link>
                              </div>
                              <h6><Link legacyBehavior href="/property-list/deatils1"><a>Blue Sky Investments</a></Link>
                              </h6>
                              <ul className="features">
                                <li>
                                  <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                                  04 Beds
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                                  02 Baths
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/size2.svg" alt="" />
                                  Sq.ft- 124,560
                                </li>
                              </ul>
                              <div className="button-and-price">
                                <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                                <div className="price-area">
                                  <span>Fair Price</span>
                                  <h6>$11,564.00</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="product-card4 style-3">
                            <div className="product-img">
                              <div className="batch">
                                <span>For Sale</span>
                              </div>
                              <a href="#" className="fav">
                                <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                                  </path>
                                </svg>
                              </a>
                               
                              <div className="swiper product-img-slider">
                                <div className="swiper-wrapper">
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-06.png" alt="image" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <div className="location">
                                <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" /> Australia City</a></Link>
                              </div>
                              <h6><Link legacyBehavior href="/property-list/deatils1"><a>Prodigy Realty</a></Link></h6>
                              <ul className="features">
                                <li>
                                  <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                                  04 Beds
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                                  02 Baths
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/size2.svg" alt="" />
                                  Sq.ft- 124,560
                                </li>
                              </ul>
                              <div className="button-and-price">
                                <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                                <div className="price-area">
                                  <span>Great Price</span>
                                  <h6>$31,564.00</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="product-card4 style-3">
                            <div className="product-img">
                              <div className="batch">
                                <span>For Sale</span>
                              </div>
                              <a href="#" className="fav">
                                <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                                  </path>
                                </svg>
                              </a>
                               
                              <div className="swiper product-img-slider">
                                <div className="swiper-wrapper">
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-01.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-01.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-01.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-01.png" alt="image" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <div className="location">
                                <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" /> Sydne City</a></Link>
                              </div>
                              <h6><Link legacyBehavior href="/property-list/deatils1"><a>Keystone Realty</a></Link></h6>
                              <ul className="features">
                                <li>
                                  <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                                  04 Beds
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                                  02 Baths
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/size2.svg" alt="" />
                                  Sq.ft- 124,560
                                </li>
                              </ul>
                              <div className="button-and-price">
                                <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                                <div className="price-area">
                                  <span>Great Price</span>
                                  <h6>$3,564.00</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </div>
                    </Swiper>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="price2" role="tabpanel" aria-labelledby="price2-tab">
                <div className="row">
                  <div className="col-lg-12">
                    <Swiper {...slideSetting} className="swiper home6-top-use-car-slider">
                      <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                          <div className="product-card4 style-3">
                            <div className="product-img">
                              <div className="batch">
                                <span>For Sale</span>
                              </div>
                              <a href="#" className="fav">
                                <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                                  </path>
                                </svg>
                              </a>
                               
                              <div className="swiper product-img-slider">
                                <div className="swiper-wrapper">
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-06.png" alt="image" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <div className="location">
                                <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" /> Australia City</a></Link>
                              </div>
                              <h6><Link legacyBehavior href="/property-list/deatils1"><a>Prodigy Realty</a></Link></h6>
                              <ul className="features">
                                <li>
                                  <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                                  04 Beds
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                                  02 Baths
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/size2.svg" alt="" />
                                  Sq.ft- 124,560
                                </li>
                              </ul>
                              <div className="button-and-price">
                                <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                                <div className="price-area">
                                  <span>Great Price</span>
                                  <h6>$31,564.00</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="product-card4 style-3">
                            <div className="product-img">
                              <div className="batch">
                                <span>For Sale</span>
                              </div>
                              <a href="#" className="fav">
                                <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                                  </path>
                                </svg>
                              </a>
                               
                              <div className="swiper product-img-slider">
                                <div className="swiper-wrapper">
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-01.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-01.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-01.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-01.png" alt="image" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <div className="location">
                                <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" /> Sydne City</a></Link>
                              </div>
                              <h6><Link legacyBehavior href="/property-list/deatils1"><a>Keystone Realty</a></Link></h6>
                              <ul className="features">
                                <li>
                                  <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                                  04 Beds
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                                  02 Baths
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/size2.svg" alt="" />
                                  Sq.ft- 124,560
                                </li>
                              </ul>
                              <div className="button-and-price">
                                <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                                <div className="price-area">
                                  <span>Great Price</span>
                                  <h6>$3,564.00</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="product-card4 style-3">
                            <div className="product-img">
                              <a href="#" className="fav">
                                <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                                  </path>
                                </svg>
                              </a>
                               
                              <div className="swiper product-img-slider">
                                <div className="swiper-wrapper">
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-03.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-03.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-03.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-03.png" alt="image" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <div className="location">
                                <a href="#"><i className="bi bi-geo-alt" /> Canada City</a>
                              </div>
                              <h6><Link legacyBehavior href="/property-list/deatils1"><a>Cornerstone Properties</a></Link>
                              </h6>
                              <ul className="features">
                                <li>
                                  <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                                  04 Beds
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                                  02 Baths
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/size2.svg" alt="" />
                                  Sq.ft- 124,560
                                </li>
                              </ul>
                              <div className="button-and-price">
                                <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                                <div className="price-area">
                                  <span>Great Price</span>
                                  <h6>$4,564.00</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="product-card4 style-3">
                            <div className="product-img">
                              <div className="batch">
                                <span>For Sale</span>
                              </div>
                              <a href="#" className="fav">
                                <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                                  </path>
                                </svg>
                              </a>
                               
                              <div className="swiper product-img-slider">
                                <div className="swiper-wrapper">
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-05.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-05.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-05.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-05.png" alt="image" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <div className="location">
                                <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" /> New Delhi</a></Link>
                              </div>
                              <h6><Link legacyBehavior href="/property-list/deatils1"><a>Blue Sky Investments</a></Link>
                              </h6>
                              <ul className="features">
                                <li>
                                  <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                                  04 Beds
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                                  02 Baths
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/size2.svg" alt="" />
                                  Sq.ft- 124,560
                                </li>
                              </ul>
                              <div className="button-and-price">
                                <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                                <div className="price-area">
                                  <span>Fair Price</span>
                                  <h6>$11,564.00</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="product-card4 style-3">
                            <div className="product-img">
                              <div className="batch">
                                <span>For Sale</span>
                              </div>
                              <a href="#" className="fav">
                                <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                                  </path>
                                </svg>
                              </a>
                               
                              <div className="swiper product-img-slider">
                                <div className="swiper-wrapper">
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-06.png" alt="image" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <div className="location">
                                <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" /> Australia City</a></Link>
                              </div>
                              <h6><Link legacyBehavior href="/property-list/deatils1"><a>Prodigy Realty</a></Link></h6>
                              <ul className="features">
                                <li>
                                  <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                                  04 Beds
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                                  02 Baths
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/size2.svg" alt="" />
                                  Sq.ft- 124,560
                                </li>
                              </ul>
                              <div className="button-and-price">
                                <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                                <div className="price-area">
                                  <span>Great Price</span>
                                  <h6>$31,564.00</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="product-card4 style-3">
                            <div className="product-img">
                              <div className="batch">
                                <span>For Sale</span>
                              </div>
                              <a href="#" className="fav">
                                <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                                  </path>
                                </svg>
                              </a>
                               
                              <div className="swiper product-img-slider">
                                <div className="swiper-wrapper">
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-01.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-01.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-01.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-01.png" alt="image" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <div className="location">
                                <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" /> Sydne City</a></Link>
                              </div>
                              <h6><Link legacyBehavior href="/property-list/deatils1"><a>Keystone Realty</a></Link></h6>
                              <ul className="features">
                                <li>
                                  <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                                  04 Beds
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                                  02 Baths
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/size2.svg" alt="" />
                                  Sq.ft- 124,560
                                </li>
                              </ul>
                              <div className="button-and-price">
                                <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                                <div className="price-area">
                                  <span>Great Price</span>
                                  <h6>$3,564.00</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </div>
                    </Swiper>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="price3" role="tabpanel" aria-labelledby="price3-tab">
                <div className="row">
                  <div className="col-lg-12">
                    <Swiper {...slideSetting} className="swiper home6-top-use-car-slider">
                      <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                          <div className="product-card4 style-3">
                            <div className="product-img">
                              <div className="batch">
                                <span>For Sale</span>
                              </div>
                              <a href="#" className="fav">
                                <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                                  </path>
                                </svg>
                              </a>
                               
                              <div className="swiper product-img-slider">
                                <div className="swiper-wrapper">
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-06.png" alt="image" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <div className="location">
                                <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" /> Australia City</a></Link>
                              </div>
                              <h6><Link legacyBehavior href="/property-list/deatils1"><a>Prodigy Realty</a></Link></h6>
                              <ul className="features">
                                <li>
                                  <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                                  04 Beds
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                                  02 Baths
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/size2.svg" alt="" />
                                  Sq.ft- 124,560
                                </li>
                              </ul>
                              <div className="button-and-price">
                                <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                                <div className="price-area">
                                  <span>Great Price</span>
                                  <h6>$31,564.00</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="product-card4 style-3">
                            <div className="product-img">
                              <div className="batch">
                                <span>For Sale</span>
                              </div>
                              <a href="#" className="fav">
                                <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                                  </path>
                                </svg>
                              </a>
                               
                              <div className="swiper product-img-slider">
                                <div className="swiper-wrapper">
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-01.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-01.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-01.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-01.png" alt="image" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <div className="location">
                                <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" /> Sydne City</a></Link>
                              </div>
                              <h6><Link legacyBehavior href="/property-list/deatils1"><a>Keystone Realty</a></Link></h6>
                              <ul className="features">
                                <li>
                                  <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                                  04 Beds
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                                  02 Baths
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/size2.svg" alt="" />
                                  Sq.ft- 124,560
                                </li>
                              </ul>
                              <div className="button-and-price">
                                <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                                <div className="price-area">
                                  <span>Great Price</span>
                                  <h6>$3,564.00</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="product-card4 style-3">
                            <div className="product-img">
                              <a href="#" className="fav">
                                <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                                  </path>
                                </svg>
                              </a>
                               
                              <div className="swiper product-img-slider">
                                <div className="swiper-wrapper">
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-03.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-03.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-03.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-03.png" alt="image" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <div className="location">
                                <a href="#"><i className="bi bi-geo-alt" /> Canada City</a>
                              </div>
                              <h6><Link legacyBehavior href="/property-list/deatils1"><a>Cornerstone Properties</a></Link>
                              </h6>
                              <ul className="features">
                                <li>
                                  <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                                  04 Beds
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                                  02 Baths
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/size2.svg" alt="" />
                                  Sq.ft- 124,560
                                </li>
                              </ul>
                              <div className="button-and-price">
                                <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                                <div className="price-area">
                                  <span>Great Price</span>
                                  <h6>$4,564.00</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="product-card4 style-3">
                            <div className="product-img">
                              <div className="batch">
                                <span>For Sale</span>
                              </div>
                              <a href="#" className="fav">
                                <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                                  </path>
                                </svg>
                              </a>
                               
                              <div className="swiper product-img-slider">
                                <div className="swiper-wrapper">
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-05.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-05.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-05.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-05.png" alt="image" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <div className="location">
                                <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" /> New Delhi</a></Link>
                              </div>
                              <h6><Link legacyBehavior href="/property-list/deatils1"><a>Blue Sky Investments</a></Link>
                              </h6>
                              <ul className="features">
                                <li>
                                  <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                                  04 Beds
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                                  02 Baths
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/size2.svg" alt="" />
                                  Sq.ft- 124,560
                                </li>
                              </ul>
                              <div className="button-and-price">
                                <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                                <div className="price-area">
                                  <span>Fair Price</span>
                                  <h6>$11,564.00</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="product-card4 style-3">
                            <div className="product-img">
                              <div className="batch">
                                <span>For Sale</span>
                              </div>
                              <a href="#" className="fav">
                                <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                                  </path>
                                </svg>
                              </a>
                               
                              <div className="swiper product-img-slider">
                                <div className="swiper-wrapper">
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-06.png" alt="image" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <div className="location">
                                <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" /> Australia City</a></Link>
                              </div>
                              <h6><Link legacyBehavior href="/property-list/deatils1"><a>Prodigy Realty</a></Link></h6>
                              <ul className="features">
                                <li>
                                  <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                                  04 Beds
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                                  02 Baths
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/size2.svg" alt="" />
                                  Sq.ft- 124,560
                                </li>
                              </ul>
                              <div className="button-and-price">
                                <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                                <div className="price-area">
                                  <span>Great Price</span>
                                  <h6>$31,564.00</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                          <div className="product-card4 style-3">
                            <div className="product-img">
                              <div className="batch">
                                <span>For Sale</span>
                              </div>
                              <a href="#" className="fav">
                                <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                                  </path>
                                </svg>
                              </a>
                               
                              <div className="swiper product-img-slider">
                                <div className="swiper-wrapper">
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-01.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-01.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-01.png" alt="image" />
                                  </div>
                                  <div className="swiper-slide">
                                    <img src="/assets/img/home6/product-img-01.png" alt="image" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-content">
                              <div className="location">
                                <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" /> Sydne City</a></Link>
                              </div>
                              <h6><Link legacyBehavior href="/property-list/deatils1"><a>Keystone Realty</a></Link></h6>
                              <ul className="features">
                                <li>
                                  <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                                  04 Beds
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                                  02 Baths
                                </li>
                                <li>
                                  <img src="/assets/img/home1/icon/size2.svg" alt="" />
                                  Sq.ft- 124,560
                                </li>
                              </ul>
                              <div className="button-and-price">
                                <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                                <div className="price-area">
                                  <span>Great Price</span>
                                  <h6>$3,564.00</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </div>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home6TopRelated
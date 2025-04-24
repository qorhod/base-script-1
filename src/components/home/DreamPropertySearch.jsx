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

const DreamPropertySearch = () => {
    const slideSetting = useMemo(()=>{
        return {
            slidesPerView: 6,
		speed: 1500,
		spaceBetween: 25,
		loop: true,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-13",
			prevEl: ".prev-13",
		},
		pagination: {
			el: '.dream-pagination',
			clickable: true, // Allows clicking on pagination bullets to navigate
		},
		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 24,
			},
			1400: {
				slidesPerView: 6
			},
		}
        }
    },[])
  return (
    <div className="dream-property-area pt-100 pb-100 mb-100">
    <div className="container">
      <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
        <div className="col-lg-12">
          <div className="section-title-2 text-center">
            <h2>Search Dream Property</h2>
            <p>There has 30+ Apartment Types Available </p>
          </div>
        </div>
      </div>
      <div className="row wow fadeInUp" data-wow-delay="300ms">
        <div className="col-lg-12">
          <div className="filter-area d-flex flex-wrap align-items-center justify-content-between">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-make-tab" data-bs-toggle="pill" data-bs-target="#pills-make" type="button" role="tab" aria-controls="pills-make" aria-selected="true">For Sale</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-body-tab" data-bs-toggle="pill" data-bs-target="#pills-body" type="button" role="tab" aria-controls="pills-body" aria-selected="false">For Rent</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-location-tab" data-bs-toggle="pill" data-bs-target="#pills-location" type="button" role="tab" aria-controls="pills-location" aria-selected="false">Location</button>
              </li>
            </ul>
            <div className="slider-btn-group2 width-90">
              <div className="slider-btn prev-13">
                <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                </svg>
              </div>
              <div className="slider-btn next-13">
                <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-make" role="tabpanel" aria-labelledby="pills-make-tab">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-12">
              <Swiper {...slideSetting} className="swiper dream-category-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <Link legacyBehavior href="/property-list/left-sidebar">
                        <a  className="car-category text-center">
                            <div className="icon">
                                <img src="/assets/img/home2/icon/home.svg" alt="" />
                            </div>
                            <div className="content">
                                <h6>Town Home</h6>
                                <span>(1,02)</span>
                            </div>
                        </a>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Link legacyBehavior href="/property-list/left-sidebar">
                        <a  className="car-category text-center">
                      <div className="icon">
                        <img src="/assets/img/home2/icon/industrial.svg" alt="" />
                      </div>
                      <div className="content">
                        <h6>Industrial</h6>
                        <span>(3,45)</span>
                      </div>
                        </a>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Link legacyBehavior href="/property-list/left-sidebar">
                        <a  className="car-category text-center">
                      <div className="icon">
                        <img src="/assets/img/home2/icon/devlopment.svg" alt="" />
                      </div>
                      <div className="content">
                        <h6>Devlopment</h6>
                        <span>(1,45)</span>
                      </div>
                        </a>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Link legacyBehavior href="/property-list/left-sidebar">
                        <a  className="car-category text-center">
                      <div className="icon">
                        <img src="/assets/img/home2/icon/hotel.svg" alt="" />
                      </div>
                      <div className="content">
                        <h6>Hotel</h6>
                        <span>(3,46)</span>
                      </div>
                        </a>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Link legacyBehavior href="/property-list/left-sidebar">
                        <a  className="car-category text-center">
                      <div className="icon">
                        <img src="/assets/img/home2/icon/health-care.svg" alt="" />
                      </div>
                      <div className="content">
                        <h6>Health &amp; Care</h6>
                        <span>(1,22)</span>
                      </div>
                        </a>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Link legacyBehavior href="/property-list/left-sidebar">
                        <a  className="car-category text-center">
                      <div className="icon">
                        <img src="/assets/img/home2/icon/office.svg" alt="" />
                      </div>
                      <div className="content">
                        <h6>Office</h6>
                        <span>(1,2)</span>
                      </div>
                        </a>
                    </Link>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="pills-body" role="tabpanel" aria-labelledby="pills-body-tab">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-12">
              <Swiper {...slideSetting} className="swiper dream-category-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <Link legacyBehavior href="/property-list/left-sidebar">
                        <a  className="car-category text-center">
                            <div className="icon">
                                <img src="/assets/img/home2/icon/home.svg" alt="" />
                            </div>
                            <div className="content">
                                <h6>Town Home</h6>
                                <span>(1,02)</span>
                            </div>
                        </a>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Link legacyBehavior href="/property-list/left-sidebar">
                        <a  className="car-category text-center">
                      <div className="icon">
                        <img src="/assets/img/home2/icon/industrial.svg" alt="" />
                      </div>
                      <div className="content">
                        <h6>Industrial</h6>
                        <span>(3,45)</span>
                      </div>
                        </a>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Link legacyBehavior href="/property-list/left-sidebar">
                        <a  className="car-category text-center">
                      <div className="icon">
                        <img src="/assets/img/home2/icon/devlopment.svg" alt="" />
                      </div>
                      <div className="content">
                        <h6>Devlopment</h6>
                        <span>(1,45)</span>
                      </div>
                        </a>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Link legacyBehavior href="/property-list/left-sidebar">
                        <a  className="car-category text-center">
                      <div className="icon">
                        <img src="/assets/img/home2/icon/hotel.svg" alt="" />
                      </div>
                      <div className="content">
                        <h6>Hotel</h6>
                        <span>(3,46)</span>
                      </div>
                        </a>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Link legacyBehavior href="/property-list/left-sidebar">
                        <a  className="car-category text-center">
                      <div className="icon">
                        <img src="/assets/img/home2/icon/health-care.svg" alt="" />
                      </div>
                      <div className="content">
                        <h6>Health &amp; Care</h6>
                        <span>(1,22)</span>
                      </div>
                        </a>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Link legacyBehavior href="/property-list/left-sidebar">
                        <a  className="car-category text-center">
                      <div className="icon">
                        <img src="/assets/img/home2/icon/office.svg" alt="" />
                      </div>
                      <div className="content">
                        <h6>Office</h6>
                        <span>(1,2)</span>
                      </div>
                        </a>
                    </Link>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="pills-location" role="tabpanel" aria-labelledby="pills-location-tab">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-12">
              <Swiper {...slideSetting} className="swiper dream-category-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <Link legacyBehavior href="/property-listing-left-sidebar">
                      <a  className="car-category text-center">
                        <div className="icon">
                          <img src="/assets/img/home2/icon/panama.svg" alt="" />
                        </div>
                        <div className="content">
                          <h6>Panama City</h6>
                          <span>(4,63)</span>
                        </div>
                      </a>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Link legacyBehavior href="/property-listing-left-sidebar">
                      <a  className="car-category text-center">
                        <div className="icon">
                          <img src="/assets/img/home2/icon/sydne.svg" alt="" />
                        </div>
                        <div className="content">
                          <h6>Sydne City</h6>
                          <span>(1,63)</span>
                        </div>
                      </a>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Link legacyBehavior href="/property-listing-left-sidebar">
                      <a  className="car-category text-center">
                        <div className="icon">
                          <img src="/assets/img/home2/icon/delhi.svg" alt="" />
                        </div>
                        <div className="content">
                          <h6>New Delhi</h6>
                          <span>(4,63)</span>
                        </div>
                      </a>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Link legacyBehavior href="/property-listing-left-sidebar">
                      <a  className="car-category text-center">
                        <div className="icon">
                          <img src="/assets/img/home2/icon/new-work.svg" alt="" />
                        </div>
                        <div className="content">
                          <h6>New York</h6>
                          <span>(5,463)</span>
                        </div>
                      </a>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Link legacyBehavior href="/property-listing-left-sidebar">
                      <a  className="car-category text-center">
                        <div className="icon">
                          <img src="/assets/img/home2/icon/merchester.svg" alt="" />
                        </div>
                        <div className="content">
                          <h6>Merchester City</h6>
                          <span>(5,463)</span>
                        </div>
                      </a>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <Link legacyBehavior href="/property-listing-left-sidebar">
                      <a  className="car-category text-center">
                        <div className="icon">
                          <img src="/assets/img/home2/icon/abu-dabi.svg" alt="" />
                        </div>
                        <div className="content">
                          <h6>Abu-dabi</h6>
                          <span>(2,463)</span>
                        </div>
                      </a>
                    </Link>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="explore-btn d-lg-none d-flex pt-40">
        <Link legacyBehavior href="/brand-category"><a className="explore-btn2">Explore More <i className="bi bi-arrow-right-short" /></a></Link>
      </div>
    </div>
  </div>
  )
}

export default DreamPropertySearch

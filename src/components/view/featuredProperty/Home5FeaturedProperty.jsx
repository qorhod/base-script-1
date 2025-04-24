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

const Home5FeaturedProperty = () => {
  const slideSetting = useMemo(() => {
    return{
      speed: 1500,
		spaceBetween: 25,
		autoplay: {
			delay: 3000, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-11",
			prevEl: ".prev-11",
		},
		pagination: {
			el: ".pagination11",
			clickable: "true",
		  },

		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
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
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 3
			},
		}
    }
  }, []);
  return (
    <div className="home5-featured-project-area mb-100">
      <div className="container">
        <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
          <div className="col-lg-12 d-flex align-items-center justify-content-between gap-3 flex-wrap">
            <div className="section-title-2">
              <h2>Featured Property</h2>
              <p>To get the most accurate and up-to-date information.</p>
            </div>
            <div className="slider-btn-group2 width-90">
              <div className="slider-btn prev-11">
                <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                </svg>
              </div>
              <div className="slider-btn next-11">
                <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper {...slideSetting} className="swiper home4-latest-car-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="product-card4">
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
                            <img src="/assets/img/home4/letest-car1.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="/assets/img/home4/letest-car1.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="/assets/img/home4/letest-car1.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="/assets/img/home4/letest-car1.png" alt="image" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="location">
                        <Link legacyBehavior href="/property-listi/left-sidebar"><a><i className="bi bi-geo-alt" />
                          Panama City</a></Link>
                      </div>
                      <h6><Link legacyBehavior href="/property-list/deatils1"><a>Castle Gate Realty</a></Link></h6>
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
                        <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn3">View Details</a></Link>
                        <div className="price-area">
                          <span>Great Price</span>
                          <h6>$4,564.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="product-card4">
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
                            <img src="/assets/img/home4/letest-car3.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="/assets/img/home4/letest-car3.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="/assets/img/home4/letest-car3.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="/assets/img/home4/letest-car3.png" alt="image" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="location">
                        <Link legacyBehavior href="/property-listi/left-sidebar"><a><i className="bi bi-geo-alt" />
                          Panama City</a></Link>
                      </div>
                      <h6><Link legacyBehavior href="/property-list/deatils1"><a>Cornerstone Properties</a></Link></h6>
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
                        <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn3">View Details</a></Link>
                        <div className="price-area">
                          <span>Great Price</span>
                          <h6>$4,564.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="product-card4">
                    <div className="product-img">
                      <div className="batch">
                        <span className="black">For Rent</span>
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
                            <img src="/assets/img/home4/letest-car2.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="/assets/img/home4/letest-car2.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="/assets/img/home4/letest-car2.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="/assets/img/home4/letest-car2.png" alt="image" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="location">
                        <Link legacyBehavior href="/property-listi/left-sidebar"><a><i className="bi bi-geo-alt" />
                          Panama City</a></Link>
                      </div>
                      <h6><Link legacyBehavior href="/property-list/deatils1"><a>Horizon Realty Services</a></Link></h6>
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
                        <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn3">View Details</a></Link>
                        <div className="price-area">
                          <span>Great Price</span>
                          <h6>$4,564.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="product-card4">
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
                            <img src="/assets/img/home4/letest-car1.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="/assets/img/home4/letest-car1.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="/assets/img/home4/letest-car1.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="/assets/img/home4/letest-car1.png" alt="image" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="location">
                        <Link legacyBehavior href="/property-listi/left-sidebar"><a><i className="bi bi-geo-alt" />
                          Panama City</a></Link>
                      </div>
                      <h6><Link legacyBehavior href="/property-list/deatils1"><a>Castle Gate Realty</a></Link></h6>
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
                        <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn3">View Details</a></Link>
                        <div className="price-area">
                          <span>Great Price</span>
                          <h6>$4,564.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="product-card4">
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
                            <img src="/assets/img/home4/letest-car3.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="/assets/img/home4/letest-car3.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="/assets/img/home4/letest-car3.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="/assets/img/home4/letest-car3.png" alt="image" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="location">
                        <Link legacyBehavior href="/property-listi/left-sidebar"><a><i className="bi bi-geo-alt" />
                          Panama City</a></Link>
                      </div>
                      <h6><Link legacyBehavior href="/property-list/deatils1"><a>Cornerstone Properties</a></Link></h6>
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
                        <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn3">View Details</a></Link>
                        <div className="price-area">
                          <span>Great Price</span>
                          <h6>$4,564.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="product-card4">
                    <div className="product-img">
                      <div className="batch">
                        <span className="black">For Rent</span>
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
                            <img src="/assets/img/home4/letest-car2.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="/assets/img/home4/letest-car2.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="/assets/img/home4/letest-car2.png" alt="image" />
                          </div>
                          <div className="swiper-slide">
                            <img src="/assets/img/home4/letest-car2.png" alt="image" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-content">
                      <div className="location">
                        <Link legacyBehavior href="/property-listi/left-sidebar"><a><i className="bi bi-geo-alt" />
                          Panama City</a></Link>
                      </div>
                      <h6><Link legacyBehavior href="/property-list/deatils1"><a>Horizon Realty Services</a></Link></h6>
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
                        <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn3">View Details</a></Link>
                        <div className="price-area">
                          <span>Great Price</span>
                          <h6>$4,564.00</h6>
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

  )
}

export default Home5FeaturedProperty

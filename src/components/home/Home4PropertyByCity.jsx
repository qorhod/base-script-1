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

const Home4PropertyByCity = () => {
  const slideSetting = useMemo(() => {
    return {
      speed: 1500,
		spaceBetween: 25,
		slidesPerView: "auto",
		loop: true,
		autoplay: {
			delay: 3000, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-12",
			prevEl: ".prev-12",
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
			1600: {
				slidesPerView: 3
			},
		}
    }
  }, []);
  return (
    <div className="propertie-by-cites mb-100">
    <div className="container">
      <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
        <div className="col-lg-12 d-flex align-items-end justify-content-between gap-3 flex-wrap">
          <div className="section-title-2">
            <h2>Properties By Cities</h2>
            <p>Here are some of the featured Apartment in different categories</p>
          </div>   
          <div className="explore-more-btn">
            <Link legacyBehavior href="/property-list/deatils1"><a>Explore More <i className="bi bi-arrow-right" /></a></Link>
          </div>
        </div>
      </div>
      <div className="row wow fadeInUp" data-wow-delay="300ms">
        <div className="col-lg-12 mb-40">
          <Swiper {...slideSetting} className="swiper propertie-by-cites-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="product-card2">
                  <div className="product-img">
                    <a href="#" className="fav">
                      <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                        </path>
                      </svg>
                    </a>
                    <img src="/assets/img/home4/city-01.png" alt="" />
                  </div>
                  <div className="product-content">
                    <h6><Link legacyBehavior href="/property-list/left-sidebar"><a>Chicago City</a></Link></h6>
                    <span>05 Property</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="product-card2">
                  <div className="product-img">
                    <a href="#" className="fav">
                      <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                        </path>
                      </svg>
                    </a>
                    <img src="/assets/img/home4/city-02.png" alt="" />
                  </div>
                  <div className="product-content">
                    <h6><Link legacyBehavior href="/property-list/left-sidebar"><a>Sydne City</a></Link></h6>
                    <span>08 Property</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="product-card2">
                  <div className="product-img">
                    <a href="#" className="fav">
                      <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                        </path>
                      </svg>
                    </a>
                    <img src="/assets/img/home4/city-03.png" alt="" />
                  </div>
                  <div className="product-content">
                    <h6><Link legacyBehavior href="/property-list/left-sidebar"><a>Mumbai City</a></Link></h6>
                    <span>07 Property</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="product-card2">
                  <div className="product-img">
                    <a href="#" className="fav">
                      <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                        </path>
                      </svg>
                    </a>
                    <img src="/assets/img/home4/city-01.png" alt="" />
                  </div>
                  <div className="product-content">
                    <h6><Link legacyBehavior href="/property-list/left-sidebar"><a>Chicago City</a></Link></h6>
                    <span>05 Property</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="product-card2">
                  <div className="product-img">
                    <a href="#" className="fav">
                      <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                        </path>
                      </svg>
                    </a>
                    <img src="/assets/img/home4/city-02.png" alt="" />
                  </div>
                  <div className="product-content">
                    <h6><Link legacyBehavior href="/property-list/left-sidebar"><a>Sydne City</a></Link></h6>
                    <span>08 Property</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="product-card2">
                  <div className="product-img">
                    <a href="#" className="fav">
                      <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                        </path>
                      </svg>
                    </a>
                    <img src="/assets/img/home4/city-03.png" alt="" />
                  </div>
                  <div className="product-content">
                    <h6><Link legacyBehavior href="/property-list/left-sidebar"><a>Mumbai City</a></Link></h6>
                    <span>07 Property</span>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
        <div className="col-lg-12 d-flex justify-content-center wow fadeInUp" data-wow-delay="400ms">
          <div className="slider-btn-pagination">
            <div className="slider-btn prev-12"><i className="bi bi-arrow-left" /></div>
            <div className="pagination pagination11" />
            <div className="slider-btn next-12"><i className="bi bi-arrow-right" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Home4PropertyByCity

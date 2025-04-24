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

const Home3RecentProperty = () => {
    const slideSetting = useMemo(()=>{
        return {
            slidesPerView: "auto",
		speed: 1500,
		spaceBetween: 25,
		loop: true,
		autoplay: {
			delay: 3000, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-5",
			prevEl: ".prev-5",
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
				slidesPerView: 4,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 4
			},
		}
        }
    },[])
  return (
    <div className="home3-project-location-area brand-category-section pt-100 mb-100">
    <div className="container">
      <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
        <div className="col-lg-12 d-flex align-items-end justify-content-between gap-3 flex-wrap">
          <div className="section-title-2">
            <h2>Properties By Cities</h2>
            <p>These unique names aim to convey a sense of innovation.</p>
          </div>      
          <div className="slider-btn-group2">
            <div className="slider-btn prev-5">
              <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
              </svg>
            </div>
            <div className="slider-btn next-5">
              <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
              </svg>
            </div>
          </div> 
        </div>
      </div>
      <div className="row wow fadeInUp" data-wow-delay="300ms">
        <div className="col-lg-12">
          <Swiper {...slideSetting} className="swiper brand-category-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="product-card3 style-4">
                  <div className="product-img">
                    <Link legacyBehavior href="/property-list/left-sidebar"><a><img src="/assets/img/home3/city-01.png" alt="image" /></a></Link>
                  </div>
                  <div className="product-content">
                    <h5><Link legacyBehavior href="/property-list/left-sidebar"><a>Sydne City</a></Link></h5>
                    <span>10 Property</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="product-card3 style-4">
                  <div className="product-img">
                    <Link legacyBehavior href="/property-list/left-sidebar"><a><img src="/assets/img/home3/city-02.png" alt="image" /></a></Link>
                  </div>
                  <div className="product-content">
                    <h5><Link legacyBehavior href="/property-list/left-sidebar"><a>Chicago City</a></Link></h5>
                    <span>02 Property</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="product-card3 style-4">
                  <div className="product-img">
                    <Link legacyBehavior href="/property-list/left-sidebar"><a><img src="/assets/img/home3/city-03.png" alt="image" /></a></Link>
                  </div>
                  <div className="product-content">
                    <h5><Link legacyBehavior href="/property-list/left-sidebar"><a>New Delhi</a></Link></h5>
                    <span>06 Property</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="product-card3 style-4">
                  <div className="product-img">
                    <Link legacyBehavior href="/property-list/left-sidebar"><a><img src="/assets/img/home3/city-04.png" alt="image" /></a></Link>
                  </div>
                  <div className="product-content">
                    <h5><Link legacyBehavior href="/property-list/left-sidebar"><a>Loss Angelse</a></Link></h5>
                    <span>15 Property</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="product-card3 style-4">
                  <div className="product-img">
                    <Link legacyBehavior href="/property-list/left-sidebar"><a><img src="/assets/img/home3/city-01.png" alt="image" /></a></Link>
                  </div>
                  <div className="product-content">
                    <h5><Link legacyBehavior href="/property-list/left-sidebar"><a>Sydne City</a></Link></h5>
                    <span>10 Property</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="product-card3 style-4">
                  <div className="product-img">
                    <Link legacyBehavior href="/property-list/left-sidebar"><a><img src="/assets/img/home3/city-02.png" alt="image" /></a></Link>
                  </div>
                  <div className="product-content">
                    <h5><Link legacyBehavior href="/property-list/left-sidebar"><a>Chicago City</a></Link></h5>
                    <span>02 Property</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="product-card3 style-4">
                  <div className="product-img">
                    <Link legacyBehavior href="/property-list/left-sidebar"><a><img src="/assets/img/home3/city-03.png" alt="image" /></a></Link>
                  </div>
                  <div className="product-content">
                    <h5><Link legacyBehavior href="/property-list/left-sidebar"><a>New Delhi</a></Link></h5>
                    <span>06 Property</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="product-card3 style-4">
                  <div className="product-img">
                    <Link legacyBehavior href="/property-list/left-sidebar"><a><img src="/assets/img/home3/city-04.png" alt="image" /></a></Link>
                  </div>
                  <div className="product-content">
                    <h5><Link legacyBehavior href="/property-list/left-sidebar"><a>Loss Angelse</a></Link></h5>
                    <span>15 Property</span>
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

export default Home3RecentProperty

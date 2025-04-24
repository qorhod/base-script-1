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
const Home4ApartmentType = () => {
  const slideSetting = useMemo(() => {
    return{
      slidesPerView: 6,
		speed: 1500,
		spaceBetween: 25,
		loop: true,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-1",
			prevEl: ".prev-1",
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
  }, []);
  return (
    <div className="home4-apartment-type pt-100 mb-100">
    <div className="container">
      <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
        <div className="col-lg-12 d-flex align-items-end justify-content-between gap-3 flex-wrap">
          <div className="section-title-2">
            <h2>Apartments Types</h2>
            <p>To get the most accurate and up-to-date information.</p>
          </div>    
          <div className="explore-more-btn">
            <Link legacyBehavior href="/property-list/left-sidebar"><a>Explore All Category  <i className="bi bi-arrow-right" /></a></Link>
          </div>
        </div>
      </div>  
      <div className="row mb-40 g-4 justify-content-center">
        <div className="col-lg-12">
          <Swiper {...slideSetting} className="swiper apartment-type-slider">
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
                <Link legacyBehavior href="/property-list/left-sidebar" >
                  <a className="car-category text-center">
                  <div className="icon">
                    <img src="/assets/img/home2/icon/devlopment.svg" alt="" />
                  </div>
                  <div className="content">
                    <h6>Development</h6>
                    <span>(1,00)</span>
                  </div>
                  </a>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <Link legacyBehavior href="/property-list/left-sidebar">
                  <a className="car-category text-center">
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
                    <span>(10)</span>
                  </div>
                  </a>
                </Link>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 d-flex justify-content-center">
          <div className="slider-btn-pagination">
            <div className="slider-btn prev-1"><i className="bi bi-arrow-left" /></div>
            <div className="pagination dream-pagination" />
            <div className="slider-btn next-1"><i className="bi bi-arrow-right" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Home4ApartmentType

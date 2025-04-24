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

const Home1Team = () => {
    const slideSettings = useMemo(()=>{
        return {
            slidesPerView: "auto",
		speed: 1500,
		spaceBetween: 25,
		autoplay: {
			delay: 2500, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-13",
			prevEl: ".prev-13",
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
    <div className="home1-team-section mb-100 pt-90 pb-90">
  <div className="container">
    <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
      <div className="col-lg-12 d-flex align-items-center justify-content-between gap-3 flex-wrap">
        <div className="section-title1">
          <span>Top Expertise</span>
          <h2>Meet Our Associates</h2>
        </div>
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
    <div className="row">
      <div className="col-lg-12">
        <Swiper {...slideSettings} className="swiper home1-team-slider">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="single-team-card">
                <div className="team-img">
                  <img src="/assets/img/home1/team-img-01.png" alt="" />
                  <div className="contact-btn">
                    <a href="#" className="primary-btn3"><img src="/assets/img/home1/icon/contact.svg" alt="" /> Contact</a>
                  </div>
                </div>
                <div className="team-content">
                  <h6>Milestone Hoke</h6>
                  <span>CEO &amp; Founder</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="single-team-card">
                <div className="team-img">
                  <img src="/assets/img/home1/team-img-02.png" alt="" />
                  <div className="contact-btn">
                    <a href="#" className="primary-btn3"><img src="/assets/img/home1/icon/contact.svg" alt="" /> Contact</a>
                  </div>
                </div>
                <div className="team-content">
                  <h6>Nowry Jahan</h6>
                  <span>Sales Associate</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="single-team-card">
                <div className="team-img">
                  <img src="/assets/img/home1/team-img-03.png" alt="" />
                  <div className="contact-btn">
                    <a href="#" className="primary-btn3"><img src="/assets/img/home1/icon/contact.svg" alt="" /> Contact</a>
                  </div>
                </div>
                <div className="team-content">
                  <h6>Daniel Scoot</h6>
                  <span>Property Manager</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="single-team-card">
                <div className="team-img">
                  <img src="/assets/img/home1/team-img-04.png" alt="" />
                  <div className="contact-btn">
                    <a href="#" className="primary-btn3"><img src="/assets/img/home1/icon/contact.svg" alt="" /> Contact</a>
                  </div>
                </div>
                <div className="team-content">
                  <h6>Jacoline Frangly</h6>
                  <span>Residetial Agent</span>
                </div>
              </div>
            </SwiperSlide>
            <dSwiperSlideiv className="swiper-slide">
              <div className="single-team-card">
                <div className="team-img">
                  <img src="/assets/img/home1/team-img-01.png" alt="" />
                  <div className="contact-btn">
                    <a href="#" className="primary-btn3"><img src="/assets/img/home1/icon/contact.svg" alt="" /> Contact</a>
                  </div>
                </div>
                <div className="team-content">
                  <h6>Milestone Hoke</h6>
                  <span>CEO &amp; Founder</span>
                </div>
              </div>
            </dSwiperSlideiv>
            <SwiperSlide className="swiper-slide">
              <div className="single-team-card">
                <div className="team-img">
                  <img src="/assets/img/home1/team-img-02.png" alt="" />
                  <div className="contact-btn">
                    <a href="#" className="primary-btn3"><img src="/assets/img/home1/icon/contact.svg" alt="" /> Contact</a>
                  </div>
                </div>
                <div className="team-content">
                  <h6>Nowry Jahan</h6>
                  <span>Sales Associate</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="single-team-card">
                <div className="team-img">
                  <img src="/assets/img/home1/team-img-03.png" alt="" />
                  <div className="contact-btn">
                    <a href="#" className="primary-btn3"><img src="/assets/img/home1/icon/contact.svg" alt="" /> Contact</a>
                  </div>
                </div>
                <div className="team-content">
                  <h6>Daniel Scoot</h6>
                  <span>Property Manager</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="single-team-card">
                <div className="team-img">
                  <img src="/assets/img/home1/team-img-04.png" alt="" />
                  <div className="contact-btn">
                    <a href="#" className="primary-btn3"><img src="/assets/img/home1/icon/contact.svg" alt="" /> Contact</a>
                  </div>
                </div>
                <div className="team-content">
                  <h6>Jacoline Frangly</h6>
                  <span>Residetial Agent</span>
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

export default Home1Team

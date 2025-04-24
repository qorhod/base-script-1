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
const Home3Banner = () => {
    const slideSetting = useMemo(()=>{
        return{
            slidesPerView: "auto",
		speed: 1500,
		spaceBetween: 25,
		loop: true,
		effect: 'fade',
		autoplay: {
			delay: 3000, // Autoplay duration in milliseconds
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".next-4",
			prevEl: ".prev-4",
		},
		pagination: {
			el: ".paginations111",
			clickable: true,
		},
        }
    },[])
  return (
    <div className="home3-banner-area">
  <Swiper {...slideSetting} className="swiper home3-banner-slider">
    <div className="swiper-wrapper">
      <SwiperSlide className="swiper-slide">
        <div className="banner-bg" style={{backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.35) 100%), url(assets/img/home3/home3-banner-img-1.png)'}}>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <div className="banner-bg" style={{backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.35) 100%), url(assets/img/home3/home3-banner-img-2.png)'}}>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <div className="banner-bg" style={{backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.35) 100%), url(assets/img/home3/home3-banner-img-4.png)'}}>
        </div>
      </SwiperSlide>
    </div>
  </Swiper>
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12">
        <div className="banner-wrapper">
          <div className="banner-content">
            <h1>Prestige Properties</h1>
            <div className="banner-feature">
              <ul>
                <li>Total Home <span>23, 855</span></li>
                <li>On Going <span>19, 230</span></li>
                <li>Completed <span>2, 230</span></li>
                <li>New Project <span>2, 230</span></li>
              </ul>
            </div>
            <div className="trustpilot-review">
              <strong>Excellent!</strong>
              <img src="/assets/img/home1/icon/trustpilot-star2.svg" alt="" />
              <p>5.0 Rating out of <strong>5.0</strong> based on <a href="#"><strong>245354</strong>
                  reviews</a></p>
              <img src="/assets/img/home2/icon/trustpilot-logo2.svg" alt="" />
            </div>
          </div>
          <div className="slider-btn-group style-2 style-3 justify-content-md-end justify-content-center gap-4">
            <div className="slider-btn prev-4 d-md-flex d-none">
              <svg width={11} height={19} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
              </svg>
            </div>
            <div className="paginations111" />
            <div className="slider-btn next-4 d-md-flex d-none">
              <svg width={11} height={19} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Home3Banner

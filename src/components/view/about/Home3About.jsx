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

const Home3About = () => {
  const slideSetting = useMemo(() => {
    return {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 25,
      slidesPerView: 1,
      autoplay: {
        delay: 3000, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".next-6",
        prevEl: ".prev-6",
      },
    }
  }, []);
  return (
    <div className="home3-about-section pt-90 pb-90 mb-100">
      <div className="container">
        <div className="row g-lg-4 gy-5 mb-70">
          <div className="col-lg-6">
            <div
              className="about-content-wrap wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="section-title1">
                <span>(Since-1994)</span>
                <h2>Get To Know About Neckle</h2>
              </div>
              <h6>Welcome to our Neckle! </h6>
              <p>
                We're thrilled to have you join our community of automotive
                enthusiasts and professionals. Whether you're a passionate
                driver, a car owner, or someone who loves all things automotive,
                you've come to the right place.At neckle, we strive to create a
                space where people can connect, share knowledge, and explore the
                exciting world of automobiles.{" "}
              </p>
              <div className="author-area">
                <img src="/assets/img/home2/icon/author-signature.svg" alt="" />
                <div className="author-name-deg">
                  <h6>Natrison Mongla</h6>
                  <span>(CEO &amp; Founder)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="office-location-area wow fadeInUp"
              data-wow-delay="400ms"
            >
              <Swiper {...slideSetting} className="swiper home3-about-img-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="about-img-wrap">
                      <div className="logo-area">
                        <img src="/assets/img/home3/about.svg" alt="" />
                      </div>
                      <div className="about-img">
                        <img src="/assets/img/home3/about-img-11.png" alt="" />
                      </div>
                      <div className="about-img">
                        <img src="/assets/img/home3/about-img-12.png" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="about-img-wrap">
                      <div className="logo-area">
                        <img src="/assets/img/home3/about.svg" alt="" />
                      </div>
                      <div className="about-img">
                        <img src="/assets/img/home3/about-img-13.png" alt="" />
                      </div>
                      <div className="about-img">
                        <img src="/assets/img/home3/about-img-14.png" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="about-img-wrap">
                      <div className="logo-area">
                        <img src="/assets/img/home3/about.svg" alt="" />
                      </div>
                      <div className="about-img">
                        <img src="/assets/img/home3/about-img-15.png" alt="" />
                      </div>
                      <div className="about-img">
                        <img src="/assets/img/home3/about-img-16.png" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
                <div className="slider-btn-group2">
                  <div className="slider-btn prev-6">
                    <svg
                      width={9}
                      height={15}
                      viewBox="0 0 8 13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                    </svg>
                  </div>
                  <div className="slider-btn next-6">
                    <svg
                      width={9}
                      height={15}
                      viewBox="0 0 8 13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                    </svg>
                  </div>
                </div>
              </Swiper>
              <div className="office-address">
                <h6>Our Office</h6>
                <a href="#">House-23/B12, Street 1/2, Panama City, PARIS</a>
              </div>
            </div>
          </div>
        </div>
        <div className="our-activetis wow fadeInUp" data-wow-delay="200ms">
          <div className="row justify-content-center g-lg-4 gy-5">
            <div className="col-lg-3 col-sm-4 col-sm-6 divider d-flex justify-content-lg-start justify-content-sm-center">
              <div className="single-activiti">
                <div className="icon">
                  <img src="/assets/img/home1/icon/av-project.svg" alt="" />
                </div>
                <div className="content">
                  <div className="number">
                    <h5 className="counter">600</h5>
                    <span>K+</span>
                  </div>
                  <p>Project Available</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-4 col-sm-6 divider d-flex justify-content-sm-center">
              <div className="single-activiti">
                <div className="icon">
                  <img src="/assets/img/home1/icon/sold-car.svg" alt="" />
                </div>
                <div className="content">
                  <div className="number">
                    <h5 className="counter">400</h5>
                    <span>K+</span>
                  </div>
                  <p>Project Sold</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-4 col-sm-6 divider d-flex justify-content-sm-center">
              <div className="single-activiti">
                <div className="icon">
                  <img src="/assets/img/home1/icon/new-home.svg" alt="" />
                </div>
                <div className="content">
                  <div className="number">
                    <h5 className="counter">200</h5>
                    <span>K+</span>
                  </div>
                  <p>New Home</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-4 col-sm-6 d-flex justify-content-lg-end justify-content-sm-center">
              <div className="single-activiti">
                <div className="icon">
                  <img src="/assets/img/home1/icon/happy-customar.svg" alt="" />
                </div>
                <div className="content">
                  <div className="number">
                    <h5 className="counter">98.50</h5>
                    <span>%</span>
                  </div>
                  <p>Customer Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home3About;

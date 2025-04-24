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

const Home2FeaturedProperty = () => {
    const slideSetting = useMemo(()=>{
        return {
            slidesPerView: 'auto',
            speed: 1500,
		spaceBetween: 25,
		autoplay: {
			delay: 3000, // Autoplay duration in milliseconds
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
    <div className="featured-car-section mb-100">
  <div className="container">
    <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
      <div className="col-lg-12 d-flex align-items-center justify-content-between gap-3 flex-wrap">
        <div className="section-title-2">
          <h2>Featured Property</h2>
          <p>Here are some of the featured Apartment in different categories</p>
        </div>      
        <div className="slider-btn-group2">
          <div className="slider-btn prev-1">
            <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
            </svg>
          </div>
          <div className="slider-btn next-1">
            <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
            </svg>
          </div>
        </div> 
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row wow fadeInUp" data-wow-delay="300ms">
      <Swiper {...slideSetting} className="swiper home2-featured-slider">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div className="feature-card">
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
                      <img className="img-fluid" src="/assets/img/home2/feature-1.png" alt="image" />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-fluid" src="/assets/img/home2/feature-1.png" alt="image" />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-fluid" src="/assets/img/home2/feature-1.png" alt="image" />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-fluid" src="/assets/img/home2/feature-1.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-content">
                <div className="price">
                  <strong>$76,475.00</strong>
                </div>
                <h5><Link legacyBehavior href="/property-list/deatils1"><a>Quest Properties</a></Link></h5>
                <ul className="features">
                  <li>
                    <img src="/assets/img/home2/icon/bed1.svg" alt="" />
                    06 Beds
                  </li>
                  <li>
                    <img src="/assets/img/home2/icon/bath1.svg" alt="" />
                    03 Baths
                  </li>
                  <li>
                    <img src="/assets/img/home2/icon/size1.svg" alt="" />
                    Sq.ft- 453,234
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="feature-card">
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
                      <img className="img-fluid" src="/assets/img/home2/feature-2.png" alt="image" />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-fluid" src="/assets/img/home2/feature-2.png" alt="image" />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-fluid" src="/assets/img/home2/feature-2.png" alt="image" />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-fluid" src="/assets/img/home2/feature-2.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-content">
                <div className="price">
                  <strong>$32,445.00</strong>
                </div>
                <h5><Link legacyBehavior href="/property-list/deatils1"><a>Stellar Gate Realty </a></Link></h5>
                <ul className="features">
                  <li>
                    <img src="/assets/img/home2/icon/bed1.svg" alt="" />
                    06 Beds
                  </li>
                  <li>
                    <img src="/assets/img/home2/icon/bath1.svg" alt="" />
                    03 Baths
                  </li>
                  <li>
                    <img src="/assets/img/home2/icon/size1.svg" alt="" />
                    Sq.ft- 453,234
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="feature-card">
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
                      <img className="img-fluid" src="/assets/img/home2/feature-3.png" alt="image" />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-fluid" src="/assets/img/home2/feature-3.png" alt="image" />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-fluid" src="/assets/img/home2/feature-3.png" alt="image" />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-fluid" src="/assets/img/home2/feature-3.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-content">
                <div className="price">
                  <strong>$67,542.00</strong>
                </div>
                <h5><Link legacyBehavior href="/property-list/deatils1"><a>Nimbus Properties</a></Link></h5>
                <ul className="features">
                  <li>
                    <img src="/assets/img/home2/icon/bed1.svg" alt="" />
                    06 Beds
                  </li>
                  <li>
                    <img src="/assets/img/home2/icon/bath1.svg" alt="" />
                    03 Baths
                  </li>
                  <li>
                    <img src="/assets/img/home2/icon/size1.svg" alt="" />
                    Sq.ft- 453,234
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="feature-card">
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
                      <img className="img-fluid" src="/assets/img/home2/feature-4.png" alt="image" />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-fluid" src="/assets/img/home2/feature-4.png" alt="image" />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-fluid" src="/assets/img/home2/feature-4.png" alt="image" />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-fluid" src="/assets/img/home2/feature-4.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-content">
                <div className="price">
                  <strong>$45,328.00</strong>
                </div>
                <h5><Link legacyBehavior href="/property-list/deatils1"><a>Zephyr Properties</a></Link></h5>
                <ul className="features">
                  <li>
                    <img src="/assets/img/home2/icon/bed1.svg" alt="" />
                    06 Beds
                  </li>
                  <li>
                    <img src="/assets/img/home2/icon/bath1.svg" alt="" />
                    03 Baths
                  </li>
                  <li>
                    <img src="/assets/img/home2/icon/size1.svg" alt="" />
                    Sq.ft- 453,234
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="feature-card">
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
                      <img className="img-fluid" src="/assets/img/home2/feature-1.png" alt="image" />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-fluid" src="/assets/img/home2/feature-1.png" alt="image" />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-fluid" src="/assets/img/home2/feature-1.png" alt="image" />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-fluid" src="/assets/img/home2/feature-1.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-content">
                <div className="price">
                  <strong>$76,475.00</strong>
                </div>
                <h5><Link legacyBehavior href="/property-list/deatils1"><a>Quest Properties</a></Link></h5>
                <ul className="features">
                  <li>
                    <img src="/assets/img/home2/icon/bed1.svg" alt="" />
                    06 Beds
                  </li>
                  <li>
                    <img src="/assets/img/home2/icon/bath1.svg" alt="" />
                    03 Baths
                  </li>
                  <li>
                    <img src="/assets/img/home2/icon/size1.svg" alt="" />
                    Sq.ft- 453,234
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="feature-card">
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
                      <img className="img-fluid" src="/assets/img/home2/feature-2.png" alt="image" />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-fluid" src="/assets/img/home2/feature-2.png" alt="image" />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-fluid" src="/assets/img/home2/feature-2.png" alt="image" />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-fluid" src="/assets/img/home2/feature-2.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-content">
                <div className="price">
                  <strong>$32,445.00</strong>
                </div>
                <h5><Link legacyBehavior href="/property-list/deatils1"><a>Stellar Gate Realty </a></Link></h5>
                <ul className="features">
                  <li>
                    <img src="/assets/img/home2/icon/bed1.svg" alt="" />
                    06 Beds
                  </li>
                  <li>
                    <img src="/assets/img/home2/icon/bath1.svg" alt="" />
                    03 Baths
                  </li>
                  <li>
                    <img src="/assets/img/home2/icon/size1.svg" alt="" />
                    Sq.ft- 453,234
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="feature-card">
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
                      <img className="img-fluid" src="/assets/img/home2/feature-3.png" alt="image" />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-fluid" src="/assets/img/home2/feature-3.png" alt="image" />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-fluid" src="/assets/img/home2/feature-3.png" alt="image" />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-fluid" src="/assets/img/home2/feature-3.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-content">
                <div className="price">
                  <strong>$67,542.00</strong>
                </div>
                <h5><Link legacyBehavior href="/property-list/deatils1"><a>Nimbus Properties</a></Link></h5>
                <ul className="features">
                  <li>
                    <img src="/assets/img/home2/icon/bed1.svg" alt="" />
                    06 Beds
                  </li>
                  <li>
                    <img src="/assets/img/home2/icon/bath1.svg" alt="" />
                    03 Baths
                  </li>
                  <li>
                    <img src="/assets/img/home2/icon/size1.svg" alt="" />
                    Sq.ft- 453,234
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="feature-card">
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
                      <img className="img-fluid" src="/assets/img/home2/feature-4.png" alt="image" />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-fluid" src="/assets/img/home2/feature-4.png" alt="image" />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-fluid" src="/assets/img/home2/feature-4.png" alt="image" />
                    </div>
                    <div className="swiper-slide">
                      <img className="img-fluid" src="/assets/img/home2/feature-4.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-content">
                <div className="price">
                  <strong>$45,328.00</strong>
                </div>
                <h5><Link legacyBehavior href="/property-list/deatils1"><a>Zephyr Properties</a></Link></h5>
                <ul className="features">
                  <li>
                    <img src="/assets/img/home2/icon/bed1.svg" alt="" />
                    06 Beds
                  </li>
                  <li>
                    <img src="/assets/img/home2/icon/bath1.svg" alt="" />
                    03 Baths
                  </li>
                  <li>
                    <img src="/assets/img/home2/icon/size1.svg" alt="" />
                    Sq.ft- 453,234
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  </div>
</div>

  )
}

export default Home2FeaturedProperty

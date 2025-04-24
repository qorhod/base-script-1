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

const Home1FeaturedProperty = () => {
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
    <div className="most-search-area pt-90 pb-90 mb-100">
      <div className="container">
        <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
          <div className="col-lg-12 d-flex align-items-end justify-content-between flex-wrap gap-4">
            <div className="section-title1">
              <span>Available Property</span>
              <h2>Featured Property</h2>
            </div>
            <ul className="nav nav-tabs" id="myTab5" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="sedan-tab" data-bs-toggle="tab" data-bs-target="#sedan" type="button" role="tab" aria-controls="sedan" aria-selected="true">Industrial</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="suv-tab" data-bs-toggle="tab" data-bs-target="#suv" type="button" role="tab" aria-controls="suv" aria-selected="false">Apartment</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="toyota-tab" data-bs-toggle="tab" data-bs-target="#toyota" type="button" role="tab" aria-controls="toyota" aria-selected="false">House</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="hatch-tab" data-bs-toggle="tab" data-bs-target="#hatch" type="button" role="tab" aria-controls="hatch" aria-selected="false">Banglow</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          <div className="col-lg-12 position-relative">
            <div className="slider-btn-groups">
              <div className="slider-btn prev-12">
                <svg width={11} height={19} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                </svg>
              </div>
              <div className="slider-btn next-12">
                <svg width={11} height={19} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                </svg>
              </div>
            </div>
            <div className="tab-content" id="myTabContent5">
              <div className="tab-pane fade show active" id="sedan" role="tabpanel" aria-labelledby="sedan-tab">
                <Swiper {...slideSettings} className="swiper most-search-slider mb-50">
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
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
                                <img src="/assets/img/home1/product-img-1.png" alt="image" />
                              </div>
                              <div className="swiper-slide">
                                <img src="/assets/img/home1/product-img-2.png" alt="image" />
                              </div>
                              <div className="swiper-slide">
                                <img src="/assets/img/home1/product-img-3.png" alt="image" />
                              </div>
                              <div className="swiper-slide">
                                <img src="/assets/img/home1/product-img-4.png" alt="image" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Harmony House</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              03 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              03 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 234,560
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$7,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
                        <div className="product-img">
                          <div className="batch">
                            <span className="yellow">For Sale</span>
                          </div>
                          <a href="#" className="fav">
                            <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                              </path>
                            </svg>
                          </a>
                          <img src="/assets/img/home1/product-img-2.png" alt="image" /> 
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Melbourne City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Oakwood Estate</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              06 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              03 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 453,234
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$9,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
                        <div className="product-img">
                          <div className="batch">
                            <span className="yellow">For Sale</span>
                          </div>
                          <a href="#" className="fav">
                            <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                              </path>
                            </svg>
                          </a>
                          <img src="/assets/img/home1/product-img-3.png" alt="image" /> 
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Melbourne City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Willow Creek Residence</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              02 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              03 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 244,560
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$6,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
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
                          <img src="/assets/img/home1/product-img-4.png" alt="image" /> 
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Sydne City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Meadowview Manor</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              05 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              04 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 256,560
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$6,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
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
                                <img src="/assets/img/home1/product-img-1.png" alt="image" />
                              </div>
                              <div className="swiper-slide">
                                <img src="/assets/img/home1/product-img-2.png" alt="image" />
                              </div>
                              <div className="swiper-slide">
                                <img src="/assets/img/home1/product-img-3.png" alt="image" />
                              </div>
                              <div className="swiper-slide">
                                <img src="/assets/img/home1/product-img-4.png" alt="image" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Harmony House</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              03 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              03 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 234,560
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$7,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
                        <div className="product-img">
                          <div className="batch">
                            <span className="yellow">For Sale</span>
                          </div>
                          <a href="#" className="fav">
                            <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                              </path>
                            </svg>
                          </a>
                          <img src="/assets/img/home1/product-img-2.png" alt="image" /> 
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Melbourne City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Oakwood Estate</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              06 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              03 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 453,234
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$9,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
                        <div className="product-img">
                          <div className="batch">
                            <span className="yellow">For Sale</span>
                          </div>
                          <a href="#" className="fav">
                            <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                              </path>
                            </svg>
                          </a>
                          <img src="/assets/img/home1/product-img-3.png" alt="image" /> 
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Melbourne City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Willow Creek Residence</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              02 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              03 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 244,560
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$6,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
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
                          <img src="/assets/img/home1/product-img-4.png" alt="image" /> 
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Sydne City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Meadowview Manor</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              05 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              04 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 256,560
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$6,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
                <div className="view-btn-area">
                  <p>Availabe 50+ Industrial</p>
                  <Link legacyBehavior href="/property-list/left-sidebar"><a className="view-btn">View All Industrial</a></Link>
                </div>
              </div>
              <div className="tab-pane fade" id="suv" role="tabpanel" aria-labelledby="suv-tab">
                <Swiper {...slideSettings} className="swiper most-search-slider mb-50">
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
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
                                <img src="/assets/img/home1/product-img-1.png" alt="image" />
                              </div>
                              <div className="swiper-slide">
                                <img src="/assets/img/home1/product-img-2.png" alt="image" />
                              </div>
                              <div className="swiper-slide">
                                <img src="/assets/img/home1/product-img-3.png" alt="image" />
                              </div>
                              <div className="swiper-slide">
                                <img src="/assets/img/home1/product-img-4.png" alt="image" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Harmony House</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              03 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              03 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 234,560
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$7,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
                        <div className="product-img">
                          <div className="batch">
                            <span className="yellow">For Sale</span>
                          </div>
                          <a href="#" className="fav">
                            <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                              </path>
                            </svg>
                          </a>
                          <img src="/assets/img/home1/product-img-2.png" alt="image" /> 
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Melbourne City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Oakwood Estate</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              06 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              03 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 453,234
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$9,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
                        <div className="product-img">
                          <div className="batch">
                            <span className="yellow">For Sale</span>
                          </div>
                          <a href="#" className="fav">
                            <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                              </path>
                            </svg>
                          </a>
                          <img src="/assets/img/home1/product-img-3.png" alt="image" /> 
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Melbourne City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Willow Creek Residence</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              02 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              03 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 244,560
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$6,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
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
                          <img src="/assets/img/home1/product-img-4.png" alt="image" /> 
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Sydne City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Meadowview Manor</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              05 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              04 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 256,560
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$6,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
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
                                <img src="/assets/img/home1/product-img-1.png" alt="image" />
                              </div>
                              <div className="swiper-slide">
                                <img src="/assets/img/home1/product-img-2.png" alt="image" />
                              </div>
                              <div className="swiper-slide">
                                <img src="/assets/img/home1/product-img-3.png" alt="image" />
                              </div>
                              <div className="swiper-slide">
                                <img src="/assets/img/home1/product-img-4.png" alt="image" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Harmony House</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              03 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              03 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 234,560
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$7,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
                        <div className="product-img">
                          <div className="batch">
                            <span className="yellow">For Sale</span>
                          </div>
                          <a href="#" className="fav">
                            <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                              </path>
                            </svg>
                          </a>
                          <img src="/assets/img/home1/product-img-2.png" alt="image" /> 
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Melbourne City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Oakwood Estate</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              06 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              03 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 453,234
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$9,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
                        <div className="product-img">
                          <div className="batch">
                            <span className="yellow">For Sale</span>
                          </div>
                          <a href="#" className="fav">
                            <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                              </path>
                            </svg>
                          </a>
                          <img src="/assets/img/home1/product-img-3.png" alt="image" /> 
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Melbourne City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Willow Creek Residence</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              02 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              03 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 244,560
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$6,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
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
                          <img src="/assets/img/home1/product-img-4.png" alt="image" /> 
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Sydne City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Meadowview Manor</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              05 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              04 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 256,560
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$6,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
                <div className="view-btn-area">
                  <p>Availabe 50+ Apartment</p>
                  <Link legacyBehavior href="/property-list/left-sidebar"><a className="view-btn">Apartment</a></Link>
                </div>
              </div>
              <div className="tab-pane fade" id="toyota" role="tabpanel" aria-labelledby="toyota-tab">
                <Swiper  {...slideSettings} className="swiper most-search-slider mb-50">
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
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
                                <img src="/assets/img/home1/product-img-1.png" alt="image" />
                              </div>
                              <div className="swiper-slide">
                                <img src="/assets/img/home1/product-img-2.png" alt="image" />
                              </div>
                              <div className="swiper-slide">
                                <img src="/assets/img/home1/product-img-3.png" alt="image" />
                              </div>
                              <div className="swiper-slide">
                                <img src="/assets/img/home1/product-img-4.png" alt="image" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Harmony House</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              03 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              03 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 234,560
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$7,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
                        <div className="product-img">
                          <div className="batch">
                            <span className="yellow">For Sale</span>
                          </div>
                          <a href="#" className="fav">
                            <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                              </path>
                            </svg>
                          </a>
                          <img src="/assets/img/home1/product-img-2.png" alt="image" /> 
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Melbourne City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Oakwood Estate</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              06 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              03 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 453,234
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$9,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
                        <div className="product-img">
                          <div className="batch">
                            <span className="yellow">For Sale</span>
                          </div>
                          <a href="#" className="fav">
                            <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                              </path>
                            </svg>
                          </a>
                          <img src="/assets/img/home1/product-img-3.png" alt="image" /> 
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Melbourne City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Willow Creek Residence</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              02 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              03 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 244,560
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$6,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
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
                          <img src="/assets/img/home1/product-img-4.png" alt="image" /> 
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Sydne City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Meadowview Manor</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              05 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              04 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 256,560
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$6,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
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
                                <img src="/assets/img/home1/product-img-1.png" alt="image" />
                              </div>
                              <div className="swiper-slide">
                                <img src="/assets/img/home1/product-img-2.png" alt="image" />
                              </div>
                              <div className="swiper-slide">
                                <img src="/assets/img/home1/product-img-3.png" alt="image" />
                              </div>
                              <div className="swiper-slide">
                                <img src="/assets/img/home1/product-img-4.png" alt="image" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Harmony House</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              03 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              03 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 234,560
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$7,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
                        <div className="product-img">
                          <div className="batch">
                            <span className="yellow">For Sale</span>
                          </div>
                          <a href="#" className="fav">
                            <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                              </path>
                            </svg>
                          </a>
                          <img src="/assets/img/home1/product-img-2.png" alt="image" /> 
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Melbourne City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Oakwood Estate</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              06 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              03 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 453,234
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$9,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
                        <div className="product-img">
                          <div className="batch">
                            <span className="yellow">For Sale</span>
                          </div>
                          <a href="#" className="fav">
                            <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                              </path>
                            </svg>
                          </a>
                          <img src="/assets/img/home1/product-img-3.png" alt="image" /> 
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Melbourne City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Willow Creek Residence</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              02 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              03 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 244,560
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$6,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
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
                          <img src="/assets/img/home1/product-img-4.png" alt="image" /> 
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Sydne City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Meadowview Manor</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              05 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              04 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 256,560
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$6,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
                <div className="view-btn-area">
                  <p>Availabe 50+ Home</p>
                  <Link legacyBehavior href="/property-list/left-sidebar"><a className="view-btn">View All Home</a></Link>
                </div>
              </div>
              <div className="tab-pane fade" id="hatch" role="tabpanel" aria-labelledby="hatch-tab">
                <Swiper {...slideSettings} className="swiper most-search-slider mb-50">
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
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
                                <img src="/assets/img/home1/product-img-1.png" alt="image" />
                              </div>
                              <div className="swiper-slide">
                                <img src="/assets/img/home1/product-img-2.png" alt="image" />
                              </div>
                              <div className="swiper-slide">
                                <img src="/assets/img/home1/product-img-3.png" alt="image" />
                              </div>
                              <div className="swiper-slide">
                                <img src="/assets/img/home1/product-img-4.png" alt="image" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Harmony House</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              03 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              03 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 234,560
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$7,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
                        <div className="product-img">
                          <div className="batch">
                            <span className="yellow">For Sale</span>
                          </div>
                          <a href="#" className="fav">
                            <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                              </path>
                            </svg>
                          </a>
                          <img src="/assets/img/home1/product-img-2.png" alt="image" /> 
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Melbourne City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Oakwood Estate</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              06 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              03 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 453,234
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$9,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
                        <div className="product-img">
                          <div className="batch">
                            <span className="yellow">For Sale</span>
                          </div>
                          <a href="#" className="fav">
                            <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                              </path>
                            </svg>
                          </a>
                          <img src="/assets/img/home1/product-img-3.png" alt="image" /> 
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Melbourne City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Willow Creek Residence</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              02 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              03 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 244,560
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$6,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
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
                          <img src="/assets/img/home1/product-img-4.png" alt="image" /> 
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Sydne City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Meadowview Manor</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              05 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              04 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 256,560
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$6,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
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
                                <img src="/assets/img/home1/product-img-1.png" alt="image" />
                              </div>
                              <div className="swiper-slide">
                                <img src="/assets/img/home1/product-img-2.png" alt="image" />
                              </div>
                              <div className="swiper-slide">
                                <img src="/assets/img/home1/product-img-3.png" alt="image" />
                              </div>
                              <div className="swiper-slide">
                                <img src="/assets/img/home1/product-img-4.png" alt="image" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Harmony House</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              03 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              03 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 234,560
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$7,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
                        <div className="product-img">
                          <div className="batch">
                            <span className="yellow">For Sale</span>
                          </div>
                          <a href="#" className="fav">
                            <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                              </path>
                            </svg>
                          </a>
                          <img src="/assets/img/home1/product-img-2.png" alt="image" /> 
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Melbourne City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Oakwood Estate</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              06 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              03 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 453,234
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$9,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
                        <div className="product-img">
                          <div className="batch">
                            <span className="yellow">For Sale</span>
                          </div>
                          <a href="#" className="fav">
                            <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                              </path>
                            </svg>
                          </a>
                          <img src="/assets/img/home1/product-img-3.png" alt="image" /> 
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Melbourne City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Willow Creek Residence</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              02 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              03 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 244,560
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$6,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <div className="product-card">
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
                          <img src="/assets/img/home1/product-img-4.png" alt="image" /> 
                        </div>
                        <div className="product-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Sydne City</a></Link>
                          </div>
                          <h5><Link legacyBehavior href="/property-list/deatils1"><a>Meadowview Manor</a></Link></h5>
                          <ul className="features">
                            <li>
                              <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                              05 Beds
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                              04 Baths
                            </li>
                            <li>
                              <img src="/assets/img/home1/icon/size2.svg" alt="" />
                              Sq.ft- 256,560
                            </li>
                          </ul>
                          <div className="content-btm">
                            <Link legacyBehavior href="/property-list/deatils1">
                              <a className="view-btn2">
                                <img src="/assets/img/home1/icon/house.svg" alt="" />
                                View Details
                              </a>
                            </Link>
                            <div className="price">
                              <strong>$6,656.00</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
                <div className="view-btn-area">
                  <p>Availabe 50+ Banglow</p>
                  <Link legacyBehavior href="/property-list/left-sidebar"><a className="view-btn">View All Banglow</a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home1FeaturedProperty

"use client"
import SelectComponent from '@/uitils/SelectComponent'
import Link from 'next/link'
import React from 'react'


// import GoogleMapReact from 'google-map-react';
import Marquee from 'react-fast-marquee';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Page = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <>
    <div className="product-page poperty-map pt-100 mb-100">
      <div className="container-fluid">
        <div className="row g-xl-4 gy-5">
          <div className="row mb-40">
            <div className="col-lg-12">
              <div className="show-item-and-filte">
                <p>Showing <strong>2,928</strong> property for sale </p>
                <div className="filter-view">
                  <div className="filter-atra">
                    <h6>Filter By:</h6>
                    <form>
                      <div className="form-inner">
                      <SelectComponent options={["Highest Price","Lowest Price"]} placeholder={"Highest Price"} />
                    
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7">
          {/* <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact> */}
          </div>
          <div className="col-xl-5">
            <div className="list-grid-main">
              <div className="list-grid-product-wrap grid-group-wrapper">
                <div className="row g-4 justify-content-center">
                  <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp item" data-wow-delay="200ms">
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
                              <img src="/assets/img/inner-page/product-sb-img-01.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-02.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-03.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-04.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="location">
                          <Link legacyBehavior href="/property-listing-left-sidebar"><a><i className="bi bi-geo-alt" />  Sydne City</a></Link>
                        </div>
                        <h5><Link legacyBehavior href="/property-deatils1"><a>Meadowview Manor</a></Link></h5>
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
                        <Link legacyBehavior href="/property-deatils1">
                            <a className="view-btn2">
                            <img src="/assets/img/home1/icon/house.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                          <div className="price"><strong>$6,656.00</strong></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp item" data-wow-delay="300ms">
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
                              <img src="/assets/img/inner-page/product-sb-img-02.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-01.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-03.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-04.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="location">
                          <Link legacyBehavior href="/property-listing-left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                        </div>
                        <h5><Link legacyBehavior href="/property-deatils1"><a>Harmony House</a></Link></h5>
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
                          <Link legacyBehavior href="/property-deatils1">
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
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp item" data-wow-delay="200ms">
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
                              <img src="/assets/img/inner-page/product-sb-img-03.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-02.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-01.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-04.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="location">
                          <Link legacyBehavior href="/property-listing-left-sidebar"><a><i className="bi bi-geo-alt" /> Melbourne City</a></Link>
                        </div>
                        <h5><Link legacyBehavior href="/property-deatils1"><a>Evergreen Realty</a></Link></h5>
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
                          <Link legacyBehavior href="/property-deatils1">
                            <a className="view-btn2">
                            <img src="/assets/img/home1/icon/house.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                          <div className="price">
                            <strong>$13,445.00</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp item" data-wow-delay="300ms">
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
                              <img src="/assets/img/inner-page/product-sb-img-04.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-02.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-03.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-08.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="location">
                          <Link legacyBehavior href="/property-listing-left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                        </div>
                        <h5><Link legacyBehavior href="/property-deatils1"><a>Serene Homes</a></Link></h5>
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
                          <Link legacyBehavior href="/property-deatils1">
                            <a className="view-btn2">
                            <img src="/assets/img/home1/icon/house.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                          <div className="price">
                            <strong>$12,656.00</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp item" data-wow-delay="200ms">
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
                              <img src="/assets/img/inner-page/product-sb-img-05.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-02.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-03.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-04.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="location">
                          <Link legacyBehavior href="/property-listing-left-sidebar"><a><i className="bi bi-geo-alt" />  Sydne City</a></Link>
                        </div>
                        <h5><Link legacyBehavior href="/property-deatils1"><a>Riverside Retreat</a></Link></h5>
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
                          <Link legacyBehavior href="/property-deatils1">
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
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp item" data-wow-delay="300ms">
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
                              <img src="/assets/img/inner-page/product-sb-img-06.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-03.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-08.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-04.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="location">
                          <Link legacyBehavior href="/property-listing-left-sidebar"><a><i className="bi bi-geo-alt" />  Sydne City</a></Link>
                        </div>
                        <h5><Link legacyBehavior href="/property-deatils1"><a>Lakeside Haven</a></Link></h5>
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
                          <Link legacyBehavior href="/property-deatils1">
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
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp item" data-wow-delay="200ms">
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
                              <img src="/assets/img/inner-page/product-sb-img-07.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-05.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-02.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-04.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="location">
                          <Link legacyBehavior href="/property-listing-left-sidebar"><a><i className="bi bi-geo-alt" /> Menchester City</a></Link>
                        </div>
                        <h5><Link legacyBehavior href="/property-deatils1"><a>Tranquil Haven</a></Link></h5>
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
                          <Link legacyBehavior href="/property-deatils1">
                            <a className="view-btn2">
                            <img src="/assets/img/home1/icon/house.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                          <div className="price">
                            <strong>$10,656.00</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp item" data-wow-delay="300ms">
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
                              <img src="/assets/img/inner-page/product-sb-img-08.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-02.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-03.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-04.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="location">
                          <Link legacyBehavior href="/property-listing-left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                        </div>
                        <h5><Link legacyBehavior href="/property-deatils1"><a>Harmony House</a></Link></h5>
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
                          <Link legacyBehavior href="/property-deatils1">
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
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp item" data-wow-delay="200ms">
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
                              <img src="/assets/img/inner-page/product-sb-img-09.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-07.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-03.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-04.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="location">
                          <Link legacyBehavior href="/property-listing-left-sidebar"><a><i className="bi bi-geo-alt" /> New Delhi</a></Link>
                        </div>
                        <h5><Link legacyBehavior href="/property-deatils1"><a>Meadowview Manor</a></Link></h5>
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
                          <Link legacyBehavior href="/property-deatils1">
                            <a className="view-btn2">
                            <img src="/assets/img/home1/icon/house.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                          <div className="price">
                            <strong>$12,656.00</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp item" data-wow-delay="300ms">
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
                              <img src="/assets/img/inner-page/product-sb-img-01.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-02.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-03.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-04.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="location">
                          <Link legacyBehavior href="/property-listing-left-sidebar"><a><i className="bi bi-geo-alt" />  Sydne City</a></Link>
                        </div>
                        <h5><Link legacyBehavior href="/property-deatils1"><a>Mountain View Villa</a></Link></h5>
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
                          <Link legacyBehavior href="/property-deatils1">
                            <a className="view-btn2">
                            <img src="/assets/img/home1/icon/house.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                          <div className="price">
                            <strong>$16,656.00</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
    <div className="trusted-partner-section mb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="sub-title">
              <h6>Our Trusted Partners</h6>
              <div className="dash" />
            </div>
            <div className="partner-slider">
              <div className="marquee_text2">
                <Marquee>
                <img src="/assets/img/home1/company-logo-01.png" alt="" />
                <img src="/assets/img/home1/company-logo-02.png" alt="" />
                <img src="/assets/img/home1/company-logo-03.png" alt="" />
                <img src="/assets/img/home1/company-logo-04.png" alt="" />
                <img src="/assets/img/home1/company-logo-05.png" alt="" />
                <img src="/assets/img/home1/company-logo-06.png" alt="" />
                <img src="/assets/img/home1/company-logo-01.png" alt="" />
                <img src="/assets/img/home1/company-logo-02.png" alt="" />
                <img src="/assets/img/home1/company-logo-03.png" alt="" />
                <img src="/assets/img/home1/company-logo-04.png" alt="" />
                <img src="/assets/img/home1/company-logo-05.png" alt="" />
                <img src="/assets/img/home1/company-logo-06.png" alt="" />
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Page

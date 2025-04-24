import Link from 'next/link'
import React from 'react'

const Home6LatestProperties = () => {
  return (
    <div className="home6-letest-properties-section mb-100">
  <div className="container">
    <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
      <div className="col-lg-12">
        <div className="section-title-2">
          <h2>Latest Properties</h2>
          <p>To get the most accurate and up-to-date information.</p>
        </div>
      </div>
    </div>
    <div className="row mb-40 wow fadeInUp" data-wow-delay="300ms">
      <div className="col-lg-12">
        <div className="home6-filter-area d-flex align-items-center justify-content-between">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="featured-car-tab" data-bs-toggle="tab" data-bs-target="#featured-car" type="button" role="tab" aria-controls="featured-car" aria-selected="true">Featured</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="latest-car-tab" data-bs-toggle="tab" data-bs-target="#latest-car" type="button" role="tab" aria-controls="latest-car" aria-selected="false">For Sale</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="new-car-tab" data-bs-toggle="tab" data-bs-target="#new-car" type="button" role="tab" aria-controls="new-car" aria-selected="false">For
                Rent</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="low-milege-tab" data-bs-toggle="tab" data-bs-target="#low-milege" type="button" role="tab" aria-controls="low-milege" aria-selected="false">Lowest Price</button>
            </li>
          </ul>
          <div className="explore-btn d-lg-flex d-none">
            <Link legacyBehavior href="/property-list/left-sidebar"><a className="explore-btn2 two">Explore More <i className="bi bi-arrow-right-short" /></a></Link>
          </div>
        </div>
      </div>
    </div>
    <div className="row mb-40">
      <div className="col-lg-12">
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="featured-car" role="tabpanel" aria-labelledby="featured-car-tab">
            <div className="row g-4">
              <div className="col-lg-4 col-md-6  wow fadeInUp" data-wow-delay="200ms">
                <div className="product-card4 style-3">
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
                          <img src="/assets/img/home6/product-img-01.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-01.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-01.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-01.png" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <Link legacyBehavior href="/property-listi/left-sidebar"><a><i className="bi bi-geo-alt" /> Sydne City</a></Link>
                    </div>
                    <h6><Link legacyBehavior href="/property-list/deatils1"><a>Keystone Realty</a></Link></h6>
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
                      <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                      <div className="price-area">
                        <span>Great Price</span>
                        <h6>$3,564.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6  wow fadeInUp" data-wow-delay="300ms">
                <div className="product-card4 style-3">
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
                          <img src="/assets/img/home6/product-img-02.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-02.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-02.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-02.png" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" /> Panama City</a></Link>
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
                      <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                      <div className="price-area">
                        <span>Excellent Price</span>
                        <h6>$3,464.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6  wow fadeInUp" data-wow-delay="400ms">
                <div className="product-card4 style-3">
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
                          <img src="/assets/img/home6/product-img-03.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-03.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-03.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-03.png" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <a href="#"><i className="bi bi-geo-alt" /> Canada City</a>
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
                      <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                      <div className="price-area">
                        <span>Great Price</span>
                        <h6>$4,564.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6  wow fadeInUp" data-wow-delay="500ms">
                <div className="product-card4 style-3">
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
                          <img src="/assets/img/home6/product-img-04.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-04.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-04.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-04.png" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <Link legacyBehavior href="/property-listi/left-sidebar"><a><i className="bi bi-geo-alt" /> Melbourne</a></Link>
                    </div>
                    <h6><Link legacyBehavior href="/poperty-deatils1"><a>Horizon Realty Services</a></Link></h6>
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
                      <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                      <div className="price-area">
                        <span>Excellent Price</span>
                        <h6>$21,564.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6  wow fadeInUp" data-wow-delay="600ms">
                <div className="product-card4 style-3">
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
                          <img src="/assets/img/home6/product-img-05.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-05.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-05.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-05.png" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" /> New Delhi</a></Link>
                    </div>
                    <h6><Link legacyBehavior href="/property-list/deatils1"><a>Blue Sky Investments</a></Link></h6>
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
                      <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                      <div className="price-area">
                        <span>Fair Price</span>
                        <h6>$11,564.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6  wow fadeInUp" data-wow-delay="500ms">
                <div className="product-card4 style-3">
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
                          <img src="/assets/img/home6/product-img-06.png" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <Link legacyBehavior href="/property-list/-left-sidebar"><a ><i className="bi bi-geo-alt" /> Australia City</a></Link>
                    </div>
                    <h6><Link legacyBehavior href="/property-list/deatils1"><a>Prodigy Realty</a></Link></h6>
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
                      <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                      <div className="price-area">
                        <span>Great Price</span>
                        <h6>$31,564.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="latest-car" role="tabpanel" aria-labelledby="latest-car-tab">
            <div className="row g-4">
              <div className="col-lg-4 col-md-6">
                <div className="product-card4 style-3">
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
                          <img src="/assets/img/home6/product-img-01.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-01.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-01.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-01.png" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <Link legacyBehavior href="/property-listi/left-sidebar"><a><i className="bi bi-geo-alt" /> Sydne City</a></Link>
                    </div>
                    <h6><Link legacyBehavior href="/property-list/deatils1"><a>Keystone Realty</a></Link></h6>
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
                      <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                      <div className="price-area">
                        <span>Great Price</span>
                        <h6>$3,564.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="product-card4 style-3">
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
                          <img src="/assets/img/home6/product-img-02.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-02.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-02.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-02.png" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" /> Panama City</a></Link>
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
                      <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                      <div className="price-area">
                        <span>Excellent Price</span>
                        <h6>$3,464.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="product-card4 style-3">
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
                          <img src="/assets/img/home6/product-img-03.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-03.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-03.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-03.png" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <a href="#"><i className="bi bi-geo-alt" /> Canada City</a>
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
                      <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                      <div className="price-area">
                        <span>Great Price</span>
                        <h6>$4,564.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="product-card4 style-3">
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
                          <img src="/assets/img/home6/product-img-04.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-04.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-04.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-04.png" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <Link legacyBehavior href="/property-listi/left-sidebar"><a><i className="bi bi-geo-alt" /> Melbourne</a></Link>
                    </div>
                    <h6><Link legacyBehavior href="/poperty-deatils1"><a>Horizon Realty Services</a></Link></h6>
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
                      <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                      <div className="price-area">
                        <span>Excellent Price</span>
                        <h6>$21,564.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="product-card4 style-3">
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
                          <img src="/assets/img/home6/product-img-05.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-05.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-05.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-05.png" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" /> New Delhi</a></Link>
                    </div>
                    <h6><Link legacyBehavior href="/property-list/deatils1"><a>Blue Sky Investments</a></Link></h6>
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
                      <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                      <div className="price-area">
                        <span>Fair Price</span>
                        <h6>$11,564.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="product-card4 style-3">
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
                          <img src="/assets/img/home6/product-img-06.png" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <Link legacyBehavior href="/property-list/-left-sidebar"><a ><i className="bi bi-geo-alt" /> Australia City</a></Link>
                    </div>
                    <h6><Link legacyBehavior href="/property-list/deatils1"><a>Prodigy Realty</a></Link></h6>
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
                      <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                      <div className="price-area">
                        <span>Great Price</span>
                        <h6>$31,564.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="new-car" role="tabpanel" aria-labelledby="new-car-tab">
            <div className="row g-4">
              <div className="col-lg-4 col-md-6">
                <div className="product-card4 style-3">
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
                          <img src="/assets/img/home6/product-img-01.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-01.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-01.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-01.png" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <Link legacyBehavior href="/property-listi/left-sidebar"><a><i className="bi bi-geo-alt" /> Sydne City</a></Link>
                    </div>
                    <h6><Link legacyBehavior href="/property-list/deatils1"><a>Keystone Realty</a></Link></h6>
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
                      <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                      <div className="price-area">
                        <span>Great Price</span>
                        <h6>$3,564.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="product-card4 style-3">
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
                          <img src="/assets/img/home6/product-img-02.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-02.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-02.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-02.png" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" /> Panama City</a></Link>
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
                      <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                      <div className="price-area">
                        <span>Excellent Price</span>
                        <h6>$3,464.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="product-card4 style-3">
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
                          <img src="/assets/img/home6/product-img-03.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-03.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-03.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-03.png" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <a href="#"><i className="bi bi-geo-alt" /> Canada City</a>
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
                      <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                      <div className="price-area">
                        <span>Great Price</span>
                        <h6>$4,564.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="product-card4 style-3">
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
                          <img src="/assets/img/home6/product-img-04.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-04.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-04.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-04.png" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <Link legacyBehavior href="/property-listi/left-sidebar"><a><i className="bi bi-geo-alt" /> Melbourne</a></Link>
                    </div>
                    <h6><Link legacyBehavior href="/poperty-deatils1"><a>Horizon Realty Services</a></Link></h6>
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
                      <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                      <div className="price-area">
                        <span>Excellent Price</span>
                        <h6>$21,564.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="product-card4 style-3">
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
                          <img src="/assets/img/home6/product-img-05.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-05.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-05.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-05.png" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" /> New Delhi</a></Link>
                    </div>
                    <h6><Link legacyBehavior href="/property-list/deatils1"><a>Blue Sky Investments</a></Link></h6>
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
                      <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                      <div className="price-area">
                        <span>Fair Price</span>
                        <h6>$11,564.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="product-card4 style-3">
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
                          <img src="/assets/img/home6/product-img-06.png" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <Link legacyBehavior href="/property-list/-left-sidebar"><a ><i className="bi bi-geo-alt" /> Australia City</a></Link>
                    </div>
                    <h6><Link legacyBehavior href="/property-list/deatils1"><a>Prodigy Realty</a></Link></h6>
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
                      <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                      <div className="price-area">
                        <span>Great Price</span>
                        <h6>$31,564.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="low-milege" role="tabpanel" aria-labelledby="low-milege-tab">
            <div className="row g-4">
              <div className="col-lg-4 col-md-6">
                <div className="product-card4 style-3">
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
                          <img src="/assets/img/home6/product-img-01.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-01.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-01.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-01.png" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <Link legacyBehavior href="/property-listi/left-sidebar"><a><i className="bi bi-geo-alt" /> Sydne City</a></Link>
                    </div>
                    <h6><Link legacyBehavior href="/property-list/deatils1"><a>Keystone Realty</a></Link></h6>
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
                      <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                      <div className="price-area">
                        <span>Great Price</span>
                        <h6>$3,564.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="product-card4 style-3">
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
                          <img src="/assets/img/home6/product-img-02.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-02.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-02.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-02.png" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" /> Panama City</a></Link>
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
                      <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                      <div className="price-area">
                        <span>Excellent Price</span>
                        <h6>$3,464.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="product-card4 style-3">
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
                          <img src="/assets/img/home6/product-img-03.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-03.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-03.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-03.png" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <a href="#"><i className="bi bi-geo-alt" /> Canada City</a>
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
                      <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                      <div className="price-area">
                        <span>Great Price</span>
                        <h6>$4,564.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="product-card4 style-3">
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
                          <img src="/assets/img/home6/product-img-04.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-04.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-04.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-04.png" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <Link legacyBehavior href="/property-listi/left-sidebar"><a><i className="bi bi-geo-alt" /> Melbourne</a></Link>
                    </div>
                    <h6><Link legacyBehavior href="/poperty-deatils1"><a>Horizon Realty Services</a></Link></h6>
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
                      <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                      <div className="price-area">
                        <span>Excellent Price</span>
                        <h6>$21,564.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="product-card4 style-3">
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
                          <img src="/assets/img/home6/product-img-05.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-05.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-05.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home6/product-img-05.png" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" /> New Delhi</a></Link>
                    </div>
                    <h6><Link legacyBehavior href="/property-list/deatils1"><a>Blue Sky Investments</a></Link></h6>
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
                      <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                      <div className="price-area">
                        <span>Fair Price</span>
                        <h6>$11,564.00</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="product-card4 style-3">
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
                          <img src="/assets/img/home6/product-img-06.png" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <Link legacyBehavior href="/property-list/-left-sidebar"><a ><i className="bi bi-geo-alt" /> Australia City</a></Link>
                    </div>
                    <h6><Link legacyBehavior href="/property-list/deatils1"><a>Prodigy Realty</a></Link></h6>
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
                      <Link legacyBehavior href="/property-list/deatils1"><a className="primary-btn7">View Details</a></Link>
                      <div className="price-area">
                        <span>Great Price</span>
                        <h6>$31,564.00</h6>
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
    <div className="explore-btn d-lg-none d-flex">
      <Link legacyBehavior href="/property-list/left-sidebar"><a className="explore-btn2 two">Explore More <i className="bi bi-arrow-right-short" /></a></Link>
    </div>
  </div>
</div>

  )
}

export default Home6LatestProperties

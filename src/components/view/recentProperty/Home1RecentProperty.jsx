import Link from 'next/link'
import React from 'react'

const Home1RecentProperty = () => {
  return (
    <div className="recent-product-section mb-100">
  <div className="container">
    <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
      <div className="col-lg-12 d-flex align-items-end justify-content-between flex-wrap gap-4">
        <div className="section-title1">
          <span>Comfort Building</span>
          <h2>Recent Property</h2>
        </div>
        <ul className="nav nav-tabs" id="myTab6" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="popular-car1-tab" data-bs-toggle="tab" data-bs-target="#popular-car1" type="button" role="tab" aria-controls="popular-car1" aria-selected="true">For Sale</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="new-car2-tab" data-bs-toggle="tab" data-bs-target="#new-car2" type="button" role="tab" aria-controls="new-car2" aria-selected="false">For Rent</button>
          </li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <div className="tab-content" id="myTabContent6">
          <div className="tab-pane fade show active" id="popular-car1" role="tabpanel" aria-labelledby="popular-car1-tab">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp" data-wow-delay="200ms">
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
                          <img src="/assets/img/home1/product-img-5.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home1/product-img-6.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home1/product-img-7.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home1/product-img-8.png" alt="image" />
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
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp" data-wow-delay="300ms">
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
                          <img src="/assets/img/home1/product-img-6.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home1/product-img-5.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home1/product-img-7.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home1/product-img-8.png" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Sydne City</a></Link>
                    </div>
                    <h5><Link legacyBehavior href="/property-list/deatils1"><a>Mountain View Villa</a></Link></h5>
                    <ul className="features">
                      <li>
                        <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                        02 Beds
                      </li>
                      <li>
                        <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                        02+ Baths
                      </li>
                      <li>
                        <img src="/assets/img/home1/icon/size2.svg" alt="" />
                        Sq.ft- 345,556
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
                        <strong>$3,656.00</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp" data-wow-delay="400ms">
                <div className="product-card">
                  <div className="product-img">
                    <a href="#" className="fav">
                      <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                        </path>
                      </svg>
                    </a>
                    <img src="/assets/img/home1/product-img-7.png" alt="image" />
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" /> New Delhi</a></Link>
                    </div>
                    <h5><Link legacyBehavior href="/property-list/deatils1"><a>Paradise Heights</a></Link></h5>
                    <ul className="features">
                      <li>
                        <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                        04 Beds
                      </li>
                      <li>
                        <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                        04 Baths
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
                        <strong>$17,656.00</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp" data-wow-delay="400ms">
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
                          <img src="/assets/img/home1/product-img-8.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home1/product-img-6.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home1/product-img-7.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home1/product-img-5.png" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Sydne City</a></Link>
                    </div>
                    <h5><Link legacyBehavior href="/property-list/deatils1"><a>Sunflower Cottage</a></Link></h5>
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
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp" data-wow-delay="300ms">
                <div className="product-card">
                  <div className="product-img">
                    <div className="batch">
                      <span className="red">Hot Offer</span>
                    </div>
                    <a href="#" className="fav">
                      <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                        </path>
                      </svg>
                    </a>
                    <img src="/assets/img/home1/product-img-9.png" alt="image" />
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Melbourne City</a></Link>
                    </div>
                    <h5><Link legacyBehavior href="/property-list/deatils1"><a>Coastal Dream Home</a></Link></h5>
                    <ul className="features">
                      <li>
                        <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                        06 Beds
                      </li>
                      <li>
                        <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                        05 Baths
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
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10 wow fadeInUp" data-wow-delay="200ms">
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
                          <img src="/assets/img/home1/product-img-10.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home1/product-img-6.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home1/product-img-7.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home1/product-img-8.png" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                    </div>
                    <h5><Link legacyBehavior href="/property-list/deatils1"><a>Starlight Manor</a></Link></h5>
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
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="new-car2" role="tabpanel" aria-labelledby="new-car2-tab">
            <div className="row g-4 justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-10">
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
                          <img src="/assets/img/home1/product-img-5.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home1/product-img-6.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home1/product-img-7.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home1/product-img-8.png" alt="image" />
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
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
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
                          <img src="/assets/img/home1/product-img-6.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home1/product-img-5.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home1/product-img-7.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home1/product-img-8.png" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Sydne City</a></Link>
                    </div>
                    <h5><Link legacyBehavior href="/property-list/deatils1"><a>Mountain View Villa</a></Link></h5>
                    <ul className="features">
                      <li>
                        <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                        02 Beds
                      </li>
                      <li>
                        <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                        02+ Baths
                      </li>
                      <li>
                        <img src="/assets/img/home1/icon/size2.svg" alt="" />
                        Sq.ft- 345,556
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
                        <strong>$3,656.00</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="product-card">
                  <div className="product-img">
                    <a href="#" className="fav">
                      <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                        </path>
                      </svg>
                    </a>
                    <img src="/assets/img/home1/product-img-7.png" alt="image" />
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" /> New Delhi</a></Link>
                    </div>
                    <h5><Link legacyBehavior href="/property-list/deatils1"><a>Paradise Heights</a></Link></h5>
                    <ul className="features">
                      <li>
                        <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                        04 Beds
                      </li>
                      <li>
                        <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                        04 Baths
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
                        <strong>$17,656.00</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
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
                          <img src="/assets/img/home1/product-img-8.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home1/product-img-6.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home1/product-img-7.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home1/product-img-5.png" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Sydne City</a></Link>
                    </div>
                    <h5><Link legacyBehavior href="/property-list/deatils1"><a>Sunflower Cottage</a></Link></h5>
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
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
                <div className="product-card">
                  <div className="product-img">
                    <div className="batch">
                      <span className="red">Hot Offer</span>
                    </div>
                    <a href="#" className="fav">
                      <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                        </path>
                      </svg>
                    </a>
                    <img src="/assets/img/home1/product-img-9.png" alt="image" />
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Melbourne City</a></Link>
                    </div>
                    <h5><Link legacyBehavior href="/property-list/deatils1"><a>Coastal Dream Home</a></Link></h5>
                    <ul className="features">
                      <li>
                        <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                        06 Beds
                      </li>
                      <li>
                        <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                        05 Baths
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
              </div>
              <div className="col-lg-4 col-md-6 col-sm-10">
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
                          <img src="/assets/img/home1/product-img-10.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home1/product-img-6.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home1/product-img-7.png" alt="image" />
                        </div>
                        <div className="swiper-slide">
                          <img src="/assets/img/home1/product-img-8.png" alt="image" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="location">
                      <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                    </div>
                    <h5><Link legacyBehavior href="/property-list/deatils1"><a>Starlight Manor</a></Link></h5>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Home1RecentProperty

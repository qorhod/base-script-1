"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Breadcrumb from "@/components/common/Breadcrumb";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

const Page = () => {

  const [activeOption, setActiveOption] = useState('paypal');
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(1);


  const increment = (setter) => {
    setter((count) => count + 1);
  };

  const decrement = (setter) => {
    setter((count) => (count > 1 ? count - 1 : count));
  };
  const handleOptionChange = (option) => {
    setActiveOption(option);
  };
  const slideSetting = useMemo(() => {
    return {
      speed: 1500,
      spaceBetween: 24,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".next-2",
        prevEl: ".prev-2",
      },

      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        420: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4
        },
      }
    }
  }, []);


  
  return (
    <>
    <Breadcrumb pageName="Checkout" pageTitle="Checkout" />
      <div className="checkout-page pt-100 mb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="login-and-coupon-area">
                <div className="row divider g-3">
                  <div className="col-lg-6">
                    <p>Alraedy have an account? 
                      <button type="button" data-bs-toggle="modal" data-bs-target="#logInModal01">
                        <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M14.4311 12.759C15.417 11.4291 16 9.78265 16 8C16 3.58169 12.4182 0 8 0C3.58169 0 0 3.58169 0 8C0 12.4182 3.58169 16 8 16C10.3181 16 12.4058 15.0141 13.867 13.4387C14.0673 13.2226 14.2556 12.9957 14.4311 12.759ZM13.9875 12C14.7533 10.8559 15.1999 9.48009 15.1999 8C15.1999 4.02355 11.9764 0.799983 7.99991 0.799983C4.02355 0.799983 0.799983 4.02355 0.799983 8C0.799983 9.48017 1.24658 10.8559 2.01245 12C2.97866 10.5566 4.45301 9.48194 6.17961 9.03214C5.34594 8.45444 4.79998 7.49102 4.79998 6.39995C4.79998 4.63266 6.23271 3.19993 8 3.19993C9.76729 3.19993 11.2 4.63266 11.2 6.39995C11.2 7.49093 10.654 8.45444 9.82039 9.03206C11.5469 9.48194 13.0213 10.5565 13.9875 12ZM13.4722 12.6793C12.3495 10.8331 10.3188 9.59997 8.00008 9.59997C5.68126 9.59997 3.65049 10.8331 2.52776 12.6794C3.84829 14.2222 5.80992 15.2 8 15.2C10.1901 15.2 12.1517 14.2222 13.4722 12.6793ZM8 8.79998C9.32551 8.79998 10.4 7.72554 10.4 6.39995C10.4 5.07444 9.32559 3.99992 8 3.99992C6.6744 3.99992 5.59997 5.07452 5.59997 6.40003C5.59997 7.72554 6.67449 8.79998 8 8.79998Z" />
                        </svg>  Log in
                      </button> 
                    </p>
                  </div>
                  <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center">
                    <div className="cupor-code-area">
                      <p>Have a coupon code?</p>
                      <div className="cupon">
                        <button type="button">
                          Click here coupon code
                        </button>
                        <form className="nav__search-form">
                          <input type="text" placeholder="Search Products" id="search" autoComplete="off" />
                          <button className="primary-btn3" type="submit">Save</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="inquiry-form mt-60">
                <div className="title">
                  <h4>Billing Information</h4>
                </div>
                <form>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-inner mb-30">
                        <label>Full Name*</label>
                        <input type="text" placeholder="Jackson Mile" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-30">
                        <label>Phone*</label>
                        <input type="text" placeholder="Ex- +880-13* ** ***" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-30">
                        <label>Email (Optional)</label>
                        <input type="email" placeholder="Ex- info@gmail.com" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-inner mb-30">
                        <label>Address*</label>
                        <input type="text" placeholder="Dhaka, Bangladesh" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-30">
                        <label>Street Address*</label>
                        <input type="text" placeholder="Your Street" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-30">
                        <label>Postal Code*</label>
                        <input type="text" placeholder="City Postal" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-inner mb-30">
                        <label>Short Notes*</label>
                        <textarea placeholder="Write Something..." defaultValue={""} />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-inner">
                        <label className="containerss">
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span className="text">Save this information for next time</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="inquiry-form mt-60">
                <div className="title">
                  <h4>Order Summary</h4>
                </div>
                <form>
                  <div className="cart-menu">
                    <div className="cart-body">
                      <ul>
                        <li className="single-item">
                          <div className="item-area">
                            <div className="main-item">
                              <div className="item-img">
                                <img src="/assets/img/home1/cart-01.png" alt="" />
                              </div>
                              <div className="content-and-quantity">
                                <div className="content">
                                  <div className="price-and-btn d-flex align-items-center justify-content-between">
                                    <span>$234</span>
                                    <button type="reset" className="close-btn"><i className="bi bi-x" /></button>
                                  </div>
                                  <h6><a href="#">Bean Bag Chair</a></h6>
                                </div>
                                <div className="quantity-area">
                                  <div className="quantity">
                                    <a className="quantity__minus" onClick={() => decrement(setCounter1)}><span><i className="bi bi-dash" /></span></a>
                                    <div name="quantity" type="text" className="quantity__input" defaultValue={1} >{counter1}</div>
                                    <a className="quantity__plus" onClick={() => increment(setCounter1)}><span><i className="bi bi-plus" /></span></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="single-item">
                          <div className="item-area">
                            <div className="main-item">
                              <div className="item-img">
                                <img src="/assets/img/home1/cart-02.png" alt="" />
                              </div>
                              <div className="content-and-quantity">
                                <div className="content">
                                  <div className="price-and-btn d-flex align-items-center justify-content-between">
                                    <span>$234</span>
                                    <button type="reset" className="close-btn"><i className="bi bi-x" /></button>
                                  </div>
                                  <h6><a href="#">Minimalist Steel Frame</a></h6>
                                </div>
                                <div className="quantity-area">
                                  <div className="quantity">
                                    <a className="quantity__minus" onClick={() => decrement(setCounter2)}><span><i className="bi bi-dash" /></span></a>
                                    <div name="quantity" type="text" className="quantity__input" >{counter2}</div>
                                    <a className="quantity__plus" onClick={() => increment(setCounter2)}><span><i className="bi bi-plus" /></span></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="cart-footer">
                      <div className="pricing-area">
                        <ul>
                          <li><span>Sub Total</span><span>$468</span></li>
                          <li><span>Offer (20%)</span><span>$56</span></li>
                        </ul>
                        <ul className="total">
                          <li><span>Total</span><span>$425</span></li>
                        </ul>
                      </div>
                      <div className="choose-payment-mathord">
                        <h6>Select Payment Method</h6>
                        <div className="payment-option">
                          <ul>
                            <li className={`paypal ${activeOption === 'paypal' ? 'active' : ''}`} onClick={() => handleOptionChange('paypal')}>
                              <img src="/assets/img/inner-page/icon/PayPal.svg" alt="" />
                              <div className="checked">
                                <i className="bi bi-check" />
                              </div>
                            </li>
                            <li className={`stripe ${activeOption === 'stripe' ? 'active' : ''}`} onClick={() => handleOptionChange('stripe')}>
                              <img src="/assets/img/inner-page/icon/Stripe.svg" alt="" />
                              <div className="checked">
                                <i className="bi bi-check" />
                              </div>
                            </li>
                            <li className={`offline ${activeOption === 'offline' ? 'active' : ''}`} onClick={() => handleOptionChange('offline')}>
                              <img src="/assets/img/inner-page/icon/Offline.svg" alt="" />
                              <div className="checked">
                                <i className="bi bi-check" />
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="pt-25" id="StripePayment" style={{ display: activeOption === 'stripe' ? 'block' : 'none' }}>
                          <div className="row g-4">
                            <div className="col-md-12">
                              <div className="form-inner">
                                <label>Card Number</label>
                                <input type="text" placeholder="1234 1234 1234 1234" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-inner">
                                <label>Expiry</label>
                                <input type="text" placeholder="MM/YY" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-inner">
                                <label>CVC</label>
                                <input type="text" placeholder="CVC" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-inner">
                        <button className="primary-btn3" type="submit">Place Order</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="recent-car-parts-area pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-25">
              <div className="section-title">
                <h4>Related Products</h4>
              </div>
            </div>
            <div className="col-lg-12 mb-40">
              <Swiper {...slideSetting} className="swiper product-details-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="shop-card2">
                      <div className="shop-img">
                        <img src="/assets/img/inner-page/Product-01.png" alt="" />
                        <a href="#" className="fav">
                          <svg width={12} height={11} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                            </path>
                          </svg>
                        </a>
                        <div className="cart-btn">
                          <a className="primary-btn2" href="#">Add to cart</a>
                        </div>
                      </div>
                      <div className="content">
                        <div className="star">
                          <ul>
                            <li className="active"><i className="bi bi-star-fill" /></li>
                            <li><i className="bi bi-star-fill" /></li>
                            <li><i className="bi bi-star-fill" /></li>
                            <li><i className="bi bi-star-fill" /></li>
                            <li><i className="bi bi-star-half" /></li>
                          </ul>
                          <span>(4.5)</span>
                        </div>
                        <h6><Link legacyBehavior href="/shop/product-details"><a>Bean Bag Chair</a></Link>
                        </h6>
                        <div className="content-btm">
                          <div className="price">
                            <h6>$214.00</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="shop-card2">
                      <div className="shop-img">
                        <img src="/assets/img/inner-page/Product-02.png" alt="" />
                        <a href="#" className="fav">
                          <svg width={12} height={11} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                            </path>
                          </svg>
                        </a>
                        <div className="cart-btn">
                          <a className="primary-btn2" href="#">Add to cart</a>
                        </div>
                      </div>
                      <div className="content">
                        <div className="star">
                          <ul>
                            <li className="active"><i className="bi bi-star-fill" /></li>
                            <li><i className="bi bi-star-fill" /></li>
                            <li><i className="bi bi-star-fill" /></li>
                            <li><i className="bi bi-star-fill" /></li>
                            <li><i className="bi bi-star-half" /></li>
                          </ul>
                          <span>(4.5)</span>
                        </div>
                        <h6><Link legacyBehavior href="/shop/product-details"><a>Elegant Velvet Chair</a></Link>
                        </h6>
                        <div className="content-btm">
                          <div className="price">
                            <h6>$220.00</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="shop-card2">
                      <div className="shop-img">
                        <img src="/assets/img/inner-page/Product-03.png" alt="" />
                        <div className="offer-batch">
                          <span>-18%</span>
                        </div>
                        <a href="#" className="fav">
                          <svg width={12} height={11} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                            </path>
                          </svg>
                        </a>
                        <div className="cart-btn">
                          <a className="primary-btn2" href="#">Add to cart</a>
                        </div>
                      </div>
                      <div className="content">
                        <div className="star">
                          <ul>
                            <li className="active"><i className="bi bi-star-fill" /></li>
                            <li><i className="bi bi-star-fill" /></li>
                            <li><i className="bi bi-star-fill" /></li>
                            <li><i className="bi bi-star-fill" /></li>
                            <li><i className="bi bi-star-half" /></li>
                          </ul>
                          <span>(4.5)</span>
                        </div>
                        <h6><Link legacyBehavior href="/shop/product-details"><a>Modern Leather Seating</a></Link>
                        </h6>
                        <div className="content-btm">
                          <div className="price">
                            <h6>$225.00 <del>$234.00</del></h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="shop-card2">
                      <div className="shop-img">
                        <img src="/assets/img/inner-page/Product-04.png" alt="" />
                        <a href="#" className="fav">
                          <svg width={12} height={11} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                            </path>
                          </svg>
                        </a>
                        <div className="cart-btn">
                          <a className="primary-btn2" href="#">Add to cart</a>
                        </div>
                      </div>
                      <div className="content">
                        <div className="star">
                          <ul>
                            <li className="active"><i className="bi bi-star-fill" /></li>
                            <li><i className="bi bi-star-fill" /></li>
                            <li><i className="bi bi-star-fill" /></li>
                            <li><i className="bi bi-star-fill" /></li>
                            <li><i className="bi bi-star-half" /></li>
                          </ul>
                          <span>(4.5)</span>
                        </div>
                        <h6><Link legacyBehavior href="/shop/product-details"><a>Plush Cushioned Seat</a></Link>
                        </h6>
                        <div className="content-btm">
                          <div className="price">
                            <h6>$229.00</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="shop-card2">
                      <div className="shop-img">
                        <img src="/assets/img/inner-page/Product-05.png" alt="" />
                        <div className="offer-batch">
                          <span>-14%</span>
                        </div>
                        <a href="#" className="fav">
                          <svg width={12} height={11} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                            </path>
                          </svg>
                        </a>
                        <div className="cart-btn">
                          <a className="primary-btn2" href="#">Add to cart</a>
                        </div>
                      </div>
                      <div className="content">
                        <div className="star">
                          <ul>
                            <li className="active"><i className="bi bi-star-fill" /></li>
                            <li><i className="bi bi-star-fill" /></li>
                            <li><i className="bi bi-star-fill" /></li>
                            <li><i className="bi bi-star-fill" /></li>
                            <li><i className="bi bi-star-half" /></li>
                          </ul>
                          <span>(4.5)</span>
                        </div>
                        <h6><Link legacyBehavior href="/shop/product-details"><a>Vintage Style Chair</a></Link>
                        </h6>
                        <div className="content-btm">
                          <div className="price">
                            <h6>$226.00 <del>$234.00</del></h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="shop-card2">
                      <div className="shop-img">
                        <img src="/assets/img/inner-page/Product-06.png" alt="" />
                        <a href="#" className="fav">
                          <svg width={12} height={11} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                            </path>
                          </svg>
                        </a>
                        <div className="cart-btn">
                          <a className="primary-btn2" href="#">Add to cart</a>
                        </div>
                      </div>
                      <div className="content">
                        <div className="star">
                          <ul>
                            <li className="active"><i className="bi bi-star-fill" /></li>
                            <li><i className="bi bi-star-fill" /></li>
                            <li><i className="bi bi-star-fill" /></li>
                            <li><i className="bi bi-star-fill" /></li>
                            <li><i className="bi bi-star-half" /></li>
                          </ul>
                          <span>(4.5)</span>
                        </div>
                        <h6><Link legacyBehavior href="/shop/product-details"><a>Minimalist Steel Frame</a></Link>
                        </h6>
                        <div className="content-btm">
                          <div className="price">
                            <h6>$228.00</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
            <div className="col-lg-12 divider">
              <div className="slider-btn-group style-2 justify-content-md-between justify-content-center">
                <div className="slider-btn prev-2 d-md-flex d-none">
                  <svg width={11} height={19} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                  </svg>
                </div>
                <div className="view-btn-area">
                  <p>There are More Products Available</p>
                  <Link legacyBehavior href="/shop"><a className="view-btn">View More</a></Link>
                </div>
                <div className="slider-btn next-2 d-md-flex d-none">
                  <svg width={11} height={19} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                  </svg>
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

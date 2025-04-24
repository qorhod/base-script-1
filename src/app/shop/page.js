"use client"
import { toast } from 'react-toastify';
import SelectComponent from '@/uitils/SelectComponent'
import Link from 'next/link'
import React from 'react'
import PartnerSlide from '@/components/view/Partner/PartnerSlide';
import Breadcrumb from '@/components/common/Breadcrumb';



const Page = () => {
  const handleAddToCartClick = () => {
    toast.success('Item added to cart!', {
      position: 'top-right',
      width:"100px",
      autoClose: 2000, 
    });
   
  };

  return (
    <>
    <Breadcrumb pageName="Shop Home Furniture" pageTitle="Shop Home Furniture" />
      <div className="product-page pt-100 mb-100">
        <div className="container">
          <div className="row mb-40">
            <div className="col-lg-12">
              <div className="show-item-and-filte">
                <p>Showing <strong>60</strong> results of <strong>1,245</strong> products</p>
                <div className="filter-atra">
                  <h6>Sort By:</h6>
                  <form>
                    <div className="form-inner">
                    <SelectComponent options={["Popular","Newest","Older"]} placeholder={"Popular"} />
                    
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-xl-4 gy-5">
            <div className="col-xl-3">
              <div className="product-sidebar">
                <div className="product-widget mb-20">
                  <div className="check-box-item">
                    <h6 className="product-widget-title mb-20">Product Category</h6>
                    <div className="checkbox-container">
                      <ul className="wp-block-categoris-cloud">
                        <li><Link legacyBehavior href="/shop" ><a className="active"><span>Industrial</span> <span className="number-of-categoris">(30)</span></a></Link></li>
                        <li><Link legacyBehavior href="/shop" ><a className="active"><span>Apartment</span> <span className="number-of-categoris">(18)</span> </a></Link></li>
                        <li><Link legacyBehavior href="/shop" ><a className="active"><span>Houses</span> <span className="number-of-categoris">(21)</span></a></Link></li>
                        <li><Link legacyBehavior href="/shop" ><a className="active"><span>Home Twon</span> <span className="number-of-categoris">(25)</span></a></Link></li>
                        <li><Link legacyBehavior href="/shop" ><a className="active"><span>Health Care</span> <span className="number-of-categoris">(29)</span></a></Link></li>
                        <li><Link legacyBehavior href="/shop" ><a className="active"><span>Developmen</span> <span className="number-of-categoris">(22)</span></a></Link></li>
                        <li><Link legacyBehavior href="/shop" ><a className="active"><span>Hotel</span> <span className="number-of-categoris">(1,556)</span></a></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="product-widget mb-20">
                  <div className="check-box-item">
                    <h6 className="product-widget-title mb-25">Price</h6>
                    <div className="range-wrapper">
                      <div className="slider-wrapper">
                        <div id="eg-range-slider" />
                      </div> 
                      <div className="valus">
                        <div className="min-value">
                          <span>$</span>
                          <input type="text" className="from" defaultValue={200} />
                        </div>
                        <div className="min-value">
                          <span>$</span>
                          <input type="text" className="to" defaultValue={2000} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-widget mb-20">
                  <div className="check-box-item">
                    <h6 className="product-widget-title mb-20">Product Ratings</h6>
                    <div className="checkbox-container">
                      <ul>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="stars">
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />          
                              <a href="#" className="review-no">(4.0)</a>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="stars">
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-half" />        
                              <a href="#" className="review-no">(3.5)</a>
                            </span>
                          </label>
                        </li>                   
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="stars">
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <a href="#" className="review-no">(3.0)</a>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="stars">
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-half" />
                              <a href="#" className="review-no">(2.5)</a>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="stars">
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <a href="#" className="review-no">(2.0)</a>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label className="containerss">
                            <input type="checkbox" />
                            <span className="checkmark" />
                            <span className="stars">
                              <i className="bi bi-star-fill" />
                              <a href="#" className="review-no">(1.0)</a>
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="product-widget">
                  <div className="check-box-item">
                    <h6 className="product-widget-title mb-20">Best Seller Products</h6>
                    <ul className="recent-product-list">
                      <li className="recent-product">
                        <div className="product-img">
                          <img src="/assets/img/inner-page/recent-prodect-img-01.png" alt="" />
                        </div>
                        <div className="content">
                          <div className="price">
                            <h6>$214.00</h6>
                          </div>
                          <h6><Link legacyBehavior href="/shop/product-details">Bean Bag Chair</Link></h6>
                        </div>
                      </li>
                      <li className="recent-product">
                        <div className="product-img">
                          <img src="/assets/img/inner-page/recent-product-img-02.png" alt="" />
                        </div>
                        <div className="content">
                          <div className="price">
                            <h6>$214.00</h6>
                          </div>
                          <h6><Link legacyBehavior href="/shop/product-details">Plush Cushioned Seat</Link></h6>
                        </div>
                      </li>
                      <li className="recent-product">
                        <div className="product-img">
                          <img src="/assets/img/inner-page/recent-product-img-03.png" alt="" />
                        </div>
                        <div className="content">
                          <div className="price">
                            <h6>$214.00</h6>
                          </div>
                          <h6><Link legacyBehavior href="/shop/product-details">Urban Steel Seating</Link></h6>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="row g-4 mb-40">
                <div className="col-lg-4 col-sm-6">
                  <div className="shop-card2">
                    <div className="shop-img">
                      <img src="/assets/img/inner-page/Product-01.png" alt="" />
                      <div className="offer-batch">
                        <span>-20%</span>
                      </div>
                      <a href="#" className="fav">
                        <svg width={12} height={11} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                          </path>
                        </svg>
                      </a>
                      <div className="cart-btn">
                        <div className="primary-btn2" onClick={handleAddToCartClick} >Add to cart</div>
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
                      <h6><Link legacyBehavior href="/shop/product-details">Bean Bag Chair</Link>
                      </h6>
                      <div className="content-btm">
                        <div className="price">
                          <h6>$214.00 <del>$234.00</del></h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
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
                        <div className="primary-btn2" onClick={handleAddToCartClick} >Add to cart</div>
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
                      <h6><Link legacyBehavior href="/shop/product-details">Elegant Velvet Chair</Link>
                      </h6>
                      <div className="content-btm">
                        <div className="price">
                          <h6>$220.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="shop-card2">
                    <div className="shop-img">
                      <img src="/assets/img/inner-page/Product-03.png" alt="" />
                      <a href="#" className="fav">
                        <svg width={12} height={11} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                          </path>
                        </svg>
                      </a>
                      <div className="cart-btn">
                        <div className="primary-btn2" onClick={handleAddToCartClick} >Add to cart</div>
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
                      <h6><Link legacyBehavior href="/shop/product-details">Modern Leather Seating</Link>
                      </h6>
                      <div className="content-btm">
                        <div className="price">
                          <h6>$234.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
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
                        <div className="primary-btn2" onClick={handleAddToCartClick} >Add to cart</div>
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
                      <h6><Link legacyBehavior href="/shop/product-details">Plush Cushioned Seat</Link>
                      </h6>
                      <div className="content-btm">
                        <div className="price">
                          <h6>$229.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
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
                        <div className="primary-btn2" onClick={handleAddToCartClick} >Add to cart</div>
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
                      <h6><Link legacyBehavior href="/shop/product-details">Vintage Style Chair</Link>
                      </h6>
                      <div className="content-btm">
                        <div className="price">
                          <h6>$226.00 <del>$234.00</del></h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
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
                        <div className="primary-btn2" onClick={handleAddToCartClick} >Add to cart</div>
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
                      <h6><Link legacyBehavior href="/shop/product-details">Minimalist Steel Frame</Link>
                      </h6>
                      <div className="content-btm">
                        <div className="price">
                          <h6>$228.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="shop-card2">
                    <div className="shop-img">
                      <img src="/assets/img/inner-page/Product-07.png" alt="" />
                      <div className="offer-batch">
                        <span>-15%</span>
                      </div>
                      <a href="#" className="fav">
                        <svg width={12} height={11} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                          </path>
                        </svg>
                      </a>
                      <div className="cart-btn">
                        <div className="primary-btn2" onClick={handleAddToCartClick} >Add to cart</div>
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
                      <h6><Link legacyBehavior href="/shop/product-details">Industrial Metal Stool</Link>
                      </h6>
                      <div className="content-btm">
                        <div className="price">
                          <h6>$205.00 <del>$234.00</del></h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="shop-card2">
                    <div className="shop-img">
                      <img src="/assets/img/inner-page/Product-08.png" alt="" />
                      <a href="#" className="fav">
                        <svg width={12} height={11} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                          </path>
                        </svg>
                      </a>
                      <div className="cart-btn">
                        <div className="primary-btn2" onClick={handleAddToCartClick} >Add to cart</div>
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
                      <h6><Link legacyBehavior href="/shop/product-details">Cozy Velvet Lounger</Link>
                      </h6>
                      <div className="content-btm">
                        <div className="price">
                          <h6>$250.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="shop-card2">
                    <div className="shop-img">
                      <img src="/assets/img/inner-page/Product-09.png" alt="" />
                      <a href="#" className="fav">
                        <svg width={12} height={11} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                          </path>
                        </svg>
                      </a>
                      <div className="cart-btn">
                        <div className="primary-btn2" onClick={handleAddToCartClick} >Add to cart</div>
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
                      <h6><Link legacyBehavior href="/shop/product-details">Sleek Wooden Armchair</Link>
                      </h6>
                      <div className="content-btm">
                        <div className="price">
                          <h6>$220.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="shop-card2">
                    <div className="shop-img">
                      <img src="/assets/img/inner-page/Product-10.png" alt="" />
                      <a href="#" className="fav">
                        <svg width={12} height={11} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                          </path>
                        </svg>
                      </a>
                      <div className="cart-btn">
                        <div className="primary-btn2" onClick={handleAddToCartClick} >Add to cart</div>
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
                      <h6><Link legacyBehavior href="/shop/product-details">Sleek Wooden Design</Link>
                      </h6>
                      <div className="content-btm">
                        <div className="price">
                          <h6>$190.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="shop-card2">
                    <div className="shop-img">
                      <img src="/assets/img/inner-page/Product-11.png" alt="" />
                      <a href="#" className="fav">
                        <svg width={12} height={11} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                          </path>
                        </svg>
                      </a>
                      <div className="cart-btn">
                        <div className="primary-btn2" onClick={handleAddToCartClick} >Add to cart</div>
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
                      <h6><Link legacyBehavior href="/shop/product-details">Tufted Linen Seating</Link>
                      </h6>
                      <div className="content-btm">
                        <div className="price">
                          <h6>$226.00</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="shop-card2">
                    <div className="shop-img">
                      <img src="/assets/img/inner-page/Product-12.png" alt="" />
                      <div className="offer-batch">
                        <span>-20%</span>
                      </div>
                      <a href="#" className="fav">
                        <svg width={12} height={11} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                          </path>
                        </svg>
                      </a>
                      <div className="cart-btn">
                        <div className="primary-btn2" onClick={handleAddToCartClick} >Add to cart</div>
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
                      <h6><Link legacyBehavior href="/shop/product-details">Urban Steel Seating</Link>
                      </h6>
                      <div className="content-btm">
                        <div className="price">
                          <h6>$240.00 <del>$250.00</del></h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="pagination-and-next-prev">
                    <div className="pagination">
                      <ul>
                        <li className="active"><a href="#">01</a></li>
                        <li><a href="#">02</a></li>
                        <li><a href="#">03</a></li>
                        <li><a href="#">04</a></li>
                        <li><a href="#">05</a></li>
                      </ul>
                    </div>
                    <div className="next-prev-btn">
                      <ul>
                        <li>
                          <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width={7} height={14} viewBox="0 0 7 14">
                              <path d="M0 7.00008L7 0L2.54545 7.00008L7 14L0 7.00008Z" />
                            </svg> Prev
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Next
                            <svg xmlns="http://www.w3.org/2000/svg" width={7} height={14} viewBox="0 0 7 14">
                              <path d="M7 7.00008L0 0L4.45455 7.00008L0 14L7 7.00008Z" />
                            </svg> 
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
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

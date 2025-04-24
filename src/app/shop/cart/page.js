import React from 'react'
import Link from 'next/link'
import Breadcrumb from '@/components/common/Breadcrumb'

const Page = () => {

  return (
    <>
    <Breadcrumb pageName="Cart" pageTitle="Cart"  /> 
    <div className="cart-page pt-100 mb-100">
      <div className="container">
        <div className="row g-lg-4 gy-5">
          <div className="col-lg-7">
            <div className="cart-shopping-wrapper">
              <div className="cart-widget-title">
                <h4>My Shopping</h4>
              </div>
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Product Info</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Product Info">
                      <div className="product-info-wrapper">
                        <div className="product-info-img">
                          <img src="/assets/img/inner-page/cart-img1.png" alt="" />
                        </div>
                        <div className="product-info-content">
                          <h6>Sleek Wooden Armchair</h6>
                          <p><span>SKU: </span>D32-5H23</p>
                          <ul>
                            <li>remove</li>
                            <li>
                              <div className="qty-btn">quantity</div>
                              <div className="quantity-area">
                                <div className="quantity">
                                  <a className="quantity__minus"><span><i className="bi bi-dash" /></span></a>
                                  <input name="quantity" type="text" className="quantity__input" defaultValue={1} />
                                  <a className="quantity__plus"><span><i className="bi bi-plus" /></span></a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                    <td data-label="Price"><span>$214.00</span></td>
                    <td data-label="Total">$214.00</td>
                  </tr>
                  <tr>
                    <td data-label="Product Info">
                      <div className="product-info-wrapper">
                        <div className="product-info-img">
                          <img src="/assets/img/inner-page/cart-img2.png" alt="" />
                        </div>
                        <div className="product-info-content">
                          <h6>Elegant Leather Recline</h6>
                          <p><span>SKU: </span>D32-5H23</p>
                          <ul>
                            <li>remove</li>
                            <li>
                              <div className="qty-btn">quantity</div>
                              <div className="quantity-area">
                                <div className="quantity">
                                  <a className="quantity__minus"><span><i className="bi bi-dash" /></span></a>
                                  <input name="quantity" type="text" className="quantity__input" defaultValue={1} />
                                  <a className="quantity__plus"><span><i className="bi bi-plus" /></span></a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                    <td data-label="Price"><span>$214.00</span></td>
                    <td data-label="Total">$214.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="cart-order-sum-area">
              <div className="cart-widget-title">
                <h4>Order Summary</h4>
              </div>
              <div className="order-summary-wrap">
                <ul className="order-summary-list">
                  <li>
                    <span>Sub Total</span>
                    <span>$214.00</span>
                  </li>
                  <li>
                    <span>Shipping</span>
                    <div className="order-info">
                      <p className="shipping">Shipping Free*</p>
                      <p>Pickup fee <strong>$10.00</strong></p>
                    </div>
                  </li>
                  <li>
                    <div className="coupon-area">
                      <span>Coupon Code</span>
                      <form>
                        <div className="form-inner">
                          <input type="text" placeholder="Your code" />
                          <button type="submit" className="primary-btn6">Apply</button>
                        </div>
                      </form>
                    </div>
                  </li>
                  <li>
                    <span>Total</span>
                    <span>$214.00</span>
                  </li>
                </ul>
                <Link legacyBehavior href="/shop/checkout"><a  className="primary-btn3">Processed Checkout</a></Link>
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

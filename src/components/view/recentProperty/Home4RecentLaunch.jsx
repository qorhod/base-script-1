import Link from 'next/link'
import React from 'react'

const Home4RecentLaunch = () => {
  return (
    <div className="recent-launched-project mb-100">
  <div className="container">
    <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
      <div className="col-lg-12 d-flex align-items-end justify-content-between gap-3 flex-wrap">
        <div className="section-title-2">
          <h2>Properties By Cities</h2>
          <p>Here are some of the featured Apartment in different categories</p>
        </div>
        <div className="slider-and-explore-btn-group">
          <div className="slider-btn-group2">
            <div className="slider-btn prev-5">
              <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
              </svg>
            </div>
            <div className="slider-btn next-5">
              <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
              </svg>
            </div>
          </div>
          <div className="explore-more-btn">
            <Link legacyBehavior href="/poperty-deatils1"><a>Explore More <i className="bi bi-arrow-right" /></a></Link>
          </div>
        </div>
      </div>
    </div>
    <div className="row wow fadeInUp" data-wow-delay="300ms">
      <div className="col-lg-12">
        <div className="swiper recent-launch-car-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="product-card2">
                <div className="product-img">
                  <a href="#" className="fav">
                    <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                      </path>
                    </svg>
                  </a>
                  <img src="/assets/img/home2/city-01.png" alt="" />
                </div>
                <div className="product-content">
                  <h6><Link legacyBehavior href="/property-listing-left-sidebar"><a>Chicago City</a></Link></h6>
                  <span>05 Property</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="product-card2">
                <div className="product-img">
                  <a href="#" className="fav">
                    <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                      </path>
                    </svg>
                  </a>
                  <img src="/assets/img/home2/city-02.png" alt="" />
                </div>
                <div className="product-content">
                  <h6><Link href="/property-listing-left-sidebar"><a>Mumbai City</a></Link></h6>
                  <span>03 Property</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="product-card2">
                <div className="product-img">
                  <a href="#" className="fav">
                    <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                      </path>
                    </svg>
                  </a>
                  <img src="/assets/img/home2/city-03.png" alt="" />
                </div>
                <div className="product-content">
                  <h6><Link legacyBehavior href="/property-listing-left-sidebar"><a>Panama City</a></Link></h6>
                  <span>07 Property</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="product-card2">
                <div className="product-img">
                  <a href="#" className="fav">
                    <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                      </path>
                    </svg>
                  </a>
                  <img src="/assets/img/home2/city-04.png" alt="" />
                </div>
                <div className="product-content">
                  <h6><Link legacyBehavior href="/property-listing-left-sidebar"><a>Loss Angelse</a></Link></h6>
                  <span>10 Property</span>
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

export default Home4RecentLaunch

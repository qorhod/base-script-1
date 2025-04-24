import Link from 'next/link'
import React from 'react'

const Home3InnerBanner = () => {
  return (
    <div className="home3-inner-banner">
    <div className="inner-banner-img">
      <img src="/assets/img/home3/home3-inner-banner-img.png" alt="" />
    </div>
    <div className="container">
      <div className="row wow fadeInUp" data-wow-delay="700ms" style={{visibility: 'visible', animationDelay: '700ms'}}>
        <div className="col-lg-12">
          <div className="inner-banner-content section-title-2">
            <h2>Your Dream Flat Is Ready</h2>
            <p>A car that is dependable and has a low risk of breakdowns is highly desirable.</p>
            <Link legacyBehavior href="/property-listing-left-sidebar">
              <a  className="primary-btn3">
              Explore More  
              <i className="bi bi-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Home3InnerBanner

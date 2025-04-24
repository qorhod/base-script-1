import Link from 'next/link'
import React from 'react'

const Home2RecomendadeApertment = () => {
  return (
    <div className="recommended-apartment-section mb-100">
  <div className="recomended-content-wrap">
    <div className="section-title1 wow fadeInUp" data-wow-delay="200ms">
      <span>Choose Apartment</span>
      <h2>Not Sure, Which Apartment is Best?</h2>
    </div>
    <div className="divider d-xl-flex d-none"><img src="/assets/img/home1/Divider.svg" alt="" /></div>
    <div className="recomended-content wow fadeInUp" data-wow-delay="200ms">
      <p>A car that is dependable and has a low risk of breakdowns is highly desirable.</p>
      <Link legacyBehavior href="/property-listing-left-sidebar"><a  className="primary-btn3">Show Best Home</a></Link>
    </div>
  </div>
  <div className="aparment-img">
    <img src="/assets/img/home2/aparment-img.png" alt="" />
  </div>
</div>

  )
}

export default Home2RecomendadeApertment

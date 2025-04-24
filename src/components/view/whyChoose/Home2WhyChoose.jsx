import React from 'react'

const Home2WhyChoose = () => {
  return (
    <div className="home2-why-choose-section mb-100 pt-90 pb-90">
  <div className="container">
    <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
      <div className="col-lg-12">
        <div className="section-title-2 text-center">
          <h2>Why Only Choose Neckle</h2>
          <p>Here are some of the featured Apartment in different categories</p>
        </div>
      </div>
    </div>
    <div className="row g-lg-4 gy-5 mb-50">
      <div className="col-lg-6">
        <div className="why-choose-content-area">
          <ul>
            <li className="single-choose wow fadeInUp" data-wow-delay="300ms">
              <div className="icon">
                <img src="/assets/img/home2/icon/affordable.svg" alt="" />
              </div>
              <div className="content">
                <h5><span>Affordable</span> Price</h5>
                <p>An affordable price for a luxury car may be significantly higher than an affordable price for a budget car...</p>
              </div>
            </li>
            <li className="single-choose wow fadeInUp" data-wow-delay="400ms">
              <div className="icon">
                <img src="/assets/img/home2/icon/guarantee.svg" alt="" />
              </div>
              <div className="content">
                <h5>Money Back <span>Guarantee</span></h5>
                <p>An affordable price for a luxury car may be significantly higher than an affordable price for a budget car...</p>
              </div>
            </li>
            <li className="single-choose wow fadeInUp" data-wow-delay="500ms">
              <div className="icon">
                <img src="/assets/img/home2/icon/outstanding.svg" alt="" />
              </div>
              <div className="content">
                <h5><span>Outstanding</span> Property</h5>
                <p>An affordable price for a luxury car may be significantly higher than an affordable price for a budget car...</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="why-choose-img-wrap wow zoomIn" data-wow-delay="400ms">
          <div className="logo-area"><img src="/assets/img/home2/icon/house-1.svg" alt="" /></div>
          <div className="row g-lg-4 g-2">
            <div className="col-6">
              <div className="choose-img">
                <img src="/assets/img/home2/choose-01.png" alt="" />
              </div>
            </div>
            <div className="col-6">
              <div className="choose-img">
                <img src="/assets/img/home2/choose-02.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row wow fadeInUp" data-wow-delay="200ms">
      <div className="col-lg-12">
        <div className="trustpilot-review">
          <strong>Excellent!</strong>
          <img src="/assets/img/home1/icon/trustpilot-star2.svg" alt="" />
          <p>5.0 Rating out of <strong>5.0</strong> based on <a href="#"><strong>245354</strong>
              reviews</a></p>
          <img src="/assets/img/home1/icon/trustpilot-logo.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Home2WhyChoose

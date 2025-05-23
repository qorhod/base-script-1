"use client"
import React from 'react'
import CountUp from 'react-countup';
const Home1WhyChoose = () => {
  return (
    <div className="why-choose-area pt-90 pb-90 mb-100">
  <div className="container">
    <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
      <div className="col-lg-12 d-flex justify-content-center">
        <div className="section-title1 text-center">
          <span>Best Real Estate</span>
          <h2>Why Only Choose Neckle</h2>
        </div>
      </div>
    </div>
    <div className="row mb-50 g-4 justify-content-center">
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
        <div className="choose-card">
          <div className="choose-top">
            <div className="choose-icon">
              <img src="/assets/img/home1/icon/affordable.svg" alt="" />
            </div>
            <h5><span>Affordable</span> Price</h5>
          </div>
          <p>An affordable price for a luxury car may be significantly higher than an affordable price for
            a budget car...</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
        <div className="choose-card">
          <div className="choose-top">
            <div className="choose-icon">
              <img src="/assets/img/home1/icon/guarantee.svg" alt="" />
            </div>
            <h5>Money Back <span>Guarantee</span></h5>
          </div>
          <p>Some may offer a full refund with no questions asked, others may require the customer to
            provide...</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
        <div className="choose-card">
          <div className="choose-top">
            <div className="choose-icon">
              <img src="/assets/img/home1/icon/warranty.svg" alt="" />
            </div>
            <h5><span>Top</span> Rated Agency</h5>
          </div>
          <p>During this 8-month period, if the product fails to function properly due to a defect or
            malfunction...</p>
        </div>
      </div>
    </div>
    <div className="our-activetis">
      <div className="row justify-content-center g-lg-4 gy-5">
        <div className="col-lg-3 col-sm-4 col-sm-6 divider d-flex justify-content-lg-start justify-content-sm-center wow fadeInUp" data-wow-delay="200ms">
          <div className="single-activiti">
            <div className="icon">
              <img src="/assets/img/home1/icon/av-project.svg" alt="" />
            </div>
            <div className="content">
              <div className="number">
                <h5 className="counter">600</h5>
                <span>K+</span>
              </div>
              <p>Project Available</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-4 col-sm-6 divider d-flex justify-content-sm-center wow fadeInUp" data-wow-delay="300ms">
          <div className="single-activiti">
            <div className="icon">
              <img src="/assets/img/home1/icon/sold-car.svg" alt="" />
            </div>
            <div className="content">
              <div className="number">
                <h5 className="counter"><CountUp end={400} /></h5>
                <span>K+</span>
              </div>
              <p>Project Sold</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-4 col-sm-6 divider d-flex justify-content-sm-center wow fadeInUp" data-wow-delay="400ms">
          <div className="single-activiti">
            <div className="icon">
              <img src="/assets/img/home1/icon/new-home.svg" alt="" />
            </div>
            <div className="content">
              <div className="number">
                <h5 className="counter">200</h5>
                <span>K+</span>
              </div>
              <p>New Home</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-4 col-sm-6 d-flex justify-content-lg-end justify-content-sm-center wow fadeInUp" data-wow-delay="500ms">
          <div className="single-activiti">
            <div className="icon">
              <img src="/assets/img/home1/icon/happy-customar.svg" alt="" />
            </div>
            <div className="content">
              <div className="number">
                <h5 className="counter">98.50</h5>
                <span>%</span>
              </div>
              <p>Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row wow fadeInUp" data-wow-delay="200ms">
      <div className="col-lg-12 d-flex justify-content-center">
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

export default Home1WhyChoose

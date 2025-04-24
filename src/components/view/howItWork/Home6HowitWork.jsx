"use client"
import React, { useState } from 'react'
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';
const Home6HowitWork = () => {
   const [isOpen, setOpen] = useState(false);
  return (
    <div className="how-it-work-section style-3 mb-100">
    <div className="container">
      <div className="row mb-50 wow fadeInUp animated" data-wow-delay="200ms" style={{visibility: 'visible', animationDelay: '200ms'}}>
        <div className="col-lg-12 d-flex align-items-end justify-content-between gap-3 flex-wrap">
          <div className="section-title-2">
            <h2>Neckle Working Process</h2>
            <p>Here are some of the featured Apartment in different categories.</p>
          </div>
          <div className="video-btn"onClick={() => setOpen(true)}>
            <div data-fancybox="gallery"><i className="bi bi-play-circle" /> Watch video</div>
          </div>
        </div>
      </div>
      <div className="row wow fadeInUp" data-wow-delay="300ms" style={{visibility: 'visible', animationDelay: '300ms'}}>
        <div className="col-lg-12">
          <div className="work-process-group">
            <div className="row justify-content-center g-xl-0 gy-5">
              <div className="col-lg-3 col-sm-6">
                <div className="single-work-process text-center">
                  <div className="steps">
                    <span>01</span>
                  </div>
                  <div className="icon">
                    <img src="/assets/img/home2/icon/loaction.svg" alt="" />
                  </div>
                  <div className="content">
                    <h6>Choose Any where</h6>
                    <p>The real estate industry It plays a significant role in the as it
                      contributes.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-work-process text-center">
                  <div className="steps">
                    <span>02</span>
                  </div>
                  <div className="icon">
                    <img src="/assets/img/home2/icon/contact.svg" alt="" />
                  </div>
                  <div className="content">
                    <h6>Contact With Us</h6>
                    <p>The real estate industry It plays a significant role in the as it
                      contributes.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-work-process text-center">
                  <div className="steps">
                    <span>03</span>
                  </div>
                  <div className="icon">
                    <img src="/assets/img/home2/icon/pay.svg" alt="" />
                  </div>
                  <div className="content">
                    <h6>Pay For The Car</h6>
                    <p>The real estate industry It plays a significant role in the as it
                      contributes.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-work-process text-center">
                  <div className="steps d-lg-none d-block">
                    <span>04</span>
                  </div>
                  <div className="icon">
                    <img src="/assets/img/home2/icon/recieve.svg" alt="" />
                  </div>
                  <div className="content">
                    <h6>Recieve Home</h6>
                    <p>The real estate industry It plays a significant role in the as it
                      contributes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row wow fadeInUp" data-wow-delay="400ms" style={{visibility: 'visible', animationDelay: '400ms'}}>
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
    <React.Fragment>
        <ModalVideo
          channel="custom"
          url='/assets/video/popup-video.mp4'
          isOpen={isOpen}
          animationSpeed="350"
          ratio='16:9'
          onClose={() => setOpen(false)} 
        />
      
      </React.Fragment>
  </div>
  
  )
}

export default Home6HowitWork
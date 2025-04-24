"use client";
import React, { useMemo } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);
const Home1projectLocation = () => {
    const slideSettings = useMemo(()=>{
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 25,
            autoplay: {
                delay: 2500, // Autoplay duration in milliseconds
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".next-12",
                prevEl: ".prev-12",
            },
    
            breakpoints: {
                280: {
                    slidesPerView: 1,
                },
                386: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                },
                1400: {
                    slidesPerView: 4
                },
            }
        }
    },[])
  return (
    <div className="project-location-area mb-100">
  <div className="container">
    <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
      <div className="col-lg-12 d-flex align-items-center justify-content-between gap-3 flex-wrap">
        <div className="section-title1">
          <span>Comfort Building</span>
          <h2>Property By Cities </h2>
        </div>
        <div className="slider-btn-group2 width-90">
          <div className="slider-btn prev-12">
            <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
            </svg>
          </div>
          <div className="slider-btn next-12">
            <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <Swiper {...slideSettings} className="swiper home1-location-slider">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="project-card">
                <img src="/assets/img/home1/project-location-01.png" alt="" />
                <div className="location-content-wrap">
                  <div className="location-content">
                    <h5><Link legacyBehavior href="/property-list/left-sidebar"><a>Loss Angeles</a></Link></h5>
                    <span>03 Properties</span>
                    <div className="veiw-btn">
                      <Link legacyBehavior href="/property-list/left-sidebar">
                        <a>
                        View More
                        <span>
                          <svg width={6} height={6} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.1605 0H0.849401C0.626751 0 0.413219 0.0884475 0.255781 0.245885C0.0983438 0.403323 0.00989626 0.616854 0.00989626 0.839505C0.00989626 1.06216 0.0983438 1.27569 0.255781 1.43312C0.413219 1.59056 0.626751 1.67901 0.849401 1.67901H7.13309L0.256291 8.55665C0.17611 8.63409 0.112154 8.72673 0.0681567 8.82915C0.0241591 8.93157 0.00100033 9.04173 3.16969e-05 9.1532C-0.000936937 9.26467 0.020304 9.37522 0.062515 9.47839C0.104726 9.58156 0.167062 9.67529 0.245885 9.75412C0.324709 9.83294 0.418441 9.89527 0.521613 9.93748C0.624785 9.9797 0.735331 10.0009 0.846799 9.99997C0.958268 9.999 1.06843 9.97584 1.17085 9.93184C1.27327 9.88785 1.36591 9.82389 1.44335 9.74371L8.32099 2.86649V9.1506C8.32099 9.37325 8.40944 9.58678 8.56688 9.74422C8.72431 9.90166 8.93785 9.9901 9.1605 9.9901C9.38315 9.9901 9.59668 9.90166 9.75412 9.74422C9.91155 9.58678 10 9.37325 10 9.1506V0.839505C10 0.616854 9.91155 0.403323 9.75412 0.245885C9.59668 0.0884475 9.38315 0 9.1605 0Z" />
                          </svg>
                        </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="project-card">
                <img src="/assets/img/home1/project-location-02.png" alt="" />
                <div className="location-content-wrap">
                  <div className="location-content">
                    <h5><Link legacyBehavior href="/property-list/left-sidebar"><a>Chicago City</a></Link></h5>
                    <span>04 Properties</span>
                    <div className="veiw-btn">
                      <Link legacyBehavior href="/property-list/left-sidebar">
                        <a>
                        View More
                        <span>
                          <svg width={6} height={6} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.1605 0H0.849401C0.626751 0 0.413219 0.0884475 0.255781 0.245885C0.0983438 0.403323 0.00989626 0.616854 0.00989626 0.839505C0.00989626 1.06216 0.0983438 1.27569 0.255781 1.43312C0.413219 1.59056 0.626751 1.67901 0.849401 1.67901H7.13309L0.256291 8.55665C0.17611 8.63409 0.112154 8.72673 0.0681567 8.82915C0.0241591 8.93157 0.00100033 9.04173 3.16969e-05 9.1532C-0.000936937 9.26467 0.020304 9.37522 0.062515 9.47839C0.104726 9.58156 0.167062 9.67529 0.245885 9.75412C0.324709 9.83294 0.418441 9.89527 0.521613 9.93748C0.624785 9.9797 0.735331 10.0009 0.846799 9.99997C0.958268 9.999 1.06843 9.97584 1.17085 9.93184C1.27327 9.88785 1.36591 9.82389 1.44335 9.74371L8.32099 2.86649V9.1506C8.32099 9.37325 8.40944 9.58678 8.56688 9.74422C8.72431 9.90166 8.93785 9.9901 9.1605 9.9901C9.38315 9.9901 9.59668 9.90166 9.75412 9.74422C9.91155 9.58678 10 9.37325 10 9.1506V0.839505C10 0.616854 9.91155 0.403323 9.75412 0.245885C9.59668 0.0884475 9.38315 0 9.1605 0Z" />
                          </svg>
                        </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="project-card"> 
                <img src="/assets/img/home1/project-location-03.png" alt="" />
                <div className="location-content-wrap">
                  <div className="location-content">
                    <h5><Link legacyBehavior href="/property-list/left-sidebar"><a>Sydne City</a></Link></h5>
                    <span>04 Properties</span>
                    <div className="veiw-btn">
                      <Link legacyBehavior href="/property-list/left-sidebar">
                        <a>
                        View More
                        <span>
                          <svg width={6} height={6} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.1605 0H0.849401C0.626751 0 0.413219 0.0884475 0.255781 0.245885C0.0983438 0.403323 0.00989626 0.616854 0.00989626 0.839505C0.00989626 1.06216 0.0983438 1.27569 0.255781 1.43312C0.413219 1.59056 0.626751 1.67901 0.849401 1.67901H7.13309L0.256291 8.55665C0.17611 8.63409 0.112154 8.72673 0.0681567 8.82915C0.0241591 8.93157 0.00100033 9.04173 3.16969e-05 9.1532C-0.000936937 9.26467 0.020304 9.37522 0.062515 9.47839C0.104726 9.58156 0.167062 9.67529 0.245885 9.75412C0.324709 9.83294 0.418441 9.89527 0.521613 9.93748C0.624785 9.9797 0.735331 10.0009 0.846799 9.99997C0.958268 9.999 1.06843 9.97584 1.17085 9.93184C1.27327 9.88785 1.36591 9.82389 1.44335 9.74371L8.32099 2.86649V9.1506C8.32099 9.37325 8.40944 9.58678 8.56688 9.74422C8.72431 9.90166 8.93785 9.9901 9.1605 9.9901C9.38315 9.9901 9.59668 9.90166 9.75412 9.74422C9.91155 9.58678 10 9.37325 10 9.1506V0.839505C10 0.616854 9.91155 0.403323 9.75412 0.245885C9.59668 0.0884475 9.38315 0 9.1605 0Z" />
                          </svg>
                        </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="project-card">
                <img src="/assets/img/home1/project-location-04.png" alt="" />
                <div className="location-content-wrap">
                  <div className="location-content">
                    <h5><Link legacyBehavior href="/property-list/left-sidebar"><a>Mumbai City</a></Link></h5>
                    <span>03 Properties</span>
                    <div className="veiw-btn">
                      <Link legacyBehavior href="/property-list/left-sidebar">
                        <a>
                        View More
                        <span>
                          <svg width={6} height={6} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.1605 0H0.849401C0.626751 0 0.413219 0.0884475 0.255781 0.245885C0.0983438 0.403323 0.00989626 0.616854 0.00989626 0.839505C0.00989626 1.06216 0.0983438 1.27569 0.255781 1.43312C0.413219 1.59056 0.626751 1.67901 0.849401 1.67901H7.13309L0.256291 8.55665C0.17611 8.63409 0.112154 8.72673 0.0681567 8.82915C0.0241591 8.93157 0.00100033 9.04173 3.16969e-05 9.1532C-0.000936937 9.26467 0.020304 9.37522 0.062515 9.47839C0.104726 9.58156 0.167062 9.67529 0.245885 9.75412C0.324709 9.83294 0.418441 9.89527 0.521613 9.93748C0.624785 9.9797 0.735331 10.0009 0.846799 9.99997C0.958268 9.999 1.06843 9.97584 1.17085 9.93184C1.27327 9.88785 1.36591 9.82389 1.44335 9.74371L8.32099 2.86649V9.1506C8.32099 9.37325 8.40944 9.58678 8.56688 9.74422C8.72431 9.90166 8.93785 9.9901 9.1605 9.9901C9.38315 9.9901 9.59668 9.90166 9.75412 9.74422C9.91155 9.58678 10 9.37325 10 9.1506V0.839505C10 0.616854 9.91155 0.403323 9.75412 0.245885C9.59668 0.0884475 9.38315 0 9.1605 0Z" />
                          </svg>
                        </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="project-card">
                <img src="/assets/img/home1/project-location-01.png" alt="" />
                <div className="location-content-wrap">
                  <div className="location-content">
                    <h5><Link legacyBehavior href="/property-list/left-sidebar"><a>Loss Angeles</a></Link></h5>
                    <span>03 Properties</span>
                    <div className="veiw-btn">
                      <Link legacyBehavior href="/property-list/left-sidebar">
                        <a>
                        View More
                        <span>
                          <svg width={6} height={6} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.1605 0H0.849401C0.626751 0 0.413219 0.0884475 0.255781 0.245885C0.0983438 0.403323 0.00989626 0.616854 0.00989626 0.839505C0.00989626 1.06216 0.0983438 1.27569 0.255781 1.43312C0.413219 1.59056 0.626751 1.67901 0.849401 1.67901H7.13309L0.256291 8.55665C0.17611 8.63409 0.112154 8.72673 0.0681567 8.82915C0.0241591 8.93157 0.00100033 9.04173 3.16969e-05 9.1532C-0.000936937 9.26467 0.020304 9.37522 0.062515 9.47839C0.104726 9.58156 0.167062 9.67529 0.245885 9.75412C0.324709 9.83294 0.418441 9.89527 0.521613 9.93748C0.624785 9.9797 0.735331 10.0009 0.846799 9.99997C0.958268 9.999 1.06843 9.97584 1.17085 9.93184C1.27327 9.88785 1.36591 9.82389 1.44335 9.74371L8.32099 2.86649V9.1506C8.32099 9.37325 8.40944 9.58678 8.56688 9.74422C8.72431 9.90166 8.93785 9.9901 9.1605 9.9901C9.38315 9.9901 9.59668 9.90166 9.75412 9.74422C9.91155 9.58678 10 9.37325 10 9.1506V0.839505C10 0.616854 9.91155 0.403323 9.75412 0.245885C9.59668 0.0884475 9.38315 0 9.1605 0Z" />
                          </svg>
                        </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="project-card">
                <img src="/assets/img/home1/project-location-02.png" alt="" />
                <div className="location-content-wrap">
                  <div className="location-content">
                    <h5><Link legacyBehavior href="/property-list/left-sidebar"><a>Chicago City</a></Link></h5>
                    <span>04 Properties</span>
                    <div className="veiw-btn">
                      <Link legacyBehavior href="/property-list/left-sidebar">
                        <a>
                        View More
                        <span>
                          <svg width={6} height={6} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.1605 0H0.849401C0.626751 0 0.413219 0.0884475 0.255781 0.245885C0.0983438 0.403323 0.00989626 0.616854 0.00989626 0.839505C0.00989626 1.06216 0.0983438 1.27569 0.255781 1.43312C0.413219 1.59056 0.626751 1.67901 0.849401 1.67901H7.13309L0.256291 8.55665C0.17611 8.63409 0.112154 8.72673 0.0681567 8.82915C0.0241591 8.93157 0.00100033 9.04173 3.16969e-05 9.1532C-0.000936937 9.26467 0.020304 9.37522 0.062515 9.47839C0.104726 9.58156 0.167062 9.67529 0.245885 9.75412C0.324709 9.83294 0.418441 9.89527 0.521613 9.93748C0.624785 9.9797 0.735331 10.0009 0.846799 9.99997C0.958268 9.999 1.06843 9.97584 1.17085 9.93184C1.27327 9.88785 1.36591 9.82389 1.44335 9.74371L8.32099 2.86649V9.1506C8.32099 9.37325 8.40944 9.58678 8.56688 9.74422C8.72431 9.90166 8.93785 9.9901 9.1605 9.9901C9.38315 9.9901 9.59668 9.90166 9.75412 9.74422C9.91155 9.58678 10 9.37325 10 9.1506V0.839505C10 0.616854 9.91155 0.403323 9.75412 0.245885C9.59668 0.0884475 9.38315 0 9.1605 0Z" />
                          </svg>
                        </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="project-card"> 
                <img src="/assets/img/home1/project-location-03.png" alt="" />
                <div className="location-content-wrap">
                  <div className="location-content">
                    <h5><Link legacyBehavior href="/property-list/left-sidebar"><a>Sydne City</a></Link></h5>
                    <span>04 Properties</span>
                    <div className="veiw-btn">
                      <Link legacyBehavior href="/property-list/left-sidebar">
                        <a>
                        View More
                        <span>
                          <svg width={6} height={6} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.1605 0H0.849401C0.626751 0 0.413219 0.0884475 0.255781 0.245885C0.0983438 0.403323 0.00989626 0.616854 0.00989626 0.839505C0.00989626 1.06216 0.0983438 1.27569 0.255781 1.43312C0.413219 1.59056 0.626751 1.67901 0.849401 1.67901H7.13309L0.256291 8.55665C0.17611 8.63409 0.112154 8.72673 0.0681567 8.82915C0.0241591 8.93157 0.00100033 9.04173 3.16969e-05 9.1532C-0.000936937 9.26467 0.020304 9.37522 0.062515 9.47839C0.104726 9.58156 0.167062 9.67529 0.245885 9.75412C0.324709 9.83294 0.418441 9.89527 0.521613 9.93748C0.624785 9.9797 0.735331 10.0009 0.846799 9.99997C0.958268 9.999 1.06843 9.97584 1.17085 9.93184C1.27327 9.88785 1.36591 9.82389 1.44335 9.74371L8.32099 2.86649V9.1506C8.32099 9.37325 8.40944 9.58678 8.56688 9.74422C8.72431 9.90166 8.93785 9.9901 9.1605 9.9901C9.38315 9.9901 9.59668 9.90166 9.75412 9.74422C9.91155 9.58678 10 9.37325 10 9.1506V0.839505C10 0.616854 9.91155 0.403323 9.75412 0.245885C9.59668 0.0884475 9.38315 0 9.1605 0Z" />
                          </svg>
                        </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="project-card">
                <img src="/assets/img/home1/project-location-04.png" alt="" />
                <div className="location-content-wrap">
                  <div className="location-content">
                    <h5><Link legacyBehavior href="/property-list/left-sidebar"><a>Mumbai City</a></Link></h5>
                    <span>03 Properties</span>
                    <div className="veiw-btn">
                      <Link legacyBehavior href="/property-list/left-sidebar">
                        <a>
                        View More
                        <span>
                          <svg width={6} height={6} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.1605 0H0.849401C0.626751 0 0.413219 0.0884475 0.255781 0.245885C0.0983438 0.403323 0.00989626 0.616854 0.00989626 0.839505C0.00989626 1.06216 0.0983438 1.27569 0.255781 1.43312C0.413219 1.59056 0.626751 1.67901 0.849401 1.67901H7.13309L0.256291 8.55665C0.17611 8.63409 0.112154 8.72673 0.0681567 8.82915C0.0241591 8.93157 0.00100033 9.04173 3.16969e-05 9.1532C-0.000936937 9.26467 0.020304 9.37522 0.062515 9.47839C0.104726 9.58156 0.167062 9.67529 0.245885 9.75412C0.324709 9.83294 0.418441 9.89527 0.521613 9.93748C0.624785 9.9797 0.735331 10.0009 0.846799 9.99997C0.958268 9.999 1.06843 9.97584 1.17085 9.93184C1.27327 9.88785 1.36591 9.82389 1.44335 9.74371L8.32099 2.86649V9.1506C8.32099 9.37325 8.40944 9.58678 8.56688 9.74422C8.72431 9.90166 8.93785 9.9901 9.1605 9.9901C9.38315 9.9901 9.59668 9.90166 9.75412 9.74422C9.91155 9.58678 10 9.37325 10 9.1506V0.839505C10 0.616854 9.91155 0.403323 9.75412 0.245885C9.59668 0.0884475 9.38315 0 9.1605 0Z" />
                          </svg>
                        </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  </div>
</div>

  )
}

export default Home1projectLocation

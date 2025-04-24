import {React ,useContext} from 'react'
import { DomainDataContext } from "@/app/index5/layout";

const Home5About = () => {
  const { userData } = useContext(DomainDataContext);

  return (
    <div className="home5-about-area pt-100 mb-100">
    <div className="container">
      <div className="row g-lg-4 gy-5">
        <div className="col-xl-9 col-lg-8">
          <div className="about-content-wrap wow fadeInUp" data-wow-delay="200ms">
            <div className="section-title1">
              <span>
               (منذ عام - {userData?.user?.homepage?.foundedDate || ""})</span>
              <h2>  {userData?.user?.homepage?.shortDescriptionTitle || ""}  </h2>
            </div>
            {/* <h6>بلكة العقارية</h6> */}

              <p>    {userData?.user?.homepage?.companyDescription || ""}    </p>
            {/* <div className="author-area">
              <img src="/assets/img/home2/icon/author-signature.svg" alt="" />
              <div className="author-name-deg">
                <h6>Natrison Mongla</h6>
                <span>(CEO &amp; Founder)</span>
              </div>
            </div> */}
          </div>
        </div>
        {/* <div className="col-xl-3 col-lg-4">
          <div className="activetis wow fadeInUp" data-wow-delay="200ms">
            <div className="single-activiti">
              <div className="icon">
                <img src="/assets/img/home5/icon/p-complete.svg" alt="" />
              </div>
              <div className="content">
                <div className="number">
                  <h5 className="counter">600</h5>
                  <span>K+</span>
                </div>
                <p>Project Completed</p>
              </div>
            </div>
            <div className="single-activiti">
              <div className="icon">
                <img src="/assets/img/home5/icon/p-sold.svg" alt="" />
              </div>
              <div className="content">
                <div className="number">
                  <h5 className="counter">200</h5>
                  <span>K+</span>
                </div>
                <p>Project Sold</p>
              </div>
            </div>
            <div className="single-activiti">
              <div className="icon">
                <img src="/assets/img/home5/icon/experience.svg" alt="" />
              </div>
              <div className="content">
                <div className="number">
                  <h5 className="counter">25</h5>
                  <span>+</span>
                </div>
                <p>Experienced</p>
              </div>
            </div>
            <div className="single-activiti">
              <div className="icon">
                <img src="/assets/img/home5/icon/c-satisfaction.svg" alt="" />
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
        </div> */}
      </div>
    </div>
  </div>
  
  )
}

export default Home5About

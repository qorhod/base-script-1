import Breadcrumb from '@/components/common/Breadcrumb'
import Link from 'next/link'
import React from 'react'


export const metadata = {
  title: "Neckle - Real Estate Next Template",
  description: "Global Description",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const Page = () => {
  return (
    <>
    <Breadcrumb pageName="blog" pageTitle="Blog"/>
    <div className="news-section pt-90 pb-90">
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
            <div className="news-card">
              <div className="news-img">
                <Link legacyBehavior href="/blog/details"><a><img src="/assets/img/home1/news-01.png" alt="" /></a></Link>
                <div className="date">
                  <Link legacyBehavior href="/blog/standard"><a>Apartment</a></Link>
                </div>
              </div>
              <div className="content">
                <h6><Link legacyBehavior href="/blog/details"><a>The Rise of Remote Work: How It's Shaping Real Estate Trends</a></Link>
                </h6>
                <div className="news-btm">
                  <div className="author-area">
                    <div className="author-img">
                      <img src="/assets/img/home1/author-01.png" alt="" />
                    </div>
                    <div className="author-content">
                      <h6>Mr. Morris Mannu</h6>
                      <Link legacyBehavior href="/blog/standard"><a>Posted on - 03 April, 2023</a></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
            <div className="news-card">
              <div className="news-img">
                <Link legacyBehavior href="/blog/details"><a><img src="/assets/img/home1/news-02.png" alt="" /></a></Link>
                <div className="date">
                  <Link legacyBehavior href="/blog/standard"><a>Home Town</a></Link>
                </div>
              </div>
              <div className="content">
                <h6><Link legacyBehavior href="/blog/details"><a>Real Estate Investing 101: Essential Tips for New Investors</a></Link>
                </h6>
                <div className="news-btm">
                  <div className="author-area">
                    <div className="author-img">
                      <img src="/assets/img/home1/author-02.png" alt="" />
                    </div>
                    <div className="author-content">
                      <h6>Daniel Scoot</h6>
                      <Link legacyBehavior href="/blog/standard"><a>Posted on - 03 April, 2023</a></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
            <div className="news-card">
              <div className="news-img">
                <Link legacyBehavior href="/blog/details"><a><img src="/assets/img/home1/news-03.png" alt="" /></a></Link>
                <div className="date">
                  <Link legacyBehavior href="/blog/standard"><a>Industrial</a></Link>
                </div>
              </div>
              <div className="content">
                <h6><Link legacyBehavior href="/blog/details"><a>The Hot Real Estate Market: Tips for Buyers and Sellers</a></Link>
                </h6>
                <div className="news-btm">
                  <div className="author-area">
                    <div className="author-img">
                      <img src="/assets/img/home1/author-03.png" alt="" />
                    </div>
                    <div className="author-content">
                      <h6>Mulish Kary</h6>
                      <Link legacyBehavior href="/blog/standard"><a>Posted on - 03 April, 2023</a></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
            <div className="news-card">
              <div className="news-img">
                <Link legacyBehavior href="/blog/details"><a><img src="/assets/img/home1/news-01.png" alt="" /></a></Link>
                <div className="date">
                  <Link legacyBehavior href="/blog/standard"><a>Apartment</a></Link>
                </div>
              </div>
              <div className="content">
                <h6><Link legacyBehavior href="/blog/details"><a>The Rise of Remote Work: How It's Shaping Real Estate Trends</a></Link>
                </h6>
                <div className="news-btm">
                  <div className="author-area">
                    <div className="author-img">
                      <img src="/assets/img/home1/author-01.png" alt="" />
                    </div>
                    <div className="author-content">
                      <h6>Mr. Morris Mannu</h6>
                      <Link legacyBehavior href="/blog/standard"><a>Posted on - 03 April, 2023</a></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
            <div className="news-card">
              <div className="news-img">
                <Link legacyBehavior href="/blog/details"><a><img src="/assets/img/home1/news-02.png" alt="" /></a></Link>
                <div className="date">
                  <Link legacyBehavior href="/blog/standard"><a>Home Town</a></Link>
                </div>
              </div>
              <div className="content">
                <h6><Link legacyBehavior href="/blog/details"><a>Real Estate Investing 101: Essential Tips for New Investors</a></Link>
                </h6>
                <div className="news-btm">
                  <div className="author-area">
                    <div className="author-img">
                      <img src="/assets/img/home1/author-02.png" alt="" />
                    </div>
                    <div className="author-content">
                      <h6>Daniel Scoot</h6>
                      <Link legacyBehavior href="/blog/standard"><a>Posted on - 03 April, 2023</a></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
            <div className="news-card">
              <div className="news-img">
                <Link legacyBehavior href="/blog/details"><a><img src="/assets/img/home1/news-03.png" alt="" /></a></Link>
                <div className="date">
                  <Link legacyBehavior href="/blog/standard"><a>Industrial</a></Link>
                </div>
              </div>
              <div className="content">
                <h6><Link legacyBehavior href="/blog/details"><a>The Hot Real Estate Market: Tips for Buyers and Sellers</a></Link>
                </h6>
                <div className="news-btm">
                  <div className="author-area">
                    <div className="author-img">
                      <img src="/assets/img/home1/author-03.png" alt="" />
                    </div>
                    <div className="author-content">
                      <h6>Mulish Kary</h6>
                      <Link legacyBehavior href="/blog/standard"><a>Posted on - 03 April, 2023</a></Link>
                    </div>
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

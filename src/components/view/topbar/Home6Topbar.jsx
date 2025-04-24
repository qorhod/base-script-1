import Link from 'next/link'
import React from 'react'

const Home6Topbar = () => {
  return (
    <div className="top-bar style-6">
  <div className="logo-and-menu">
    <div className="company-logo">
      <Link legacyBehavior href="/"><a><img src="/assets/img/logo.svg" alt="" /></a></Link>
    </div>
    <div className="menu">
      <ul>
        <li><Link legacyBehavior href="/property-listing-no-sidebar"><a>Newly Listed Home</a></Link></li>
        <li><Link legacyBehavior href="/property-listing-no-sidebar"><a>Lowest Price</a></Link></li>
        <li><Link legacyBehavior href="/special-offer"><a>Offer</a></Link></li>
      </ul>
    </div>
  </div>
  <div className="topbar-right">
    <ul>
      <li>
        <div className="hotline-area d-lg-flex d-none">
          <div className="icon">
            <img src="/assets/img/home1/icon/hotline-icon.svg" alt="" />
          </div>
          <div className="content">
            <span>To More Inquiry</span>
            <h6><a href="tel:+990737621432">+990-737 621 432</a></h6>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>

  )
}

export default Home6Topbar

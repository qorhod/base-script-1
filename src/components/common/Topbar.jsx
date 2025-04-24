import Link from 'next/link'
import React from 'react'
import LogoComponent from "@/components/view/logo/LogoComponent";

const Topbar = () => {
  return (
    <div className="top-bar">
        <div className="company-logo">
            {/* <Link legacyBehavior href="/"><a><img src="/assets/img/logo.svg" alt="" /></a></Link> */}
            <LogoComponent></LogoComponent>
        </div>
        <div className="search-area">
            <form>
            <div className="form-inner">
                <input type="text" placeholder="Search your projects" />
                <button type="submit"><i className="bi bi-search" /></button>
            </div>
            </form>
        </div>
        <div className="topbar-right">
            <div className="hotline-area d-xl-flex d-none">
            <div className="icon">
                <img src="/assets/img/home1/icon/hotline-icon.svg" alt="" />
            </div>
            <div className="content">
                <span>To More Inquiry</span>
                <h6><a href="tel:+990737621432">+990-737 621 432</a></h6>
            </div>
            </div>
        </div>
    </div>

  )
}

export default Topbar

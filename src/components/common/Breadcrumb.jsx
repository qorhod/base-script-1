import Link from 'next/link'
import React from 'react'

const Breadcrumb = ({pageTitle,pageName}) => {
  return (
    <div className="inner-page-banner">
        <div className="banner-wrapper">
            <div className="container-fluid">
            <div className="banner-main-content-wrap">
                <div className="row">
                <div className="col-xl-6 col-lg-7 d-flex align-items-center">
                    <div className="banner-content">
                    <h1>{pageTitle}</h1>
                    <ul className="breadcrumb-list">
                        <li><Link legacyBehavior href="/"><a>Home</a></Link></li>
                        <li>{pageName}</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>

  )
}

export default Breadcrumb

"use client"
import Link from 'next/link'
import React, { useEffect, useReducer, useRef } from 'react'
import SignUpModal from '../uiModal/SignUpModal'
import LoginModal from '../uiModal/LoginModal'
import { usePathname } from 'next/navigation'
import LogoComponent from "@/components/view/logo/LogoComponent";


const initialState = {
  activeMenu: "",
  activeSubMenu: "",
  isSidebarOpen: false,
  isLeftSidebarOpen: false,
};
function reducer(state, action) {
    switch (action.type) {
      case "TOGGLE_MENU":
        return {
          ...state,
  
          activeMenu: state.activeMenu === action.menu ? "" : action.menu,
          activeSubMenu:
            state.activeMenu === action.menu ? state.activeSubMenu : "",
        };
      case "TOGGLE_SUB_MENU":
        return {
          ...state,
          activeSubMenu:
            state.activeSubMenu === action.subMenu ? "" : action.subMenu,
        };
      case "TOGGLE_SIDEBAR":
        return {
          ...state,
          isSidebarOpen: !state.isSidebarOpen,
        };
      case "setScrollY":
        return { ...state, scrollY: action.payload };
      case "TOGGLE_LEFT_SIDEBAR":
        return {
          ...state,
          isLeftSidebarOpen: !state.isLeftSidebarOpen,
        };
      default:
        return state;
    }
  }

const Header = () => {
  const domainName = "ahmad"; // اجلب هذا الديناميكياً من مصدر مناسب

  const [state, dispatch] = useReducer(reducer, initialState);
  const headerRef = useRef(null);
 const pathName = usePathname()
 const className="false"
  const handleScroll = () => {
    const { scrollY } = window;
    dispatch({ type: "setScrollY", payload: scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = (menu) => {
      dispatch({ type: "TOGGLE_MENU", menu });
    };
  
    const toggleSubMenu = (subMenu) => {
      dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
    };
    const toggleSidebar = () => {
      dispatch({ type: "TOGGLE_MENU", menu: "" });
      dispatch({ type: "TOGGLE_SUB_MENU", subMenu: "" });
      dispatch({ type: "TOGGLE_SIDEBAR" });
    };
  return (
    <>
    <SignUpModal/>
    <LoginModal/>
    <header  ref={headerRef} className={`header-area style-1 ${state.scrollY > 10 ?"sticky":""}`}>
      <div className="header-logo d-lg-none d-flex">
        {/* <Link legacyBehavior href="/"><a><img alt="image" className="img-fluid" src="/assets/img/logo.svg" /></a></Link> */}
        <LogoComponent></LogoComponent>
      </div>
      <div className={`main-menu ${state.isSidebarOpen ? "show-menu" : ""}`}>
        <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
          <div className="mobile-logo-wrap">
            {/* <Link legacyBehavior href="/"><a><img alt="image" src="/assets/img/logo.svg" /></a></Link> */}
            <LogoComponent></LogoComponent>

          </div>
        </div>
        <ul className="menu-list">
          <li className={`menu-item-has-children ${ pathName === "/" ? "active" : ""}`}>
          <a href="#" className={`drop-down ${state.activeMenu === "home-one" ? "active" : ""}`}>Home</a><i  onClick={() => toggleMenu("home-one")} className={`bi bi-${state.activeMenu === "home-one" ?"dash":"plus"} dropdown-icon`} />
          <ul className={`sub-menu ${ state.activeMenu === "home-one" ? "d-block" : ""}`}>
              <li className={pathName.startsWith("/")?"active":""}><Link legacyBehavior href="/"><a>Home 01</a></Link></li>
              <li><Link legacyBehavior href="/index2"><a>Home 02</a></Link></li>
              <li><Link legacyBehavior href="/index3"><a>Home 03</a></Link></li>
              <li><Link legacyBehavior href="/index4"><a>Home 04</a></Link></li>
              <li><Link legacyBehavior href="/index5"><a>Home 05</a></Link></li>
              <li><Link legacyBehavior href="/index6"><a>Home 06</a></Link></li>
            </ul>
          </li>
          <li className="position-inherit">
            <a href="#" className="drop-down">FOR SALE</a>
            <i onClick={() => toggleMenu("forSale")} className={`bi bi-${state.activeMenu === "forSale" ?"dash":"plus"} dropdown-icon`} />
            <div className={`${state.activeMenu === "forSale"?"d-block":""}mega-menu`}>
              <ul className="menu-row">
                <li className="menu-single-item">
                  <h6>Apartment Types</h6>
                  <ul>
                    <li><Link legacyBehavior href="/property-list"><a>Houses (10)</a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>Industires (13)</a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>Home Twon (33)</a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>Development (15)</a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>Health Care (20)</a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>Office (10)</a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>Banglow (10)</a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>Hotel (10)</a></Link></li>
                    <li className="explore-more-btn">
                      <Link legacyBehavior href="/property-list"><a>Explore More <i className="bi bi-arrow-right-short" /></a></Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-single-item">
                  <h6>Popular Cities </h6>
                  <ul>
                    <li><Link legacyBehavior href="/property-list"><a>Panama City (10)<img src="/assets/img/menu-icon/panama.svg" alt="" /></a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>Sydne City (10)<img src="/assets/img/menu-icon/sydne.svg" alt="" /></a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>Melbourne City (10)<img src="/assets/img/menu-icon/melbourne.svg" alt="" /></a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>New Delhi (10)<img src="/assets/img/menu-icon/delhi.svg" alt="" /></a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>New York (10)<img src="/assets/img/menu-icon/newYork.svg" alt="" /></a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>Menchester City (10)<img src="/assets/img/menu-icon/menchester.svg" alt="" /></a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>City of Greece (10)<img src="/assets/img/menu-icon/greece.svg" alt="" /></a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>City of Abu-dabi (10)<img src="/assets/img/menu-icon/abudabi.svg" alt="" /></a></Link></li>
                    <li className="explore-more-btn">
                      <Link legacyBehavior href="/property-list"><a>Explore More <i className="bi bi-arrow-right-short" /></a></Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-single-item d-lg-block d-none">
                  <div className="menu-insight">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={10} height={12} viewBox="0 0 10 12">
                        <path opacity="0.3" d="M8.59795 5.5556L1.54272 0.996831C0.87732 0.566884 0 1.04453 0 1.83675V10.303C0 11.0649 0.81799 11.547 1.4845 11.1778L8.53973 7.2703C9.20066 6.90425 9.23253 5.96563 8.59795 5.5556Z" />
                      </svg> Latest Insights
                    </span>
                    <div className="insight-wrap">
                      <div className="insights-content">
                        <h6><Link legacyBehavior href="/blog-details"><a>The Rise of Remote Work: How It's Shaping Real Estate Trends</a></Link></h6>
                      </div>
                      <div className="insights-img">
                        <Link legacyBehavior href="/blog-details"><a><img src="/assets/img/home1/insights-img.png" alt="" /></a></Link>
                      </div>
                      <div className="explore-more-btn">
                        <Link legacyBehavior href="/blog-details"><a>Read Insight <i className="bi bi-arrow-right-short" /></a></Link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="position-inherit">
            <a href="#" className="drop-down">FOR RENT</a>
            <i onClick={() => toggleMenu("forRent")} className={`bi bi-${state.activeMenu === "forRent" ?"dash":"plus"} dropdown-icon`} />
            <div className={`${state.activeMenu === "forRent"?"d-block":""}mega-menu`}>
              <ul className="menu-row">
                <li className="menu-single-item">
                  <h6>Apartment Types</h6>
                  <ul>
                    <li><Link legacyBehavior href="/property-list"><a>Houses (10)</a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>Industires (13)</a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>Home Twon (33)</a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>Development (15)</a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>Health Care (20)</a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>Office (10)</a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>Banglow (10)</a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>Hotel (10)</a></Link></li>
                    <li className="explore-more-btn">
                      <Link legacyBehavior href="/property-list"><a>Explore More <i className="bi bi-arrow-right-short" /></a></Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-single-item">
                  <h6>Popular Cities </h6>
                  <ul>
                    <li><Link legacyBehavior href="/property-list"><a>Panama City (10)<img src="/assets/img/menu-icon/panama.svg" alt="" /></a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>Sydne City (10)<img src="/assets/img/menu-icon/sydne.svg" alt="" /></a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>Melbourne City (10)<img src="/assets/img/menu-icon/melbourne.svg" alt="" /></a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>New Delhi (10)<img src="/assets/img/menu-icon/delhi.svg" alt="" /></a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>New York (10)<img src="/assets/img/menu-icon/newYork.svg" alt="" /></a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>Menchester City (10)<img src="/assets/img/menu-icon/menchester.svg" alt="" /></a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>City of Greece (10)<img src="/assets/img/menu-icon/greece.svg" alt="" /></a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>City of Abu-dabi (10)<img src="/assets/img/menu-icon/abudabi.svg" alt="" /></a></Link></li>
                    <li className="explore-more-btn">
                      <Link legacyBehavior href="/property-list"><a>Explore More <i className="bi bi-arrow-right-short" /></a></Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-single-item d-lg-block d-none">
                  <div className="menu-insight">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={10} height={12} viewBox="0 0 10 12">
                        <path opacity="0.3" d="M8.59795 5.5556L1.54272 0.996831C0.87732 0.566884 0 1.04453 0 1.83675V10.303C0 11.0649 0.81799 11.547 1.4845 11.1778L8.53973 7.2703C9.20066 6.90425 9.23253 5.96563 8.59795 5.5556Z" />
                      </svg> Latest Insights
                    </span>
                    <div className="insight-wrap">
                      <div className="insights-content">
                        <h6><Link legacyBehavior href="/blog-details"><a>The Rise of Remote Work: How It's Shaping Real Estate Trends</a></Link></h6>
                      </div>
                      <div className="insights-img">
                        <Link legacyBehavior href="/blog-details"><a><img src="/assets/img/home1/insights-img.png" alt="" /></a></Link>
                      </div>
                      <div className="explore-more-btn">
                        <a href="blog-details">Read Insight <i className="bi bi-arrow-right-short" /></a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="position-inherit">
            <a href="#" className="drop-down">PROPERTY</a>
            <i onClick={() => toggleMenu("property")} className={`bi bi-${state.activeMenu === "property" ?"dash":"plus"} dropdown-icon`} />
            <div className={`${state.activeMenu === "property"?"d-block":""}mega-menu`}>
              <ul className="menu-row">
                <li className="menu-single-item">
                  <h6>Apartment Types</h6>
                  <ul>
                    <li><Link legacyBehavior href="/property-list"><a>Houses (10)</a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>Industires (13)</a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>Home Twon (33)</a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>Development (15)</a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>Health Care (20)</a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>Office (10)</a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>Banglow (10)</a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>Hotel (10)</a></Link></li>
                    <li className="explore-more-btn">
                      <Link legacyBehavior href="/property-list"><a>Explore More <i className="bi bi-arrow-right-short" /></a></Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-single-item">
                  <p>Popular Cities </p>
                  <ul>
                    <li><Link legacyBehavior href="/property-list"><a>Panama City (10)<img src="/assets/img/menu-icon/panama.svg" alt="" /></a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>Sydne City (10)<img src="/assets/img/menu-icon/sydne.svg" alt="" /></a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>Melbourne City (10)<img src="/assets/img/menu-icon/melbourne.svg" alt="" /></a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>New Delhi (10)<img src="/assets/img/menu-icon/delhi.svg" alt="" /></a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>New York (10)<img src="/assets/img/menu-icon/newYork.svg" alt="" /></a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>Menchester City (10)<img src="/assets/img/menu-icon/menchester.svg" alt="" /></a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>City of Greece (10)<img src="/assets/img/menu-icon/greece.svg" alt="" /></a></Link></li>
                    <li><Link legacyBehavior href="/property-list"><a>City of Abu-dabi (10)<img src="/assets/img/menu-icon/abudabi.svg" alt="" /></a></Link></li>
                    <li className="explore-more-btn">
                      <Link legacyBehavior href="/property-list"><a>Explore More <i className="bi bi-arrow-right-short" /></a></Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-single-item d-lg-block d-none">
                  <div className="menu-insight">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={10} height={12} viewBox="0 0 10 12">
                        <path opacity="0.3" d="M8.59795 5.5556L1.54272 0.996831C0.87732 0.566884 0 1.04453 0 1.83675V10.303C0 11.0649 0.81799 11.547 1.4845 11.1778L8.53973 7.2703C9.20066 6.90425 9.23253 5.96563 8.59795 5.5556Z" />
                      </svg> Latest Insights
                    </span>
                    <div className="insight-wrap">
                      <div className="insights-content">
                        <h6><Link legacyBehavior href="/blog-details"><a>The Rise of Remote Work: How It's Shaping Real Estate Trends</a></Link></h6>
                      </div>
                      <div className="insights-img">
                        <Link legacyBehavior href="/blog-details"><a><img src="/assets/img/home1/insights-img.png" alt="" /></a></Link>
                      </div>
                      <div className="explore-more-btn">
                        <a href="blog-details">Read Insight <i className="bi bi-arrow-right-short" /></a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="menu-item-has-children">
            <a href="#"  className={`drop-down ${state.activeMenu === "pages" ? "active" : ""}`}>Pages</a><i onClick={() => toggleMenu("pages")} className={`bi bi-${state.activeMenu === "pages" ?"dash":"plus"} dropdown-icon`} />
            <ul className={`sub-menu ${ state.activeMenu === "pages" ? "d-block" : ""}`}>
              <li className={pathName==="/about"?"active":""}><Link legacyBehavior href="/about"><a>About Us</a></Link></li>
              <li className={pathName.startsWith("/property-list")?"active":""}>
                <a href="#">Poperty List</a>
                <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" />
                <i  onClick={() => toggleSubMenu("submenu2")} className={`d-lg-none d-flex bi bi-${state.activeSubMenu ==="submenu2"?"dash":"plus"} dropdown-icon `} />
                <ul className={`sub-menu ${state.activeSubMenu === "submenu2" ? "d-block" : ""}`}>
                  <li className={pathName.endsWith("/left-sidebar")?"active":""}><Link legacyBehavior href="/property-list/left-sidebar"><a>Property Listing Left Sidebar</a></Link></li>
                  <li className={pathName.endsWith("/deatils1")?"active":""}><Link legacyBehavior href="/property-list/deatils1"><a>Property Details 01</a></Link></li>
                  <li className={pathName.endsWith("/deatils2")?"active":""}><Link legacyBehavior href="/property-list/deatils2"><a>Property Details 02</a></Link></li> 
                  <li className={pathName.endsWith("/right-sidebar")?"active":""}><Link legacyBehavior href="/property-list/right-sidebar"><a>Property Listing Right Sidebar</a></Link></li>
                </ul>
              </li>
              <li className={pathName.startsWith("/property-map")?"active":""}>
                <a href="#">Poperty Map</a>
                <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" />
                <i  onClick={() => toggleSubMenu("submenu3")} className={`d-lg-none d-flex bi bi-${state.activeSubMenu ==="submenu3"?"dash":"plus"} dropdown-icon `} />
                <ul className={`sub-menu ${state.activeSubMenu === "submenu3" ? "d-block" : ""}`}>
                  <li className={pathName.startsWith("/property-map")?"active":""} ><Link legacyBehavior href="/property-map"><a>Property Map Left</a></Link></li>
                </ul>
              </li>
              <li className={pathName.startsWith("/special-offer")?"active":""}><Link legacyBehavior href="/special-offer"><a>Special Offer</a></Link></li>
              <li  className={pathName.startsWith("/dashboard")?"active":""}><Link legacyBehavior href="/dashboard"><a>Dashboard</a></Link></li>
              <li className={pathName.startsWith("/shop")?"active":""}>
                <a href="#">Shop</a>
                <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" />
                <i  onClick={() => toggleSubMenu("shop")} className={`d-lg-none d-flex bi bi-${state.activeSubMenu ==="shop"?"dash":"plus"} dropdown-icon `} />
                <ul className={`sub-menu ${state.activeSubMenu === "shop" ? "d-block" : ""}`}>
                  <li className={pathName.startsWith("/shop")?"active":""}><Link legacyBehavior href="/shop"><a>Shop</a></Link></li>
                  <li className={pathName.endsWith("/product-details")?"active":""}><Link legacyBehavior href="/shop/product-details"><a>Product Details</a></Link></li>
                  <li className={pathName.endsWith("/cart")?"active":""}><Link legacyBehavior href="/shop/cart"><a>Cart</a></Link></li>
                  <li className={pathName.endsWith("/checkout")?"active":""}><Link legacyBehavior href="/shop/checkout"><a>Checkout</a></Link></li> 
                </ul>
              </li>
              <li className={pathName.startsWith("/blog")?"active":""}>
                <a href="#">Blog</a>
                <i className="d-lg-flex d-none bi bi-chevron-right dropdown-icon" />
                <i  onClick={() => toggleSubMenu("blog")} className={`d-lg-none d-flex bi bi-${state.activeSubMenu ==="blog"?"dash":"plus"} dropdown-icon `} />
                <ul className={`sub-menu ${state.activeSubMenu === "blog" ? "d-block" : ""}`}>
                  <li className={pathName.endsWith("/standard")?"active":""}><Link legacyBehavior href="/blog/standard"><a>Blog Standard</a></Link></li>
                  <li className={pathName.endsWith("/details")?"active":""}><Link legacyBehavior href="/blog/details"><a>Blog  Details</a></Link></li> 
                </ul>
              </li>
              <li  className={pathName.startsWith("/pricing-plan")?"active":""}><Link legacyBehavior href="/pricing-plan"><a>Pricing Plan</a></Link></li>
              <li className={pathName.startsWith("/pricing-checkout")?"active":""}><Link legacyBehavior href="/pricing-checkout "><a>Pricing Checkout</a></Link></li>
              <li className={pathName.startsWith("/faq")?"active":""}><Link legacyBehavior href="/faq"><a>FAQ's</a></Link></li>
              <li className={pathName.startsWith("/error")?"active":""}><Link legacyBehavior href="/error"><a>Error</a></Link></li>
              <li className={pathName.startsWith("/customer-review")?"active":""}><Link legacyBehavior href="/customer-review"><a>Customer Review </a></Link></li>
              <li className={pathName.startsWith("/return-enchange")?"active":""}><Link legacyBehavior href="/return-enchange"><a>Return &amp; Exchange</a></Link></li>
            </ul>
          </li>
          <li className={pathName.startsWith("/contact")?"active":""}>
            <Link legacyBehavior href="/contact"><a  className="drop-down">CONTACT US</a></Link>
          </li>
        </ul>
        <div className="topbar-right d-lg-none d-block">
          <button type="button" className="modal-btn header-cart-btn" data-bs-toggle="modal" data-bs-target="#logInModal01">
            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M14.4311 12.759C15.417 11.4291 16 9.78265 16 8C16 3.58169 12.4182 0 8 0C3.58169 0 0 3.58169 0 8C0 12.4182 3.58169 16 8 16C10.3181 16 12.4058 15.0141 13.867 13.4387C14.0673 13.2226 14.2556 12.9957 14.4311 12.759ZM13.9875 12C14.7533 10.8559 15.1999 9.48009 15.1999 8C15.1999 4.02355 11.9764 0.799983 7.99991 0.799983C4.02355 0.799983 0.799983 4.02355 0.799983 8C0.799983 9.48017 1.24658 10.8559 2.01245 12C2.97866 10.5566 4.45301 9.48194 6.17961 9.03214C5.34594 8.45444 4.79998 7.49102 4.79998 6.39995C4.79998 4.63266 6.23271 3.19993 8 3.19993C9.76729 3.19993 11.2 4.63266 11.2 6.39995C11.2 7.49093 10.654 8.45444 9.82039 9.03206C11.5469 9.48194 13.0213 10.5565 13.9875 12ZM13.4722 12.6793C12.3495 10.8331 10.3188 9.59997 8.00008 9.59997C5.68126 9.59997 3.65049 10.8331 2.52776 12.6794C3.84829 14.2222 5.80992 15.2 8 15.2C10.1901 15.2 12.1517 14.2222 13.4722 12.6793ZM8 8.79998C9.32551 8.79998 10.4 7.72554 10.4 6.39995C10.4 5.07444 9.32559 3.99992 8 3.99992C6.6744 3.99992 5.59997 5.07452 5.59997 6.40003C5.59997 7.72554 6.67449 8.79998 8 8.79998Z" />
            </svg>
            REGISTER/ LOGIN                  
          </button> 
          <Link legacyBehavior  href="/dashboard/add-property">
            <a className="primary-btn3">
            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
              <g clipPath="url(#clip0_485_136511)">
                <path d="M7 13.125C5.37555 13.125 3.81763 12.4797 2.66897 11.331C1.52031 10.1824 0.875 8.62445 0.875 7C0.875 5.37555 1.52031 3.81763 2.66897 2.66897C3.81763 1.52031 5.37555 0.875 7 0.875C8.62445 0.875 10.1824 1.52031 11.331 2.66897C12.4797 3.81763 13.125 5.37555 13.125 7C13.125 8.62445 12.4797 10.1824 11.331 11.331C10.1824 12.4797 8.62445 13.125 7 13.125ZM7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 8.85652 0.737498 10.637 2.05025 11.9497C3.36301 13.2625 5.14348 14 7 14Z" />
                <path d="M7 3.5C7.11603 3.5 7.22731 3.54609 7.30936 3.62814C7.39141 3.71019 7.4375 3.82147 7.4375 3.9375V6.5625H10.0625C10.1785 6.5625 10.2898 6.60859 10.3719 6.69064C10.4539 6.77269 10.5 6.88397 10.5 7C10.5 7.11603 10.4539 7.22731 10.3719 7.30936C10.2898 7.39141 10.1785 7.4375 10.0625 7.4375H7.4375V10.0625C7.4375 10.1785 7.39141 10.2898 7.30936 10.3719C7.22731 10.4539 7.11603 10.5 7 10.5C6.88397 10.5 6.77269 10.4539 6.69064 10.3719C6.60859 10.2898 6.5625 10.1785 6.5625 10.0625V7.4375H3.9375C3.82147 7.4375 3.71019 7.39141 3.62814 7.30936C3.54609 7.22731 3.5 7.11603 3.5 7C3.5 6.88397 3.54609 6.77269 3.62814 6.69064C3.71019 6.60859 3.82147 6.5625 3.9375 6.5625H6.5625V3.9375C6.5625 3.82147 6.60859 3.71019 6.69064 3.62814C6.77269 3.54609 6.88397 3.5 7 3.5Z" />
              </g>
              <defs>
                <clipPath id="clip0_485_136511">
                  <rect width={14} height={14} fill="white" />
                </clipPath>
              </defs>
            </svg>
            ADD PROPERTY
            </a>
          </Link>
        </div>
        <div className="hotline-area d-lg-none d-flex">
          <div className="icon">
            <svg width={26} height={27} viewBox="0 0 26 27" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5365 14.7303C12.5652 14.7257 11.6003 14.5735 10.6748 14.2788C9.94838 14.0358 9.29948 13.6044 8.79429 13.0286C8.28911 12.4529 7.94573 11.7534 7.79922 11.0016C7.47293 9.43032 8.06788 7.76895 9.43026 6.44297C9.57662 6.30051 9.7287 6.16404 9.88612 6.03391C10.5733 5.45852 11.3903 5.05903 12.2664 4.86992C13.1425 4.6808 14.0515 4.70775 14.9149 4.94843C15.7429 5.21282 16.4688 5.72699 16.9929 6.42036C17.5171 7.11374 17.8138 7.95233 17.8424 8.82106C17.906 9.84579 17.572 10.8556 16.9099 11.6403C16.6595 11.9557 16.3269 12.196 15.9488 12.3349C15.5708 12.4737 15.1617 12.5056 14.7667 12.4272C14.6037 12.3934 14.4491 12.327 14.3124 12.2321C14.1756 12.1371 14.0594 12.0156 13.9707 11.8747C13.891 11.7379 13.8399 11.5863 13.8202 11.4292C13.8006 11.2721 13.8128 11.1127 13.8563 10.9604C14.2354 9.52782 14.6206 7.35079 14.6245 7.32912C14.6344 7.27307 14.6553 7.21952 14.6859 7.17152C14.7165 7.12353 14.7562 7.08203 14.8029 7.04939C14.8495 7.01676 14.9021 6.99363 14.9577 6.98133C15.0133 6.96903 15.0707 6.96779 15.1268 6.97769C15.1828 6.9876 15.2364 7.00844 15.2844 7.03904C15.3324 7.06964 15.3739 7.10939 15.4065 7.15602C15.4391 7.20266 15.4623 7.25527 15.4746 7.31084C15.4869 7.36641 15.4881 7.42387 15.4782 7.47992C15.4622 7.57048 15.0826 9.71458 14.6943 11.1818C14.6806 11.2221 14.6753 11.2647 14.6787 11.3071C14.682 11.3495 14.694 11.3908 14.7138 11.4284C14.7738 11.5112 14.8642 11.5669 14.9651 11.5831C15.2071 11.6235 15.4554 11.597 15.6834 11.5065C15.9114 11.416 16.1103 11.2649 16.2586 11.0696C16.7728 10.4546 17.0303 9.66518 16.9779 8.86526C16.9573 8.17371 16.7231 7.5055 16.3075 6.95233C15.892 6.39916 15.3155 5.98813 14.657 5.77565C13.9317 5.57612 13.1686 5.55608 12.4338 5.71726C11.6989 5.87843 11.0143 6.21599 10.439 6.7008C10.2999 6.8165 10.1643 6.93739 10.0343 7.06393C9.36093 7.71912 8.28498 9.07889 8.64767 10.8252C8.76741 11.4247 9.04172 11.9826 9.44341 12.4435C9.8451 12.9044 10.3602 13.2524 10.9378 13.4529C12.9701 14.1011 15.8907 14.1796 17.429 12.2664C17.5019 12.1798 17.6058 12.1251 17.7185 12.114C17.8312 12.103 17.9438 12.1365 18.0321 12.2074C18.1203 12.2783 18.1774 12.381 18.1909 12.4934C18.2045 12.6058 18.1735 12.7191 18.1046 12.809C16.9667 14.2242 15.2351 14.7303 13.5365 14.7303Z" />
              <path d="M12.0531 12.4839C11.595 12.4919 11.1481 12.3418 10.7878 12.0588C9.9562 11.3933 9.93324 10.2367 10.1664 9.44935C10.2452 9.18719 10.3505 8.93369 10.4814 8.69319C10.8065 8.03717 11.3264 7.49763 11.9699 7.14839C12.3602 6.94593 12.8052 6.87437 13.2393 6.94429C13.6734 7.0142 14.0735 7.22188 14.3805 7.53665C14.6932 7.87932 14.9287 8.28509 15.0712 8.72656C15.107 8.83416 15.0992 8.95151 15.0495 9.05343C14.9998 9.15536 14.9121 9.23373 14.8052 9.27173C14.6984 9.30972 14.5809 9.30432 14.478 9.25668C14.3751 9.20903 14.295 9.12295 14.2548 9.01689C14.1521 8.69084 13.9813 8.39029 13.7539 8.13507C13.5751 7.95216 13.3414 7.83271 13.0884 7.79492C12.8354 7.75714 12.577 7.80309 12.3525 7.92577C11.8699 8.19795 11.4821 8.61118 11.241 9.11005C11.1398 9.29704 11.058 9.49394 10.9971 9.69765C10.8285 10.267 10.8658 11.0106 11.3303 11.3824C11.8381 11.7906 12.6953 11.6181 13.1776 11.2022C13.5368 10.8785 13.8454 10.5029 14.0932 10.0876C14.1232 10.0393 14.1624 9.99729 14.2087 9.96409C14.2549 9.93089 14.3073 9.90712 14.3627 9.89414C14.4181 9.88117 14.4756 9.87923 14.5317 9.88845C14.5879 9.89768 14.6417 9.91787 14.6901 9.94789C14.7384 9.97791 14.7804 10.0172 14.8136 10.0634C14.8468 10.1096 14.8706 10.162 14.8836 10.2174C14.8966 10.2728 14.8985 10.3303 14.8893 10.3864C14.88 10.4426 14.8598 10.4964 14.8298 10.5448C14.5361 11.0339 14.1705 11.4761 13.7452 11.8565C13.2714 12.2563 12.673 12.4782 12.0531 12.4839Z" />
              <path d="M24.7001 26.0015H1.30047C0.955797 26.0012 0.625342 25.8641 0.381624 25.6204C0.137905 25.3767 0.00083252 25.0462 0.000488366 24.7015V8.66847C0.000436861 8.58609 0.0238662 8.50541 0.0680306 8.43587C0.112195 8.36634 0.175264 8.31083 0.249847 8.27586C0.32443 8.24089 0.407436 8.2279 0.489137 8.23842C0.570838 8.24893 0.647849 8.28252 0.711144 8.33524L11.3432 17.1716C11.8096 17.557 12.3957 17.7678 13.0007 17.7678C13.6057 17.7678 14.1918 17.557 14.6582 17.1716L25.2894 8.33481C25.3527 8.28206 25.4298 8.24847 25.5115 8.23797C25.5933 8.22747 25.6763 8.24049 25.7509 8.27552C25.8255 8.31054 25.8886 8.36612 25.9327 8.43571C25.9768 8.50531 26.0002 8.58606 26.0001 8.66847V24.7015C25.9997 25.0462 25.8627 25.3767 25.6189 25.6204C25.3752 25.8641 25.0448 26.0012 24.7001 26.0015ZM0.867141 9.59189V24.7015C0.867141 24.9407 1.06127 25.1349 1.30047 25.1349H24.7001C24.815 25.1349 24.9252 25.0892 25.0065 25.008C25.0878 24.9267 25.1334 24.8165 25.1334 24.7015V9.59189L15.2111 17.8381C14.5891 18.3521 13.8075 18.6334 13.0007 18.6335C12.1938 18.6337 11.412 18.3527 10.7899 17.839L0.867141 9.59189Z" />
              <path d="M0.434172 9.10179C0.342147 9.10197 0.252454 9.07285 0.178087 9.01864C0.103719 8.96444 0.0485401 8.88797 0.020542 8.8003C-0.00745601 8.71264 -0.00681877 8.61834 0.0223615 8.53106C0.0515417 8.44379 0.10775 8.36807 0.182842 8.31487L4.08278 5.55025C4.17656 5.48377 4.29291 5.45726 4.40623 5.47656C4.51955 5.49586 4.62057 5.55939 4.68705 5.65316C4.75354 5.74694 4.78005 5.86329 4.76075 5.97662C4.74145 6.08994 4.67792 6.19095 4.58414 6.25744L0.684201 9.02206C0.611181 9.074 0.52378 9.10187 0.434172 9.10179ZM25.5662 9.10179C25.4766 9.10187 25.3892 9.074 25.3162 9.02206L21.4163 6.25744C21.3235 6.19062 21.2609 6.08984 21.242 5.97706C21.2232 5.86427 21.2498 5.74862 21.3159 5.65531C21.382 5.56201 21.4823 5.4986 21.5949 5.47892C21.7075 5.45924 21.8234 5.48488 21.9172 5.55025L25.8171 8.31487C25.8922 8.36802 25.9483 8.44367 25.9775 8.53086C26.0067 8.61805 26.0075 8.71227 25.9796 8.79989C25.9517 8.88751 25.8966 8.96399 25.8224 9.01826C25.7482 9.07253 25.6582 9.10179 25.5662 9.10179ZM17.0041 3.03522C16.9144 3.0353 16.8269 3.00744 16.7537 2.95549L14.6824 1.48651C14.2165 1.09272 13.6271 0.874976 13.0171 0.871254C12.4071 0.867532 11.8151 1.07807 11.3445 1.46615L9.24716 2.95549C9.15339 3.02198 9.03704 3.04848 8.92371 3.02918C8.81039 3.00988 8.70937 2.94635 8.64289 2.85258C8.57641 2.7588 8.5499 2.64245 8.5692 2.52912C8.5885 2.4158 8.65203 2.31479 8.74581 2.2483L10.8171 0.779325C11.4376 0.271931 12.2154 -0.00360176 13.017 3.55561e-05C13.8186 0.00367287 14.5938 0.286253 15.2097 0.799258L17.255 2.2483C17.3301 2.3015 17.3863 2.37722 17.4155 2.46449C17.4447 2.55177 17.4453 2.64607 17.4173 2.73373C17.3893 2.8214 17.3342 2.89787 17.2598 2.95207C17.1854 3.00628 17.0957 3.0354 17.0037 3.03522H17.0041ZM0.715401 25.7675C0.626173 25.7677 0.539066 25.7403 0.465979 25.6891C0.392892 25.638 0.337387 25.5655 0.307046 25.4815C0.276706 25.3976 0.273008 25.3064 0.296459 25.2203C0.31991 25.1342 0.369366 25.0575 0.438072 25.0005L10.3266 16.7847C10.3704 16.7483 10.4209 16.7209 10.4753 16.7041C10.5296 16.6873 10.5868 16.6813 10.6435 16.6865C10.7001 16.6918 10.7552 16.7082 10.8056 16.7347C10.8559 16.7612 10.9006 16.7974 10.9369 16.8412C10.9733 16.885 11.0007 16.9355 11.0175 16.9899C11.0343 17.0443 11.0403 17.1014 11.0351 17.1581C11.0298 17.2148 11.0134 17.2699 10.9869 17.3202C10.9604 17.3706 10.9242 17.4152 10.8804 17.4516L0.991863 25.6674C0.914246 25.7321 0.816424 25.7675 0.715401 25.7675ZM25.2846 25.7675C25.1835 25.7676 25.0857 25.7322 25.0081 25.6674L15.1196 17.4516C15.0747 17.4156 15.0374 17.371 15.0099 17.3204C14.9824 17.2699 14.9652 17.2143 14.9594 17.1571C14.9536 17.0998 14.9593 17.042 14.9761 16.9869C14.9929 16.9319 15.0205 16.8807 15.0573 16.8365C15.0941 16.7922 15.1393 16.7557 15.1903 16.7291C15.2414 16.7025 15.2972 16.6863 15.3546 16.6816C15.4119 16.6768 15.4697 16.6835 15.5244 16.7013C15.5791 16.719 15.6298 16.7475 15.6734 16.7851L25.5619 25.001C25.6306 25.0579 25.6801 25.1347 25.7035 25.2207C25.727 25.3068 25.7233 25.3981 25.6929 25.482C25.6626 25.5659 25.6071 25.6384 25.534 25.6896C25.4609 25.7408 25.3738 25.7677 25.2846 25.7675Z" />
              <path d="M21.667 12.343C21.5521 12.343 21.4419 12.2974 21.3606 12.2161C21.2793 12.1348 21.2337 12.0246 21.2337 11.9097V3.03864C21.2324 3.0473 21.2151 3.03517 21.186 3.03517H4.81495C4.80548 3.0346 4.79598 3.03595 4.78704 3.03916C4.77811 3.04236 4.76991 3.04734 4.76295 3.0538L4.76729 11.9097C4.76729 12.0246 4.72163 12.1348 4.64037 12.2161C4.5591 12.2974 4.44889 12.343 4.33396 12.343C4.21904 12.343 4.10882 12.2974 4.02755 12.2161C3.94629 12.1348 3.90063 12.0246 3.90063 11.9097V3.03517C3.90744 2.79916 4.00747 2.57546 4.17883 2.41303C4.35019 2.25061 4.57892 2.16269 4.81495 2.16852H21.186C21.4221 2.16269 21.6508 2.25061 21.8222 2.41303C21.9935 2.57546 22.0935 2.79916 22.1003 3.03517V11.9097C22.1003 12.0246 22.0547 12.1348 21.9734 12.2161C21.8922 12.2974 21.7819 12.343 21.667 12.343Z" />
            </svg>
          </div>
          <div className="content">
            <span>To More Inquiry</span>
            <h6><a href="tel:+990737621432">+990-737 621 432</a></h6>
          </div>
        </div>
      </div>
      <div className="nav-right d-flex jsutify-content-end align-items-center">   
        <button type="button" className="modal-btn header-cart-btn d-lg-flex d-none" data-bs-toggle="modal" data-bs-target="#logInModal01">
          <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.4311 12.759C15.417 11.4291 16 9.78265 16 8C16 3.58169 12.4182 0 8 0C3.58169 0 0 3.58169 0 8C0 12.4182 3.58169 16 8 16C10.3181 16 12.4058 15.0141 13.867 13.4387C14.0673 13.2226 14.2556 12.9957 14.4311 12.759ZM13.9875 12C14.7533 10.8559 15.1999 9.48009 15.1999 8C15.1999 4.02355 11.9764 0.799983 7.99991 0.799983C4.02355 0.799983 0.799983 4.02355 0.799983 8C0.799983 9.48017 1.24658 10.8559 2.01245 12C2.97866 10.5566 4.45301 9.48194 6.17961 9.03214C5.34594 8.45444 4.79998 7.49102 4.79998 6.39995C4.79998 4.63266 6.23271 3.19993 8 3.19993C9.76729 3.19993 11.2 4.63266 11.2 6.39995C11.2 7.49093 10.654 8.45444 9.82039 9.03206C11.5469 9.48194 13.0213 10.5565 13.9875 12ZM13.4722 12.6793C12.3495 10.8331 10.3188 9.59997 8.00008 9.59997C5.68126 9.59997 3.65049 10.8331 2.52776 12.6794C3.84829 14.2222 5.80992 15.2 8 15.2C10.1901 15.2 12.1517 14.2222 13.4722 12.6793ZM8 8.79998C9.32551 8.79998 10.4 7.72554 10.4 6.39995C10.4 5.07444 9.32559 3.99992 8 3.99992C6.6744 3.99992 5.59997 5.07452 5.59997 6.40003C5.59997 7.72554 6.67449 8.79998 8 8.79998Z" />
          </svg>
          REGISTER/ LOGIN                  
        </button>         
        <Link legacyBehavior href="/dashboard/add-property">
          <a className="primary-btn3 d-lg-flex d-none">
          <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
            <g clipPath="url(#clip0_485_1365)">
              <path d="M7 13.125C5.37555 13.125 3.81763 12.4797 2.66897 11.331C1.52031 10.1824 0.875 8.62445 0.875 7C0.875 5.37555 1.52031 3.81763 2.66897 2.66897C3.81763 1.52031 5.37555 0.875 7 0.875C8.62445 0.875 10.1824 1.52031 11.331 2.66897C12.4797 3.81763 13.125 5.37555 13.125 7C13.125 8.62445 12.4797 10.1824 11.331 11.331C10.1824 12.4797 8.62445 13.125 7 13.125ZM7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 8.85652 0.737498 10.637 2.05025 11.9497C3.36301 13.2625 5.14348 14 7 14Z" />
              <path d="M7 3.5C7.11603 3.5 7.22731 3.54609 7.30936 3.62814C7.39141 3.71019 7.4375 3.82147 7.4375 3.9375V6.5625H10.0625C10.1785 6.5625 10.2898 6.60859 10.3719 6.69064C10.4539 6.77269 10.5 6.88397 10.5 7C10.5 7.11603 10.4539 7.22731 10.3719 7.30936C10.2898 7.39141 10.1785 7.4375 10.0625 7.4375H7.4375V10.0625C7.4375 10.1785 7.39141 10.2898 7.30936 10.3719C7.22731 10.4539 7.11603 10.5 7 10.5C6.88397 10.5 6.77269 10.4539 6.69064 10.3719C6.60859 10.2898 6.5625 10.1785 6.5625 10.0625V7.4375H3.9375C3.82147 7.4375 3.71019 7.39141 3.62814 7.30936C3.54609 7.22731 3.5 7.11603 3.5 7C3.5 6.88397 3.54609 6.77269 3.62814 6.69064C3.71019 6.60859 3.82147 6.5625 3.9375 6.5625H6.5625V3.9375C6.5625 3.82147 6.60859 3.71019 6.69064 3.62814C6.77269 3.54609 6.88397 3.5 7 3.5Z" />
            </g>
            <defs>
              <clipPath id="clip0_485_1365">
                <rect width={14} height={14} fill="white" />
              </clipPath>
            </defs>
          </svg>
          ADD PROPERTY
          </a>
        </Link>
        <div className={`sidebar-button mobile-menu-btn ${state.isSidebarOpen ? "active" : "" }`} onClick={toggleSidebar}>
          <span />
        </div>
      </div>
    </header>
  </>
  )
}

export default Header
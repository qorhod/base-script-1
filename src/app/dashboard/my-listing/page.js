"use client"
import { useSidebar } from '@/context/SidebarContext';
import SelectComponent from '@/uitils/SelectComponent'
import Link from 'next/link'
import React from 'react'



const PageLayousdad = () => {
  const { isOpen } = useSidebar();
  return (
  <div className={`main-content ${isOpen?"slide":""}`}>
    <div className="row">
      <div className="col-lg-12">
        <div className="main-content-title-profile mb-30">
          <div className="main-content-title">
            <h3>Property Listing</h3>
            <img src="/assets/img//dashboard/icon/property-listing-icon.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="property-search-area">
      <div className="row g-4 align-items-end">
        <div className="col-xl-10">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="form-inner">
                <label>Property Type</label>
                <SelectComponent placeholder={"filter"} options={["Development","Developments"]} />
            
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-inner">
                <label>Property Status</label>
                <SelectComponent placeholder={"filter"} options={["For Sells","For Sells"]} />
                
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-inner">
                <label>Location</label>
                <SelectComponent placeholder={"select"} options={["NewWork City","Melbourne City"]} />
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-2 d-flex justify-content-center">
          <div className="search-btn">
            <button type="submit" className="primary-btn3">
              <i className="bi bi-search" /> Search
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="my-listing-table-wrapper">
      <ul className="nav nav-pills" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="active-tab" data-bs-toggle="pill" data-bs-target="#active" type="button" role="tab" aria-controls="active" aria-selected="true">Active (10)</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pending-tab" data-bs-toggle="pill" data-bs-target="#pending" type="button" role="tab" aria-controls="pending" aria-selected="false">Pending (10)</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="expired-tab" data-bs-toggle="pill" data-bs-target="#expired" type="button" role="tab" aria-controls="expired" aria-selected="false">Expired (23)</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="rejected-tab" data-bs-toggle="pill" data-bs-target="#rejected" type="button" role="tab" aria-controls="rejected" aria-selected="false">Rejected (06)</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="inactive-tab" data-bs-toggle="pill" data-bs-target="#inactive" type="button" role="tab" aria-controls="inactive" aria-selected="false">Inactive (19)</button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="active" role="tabpanel">
          <div className="recent-listing-area">
            <div className="recent-listing-table">
              <table className="eg-table2">
                <thead>
                  <tr>
                    <th>Property Info</th>
                    <th>Listed Date</th>
                    <th>Price Range</th>
                    <th>Property Status</th>
                    <th>Area (Sq.ft)</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Property Info">
                      <div className="property-info-wrapper">
                        <div className="property-info-img">
                          <img src="/assets/img//dashboard/property-info-img1.png" alt="" />
                        </div>
                        <div className="property-info-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                          </div>
                          <h6><Link legacyBehavior href="/property-list/left-sidebar"><a>Willow Creek Residence</a></Link></h6>
                          <Link legacyBehavior href="/property-list/deatils1">
                            <a  className="view-details">
                            <img src="/assets/img//dashboard/icon/view-details-icon.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td data-label="Listed Date" className="table-product">
                      <span>04 April, 2023</span>
                    </td>
                    <td data-label="Price Range">
                      <span>$34,542.000</span>
                    </td>
                    <td data-label="Property Status">
                      <span className="yellow">For Sale</span>
                    </td>
                    <td data-label="Area (Sq.ft)">
                      <span>34,542 sq.ft</span>
                    </td>
                    <td data-label="Status">
                      <span>Active</span>
                    </td>
                    <td data-label="Action">
                      <ul className="action-buttons">
                        <li><img src="/assets/img//dashboard/icon/action-edit-btn.svg" alt="" /></li>
                        <li><img src="/assets/img//dashboard/icon/action-delete-btn.svg" alt="" /></li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Property Info">
                      <div className="property-info-wrapper">
                        <div className="property-info-img">
                          <img src="/assets/img//dashboard/property-info-img2.png" alt="" />
                        </div>
                        <div className="property-info-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                          </div>
                          <h6><Link legacyBehavior href="/property-list/left-sidebar"><a>Harmony House</a></Link></h6>
                          <Link legacyBehavior href="/property-list/deatils1">
                            <a  className="view-details">
                            <img src="/assets/img//dashboard/icon/view-details-icon.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td data-label="Listed Date" className="table-product">
                      <span>04 April, 2023</span>
                    </td>
                    <td data-label="Price Range">
                      <span>$34,542.000</span>
                    </td>
                    <td data-label="Property Status">
                      <span className="black">For Rent</span>
                    </td>
                    <td data-label="Area (Sq.ft)">
                      <span>34,542 sq.ft</span>
                    </td>
                    <td data-label="Status">
                      <span>Active</span>
                    </td>
                    <td data-label="Action">
                      <ul className="action-buttons">
                        <li><img src="/assets/img//dashboard/icon/action-edit-btn.svg" alt="" /></li>
                        <li><img src="/assets/img//dashboard/icon/action-delete-btn.svg" alt="" /></li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Property Info">
                      <div className="property-info-wrapper">
                        <div className="property-info-img">
                          <img src="/assets/img//dashboard/property-info-img3.png" alt="" />
                        </div>
                        <div className="property-info-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                          </div>
                          <h6><Link legacyBehavior href="/property-list/left-sidebar"><a>Sunflower Cottage</a></Link></h6>
                          <Link legacyBehavior href="/property-list/deatils1">
                            <a  className="view-details">
                            <img src="/assets/img//dashboard/icon/view-details-icon.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td data-label="Listed Date" className="table-product">
                      <span>04 April, 2023</span>
                    </td>
                    <td data-label="Price Range">
                      <span>$34,542.000</span>
                    </td>
                    <td data-label="Property Status">
                      <span className="yellow">For Sale</span>
                    </td>
                    <td data-label="Area (Sq.ft)">
                      <span>34,542 sq.ft</span>
                    </td>
                    <td data-label="Status">
                      <span>Active</span>
                    </td>
                    <td data-label="Action">
                      <ul className="action-buttons">
                        <li><img src="/assets/img//dashboard/icon/action-edit-btn.svg" alt="" /></li>
                        <li><img src="/assets/img//dashboard/icon/action-delete-btn.svg" alt="" /></li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Property Info">
                      <div className="property-info-wrapper">
                        <div className="property-info-img">
                          <img src="/assets/img//dashboard/property-info-img4.png" alt="" />
                        </div>
                        <div className="property-info-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                          </div>
                          <h6><Link legacyBehavior href="/property-list/left-sidebar"><a>Sunset Retreat</a></Link></h6>
                          <Link legacyBehavior href="/property-list/deatils1">
                            <a  className="view-details">
                            <img src="/assets/img//dashboard/icon/view-details-icon.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td data-label="Listed Date" className="table-product">
                      <span>04 April, 2023</span>
                    </td>
                    <td data-label="Price Range">
                      <span>$34,542.000</span>
                    </td>
                    <td data-label="Property Status">
                      <span className="black">For Rent</span>
                    </td>
                    <td data-label="Area (Sq.ft)">
                      <span>34,542 sq.ft</span>
                    </td>
                    <td data-label="Status">
                      <span>Active</span>
                    </td>
                    <td data-label="Action">
                      <ul className="action-buttons">
                        <li><img src="/assets/img//dashboard/icon/action-edit-btn.svg" alt="" /></li>
                        <li><img src="/assets/img//dashboard/icon/action-delete-btn.svg" alt="" /></li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="pagination-area">
                <ul className="paginations">
                  <li className="page-item active">
                    <a href="#">01</a>
                  </li>
                  <li className="page-item">
                    <a href="#">02</a>
                  </li>
                  <li className="page-item">
                    <a href="#">03</a>
                  </li>
                </ul>
                <ul className="paginations-buttons">
                  <li>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width={7} height={14} viewBox="0 0 7 14">
                        <path d="M0 7.00008L7 0L2.54545 7.00008L7 14L0 7.00008Z" />
                      </svg>
                      Prev
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Next
                      <svg xmlns="http://www.w3.org/2000/svg" width={7} height={14} viewBox="0 0 7 14" fill="none">
                        <path d="M7 7.00008L0 0L4.45455 7.00008L0 14L7 7.00008Z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="pending" role="tabpanel">
          <div className="recent-listing-area">
            <div className="recent-listing-table">
              <table className="eg-table2">
                <thead>
                  <tr>
                    <th>Property Info</th>
                    <th>Listed Date</th>
                    <th>Price Range</th>
                    <th>Property Status</th>
                    <th>Area (Sq.ft)</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Property Info">
                      <div className="property-info-wrapper">
                        <div className="property-info-img">
                          <img src="/assets/img//dashboard/property-info-img1.png" alt="" />
                        </div>
                        <div className="property-info-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                          </div>
                          <h6><Link legacyBehavior href="/property-list/left-sidebar"><a>Willow Creek Residence</a></Link></h6>
                          <Link legacyBehavior href="/property-list/deatils1">
                            <a  className="view-details">
                            <img src="/assets/img//dashboard/icon/view-details-icon.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td data-label="Listed Date" className="table-product">
                      <span>04 April, 2023</span>
                    </td>
                    <td data-label="Price Range">
                      <span>$34,542.000</span>
                    </td>
                    <td data-label="Property Status">
                      <span className="yellow">For Sale</span>
                    </td>
                    <td data-label="Area (Sq.ft)">
                      <span>34,542 sq.ft</span>
                    </td>
                    <td data-label="Status">
                      <span>Active</span>
                    </td>
                    <td data-label="Action">
                      <ul className="action-buttons">
                        <li><img src="/assets/img//dashboard/icon/action-edit-btn.svg" alt="" /></li>
                        <li><img src="/assets/img//dashboard/icon/action-delete-btn.svg" alt="" /></li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Property Info">
                      <div className="property-info-wrapper">
                        <div className="property-info-img">
                          <img src="/assets/img//dashboard/property-info-img2.png" alt="" />
                        </div>
                        <div className="property-info-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                          </div>
                          <h6><Link legacyBehavior href="/property-list/left-sidebar"><a>Harmony House</a></Link></h6>
                          <Link legacyBehavior href="/property-list/deatils1">
                            <a  className="view-details">
                            <img src="/assets/img//dashboard/icon/view-details-icon.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td data-label="Listed Date" className="table-product">
                      <span>04 April, 2023</span>
                    </td>
                    <td data-label="Price Range">
                      <span>$34,542.000</span>
                    </td>
                    <td data-label="Property Status">
                      <span className="black">For Rent</span>
                    </td>
                    <td data-label="Area (Sq.ft)">
                      <span>34,542 sq.ft</span>
                    </td>
                    <td data-label="Status">
                      <span>Active</span>
                    </td>
                    <td data-label="Action">
                      <ul className="action-buttons">
                        <li><img src="/assets/img//dashboard/icon/action-edit-btn.svg" alt="" /></li>
                        <li><img src="/assets/img//dashboard/icon/action-delete-btn.svg" alt="" /></li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Property Info">
                      <div className="property-info-wrapper">
                        <div className="property-info-img">
                          <img src="/assets/img//dashboard/property-info-img3.png" alt="" />
                        </div>
                        <div className="property-info-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                          </div>
                          <h6><Link legacyBehavior href="/property-list/left-sidebar"><a>Sunflower Cottage</a></Link></h6>
                          <Link legacyBehavior href="/property-list/deatils1">
                            <a  className="view-details">
                            <img src="/assets/img//dashboard/icon/view-details-icon.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td data-label="Listed Date" className="table-product">
                      <span>04 April, 2023</span>
                    </td>
                    <td data-label="Price Range">
                      <span>$34,542.000</span>
                    </td>
                    <td data-label="Property Status">
                      <span className="yellow">For Sale</span>
                    </td>
                    <td data-label="Area (Sq.ft)">
                      <span>34,542 sq.ft</span>
                    </td>
                    <td data-label="Status">
                      <span>Active</span>
                    </td>
                    <td data-label="Action">
                      <ul className="action-buttons">
                        <li><img src="/assets/img//dashboard/icon/action-edit-btn.svg" alt="" /></li>
                        <li><img src="/assets/img//dashboard/icon/action-delete-btn.svg" alt="" /></li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Property Info">
                      <div className="property-info-wrapper">
                        <div className="property-info-img">
                          <img src="/assets/img//dashboard/property-info-img4.png" alt="" />
                        </div>
                        <div className="property-info-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                          </div>
                          <h6><Link legacyBehavior href="/property-list/left-sidebar"><a>Sunset Retreat</a></Link></h6>
                          <Link legacyBehavior href="/property-list/deatils1">
                            <a  className="view-details">
                            <img src="/assets/img//dashboard/icon/view-details-icon.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td data-label="Listed Date" className="table-product">
                      <span>04 April, 2023</span>
                    </td>
                    <td data-label="Price Range">
                      <span>$34,542.000</span>
                    </td>
                    <td data-label="Property Status">
                      <span className="black">For Rent</span>
                    </td>
                    <td data-label="Area (Sq.ft)">
                      <span>34,542 sq.ft</span>
                    </td>
                    <td data-label="Status">
                      <span>Active</span>
                    </td>
                    <td data-label="Action">
                      <ul className="action-buttons">
                        <li><img src="/assets/img//dashboard/icon/action-edit-btn.svg" alt="" /></li>
                        <li><img src="/assets/img//dashboard/icon/action-delete-btn.svg" alt="" /></li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="pagination-area">
                <ul className="paginations">
                  <li className="page-item active">
                    <a href="#">01</a>
                  </li>
                  <li className="page-item">
                    <a href="#">02</a>
                  </li>
                  <li className="page-item">
                    <a href="#">03</a>
                  </li>
                </ul>
                <ul className="paginations-buttons">
                  <li>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width={7} height={14} viewBox="0 0 7 14">
                        <path d="M0 7.00008L7 0L2.54545 7.00008L7 14L0 7.00008Z" />
                      </svg>
                      Prev
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Next
                      <svg xmlns="http://www.w3.org/2000/svg" width={7} height={14} viewBox="0 0 7 14" fill="none">
                        <path d="M7 7.00008L0 0L4.45455 7.00008L0 14L7 7.00008Z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="expired" role="tabpanel">
          <div className="recent-listing-area">
            <div className="recent-listing-table">
              <table className="eg-table2">
                <thead>
                  <tr>
                    <th>Property Info</th>
                    <th>Listed Date</th>
                    <th>Price Range</th>
                    <th>Property Status</th>
                    <th>Area (Sq.ft)</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Property Info">
                      <div className="property-info-wrapper">
                        <div className="property-info-img">
                          <img src="/assets/img//dashboard/property-info-img1.png" alt="" />
                        </div>
                        <div className="property-info-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                          </div>
                          <h6><Link legacyBehavior href="/property-list/left-sidebar"><a>Willow Creek Residence</a></Link></h6>
                          <Link legacyBehavior href="/property-list/deatils1">
                            <a  className="view-details">
                            <img src="/assets/img//dashboard/icon/view-details-icon.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td data-label="Listed Date" className="table-product">
                      <span>04 April, 2023</span>
                    </td>
                    <td data-label="Price Range">
                      <span>$34,542.000</span>
                    </td>
                    <td data-label="Property Status">
                      <span className="yellow">For Sale</span>
                    </td>
                    <td data-label="Area (Sq.ft)">
                      <span>34,542 sq.ft</span>
                    </td>
                    <td data-label="Status">
                      <span>Active</span>
                    </td>
                    <td data-label="Action">
                      <ul className="action-buttons">
                        <li><img src="/assets/img//dashboard/icon/action-edit-btn.svg" alt="" /></li>
                        <li><img src="/assets/img//dashboard/icon/action-delete-btn.svg" alt="" /></li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Property Info">
                      <div className="property-info-wrapper">
                        <div className="property-info-img">
                          <img src="/assets/img//dashboard/property-info-img2.png" alt="" />
                        </div>
                        <div className="property-info-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                          </div>
                          <h6><Link legacyBehavior href="/property-list/left-sidebar"><a>Harmony House</a></Link></h6>
                          <Link legacyBehavior href="/property-list/deatils1">
                            <a  className="view-details">
                            <img src="/assets/img//dashboard/icon/view-details-icon.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td data-label="Listed Date" className="table-product">
                      <span>04 April, 2023</span>
                    </td>
                    <td data-label="Price Range">
                      <span>$34,542.000</span>
                    </td>
                    <td data-label="Property Status">
                      <span className="black">For Rent</span>
                    </td>
                    <td data-label="Area (Sq.ft)">
                      <span>34,542 sq.ft</span>
                    </td>
                    <td data-label="Status">
                      <span>Active</span>
                    </td>
                    <td data-label="Action">
                      <ul className="action-buttons">
                        <li><img src="/assets/img//dashboard/icon/action-edit-btn.svg" alt="" /></li>
                        <li><img src="/assets/img//dashboard/icon/action-delete-btn.svg" alt="" /></li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Property Info">
                      <div className="property-info-wrapper">
                        <div className="property-info-img">
                          <img src="/assets/img//dashboard/property-info-img3.png" alt="" />
                        </div>
                        <div className="property-info-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                          </div>
                          <h6><Link legacyBehavior href="/property-list/left-sidebar"><a>Sunflower Cottage</a></Link></h6>
                          <Link legacyBehavior href="/property-list/deatils1">
                            <a  className="view-details">
                            <img src="/assets/img//dashboard/icon/view-details-icon.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td data-label="Listed Date" className="table-product">
                      <span>04 April, 2023</span>
                    </td>
                    <td data-label="Price Range">
                      <span>$34,542.000</span>
                    </td>
                    <td data-label="Property Status">
                      <span className="yellow">For Sale</span>
                    </td>
                    <td data-label="Area (Sq.ft)">
                      <span>34,542 sq.ft</span>
                    </td>
                    <td data-label="Status">
                      <span>Active</span>
                    </td>
                    <td data-label="Action">
                      <ul className="action-buttons">
                        <li><img src="/assets/img//dashboard/icon/action-edit-btn.svg" alt="" /></li>
                        <li><img src="/assets/img//dashboard/icon/action-delete-btn.svg" alt="" /></li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Property Info">
                      <div className="property-info-wrapper">
                        <div className="property-info-img">
                          <img src="/assets/img//dashboard/property-info-img4.png" alt="" />
                        </div>
                        <div className="property-info-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                          </div>
                          <h6><Link legacyBehavior href="/property-list/left-sidebar"><a>Sunset Retreat</a></Link></h6>
                          <Link legacyBehavior href="/property-list/deatils1">
                            <a  className="view-details">
                            <img src="/assets/img//dashboard/icon/view-details-icon.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td data-label="Listed Date" className="table-product">
                      <span>04 April, 2023</span>
                    </td>
                    <td data-label="Price Range">
                      <span>$34,542.000</span>
                    </td>
                    <td data-label="Property Status">
                      <span className="black">For Rent</span>
                    </td>
                    <td data-label="Area (Sq.ft)">
                      <span>34,542 sq.ft</span>
                    </td>
                    <td data-label="Status">
                      <span>Active</span>
                    </td>
                    <td data-label="Action">
                      <ul className="action-buttons">
                        <li><img src="/assets/img//dashboard/icon/action-edit-btn.svg" alt="" /></li>
                        <li><img src="/assets/img//dashboard/icon/action-delete-btn.svg" alt="" /></li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="pagination-area">
                <ul className="paginations">
                  <li className="page-item active">
                    <a href="#">01</a>
                  </li>
                  <li className="page-item">
                    <a href="#">02</a>
                  </li>
                  <li className="page-item">
                    <a href="#">03</a>
                  </li>
                </ul>
                <ul className="paginations-buttons">
                  <li>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width={7} height={14} viewBox="0 0 7 14">
                        <path d="M0 7.00008L7 0L2.54545 7.00008L7 14L0 7.00008Z" />
                      </svg>
                      Prev
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Next
                      <svg xmlns="http://www.w3.org/2000/svg" width={7} height={14} viewBox="0 0 7 14" fill="none">
                        <path d="M7 7.00008L0 0L4.45455 7.00008L0 14L7 7.00008Z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="rejected" role="tabpanel">
          <div className="recent-listing-area">
            <div className="recent-listing-table">
              <table className="eg-table2">
                <thead>
                  <tr>
                    <th>Property Info</th>
                    <th>Listed Date</th>
                    <th>Price Range</th>
                    <th>Property Status</th>
                    <th>Area (Sq.ft)</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Property Info">
                      <div className="property-info-wrapper">
                        <div className="property-info-img">
                          <img src="/assets/img//dashboard/property-info-img1.png" alt="" />
                        </div>
                        <div className="property-info-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                          </div>
                          <h6><Link legacyBehavior href="/property-list/left-sidebar"><a>Willow Creek Residence</a></Link></h6>
                          <Link legacyBehavior href="/property-list/deatils1">
                            <a  className="view-details">
                            <img src="/assets/img//dashboard/icon/view-details-icon.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td data-label="Listed Date" className="table-product">
                      <span>04 April, 2023</span>
                    </td>
                    <td data-label="Price Range">
                      <span>$34,542.000</span>
                    </td>
                    <td data-label="Property Status">
                      <span className="yellow">For Sale</span>
                    </td>
                    <td data-label="Area (Sq.ft)">
                      <span>34,542 sq.ft</span>
                    </td>
                    <td data-label="Status">
                      <span>Active</span>
                    </td>
                    <td data-label="Action">
                      <ul className="action-buttons">
                        <li><img src="/assets/img//dashboard/icon/action-edit-btn.svg" alt="" /></li>
                        <li><img src="/assets/img//dashboard/icon/action-delete-btn.svg" alt="" /></li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Property Info">
                      <div className="property-info-wrapper">
                        <div className="property-info-img">
                          <img src="/assets/img//dashboard/property-info-img2.png" alt="" />
                        </div>
                        <div className="property-info-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                          </div>
                          <h6><Link legacyBehavior href="/property-list/left-sidebar"><a>Harmony House</a></Link></h6>
                          <Link legacyBehavior href="/property-list/deatils1">
                            <a  className="view-details">
                            <img src="/assets/img//dashboard/icon/view-details-icon.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td data-label="Listed Date" className="table-product">
                      <span>04 April, 2023</span>
                    </td>
                    <td data-label="Price Range">
                      <span>$34,542.000</span>
                    </td>
                    <td data-label="Property Status">
                      <span className="black">For Rent</span>
                    </td>
                    <td data-label="Area (Sq.ft)">
                      <span>34,542 sq.ft</span>
                    </td>
                    <td data-label="Status">
                      <span>Active</span>
                    </td>
                    <td data-label="Action">
                      <ul className="action-buttons">
                        <li><img src="/assets/img//dashboard/icon/action-edit-btn.svg" alt="" /></li>
                        <li><img src="/assets/img//dashboard/icon/action-delete-btn.svg" alt="" /></li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Property Info">
                      <div className="property-info-wrapper">
                        <div className="property-info-img">
                          <img src="/assets/img//dashboard/property-info-img3.png" alt="" />
                        </div>
                        <div className="property-info-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                          </div>
                          <h6><Link legacyBehavior href="/property-list/left-sidebar"><a>Sunflower Cottage</a></Link></h6>
                          <Link legacyBehavior href="/property-list/deatils1">
                            <a  className="view-details">
                            <img src="/assets/img//dashboard/icon/view-details-icon.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td data-label="Listed Date" className="table-product">
                      <span>04 April, 2023</span>
                    </td>
                    <td data-label="Price Range">
                      <span>$34,542.000</span>
                    </td>
                    <td data-label="Property Status">
                      <span className="yellow">For Sale</span>
                    </td>
                    <td data-label="Area (Sq.ft)">
                      <span>34,542 sq.ft</span>
                    </td>
                    <td data-label="Status">
                      <span>Active</span>
                    </td>
                    <td data-label="Action">
                      <ul className="action-buttons">
                        <li><img src="/assets/img//dashboard/icon/action-edit-btn.svg" alt="" /></li>
                        <li><img src="/assets/img//dashboard/icon/action-delete-btn.svg" alt="" /></li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Property Info">
                      <div className="property-info-wrapper">
                        <div className="property-info-img">
                          <img src="/assets/img//dashboard/property-info-img4.png" alt="" />
                        </div>
                        <div className="property-info-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                          </div>
                          <h6><Link legacyBehavior href="/property-list/left-sidebar"><a>Sunset Retreat</a></Link></h6>
                          <Link legacyBehavior href="/property-list/deatils1">
                            <a  className="view-details">
                            <img src="/assets/img//dashboard/icon/view-details-icon.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td data-label="Listed Date" className="table-product">
                      <span>04 April, 2023</span>
                    </td>
                    <td data-label="Price Range">
                      <span>$34,542.000</span>
                    </td>
                    <td data-label="Property Status">
                      <span className="black">For Rent</span>
                    </td>
                    <td data-label="Area (Sq.ft)">
                      <span>34,542 sq.ft</span>
                    </td>
                    <td data-label="Status">
                      <span>Active</span>
                    </td>
                    <td data-label="Action">
                      <ul className="action-buttons">
                        <li><img src="/assets/img//dashboard/icon/action-edit-btn.svg" alt="" /></li>
                        <li><img src="/assets/img//dashboard/icon/action-delete-btn.svg" alt="" /></li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="pagination-area">
                <ul className="paginations">
                  <li className="page-item active">
                    <a href="#">01</a>
                  </li>
                  <li className="page-item">
                    <a href="#">02</a>
                  </li>
                  <li className="page-item">
                    <a href="#">03</a>
                  </li>
                </ul>
                <ul className="paginations-buttons">
                  <li>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width={7} height={14} viewBox="0 0 7 14">
                        <path d="M0 7.00008L7 0L2.54545 7.00008L7 14L0 7.00008Z" />
                      </svg>
                      Prev
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Next
                      <svg xmlns="http://www.w3.org/2000/svg" width={7} height={14} viewBox="0 0 7 14" fill="none">
                        <path d="M7 7.00008L0 0L4.45455 7.00008L0 14L7 7.00008Z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="inactive" role="tabpanel">
          <div className="recent-listing-area">
            <div className="recent-listing-table">
              <table className="eg-table2">
                <thead>
                  <tr>
                    <th>Property Info</th>
                    <th>Listed Date</th>
                    <th>Price Range</th>
                    <th>Property Status</th>
                    <th>Area (Sq.ft)</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label="Property Info">
                      <div className="property-info-wrapper">
                        <div className="property-info-img">
                          <img src="/assets/img//dashboard/property-info-img1.png" alt="" />
                        </div>
                        <div className="property-info-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                          </div>
                          <h6><Link legacyBehavior href="/property-list/left-sidebar"><a>Willow Creek Residence</a></Link></h6>
                          <Link legacyBehavior href="/property-list/deatils1">
                            <a  className="view-details">
                            <img src="/assets/img//dashboard/icon/view-details-icon.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td data-label="Listed Date" className="table-product">
                      <span>04 April, 2023</span>
                    </td>
                    <td data-label="Price Range">
                      <span>$34,542.000</span>
                    </td>
                    <td data-label="Property Status">
                      <span className="yellow">For Sale</span>
                    </td>
                    <td data-label="Area (Sq.ft)">
                      <span>34,542 sq.ft</span>
                    </td>
                    <td data-label="Status">
                      <span>Active</span>
                    </td>
                    <td data-label="Action">
                      <ul className="action-buttons">
                        <li><img src="/assets/img//dashboard/icon/action-edit-btn.svg" alt="" /></li>
                        <li><img src="/assets/img//dashboard/icon/action-delete-btn.svg" alt="" /></li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Property Info">
                      <div className="property-info-wrapper">
                        <div className="property-info-img">
                          <img src="/assets/img//dashboard/property-info-img2.png" alt="" />
                        </div>
                        <div className="property-info-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                          </div>
                          <h6><Link legacyBehavior href="/property-list/left-sidebar"><a>Harmony House</a></Link></h6>
                          <Link legacyBehavior href="/property-list/deatils1">
                            <a  className="view-details">
                            <img src="/assets/img//dashboard/icon/view-details-icon.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td data-label="Listed Date" className="table-product">
                      <span>04 April, 2023</span>
                    </td>
                    <td data-label="Price Range">
                      <span>$34,542.000</span>
                    </td>
                    <td data-label="Property Status">
                      <span className="black">For Rent</span>
                    </td>
                    <td data-label="Area (Sq.ft)">
                      <span>34,542 sq.ft</span>
                    </td>
                    <td data-label="Status">
                      <span>Active</span>
                    </td>
                    <td data-label="Action">
                      <ul className="action-buttons">
                        <li><img src="/assets/img//dashboard/icon/action-edit-btn.svg" alt="" /></li>
                        <li><img src="/assets/img//dashboard/icon/action-delete-btn.svg" alt="" /></li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Property Info">
                      <div className="property-info-wrapper">
                        <div className="property-info-img">
                          <img src="/assets/img//dashboard/property-info-img3.png" alt="" />
                        </div>
                        <div className="property-info-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                          </div>
                          <h6><Link legacyBehavior href="/property-list/left-sidebar"><a>Sunflower Cottage</a></Link></h6>
                          <Link legacyBehavior href="/property-list/deatils1">
                            <a  className="view-details">
                            <img src="/assets/img//dashboard/icon/view-details-icon.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td data-label="Listed Date" className="table-product">
                      <span>04 April, 2023</span>
                    </td>
                    <td data-label="Price Range">
                      <span>$34,542.000</span>
                    </td>
                    <td data-label="Property Status">
                      <span className="yellow">For Sale</span>
                    </td>
                    <td data-label="Area (Sq.ft)">
                      <span>34,542 sq.ft</span>
                    </td>
                    <td data-label="Status">
                      <span>Active</span>
                    </td>
                    <td data-label="Action">
                      <ul className="action-buttons">
                        <li><img src="/assets/img//dashboard/icon/action-edit-btn.svg" alt="" /></li>
                        <li><img src="/assets/img//dashboard/icon/action-delete-btn.svg" alt="" /></li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td data-label="Property Info">
                      <div className="property-info-wrapper">
                        <div className="property-info-img">
                          <img src="/assets/img//dashboard/property-info-img4.png" alt="" />
                        </div>
                        <div className="property-info-content">
                          <div className="location">
                            <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                          </div>
                          <h6><Link legacyBehavior href="/property-list/left-sidebar"><a>Sunset Retreat</a></Link></h6>
                          <Link legacyBehavior href="/property-list/deatils1">
                            <a  className="view-details">
                            <img src="/assets/img//dashboard/icon/view-details-icon.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td data-label="Listed Date" className="table-product">
                      <span>04 April, 2023</span>
                    </td>
                    <td data-label="Price Range">
                      <span>$34,542.000</span>
                    </td>
                    <td data-label="Property Status">
                      <span className="black">For Rent</span>
                    </td>
                    <td data-label="Area (Sq.ft)">
                      <span>34,542 sq.ft</span>
                    </td>
                    <td data-label="Status">
                      <span>Active</span>
                    </td>
                    <td data-label="Action">
                      <ul className="action-buttons">
                        <li><img src="/assets/img//dashboard/icon/action-edit-btn.svg" alt="" /></li>
                        <li><img src="/assets/img//dashboard/icon/action-delete-btn.svg" alt="" /></li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="pagination-area">
                <ul className="paginations">
                  <li className="page-item active">
                    <a href="#">01</a>
                  </li>
                  <li className="page-item">
                    <a href="#">02</a>
                  </li>
                  <li className="page-item">
                    <a href="#">03</a>
                  </li>
                </ul>
                <ul className="paginations-buttons">
                  <li>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width={7} height={14} viewBox="0 0 7 14">
                        <path d="M0 7.00008L7 0L2.54545 7.00008L7 14L0 7.00008Z" />
                      </svg>
                      Prev
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Next
                      <svg xmlns="http://www.w3.org/2000/svg" width={7} height={14} viewBox="0 0 7 14" fill="none">
                        <path d="M7 7.00008L0 0L4.45455 7.00008L0 14L7 7.00008Z" />
                      </svg>
                    </a>
                  </li>
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

export default PageLayousdad

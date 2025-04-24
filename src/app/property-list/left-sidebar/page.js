
"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import SelectComponent from '@/uitils/SelectComponent'



const Page = () => {
  const [isGridView, setIsGridView] = useState(true);
  useEffect(()=>{
      const saveView = localStorage.getItem('viewPreference');
      if(saveView==="list"){
          setIsGridView(false);
      }
      },[])

  const handleGridClick = () => {
      setIsGridView(true);
      localStorage.setItem("viewPreference", "grid")
    };
  
  const handleListClick = () => {
  setIsGridView(false);
  localStorage.setItem("viewPreference","list")
  };
  return (
    <div className="product-page pt-100 mb-100">
      <div className="container">
        <div className="row g-xl-4 gy-5">
          <div className="col-xl-4 order-xl-1 order-2">
            <div className="filter-area mb-40">
              <div className="title-and-close-btn mb-20">
                <h6>Search Filters</h6>
                <div className="close-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                    <path d="M7 13.125C5.37555 13.125 3.81763 12.4797 2.66897 11.331C1.52031 10.1824 0.875 8.62445 0.875 7C0.875 5.37555 1.52031 3.81763 2.66897 2.66897C3.81763 1.52031 5.37555 0.875 7 0.875C8.62445 0.875 10.1824 1.52031 11.331 2.66897C12.4797 3.81763 13.125 5.37555 13.125 7C13.125 8.62445 12.4797 10.1824 11.331 11.331C10.1824 12.4797 8.62445 13.125 7 13.125ZM7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 8.85652 0.737498 10.637 2.05025 11.9497C3.36301 13.2625 5.14348 14 7 14Z" />
                    <path d="M4.06506 4.06506C4.1057 4.02431 4.15397 3.99199 4.20713 3.96993C4.26028 3.94788 4.31726 3.93652 4.37481 3.93652C4.43235 3.93652 4.48933 3.94788 4.54248 3.96993C4.59564 3.99199 4.64392 4.02431 4.68456 4.06506L6.99981 6.38118L9.31506 4.06506C9.35573 4.02438 9.40402 3.99211 9.45717 3.9701C9.51032 3.94808 9.56728 3.93675 9.62481 3.93675C9.68233 3.93675 9.73929 3.94808 9.79244 3.9701C9.84559 3.99211 9.89388 4.02438 9.93456 4.06506C9.97523 4.10573 10.0075 4.15402 10.0295 4.20717C10.0515 4.26032 10.0629 4.31728 10.0629 4.37481C10.0629 4.43233 10.0515 4.48929 10.0295 4.54244C10.0075 4.59559 9.97523 4.64388 9.93456 4.68456L7.61843 6.99981L9.93456 9.31506C9.97523 9.35573 10.0075 9.40402 10.0295 9.45717C10.0515 9.51032 10.0629 9.56728 10.0629 9.62481C10.0629 9.68233 10.0515 9.73929 10.0295 9.79244C10.0075 9.84559 9.97523 9.89388 9.93456 9.93456C9.89388 9.97523 9.84559 10.0075 9.79244 10.0295C9.73929 10.0515 9.68233 10.0629 9.62481 10.0629C9.56728 10.0629 9.51032 10.0515 9.45717 10.0295C9.40402 10.0075 9.35573 9.97523 9.31506 9.93456L6.99981 7.61843L4.68456 9.93456C4.64388 9.97523 4.59559 10.0075 4.54244 10.0295C4.48929 10.0515 4.43233 10.0629 4.37481 10.0629C4.31728 10.0629 4.26032 10.0515 4.20717 10.0295C4.15402 10.0075 4.10573 9.97523 4.06506 9.93456C4.02438 9.89388 3.99211 9.84559 3.9701 9.79244C3.94808 9.73929 3.93675 9.68233 3.93675 9.62481C3.93675 9.56728 3.94808 9.51032 3.9701 9.45717C3.99211 9.40402 4.02438 9.35573 4.06506 9.31506L6.38118 6.99981L4.06506 4.68456C4.02431 4.64392 3.99199 4.59564 3.96993 4.54248C3.94788 4.48933 3.93652 4.43235 3.93652 4.37481C3.93652 4.31726 3.94788 4.26028 3.96993 4.20713C3.99199 4.15397 4.02431 4.1057 4.06506 4.06506Z" />
                  </svg> Clear All
                </div>
              </div>
              <div className="tags">
                <ul>
                  <li className="grid active">
                    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8">
                      <path d="M0.167842 0.167842C0.220911 0.114638 0.283955 0.0724268 0.353363 0.0436257C0.422771 0.0148246 0.497179 0 0.572325 0C0.647471 0 0.72188 0.0148246 0.791287 0.0436257C0.860695 0.0724268 0.923739 0.114638 0.976809 0.167842L4.00015 3.19233L7.02349 0.167842C7.07661 0.114724 7.13967 0.072589 7.20907 0.043842C7.27847 0.015095 7.35286 0.000299116 7.42797 0.000299116C7.50309 0.000299116 7.57748 0.015095 7.64688 0.043842C7.71628 0.072589 7.77934 0.114724 7.83246 0.167842C7.88558 0.220959 7.92771 0.284019 7.95646 0.35342C7.98521 0.422821 8 0.497206 8 0.572325C8 0.647445 7.98521 0.721829 7.95646 0.79123C7.92771 0.860632 7.88558 0.923691 7.83246 0.976809L4.80797 4.00015L7.83246 7.02349C7.88558 7.07661 7.92771 7.13967 7.95646 7.20907C7.98521 7.27847 8 7.35286 8 7.42797C8 7.50309 7.98521 7.57748 7.95646 7.64688C7.92771 7.71628 7.88558 7.77934 7.83246 7.83246C7.77934 7.88558 7.71628 7.92771 7.64688 7.95646C7.57748 7.98521 7.50309 8 7.42797 8C7.35286 8 7.27847 7.98521 7.20907 7.95646C7.13967 7.92771 7.07661 7.88558 7.02349 7.83246L4.00015 4.80797L0.976809 7.83246C0.923691 7.88558 0.860632 7.92771 0.79123 7.95646C0.721829 7.98521 0.647445 8 0.572325 8C0.497206 8 0.422821 7.98521 0.35342 7.95646C0.284019 7.92771 0.220959 7.88558 0.167842 7.83246C0.114724 7.77934 0.072589 7.71628 0.043842 7.64688C0.015095 7.57748 0.000299116 7.50309 0.000299116 7.42797C0.000299116 7.35286 0.015095 7.27847 0.043842 7.20907C0.072589 7.13967 0.114724 7.07661 0.167842 7.02349L3.19233 4.00015L0.167842 0.976809C0.114638 0.923739 0.0724268 0.860695 0.0436257 0.791287C0.0148246 0.72188 0 0.647471 0 0.572325C0 0.497179 0.0148246 0.422771 0.0436257 0.353363C0.0724268 0.283955 0.114638 0.220911 0.167842 0.167842Z" />
                    </svg> For Sale
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8">
                      <path d="M0.167842 0.167842C0.220911 0.114638 0.283955 0.0724268 0.353363 0.0436257C0.422771 0.0148246 0.497179 0 0.572325 0C0.647471 0 0.72188 0.0148246 0.791287 0.0436257C0.860695 0.0724268 0.923739 0.114638 0.976809 0.167842L4.00015 3.19233L7.02349 0.167842C7.07661 0.114724 7.13967 0.072589 7.20907 0.043842C7.27847 0.015095 7.35286 0.000299116 7.42797 0.000299116C7.50309 0.000299116 7.57748 0.015095 7.64688 0.043842C7.71628 0.072589 7.77934 0.114724 7.83246 0.167842C7.88558 0.220959 7.92771 0.284019 7.95646 0.35342C7.98521 0.422821 8 0.497206 8 0.572325C8 0.647445 7.98521 0.721829 7.95646 0.79123C7.92771 0.860632 7.88558 0.923691 7.83246 0.976809L4.80797 4.00015L7.83246 7.02349C7.88558 7.07661 7.92771 7.13967 7.95646 7.20907C7.98521 7.27847 8 7.35286 8 7.42797C8 7.50309 7.98521 7.57748 7.95646 7.64688C7.92771 7.71628 7.88558 7.77934 7.83246 7.83246C7.77934 7.88558 7.71628 7.92771 7.64688 7.95646C7.57748 7.98521 7.50309 8 7.42797 8C7.35286 8 7.27847 7.98521 7.20907 7.95646C7.13967 7.92771 7.07661 7.88558 7.02349 7.83246L4.00015 4.80797L0.976809 7.83246C0.923691 7.88558 0.860632 7.92771 0.79123 7.95646C0.721829 7.98521 0.647445 8 0.572325 8C0.497206 8 0.422821 7.98521 0.35342 7.95646C0.284019 7.92771 0.220959 7.88558 0.167842 7.83246C0.114724 7.77934 0.072589 7.71628 0.043842 7.64688C0.015095 7.57748 0.000299116 7.50309 0.000299116 7.42797C0.000299116 7.35286 0.015095 7.27847 0.043842 7.20907C0.072589 7.13967 0.114724 7.07661 0.167842 7.02349L3.19233 4.00015L0.167842 0.976809C0.114638 0.923739 0.0724268 0.860695 0.0436257 0.791287C0.0148246 0.72188 0 0.647471 0 0.572325C0 0.497179 0.0148246 0.422771 0.0436257 0.353363C0.0724268 0.283955 0.114638 0.220911 0.167842 0.167842Z" />
                    </svg> Panama City
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8">
                      <path d="M0.167842 0.167842C0.220911 0.114638 0.283955 0.0724268 0.353363 0.0436257C0.422771 0.0148246 0.497179 0 0.572325 0C0.647471 0 0.72188 0.0148246 0.791287 0.0436257C0.860695 0.0724268 0.923739 0.114638 0.976809 0.167842L4.00015 3.19233L7.02349 0.167842C7.07661 0.114724 7.13967 0.072589 7.20907 0.043842C7.27847 0.015095 7.35286 0.000299116 7.42797 0.000299116C7.50309 0.000299116 7.57748 0.015095 7.64688 0.043842C7.71628 0.072589 7.77934 0.114724 7.83246 0.167842C7.88558 0.220959 7.92771 0.284019 7.95646 0.35342C7.98521 0.422821 8 0.497206 8 0.572325C8 0.647445 7.98521 0.721829 7.95646 0.79123C7.92771 0.860632 7.88558 0.923691 7.83246 0.976809L4.80797 4.00015L7.83246 7.02349C7.88558 7.07661 7.92771 7.13967 7.95646 7.20907C7.98521 7.27847 8 7.35286 8 7.42797C8 7.50309 7.98521 7.57748 7.95646 7.64688C7.92771 7.71628 7.88558 7.77934 7.83246 7.83246C7.77934 7.88558 7.71628 7.92771 7.64688 7.95646C7.57748 7.98521 7.50309 8 7.42797 8C7.35286 8 7.27847 7.98521 7.20907 7.95646C7.13967 7.92771 7.07661 7.88558 7.02349 7.83246L4.00015 4.80797L0.976809 7.83246C0.923691 7.88558 0.860632 7.92771 0.79123 7.95646C0.721829 7.98521 0.647445 8 0.572325 8C0.497206 8 0.422821 7.98521 0.35342 7.95646C0.284019 7.92771 0.220959 7.88558 0.167842 7.83246C0.114724 7.77934 0.072589 7.71628 0.043842 7.64688C0.015095 7.57748 0.000299116 7.50309 0.000299116 7.42797C0.000299116 7.35286 0.015095 7.27847 0.043842 7.20907C0.072589 7.13967 0.114724 7.07661 0.167842 7.02349L3.19233 4.00015L0.167842 0.976809C0.114638 0.923739 0.0724268 0.860695 0.0436257 0.791287C0.0148246 0.72188 0 0.647471 0 0.572325C0 0.497179 0.0148246 0.422771 0.0436257 0.353363C0.0724268 0.283955 0.114638 0.220911 0.167842 0.167842Z" />
                    </svg> House
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-sidebar">
              <div className="product-widget mb-20">
                <div className="check-box-item">
                  <h6 className="product-widget-title mb-20">Find Your Home</h6>
                  <div className="checkbox-container">
                            <div className="row g-3">
                            <div className="col-12">
                                <div className="form-inner">
                                <label>Property Type</label>
                                <SelectComponent placeholder={"Select"} options={["Industrial","Development","Health &amp; Care","Hotel","Office"]}/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-inner">
                                <label>Location</label>
                                <SelectComponent options={["Sydne city","Panama City","Melbourne City","Menchester City","New Delhi"]} placeholder={"Select"}/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-inner">
                                <label>Min.Price</label>
                                <SelectComponent options={["$2,345","$2,545","$2,845","$3,345","$3,545"]} placeholder={"Select"}/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-inner">
                                <label>Max.Price</label>
                                <SelectComponent options={["$2,345","$2,545","$2,845","$3,345","$3,545"]} placeholder={"Select"}/>
                                
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-inner">
                                <label>Min.Bed</label>
                                <SelectComponent options={["02 Beds","03 Beds","04 Beds","05 Beds","06 Beds"]} placeholder={"Select"}/>
                              
                                </div>
                            </div>
                            </div>
                            <div className="button-group">
                            <a className="primary-btn3" href="#">For Sale</a>
                            <a className="primary-btn6" href="#">For Rent</a>
                            </div>
                        </div>
                </div>
              </div>
              <div className="product-widget mb-20">
                <div className="check-box-item">
                  <h6 className="product-widget-title mb-20">Other Filter</h6>
                  <div className="checkbox-container">
                            <div className="row g-3">
                            <div className="col-12">
                                <div className="form-inner">
                                <label>Min.Bed</label>
                                <SelectComponent options={["02 Beds","03 Beds","04 Beds","05 Beds","06 Beds"]} placeholder={"select"}/>
                              
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-inner">
                                <label>Min.Sq</label>
                                <SelectComponent options={["2,345 ft","2,545 ft","2,845 ft","3,345 ft","3,545 ft"]} placeholder={"Select"}/>
                              
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-inner">
                                <label>Max.Sq</label>
                                <SelectComponent options={["12,345 ft","13,345 ft","14,345 ft","15,345 ft","16,345 ft"]} placeholder={"Select"}/>
                              
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-inner">
                                <label>Built Year</label>
                                <SelectComponent options={["2019","2020","2021","2022","2023"]} placeholder={"Select"}/>
                                
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="more-facilities">
                                <div className="accordion accordion-flush" id="accordionFlushExample">
                                    <div className="accordion-item">
                                    <h5 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={10} viewBox="0 0 12 10">
                                            <path d="M2.48751 0V8.0272L3.17083 7.36221L3.91809 8.09055L1.95904 10L0 8.09055L0.747258 7.36221L1.43057 8.0272V0H2.48751ZM7.24376 7.72638V8.75657H4.6014V7.72638H7.24376ZM8.82917 5.15092V6.18111H4.6014V5.15092H8.82917ZM10.4146 2.57546V3.60565H4.6014V2.57546H10.4146ZM12 0V1.03018H4.6014V0H12Z" />
                                        </svg>
                                        More Facilities
                                        </button>
                                    </h5>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                        <ul className="color-area">
                                            <li>
                                            <label className="containerss">
                                                <input type="checkbox" />
                                                <span className="checkmark" />
                                                <span className="text">Fireplace</span>
                                            </label>
                                            </li>
                                            <li>
                                            <label className="containerss">
                                                <input type="checkbox" />
                                                <span className="checkmark" />
                                                <span className="text">fitness center</span>
                                            </label>
                                            </li>
                                            <li>
                                            <label className="containerss">
                                                <input type="checkbox" />
                                                <span className="checkmark" />
                                                <span className="text">Garage</span>
                                            </label>
                                            </li>
                                            <li>
                                            <label className="containerss">
                                                <input type="checkbox" />
                                                <span className="checkmark" />
                                                <span className="text">Gourmet kitchen</span>
                                            </label>
                                            </li>
                                            <li>
                                            <label className="containerss">
                                                <input type="checkbox" />
                                                <span className="checkmark" />
                                                <span className="text">Green </span>
                                                <span className="qty">(89)</span>
                                            </label>
                                            </li>
                                            <li>
                                            <label className="containerss">
                                                <input type="checkbox" />
                                                <span className="checkmark" />
                                                <span className="text">Gourmet kitchen</span>
                                            </label>
                                            </li>
                                        </ul>
                                        <ul className="color-area">
                                            <li>
                                            <label className="containerss">
                                                <input type="checkbox" />
                                                <span className="checkmark" />
                                                <span className="text">Alarm systems</span>
                                            </label>
                                            </li>
                                            <li>
                                            <label className="containerss">
                                                <input type="checkbox" />
                                                <span className="checkmark" />
                                                <span className="text">Playground</span>
                                            </label>
                                            </li>
                                            <li>
                                            <label className="containerss">
                                                <input type="checkbox" />
                                                <span className="checkmark" />
                                                <span className="text">Swimming pool</span>
                                            </label>
                                            </li>
                                            <li>
                                            <label className="containerss">
                                                <input type="checkbox" />
                                                <span className="checkmark" />
                                                <span className="text">Clubhouse</span>
                                            </label>
                                            </li>
                                            <li>
                                            <label className="containerss">
                                                <input type="checkbox" />
                                                <span className="checkmark" />
                                                <span className="text">Beige</span>
                                                <span className="qty">(35)</span>
                                            </label>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="search-btn">
                                <button type="submit" className="primary-btn3"><svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                                    <path d="M10.2746 9.04904C11.1219 7.89293 11.5013 6.45957 11.3371 5.0357C11.1729 3.61183 10.4771 2.30246 9.38898 1.36957C8.30083 0.436668 6.90056 -0.050966 5.46831 0.00422091C4.03607 0.0594079 2.67747 0.653346 1.66433 1.66721C0.651194 2.68107 0.0582276 4.04009 0.00406556 5.47238C-0.0500965 6.90466 0.43854 8.30458 1.37222 9.39207C2.30589 10.4795 3.61575 11.1744 5.03974 11.3376C6.46372 11.5008 7.89682 11.1203 9.05232 10.2722H9.05145C9.07769 10.3072 9.10569 10.3405 9.13719 10.3729L12.5058 13.7415C12.6699 13.9057 12.8924 13.9979 13.1245 13.998C13.3566 13.9981 13.5793 13.906 13.7435 13.7419C13.9076 13.5779 13.9999 13.3553 14 13.1232C14.0001 12.8911 13.908 12.6685 13.7439 12.5043L10.3753 9.13566C10.344 9.104 10.3104 9.07475 10.2746 9.04817V9.04904ZM10.5004 5.68567C10.5004 6.31763 10.3759 6.9434 10.1341 7.52726C9.89223 8.11112 9.53776 8.64162 9.0909 9.08849C8.64403 9.53535 8.11352 9.88983 7.52967 10.1317C6.94581 10.3735 6.32003 10.498 5.68807 10.498C5.05611 10.498 4.43034 10.3735 3.84648 10.1317C3.26262 9.88983 2.73211 9.53535 2.28525 9.08849C1.83838 8.64162 1.48391 8.11112 1.24207 7.52726C1.00023 6.9434 0.875753 6.31763 0.875753 5.68567C0.875753 4.40936 1.38276 3.18533 2.28525 2.28284C3.18773 1.38036 4.41177 0.873346 5.68807 0.873346C6.96438 0.873346 8.18841 1.38036 9.0909 2.28284C9.99338 3.18533 10.5004 4.40936 10.5004 5.68567Z" />
                                    </svg> Search
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                </div>
              </div>
              <div className="discount-banner">
                <div className="discount-content">
                  <span>Special Offer</span>
                  <h4>BLACK FRIDAY <br /> <span>OFFER-2023</span></h4>
                  <div className="offer-area">
                    <span>Upto</span>
                    <h3>30%</h3>
                  </div>
                  <div className="view-btns">
                    <Link legacyBehavior href="/special-offer"><a className="primary-btn3">View Details</a></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 order-xl-2 order-1">
            <div className="row mb-40">
              <div className="col-lg-12">
                <div className="show-item-and-filte">
                  <p>Showing <strong>2,928</strong> property for sale </p>
                  <div className="filter-view">
                    <div className="filter-atra">
                      <h6>Filter By:</h6>
                      <form>
                        <div className="form-inner">
                        <SelectComponent placeholder={"Highest Price"} options={["Highest Price","Lowest Price"]} />
                        </div>
                      </form>
                    </div>
                    <div className="view">
                    <ul className="btn-group list-grid-btn-group">
                            <li
                                className={`grid ${isGridView ? 'active' : ''}`}
                                onClick={handleGridClick}
                                >
                                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                                    <mask id="mask0_1631_19" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={14} height={14}>
                                    <rect width={14} height={14} fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_1631_19)">
                                    <path d="M5.47853 6.08726H0.608726C0.272536 6.08726 0 5.81472 0 5.47853V0.608726C0 0.272536 0.272536 0 0.608726 0H5.47853C5.81472 0 6.08726 0.272536 6.08726 0.608726V5.47853C6.08726 5.81472 5.81472 6.08726 5.47853 6.08726Z" />
                                    <path d="M13.3911 6.08726H8.52132C8.18513 6.08726 7.9126 5.81472 7.9126 5.47853V0.608726C7.9126 0.272536 8.18513 0 8.52132 0H13.3911C13.7273 0 13.9999 0.272536 13.9999 0.608726V5.47853C13.9999 5.81472 13.7273 6.08726 13.3911 6.08726Z" />
                                    <path d="M5.47853 14.0013H0.608726C0.272536 14.0013 0 13.7288 0 13.3926V8.52279C0 8.1866 0.272536 7.91406 0.608726 7.91406H5.47853C5.81472 7.91406 6.08726 8.1866 6.08726 8.52279V13.3926C6.08726 13.7288 5.81472 14.0013 5.47853 14.0013Z" />
                                    <path d="M13.3916 14.0013H8.52181C8.18562 14.0013 7.91309 13.7288 7.91309 13.3926V8.52279C7.91309 8.1866 8.18562 7.91406 8.52181 7.91406H13.3916C13.7278 7.91406 14.0003 8.1866 14.0003 8.52279V13.3926C14.0003 13.7288 13.7278 14.0013 13.3916 14.0013Z" />
                                    </g>
                                </svg>
                                </li>
                                <li
                                    className={`lists ${!isGridView ? 'active' : ''}`}
                                    onClick={handleListClick}
                                    >
                                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
                                    <mask id="mask0_1631_3" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={14} height={14}>
                                    <rect width={14} height={14} fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_1631_3)">
                                    <path d="M1.21747 2C0.545203 2 0 2.55848 0 3.24765C0 3.93632 0.545203 4.49433 1.21747 4.49433C1.88974 4.49433 2.43494 3.93632 2.43494 3.24765C2.43494 2.55848 1.88974 2 1.21747 2Z" />
                                    <path d="M1.21747 5.75195C0.545203 5.75195 0 6.30996 0 6.99913C0 7.68781 0.545203 8.24628 1.21747 8.24628C1.88974 8.24628 2.43494 7.68781 2.43494 6.99913C2.43494 6.30996 1.88974 5.75195 1.21747 5.75195Z" />
                                    <path d="M1.21747 9.50586C0.545203 9.50586 0 10.0643 0 10.753C0 11.4417 0.545203 12.0002 1.21747 12.0002C1.88974 12.0002 2.43494 11.4417 2.43494 10.753C2.43494 10.0643 1.88974 9.50586 1.21747 9.50586Z" />
                                    <path d="M13.0845 2.31055H4.42429C3.91874 2.31055 3.50879 2.7305 3.50879 3.24886C3.50879 3.76677 3.91871 4.1867 4.42429 4.1867H13.0845C13.59 4.1867 14 3.76677 14 3.24886C14 2.7305 13.59 2.31055 13.0845 2.31055Z" />
                                    <path d="M13.0845 6.06055H4.42429C3.91874 6.06055 3.50879 6.48047 3.50879 6.99886C3.50879 7.51677 3.91871 7.9367 4.42429 7.9367H13.0845C13.59 7.9367 14 7.51677 14 6.99886C14 6.48047 13.59 6.06055 13.0845 6.06055Z" />
                                    <path d="M13.0845 9.81348H4.42429C3.91874 9.81348 3.50879 10.2334 3.50879 10.7513C3.50879 11.2692 3.91871 11.6891 4.42429 11.6891H13.0845C13.59 11.6891 14 11.2692 14 10.7513C14 10.2334 13.59 9.81348 13.0845 9.81348Z" />
                                    </g>
                                </svg>
                                </li>
                            </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-grid-main">
            <div className={`list-grid-product-wrap ${!isGridView ?"list":"grid"}-group-wrapper`}>
                <div className="row g-4 justify-content-center mb-40">
                  <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp item" data-wow-delay="200ms">
                    <div className="product-card">
                      <div className="product-img">
                         
                        <a href="#" className="fav">
                          <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                            </path>
                          </svg>
                        </a>
                         
                        <div className="swiper product-img-slider">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-01.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-02.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-03.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-04.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="location">
                          <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Sydne City</a></Link>
                        </div>
                        <h5><Link legacyBehavior href="/property-list/deatils1"><a>Meadowview Manor</a></Link></h5>
                        <ul className="features">
                          <li>
                            <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                            05 Beds
                          </li>
                          <li>
                            <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                            04 Baths
                          </li>
                          <li>
                            <img src="/assets/img/home1/icon/size2.svg" alt="" />
                            Sq.ft- 256,560
                          </li>
                        </ul>
                        <div className="content-btm">
                        <Link legacyBehavior href="/property-list/deatils1">
                            <a className="view-btn2">
                            <img src="/assets/img/home1/icon/house.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                          <div className="price">
                            <strong>$6,656.00</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp item" data-wow-delay="300ms">
                    <div className="product-card">
                      <div className="product-img">
                         
                        <a href="#" className="fav">
                          <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                            </path>
                          </svg>
                        </a>
                         
                        <div className="swiper product-img-slider">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-02.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-01.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-03.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-04.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="location">
                          <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                        </div>
                        <h5><Link legacyBehavior href="/property-list/deatils1"><a>Harmony House</a></Link></h5>
                        <ul className="features">
                          <li>
                            <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                            05 Beds
                          </li>
                          <li>
                            <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                            04 Baths
                          </li>
                          <li>
                            <img src="/assets/img/home1/icon/size2.svg" alt="" />
                            Sq.ft- 256,560
                          </li>
                        </ul>
                        <div className="content-btm">
                        <Link legacyBehavior href="/property-list/deatils1">
                            <a className="view-btn2">
                            <img src="/assets/img/home1/icon/house.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                          <div className="price">
                            <strong>$7,656.00</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp item" data-wow-delay="200ms">
                    <div className="product-card">
                      <div className="product-img">
                         
                        <a href="#" className="fav">
                          <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                            </path>
                          </svg>
                        </a>
                         
                        <div className="swiper product-img-slider">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-03.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-02.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-01.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-04.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="location">
                          <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" /> Melbourne City</a></Link>
                        </div>
                        <h5><Link legacyBehavior href="/property-list/deatils1"><a>Evergreen Realty</a></Link></h5>
                        <ul className="features">
                          <li>
                            <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                            05 Beds
                          </li>
                          <li>
                            <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                            04 Baths
                          </li>
                          <li>
                            <img src="/assets/img/home1/icon/size2.svg" alt="" />
                            Sq.ft- 256,560
                          </li>
                        </ul>
                        <div className="content-btm">
                        <Link legacyBehavior href="/property-list/deatils1">
                            <a className="view-btn2">
                            <img src="/assets/img/home1/icon/house.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                          <div className="price">
                            <strong>$13,445.00</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp item" data-wow-delay="300ms">
                    <div className="product-card">
                      <div className="product-img">
                         
                        <a href="#" className="fav">
                          <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                            </path>
                          </svg>
                        </a>
                         
                        <div className="swiper product-img-slider">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-04.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-02.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-03.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-08.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="location">
                          <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                        </div>
                        <h5><Link legacyBehavior href="/property-list/deatils1"><a>Serene Homes</a></Link></h5>
                        <ul className="features">
                          <li>
                            <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                            05 Beds
                          </li>
                          <li>
                            <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                            04 Baths
                          </li>
                          <li>
                            <img src="/assets/img/home1/icon/size2.svg" alt="" />
                            Sq.ft- 256,560
                          </li>
                        </ul>
                        <div className="content-btm">
                          <Link legacyBehavior href="/property-list/deatils1">
                            <a className="view-btn2">
                            <img src="/assets/img/home1/icon/house.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                          <div className="price">
                            <strong>$12,656.00</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp item" data-wow-delay="200ms">
                    <div className="product-card">
                      <div className="product-img">
                         
                        <a href="#" className="fav">
                          <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                            </path>
                          </svg>
                        </a>
                         
                        <div className="swiper product-img-slider">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-05.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-02.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-03.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-04.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="location">
                          <Link legacyBehavior href="/property-list/left-sidebar"><a> <i className="bi bi-geo-alt" />Sydne City</a></Link>
                        </div>
                        <h5><Link legacyBehavior href="/property-list/deatils1"><a>Riverside Retreat</a></Link></h5>
                        <ul className="features">
                          <li>
                            <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                            05 Beds
                          </li>
                          <li>
                            <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                            04 Baths
                          </li>
                          <li>
                            <img src="/assets/img/home1/icon/size2.svg" alt="" />
                            Sq.ft- 256,560
                          </li>
                        </ul>
                        <div className="content-btm">
                        <Link legacyBehavior href="/property-list/deatils1">
                            <a className="view-btn2">
                            <img src="/assets/img/home1/icon/house.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                          <div className="price">
                            <strong>$9,656.00</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp item" data-wow-delay="300ms">
                    <div className="product-card">
                      <div className="product-img">
                         
                        <a href="#" className="fav">
                          <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                            </path>
                          </svg>
                        </a>
                         
                        <div className="swiper product-img-slider">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-06.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-03.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-08.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-04.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="location">
                          <Link legacyBehavior href="/property-list/left-sidebar"><a> <i className="bi bi-geo-alt" />Sydne City</a></Link>
                        </div>
                        <h5><Link legacyBehavior href="/property-list/deatils1"><a>Lakeside Haven</a></Link></h5>
                        <ul className="features">
                          <li>
                            <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                            05 Beds
                          </li>
                          <li>
                            <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                            04 Baths
                          </li>
                          <li>
                            <img src="/assets/img/home1/icon/size2.svg" alt="" />
                            Sq.ft- 256,560
                          </li>
                        </ul>
                        <div className="content-btm">
                        <Link legacyBehavior href="/property-list/deatils1">
                            <a className="view-btn2">
                            <img src="/assets/img/home1/icon/house.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                          <div className="price">
                            <strong>$9,656.00</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp item" data-wow-delay="200ms">
                    <div className="product-card">
                      <div className="product-img">
                         
                        <a href="#" className="fav">
                          <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                            </path>
                          </svg>
                        </a>
                         
                        <div className="swiper product-img-slider">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-07.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-05.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-02.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-04.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="location">
                          <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" /> Menchester City</a></Link>
                        </div>
                        <h5><Link legacyBehavior href="/property-list/deatils1"><a>Tranquil Haven</a></Link></h5>
                        <ul className="features">
                          <li>
                            <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                            05 Beds
                          </li>
                          <li>
                            <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                            04 Baths
                          </li>
                          <li>
                            <img src="/assets/img/home1/icon/size2.svg" alt="" />
                            Sq.ft- 256,560
                          </li>
                        </ul>
                        <div className="content-btm">
                        <Link legacyBehavior href="/property-list/deatils1">
                            <a className="view-btn2">
                            <img src="/assets/img/home1/icon/house.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                          <div className="price">
                            <strong>$10,656.00</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp item" data-wow-delay="300ms">
                    <div className="product-card">
                      <div className="product-img">
                         
                        <a href="#" className="fav">
                          <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                            </path>
                          </svg>
                        </a>
                         
                        <div className="swiper product-img-slider">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-08.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-02.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-03.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-04.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="location">
                          <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" />  Panama City</a></Link>
                        </div>
                        <h5><Link legacyBehavior href="/property-list/deatils1"><a>Harmony House</a></Link></h5>
                        <ul className="features">
                          <li>
                            <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                            05 Beds
                          </li>
                          <li>
                            <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                            04 Baths
                          </li>
                          <li>
                            <img src="/assets/img/home1/icon/size2.svg" alt="" />
                            Sq.ft- 256,560
                          </li>
                        </ul>
                        <div className="content-btm">
                        <Link legacyBehavior href="/property-list/deatils1">
                            <a className="view-btn2">
                            <img src="/assets/img/home1/icon/house.svg" alt="" />
                            View Detailss
                            </a>
                          </Link>
                          <div className="price">
                            <strong>$7,656.00</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp item" data-wow-delay="200ms">
                    <div className="product-card">
                      <div className="product-img">
                         
                        <a href="#" className="fav">
                          <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                            </path>
                          </svg>
                        </a>
                         
                        <div className="swiper product-img-slider">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-09.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-07.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-03.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-04.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="location">
                          <Link legacyBehavior href="/property-list/left-sidebar"><a><i className="bi bi-geo-alt" /> New Delhi</a></Link>
                        </div>
                        <h5><Link legacyBehavior href="/property-list/deatils1"><a>Meadowview Manor</a></Link></h5>
                        <ul className="features">
                          <li>
                            <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                            05 Beds
                          </li>
                          <li>
                            <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                            04 Baths
                          </li>
                          <li>
                            <img src="/assets/img/home1/icon/size2.svg" alt="" />
                            Sq.ft- 256,560
                          </li>
                        </ul>
                        <div className="content-btm">
                        <Link legacyBehavior href="/property-list/deatils1">
                            <a className="view-btn2">
                            <img src="/assets/img/home1/icon/house.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                          <div className="price">
                            <strong>$12,656.00</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp item" data-wow-delay="300ms">
                    <div className="product-card">
                      <div className="product-img">
                         
                        <a href="#" className="fav">
                          <svg width={14} height={13} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00012 2.40453L6.37273 1.75966C4.90006 0.245917 2.19972 0.76829 1.22495 2.67141C0.767306 3.56653 0.664053 4.8589 1.4997 6.50827C2.30473 8.09639 3.97953 9.99864 7.00012 12.0706C10.0207 9.99864 11.6946 8.09639 12.5005 6.50827C13.3362 4.85803 13.2338 3.56653 12.7753 2.67141C11.8005 0.76829 9.10019 0.245042 7.62752 1.75879L7.00012 2.40453ZM7.00012 13.125C-6.41666 4.25953 2.86912 -2.65995 6.84612 1.00016C6.89862 1.04829 6.95024 1.09816 7.00012 1.14979C7.04949 1.09821 7.10087 1.04859 7.15413 1.00104C11.1302 -2.6617 20.4169 4.25865 7.00012 13.125Z">
                            </path>
                          </svg>
                        </a>
                         
                        <div className="swiper product-img-slider">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-01.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-02.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-03.png" alt="image" />
                            </div>
                            <div className="swiper-slide">
                              <img src="/assets/img/inner-page/product-sb-img-04.png" alt="image" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="location">
                          <Link legacyBehavior href="/property-list/left-sidebar"><a> <i className="bi bi-geo-alt" />Sydne City</a></Link>
                        </div>
                        <h5><Link legacyBehavior href="/property-list/deatils1"><a>Mountain View Villa</a></Link></h5>
                        <ul className="features">
                          <li>
                            <img src="/assets/img/home1/icon/bed2.svg" alt="" />
                            05 Beds
                          </li>
                          <li>
                            <img src="/assets/img/home1/icon/bath2.svg" alt="" />
                            04 Baths
                          </li>
                          <li>
                            <img src="/assets/img/home1/icon/size2.svg" alt="" />
                            Sq.ft- 256,560
                          </li>
                        </ul>
                        <div className="content-btm">
                        <Link legacyBehavior href="/property-list/deatils1">
                            <a className="view-btn2">
                            <img src="/assets/img/home1/icon/house.svg" alt="" />
                            View Details
                            </a>
                          </Link>
                          <div className="price">
                            <strong>$16,656.00</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="pagination-and-next-prev">
                      <div className="pagination">
                        <ul>
                          <li className="active"><a href="#">01</a></li>
                          <li><a href="#">02</a></li>
                          <li><a href="#">03</a></li>
                          <li><a href="#">04</a></li>
                          <li><a href="#">05</a></li>
                        </ul>
                      </div>
                      <div className="next-prev-btn">
                        <ul>
                          <li>
                            <a href="#">
                              <svg xmlns="http://www.w3.org/2000/svg" width={7} height={14} viewBox="0 0 7 14">
                                <path d="M0 7.00008L7 0L2.54545 7.00008L7 14L0 7.00008Z" />
                              </svg> Prev
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Next
                              <svg xmlns="http://www.w3.org/2000/svg" width={7} height={14} viewBox="0 0 7 14">
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
        </div>
      </div>
    </div>
  )
}

export default Page

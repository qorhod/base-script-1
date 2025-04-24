"use client"
import { useSidebar } from '@/context/SidebarContext';
import SelectComponent from '@/uitils/SelectComponent'


const Page = () => {
  const { isOpen } = useSidebar();
  return (
    <div className={`main-content ${isOpen?"slide":""}`}>
      <div className="row">
        <div className="col-lg-12">
          <div className="main-content-title-profile mb-30">
            <div className="main-content-title">
              <h3>Add Your Property</h3>
              <img src="/assets/img/dashboard/icon/property-listing-icon.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="add-property-wrapper">
        <div className="add-property-content">
          <div className="row mb-40">
            <div className="col-xxl-4 col-xl-3">
              <div className="add-property-icon-content">
                <div className="add-property-icon">
                  <img src="/assets/img/dashboard/icon/property-location-icon.svg" alt="" />
                </div>
                <h6>Property Location</h6>
                <span />
              </div>
            </div>
            <div className="col-xxl-8 col-xl-9">
              <div className="add-property-form-wrapper">
                <div className="add-property-form-title">
                  <h6>Property Status</h6>
                </div>
                <ul className="property-form-radio-btns">
                  <li>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                      <label className="form-check-label" htmlFor="exampleRadios1">
                        For Sale
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                      <label className="form-check-label" htmlFor="exampleRadios2">
                        For Sale
                      </label>
                    </div>
                  </li>
                </ul>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-30">
                      <div className="form-inner">
                        <label>Property Type*</label>
                        <SelectComponent placeholder={"Select"} options={["Home Town","City Town"]} />
                      
                      </div>
                    </div>
                    <div className="col-md-6 mb-30">
                      <div className="form-inner">
                        <label>Property Condition*</label>
                        <SelectComponent placeholder={"Select"} options={["New apartment","Old apartment"]} />
                      
                      </div>
                    </div>
                    <div className="col-md-6 mb-30">
                      <div className="form-inner">
                        <label>Built Year*</label>
                        <SelectComponent placeholder={"Select"} options={["2023","2022"]} />
                    
                      </div>
                    </div>
                    <div className="col-md-6 mb-30">
                      <div className="form-inner">
                        <label>Dimension*</label>
                        <SelectComponent placeholder={"Select"} options={["10*20","30*40"]} />
                        
                      </div>
                    </div>
                    <div className="col-md-6 mb-30">
                      <div className="form-inner">
                        <label>Country*</label>
                        <SelectComponent placeholder={"Select"} options={["France","Bangladesh"]} />
                      
                      </div>
                    </div>
                    <div className="col-md-6 mb-30">
                      <div className="form-inner">
                        <label>Property City*</label>
                        <SelectComponent placeholder={"Select"} options={["Menchester city","New city"]} />
                      
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-inner mb-30">
                        <label>Location*</label>
                        <input type="text" placeholder="Mirpur DOHS, Dhaka" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="location-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.5647631857846!2d90.36311167605992!3d23.83407118555764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14c8682a473%3A0xa6c74743d52adb88!2sEgens%20Lab!5e0!3m2!1sen!2sbd!4v1694943917248!5m2!1sen!2sbd" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row mb-40">
            <div className="col-xxl-4 col-xl-3">
              <div className="add-property-icon-content">
                <div className="add-property-icon">
                  <img src="/assets/img/dashboard/icon/property-information-icon.svg" alt="" />
                </div>
                <h6>Proprety Information</h6>
                <span />
              </div>
            </div>
            <div className="col-xxl-8 col-xl-9">
              <div className="add-property-form-wrapper">
                <div className="add-property-form-title">
                  <h6>All Information</h6>
                </div>
                <form>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-inner mb-30">
                        <label>Property Name*</label>
                        <input type="text" placeholder="Type property name" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-inner mb-30">
                        <label>Description*</label>
                        <textarea placeholder="Write description here" defaultValue={""} />
                      </div>
                    </div>
                  </div>
                </form>
                <div className="upload-area">
                  <div className="upload-img-wrapper">
                    <div className="row g-4 mb-25">
                      <div className="col-lg-6">
                        <div className="upload-img-field">
                          <div className="upload-field-title">
                            <h6>Upload Property Image</h6>
                          </div>
                          <div className="upload-btn-box">
                            <label className="upload-btn">
                              <img src="/assets/img/dashboard/icon/upload-img-field-icon.svg" alt="" />
                              Upload images
                              <input type="file" multiple data-max_length={20} className="upload-inputfile" />
                            </label>
                            <p>Max.size 4 mb, jpeg or png *</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="upload-requirements">
                          <ul>
                            <li>
                              <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                                <g clipPath="url(#clip0_855_26)">
                                  <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                                  <path d="M8.22727 3.72747C8.22192 3.73264 8.21691 3.73816 8.21227 3.74397L5.60752 7.06272L4.03777 5.49222C3.93113 5.39286 3.7901 5.33876 3.64437 5.34134C3.49865 5.34391 3.35961 5.40294 3.25655 5.506C3.15349 5.60906 3.09446 5.7481 3.09188 5.89382C3.08931 6.03955 3.14341 6.18059 3.24277 6.28722L5.22727 8.27247C5.28073 8.32583 5.34439 8.36788 5.41445 8.39611C5.48452 8.42433 5.55955 8.43816 5.63508 8.43676C5.7106 8.43536 5.78507 8.41876 5.85404 8.38796C5.92301 8.35716 5.98507 8.31278 6.03652 8.25747L9.03052 4.51497C9.13246 4.40796 9.1882 4.26514 9.18568 4.11737C9.18317 3.9696 9.12259 3.82875 9.01706 3.72529C8.91152 3.62182 8.76951 3.56405 8.62171 3.56446C8.47392 3.56486 8.33223 3.62342 8.22727 3.72747Z" />
                                </g>
                              </svg>
                              High quality property image upload.
                            </li>
                            <li>
                              <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                                <g clipPath="url(#clip0_855_26)">
                                  <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                                  <path d="M8.22727 3.72747C8.22192 3.73264 8.21691 3.73816 8.21227 3.74397L5.60752 7.06272L4.03777 5.49222C3.93113 5.39286 3.7901 5.33876 3.64437 5.34134C3.49865 5.34391 3.35961 5.40294 3.25655 5.506C3.15349 5.60906 3.09446 5.7481 3.09188 5.89382C3.08931 6.03955 3.14341 6.18059 3.24277 6.28722L5.22727 8.27247C5.28073 8.32583 5.34439 8.36788 5.41445 8.39611C5.48452 8.42433 5.55955 8.43816 5.63508 8.43676C5.7106 8.43536 5.78507 8.41876 5.85404 8.38796C5.92301 8.35716 5.98507 8.31278 6.03652 8.25747L9.03052 4.51497C9.13246 4.40796 9.1882 4.26514 9.18568 4.11737C9.18317 3.9696 9.12259 3.82875 9.01706 3.72529C8.91152 3.62182 8.76951 3.56405 8.62171 3.56446C8.47392 3.56486 8.33223 3.62342 8.22727 3.72747Z" />
                                </g>
                              </svg>
                              All area cover of your property
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="upload-img-wrap" />
                  </div>
                  <div className="upload-others-wrapper">
                    <div className="row g-4 mb-25">
                      <div className="col-lg-6">
                        <div className="upload-file-area">
                          <div className="upload-field-title">
                            <h6>Upload Property Video</h6>
                          </div>
                          <div className="custom-upload-field">
                            <div className="upload-video-icon">
                              <img src="/assets/img/dashboard/icon/upload-video-icon.svg" alt="" />
                            </div>
                            <input type="file" className="custom-upload" />
                          </div>
                          <p>Max.size 10 mb, mp4 or webm *</p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="upload-requirements">
                          <ul>
                            <li>
                              <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                                <g clipPath="url(#clip0_855_26)">
                                  <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                                  <path d="M8.22727 3.72747C8.22192 3.73264 8.21691 3.73816 8.21227 3.74397L5.60752 7.06272L4.03777 5.49222C3.93113 5.39286 3.7901 5.33876 3.64437 5.34134C3.49865 5.34391 3.35961 5.40294 3.25655 5.506C3.15349 5.60906 3.09446 5.7481 3.09188 5.89382C3.08931 6.03955 3.14341 6.18059 3.24277 6.28722L5.22727 8.27247C5.28073 8.32583 5.34439 8.36788 5.41445 8.39611C5.48452 8.42433 5.55955 8.43816 5.63508 8.43676C5.7106 8.43536 5.78507 8.41876 5.85404 8.38796C5.92301 8.35716 5.98507 8.31278 6.03652 8.25747L9.03052 4.51497C9.13246 4.40796 9.1882 4.26514 9.18568 4.11737C9.18317 3.9696 9.12259 3.82875 9.01706 3.72529C8.91152 3.62182 8.76951 3.56405 8.62171 3.56446C8.47392 3.56486 8.33223 3.62342 8.22727 3.72747Z" />
                                </g>
                              </svg>
                              High resulation property video upload.
                            </li>
                            <li>
                              <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                                <g clipPath="url(#clip0_855_26)">
                                  <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                                  <path d="M8.22727 3.72747C8.22192 3.73264 8.21691 3.73816 8.21227 3.74397L5.60752 7.06272L4.03777 5.49222C3.93113 5.39286 3.7901 5.33876 3.64437 5.34134C3.49865 5.34391 3.35961 5.40294 3.25655 5.506C3.15349 5.60906 3.09446 5.7481 3.09188 5.89382C3.08931 6.03955 3.14341 6.18059 3.24277 6.28722L5.22727 8.27247C5.28073 8.32583 5.34439 8.36788 5.41445 8.39611C5.48452 8.42433 5.55955 8.43816 5.63508 8.43676C5.7106 8.43536 5.78507 8.41876 5.85404 8.38796C5.92301 8.35716 5.98507 8.31278 6.03652 8.25747L9.03052 4.51497C9.13246 4.40796 9.1882 4.26514 9.18568 4.11737C9.18317 3.9696 9.12259 3.82875 9.01706 3.72529C8.91152 3.62182 8.76951 3.56405 8.62171 3.56446C8.47392 3.56486 8.33223 3.62342 8.22727 3.72747Z" />
                                </g>
                              </svg>
                              All area cover of your property
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="upload-file-area">
                          <div className="upload-field-title">
                            <h6>Upload Floor Plan</h6>
                          </div>
                          <div className="custom-upload-field">
                            <div className="upload-video-icon">
                              <img src="/assets/img/dashboard/icon/upload-img-field-icon.svg" alt="" />
                            </div>
                            <input type="file" className="custom-upload" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="upload-file-area">
                          <div className="upload-field-title">
                            <h6>Upload PDF</h6>
                          </div>
                          <div className="custom-upload-field">
                            <div className="upload-video-icon">
                              <img src="/assets/img/dashboard/icon/upload-pdf-icon.svg" alt="" />
                            </div>
                            <input type="file" className="custom-upload" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-40">
            <div className="col-xxl-4 col-xl-3">
              <div className="add-property-icon-content">
                <div className="add-property-icon">
                  <img src="/assets/img/dashboard/icon/property-price-area-icon.svg" alt="" />
                </div>
                <h6>Price &amp; Area</h6>
                <span />
              </div>
            </div>
            <div className="col-xxl-8 col-xl-9">
              <div className="add-property-form-wrapper">
                <div className="add-property-form-title">
                  <h6>Price &amp; Area</h6>
                </div>
                <form>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-inner mb-30">
                        <label>Area Size*</label>
                        <div className="row g-4">
                          <div className="col-lg-9">
                            <input type="text" placeholder="Type area size" />
                          </div>
                          <div className="col-lg-3">
                            <div className="form-inner">
                            <SelectComponent placeholder={"Select unit"} options={["Sq.ft","Cm"]} />
                            
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-inner mb-30">
                        <label>Price*</label>
                        <div className="row g-4">
                          <div className="col-lg-9">
                            <input type="text" placeholder="Type price" />
                          </div>
                          <div className="col-lg-3">
                            <div className="form-inner">
                            <SelectComponent placeholder={"Currency"} options={["Dolar(USD)","Taka(BDT)"]} />
                            
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row mb-40">
            <div className="col-xxl-4 col-xl-3">
              <div className="add-property-icon-content">
                <div className="add-property-icon">
                  <img src="/assets/img/dashboard/icon/property-feature-icon.svg" alt="" />
                </div>
                <h6>Feature &amp; Aminities</h6>
                <span />
              </div>
            </div>
            <div className="col-xxl-8 col-xl-9">
              <div className="add-property-form-wrapper">
                <div className="add-property-form-title">
                  <h6>Feature &amp; Aminities</h6>
                </div>
                <div className="feature-aminities-form">
                  <form>
                    <div className="row">
                      <div className="col-lg-7">
                        <div className="form-inner mb-30">
                          <label>Bed Room</label>
                          <div className="number-quantity-area">
                            <ul className="number-list">
                              <li>01</li>
                              <li>02</li>
                              <li>03</li>
                              <li>04</li>
                              <li>05</li>
                            </ul>

                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="form-inner mb-30">
                          <label>Dyning Room</label>
                          <div className="number-quantity-area">
                            <ul className="number-list">
                              <li>01</li>
                              <li>02</li>
                              <li>03</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="form-inner mb-30">
                          <label>Bath Room</label>
                          <div className="number-quantity-area">
                            <ul className="number-list">
                              <li>01</li>
                              <li>02</li>
                              <li>03</li>
                              <li>04</li>
                              <li>05</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="form-inner mb-30">
                          <label>Belcony</label>
                          <div className="number-quantity-area">
                            <ul className="number-list">
                              <li>01</li>
                              <li>02</li>
                              <li>03</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-inner">
                          <label>Other Feature</label>
                          <div className="feature-check-area">
                            <div className="row">
                              <div className="col-lg-3 col-sm-6">
                                <ul className="feature-check-list">
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
                                      <span className="text">Air Condition</span>
                                    </label>
                                  </li>
                                  <li>
                                    <label className="containerss">
                                      <input type="checkbox" />
                                      <span className="checkmark" />
                                      <span className="text">Garage</span>
                                    </label>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-3 col-sm-6">
                                <ul className="feature-check-list">
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
                                      <span className="text">Clubhouse</span>
                                    </label>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-3 col-sm-6">
                                <ul className="feature-check-list">
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
                                      <span className="text">Secure systems</span>
                                    </label>
                                  </li>
                                  <li>
                                    <label className="containerss">
                                      <input type="checkbox" />
                                      <span className="checkmark" />
                                      <span className="text">Fitness club</span>
                                    </label>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-3 col-sm-6">
                                <ul className="feature-check-list">
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
                                      <span className="text">CCTV camera</span>
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-40">
            <div className="col-xxl-4 col-xl-3">
              <div className="add-property-icon-content">
                <div className="add-property-icon">
                  <img src="/assets/img/dashboard/icon/property-location-icon.svg" alt="" />
                </div>
                <h6>Extra Facilities</h6>
                <span />
              </div>
            </div>
            <div className="col-xxl-8 col-xl-9">
              <div className="add-property-form-wrapper">
                <div className="add-property-form-title">
                  <h6>Extra Facilities</h6>
                </div>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-inner mb-30">
                        <label>City Center*</label>
                        <input type="text" placeholder="Type area distance" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-30">
                        <label>Hospital*</label>
                        <input type="text" placeholder="Type area distance" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-30">
                        <label>Shop*</label>
                        <input type="text" placeholder="Type area distance" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-30">
                        <label>Park*</label>
                        <input type="text" placeholder="Type area distance" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row mb-40">
            <div className="col-xxl-4 col-xl-3">
              <div className="add-property-icon-content">
                <div className="add-property-icon">
                  <img src="/assets/img/dashboard/icon/property-contact-info-icon.svg" alt="" />
                </div>
                <h6>Contact Information</h6>
                <span />
              </div>
            </div>
            <div className="col-xxl-8 col-xl-9">
              <div className="add-property-form-wrapper">
                <div className="add-property-form-title">
                  <h6>Contact Information</h6>
                </div>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-inner mb-30">
                        <label>Full Name*</label>
                        <input type="text" placeholder="Daniel Scoot" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-30">
                        <label>Designation*</label>
                        <input type="text" placeholder="Property Manager" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-30">
                        <label>Email Address*</label>
                        <input type="email" placeholder="info@gmail.com" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner mb-30">
                        <label>Phone Number*</label>
                        <input id="phone" type="tel" name="phone" placeholder="info@gmail.com" />
                      </div>
                    </div>
                  </div>
                </form>
                <div className="social-from-area">
                  <div className="add-property-form-title">
                    <h6>Social Network</h6>
                  </div>
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-inner mb-20">
                          <label>Facebook</label>
                          <div className="from-input-area">
                            <div className="social-icon">
                              <img src="/assets/img/dashboard/icon/property-facebook-icon.svg" alt="" />
                            </div>
                            <input type="text" placeholder="https://example-facebook.com" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-inner mb-20">
                          <label>Twitter</label>
                          <div className="from-input-area">
                            <div className="social-icon">
                              <img src="/assets/img/dashboard/icon/property-twitter-icon.svg" alt="" />
                            </div>
                            <input type="text" placeholder="https://example-twitter.com" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="add-more">
                  <span>Add More+</span>
                </div>
              </div>
              <div className="post-property-btn">
                <a href="#" className="primary-btn3">
                  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18">
                    <g mask="url(#mask0_931_129)">
                      <path d="M17.0989 15.5563C17.0993 15.5432 17.0995 15.5302 17.0995 15.5172C17.0992 15.1881 16.9726 14.8726 16.7477 14.6399C16.5227 14.4071 16.2177 14.2762 15.8996 14.2759V8.53448L16.9795 7.69655C17.0171 7.66745 17.0474 7.62965 17.0683 7.5862C17.0891 7.54275 17.0998 7.49485 17.0995 7.44635C17.0992 7.39785 17.088 7.35009 17.0666 7.30691C17.0452 7.26373 17.0144 7.22633 16.9765 7.19771L14.3997 5.24956V1.86207C14.4793 1.86207 14.5556 1.82937 14.6118 1.77117C14.6681 1.71297 14.6997 1.63403 14.6997 1.55172V0.310345C14.6997 0.228036 14.6681 0.149099 14.6118 0.0908979C14.5556 0.0326969 14.4793 0 14.3997 0H11.3999C11.3203 0 11.244 0.0326969 11.1877 0.0908979C11.1315 0.149099 11.0999 0.228036 11.0999 0.310345V1.55172C11.0999 1.63403 11.1315 1.71297 11.1877 1.77117C11.244 1.82937 11.3203 1.86207 11.3999 1.86207V2.98168L9.17699 1.30116C9.12561 1.26232 9.06363 1.24139 9 1.24139C8.93637 1.24139 8.87439 1.26232 8.82301 1.30116L1.02345 7.19771C0.985599 7.22633 0.954756 7.26373 0.933399 7.30691C0.912041 7.35009 0.900764 7.39785 0.900472 7.44635C0.900181 7.49485 0.910882 7.54275 0.931719 7.5862C0.952556 7.62965 0.982947 7.66745 1.02045 7.69655L2.10039 8.53448V14.2759C1.78226 14.2762 1.47726 14.4071 1.25231 14.6399C1.02735 14.8726 0.900818 15.1881 0.900461 15.5172C0.900461 15.5302 0.900686 15.5432 0.901136 15.5563C0.618136 15.6316 0.371411 15.8111 0.207254 16.0612C0.0430969 16.3113 -0.027211 16.6148 0.00952183 16.9147C0.0462547 17.2146 0.187504 17.4903 0.406767 17.6901C0.626031 17.8899 0.908239 18.0001 1.20044 18H16.7996C17.0918 18.0001 17.374 17.8899 17.5932 17.6901C17.8125 17.4903 17.9537 17.2146 17.9905 16.9147C18.0272 16.6148 17.9569 16.3113 17.7927 16.0612C17.6286 15.8111 17.3819 15.6316 17.0989 15.5563ZM11.6998 0.62069H14.0997V1.24138H11.6998V0.62069ZM11.9998 3.41379V1.86207H13.7997V4.79599L11.9714 3.41379H11.9998ZM9 1.93609L16.2954 7.45153L15.5969 7.99351L9.17647 3.1628C9.12519 3.12421 9.06341 3.10343 9 3.10343C8.93659 3.10343 8.87481 3.12421 8.82353 3.1628L2.40311 7.99351L1.7046 7.45153L9 1.93609ZM0.600478 16.7586C0.600644 16.5957 0.662678 16.4393 0.773215 16.3232C0.883752 16.2071 1.03395 16.1406 1.19144 16.1379H1.19216C1.20749 16.1401 1.22283 16.142 1.23847 16.1431C1.28818 16.1463 1.33789 16.1367 1.38311 16.1151C1.42833 16.0935 1.46765 16.0606 1.4975 16.0194C1.52735 15.9781 1.54681 15.9298 1.55411 15.8788C1.56141 15.8279 1.55632 15.7758 1.53931 15.7274C1.51449 15.6603 1.50132 15.5891 1.50043 15.5172C1.50062 15.3527 1.56389 15.1949 1.67636 15.0786C1.78884 14.9622 1.94133 14.8967 2.10039 14.8966V17.3793H1.20044C1.04138 17.3791 0.888887 17.3137 0.776412 17.1973C0.663938 17.0809 0.600666 16.9232 0.600478 16.7586ZM13.4997 17.3793H9.89995V10.5517H13.4997V17.3793ZM14.0997 17.3793V10.2414C14.0997 10.1591 14.0681 10.0801 14.0118 10.0219C13.9556 9.96373 13.8793 9.93103 13.7997 9.93103H9.59997C9.5204 9.93103 9.4441 9.96373 9.38785 10.0219C9.33159 10.0801 9.29998 10.1591 9.29998 10.2414V17.3793H2.70036V8.53735L9 3.79753L15.2996 8.53735V17.3793H14.0997ZM16.7996 17.3793H15.8996V14.8966C16.0587 14.8967 16.2112 14.9622 16.3236 15.0786C16.4361 15.1949 16.4994 15.3527 16.4996 15.5172C16.4987 15.5892 16.4855 15.6604 16.4607 15.7275C16.4437 15.776 16.4386 15.828 16.4459 15.879C16.4532 15.93 16.4726 15.9783 16.5025 16.0195C16.5324 16.0608 16.5717 16.0937 16.6169 16.1153C16.6621 16.1369 16.7118 16.1465 16.7615 16.1432C16.7772 16.1422 16.7925 16.1403 16.8078 16.1381H16.8086C16.9677 16.1393 17.1198 16.2059 17.2315 16.3232C17.3431 16.4404 17.4052 16.5988 17.404 16.7634C17.4028 16.928 17.3385 17.0854 17.2251 17.201C17.1118 17.3165 16.9587 17.3807 16.7996 17.3795V17.3793Z" />
                      <path d="M7.79821 9.93164H4.19842C4.11886 9.93164 4.04256 9.96434 3.9863 10.0225C3.93004 10.0807 3.89844 10.1597 3.89844 10.242V14.5868C3.89844 14.6691 3.93004 14.7481 3.9863 14.8063C4.04256 14.8645 4.11886 14.8972 4.19842 14.8972H7.79821C7.87777 14.8972 7.95408 14.8645 8.01033 14.8063C8.06659 14.7481 8.0982 14.6691 8.0982 14.5868V10.242C8.0982 10.1597 8.06659 10.0807 8.01033 10.0225C7.95408 9.96434 7.87777 9.93164 7.79821 9.93164ZM7.49823 12.1041H6.2983V10.5523H7.49823V12.1041ZM5.69833 10.5523V12.1041H4.4984V10.5523H5.69833ZM4.4984 12.7247H5.69833V14.2765H4.4984V12.7247ZM6.2983 14.2765V12.7247H7.49823V14.2765H6.2983Z" />
                      <path d="M11.0793 13.774C11.1427 13.6157 11.07 13.4342 10.9169 13.3686C10.7638 13.303 10.5884 13.3782 10.525 13.5365C10.4616 13.6949 10.5342 13.8764 10.6873 13.942C10.8404 14.0076 11.0158 13.9324 11.0793 13.774Z" />
                    </g>
                  </svg>
                  Post Property
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page

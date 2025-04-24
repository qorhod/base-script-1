// "use client";
// import React, { useMemo } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, {
//   Autoplay,
//   EffectFade,
//   Navigation,
//   Pagination,
// } from "swiper";

// // تفعيل الوحدات في Swiper
// SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

// // ===================  المكوّن الجديد  ===================
// const Certificates = ({ userData }) => {
//   // مسار البيانات الجديد
//   const certificationsAndLicenses =
//     userData?.user?.about?.certificationsAndLicenses || [];

//   const slideSetting = useMemo(() => {
//     return {
//       slidesPerView: 1,
//       speed: 1500,
//       spaceBetween: 25,
//       autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//       },
//       navigation: {
//         nextEl: ".next-13",
//         prevEl: ".prev-13",
//       },
//       breakpoints: {
//         280: { slidesPerView: 1 },
//         386: { slidesPerView: 1 },
//         576: { slidesPerView: 2, spaceBetween: 15 },
//         768: { slidesPerView: 3, spaceBetween: 15 },
//         992: { slidesPerView: 3, spaceBetween: 15 },
//         1200: { slidesPerView: 4, spaceBetween: 15 },
//         1400: { slidesPerView: 4 },
//       },
//     };
//   }, []);

//   return (
//     <div
//       className="brief-history-section mb-20"
//       style={{ backgroundColor: "#f0f0f0" }}
//     >
//       <div
//         className="container"
//         style={{
//           backgroundColor: "#fff",
//           border: "1px solid #ddd",
//           borderRadius: "8px",
//           padding: "30px",
//         }}
//       >
//         <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
//           <div className="col-lg-12 d-flex align-items-center justify-content-between gap-3 flex-wrap">
//             <div className="section-title1">
//               <h2 style={{ color: "#efb93f", marginBottom: 0 }}>
//                 الشهادات والرخص
//               </h2>
//             </div>
//             <div
//               className="slider-btn-group2 width-90"
//               style={{ display: "flex", gap: "10px" }}
//             >
//               <div className="slider-btn prev-13" style={{ cursor: "pointer" }}>
//                 <svg
//                   width={9}
//                   height={15}
//                   viewBox="0 0 8 13"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
//                 </svg>
//               </div>
//               <div className="slider-btn next-13" style={{ cursor: "pointer" }}>
//                 <svg
//                   width={9}
//                   height={15}
//                   viewBox="0 0 8 13"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-lg-12">
//             <Swiper {...slideSetting} className="swiper brief-history-slider">
//               <div className="swiper-wrapper">
//                 {certificationsAndLicenses.map((cert, index) => {
//                   const imageSource = cert.certificateUrl
//                     ? cert.certificateUrl
//                     : "/assets/img/inner-page/icon/certificate.svg"; // أيقونة افتراضية

//                   return (
//                     <SwiperSlide className="swiper-slide" key={index}>
//                       <div
//                         className="brief-history-card"
//                         style={{
//                           padding: "20px",
//                           borderRadius: "6px",
//                           textAlign: "center",
//                           border: "1px solid #eee",
//                           margin: "0 5px",
//                         }}
//                       >
//                         <div className="brief-history-card-img">
//                           <img
//                             src={imageSource}
//                             alt={cert.certificateName || "Certificate"}
//                             style={{
//                               width: "120px",
//                               height: "120px",
//                               borderRadius: "6px",
//                               objectFit: "cover",
//                               display: "block",
//                               margin: "0 auto",
//                               marginBottom: "12px",
//                             }}
//                           />
//                         </div>
//                         <div className="brief-history-card-content">
//                           <h6 style={{ margin: 0 }}>
//                             {cert.certificateName || "اسم الشهادة"}
//                           </h6>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                   );
//                 })}
//               </div>
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Certificates;



"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";

// تفعيل الوحدات في Swiper
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

// ===================  المكوّن الجديد  ===================
const Certificates = ({ userData }) => {
  // مسار البيانات الجديد
  const certificationsAndLicenses =
    userData?.user?.about?.certificationsAndLicenses || [];

  const slideSetting = useMemo(
    () => ({
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 25,
      autoplay: { delay: 2500, disableOnInteraction: false },
      navigation: { nextEl: ".next-13", prevEl: ".prev-13" },
      breakpoints: {
        280: { slidesPerView: 1 },
        386: { slidesPerView: 1 },
        576: { slidesPerView: 2, spaceBetween: 15 },
        768: { slidesPerView: 3, spaceBetween: 15 },
        992: { slidesPerView: 3, spaceBetween: 15 },
        1200: { slidesPerView: 4, spaceBetween: 15 },
        1400: { slidesPerView: 4 },
      },
    }),
    []
  );

  return (
    <div className="brief-history-section mb-20" style={{ backgroundColor: "#f0f0f0" }}>
      <div
        className="container"
        style={{
          backgroundColor: "#fff",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "30px",
        }}
      >
        {/* عنوان وقِطع الأزرار */}
        <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
          <div className="col-lg-12 d-flex align-items-center justify-content-between gap-3 flex-wrap">
            <div className="section-title1">
              <h2 style={{ color: "#efb93f", marginBottom: 0 }}>الشهادات والرخص</h2>
            </div>
            <div className="slider-btn-group2 width-90" style={{ display: "flex", gap: "10px" }}>
              <div className="slider-btn prev-13" style={{ cursor: "pointer" }}>
                {/* سهم لليسار */}
                <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                </svg>
              </div>
              <div className="slider-btn next-13" style={{ cursor: "pointer" }}>
                {/* سهم لليمين */}
                <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* سلايدر الشهادات */}
        <div className="row">
          <div className="col-lg-12">
            <Swiper {...slideSetting} className="swiper brief-history-slider">
              <div className="swiper-wrapper">
                {certificationsAndLicenses.map((cert, index) => {
                  const imageSource = cert.certificateUrl || "/assets/img/inner-page/icon/certificate.svg";
                  return (
                    <SwiperSlide className="swiper-slide" key={index}>
                      <div
                        className="brief-history-card"
                        style={{
                          border: "1px solid #eee",
                          borderRadius: "6px",
                          overflow: "hidden",
                          margin: "0 5px",
                        }}
                      >
                        {/* الصورة تملأ البطاقة بالكامل من الجوانب ومن الأعلى */}
                        <a href={imageSource} target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
                          <img
                            src={imageSource}
                            alt={cert.certificateName || "Certificate"}
                            style={{ width: "100%", height: "220px", objectFit: "cover" }}
                          />
                        </a>
                        {/* الاسم أسفل الصورة تمامًا */}
                        <h6 style={{ margin: "12px 0", textAlign: "center" }}>
                          {cert.certificateName || "اسم الشهادة"}
                        </h6>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;

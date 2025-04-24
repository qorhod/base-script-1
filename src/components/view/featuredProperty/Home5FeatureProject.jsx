// "use client";
// import React, { useMemo } from "react";
// import { useRouter } from "next/router"; // لاستيراد useRouter
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import AdList2 from "@/components/FeaturedAdCard/AdList2";

// import SwiperCore, {
//   Autoplay,
//   EffectFade,
//   Navigation,
//   Pagination,
// } from "swiper";
// SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

// const Home5FeatureProject = () => {
//   // التحقق من العمل على جانب العميل فقط
//   const domainName =
//     typeof window !== "undefined"
//       ? window.location.pathname.split("/")[1]
//       : ""; // استخراج اسم النطاق

//   const slideSetting = useMemo(() => {
//     return {
//       speed: 1500,
//       spaceBetween: 25,
//       autoplay: {
//         delay: 3000, // مدة التشغيل التلقائي
//         disableOnInteraction: false,
//       },
//       navigation: {
//         nextEl: ".next-11",
//         prevEl: ".prev-11",
//       },
//       pagination: {
//         el: ".pagination11",
//         clickable: "true",
//       },
//       breakpoints: {
//         280: {
//           slidesPerView: 1,
//         },
//         386: {
//           slidesPerView: 1,
//         },
//         576: {
//           slidesPerView: 1,
//           spaceBetween: 15,
//         },
//         768: {
//           slidesPerView: 2,
//           spaceBetween: 15,
//         },
//         992: {
//           slidesPerView: 3,
//           spaceBetween: 15,
//         },
//         1200: {
//           slidesPerView: 3,
//           spaceBetween: 15,
//         },
//         1400: {
//           slidesPerView: 3,
//         },
//       },
//     };
//   }, []);

//   return (
//     <div className="home5-featured-project-area mb-100">
//       <div className="container">
//         <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
//           <div className="col-lg-12 d-flex align-items-center justify-content-between gap-3 flex-wrap">
//             <div className="section-title-2">
//               <h2>العقارات المميزة</h2>
//             </div>
//             <div className="slider-and-explore-btn-group">
//               <div className="slider-btn-group2 width-90">
//                 <div className="slider-btn prev-11">
//                   <svg
//                     width={9}
//                     height={15}
//                     viewBox="0 0 8 13"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
//                   </svg>
//                 </div>
//                 <div className="slider-btn next-11">
//                   <svg
//                     width={9}
//                     height={15}
//                     viewBox="0 0 8 13"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
//                   </svg>
//                 </div>
//               </div>
//               <div className="banner-content-bottom">
//                 <div className="view-dt-btn">
//                   <Link legacyBehavior href="/property-list/map-view">
//                     <a className="primary-btn3">
//                       المزيد من عروضنا<i className="bi bi-arrow-left" />
//                     </a>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-lg-12">
//             <Swiper {...slideSetting} className="swiper home4-latest-car-slider">
//               <div className="swiper-wrapper">
//                 {/* يتم تمرير اسم النطاق إلى المكون */}
//                 <AdList2 domainName={domainName} />
//               </div>
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home5FeatureProject;


//ـ+ــ+ـ+ـ



//ـ+ــ+ـ+ـ


// "use client";
// import React, { useContext, useMemo } from "react";
// import { DomainDataContext } from "@/app/index5/layout";
// import Link from "next/link";

// import { Swiper, SwiperSlide } from "swiper/react";
// // عدِّل المسار أدناه حسب موقع ملف AdsContext.js في مشروعك
// import AdsContext from "@/context/AdsContext"; 

// import AdList2 from "@/components/FeaturedAdCard/AdList2";

// import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
// SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

// const Home5FeatureProject = () => {
//   // استدعاء القيم من الـContext
//   const { ads, domainName } = useContext(AdsContext);
//   const { userData } = useContext(DomainDataContext);

//   const slideSetting = useMemo(() => {
//     return {
//       speed: 1500,
//       spaceBetween: 25,
//       autoplay: {
//         delay: 3000,
//         disableOnInteraction: false,
//       },
//       navigation: {
//         nextEl: ".next-11",
//         prevEl: ".prev-11",
//       },
//       pagination: {
//         el: ".pagination11",
//         clickable: true,
//       },
//       breakpoints: {
//         280: { slidesPerView: 1 },
//         386: { slidesPerView: 1 },
//         576: { slidesPerView: 1, spaceBetween: 15 },
//         768: { slidesPerView: 2, spaceBetween: 15 },
//         992: { slidesPerView: 3, spaceBetween: 15 },
//         1200: { slidesPerView: 3, spaceBetween: 15 },
//         1400: { slidesPerView: 3 },
//       },
//     };
//   }, []);

//   return (
//     <div className="home5-featured-project-area mb-100">
//       <div className="container">
//         {/* بقية أكواد العرض / العناوين */}
//         <div className="row">
//           <div className="col-lg-12">
//             <Swiper {...slideSetting} className="swiper home4-latest-car-slider">

//             <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
//   <div className="col-lg-12 d-flex align-items-center justify-content-between gap-3 flex-wrap">
//     <div className="section-title-2">
//       <h2>أحدث العقارات</h2>
//       <p>للحصول على أدق وأحدث المعلومات.</p>
//     </div>
//     <div className="slider-and-explore-btn-group">
//       <div className="slider-btn-group2 width-90">
//         <div className="slider-btn prev-11">
//           <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
//             <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
//           </svg>
//         </div>
//         <div className="slider-btn next-11">
//           <svg width={9} height={15} viewBox="0 0 8 13" xmlns="http://www.w3.org/2000/svg">
//             <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
//           </svg>
//         </div>
//       </div>
//       <div className="explore-more-btn">
//         <Link legacyBehavior href=".poperty-deatils1">
//           <a>استكشف المزيد <i className="bi bi-arrow-right" /></a>
//         </Link>
//       </div>
//     </div>
//   </div>
// </div>

//               <div className="swiper-wrapper">
//                 {/* نمرر ads و domainName إلى AdList2 مثلاً */}
//                 {/* <AdList2 ads={ads} domainName={domainName} /> */}
//                 <AdList2
//         ads={userData?.ads}
//         domainName={userData?.domainName}
//       />

//               </div>
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home5FeatureProject;



"use client";
import React, { useMemo } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

// استورد المكوّن AdList2
import AdList2 from "@/components/FeaturedAdCard/AdList2";

// مكوّن Home5FeatureProject يستقبل الآن userData عبر الـProps:
const Home5FeatureProject = ({ userData }) => {
  // 1) جهّز بيانات التحريك للسلايدر
  const slideSetting = useMemo(() => {
    return {
      speed: 1500,
      spaceBetween: 25,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".next-11",
        prevEl: ".prev-11",
      },
      pagination: {
        el: ".pagination11",
        clickable: true,
      },
      breakpoints: {
        280: { slidesPerView: 1 },
        386: { slidesPerView: 1 },
        576: { slidesPerView: 1, spaceBetween: 15 },
        768: { slidesPerView: 2, spaceBetween: 15 },
        992: { slidesPerView: 3, spaceBetween: 15 },
        1200: { slidesPerView: 3, spaceBetween: 15 },
        1400: { slidesPerView: 3 },
      },
    };
  }, []);

  // 2) حدّد النص المراد عرضه في العنوان بناءً على adFilterType
  const filterType = userData?.user?.homepage?.adFilterType;
  let headingText = "أحدث العقارات"; // الافتراضي
  if (filterType === "featured") {
    headingText = "العقارات المميزة";
  } else if (filterType === "discounted") {
    headingText = "عقارات بأسعار مخفضة";
  } else if (filterType === "new") {
    headingText = "أحدث العقارات";
  }

  return (
    <div className="home5-featured-project-area mb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Swiper {...slideSetting} className="swiper home4-latest-car-slider">
              <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
                <div className="col-lg-12 d-flex align-items-center justify-content-between gap-3 flex-wrap">
                  <div className="section-title-2">
                    {/* 3) استخدام المتغير headingText بدلاً من النص الثابت */}
                    <h2>{headingText}</h2>
                    <p>اغتنم فرصتك واقتنِ أفضل العقارات بأفضل الأسعار.</p>
                  </div>
                  <div className="slider-and-explore-btn-group">
                    <div className="slider-btn-group2 width-90">
                      <div className="slider-btn prev-11">
                        <svg
                          width={9}
                          height={15}
                          viewBox="0 0 8 13"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                        </svg>
                      </div>
                      <div className="slider-btn next-11">
                        <svg
                          width={9}
                          height={15}
                          viewBox="0 0 8 13"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                        </svg>
                      </div>
                    </div>
                    <div className="explore-more-btn">
                      <Link legacyBehavior href={`/${userData?.user?.domainName}/property-list`}>
                        <a>
                          استكشف المزيد <i className="bi bi-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-wrapper">
                {/* تمرير بيانات من userData إلى AdList2 */}
                <AdList2
                  ads={userData?.ads}
                  domainName={userData?.user?.domainName} // لاحظ أننا دخلنا إلى user أولًا
                />
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home5FeatureProject;

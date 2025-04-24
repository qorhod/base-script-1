
// "use client";
// import React, { useMemo } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, {
//   Autoplay,
//   EffectFade,
//   Navigation,
//   Pagination,
// } from "swiper";

// SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

// const History = ({ userData }) => {
//   // نفترض أن البيانات داخل userData.user.about.organizationalStructure
//   const organizationalStructure =
//     userData?.user?.about?.organizationalStructure || [];

//   const slideSetting = useMemo(() => {
//     return {
//       slidesPerView: 1,
//       speed: 1500,
//       spaceBetween: 25,
//       autoplay: {
//         delay: 2500, // المدة بالميلي ثانية
//         disableOnInteraction: false,
//       },
//       navigation: {
//         nextEl: ".next-13",
//         prevEl: ".prev-13",
//       },
//       breakpoints: {
//         280: {
//           slidesPerView: 1,
//         },
//         386: {
//           slidesPerView: 1,
//         },
//         576: {
//           slidesPerView: 2,
//           spaceBetween: 15,
//         },
//         768: {
//           slidesPerView: 3,
//           spaceBetween: 15,
//         },
//         992: {
//           slidesPerView: 3,
//           spaceBetween: 15,
//         },
//         1200: {
//           slidesPerView: 4,
//           spaceBetween: 15,
//         },
//         1400: {
//           slidesPerView: 4,
//         },
//       },
//     };
//   }, []);

//   return (
//     <div className="brief-history-section mb-100">
//       <div className="container">
//         <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
//           <div className="col-lg-12 d-flex align-items-center justify-content-between gap-3 flex-wrap">
//             <div className="section-title1">
//               <h2>فريقنا</h2>
//               {/* <span>ــــ---------ـــــــ</span> */}

//             </div>
//             <div className="slider-btn-group2 width-90">
//               <div className="slider-btn prev-13">
//                 <svg
//                   width={9}
//                   height={15}
//                   viewBox="0 0 8 13"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
//                 </svg>
//               </div>
//               <div className="slider-btn next-13">
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
//                 {/* عمل Loop على مصفوفة الموظفين */}
//                 {organizationalStructure.map((person, index) => {
//                   // إن لم يوجد رابط صورة، استخدم أيقونة person.svg
//                   const imageSource = person.personalPhotoUrl
//                     ? person.personalPhotoUrl
//                     : "/assets/img/inner-page/icon/person.svg";

//                   return (
//                     <SwiperSlide className="swiper-slide" key={index}>
//                       <div className="brief-history-card">
//                         <div className="brief-history-card-img">
//                           <img
//                             src={imageSource}
//                             alt={person.name || "Employee"}
//                             style={{
//                               width: "120px",
//                               height: "120px",
//                               borderRadius: "50%",
//                               objectFit: "cover",
//                               display: "block",
//                               margin: "0 auto",
//                             }}
//                           />
//                         </div>
//                         <div className="brief-history-card-content">
//                           {/* المسمى الوظيفي */}
//                           <h6>{person.jobTitle || "Job Title"}</h6>
//                           {/* اسم الموظف */}
//                           <p>{person.name || "Employee Name"}</p>
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

// export default History;




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

const History = ({ userData }) => {
  // نفترض أن البيانات داخل userData.user.about.organizationalStructure
  const organizationalStructure =
    userData?.user?.about?.organizationalStructure || [];

  const slideSetting = useMemo(() => {
    return {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 25,
      autoplay: {
        delay: 2500, // المدة بالميلي ثانية
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".next-13",
        prevEl: ".prev-13",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    };
  }, []);

  return (
    /* خلفية عامة فاتحة للمكوّن */
    <div
      className="brief-history-section mb-20"
      style={{
        backgroundColor: "#f0f0f0",
        // padding: "50px 0", // مسافة علوية وسفلية
      }}
    >
      {/* صندوق داخلي أبيض */}
      <div
        className="container"
        style={{
          backgroundColor: "#fff",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "30px",
        }}
      >
        <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
          <div className="col-lg-12 d-flex align-items-center justify-content-between gap-3 flex-wrap">
            <div className="section-title1">
              {/* عنوان مع لون مميز */}
              <h2 style={{ color: "#efb93f", marginBottom: 0 }}>فريقنا</h2>
            </div>
            <div className="slider-btn-group2 width-90" style={{ display: "flex", gap: "10px" }}>
              <div className="slider-btn prev-13" style={{ cursor: "pointer" }}>
                <svg
                  width={9}
                  height={15}
                  viewBox="0 0 8 13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                </svg>
              </div>
              <div className="slider-btn next-13" style={{ cursor: "pointer" }}>
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
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-12">
            <Swiper {...slideSetting} className="swiper brief-history-slider">
              <div className="swiper-wrapper">
                {/* عرض كل شخص في سلايد */}
                {organizationalStructure.map((person, index) => {
                  const imageSource = person.personalPhotoUrl
                    ? person.personalPhotoUrl
                    : "/assets/img/inner-page/icon/person.svg";

                  return (
                    <SwiperSlide className="swiper-slide" key={index}>
                      <div
                        className="brief-history-card"
                        style={{
                          /* يمكنك إضافة خلفية خفيفة هنا لو أردت مثلاً: backgroundColor: "#fafafa" */
                          padding: "20px",
                          borderRadius: "6px",
                          textAlign: "center",
                          border: "1px solid #eee", // إطار خفيف للبطاقة
                          margin: "0 5px",
                        }}
                      >
                        <div className="brief-history-card-img">
                          <img
                            src={imageSource}
                            alt={person.name || "Employee"}
                            style={{
                              width: "120px",
                              height: "120px",
                              borderRadius: "50%",
                              objectFit: "cover",
                              display: "block",
                              margin: "0 auto",
                              marginBottom: "12px",
                            }}
                          />
                        </div>
                        <div className="brief-history-card-content">
                          <h6 style={{ marginBottom: "8px" }}>
                            {person.jobTitle || "Job Title"}
                          </h6>
                          <p style={{ margin: 0 }}>
                            {person.name || "Employee Name"}
                          </p>
                        </div>
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

export default History;

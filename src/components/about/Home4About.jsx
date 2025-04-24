
// "use client";
// import React, { useMemo } from "react";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, {
//   Autoplay,
//   EffectFade,
//   Navigation,
//   Pagination,
// } from "swiper";

// // مكوّنات من MUI
// import { Box, Typography } from "@mui/material";

// // تفعيل الـ Modules في Swiper
// SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

// const Home4About = ({ userData }) => {
//   // جلب بيانات "من نحن"
//   const about = userData?.user?.about;

//   // إعدادات السلايدر
//   const slideSetting = useMemo(() => {
//     return {
//       slidesPerView: 1,
//       speed: 1500,
//       spaceBetween: 25,
//       autoplay: {
//         delay: 3000,
//         disableOnInteraction: false,
//       },
//       navigation: {
//         nextEl: ".next-6",
//         prevEl: ".prev-6",
//       },
//     };
//   }, []);

//   return (
//     /* خلفية شاملة للمكوّن */
//     <Box
//       sx={{
//         backgroundColor: "#f0f0f0",
//         py: 4,
//       }}
//       className="home4-about-section mb-20"
//     >
//       <div className="container">
//         {/* صندوق داخلي أبيض يضم الأعمدة */}
//         <Box
//           sx={{
//             backgroundColor: "#fff",
//             color: "#333",
//             p: 3,
//             borderRadius: 2,
//             border: "1px solid #ddd",
//           }}
//         >
//           <div className="row g-lg-4 gy-5">



//             {/* العمود الأيمن: السلايدر + الأنشطة */}
//             <div className="col-lg-6">
//               <div
//                 className="about-img-wrap wow fadeInUp"
//                 data-wow-delay="300ms"
//               >
//                 <Swiper {...slideSetting} className="swiper home3-about-img-slider">
//                   <div className="swiper-wrapper">
//                     <SwiperSlide className="swiper-slide">
//                       <img
//                         src="/assets/img/home4/about-01.png"
//                         alt="About 01"
//                       />
//                     </SwiperSlide>
//                     <SwiperSlide className="swiper-slide">
//                       <img
//                         src="/assets/img/home4/about-02.png"
//                         alt="About 02"
//                       />
//                     </SwiperSlide>
//                     <SwiperSlide className="swiper-slide">
//                       <img
//                         src="/assets/img/home4/about-03.png"
//                         alt="About 03"
//                       />
//                     </SwiperSlide>
//                     <SwiperSlide className="swiper-slide">
//                       <img
//                         src="/assets/img/home4/about-04.png"
//                         alt="About 04"
//                       />
//                     </SwiperSlide>
//                   </div>
//                   <div className="slider-btn-group2">
//                     <div className="slider-btn prev-6">
//                       <svg
//                         width={9}
//                         height={15}
//                         viewBox="0 0 8 13"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
//                       </svg>
//                     </div>
//                     <div className="slider-btn next-6">
//                       <svg
//                         width={9}
//                         height={15}
//                         viewBox="0 0 8 13"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
//                       </svg>
//                     </div>
//                   </div>
//                 </Swiper>
//               </div>

//               {/* <div className="activetis" style={{ marginTop: "24px" }}>
//                 <div className="single-activiti" style={{ marginBottom: "16px" }}>
//                   <div className="icon">
//                     <img src="/assets/img/home2/icon/home1.svg" alt="Icon" />
//                   </div>
//                   <div className="content">
//                     <div className="number">
//                       <h5 className="counter">138</h5>
//                       <span>K+</span>
//                     </div>
//                     <p>Project Completed</p>
//                   </div>
//                 </div>
//                 <div className="single-activiti" style={{ marginBottom: "16px" }}>
//                   <div className="icon">
//                     <img src="/assets/img/home2/icon/home1.svg" alt="Icon" />
//                   </div>
//                   <div className="content">
//                     <div className="number">
//                       <h5 className="counter">46</h5>
//                       <span>K+</span>
//                     </div>
//                     <p>Project Sold</p>
//                   </div>
//                 </div>
//                 <div className="single-activiti">
//                   <div className="icon">
//                     <img src="/assets/img/home2/icon/home1.svg" alt="Icon" />
//                   </div>
//                   <div className="content">
//                     <div className="number">
//                       <h5 className="counter">5</h5>
//                       <span>K+</span>
//                     </div>
//                     <p>Experienced</p>
//                   </div>
//                 </div>
//               </div> */}
//             </div>




//             {/* العمود الأيسر: عرض بيانات "من نحن" */}
//             <div className="col-lg-6">
//               <div
//                 className="about-content-wrap wow fadeInUp"
//                 data-wow-delay="200ms"
//               >
//                 <div className="section-title1" style={{ marginBottom: "16px" }}>
//                   {/* <span>(Since-1994)</span> */}
//                   <Typography
//                     variant="h4"
//                     component="h2"
//                     sx={{ color: "#efb93f", mb: 1 }} 
//                     /* لون مختلف لجذب الانتباه للعناوين */
//                   >
//                     من نحن
//                   </Typography>
//                 </div>

//                 {/* صندوق رئيسي يضم بقية الأقسام بنفس الخلفية (متصلة) */}
//                 <Box
//                   sx={{
//                     backgroundColor: "#fafafa", 
//                     p: 2,
//                     borderRadius: 1,
//                     border: "1px solid #eee",
//                   }}
//                 >
//                   {/* مقدّمة الشركة */}
//                   {about?.companyIntroduction && (
//                     <Box
//                       sx={{
//                         pb: 2,
//                         mb: 2,
//                         borderBottom: "1px solid #ddd", // فاصل سفلي بسيط
//                       }}
//                     >
//                       <Typography
//                         variant="h6"
//                         sx={{ color: "#efb93f", mb: 1 }}
//                       >
//                         مقدمة عن الشركة
//                       </Typography>
//                       <Typography variant="body1">
//                         {about.companyIntroduction}
//                       </Typography>
//                     </Box>
//                   )}

//                   {/* الرسالة */}
//                   {about?.mission && (
//                     <Box
//                       sx={{
//                         pb: 2,
//                         mb: 2,
//                         borderBottom: "1px solid #ddd",
//                       }}
//                     >
//                       <Typography
//                         variant="h6"
//                         sx={{ color: "#efb93f", mb: 1 }}
//                       >
//                         رسالتنا
//                       </Typography>
//                       <Typography variant="body1">{about.mission}</Typography>
//                     </Box>
//                   )}

//                   {/* الرؤية */}
//                   {about?.vision && (
//                     <Box
//                       sx={{
//                         pb: 2,
//                         mb: 2,
//                         borderBottom: "1px solid #ddd",
//                       }}
//                     >
//                       <Typography
//                         variant="h6"
//                         sx={{ color: "#efb93f", mb: 1 }}
//                       >
//                         رؤيتنا
//                       </Typography>
//                       <Typography variant="body1">{about.vision}</Typography>
//                     </Box>
//                   )}

//                   {/* مجالات الشركة (مصفوفة) */}
//                   {about?.businessAreas?.length > 0 && (
//                     <Box
//                       sx={{
//                         pb: 2,
//                         mb: 2,
//                         borderBottom: "1px solid #ddd",
//                       }}
//                     >
//                       <Typography
//                         variant="h6"
//                         sx={{ color: "#efb93f", mb: 1 }}
//                       >
//                         مجالات الشركة
//                       </Typography>
//                       <Typography variant="body1">{about.businessAreas}</Typography>


                   
//                     </Box>
//                   )}

//                   {/* القيم (مصفوفة) */}
//                   {about?.values?.length > 0 && (
//                     <Box
//                       sx={{
//                         pb: 2,
//                         mb: 2,
//                         borderBottom: "1px solid #ddd",
//                       }}
//                     >
//                       <Typography
//                         variant="h6"
//                         sx={{ color: "#efb93f", mb: 1 }}
//                       >
//                         القيم
//                       </Typography>

//                       <Typography variant="body1">{about.values}</Typography>

              
//                     </Box>
//                   )}

//                   {/* المزايا التنافسية (مصفوفة) */}
//                   {about?.competitiveAdvantages?.length > 0 && (
//                     <Box
//                       sx={{
//                         pb: 2,
//                         mb: 2,
//                         borderBottom: "1px solid #ddd",
//                       }}
//                     >
//                       <Typography
//                         variant="h6"
//                         sx={{ color: "#efb93f", mb: 1 }}
//                       >
//                         المزايا التنافسية
//                       </Typography>
//                       <Typography variant="body1">{about.competitiveAdvantages}</Typography>

                 
//                     </Box>
//                   )}


//                 </Box>
//               </div>
//             </div>

//           </div>
//         </Box>
//       </div>
//     </Box>
//   );
// };

// export default Home4About;

"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";

// مكوّنات من MUI
import { Box, Typography } from "@mui/material";

// تفعيل الـ Modules في Swiper
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

const Home4About = ({ userData }) => {
  // جلب بيانات "من نحن"
  const about = userData?.user?.about;
  // جلب مصفوفة الصور الديناميكية
  const aboutImages = about?.aboutImages || [];

  // إعدادات السلايدر
  const slideSetting = useMemo(() => {
    return {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 25,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".next-6",
        prevEl: ".prev-6",
      },
    };
  }, []);

  // التحقق من وجود صور
  const hasDynamicImages = aboutImages.length > 0;

  return (
    <Box
      sx={{
        backgroundColor: "#f0f0f0",
        py: 4,
      }}
      className="home4-about-section mb-20"
    >
      <div className="container">
        {/* صندوق داخلي أبيض يضم الأعمدة */}
        <Box
          sx={{
            backgroundColor: "#fff",
            color: "#333",
            p: 3,
            borderRadius: 2,
            border: "1px solid #ddd",
          }}
        >
          <div className="row g-lg-4 gy-5">
            {/* 
              لن نظهر عمود السلايدر إلا إذا كان هناك صور 
            */}
            {hasDynamicImages && (
              <div className="col-lg-6">
                <div
                  className="about-img-wrap wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <Swiper {...slideSetting} className="swiper home3-about-img-slider">
                    <div className="swiper-wrapper">
                      {aboutImages.map((imgUrl, index) => (
                        <SwiperSlide className="swiper-slide" key={index}>
                          <img
                            src={imgUrl}
                            alt={`about-dynamic-${index}`}
                            style={{
                              width: "450px",
                              height: "350px",
                              objectFit: "cover",
                              display: "block",
                              margin: "0 auto",
                            }}
                          />
                        </SwiperSlide>
                      ))}
                    </div>
                    <div className="slider-btn-group2">
                      <div className="slider-btn prev-6">
                        <svg
                          width={9}
                          height={15}
                          viewBox="0 0 8 13"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                        </svg>
                      </div>
                      <div className="slider-btn next-6">
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
                  </Swiper>
                </div>
              </div>
            )}

            {/* العمود الأيسر: عرض بيانات "من نحن" */}
            <div className={`col-lg-${hasDynamicImages ? "6" : "12"}`}>
              {/* 
                لو لم تكن هناك صور، سيأخذ هذا العمود المساحة الكاملة 
                بفضل استخدامنا لـ col-lg-12 بدلاً من col-lg-6 
              */}
              <div
                className="about-content-wrap wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="section-title1" style={{ marginBottom: "16px" }}>
                  <Typography
                    variant="h4"
                    component="h2"
                    sx={{ color: "#efb93f", mb: 1 }}
                  >
                    من نحن
                  </Typography>
                </div>

                {/* صندوق رئيسي يضم بقية الأقسام بنفس الخلفية (متصلة) */}
                <Box
                  sx={{
                    backgroundColor: "#fafafa",
                    p: 2,
                    borderRadius: 1,
                    border: "1px solid #eee",
                  }}
                >
                  {/* مقدّمة الشركة */}
                  {about?.companyIntroduction && (
                    <Box
                      sx={{
                        pb: 2,
                        mb: 2,
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ color: "#efb93f", mb: 1 }}
                      >
                        مقدمة عن الشركة
                      </Typography>
                      <Typography variant="body1">
                        {about.companyIntroduction}
                      </Typography>
                    </Box>
                  )}

                  {/* الرسالة */}
                  {about?.mission && (
                    <Box
                      sx={{
                        pb: 2,
                        mb: 2,
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ color: "#efb93f", mb: 1 }}
                      >
                        رسالتنا
                      </Typography>
                      <Typography variant="body1">{about.mission}</Typography>
                    </Box>
                  )}

                  {/* الرؤية */}
                  {about?.vision && (
                    <Box
                      sx={{
                        pb: 2,
                        mb: 2,
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ color: "#efb93f", mb: 1 }}
                      >
                        رؤيتنا
                      </Typography>
                      <Typography variant="body1">{about.vision}</Typography>
                    </Box>
                  )}

                  {/* مجالات الشركة (مصفوفة) */}
                  {about?.businessAreas?.length > 0 && (
                    <Box
                      sx={{
                        pb: 2,
                        mb: 2,
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ color: "#efb93f", mb: 1 }}
                      >
                        مجالات الشركة
                      </Typography>
                      <Typography variant="body1">
                        {about.businessAreas}
                      </Typography>
                    </Box>
                  )}

                  {/* القيم (مصفوفة) */}
                  {about?.values?.length > 0 && (
                    <Box
                      sx={{
                        pb: 2,
                        mb: 2,
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ color: "#efb93f", mb: 1 }}
                      >
                        القيم
                      </Typography>
                      <Typography variant="body1">{about.values}</Typography>
                    </Box>
                  )}

                  {/* المزايا التنافسية (مصفوفة) */}
                  {about?.competitiveAdvantages?.length > 0 && (
                    <Box
                      sx={{
                        pb: 2,
                        mb: 2,
                        borderBottom: "1px solid #ddd",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ color: "#efb93f", mb: 1 }}
                      >
                        المزايا التنافسية
                      </Typography>
                      <Typography variant="body1">
                        {about.competitiveAdvantages}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </Box>
  );
};

export default Home4About;

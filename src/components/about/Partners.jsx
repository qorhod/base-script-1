// "use client";
// import React from "react";
// // استيراد المكوّن إذا كنت تستخدم مكتبة معينة للـ Marquee مثلاً:
// import Marquee from "react-fast-marquee";

// const Partners = () => {
//   return (
//     <div
//       className="partners-section mb-20"
//       style={{
//         backgroundColor: "#f0f0f0", // نفس لون خلفية المكوّن السابق
//         // padding: "50px 0",          // مسافة علوية وسفلية
//       }}
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
//         <div className="row wow fadeInUp" data-wow-delay="400ms">
//           <div className="col-lg-12">
//             <div className="sub-title">
//               <h6>شركاء النجاح</h6>
//               <div className="dash" />
//             </div>
//             <div className="partner-slider">
//               <div className="marquee_text2">
//                 {/* تأكد من وجود مكتبة Marquee مستخدمة هنا */}
//                 <Marquee>
//                   <img src="/assets/img/home1/company-logo-01.png" alt="" />
//                   <img src="/assets/img/home1/company-logo-02.png" alt="" />
//                   <img src="/assets/img/home1/company-logo-03.png" alt="" />
//                   <img src="/assets/img/home1/company-logo-04.png" alt="" />
//                   <img src="/assets/img/home1/company-logo-05.png" alt="" />
//                   <img src="/assets/img/home1/company-logo-06.png" alt="" />
//                   <img src="/assets/img/home1/company-logo-01.png" alt="" />
//                   <img src="/assets/img/home1/company-logo-02.png" alt="" />
//                   <img src="/assets/img/home1/company-logo-03.png" alt="" />
//                   <img src="/assets/img/home1/company-logo-04.png" alt="" />
//                   <img src="/assets/img/home1/company-logo-05.png" alt="" />
//                   <img src="/assets/img/home1/company-logo-06.png" alt="" />
//                 </Marquee>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Partners;



"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const Partners = ({ userData }) => {
  // جلب قائمة روابط الشعارات من البيانات
  const companyLogos = userData?.user?.about?.companyLogos || [];

  // إذا لم تتوفر أي شعارات، يتم إرجاع null لإخفاء المكوّن
  if (!companyLogos.length) {
    return null;
  }

  return (
    <div
      className="partners-section mb-20"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <div
        className="container"
        style={{
          backgroundColor: "#fff",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "30px",
        }}
      >
        <div className="row wow fadeInUp" data-wow-delay="400ms">
          <div className="col-lg-12">
            <div className="sub-title">
              <h6>شركاء النجاح</h6>
              <div className="dash" />
            </div>

            <div className="partner-slider">
              <div className="marquee_text2">
                <Marquee>
                  {companyLogos.map((logoUrl, index) => (
                    <img
                      key={index}
                      src={logoUrl}
                      alt={`company-logo-${index}`}
                      style={{
                        // يمكنك تخصيص أحجام الصور هنا
                        width: "150px",
                        height: "auto",
                        margin: "0 20px",
                      }}
                    />
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;

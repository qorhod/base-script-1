



// "use client";
// import React, { useState, useEffect } from 'react';
// import ModalVideo from 'react-modal-video';
// import 'react-modal-video/css/modal-video.css';
// import { FaShareAlt } from 'react-icons/fa';

// // استورد الدالة من apiClient (تأكد من صحة المسار)
// import apiClient from '@/api/apiClient';

// import Home5SocialMediaButtons from "@/components/view/SocialMedia/Home5SocialMediaButtons";
// import CallViaWhatsApp from "@/components/view/SocialMedia/CallViaWhatsApp";
// import LocationButton from "@/components/view/SocialMedia/LocationButton";

// const Home5HowItWork = () => {
//   const [isOpen, setOpen] = useState(false);

//   // حالتان (States): واحدة لحفظ بيانات السوشال ميديا كاملة، والأخرى لحفظ الفروع
//   const [socialMedia, setSocialMedia] = useState({});
//   const [branches, setBranches] = useState([]);
//    const domainName = "qorhod.sa"

//   // الحصول على domainName من الـ URL
//   // const domainName =
//   //   typeof window !== "undefined"
//   //     ? window.location.pathname.split("/")[1]
//   //     : "";

//   // جلب البيانات من الباك-إند عند توفر domainName
//   useEffect(() => {
//     if (!domainName) return;

//     apiClient
//       .getSocialMedia(domainName) // يستدعي GET /website/socialMedia/:domainName
//       .then((res) => {
//         if (res.data) {
//           // نتوقع وجود كائن socialMedia و مصفوفة branches في الاستجابة
//           setSocialMedia(res.data.socialMedia || {}); 
//           setBranches(res.data.branches || []);
//         }
//       })
//       .catch((err) => {
//         console.error('Error fetching social media or branches:', err);
//       });
//   }, [domainName]);

//   return (
//     <div className="how-it-work-section style-2 mb-100"   style={{ backgroundColor: '#fff' }}
// >
//       <div className="container">
//         <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
//           <div className="col-lg-12 d-flex align-items-end justify-content-between gap-3 flex-wrap">
//             {/* بإمكانك إضافة عناوين أو نصوص حسب رغبتك */}
//           </div>
//         </div>

//         <div className="row wow fadeInUp" data-wow-delay="300ms">
//           <div className="col-lg-12">
//             <div className="work-process-group">
//               <div className="row justify-content-center g-lg-0 gy-5">
                
//                 {/* الخطوة الأولى */}
//                 <div className="col-lg-3 col-sm-6">
//                   <div className="single-work-process text-center">
//                     <div className="step">
//                       <span>1</span>
//                     </div>
//                     <div className="icon">
//                       <img src="/assets/img/home2/icon/loaction.svg" alt="" />
//                     </div>
//                     <div className="content">
//                       <h6>نتشرف بزيارتكم وإستقبال عروضكم </h6>
//                       {/* تمرير جميع الفروع إلى المكوّن */}
//                       <LocationButton branches={branches} />
//                     </div>
//                   </div>
//                 </div>

//                 {/* الخطوة الثانية */}
//                 <div className="col-lg-3 col-sm-6">
//                   <div className="single-work-process text-center">
//                     <div className="step">
//                       <span>2</span>
//                     </div>
//                     <div className="icon">
//                       <FaShareAlt style={{ fontSize: '2rem', color: '#000000' }} />
//                     </div>
//                     <div className="content">
//                       <h6>تابعنا ليصلك أحدث عروضنا</h6>
//                       {/* تمرير السوشال ميديا كاملة إلى المكوّن */}
//                       <Home5SocialMediaButtons socialMedia={socialMedia} />
//                     </div>
//                   </div>
//                 </div>



//                 {/* إذا أردت إضافة خطوة رابعة أعد تفعيل الكود المعلق أو أضف خطوة جديدة */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* مودال الفيديو (لا علاقة له بعرض البيانات) */}
//       <React.Fragment>
//         <ModalVideo
//           channel="custom"
//           url='/assets/video/popup-video.mp4'
//           isOpen={isOpen}
//           animationSpeed="350"
//           ratio='16:9'
//           onClose={() => setOpen(false)} 
//         />
//       </React.Fragment>
//     </div>
//   );
// };

// export default Home5HowItWork;




"use client";
import React, { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import { FaShareAlt } from "react-icons/fa";

import apiClient from "@/api/apiClient";

import Home5SocialMediaButtons from "@/components/view/SocialMedia/Home5SocialMediaButtons";
import CallViaWhatsApp from "@/components/view/SocialMedia/CallViaWhatsApp";
import LocationButton from "@/components/view/SocialMedia/LocationButton";

// استيراد الهوك الذي يستخرج اسم الدومين
import useDomain from "@/hooks/useDomain";

const Home5HowItWork = () => {
  const [isOpen, setOpen] = useState(false);

  // حالتان (States): واحدة لحفظ بيانات السوشال ميديا كاملة، والأخرى لحفظ الفروع
  const [socialMedia, setSocialMedia] = useState({});
  const [branches, setBranches] = useState([]);

  // استخدام هوك useDomain بدلًا من القيمة الثابتة
  const domainName = useDomain();

  // جلب البيانات عند توفر domainName
  useEffect(() => {
    if (!domainName) return; // إذا كان الدومين فارغ في البداية فلا نستدعي الـAPI

    apiClient
      .getSocialMedia(domainName) // مثال: GET /website/socialMedia/:domainName
      .then((res) => {
        if (res.data) {
          // نتوقع كائن socialMedia ومصفوفة branches في الاستجابة
          setSocialMedia(res.data.socialMedia || {});
          setBranches(res.data.branches || []);
        }
      })
      .catch((err) => {
        console.error("Error fetching social media or branches:", err);
      });
  }, [domainName]);

  return (
    <div
      className="how-it-work-section style-2 mb-100"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <div className="row mb-50 wow fadeInUp" data-wow-delay="200ms">
          <div className="col-lg-12 d-flex align-items-end justify-content-between gap-3 flex-wrap">
            {/* بإمكانك إضافة عناوين أو نصوص حسب رغبتك */}
          </div>
        </div>

        <div className="row wow fadeInUp" data-wow-delay="300ms">
          <div className="col-lg-12">
            <div className="work-process-group">
              <div className="row justify-content-center g-lg-0 gy-5">
                {/* الخطوة الأولى */}
                <div className="col-lg-3 col-sm-6">
                  <div className="single-work-process text-center">
                    <div className="step">
                      <span>1</span>
                    </div>
                    <div className="icon">
                      <img src="/assets/img/home2/icon/loaction.svg" alt="" />
                    </div>
                    <div className="content">
                      <h6>نتشرف بزيارتكم وإستقبال عروضكم</h6>
                      {/* تمرير الفروع إلى المكوّن لعرض عناوين الفروع */}
                      <LocationButton branches={branches} />
                    </div>
                  </div>
                </div>

                {/* الخطوة الثانية */}
                <div className="col-lg-3 col-sm-6">
                  <div className="single-work-process text-center">
                    <div className="step">
                      <span>2</span>
                    </div>
                    <div className="icon">
                      <FaShareAlt style={{ fontSize: "2rem", color: "#000000" }} />
                    </div>
                    <div className="content">
                      <h6>تابعنا ليصلك أحدث عروضنا</h6>
                      {/* تمرير بيانات السوشال ميديا  */}
                      <Home5SocialMediaButtons socialMedia={socialMedia} />
                    </div>
                  </div>
                </div>

                {/* بإمكانك إضافة خطوات إضافية */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* مودال الفيديو (لا علاقة له بعرض البيانات) */}
      <React.Fragment>
        <ModalVideo
          channel="custom"
          url="/assets/video/popup-video.mp4"
          isOpen={isOpen}
          animationSpeed="350"
          ratio="16:9"
          onClose={() => setOpen(false)}
        />
      </React.Fragment>
    </div>
  );
};

export default Home5HowItWork;









// "use client";

// import React, { useEffect, useState, useContext } from "react";
// import { DomainDataContext } from "@/app/index5/layout";
// import apiClient from "@/api/apiClient"; // الدالة لجلب البيانات من الـAPI
// import AdsContext from "@/context/AdsContext"; // <-- استيراد الـContext من ملف خارجي
// import { Box } from "@mui/material";

// import Home5Banner from "@/components/view/Banner/Home5Banner";
// import Home5About from "@/components/view/about/Home5About";
// import Home5FeatureProject from "@/components/view/featuredProperty/Home5FeatureProject";
// import Home5HowItWork from "@/components/view/howItWork/Home5HowItWork";

// // مكوّنات أخرى معطلة يمكنك إعادة تفعيلها إن شئت:
// // import Home5Blog from "@/components/view/blog/Home5Blog";
// // import Home5Testimonial from "@/components/view/testimonial/Home5Testimonial";
// // import Home5ApartmentType from "@/components/view/apartmentType/Home5ApartmentType";
// // import Home5FeaturedProperty from "@/components/view/featuredProperty/Home5FeaturedProperty";
// // import Home5WhyChoose from "@/components/view/whyChoose/Home5WhyChoose";

// // يمكنك إضافة الـmetadata إن أردت:
// // export const metadata = {
// //   title: "Neckle - Real Estate Next Template",
// //   description: "Global Description",
// //   icons: {
// //     icon: "/assets/img/sm-logo.svg",
// //   },
// // };

// export default function Page() {
//   // 1) جلب userData من سياق DomainDataContext
//   const { userData } = useContext(DomainDataContext);

//   // 2) حالات للاحتفاظ بالـdomainName والإعلانات وحالة التحميل
//   // const [domainName, setDomainName] = useState("");
  
//   const [ads, setAds] = useState([]);
//   const [loading, setLoading] = useState(true);
// const domainName = "qorhod.sa"
//   // 3) استخراج اسم النطاق من الـURL عند التحميل
//   // useEffect(() => {
//   //   if (typeof window !== "undefined") {
//   //     const dn = window.location.pathname.split("/")[1] || "";
//   //     setDomainName(dn);
//   //   }
//   // }, []);

//   // 4) جلب الإعلانات عند تغيّر domainName
//   useEffect(() => {
//     async function fetchAds() {
//       try {
//         if (domainName) {
//           setLoading(true);
//           const response = await apiClient.getUserProfile(domainName, 10, 1);
//           // نستخدم userData لجلب الإعلانات من userData (أو من response)
//           const fetchedAds = userData?.user?.ads || [];
//           setAds(fetchedAds);
//         }
//       } catch (err) {
//         console.error("خطأ في جلب الإعلانات:", err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchAds();
//   }, [domainName]);

//   // 5) عرض رسالة انتظار إن ما زالت البيانات تُجلب
//   if (loading) {
//     return <div>جاري التحميل...</div>;
//   }

//   // 6) بعد اكتمال الجلب، نلفّ بمزوّد AdsContext ونمرر Ads + domainName
//   return (
//     <AdsContext.Provider value={{ ads, domainName }}>
//       <>
//         <Box sx={{ mt: 4 }}>
//           <Home5Banner />
//         </Box>

//         <Box
//           sx={{
//             mt: 4,
//             backgroundColor: "background.paper",
//             p: 2,
//             borderRadius: 2,
//           }}
//         >
//           <Home5About />
//           {/* <p>اسم الشركة: {userData?.user?.companyName || ""}</p> */}
//         </Box>

//         <Box
//           sx={{
//             backgroundColor: "background.section",
//             p: 2,
//             borderRadius: 2,
//           }}
//         >
//           {/* هنا نمرر userData للمكوّن الابن */}
//           <Home5FeatureProject userData={userData} />
//           <Home5HowItWork />
//         </Box>

//         {/* مكوّنات أخرى (مثل Testimonial أو Blog) أضفها عند الحاجة */}
//       </>
//     </AdsContext.Provider>
//   );
// }







"use client";

import React, { useEffect, useState, useContext } from "react";
import { DomainDataContext } from "@/app/index5/layout";
import apiClient from "@/api/apiClient"; // الدالة لجلب البيانات من الـAPI
import AdsContext from "@/context/AdsContext"; // <-- استيراد الـContext من ملف خارجي
import { Box } from "@mui/material";

import Home5Banner from "@/components/view/Banner/Home5Banner";
import Home5About from "@/components/view/about/Home5About";
import Home5FeatureProject from "@/components/view/featuredProperty/Home5FeatureProject";
import Home5HowItWork from "@/components/view/howItWork/Home5HowItWork";

// هوك لاستخراج الدومين
import useDomain from "@/hooks/useDomain";

export default function Page() {
  // 1) جلب userData من سياق DomainDataContext
  const { userData } = useContext(DomainDataContext);

  // 2) استخدام الهوك بدلاً من الدومين الثابت
  const domainName = useDomain();

  // حالات للإعلانات وحالة التحميل
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);

  // 3) جلب الإعلانات عند توفّر domainName
  useEffect(() => {
    async function fetchAds() {
      try {
        if (domainName) {
          setLoading(true);
          // هنا قد تستدعي ميثود مشابهة لـ getUserProfile(domainName, 10, 1)
          const response = await apiClient.getUserProfile(domainName, 10, 1);
          // مثلاً جلب الإعلانات من userData (إن توفّرت) أو من response
          const fetchedAds = userData?.user?.ads || [];
          setAds(fetchedAds);
        }
      } catch (err) {
        console.error("خطأ في جلب الإعلانات:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchAds();
  }, [domainName, userData]);

  // 4) عرض رسالة انتظار إن ما زالت البيانات تُجلب أو إن الدومين لم يتوفر بعد
  if (!domainName) {
    return <div>جاري التحقق من الدومين...</div>;
  }

  if (loading) {
    return <div>جاري التحميل...</div>;
  }

  // 5) بعد اكتمال الجلب، نلفّ بمزوّد AdsContext ونمرر Ads + domainName
  return (
    <AdsContext.Provider value={{ ads, domainName }}>
      <>
        <Box sx={{ mt: 4 }}>
          <Home5Banner />
        </Box>

        <Box
          sx={{
            mt: 4,
            backgroundColor: "background.paper",
            p: 2,
            borderRadius: 2,
          }}
        >
          <Home5About />
          {/* <p>اسم الشركة: {userData?.user?.companyName || ""}</p> */}
        </Box>

        <Box
          sx={{
            backgroundColor: "background.section",
            p: 2,
            borderRadius: 2,
          }}
        >
          <Home5FeatureProject userData={userData} />
          <Home5HowItWork />
        </Box>

        {/* مكوّنات أخرى (مثل Testimonial أو Blog) أضفها عند الحاجة */}
      </>
    </AdsContext.Provider>
  );
}


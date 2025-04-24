
// "use client";
// import React, { useEffect, useState, useContext } from "react";
// import { DomainDataContext } from "./layout";
// import apiClient from "@/api/apiClient";
// import AdsContext from "@/context/AdsContext";
// import { Box } from "@mui/material";

// // import Home5Banner from "@/components/view/Banner/Home5Banner";
// // import Home5About from "@/components/view/about/Home5About";
// import Home5FeatureProject from "@/components/view/featuredProperty/Home5FeatureProject";
// import Home5HowItWork from "@/components/view/howItWork/Home5HowItWork";




// import History from "@/components/about/History";
// import Partners from "@/components/about/Partners";


// import Home1About from "@/components/about/Home1About";
// import Home4About from "@/components/about/Home4About";

// import Breadcrumb from "@/components/common/Breadcrumb";
// import BottomBar from "@/components/header/BottomBar";

// // import Footer from "@/components/common/Footer";
// // import Header from "@/components/common/Header";
// import Topbar from "@/components/common/Topbar";
// import Home2HowItWork from "@/components/view/howItWork/Home2HowItWork";
// import Home1Testimonial from "@/components/view/testimonial/Home1Testimonial";
// import Home1WhyChoose from "@/components/view/whyChoose/Home1WhyChoose";


// import Marquee from "react-fast-marquee";



// export default function Page() {
//   const domainContextValue = useContext(DomainDataContext);

//   // استخراج userData من القيمة (قد تكون null لو لم يوفّر الـProvider أي قيمة بعد)
//   const { userData } = domainContextValue || {};
//   const domainName ="qorhod.sa"
//   // const [domainName, setDomainName] = useState("");
//   const [ads, setAds] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // useEffect(() => {
//   //   if (typeof window !== "undefined") {
//   //     const dn = window.location.pathname.split("/")[1] || "";
//   //     setDomainName(dn);
//   //   }
//   // }, []);

//   useEffect(() => {
//     async function fetchAds() {
//       if (!domainName) return;
//       try {
//         setLoading(true);
//         // للتوضيح: أنت تملك دالة apiClient.getUserProfile(domainName, 10, 1);
//         const response = await apiClient.getUserProfile(domainName, 10, 1);
//         // نستخدم userData لجلب الإعلانات من userData أو من response مباشرة
//         const fetchedAds = userData?.user?.ads || [];
//         setAds(fetchedAds);
//       } catch (err) {
//         console.error("خطأ في جلب الإعلانات:", err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchAds();
//   }, [domainName]);

//   if (loading) {
//     return <div>جاري التحميل...</div>;
//   }


//   return (
//     <AdsContext.Provider value={{ ads, domainName }}>
//       <>
//         {/* <Box sx={{ mt: 4 }}>
//           <Home5Banner />
//         </Box> */}

//         {/* <Box
//           sx={{
//             mt: 4,
//             backgroundColor: "background.paper",
//             p: 2,
//             borderRadius: 2,
//           }}
//         >
//           <Home5About />
//         </Box> */}


//        {/* <Topbar /> */}
//       {/* <Header /> */}

//       {/* <Home1About /> */}


      
//       {/* <Home2HowItWork /> */}
//       {/* <Home1Testimonial /> */}


// {/* شركا النجاح  */}




//         <Box
//           sx={{
//             backgroundColor: "background.default",
//             p: 2,
//             borderRadius: 2,
//           }}
//         >

// <Home4About userData={userData} />

// {/* <Breadcrumb pageName="About" pageTitle="Our Brief History" /> */}
// {/* <Home1WhyChoose /> */}
// <History  userData={userData}/>
// <Partners />



//           {/* <Home5FeatureProject userData={userData} /> */}
//           <Home5HowItWork />
//         </Box>
//       </>
//     </AdsContext.Provider>
//   );
// }



"use client";
import React, { useEffect, useState, useContext } from "react";
import { DomainDataContext } from "./layout";
import apiClient from "@/api/apiClient";
import AdsContext from "@/context/AdsContext";
import { Box } from "@mui/material";

// استيراد الهوك الذي أنشأناه
import useDomain from "@/hooks/useDomain";

// مكونات مختلفة مستوردة (يمكنك تفعيلها أو تعطيلها حسب حاجتك)
// import Home5Banner from "@/components/view/Banner/Home5Banner";
// import Home5About from "@/components/view/about/Home5About";
import Home5FeatureProject from "@/components/view/featuredProperty/Home5FeatureProject";
import Home5HowItWork from "@/components/view/howItWork/Home5HowItWork";
import History from "@/components/about/History";
import Certificates from "@/components/about/Certificates";


import Partners from "@/components/about/Partners";
import Home1About from "@/components/about/Home1About";
import Home4About from "@/components/about/Home4About";
import Breadcrumb from "@/components/common/Breadcrumb";
import BottomBar from "@/components/header/BottomBar";
// import Footer from "@/components/common/Footer";
// import Header from "@/components/common/Header";
import Topbar from "@/components/common/Topbar";
import Home2HowItWork from "@/components/view/howItWork/Home2HowItWork";
import Home1Testimonial from "@/components/view/testimonial/Home1Testimonial";
import Home1WhyChoose from "@/components/view/whyChoose/Home1WhyChoose";
import Marquee from "react-fast-marquee";

export default function Page() {
  // نصل إلى الـ DomainDataContext للحصول على userData إن وجد
  const domainContextValue = useContext(DomainDataContext);
  const { userData } = domainContextValue || {};

  // استخدام الهوك لاستخراج الدومين بدلاً من كتابته بشكل ثابت
  const domainName = useDomain();

  // إعداد حالة الإعلانات
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);

  /**
   * جلب الإعلانات من الـ API اعتمادًا على الدومين
   */
  useEffect(() => {
    async function fetchAds() {
      // إذا لم يتوفر domainName بعد، لا نحاول طلب API
      if (!domainName) return;

      try {
        setLoading(true);
        // كمثال: apiClient.getUserProfile(domainName, 10, 1)
        const response = await apiClient.getUserProfile(domainName, 10, 1);
        // قد نستخدم response مباشرة أو نعتمد على userData القادم من Provider
        const fetchedAds = userData?.user?.ads || [];
        setAds(fetchedAds);
      } catch (err) {
        console.error("خطأ في جلب الإعلانات:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchAds();
  }, [domainName, userData]);

  if (loading) {
    return <div>جاري التحميل...</div>;
  }

  return (
    <AdsContext.Provider value={{ ads, domainName }}>
      <>
        {/* أمثلة على استخدام بعض المكوّنات */}
        {/* <Box sx={{ mt: 4 }}>
          <Home5Banner />
        </Box> */}

        {/* <Box
          sx={{
            mt: 4,
            backgroundColor: "background.paper",
            p: 2,
            borderRadius: 2,
          }}
        >
          <Home5About />
        </Box> */}

        {/* <Topbar /> */}
        {/* <Header /> */}
        {/* <Home1About /> */}
        {/* <Home2HowItWork /> */}
        {/* <Home1Testimonial /> */}

        <Box
          sx={{
            backgroundColor: "background.default",
            p: 2,
            borderRadius: 2,
          }}
        >
          <Home4About userData={userData} />
          {/* <Breadcrumb pageName="About" pageTitle="Our Brief History" /> */}
          {/* <Home1WhyChoose /> */}
          <History userData={userData} />
          <Certificates userData={userData} />

          
          <Partners userData={userData}  />

          {/* <Home5FeatureProject userData={userData} /> */}
          <Home5HowItWork />
        </Box>
      </>
    </AdsContext.Provider>
  );
}



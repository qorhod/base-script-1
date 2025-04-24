// "use client";

// import "./globals.css";
// import "../../public/assets/css/bootstrap-icons.css";
// import "../../public/assets/css/boxicons.min.css";
// import "../../public/assets/css/fontawesome.min.css";
// import "../../public/assets/css/bootstrap.min.css";
// import "../../public/assets/css/swiper-bundle.min.css";
// import "../../public/assets/css/nice-select.css";
// import "../../public/assets/css/style.css";
// import "../../public/assets/css/style-rtl.css";

// import Script from "next/script";
// import { usePathname } from "next/navigation";
// import { useState, useEffect } from "react";

// export default function RootLayout({ children }) {
//   const pathname = usePathname();
  
//   // Fix the className issue
//   const [htmlClass, setHtmlClass] = useState("mdl-js");

//   useEffect(() => {
//     // Ensure consistent class on the client
//     setHtmlClass("mdl-js");
//   }, []);

//   return (
//     <html lang="en" dir="rtl" className={htmlClass}>
//       <head>
//         <link rel="icon" href="/assets/img/sm-logo.svg" />
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap"
//           rel="stylesheet"
//         />
//       </head>
//       <body
//         className={`${
//           pathname === "/index5"
//             ? "home-5"
//             : pathname === "/index4"
//             ? "stype-2"
//             : ""
//         }`}
//       >
//         {children}
//         <Script
//           src="/assets/js/bootstrap.min.js"
//           strategy="lazyOnload"
//         />
//       </body>
//     </html>
//   );
// }
"use client";

import "./globals.css";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/fontawesome.min.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "../../public/assets/css/nice-select.css";
import "../../public/assets/css/style.css";
import "../../public/assets/css/style-rtl.css";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

// هوك لجلب الدومين
import useDomain from "@/hooks/useDomain";
// كائن للتخاطب مع الـ API
import apiClient from "@/api/apiClient";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  
  // لإصلاح مشكلة className في <html>
  const [htmlClass, setHtmlClass] = useState("mdl-js");
  
  // بيانات المستخدم (للحصول على اسم الشركة أو الفافيكون)
  const [userData, setUserData] = useState(null);

  // الفافيكون (favicon)
  const [faviconUrl, setFaviconUrl] = useState(null);

  // عنوان الصفحة
  const [pageTitle, setPageTitle] = useState("");

  // جلب الدومين
  const domainName = useDomain();

  // حالة لتخزين بيانات الإعلان إذا كنا في مسار /Advertisement
  const [adData, setAdData] = useState(null);

  // إصلاح className مرة واحدة
  useEffect(() => {
    setHtmlClass("mdl-js");
  }, []);

  // جلب بيانات المستخدم من الـ API (للفافيكون أو غيره)
  useEffect(() => {
    async function fetchData() {
      if (!domainName) return;
      try {
        const response = await apiClient.getUserProfileByDomain(domainName);
        const data = response.data;
        setUserData(data);

        // إعداد الفافيكون إن وُجد
        if (data?.user?.logoUrl) {
          setFaviconUrl(data.user.logoUrl);
        } else {
          setFaviconUrl(null);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchData();
  }, [domainName]);

  // جلب بيانات الإعلان إذا كان المسار يبدأ بـ /Advertisement
  useEffect(() => {
    async function fetchAdData() {
      if (!domainName) return;
      // إذا لم يكن المسار على شكل /Advertisement/xxxx
      if (!pathname.startsWith("/Advertisement")) return;

      // استخراج المعرف (adId) من المسار
      const segments = pathname.split("/").filter(Boolean);
      // يفترض segments[0] = "Advertisement", segments[1] = adId
      const adId = segments[1];
      if (!adId) return;

      try {
        const response = await apiClient.getAd(domainName, adId);
        setAdData(response.data);
      } catch (error) {
        console.error("Error fetching ad data:", error);
      }
    }
    fetchAdData();
  }, [pathname, domainName]);

  // تحديد عنوان الصفحة (pageTitle) بناءً على المسار والبيانات
  useEffect(() => {
    if (!pathname) return;

    // خريطة بسيطة للمسارات الثابتة
    const titleMap = {
      "/about": "من نحن",
      "/property-list": "الإعلانات",
      "/map": "خريطة الإعلانات",
      // يمكنك إضافة مسارات أخرى إن رغبت
    };

    // 1) إذا كانت الصفحة الرئيسية '/'
    if (pathname === "/") {
      if (userData?.user?.companyName) {
        setPageTitle(userData.user.companyName);
      } else {
        setPageTitle("صفحة غير معروفة");
      }
    } 
    // 2) إن كان المسار ضمن القائمة الثابتة
    else if (titleMap[pathname]) {
      setPageTitle(titleMap[pathname]);
    }
    // 3) إذا بدأ المسار بـ /Advertisement
    else if (pathname.startsWith("/Advertisement")) {
      // نفحص هل جلبنا بيانات الإعلان وهل فيها title
      if (adData?.title) {
        setPageTitle(adData.title);
      } else {
        setPageTitle("إعلان عقاري عادي");
      }
    }
    // 4) أي صفحة أخرى
    else {
      setPageTitle("صفحة غير معروفة");
    }
  }, [pathname, userData, adData]);

  return (
    <html lang="en" dir="rtl" className={htmlClass}>
      <head>
        {/* عنوان التبويب */}
        <title>{pageTitle}</title>

        {/* إذا وُجد رابط للفافيكون، نضيفه */}
        {faviconUrl && <link rel="icon" href={faviconUrl} />}

        {/* روابط أخرى (خطوط مثلاً) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,800;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${
          pathname === "/index5"
            ? "home-5"
            : pathname === "/index4"
            ? "stype-2"
            : ""
        }`}
      >
        {children}
        <Script src="/assets/js/bootstrap.min.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}

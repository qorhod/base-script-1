


// "use client";

// import React, { useState, useEffect, createContext } from "react";
// import apiClient from "@/api/apiClient";

// // مكوّن يعالج SSR للـ Emotion / MUI
// import ThemeRegistry from "@/app/index5/ThemeRegistry";

// // ملف التيمة الذي يحوي إعدادات التباين/الألوان
// // import theme from "@/app/index5/theme";
// import theme from "@/context/theme";

// // مكوّن ThemeProvider من MUI لتطبيق التيمة
// import { ThemeProvider } from "@mui/material/styles";
// import { Box } from "@mui/material";

// import Home5Tobbar from "@/components/view/topbar/Home5Tobbar";
// import BottomBar from "@/components/header/BottomBar";

// export const DomainDataContext = createContext(null);

// export default function Layout({ children }) {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     let domainName = "qorhod.sa";
//     if (typeof window !== "undefined") {
//       const fullPath = window.location.pathname;
//       const pathSegments = fullPath.split("/").filter(Boolean);
//       // domainName = pathSegments[0] || "";

//     }

//     async function fetchUserData() {
//       try {
//         const response = await apiClient.getUserProfileByDomain(domainName);
//         setUserData(response.data);
//       } catch (error) {
//         console.error("Error fetching user data by domain:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     if (domainName) {
//       fetchUserData();
//     } else {
//       setLoading(false);
//     }
//   }, []);

//   if (loading) {
//     return <div>جاري التحميل...</div>;
//   }

//   return (
//     <DomainDataContext.Provider value={{ userData, setUserData }}>
//       {/* ThemeRegistry يضبط الـ Cache الخاص بـ MUI/Emotion ليدعم SSR */}
//       <ThemeRegistry>

//                   {/* مثال: قد نريد ترويسة (Topbar) وبقيّة المحتوى يأخذ ألوان التيمة */}
//                   <Home5Tobbar
//             logoUrl={userData?.user?.logoUrl || ""}
//             companyName={userData?.user?.companyName || ""}
//           />
//         {/* نغلّف المحتوى كله بـ ThemeProvider لتمرير التيمة */}
//         <ThemeProvider theme={theme}>


//           {/* Box من MUI يقرأ قيم background و text من theme.palette */}
//           <Box
//             sx={{
//               backgroundColor: "background.default",
//               color: "text.primary",
//               minHeight: "100vh",
//             }}
//           >
//             {children}
//             <BottomBar />
//           </Box>
//         </ThemeProvider>
//       </ThemeRegistry>
//     </DomainDataContext.Provider>
//   );
// }



"use client";

import React, { useState, useEffect, createContext } from "react";
import apiClient from "@/api/apiClient";

// مكوّن يعالج SSR للـ Emotion / MUI
import ThemeRegistry from "@/app/index5/ThemeRegistry";

// ملف التيمة الذي يحوي إعدادات التباين/الألوان
import theme from "@/context/theme";

// مكوّن ThemeProvider من MUI لتطبيق التيمة
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";

import Home5Tobbar from "@/components/view/topbar/Home5Tobbar";
import BottomBar from "@/components/header/BottomBar";

// استيراد الهوك
import useDomain from "@/hooks/useDomain";

export const DomainDataContext = createContext(null);

export default function Layout({ children }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // بدلاً من let domainName = "qorhod.sa" نستخدم الهوك:
  const domainName = useDomain();

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await apiClient.getUserProfileByDomain(domainName);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data by domain:", error);
      } finally {
        setLoading(false);
      }
    }

    // نجلب البيانات إذا وُجد domainName
    if (domainName) {
      fetchUserData();
    } else {
      // لا يوجد دومين بعد (ربما في أول لحظات التحميل)
      setLoading(false);
    }
  }, [domainName]);

  if (loading) {
    return <div>جاري التحميل...</div>;
  }

  return (
    <DomainDataContext.Provider value={{ userData, setUserData }}>
      {/* ThemeRegistry يضبط الـ Cache الخاص بـ MUI/Emotion ليدعم SSR */}
      <ThemeRegistry>
        {/* مثال: قد نريد ترويسة (Topbar) وبقيّة المحتوى يأخذ ألوان التيمة */}
        <Home5Tobbar
          logoUrl={userData?.user?.logoUrl || ""}
          companyName={userData?.user?.companyName || ""}
        />
        
        {/* نغلّف المحتوى كله بـ ThemeProvider لتمرير التيمة */}
        <ThemeProvider theme={theme}>
          {/* Box من MUI يقرأ قيم background و text من theme.palette */}
          <Box
            sx={{
              backgroundColor: "background.default",
              color: "text.primary",
              minHeight: "100vh",
            }}
          >
            {children}
            <BottomBar />
          </Box>
        </ThemeProvider>
      </ThemeRegistry>
    </DomainDataContext.Provider>
  );
}



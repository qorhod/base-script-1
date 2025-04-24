
// import Footer from '@/components/common/Footer'
// // import Header from '@/components/common/Header'

// import BottomBar from "@/components/header/BottomBar";
// import Topbar from '@/components/common/Topbar'
// import React from 'react'



// export const metadata = {
//   title: 'Neckle - Property List',
//   openGraph: {
//     title: 'next js',
//     description: 'Neckle - Real Estate nextjs Template',
//   },
// }
// const Layout = ({children}) => {
  
//   return (
//     <>
//      <Topbar/>
//      {/* <Header/> */}
//      <BottomBar/>
//      {children}
//      {/* <Footer/>  */}

//     </>
//   )
// }

// export default Layout



///ـ+ـ+ـ+ـ+ـ+

// "use client";

// import Footer from '@/components/common/Footer'
// // import Header from '@/components/common/Header

// import BottomBar from "@/components/header/BottomBar";
// // import Topbar from '@/components/common/Topbar';
// import React, { useState, useEffect } from 'react';
// import Home5Tobbar from '@/components/view/topbar/Home5Tobbar';
// import useDomain from '@/hooks/useDomain';
// import apiClient from '@/api/apiClient';

// // تم إزالة export const metadata لأن تصدير metadata غير مسموح في client components

// const Layout = ({ children }) => {
//   const [userData, setUserData] = useState(null);
//   const domainName = useDomain();

//   useEffect(() => {
//     if (domainName) {
//       apiClient.getUserProfileByDomain(domainName)
//         .then(response => setUserData(response.data))
//         .catch(error => console.error("Error fetching user data:", error));
//     }
//   }, [domainName]);

//   return (
//     <>
//       {/* <Topbar /> */}
//       <Home5Tobbar
//         logoUrl={userData?.user?.logoUrl || ""}
//         companyName={userData?.user?.companyName || ""}
//       />
//       {/* <Header/> */}
//       <BottomBar />
//       {children}
//       {/* <Footer/>  */}
//     </>
//   );
// };

// export default Layout;





"use client";

import Footer from '@/components/common/Footer'
// import Header from '@/components/common/Header

import BottomBar from "@/components/header/BottomBar";
// import Topbar from '@/components/common/Topbar';
import React, { useState, useEffect } from 'react';
import Home5Tobbar from '@/components/view/topbar/Home5Tobbar';
import useDomain from '@/hooks/useDomain';
import apiClient from '@/api/apiClient';

// استيراد ملف التيمة وإطار عمل ThemeProvider و Box من MUI
import theme from "@/context/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";

// تم إزالة export const metadata لأن تصدير metadata غير مسموح في client components

const Layout = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const domainName = useDomain();

  useEffect(() => {
    if (domainName) {
      apiClient.getUserProfileByDomain(domainName)
        .then(response => setUserData(response.data))
        .catch(error => console.error("Error fetching user data:", error));
    }
  }, [domainName]);

  return (
    <ThemeProvider theme={theme}>
      {/* نستخدم Box لقراءة قيم background و text من التيمة */}
      <Box
        sx={{
          backgroundColor: "background.default",
          color: "text.primary",
          minHeight: "100vh",
        }}
      >
        {/* <Topbar /> */}
        <Home5Tobbar
          logoUrl={userData?.user?.logoUrl || ""}
          companyName={userData?.user?.companyName || ""}
        />
        {/* <Header/> */}
        <BottomBar />
        {children}
        {/* <Footer/>  */}
      </Box>
    </ThemeProvider>
  );
};

export default Layout;

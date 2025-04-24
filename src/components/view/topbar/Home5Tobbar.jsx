// import Link from 'next/link'
// import React from 'react'
// import LogoComponent from "@/components/view/logo/LogoComponent";


// const Home5Tobbar = () => {
//   return (
//     <div className="top-bar style-5">
//         <div className="logo-and-menu">
//             <div className="company-logo">
//             {/* <Link legacyBehavior href="/"><img src="/assets/img/logo.svg" alt="" /></Link> */}
//             <LogoComponent></LogoComponent>
//             </div>
//             <div className="menu">
//             <ul>
//                 <li><Link legacyBehavior href="poperty-listing-no-sidebar"><a>Newly Listed Home</a></Link></li>
//                 <li><Link legacyBehavior href="poperty-listing-no-sidebar"><a>Lowest Price</a></Link></li>
//                 <li><Link legacyBehavior href="special-offer"><a>Offer</a></Link></li>
//             </ul>
//             </div>
//         </div>
//         <div className="topbar-right">
//             <ul>
//             <li>
//                 <div className="hotline-area d-xl-flex d-none">
//                 <div className="icon">
//                     <img src="/assets/img/home1/icon/hotline-icon.svg" alt="" />
//                 </div>
//                 <div className="content">
//                     <span>To More Inquiry</span>
//                     <h6><a href="tel:+990737621432">+990-737 621 432</a></h6>
//                 </div>
//                 </div>
//             </li>
//             </ul>
//         </div>
//         </div>

//   )
// }

// export default Home5Tobbar



// ملف: src/components/view/topbar/Home5Tobbar.js


// ـ+ـ+ـ+ـ+
// +ـ+ـ+ـ+ـ


// import React from 'react';
// import { AppBar, Toolbar, Typography, Box } from '@mui/material';

// export default function Home5Tobbar({ logoUrl, companyName }) {
//   return (
//     <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
//       <Toolbar
//         sx={{
//           height: 80,       // ارتفاع الهيدر
//           alignItems: 'center', // لمركزة المحتوى عموديًا
//         }}
//       >
//         {/* إذا وُجد شعار، نعرضه، وإلا لا نعرض شيئًا */}
//         {logoUrl && (
//           <Box
//             component="img"
//             src={logoUrl}
//             alt="شعار الشركة"
//             sx={{
//               width: 50,    // قياس عرض الشعار
//               height: 50,   // قياس ارتفاع الشعار
//               marginRight: 2, // مسافة بين الشعار والنص
//             }}
//           />
//         )}

//         {/* إذا وجد اسم الشركة نعرضه؛ وإلا لا نعرض شيئًا */}
//         {companyName && (
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{
//               fontWeight: 'bold',
//               mt: 2,  // مسافة علوية بسيطة
//               mb: 2,  // مسافة سفلية بسيطة
//               mr: 3,  // مسافة على اليمين
//             }}
//           >
//             {companyName}
//           </Typography>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// }


// ـ+ـ+ـ+ـ


import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';

/**
 * شريط علوي بسيط يُظهر الشعار واسم الشركة في الجهة اليمنى (أو اليسرى حسب اتجاه الموقع)،
 * وزر “تسجيل الدخول” في الجهة المقابلة.
 *
 * props:
 *  - logoUrl     رابط صورة الشعار (اختياري)
 *  - companyName اسم الشركة (اختياري)
 */
export default function Home5Tobbar({ logoUrl, companyName }) {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',
        color: 'black',
        boxShadow: 3,
      }}
    >
      <Toolbar
        sx={{
          height: { xs: 64, sm: 72, md: 80 },
          px: { xs: 2, sm: 3, md: 4 },
          alignItems: 'center',
        }}
      >
        {/* الشعار */}
        {logoUrl && (
          <Box
            component="img"
            src={logoUrl}
            alt="شعار الشركة"
            sx={{ width: 50, height: 50, mr: 2 }}
    
          />
        )}

        {/* اسم الشركة */}
        {companyName && (
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', mr: 3 }}
          >
            {companyName}
          </Typography>
        )}

        {/* مسافة مرنة لدفع الزر إلى الجهة المقابلة */}
        <Box sx={{ flexGrow: 1 }} />

        {/* زر تسجيل الدخول */}
        <Button
          href="https://blokah.com/sign-in"
          variant="contained"
          sx={{
            backgroundColor: 'rgb(239, 185, 63)',
            color: 'black',
            textTransform: 'none',
            fontWeight: 'bold',
            borderRadius: 2,
            minWidth: { xs: 100, sm: 120 },
            '&:hover': {
              backgroundColor: 'rgba(239, 185, 63, 0.85)',
            },
          }}
        >
           دخول
        </Button>
      </Toolbar>
    </AppBar>
  );
}

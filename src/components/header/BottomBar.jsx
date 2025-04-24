// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";

// // مكوّنات MUI
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import BottomNavigation from "@mui/material/BottomNavigation";
// import BottomNavigationAction from "@mui/material/BottomNavigationAction";

// // الأيقونات
// import HomeIcon from "@mui/icons-material/Home";
// import CampaignIcon from "@mui/icons-material/Campaign";
// import MapIcon from "@mui/icons-material/Map";
// import InfoIcon from "@mui/icons-material/Info";
// import DescriptionIcon from "@mui/icons-material/Description";
// import ContactMailIcon from "@mui/icons-material/ContactMail";

// export default function BottomBar() {
//   const [value, setValue] = useState(0);
//   const [domainName, setDomainName] = useState("");

//   // دالة بسيطة تحدد أي تاب مفعل بناءً على اسم المسار
//   const getActiveIndex = (route) => {
//     switch (route) {
//       case "":
//         return 0; // الرئيسية
//       case "property-list":
//         return 1; // الإعلانات
//       case "map":
//         return 2; // الخريطة
//       case "about":
//         return 3; // من نحن
//       case "documents":
//         return 4; // المستندات
//       case "contact":
//         return 5; // التواصل
//       default:
//         return 0; // الوضع الافتراضي
//     }
//   };

//   // استخراج اسم الدومين الفرعي (إن وجد) والمسار الحقيقي
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const pathArr = window.location.pathname.split("/").filter(Boolean);
//       // إذا لم يكن المسار فارغًا، العنصر الأول يمكن أن يكون الدومين (domainName)
//       const dn = pathArr[0] || ""; // أول جزء من الـ path
//       setDomainName(dn);

//       // التحقق: إذا كان الدومين ليس فارغًا، فالمسار يكون في pathArr[1]
//       // إن كان فارغًا (لا يوجد دومين مخصص)، فالمسار هو pathArr[0]
//       const routeIndex = dn ? 1 : 0;
//       const route = pathArr[routeIndex] || ""; // قد يكون "" إذا كانت الصفحة الرئيسية

//       // بناءً على المسار، نحدد أي تبويب مفعل
//       setValue(getActiveIndex(route));
//     }
//   }, []);

//   // دالة صغيرة تُعيد الرابط الكامل بإضافة domainName إن وُجد
//   const withDomain = (path) => {
//     return domainName
//       ? `/${domainName}${path.startsWith("/") ? path : `/${path}`}`
//       : path;
//   };

//   return (
//     <Box sx={{ pb: 7 }}>
//       <Paper
//         elevation={5}
//         sx={{
//           position: "fixed",
//           bottom: 0,
//           left: 0,
//           right: 0,
//           zIndex: 999,
//           borderTopLeftRadius: 20,
//           borderTopRightRadius: 20,
//           backgroundColor: "#EFB93F", // لون الشريط
//         }}
//       >
//         <BottomNavigation
//           value={value}
//           onChange={(event, newValue) => setValue(newValue)}
//           sx={{
//             backgroundColor: "transparent",
//             minHeight: 70, // زيادة ارتفاع الشريط

//             // الخصائص العامة لكل زر (غير مفعّل)
//             "& .MuiBottomNavigationAction-root": {
//               color: "#000", // أيقونة ونص باللون الأسود
//               minWidth: "auto",
//               minHeight: 70, // زيادة ارتفاع الزر
//               transition: "all 0.3s ease-in-out",
//               "&:hover": {
//                 backgroundColor: "rgba(0, 0, 0, 0.05)",
//               },
//             },

//             // عند اختيار زر معيّن (مفعّل)
//             "& .Mui-selected": {
//               // يجعل التسمية (الكتابة) باللون الأبيض
//               "& .MuiBottomNavigationAction-label": {
//                 color: "#fff",
//               },
//             },

//             // الأيقونة في التبويب المختار (لإظهار ظلّ وخلفية بيضاء)
//             "& .Mui-selected .MuiSvgIcon-root": {
//               backgroundColor: "#fff",
//               borderRadius: "50%",
//               boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
//               color: "#000", // أيقونة سوداء
//               padding: "4px",
//               marginBottom: "2px",
//             },

//             // حجم الخط في الوضع العادي وجعله عريضًا (Bold)
//             "& .MuiBottomNavigationAction-label": {
//               fontSize: "0.75rem",
//               fontWeight: "bold",
//             },

//             // تكبير الخط قليلاً عند التحديد
//             "& .Mui-selected, .Mui-selected > .MuiBottomNavigationAction-label": {
//               fontSize: "0.80rem",
//             },
//           }}
//           showLabels
//         >
//           <BottomNavigationAction
//             label="الرئيسية"
//             icon={<HomeIcon />}
//             component={Link}
//             href={withDomain("/")}
//           />
//           <BottomNavigationAction
//             label="الإعلانات"
//             icon={<CampaignIcon />}
//             component={Link}
//             href={withDomain("/property-list")}
//           />
//           <BottomNavigationAction
//             label="الخريطة"
//             icon={<MapIcon />}
//             component={Link}
//             href={withDomain("/map")}
//           />
//           <BottomNavigationAction
//             label="من نحن"
//             icon={<InfoIcon />}
//             component={Link}
//             href={withDomain("/about")}
//           />
//           {/* <BottomNavigationAction
//             label="المستندات"
//             icon={<DescriptionIcon />}
//             component={Link}
//             href={withDomain("/documents")}
//           /> */}
//           {/* <BottomNavigationAction
//             label="التواصل"
//             icon={<ContactMailIcon />}
//             component={Link}
//             href={withDomain("/contact")}
//           /> */}
//         </BottomNavigation>
//       </Paper>
//     </Box>
//   );
// }




"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // بدل useRouter من next/router

// مكوّنات MUI
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

// الأيقونات
import HomeIcon from "@mui/icons-material/Home";
import CampaignIcon from "@mui/icons-material/Campaign";
import MapIcon from "@mui/icons-material/Map";
import InfoIcon from "@mui/icons-material/Info";
import DescriptionIcon from "@mui/icons-material/Description";
import ContactMailIcon from "@mui/icons-material/ContactMail";

export default function BottomBar() {
  const [value, setValue] = useState(0);
  const [domainName, setDomainName] = useState("");

  // بديل useRouter ، لجلب المسار الحالي
  const pathname = usePathname();

  // دالة بسيطة تحدد أي تاب مفعل بناءً على اسم المسار
  const getActiveIndex = (route) => {
    switch (route) {
      case "":
        return 0; // الرئيسية
      case "property-list":
        return 1; // الإعلانات
      case "map":
        return 2; // الخريطة
      case "about":
        return 3; // من نحن
      case "documents":
        return 4; // المستندات
      case "contact":
        return 5; // التواصل
      default:
        return null; // الوضع الافتراضي
    }
  };

  useEffect(() => {
    if (!pathname) return;

    // تقسيم المسار عبر '/'
    const pathArr = pathname.split("/").filter(Boolean);

    // إذا ليس لديك دومين فرعي من الأساس وتريد فقط معالجة الروابط بشكل عادي،
    // يمكنك التوقف هنا وأخذ pathArr[0] كـ route.
    // أما إذا تحتاج التعامل مع احتمال وجود دومين فرعي، فقم بالمنطق التالي:

    let dn = "";
    let route = "";

    if (pathArr.length === 1) {
      // المسار جزء واحد فقط، مثل "/map" أو "/about"
      // إذًا لا دومين فرعي هنا
      route = pathArr[0];      // "map" أو "about"
    } else if (pathArr.length >= 2) {
      // لدينا جزء أول وثانٍ
      dn = pathArr[0];         // نعدّه "اسم دومين" (إن كنت بحاجة له)
      route = pathArr[1];      // هذا هو الجزء الثاني
    }

    setDomainName(dn);
    setValue(getActiveIndex(route));
  }, [pathname]);

  return (
    <Box sx={{ pb: 7 }}>
      <Paper
        elevation={5}
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: "#EFB93F", // لون الشريط
        }}
      >
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          sx={{
            backgroundColor: "transparent",
            minHeight: 70, // زيادة ارتفاع الشريط

            // الخصائص العامة لكل زر (غير مفعّل)
            "& .MuiBottomNavigationAction-root": {
              color: "#000", // أيقونة ونص باللون الأسود
              minWidth: "auto",
              minHeight: 70, // زيادة ارتفاع الزر
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.05)",
              },
            },

            // عند اختيار زر معيّن (مفعّل)
            "& .Mui-selected": {
              // يجعل التسمية (الكتابة) باللون الأبيض
              "& .MuiBottomNavigationAction-label": {
                color: "#fff",
              },
            },

            // الأيقونة في التبويب المختار (لإظهار ظلّ وخلفية بيضاء)
            "& .Mui-selected .MuiSvgIcon-root": {
              backgroundColor: "#fff",
              borderRadius: "50%",
              boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
              color: "#000", // أيقونة سوداء
              padding: "4px",
              marginBottom: "2px",
            },

            // حجم الخط في الوضع العادي وجعله عريضًا (Bold)
            "& .MuiBottomNavigationAction-label": {
              fontSize: "0.75rem",
              fontWeight: "bold",
            },

            // تكبير الخط قليلاً عند التحديد
            "& .Mui-selected, .Mui-selected > .MuiBottomNavigationAction-label": {
              fontSize: "0.80rem",
            },
          }}
          showLabels
        >
          <BottomNavigationAction
            label="الرئيسية"
            icon={<HomeIcon />}
            component={Link}
            href="/"
          />
          <BottomNavigationAction
            label="الإعلانات"
            icon={<CampaignIcon />}
            component={Link}
            href="/property-list"
          />
          <BottomNavigationAction
            label="الخريطة"
            icon={<MapIcon />}
            component={Link}
            href="/map"
          />
          <BottomNavigationAction
            label="من نحن"
            icon={<InfoIcon />}
            component={Link}
            href="/about"
          />
          {/* <BottomNavigationAction
            label="المستندات"
            icon={<DescriptionIcon />}
            component={Link}
            href="/documents"
          />
          <BottomNavigationAction
            label="التواصل"
            icon={<ContactMailIcon />}
            component={Link}
            href="/contact"
          /> */}
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

// // مسار الملف: src/app/index5/theme.js

// "use client";

// import { createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     contrastThreshold: 1, 
//     tonalOffset: 0.1,
//     text: {
//       primary: "rgba(0, 0, 0, 0.8)",
//       secondary: "rgba(0, 0, 0, 0.6)",
//     },
//     background: {
//       default: "#f7f7f7", // خلفية عامة للصفحة
//       paper: "#fff",      // خلفية لعناصر الورقية (Paper/Card)
//       section: "#f0f0f0", // لون إضافي يمكن استعماله في أقسام معينة
//     },
//     // primary: { main: "#6a8caf" },
//     // secondary: { main: "#a5c0d9" },
//   },
// });

// export default theme;



"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    // رفع قيمة contrastThreshold يزيد من متطلبات تباين النص والخلفيات
    contrastThreshold: 4.5,
    tonalOffset: 0.2,

    // يمكنك اختيار الوضع (داكن dark أو فاتح light)
    mode: "light",

    background: {
      default: "rgb(240, 240, 240)", // خلفية داكنة
      paper: "#1a1a1a",   // خلفية لمكوّنات Paper
      section: "#222222", // خيار إضافي إن أردت استخدامه
    },
    text: {
      primary: "#ffffff", // نص أبيض
      secondary: "#cccccc",
    },
    primary: {
      main: "#ffffff",    // زر رئيسي بلون فاتح كمثال
    },
    secondary: {
      main: "#d32f2f",    // لون ثانوي أحمر غامق
    },
  },
});

export default theme;

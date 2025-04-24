// // مسار الملف: src/app/index5/ThemeRegistry.jsx

// "use client";

// import React from "react";
// import { useServerInsertedHTML } from "next/navigation";
// import { CacheProvider } from "@emotion/react";
// import createCache from "@emotion/cache";

// export default function ThemeRegistry({ children }) {
//   // ننشئ Cache مرة واحدة فقط عبر useState
//   const [cache] = React.useState(() => {
//     const _cache = createCache({ key: "mui" });
//     // تفعيل compat لزيادة التوافق مع SSR
//     _cache.compat = true;
//     return _cache;
//   });

//   // إدراج الأكواد التي تم إنشاؤها أثناء التصيير السيرفري في <head>
//   useServerInsertedHTML(() => (
//     <style
//       data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
//       dangerouslySetInnerHTML={{
//         __html: Object.values(cache.inserted).join(" "),
//       }}
//     />
//   ));

//   // تغليف الأبناء بـ CacheProvider كي يتعرف عليها MUI/Emotion
//   return <CacheProvider value={cache}>{children}</CacheProvider>;
// }




"use client";

import React from "react";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import createCache from "@emotion/cache";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "./theme"; // استورد التيمة من الملف السابق

export default function ThemeRegistry({ children }) {
  // ننشئ Cache مرة واحدة فقط عبر useState
  const [cache] = React.useState(() => {
    const _cache = createCache({ key: "mui" });
    // تفعيل compat لزيادة التوافق مع SSR
    _cache.compat = true;
    return _cache;
  });

  // إدراج الأكواد التي تم إنشاؤها أثناء التصيير السيرفري في <head>
  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(" "),
      }}
    />
  ));

  // تغليف الأبناء بـ CacheProvider كي يتعرف عليها MUI/Emotion
  // ثم بتغليفهم بـ ThemeProvider لتمرير التيمة إلى بقية المكونات
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline تُفعِّل لنا بعض التنسيقات الافتراضية من MUI */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}

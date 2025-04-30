// // هك جلب رابط الموقع 



// // src/hooks/useDomain.js
// import { useState, useEffect } from "react";

// export default function useDomain() {
//   const [domain, setDomain] = useState("");

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       let currentDomain = window.location.hostname; 
//       // لو تحب إزالة "www." لو موجودة:
//       if (currentDomain.startsWith("www.")) {
//         currentDomain = currentDomain.slice(4);
//       }
//       setDomain(currentDomain);
//     }
//   }, []);

//   return domain;
// }




// src/hooks/useDomain.js
import { useState, useEffect } from 'react';

/**
 * useDomain
 * ---------
 * يُرجع اسم النطاق الحالي كما يظهر في شريط العنوان مع الاحتفاظ
 * بأي سب-دومين، ويزيل البادئة "www." إن وُجدت.
 *
 * أمثلة:
 *   https://www.example.com     -> example.com
 *   https://tenant1.example.sa  -> tenant1.example.sa
 *   http://localhost:3000       -> localhost
 *
 * ملاحظة: أثناء الـ SSR سيُرجع هوك قيمة فارغة أولًا،
 * ثم تُحدَّث بعد التحميل (Hydration) في المتصفح.
 */
export default function useDomain() {
  const [domain, setDomain] = useState('');

  useEffect(() => {
    // يعمل فقط في المتصفح
    if (typeof window !== 'undefined') {
      let host = window.location.hostname;

      // حذف البادئة www. إن وُجدت
      if (host.startsWith('www.')) {
        host = host.slice(4);
      }

      setDomain(host);
    }
  }, []);

  return domain;
}

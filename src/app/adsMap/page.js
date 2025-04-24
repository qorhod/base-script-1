




// "use client";

// import React, { useEffect, useState } from "react";
// // import PropertyMap from "./component/map"; // ملف الابن
// import AdsMap from './component/map';

// export default function Page() {

//   const domainName = "qorhod.sa"
//   // const [domainName, setDomainName] = useState("");

//   // // استخراج اسم النطاق من المسار
//   // useEffect(() => {
//   //   if (typeof window !== "undefined") {
//   //     const segments = window.location.pathname.split("/").filter(Boolean);
//   //     const dn = segments[0] || ""; 
//   //     setDomainName(dn); 
//   //   }
//   // }, []);

//   return (
//     // نجعل الـdiv الأساسي يملأ الصفحة
//     <div style={{ width: "100%", height: "100vh", margin: 0, padding: 0 }}>
//       {/* إذا لدينا domainName، نعرض الخريطة */}
//       {domainName ? (
//         <AdsMap
//         apiKey={'AIzaSyBI5yN7eJdLSAeXmZ6NOQT4RNkqnYfcpVM'}
// domainName={domainName}
//           // نجعل الخريطة تملأ كامل العنصر الأب
//           style={{
//             width: "100%",
//             height: "100%",
//           }}
//         />
//       ) : (
//         <p style={{ color: "#333" }}>
//           لا يوجد اسم نطاق في المسار...
//         </p>
//       )}
//     </div>
//   );
// }









"use client";

import React, { useEffect, useState } from "react";
import AdsMap from "./component/map";

// استيراد الهوك
import useDomain from "@/hooks/useDomain";

export default function Page() {
  // استبدال الثابت بالهوك
  const domainName = useDomain();

  // مثال على حالة انتظار لو أحببت (اختياري)
  // عندما يكون الدومين فارغًا في بداية التحميل
  if (!domainName) {
    return (
      <div style={{ color: "#333", padding: "1rem" }}>
        جاري التحقق من الدومين...
      </div>
    );
  }

  return (
    // نجعل الـdiv الأساسي يملأ الصفحة
    <div style={{ width: "100%", height: "100vh", margin: 0, padding: 0 }}>
      {/* إذا لدينا domainName، نعرض الخريطة */}
      {domainName ? (
        <AdsMap
          apiKey={"AIzaSyBI5yN7eJdLSAeXmZ6NOQT4RNkqnYfcpVM"}
          domainName={domainName}
          // نجعل الخريطة تملأ كامل العنصر الأب
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      ) : (
        <p style={{ color: "#333" }}>لا يوجد اسم نطاق في المسار...</p>
      )}
    </div>
  );
}


// // هوك  تحميل الخريطه 

// // المسار: src/app/adsMap/component/useLoadGoogleMaps.js
// import { useState, useEffect } from 'react';

// /**
//  * هوك مخصص لتحميل خرائط جوجل بلغة محددة
//  *
//  * @param {string} apiKey  مفتاح خرائط جوجل
//  * @param {string} language  اللغة (مثل 'ar' أو 'en')
//  * @returns {object} { isLoaded, loadError }
//  */
// export default function useLoadGoogleMaps(apiKey, language = 'ar') {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [loadError, setLoadError] = useState(null);

//   useEffect(() => {
//     // إذا كانت الخرائط محملة مسبقًا
//     if (window.google && window.google.maps) {
//       setIsLoaded(true);
//       return;
//     }

//     // وإلا نضيف سكربت التحميل
//     const script = document.createElement('script');
//     script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&language=${language}`;
//     script.async = true;
//     script.defer = true;

//     script.onload = () => setIsLoaded(true);
//     script.onerror = () => setLoadError('فشل في تحميل خرائط جوجل.');
//     document.head.appendChild(script);

//     // تنظيف عند إلغاء المكون
//     return () => {
//       if (document.head.contains(script)) {
//         document.head.removeChild(script);
//       }
//     };
//   }, [apiKey, language]);

//   return { isLoaded, loadError };
// }





// الي فوق الاستدعا يدوي عن طريق الرابط الي تاحت عن طريق المكتبه 


// المسار: src/app/adsMap/component/useLoadGoogleMaps.js
import { useJsApiLoader } from '@react-google-maps/api';

/**
 * هوك مخصص لتحميل خرائط جوجل بلغة محددة عبر مكتبة @react-google-maps/api
 *
 * @param {string} apiKey  مفتاح خرائط جوجل
 * @param {string} language  اللغة (مثل 'ar' أو 'en')
 * @returns {object} { isLoaded, loadError }
 */
export default function useLoadGoogleMaps(apiKey, language = 'ar') {
  // تستدعي هوك useJsApiLoader من المكتبة
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',        // اسم معرف اختياري (لمنع التكرار)
    googleMapsApiKey: apiKey,       // مفتاح الخرائط
    language: language,             // اللغة
    // libraries: ["places"],       // إذا احتجت لمكاتب إضافية مثل Places أو Drawing
  });

  return { isLoaded, loadError };
}


// import React, { useEffect, useState, useRef, useCallback } from 'react';
// import './styles.css'; // إن كانت لديك أي تنسيقات إضافية
// // لا حاجة لملف SVG مستقل، لأننا سنضمّن الكود مباشرة (Data URL)

// /**
//  * هوك (Hook) لتحميل خرائط جوجل بلغة عربية
//  */
// function useLoadGoogleMaps(apiKey) {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [loadError, setLoadError] = useState(null);

//   useEffect(() => {
//     // إن كانت الخرائط محمّلة مسبقًا في window.google.maps، لن نحمّلها مجددًا
//     if (window.google && window.google.maps) {
//       setIsLoaded(true);
//       return;
//     }

//     const script = document.createElement('script');
//     script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&language=ar`;
//     script.async = true;
//     script.defer = true;

//     script.onload = () => setIsLoaded(true);
//     script.onerror = () => setLoadError('فشل في تحميل خرائط جوجل.');

//     document.head.appendChild(script);

//     // تنظيف السكربت عند إلغاء المكوّن
//     return () => {
//       if (document.head.contains(script)) {
//         document.head.removeChild(script);
//       }
//     };
//   }, [apiKey]);

//   return { isLoaded, loadError };
// }

// // -------------------------------------------------------
// // SVG الدبوس الجديد + المنزل مضمّن في كود
// // -------------------------------------------------------
// const markerSVG = `
// <svg 
//   xmlns="http://www.w3.org/2000/svg" 
//   viewBox="0 0 24 24"
//   fill="orange"    
//   stroke="#fff"     
//   stroke-width="1" 
// >
//   <!-- شكل الدبوس الأساسي -->
//   <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
//   <path d="M12 22v-2"></path>
  
//   <!-- أيقونة المنزل -->
//   <g transform="translate(6, 3) scale(0.5)">
//     <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
//   </g>
// </svg>
// `;

// // تحويل الـSVG أعلاه إلى Data URL
// const customMarkerUrl = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(markerSVG);

// /**
//  * مكوّن يعرض خريطة جوجل مع دبوس مخصص، ودائرة حول الموقع إن كان locationType="approximate".
//  *
//  * @param {string}   props.apiKey       - مفتاح خرائط جوجل.
//  * @param {number}   props.lat          - خط العرض.
//  * @param {number}   props.lng          - خط الطول.
//  * @param {string}   props.locationType - "precise" (دبوس فقط) أو "approximate" (دبوس + دائرة).
//  * @param {number}   [props.zoom=14]    - مستوى التكبير الافتراضي.
//  * @param {boolean}  [props.disableUI]  - تعطيل واجهة خرائط جوجل.
//  * @param {string}   [props.mapTypeId]  - نوع الخريطة: "roadmap", "satellite", "hybrid", "terrain".
//  * @param {Object}   [props.style]      - ستايل الخريطة (width/height).
//  */
// export default function PropertyMap({
//   apiKey,
//   lat = 24.7136,            // افتراضيًا على الرياض
//   lng = 46.6753,
//   locationType = 'precise', // إما "precise" أو "approximate"
//   zoom = 14,
//   disableUI = false,
//   mapTypeId = 'roadmap',
//   style = { width: '100%', height: '100vh' },
// }) {
//   const mapRef = useRef(null);         // العنصر الذي سترسم فيه الخريطة
//   const mapInstanceRef = useRef(null); // كائن الخريطة بعد إنشائه
//   const markerRef = useRef(null);      // كائن الـ Marker
//   const circleRef = useRef(null);      // كائن الدائرة (للمكان التقريبي)

//   // تحميل خرائط جوجل
//   const { isLoaded, loadError } = useLoadGoogleMaps(apiKey);

//   // ثوابت خاصة بالدائرة
//   const baseRadius = 5000; // نصف قطر الدائرة الأساسي
//   const baseZoom = 10;     // المستوى الذي بُني عليه baseRadius (لتكبير/تصغير الدائرة)

//   // --------------------------------------------------------------------
//   // إنشاء أو تحديث الدبوس
//   // --------------------------------------------------------------------
//   const createOrUpdateMarker = useCallback((map, position) => {
//     if (!markerRef.current) {
//       // إنشاء ماركر لأول مرة
//       markerRef.current = new window.google.maps.Marker({
//         position,
//         map,
//         icon: {
//           url: customMarkerUrl, 
//           scaledSize: new window.google.maps.Size(40, 40), // حجم الأيقونة
//         },
//       });
//     } else {
//       // لو كان الدبوس موجود، حدث موضعه
//       markerRef.current.setPosition(position);
//       markerRef.current.setMap(map);
//     }
//   }, []);

//   // --------------------------------------------------------------------
//   // إنشاء أو تحديث الدائرة
//   // --------------------------------------------------------------------
//   const createOrUpdateCircle = useCallback((map, center) => {
//     if (!circleRef.current) {
//       // إنشاء دائرة لأول مرة
//       circleRef.current = new window.google.maps.Circle({
//         center,
//         map,
//         fillColor: '#FF0000',
//         fillOpacity: 0.2,
//         strokeColor: '#FF0000',
//         strokeOpacity: 0.8,
//         strokeWeight: 2,
//       });
//     } else {
//       // لو كانت موجودة، حدث المركز
//       circleRef.current.setCenter(center);
//       circleRef.current.setMap(map);
//     }
//   }, []);

//   // --------------------------------------------------------------------
//   // تحديث نصف قطر الدائرة عند تغيير التكبير
//   // --------------------------------------------------------------------
//   const updateCircleRadius = useCallback(() => {
//     if (!circleRef.current || !mapInstanceRef.current) return;
//     const currentZoom = mapInstanceRef.current.getZoom();
//     const factor = 2 ** (baseZoom - currentZoom);
//     circleRef.current.setRadius(baseRadius * factor);
//   }, [baseRadius, baseZoom]);

//   // --------------------------------------------------------------------
//   // تطبيق نوع الموقع (precise أو approximate)
//   // --------------------------------------------------------------------
//   const applyLocationType = useCallback(
//     (map, position, type) => {
//       // إزالة الدائرة السابقة (إن وجدت)
//       if (circleRef.current) {
//         circleRef.current.setMap(null);
//       }

//       // ضع الدبوس
//       createOrUpdateMarker(map, position);

//       // إن كان المكان تقريبي، أضف دائرة حوله
//       if (type === 'approximate') {
//         createOrUpdateCircle(map, position);
//         updateCircleRadius();
//       }
//     },
//     [createOrUpdateMarker, createOrUpdateCircle, updateCircleRadius]
//   );

//   // --------------------------------------------------------------------
//   // إنشاء الخريطة عند التحميل لأول مرة
//   // --------------------------------------------------------------------
//   useEffect(() => {
//     if (isLoaded && !mapInstanceRef.current && mapRef.current) {
//       const mapOptions = {
//         center: { lat, lng },
//         zoom,
//         mapTypeId,
//         disableDefaultUI: disableUI,
//       };

//       const map = new window.google.maps.Map(mapRef.current, mapOptions);
//       mapInstanceRef.current = map;

//       // ضع الدبوس/الدائرة
//       applyLocationType(map, { lat, lng }, locationType);

//       // عند تغيير الزوم، نحدّث الدائرة لو كان المكان approximate
//       map.addListener('zoom_changed', () => {
//         if (locationType === 'approximate') {
//           updateCircleRadius();
//         }
//       });
//     }
//   }, [
//     isLoaded,
//     lat,
//     lng,
//     zoom,
//     mapTypeId,
//     disableUI,
//     locationType,
//     applyLocationType,
//     updateCircleRadius,
//   ]);

//   // --------------------------------------------------------------------
//   // عند تغيير الإحداثيات أو نوع الموقع بعد إنشاء الخريطة
//   // --------------------------------------------------------------------
//   useEffect(() => {
//     const map = mapInstanceRef.current;
//     if (isLoaded && map) {
//       // انقل الخريطة للمركز الجديد
//       map.setCenter({ lat, lng });
//       map.setZoom(zoom);

//       // طبّق نوع الموقع (precise أو approximate)
//       applyLocationType(map, { lat, lng }, locationType);
//     }
//   }, [isLoaded, lat, lng, zoom, locationType, applyLocationType]);

//   // --------------------------------------------------------------------
//   // في حال كان هناك خطأ أثناء تحميل السكربت
//   // --------------------------------------------------------------------
//   if (loadError) {
//     return <div style={{ color: 'red' }}>{loadError}</div>;
//   }

//   // --------------------------------------------------------------------
//   // في حال لم يتم التحميل بعد
//   // --------------------------------------------------------------------
//   if (!isLoaded) {
//     return <div>جاري تحميل الخرائط...</div>;
//   }

//   // --------------------------------------------------------------------
//   // عنصر الخريطة النهائي
//   // --------------------------------------------------------------------
//   return (
//     <div
//       ref={mapRef}
//       style={style} // يمكن تعديل العرض/الارتفاع من خارج المكوّن
//     />
//   );
// }

// +ـ++ـ+ـ+ــ
// SingleLocationMap.jsx

// import React, { useEffect, useRef, useState } from 'react';
// import { Box, Button } from '@mui/material';
// import MapIcon from '@mui/icons-material/Map';
// import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';

// /**
//  * دالة بسيطة لتحميل خرائط جوجل بلغة عربية (أو أي لغة أخرى).
//  * ستُستدعى مرة واحدة فقط، وحين يكتمل التحميل يصبح isLoaded=true.
//  */
// function useLoadGoogleMaps(apiKey, language = 'ar') {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [loadError, setLoadError] = useState(null);

//   useEffect(() => {
//     // إذا كانت خرائط جوجل محمّلة مسبقاً
//     if (window.google && window.google.maps) {
//       setIsLoaded(true);
//       return;
//     }

//     const script = document.createElement('script');
//     script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&language=${language}`;
//     script.async = true;
//     script.defer = true;

//     script.onload = () => setIsLoaded(true);
//     script.onerror = () => setLoadError('فشل في تحميل خرائط جوجل.');

//     document.head.appendChild(script);
//   }, [apiKey, language]);

//   return { isLoaded, loadError };
// }

// /**
//  * مكوّن أزرار التحكم بالخريطة:
//  * زر وحيد يبدّل بين الخريطة العادية (roadmap) والقمر الصناعي (satellite).
//  */
// function MapControls({ onMapTypeChange }) {
//   // نتتبع نوع الخريطة الحالي لعرض الأيقونة المناسبة
//   const [mapType, setMapType] = useState('roadmap');

//   const handleToggleMapType = () => {
//     // التبديل بين النوعين
//     const newType = mapType === 'roadmap' ? 'satellite' : 'roadmap';
//     setMapType(newType);
//     onMapTypeChange(newType);
//   };

//   return (
//     <Box
//       sx={{
//         position: 'absolute',
//         top: '10px',
//         right: '10px',
//         zIndex: 9999,
//         backgroundColor: 'rgba(255, 255, 255, 0.8)',
//         borderRadius: 1,
//         boxShadow: 3,
//       }}
//     >
//       <Button
//         variant="contained"
//         onClick={handleToggleMapType}
//         sx={{
//           minWidth: 48,
//           minHeight: 48,
//           p: 1,
//           backgroundColor: '#EFB93F',
//           '&:hover': {
//             backgroundColor: '#DBA038',
//           },
//         }}
//       >
//         {mapType === 'roadmap' ? (
//           <SatelliteAltIcon sx={{ color: '#000' }} />
//         ) : (
//           <MapIcon sx={{ color: '#000' }} />
//         )}
//       </Button>
//     </Box>
//   );
// }

// /**
//  * مكوّن يعرض خريطة جوجل لموقع واحد (ماركر واحد)،
//  * مع زر يبدّل بين الخريطة العادية والقمر الصناعي.
//  */
// export default function SingleLocationMap({
//   apiKey,
//   // إحداثيات الموقع الواحد
//   lat = 24.7136,  // مثال: الرياض
//   lng = 46.6753,
//   zoom = 14,
//   // مسار أيقونة الماركر
//   markerIconUrl = '/assets/img/inner-page/icon/address.svg',
//   // أضف إمكانية ضبط الحجم من خارج المكوّن
//   markerWidth = 45,
//   markerHeight = 45,

//   // تنسيق الخريطة
//   style = {
//     width: '100%',
//     height: '100vh',
//     minHeight: '500px',
//     margin: 0,
//     padding: 0,
//     overflow: 'hidden',
//   },
// }) {
//   const mapRef = useRef(null);
//   const mapInstanceRef = useRef(null);
//   const markerRef = useRef(null);

//   // تحميل خرائط جوجل بالعربية
//   const { isLoaded, loadError } = useLoadGoogleMaps(apiKey, 'ar');

//   // عند اكتمال التحميل لأول مرة
//   useEffect(() => {
//     if (isLoaded && !mapInstanceRef.current && mapRef.current) {
//       const mapOptions = {
//         center: { lat, lng },
//         zoom,
//         gestureHandling: 'cooperative', // <-- أضف هذه الخاصية

//         // gestureHandling: 'greedy',
//         zoomControl: false,
//         mapTypeControl: false,
//         streetViewControl: false,
//         fullscreenControl: true,
//         // نبدأ بالوضع العادي
//         mapTypeId: 'roadmap',
//       };

//       const map = new window.google.maps.Map(mapRef.current, mapOptions);
//       mapInstanceRef.current = map;

//       // إنشاء ماركر واحد
//       const marker = new window.google.maps.Marker({
//         position: { lat, lng },
//         icon: {
//           url: markerIconUrl,
//           // التحكم في حجم الأيقونة من خلال props
//           scaledSize: new window.google.maps.Size(markerWidth, markerHeight),
//           // اجعل نقطة الارتكاز في منتصف العرض، وأسفل الأيقونة
//           anchor: new window.google.maps.Point(markerWidth / 2, markerHeight),
//           // مكان ظهور أي نص label (إن وجد)
//           labelOrigin: new window.google.maps.Point(markerWidth / 2, markerHeight * 0.6),
//         },
//         map,
//       });
//       markerRef.current = marker;
//     }
//   }, [isLoaded, lat, lng, zoom, markerIconUrl, markerWidth, markerHeight]);

//   // إذا تغيّرت الإحداثيات بعد إنشاء الخريطة
//   useEffect(() => {
//     if (mapInstanceRef.current) {
//       mapInstanceRef.current.setCenter({ lat, lng });
//     }
//     if (markerRef.current) {
//       markerRef.current.setPosition({ lat, lng });
//     }
//   }, [lat, lng]);

//   // في حال فشل التحميل
//   if (loadError) {
//     return <div style={{ color: 'red' }}>فشل في تحميل خرائط جوجل: {loadError}</div>;
//   }

//   // في حال لم يتم التحميل بعد
//   if (!isLoaded) {
//     return <div>جاري تحميل الخرائط...</div>;
//   }

//   // دالة لتغيير نوع الخريطة بين 'roadmap' و 'satellite'
//   const handleMapTypeChange = (newType) => {
//     if (mapInstanceRef.current) {
//       mapInstanceRef.current.setMapTypeId(newType);
//     }
//   };

//   return (
//     <div style={{ position: 'relative', ...style }}>
//       {/* العنصر الذي تظهر فيه الخريطة */}
//       <div ref={mapRef} style={{ width: '100%', height: '100%' }} />

//       {/* زر التبديل بين الخريطة العادية والقمر الصناعي */}
//       <MapControls onMapTypeChange={handleMapTypeChange} />
//     </div>
//   );
// }




// SingleLocationMap.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Box, Button } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';

/* -------------------------------------------------------------------- */
/*                     ❶ هوك تحميل خرائط جوجل                            */
/* -------------------------------------------------------------------- */
function useLoadGoogleMaps(apiKey, language = 'ar') {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    if (window.google && window.google.maps) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&language=${language}`;
    script.async = true;
    script.defer = true;
    script.onload = () => setIsLoaded(true);
    script.onerror = () => setLoadError('فشل في تحميل خرائط جوجل.');

    document.head.appendChild(script);
  }, [apiKey, language]);

  return { isLoaded, loadError };
}

/* -------------------------------------------------------------------- */
/*                     ❷ أزرار التحكم بنوع الخريطة                       */
/* -------------------------------------------------------------------- */
function MapControls({ onMapTypeChange }) {
  const [mapType, setMapType] = useState('roadmap');

  const handleToggleMapType = () => {
    const newType = mapType === 'roadmap' ? 'satellite' : 'roadmap';
    setMapType(newType);
    onMapTypeChange(newType);
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 9999,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 1,
        boxShadow: 3,
      }}
    >
      <Button
        variant="contained"
        onClick={handleToggleMapType}
        sx={{
          minWidth: 48,
          minHeight: 48,
          p: 1,
          backgroundColor: '#EFB93F',
          '&:hover': { backgroundColor: '#DBA038' },
        }}
      >
        {mapType === 'roadmap' ? (
          <SatelliteAltIcon sx={{ color: '#000' }} />
        ) : (
          <MapIcon sx={{ color: '#000' }} />
        )}
      </Button>
    </Box>
  );
}

/* -------------------------------------------------------------------- */
/*               ❸ مكوّن الخريطة لموقع واحد (بدون قيم افتراضية)          */
/* -------------------------------------------------------------------- */
export default function SingleLocationMap({
  apiKey,
  lat,   // ← الآن «إلزامي»؛ بدون قيمة افتراضية
  lng,   // ← الآن «إلزامي»؛ بدون قيمة افتراضية
  zoom = 14,
  markerIconUrl = '/assets/img/inner-page/icon/address.svg',
  markerWidth = 45,
  markerHeight = 45,
  style = {
    width: '100%',
    height: '100vh',
    minHeight: '500px',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  },
}) {
  /* إذا لم تصل الإحداثيات → لا نعرض شيئاً */
  if (lat == null || lng == null) {
    return null; // يمكن استبدالها برسالة مكانية إن رغبت
  }

  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);

  const { isLoaded, loadError } = useLoadGoogleMaps(apiKey, 'ar');

  /* إنشاء الخريطة والماركر بعد تحميل الـ API مرة واحدة */
  useEffect(() => {
    if (!isLoaded || !mapRef.current || mapInstanceRef.current) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat, lng },
      zoom,
      gestureHandling: 'cooperative',
      zoomControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
      mapTypeId: 'roadmap',
    });
    mapInstanceRef.current = map;

    const marker = new window.google.maps.Marker({
      position: { lat, lng },
      icon: {
        url: markerIconUrl,
        scaledSize: new window.google.maps.Size(markerWidth, markerHeight),
        anchor: new window.google.maps.Point(markerWidth / 2, markerHeight),
        labelOrigin: new window.google.maps.Point(markerWidth / 2, markerHeight * 0.6),
      },
      map,
    });
    markerRef.current = marker;
  }, [isLoaded, lat, lng, zoom, markerIconUrl, markerWidth, markerHeight]);

  /* تحديث المركز إذا تغيّرت الإحداثيات */
  useEffect(() => {
    if (mapInstanceRef.current) mapInstanceRef.current.setCenter({ lat, lng });
    if (markerRef.current) markerRef.current.setPosition({ lat, lng });
  }, [lat, lng]);

  /* معالجة أخطاء أو حالة التحميل */
  if (loadError) return <div style={{ color: 'red' }}>فشل في تحميل خرائط جوجل: {loadError}</div>;
  if (!isLoaded) return <div>جاري تحميل الخرائط...</div>;

  /* تغيير نوع الخريطة */
  const handleMapTypeChange = (newType) => {
    if (mapInstanceRef.current) mapInstanceRef.current.setMapTypeId(newType);
  };

  return (
    <div style={{ position: 'relative', ...style }}>
      <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
      <MapControls onMapTypeChange={handleMapTypeChange} />
    </div>
  );
}


// // // المسار: src/app/adsMap/component/map.jsx

// // import React, { useEffect, useState, useRef, useCallback } from 'react';
// // import MarkerClusterer from '@google/markerclustererplus';

// // import useLoadGoogleMaps from './useLoadGoogleMaps';
// // import { MapControls } from './MapControls';
// // import { PropertyInfoWindow } from './PropertyInfoWindow';
// // import apiClient from '@/api/apiClient';

// // export default function AdsMap({
// //   apiKey,
// //   domainName,
// //   style = {
// //     width: '100%',
// //     height: '100vh',
// //     minHeight: '500px',
// //     margin: 0,
// //     padding: 0,
// //     overflow: 'hidden',
// //   },
// // }) {
// //   // ------------ مراجع الخريطة والكلستر ------------
// //   const mapRef = useRef(null);
// //   const mapInstanceRef = useRef(null);
// //   const clustererRef = useRef(null);

// //   // ------------ حالة البيانات ------------
// //   const [adsData, setAdsData] = useState([]);

// //   // سيحتوي معرّف الإعلان الذي تم اختياره إمّا من الماركر أو من السلايدر
// //   const [selectedAdId, setSelectedAdId] = useState(null);

// //   // ------------ مراجع لماركر نشط و InfoWindow ------------
// //   const activeMarkerRef = useRef(null);
// //   const infoWindowRef = useRef(null);

// //   // نخزّن جميع الماركرات في كائن { [adId]: Marker }
// //   const markersRef = useRef({});

// //   // ------------ تحميل خرائط جوجل ------------
// //   const { isLoaded, loadError } = useLoadGoogleMaps(apiKey, 'ar');

// //   /********************************************************************
// //    * دوال للتعامل مع الـ localStorage (تخزين/استرجاع إعلانات مقروءة)
// //    ********************************************************************/
// //   const readAdsFromStorage = () => {
// //     if (typeof window === 'undefined') return [];
// //     try {
// //       const stored = localStorage.getItem('readAds');
// //       return stored ? JSON.parse(stored) : [];
// //     } catch (error) {
// //       console.error('خطأ أثناء قراءة البيانات من localStorage:', error);
// //       return [];
// //     }
// //   };

// //   const saveAdsToStorage = (adIds) => {
// //     if (typeof window === 'undefined') return;
// //     try {
// //       localStorage.setItem('readAds', JSON.stringify(adIds));
// //     } catch (error) {
// //       console.error('خطأ أثناء حفظ البيانات في localStorage:', error);
// //     }
// //   };

// //   const isAdRead = (adId) => {
// //     const readAds = readAdsFromStorage();
// //     return readAds.includes(adId);
// //   };

// //   const markAdAsRead = (adId) => {
// //     const readAds = readAdsFromStorage();
// //     if (!readAds.includes(adId)) {
// //       readAds.push(adId);
// //       saveAdsToStorage(readAds);
// //     }
// //   };

// //   /***************************************************************
// //    * دوال لإعداد الأيقونات والألوان
// //    ***************************************************************/
// //   const getDefaultIconAndColor = (ad) => {
// //     // إعلان مميز → ذهبي
// //     if (ad.isFeatured) {
// //       return {
// //         iconUrl: '/assets/img/inner-page/icon/MapPin_Gold.svg',
// //         labelColor: '#000',
// //       };
// //     } else {
// //       // إعلان عادي
// //       return {
// //         iconUrl: '/assets/img/inner-page/icon/MapPin.svg',
// //         labelColor: '#fff',
// //       };
// //     }
// //   };

// //   const getReadIconAndColor = () => {
// //     return {
// //       iconUrl: '/assets/img/inner-page/icon/MapPin_readable.svg',
// //       labelColor: '#fff',
// //     };
// //   };

// //   const getActiveIconAndColor = () => {
// //     return {
// //       iconUrl: '/assets/img/inner-page/icon/MapPin_Grey.svg',
// //       labelColor: '#fff',
// //     };
// //   };

// //   // دالة تُنشئ أيقونة Marker بحجم وأصل محددين
// //   const buildCustomIcon = (url) => {
// //     return {
// //       url,
// //       scaledSize: new window.google.maps.Size(100, 100),
// //       anchor: new window.google.maps.Point(50, 75),
// //       labelOrigin: new window.google.maps.Point(50, 47),
// //     };
// //   };

// //   /**
// //    * إعادة الماركر لحالته الأصلية (ذهبي إن كان مميزًا، أو مقروء/عادي إن لم يكن)
// //    */
// //   const revertMarkerIcon = (marker) => {
// //     if (!marker || !marker.adData) return;
// //     const ad = marker.adData;

// //     if (ad.isFeatured) {
// //       // إعلان مميز يعود للذهبي
// //       const iconUrl = '/assets/img/inner-page/icon/MapPin_Gold.svg';
// //       const labelColor = '#000';
// //       marker.setIcon(buildCustomIcon(iconUrl));
// //       const oldLabel = marker.getLabel() || {};
// //       marker.setLabel({ ...oldLabel, color: labelColor });
// //       return;
// //     }

// //     // إعلان عادي
// //     if (isAdRead(ad._id)) {
// //       // مقروء
// //       const { iconUrl, labelColor } = getReadIconAndColor();
// //       marker.setIcon(buildCustomIcon(iconUrl));
// //       const oldLabel = marker.getLabel() || {};
// //       marker.setLabel({ ...oldLabel, color: labelColor });
// //     } else {
// //       // غير مقروء
// //       const { iconUrl, labelColor } = getDefaultIconAndColor(ad);
// //       marker.setIcon(buildCustomIcon(iconUrl));
// //       const oldLabel = marker.getLabel() || {};
// //       marker.setLabel({ ...oldLabel, color: labelColor });
// //     }
// //   };

// //   /**
// //    * جعل الماركر نشطًا (رمادي)
// //    */
// //   const setMarkerToActive = (marker) => {
// //     if (!marker) return;
// //     const { iconUrl, labelColor } = getActiveIconAndColor();
// //     marker.setIcon(buildCustomIcon(iconUrl));
// //     const oldLabel = marker.getLabel() || {};
// //     marker.setLabel({ ...oldLabel, color: labelColor });
// //   };

// //   /**
// //    * تمييز الإعلان كمقروء (إذا كان غير مميّز)
// //    */
// //   const setMarkerToRead = (marker) => {
// //     if (!marker || !marker.adData) return;
// //     const ad = marker.adData;
// //     // إن كان مميزًا، لا نغيّر
// //     if (ad.isFeatured) return;

// //     markAdAsRead(ad._id);
// //     // لا نغيّر الأيقونة الآن إن كان نشطًا؛
// //     // عند فقدانه النشاط، سيعود لأيقونة المقروء.
// //   };

// //   /***************************************************************
// //    * الدالة: اختيار إعلان كأن المستخدم نقر عليه (من السلايدر)
// //    ***************************************************************/
// //   const selectAdById = useCallback((adId) => {
// //     // 1) إعادة الماركر السابق إلى حالته الأصلية
// //     if (activeMarkerRef.current) {
// //       revertMarkerIcon(activeMarkerRef.current);
// //       activeMarkerRef.current = null;
// //     }

// //     // 2) ابحث عن الماركر في markersRef
// //     const targetMarker = markersRef.current[adId];
// //     if (!targetMarker) {
// //       console.warn('لا يوجد ماركر بالمعرف:', adId);
// //       return;
// //     }

// //     const ad = targetMarker.adData;

// //     // 3) إذا الإعلان غير مميّز، نجعله مقروء
// //     if (!ad.isFeatured) {
// //       setMarkerToRead(targetMarker);
// //     }

// //     // 4) نجعله نشطًا (رمادي)
// //     setMarkerToActive(targetMarker);
// //     activeMarkerRef.current = targetMarker;

// //     // 5) افتح الـInfoWindow (إذا رغبت بعرض نافذة من خرائط جوجل نفسها)
// //     if (!infoWindowRef.current) {
// //       infoWindowRef.current = new window.google.maps.InfoWindow();
// //     }

// //     // const contentString = `
// //     //   <div style="direction: rtl;">
// //     //     <h3>${ad.title || ''}</h3>
// //     //     <p>${ad.shortDescription || ''}</p>
// //     //     <button id="goToDetailsBtn" style="cursor: pointer;">التفاصيل</button>
// //     //   </div>
// //     // `;
// //     infoWindowRef.current.setContent(contentString);
// //     infoWindowRef.current.open(mapInstanceRef.current, targetMarker);

// //     window.google.maps.event.addListenerOnce(infoWindowRef.current, 'domready', () => {
// //       const goToDetailsBtn = document.getElementById('goToDetailsBtn');
// //       if (goToDetailsBtn) {
// //         goToDetailsBtn.addEventListener('click', () => {
// //           window.location.href = `/ads/${ad._id}`;
// //         });
// //       }
// //     });
// //   }, []);

// //   /***************************************************************
// //    * دالة لجلب الإعلانات حسب حدود الخريطة
// //    ***************************************************************/
// //   const fetchAdsByBounds = useCallback(async (bounds) => {
// //     if (!domainName) return;
// //     try {
// //       const sw = bounds.getSouthWest();
// //       const ne = bounds.getNorthEast();
// //       const minLat = sw.lat();
// //       const minLng = sw.lng();
// //       const maxLat = ne.lat();
// //       const maxLng = ne.lng();

// //       const response = await apiClient.getAdsMap(domainName, minLat, maxLat, minLng, maxLng);
// //       console.log('fetchAdsByBounds response:', response);

// //       setAdsData(response.data || []);
// //     } catch (err) {
// //       console.error('خطأ في جلب الإعلانات:', err);
// //     }
// //   }, [domainName]);

// //   /***************************************************************
// //    * إنشاء / تحديث MarkerClusterer وعرض الماركرات
// //    ***************************************************************/
// //   const updateCluster = useCallback((map, ads) => {
// //     // امسح الماركرات القديمة لو وجد clusterer
// //     if (clustererRef.current) {
// //       clustererRef.current.clearMarkers();
// //     } else {
// //       // أنشئه إن لم يكن موجودًا
// //       clustererRef.current = new MarkerClusterer(map, [], {
// //         imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
// //       });
// //     }

// //     markersRef.current = {};
// //     activeMarkerRef.current = null;

// //     if (ads && ads.length > 0) {
// //       console.log('Creating markers from ads:', ads);

// //       const markers = ads
// //         .map((ad) => {
// //           const lat = parseFloat(ad.lat);
// //           const lng = parseFloat(ad.lng);

// //           if (isNaN(lat) || isNaN(lng)) {
// //             console.warn('إحداثيات غير صالحة:', ad);
// //             return null;
// //           }

// //           // حدّد الأيقونة الأساسية
// //           let iconUrl, labelColor;
// //           if (ad.isFeatured) {
// //             iconUrl = '/assets/img/inner-page/icon/MapPin_Gold.svg';
// //             labelColor = '#000';
// //           } else if (isAdRead(ad._id)) {
// //             ({ iconUrl, labelColor } = getReadIconAndColor());
// //           } else {
// //             ({ iconUrl, labelColor } = getDefaultIconAndColor(ad));
// //           }

// //           // إعداد تسمية الماركر
// //           const markerLabel = {
// //             text: `${ad.originalPrice} ريال `,
// //             color: labelColor,
// //             fontSize: '12px',
// //             fontWeight: 'bold',
// //           };

// //           // أنشئ Marker
// //           const marker = new window.google.maps.Marker({
// //             position: { lat, lng },
// //             icon: buildCustomIcon(iconUrl),
// //             label: markerLabel,
// //             map,
// //           });

// //           // خزّن بيانات الإعلان داخل الماركر
// //           marker.adData = ad;

// //           // عند الضغط على الماركر
// //           marker.addListener('click', () => {
// //             // 1) أعد الماركر السابق لحالته (إن وجد)
// //             if (activeMarkerRef.current && activeMarkerRef.current !== marker) {
// //               revertMarkerIcon(activeMarkerRef.current);
// //             }

// //             // 2) إذا كان غير مميز → علمه كمقروء
// //             if (!ad.isFeatured) {
// //               setMarkerToRead(marker);
// //             }

// //             // 3) اجعل هذا الماركر نشطًا (رمادي)
// //             setMarkerToActive(marker);
// //             activeMarkerRef.current = marker;

// //             // 4) افتح InfoWindow من خرائط جوجل (اختياري)
// //             if (!infoWindowRef.current) {
// //               infoWindowRef.current = new window.google.maps.InfoWindow();
// //             }
// //             const contentString = `
// //               <div style="direction: rtl;">
// //                 <h3>${ad.title || ''}</h3>
// //                 <p>${ad.shortDescription || ''}</p>
// //                 <button id="goToDetailsBtn" style="cursor: pointer;">التفاصيل</button>
// //               </div>
// //             `;
// //             infoWindowRef.current.setContent(contentString);
// //             infoWindowRef.current.open(map, marker);

// //             window.google.maps.event.addListenerOnce(infoWindowRef.current, 'domready', () => {
// //               const goToDetailsBtn = document.getElementById('goToDetailsBtn');
// //               if (goToDetailsBtn) {
// //                 goToDetailsBtn.addEventListener('click', () => {
// //                   window.location.href = `/ads/${ad._id}`;
// //                 });
// //               }
// //             });

// //             // 5) أبلغ مكوّن PropertyInfoWindow باختيار هذا الإعلان
// //             setSelectedAdId(ad._id);
// //           });

// //           // ضعه في markersRef
// //           markersRef.current[ad._id] = marker;
// //           return marker;
// //         })
// //         .filter(Boolean);

// //       // أضف الماركرات للكلستر
// //       clustererRef.current.addMarkers(markers);
// //     }
// //   }, []);

// //   /***************************************************************
// //    * إعادة رسم الماركرات فقط عندما تتغير بيانات الإعلانات
// //    ***************************************************************/
// //   useEffect(() => {
// //     if (mapInstanceRef.current) {
// //       updateCluster(mapInstanceRef.current, adsData);
// //     }
// //   }, [adsData, updateCluster]);

// //   /***************************************************************
// //    * إنشاء الخريطة مرة واحدة
// //    ***************************************************************/
// //   useEffect(() => {
// //     if (!isLoaded || mapInstanceRef.current || !mapRef.current) return;

// //     const map = new window.google.maps.Map(mapRef.current, {
// //       center: { lat: 0, lng: 0 },
// //       zoom: 2,
// //       gestureHandling: 'greedy',
// //       zoomControl: true,
// //       mapTypeControl: false,
// //       streetViewControl: false,
// //       fullscreenControl: true,
// //     });

// //     mapInstanceRef.current = map;

// //     // عند انتهاء التحريك/التكبير نجلب الإعلانات ضمن الحدود
// //     map.addListener('idle', () => {
// //       const bounds = map.getBounds();
// //       if (bounds) {
// //         fetchAdsByBounds(bounds);
// //       }
// //     });
// //   }, [isLoaded, fetchAdsByBounds]);

// //   // في حال فشل التحميل
// //   if (loadError) {
// //     return <div style={{ color: 'red' }}>{loadError}</div>;
// //   }

// //   // أثناء تحميل الخرائط
// //   if (!isLoaded) {
// //     return <div>جاري تحميل الخرائط...</div>;
// //   }

// //   /**
// //    * تغيير نوع الخريطة (عادي / قمر صناعي)
// //    */
// //   const handleMapTypeChange = (type) => {
// //     if (mapInstanceRef.current) {
// //       mapInstanceRef.current.setMapTypeId(type);
// //     }
// //   };

// //   return (
// //     <div style={{ position: 'relative', ...style }}>
// //       {/* عنصر الخريطة */}
// //       <div ref={mapRef} style={{ width: '100%', height: '100%' }} />

// //       {/* أزرار التحكم في نوع الخريطة */}
// //       <MapControls onMapTypeChange={handleMapTypeChange} />

// //       {/*
// //         - لا نعرض PropertyInfoWindow إلا إذا "selectedAdId" ليس فارغًا
// //         - ads={adsData} = جميع الإعلانات المعروضة
// //         - selectedAdId = الإعلان المختار من الماركر
// //         - onSelectAd = لو المستخدم تحرّك في السلايدر, نختار ماركر في الخريطة
// //         - onClose = عند الضغط على زر الإغلاق
// //       */}
// //       {selectedAdId && (
// //         <PropertyInfoWindow
// //           ads={adsData}
// //           selectedAdId={selectedAdId}
// //           onSelectAd={selectAdById}
// //           onClose={() => {
// //             // عند الإغلاق، نعيد الماركر النشط لحالته ونفرغ selectedAdId
// //             if (activeMarkerRef.current) {
// //               revertMarkerIcon(activeMarkerRef.current);
// //               activeMarkerRef.current = null;
// //             }
// //             setSelectedAdId(null);
// //           }}
// //         />
// //       )}
// //     </div>
// //   );
// // }




// // المسار: src/app/adsMap/component/map.jsx

// import React, { useEffect, useState, useRef, useCallback } from 'react';
// import MarkerClusterer from '@google/markerclustererplus';

// import useLoadGoogleMaps from './useLoadGoogleMaps';
// import { MapControls } from './MapControls';
// import { PropertyInfoWindow } from './PropertyInfoWindow';
// import apiClient from '@/api/apiClient';

// export default function AdsMap({
//   apiKey,
//   domainName,
//   style = {
//     width: '100%',
//     height: '100vh',
//     minHeight: '500px',
//     margin: 0,
//     padding: 0,
//     overflow: 'hidden',
//   },
// }) {
//   // ------------ مراجع الخريطة والكلستر ------------
//   const mapRef = useRef(null);
//   const mapInstanceRef = useRef(null);
//   const clustererRef = useRef(null);

//   // ------------ حالة البيانات ------------
//   const [adsData, setAdsData] = useState([]);

//   // سيحتوي معرّف الإعلان الذي تم اختياره إمّا من الماركر أو من السلايدر
//   const [selectedAdId, setSelectedAdId] = useState(null);

//   // ------------ مراجع لماركر نشط و InfoWindow ------------
//   const activeMarkerRef = useRef(null);
//   const infoWindowRef = useRef(null);

//   // نخزّن جميع الماركرات في كائن { [adId]: Marker }
//   const markersRef = useRef({});

//   // ------------ تحميل خرائط جوجل ------------
//   const { isLoaded, loadError } = useLoadGoogleMaps(apiKey, 'ar');

//   /********************************************************************
//    * دوال للتعامل مع الـ localStorage (تخزين/استرجاع إعلانات مقروءة)
//    ********************************************************************/
//   const readAdsFromStorage = () => {
//     if (typeof window === 'undefined') return [];
//     try {
//       const stored = localStorage.getItem('readAds');
//       return stored ? JSON.parse(stored) : [];
//     } catch (error) {
//       console.error('خطأ أثناء قراءة البيانات من localStorage:', error);
//       return [];
//     }
//   };

//   const saveAdsToStorage = (adIds) => {
//     if (typeof window === 'undefined') return;
//     try {
//       localStorage.setItem('readAds', JSON.stringify(adIds));
//     } catch (error) {
//       console.error('خطأ أثناء حفظ البيانات في localStorage:', error);
//     }
//   };

//   const isAdRead = (adId) => {
//     const readAds = readAdsFromStorage();
//     return readAds.includes(adId);
//   };

//   const markAdAsRead = (adId) => {
//     const readAds = readAdsFromStorage();
//     if (!readAds.includes(adId)) {
//       readAds.push(adId);
//       saveAdsToStorage(readAds);
//     }
//   };

//   /***************************************************************
//    * دوال لإعداد الأيقونات والألوان
//    ***************************************************************/
//   const getDefaultIconAndColor = (ad) => {
//     // إعلان مميز → ذهبي
//     if (ad.isFeatured) {
//       return {
//         iconUrl: '/assets/img/inner-page/icon/MapPin_Gold.svg',
//         labelColor: '#000',
//       };
//     } else {
//       // إعلان عادي
//       return {
//         iconUrl: '/assets/img/inner-page/icon/MapPin.svg',
//         labelColor: '#fff',
//       };
//     }
//   };

//   const getReadIconAndColor = () => {
//     return {
//       iconUrl: '/assets/img/inner-page/icon/MapPin_readable.svg',
//       labelColor: '#fff',
//     };
//   };

//   const getActiveIconAndColor = () => {
//     return {
//       iconUrl: '/assets/img/inner-page/icon/MapPin_Grey.svg',
//       labelColor: '#fff',
//     };
//   };

//   // دالة تُنشئ أيقونة Marker بحجم وأصل محددين
//   const buildCustomIcon = (url) => {
//     return {
//       url,
//       scaledSize: new window.google.maps.Size(100, 100),
//       anchor: new window.google.maps.Point(50, 75),
//       labelOrigin: new window.google.maps.Point(50, 47),
//     };
//   };

//   /**
//    * إعادة الماركر لحالته الأصلية (ذهبي إن كان مميزًا، أو مقروء/عادي إن لم يكن)
//    */
//   const revertMarkerIcon = (marker) => {
//     if (!marker || !marker.adData) return;
//     const ad = marker.adData;

//     if (ad.isFeatured) {
//       // إعلان مميز يعود للذهبي
//       const iconUrl = '/assets/img/inner-page/icon/MapPin_Gold.svg';
//       const labelColor = '#000';
//       marker.setIcon(buildCustomIcon(iconUrl));
//       const oldLabel = marker.getLabel() || {};
//       marker.setLabel({ ...oldLabel, color: labelColor });
//       return;
//     }

//     // إعلان عادي
//     if (isAdRead(ad._id)) {
//       // مقروء
//       const { iconUrl, labelColor } = getReadIconAndColor();
//       marker.setIcon(buildCustomIcon(iconUrl));
//       const oldLabel = marker.getLabel() || {};
//       marker.setLabel({ ...oldLabel, color: labelColor });
//     } else {
//       // غير مقروء
//       const { iconUrl, labelColor } = getDefaultIconAndColor(ad);
//       marker.setIcon(buildCustomIcon(iconUrl));
//       const oldLabel = marker.getLabel() || {};
//       marker.setLabel({ ...oldLabel, color: labelColor });
//     }
//   };

//   /**
//    * جعل الماركر نشطًا (رمادي)
//    */
//   const setMarkerToActive = (marker) => {
//     if (!marker) return;
//     const { iconUrl, labelColor } = getActiveIconAndColor();
//     marker.setIcon(buildCustomIcon(iconUrl));
//     const oldLabel = marker.getLabel() || {};
//     marker.setLabel({ ...oldLabel, color: labelColor });
//   };

//   /**
//    * تمييز الإعلان كمقروء (إذا كان غير مميّز)
//    */
//   const setMarkerToRead = (marker) => {
//     if (!marker || !marker.adData) return;
//     const ad = marker.adData;
//     // إن كان مميزًا، لا نغيّر
//     if (ad.isFeatured) return;

//     markAdAsRead(ad._id);
//     // لا نغيّر الأيقونة الآن إن كان نشطًا؛
//     // عند فقدانه النشاط، سيعود لأيقونة المقروء.
//   };

//   /***************************************************************
//    * الدالة: اختيار إعلان كأن المستخدم نقر عليه (من السلايدر)
//    ***************************************************************/
//   const selectAdById = useCallback((adId) => {
//     // 1) إعادة الماركر السابق إلى حالته الأصلية
//     if (activeMarkerRef.current) {
//       revertMarkerIcon(activeMarkerRef.current);
//       activeMarkerRef.current = null;
//     }

//     // 2) ابحث عن الماركر في markersRef
//     const targetMarker = markersRef.current[adId];
//     if (!targetMarker) {
//       console.warn('لا يوجد ماركر بالمعرف:', adId);
//       return;
//     }

//     const ad = targetMarker.adData;

//     // 3) إذا الإعلان غير مميّز، نجعله مقروء
//     if (!ad.isFeatured) {
//       setMarkerToRead(targetMarker);
//     }

//     // 4) نجعله نشطًا (رمادي)
//     setMarkerToActive(targetMarker);
//     activeMarkerRef.current = targetMarker;

//     // // 5) افتح الـInfoWindow بمحتوى فارغ
//     // if (!infoWindowRef.current) {
//     //   infoWindowRef.current = new window.google.maps.InfoWindow();
//     // }

//     // // لم نعد نستخدم contentString؛ نجعل المحتوى فارغًا:
//     // infoWindowRef.current.setContent('');
//     // infoWindowRef.current.open(mapInstanceRef.current, targetMarker);

//     // لم نعد نحتاج التعامل مع زر "التفاصيل" بعد إزالة الـHTML
//   }, []);

//   /***************************************************************
//    * دالة لجلب الإعلانات حسب حدود الخريطة
//    ***************************************************************/
//   const fetchAdsByBounds = useCallback(async (bounds) => {
//     if (!domainName) return;
//     try {
//       const sw = bounds.getSouthWest();
//       const ne = bounds.getNorthEast();
//       const minLat = sw.lat();
//       const minLng = sw.lng();
//       const maxLat = ne.lat();
//       const maxLng = ne.lng();

//       const response = await apiClient.getAdsMap(domainName, minLat, maxLat, minLng, maxLng);
//       console.log('fetchAdsByBounds response:', response);

//       setAdsData(response.data || []);
//     } catch (err) {
//       console.error('خطأ في جلب الإعلانات:', err);
//     }
//   }, [domainName]);

//   /***************************************************************
//    * إنشاء / تحديث MarkerClusterer وعرض الماركرات
//    ***************************************************************/
//   const updateCluster = useCallback((map, ads) => {
//     // امسح الماركرات القديمة لو وجد clusterer
//     if (clustererRef.current) {
//       clustererRef.current.clearMarkers();
//     } else {
//       // أنشئه إن لم يكن موجودًا
//       clustererRef.current = new MarkerClusterer(map, [], {
//         imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
//       });
//     }

//     markersRef.current = {};
//     activeMarkerRef.current = null;

//     if (ads && ads.length > 0) {
//       console.log('Creating markers from ads:', ads);

//       const markers = ads
//         .map((ad) => {
//           const lat = parseFloat(ad.lat);
//           const lng = parseFloat(ad.lng);

//           if (isNaN(lat) || isNaN(lng)) {
//             console.warn('إحداثيات غير صالحة:', ad);
//             return null;
//           }

//           // حدّد الأيقونة الأساسية
//           let iconUrl, labelColor;
//           if (ad.isFeatured) {
//             iconUrl = '/assets/img/inner-page/icon/MapPin_Gold.svg';
//             labelColor = '#000';
//           } else if (isAdRead(ad._id)) {
//             ({ iconUrl, labelColor } = getReadIconAndColor());
//           } else {
//             ({ iconUrl, labelColor } = getDefaultIconAndColor(ad));
//           }

//           // منطق تحديد السعر المعروض في الماركر (خصم أم أصلي أم فراغ)
//           let labelPrice = '';
//           if (
//             ad.discountPrice &&
//             ad.originalPrice &&
//             ad.discountPrice < ad.originalPrice
//           ) {
//             labelPrice = ad.discountPrice;
//           } else if (ad.originalPrice) {
//             labelPrice = ad.originalPrice;
//           }
//           // إن لم يتوفر أي سعر، يبقى labelPrice فارغًا

//           // إعداد تسمية الماركر
//           const markerLabel = {
//             text: labelPrice ? `${labelPrice} ريال ` : '',
//             color: labelColor,
//             fontSize: '12px',
//             fontWeight: 'bold',
//           };

//           // أنشئ Marker
//           const marker = new window.google.maps.Marker({
//             position: { lat, lng },
//             icon: buildCustomIcon(iconUrl),
//             label: markerLabel,
//             map,
//           });

//           // خزّن بيانات الإعلان داخل الماركر
//           marker.adData = ad;

//           // عند الضغط على الماركر
//           marker.addListener('click', () => {
//             // 1) أعد الماركر السابق لحالته (إن وجد)
//             if (activeMarkerRef.current && activeMarkerRef.current !== marker) {
//               revertMarkerIcon(activeMarkerRef.current);
//             }

//             // 2) إذا كان غير مميز → علمه كمقروء
//             if (!ad.isFeatured) {
//               setMarkerToRead(marker);
//             }

//             // 3) اجعل هذا الماركر نشطًا (رمادي)
//             setMarkerToActive(marker);
//             activeMarkerRef.current = marker;

//             // 5) أبلغ مكوّن PropertyInfoWindow باختيار هذا الإعلان
//             setSelectedAdId(ad._id);
//           });

//           // ضعه في markersRef
//           markersRef.current[ad._id] = marker;
//           return marker;
//         })
//         .filter(Boolean);

//       // أضف الماركرات للكلستر
//       clustererRef.current.addMarkers(markers);
//     }
//   }, [
//     getDefaultIconAndColor,
//     getReadIconAndColor,
//     isAdRead,
//     revertMarkerIcon,
//     setMarkerToRead,
//     setMarkerToActive,
//   ]);

//   /***************************************************************
//    * إعادة رسم الماركرات فقط عندما تتغير بيانات الإعلانات
//    ***************************************************************/
//   useEffect(() => {
//     if (mapInstanceRef.current) {
//       updateCluster(mapInstanceRef.current, adsData);
//     }
//   }, [adsData, updateCluster]);

//   /***************************************************************
//    * إنشاء الخريطة مرة واحدة
//    ***************************************************************/
//   useEffect(() => {
//     if (!isLoaded || mapInstanceRef.current || !mapRef.current) return;

//     const map = new window.google.maps.Map(mapRef.current, {
//       center: { lat: 0, lng: 0 },
//       zoom: 2,
//       gestureHandling: 'greedy',
//       zoomControl: false,
//       mapTypeControl: false,
//       streetViewControl: false,
//       fullscreenControl: true,
//     });

//     mapInstanceRef.current = map;

//     // عند انتهاء التحريك/التكبير نجلب الإعلانات ضمن الحدود
//     map.addListener('idle', () => {
//       const bounds = map.getBounds();
//       if (bounds) {
//         fetchAdsByBounds(bounds);
//       }
//     });
//   }, [isLoaded, fetchAdsByBounds]);

//   // في حال فشل التحميل
//   if (loadError) {
//     return <div style={{ color: 'red' }}>{loadError}</div>;
//   }

//   // أثناء تحميل الخرائط
//   if (!isLoaded) {
//     return <div>جاري تحميل الخرائط...</div>;
//   }

//   /**
//    * تغيير نوع الخريطة (عادي / قمر صناعي)
//    */
//   const handleMapTypeChange = (type) => {
//     if (mapInstanceRef.current) {
//       mapInstanceRef.current.setMapTypeId(type);
//     }
//   };

//   return (
//     <div style={{ position: 'relative', ...style }}>
//       {/* عنصر الخريطة */}
//       <div ref={mapRef} style={{ width: '100%', height: '100%' }} />

//       {/* أزرار التحكم في نوع الخريطة */}
//       <MapControls onMapTypeChange={handleMapTypeChange} />

//       {/*
//         - لا نعرض PropertyInfoWindow إلا إذا "selectedAdId" ليس فارغًا
//         - ads={adsData} = جميع الإعلانات المعروضة
//         - selectedAdId = الإعلان المختار من الماركر
//         - onSelectAd = لو المستخدم تحرّك في السلايدر, نختار ماركر في الخريطة
//         - onClose = عند الضغط على زر الإغلاق
//       */}
//       {selectedAdId && (
//         <PropertyInfoWindow
//           domainName={domainName}
//           ads={adsData}
//           selectedAdId={selectedAdId}
//           onSelectAd={selectAdById}
//           onClose={() => {
//             // عند الإغلاق، نعيد الماركر النشط لحالته ونفرغ selectedAdId
//             if (activeMarkerRef.current) {
//               revertMarkerIcon(activeMarkerRef.current);
//               activeMarkerRef.current = null;
//             }
//             setSelectedAdId(null);
//           }}
//         />
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState, useRef, useCallback } from 'react';
import {

  Box

} from '@mui/material';

import MarkerClusterer from '@google/markerclustererplus';

import useLoadGoogleMaps from './useLoadGoogleMaps';
import { MapControls } from './MapControls';
import { PropertyInfoWindow } from './PropertyInfoWindow';
import MapFilters from './MapFilters';
import apiClient from '@/api/apiClient';

export default function AdsMap({
  apiKey,
  domainName,
  style = {
    width: '100%',
    height: '100vh',
    minHeight: '500px',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  },
}) {
  /***************************************************************
   * 1) الفلاتر في الـ State
   *    (قيم افتراضية كما تريدها للباك اند)
   ***************************************************************/
  const [filters, setFilters] = useState({
    subCategoryLabel: 'الكل',  // يمكن جعله "الكل" أو "بيع" أو "إيجار" افتراضياً
    propertyType: 'الكل',      // 'land' أو 'apartment' أو 'villa' أو '' = الكل
    city: '',
    district: '',
  });

  // عند التحميل الأول للصفحة → يمكنك مسح أي بيانات من localStorage أو إعادة تعيين الفلاتر
  useEffect(() => {
    // مثلاً: مسح العناصر المقروءة
    localStorage.removeItem('readAds');
    // إذا أردت أيضًا تعديل الفلاتر لقيم أخرى هنا، يمكنك ذلك
    // setFilters({
    //   subCategoryLabel: 'الكل',
    //   propertyType: '',
    //   city: '',
    //   district: '',
    // });
  }, []);

  // دالة استقبال التغييرات من مكوّن MapFilters
  const handleFilterChange = (newFilters) => {
    console.log(
      '%c[AdsMap] handleFilterChange - new filters:',
      'color: orange; font-weight: bold;',
      newFilters
    );
    setFilters(newFilters);
  };

  /***************************************************************
   * 1.5) جلب الشعار (logoUrl) من بروفايل المستخدم
   ***************************************************************/
  // إضافة جديدة: State للشعار
  const [logoUrl, setLogoUrl] = useState('');

  // إضافة جديدة: تأثير جانبي لجلب بيانات المستخدم وتحديث الشعار
  useEffect(() => {
    if (!domainName) return;

    const fetchProfile = async () => {
      try {
        const responseProfile = await apiClient.getUserProfile(domainName, 10, 1);
        const url = responseProfile.data?.profile?.logoUrl || "";
        setLogoUrl(url);
      } catch (error) {
        console.error('خطأ أثناء جلب الملف الشخصي:', error);
      }
    };

    fetchProfile();
  }, [domainName]);

  /***************************************************************
   * 2) مراجع الخريطة والبيانات
   ***************************************************************/
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const clustererRef = useRef(null);

  const [adsData, setAdsData] = useState([]);
  const [selectedAdId, setSelectedAdId] = useState(null);

  const activeMarkerRef = useRef(null);
  const markersRef = useRef({});

  // تحميل خرائط جوجل
  const { isLoaded, loadError } = useLoadGoogleMaps(apiKey, 'ar');

  /***************************************************************
   * 3) الدوال المساعدة: readAds في localStorage
   ***************************************************************/
  const readAdsFromStorage = () => {
    if (typeof window === 'undefined') return [];
    try {
      const stored = localStorage.getItem('readAds');
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('خطأ أثناء قراءة البيانات من localStorage:', error);
      return [];
    }
  };

  const saveAdsToStorage = (adIds) => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem('readAds', JSON.stringify(adIds));
    } catch (error) {
      console.error('خطأ أثناء حفظ البيانات في localStorage:', error);
    }
  };

  const isAdRead = (adId) => readAdsFromStorage().includes(adId);

  const markAdAsRead = (adId) => {
    const readAds = readAdsFromStorage();
    if (!readAds.includes(adId)) {
      readAds.push(adId);
      saveAdsToStorage(readAds);
    }
  };

  /***************************************************************
   * 4) الأيقونات والألوان للماركرات
   ***************************************************************/
  const getDefaultIconAndColor = (ad) => {
    if (ad.isFeatured) {
      // إعلان مميز → ذهبي
      return {
        iconUrl: '/assets/img/inner-page/icon/MapPin_Gold.svg',
        labelColor: '#000',
      };
    } else {
      // إعلان عادي
      return {
        iconUrl: '/assets/img/inner-page/icon/MapPin.svg',
        labelColor: '#fff',
      };
    }
  };

  const getReadIconAndColor = () => ({
    iconUrl: '/assets/img/inner-page/icon/MapPin_readable.svg',
    labelColor: '#fff',
  });

  const getActiveIconAndColor = () => ({
    iconUrl: '/assets/img/inner-page/icon/MapPin_Grey.svg',
    labelColor: '#fff',
  });

  const buildCustomIcon = (url) => ({
    url,
    scaledSize: new window.google.maps.Size(100, 100),
    anchor: new window.google.maps.Point(50, 75),
    labelOrigin: new window.google.maps.Point(50, 47),
  });

  // إعادة الماركر لحالته الأصلية (عند إلغاء التحديد)
  const revertMarkerIcon = (marker) => {
    if (!marker || !marker.adData) return;
    const ad = marker.adData;

    if (ad.isFeatured) {
      marker.setIcon(buildCustomIcon('/assets/img/inner-page/icon/MapPin_Gold.svg'));
      const oldLabel = marker.getLabel() || {};
      marker.setLabel({ ...oldLabel, color: '#000' });
      return;
    }

    if (isAdRead(ad._id)) {
      const { iconUrl, labelColor } = getReadIconAndColor();
      marker.setIcon(buildCustomIcon(iconUrl));
      const oldLabel = marker.getLabel() || {};
      marker.setLabel({ ...oldLabel, color: labelColor });
    } else {
      const { iconUrl, labelColor } = getDefaultIconAndColor(ad);
      marker.setIcon(buildCustomIcon(iconUrl));
      const oldLabel = marker.getLabel() || {};
      marker.setLabel({ ...oldLabel, color: labelColor });
    }
  };

  const setMarkerToActive = (marker) => {
    if (!marker) return;
    const { iconUrl, labelColor } = getActiveIconAndColor();
    marker.setIcon(buildCustomIcon(iconUrl));
    const oldLabel = marker.getLabel() || {};
    marker.setLabel({ ...oldLabel, color: labelColor });
  };

  const setMarkerToRead = (marker) => {
    if (!marker || !marker.adData) return;
    const ad = marker.adData;
    if (!ad.isFeatured) {
      markAdAsRead(ad._id);
    }
  };

  /***************************************************************
   * 5) اختيار إعلان على الخريطة
   ***************************************************************/
  const selectAdById = useCallback((adId) => {
    // إذا كان هناك ماركر مفعّل سابقًا فأعده لحالته
    if (activeMarkerRef.current) {
      revertMarkerIcon(activeMarkerRef.current);
      activeMarkerRef.current = null;
    }

    const targetMarker = markersRef.current[adId];
    if (!targetMarker) {
      console.warn('لا يوجد ماركر بالمعرف:', adId);
      return;
    }

    const ad = targetMarker.adData;
    if (!ad.isFeatured) {
      setMarkerToRead(targetMarker);
    }

    setMarkerToActive(targetMarker);
    activeMarkerRef.current = targetMarker;
    setSelectedAdId(ad._id);
  }, []);

  /***************************************************************
   * 6) الدالة لجلب الإعلانات عبر POST (بالفلاتر + Bounds)
   ***************************************************************/
  const fetchAdsByBounds = useCallback(
    async (bounds) => {
      if (!domainName) return;

      try {
        const sw = bounds.getSouthWest();
        const ne = bounds.getNorthEast();
        const minLat = sw.lat();
        const minLng = sw.lng();
        const maxLat = ne.lat();
        const maxLng = ne.lng();

        const { subCategoryLabel, propertyType, city, district } = filters;

        console.log(
          '%c[AdsMap] fetchAdsByBounds - Bounds:',
          'color: blue; font-weight: bold;',
          {
            swLat: minLat,
            swLng: minLng,
            neLat: maxLat,
            neLng: maxLng,
          }
        );
        console.log(
          '%c[AdsMap] fetchAdsByBounds - filters (سيتم إرسالها للباك):',
          'color: blue; font-weight: bold;',
          {
            subCategoryLabel,
            propertyType,
            city,
            district,
          }
        );

        // استدعاء الـ API
        const response = await apiClient.postAdsMap(
          domainName,
          minLat,
          maxLat,
          minLng,
          maxLng,
          propertyType,
          city,
          district,
          subCategoryLabel
        );

        console.log(
          '%c[AdsMap] fetchAdsByBounds - response:',
          'color: green; font-weight: bold;',
          response
        );

        setAdsData(response.data || []);
      } catch (err) {
        console.error('خطأ في جلب الإعلانات:', err);
      }
    },
    [domainName, filters]
  );

  /***************************************************************
   * 7) تحديث MarkerClusterer بالبيانات
   ***************************************************************/
  const updateCluster = useCallback(
    (map, ads) => {
      if (clustererRef.current) {
        clustererRef.current.clearMarkers();
      } else {
        clustererRef.current = new MarkerClusterer(map, [], {
          imagePath:
            'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
        });
      }

      markersRef.current = {};
      activeMarkerRef.current = null;

      if (ads && ads.length > 0) {
        const markers = ads
          .map((ad) => {
            const lat = parseFloat(ad.lat);
            const lng = parseFloat(ad.lng);
            if (isNaN(lat) || isNaN(lng)) {
              console.warn('إحداثيات غير صالحة:', ad);
              return null;
            }

            // اختيار الأيقونة واللون
            let iconUrl, labelColor;
            if (ad.isFeatured) {
              iconUrl = '/assets/img/inner-page/icon/MapPin_Gold.svg';
              labelColor = '#000';
            } else if (isAdRead(ad._id)) {
              ({ iconUrl, labelColor } = getReadIconAndColor());
            } else {
              ({ iconUrl, labelColor } = getDefaultIconAndColor(ad));
            }

            // إعداد نصّ السعر (label)
            let labelPrice = '';
            if (
              ad.discountPrice &&
              ad.originalPrice &&
              ad.discountPrice < ad.originalPrice
            ) {
              labelPrice = ad.discountPrice;
            } else if (ad.originalPrice) {
              labelPrice = ad.originalPrice;
            }

            const markerLabel = {
              text: labelPrice ? `${labelPrice} ريال ` : '',
              color: labelColor,
              fontSize: '12px',
              fontWeight: 'bold',
            };

            // إنشاء الماركر
            const marker = new window.google.maps.Marker({
              position: { lat, lng },
              icon: buildCustomIcon(iconUrl),
              label: markerLabel,
              map,
            });

            marker.adData = ad;

            // حدث النقر على الماركر
            marker.addListener('click', () => {
              if (
                activeMarkerRef.current &&
                activeMarkerRef.current !== marker
              ) {
                revertMarkerIcon(activeMarkerRef.current);
              }

              if (!ad.isFeatured) {
                setMarkerToRead(marker);
              }

              setMarkerToActive(marker);
              activeMarkerRef.current = marker;
              setSelectedAdId(ad._id);
            });

            markersRef.current[ad._id] = marker;
            return marker;
          })
          .filter(Boolean);

        clustererRef.current.addMarkers(markers);
      }
    },
    [
      getDefaultIconAndColor,
      getReadIconAndColor,
      isAdRead,
      revertMarkerIcon,
      setMarkerToRead,
      setMarkerToActive,
    ]
  );

  /***************************************************************
   * 8) عند تحديث adsData → حدّث الـ MarkerCluster
   ***************************************************************/
  useEffect(() => {
    if (mapInstanceRef.current) {
      console.log(
        '%c[AdsMap] useEffect(adsData) - تحديث الـ MarkerCluster بالبيانات الجديدة:',
        'color: purple;',
        adsData
      );
      updateCluster(mapInstanceRef.current, adsData);
    }
  }, [adsData, updateCluster]);

  /***************************************************************
   * 9) إنشاء الخريطة مرة واحدة (center + zoom افتراضي)
   ***************************************************************/
  useEffect(() => {
    if (!isLoaded || mapInstanceRef.current || !mapRef.current) return;

    console.log('%c[AdsMap] useEffect - إنشاء الخريطة لأول مرة...', 'color: magenta;');

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 24, lng: 45 }, // مثال: مركز على السعودية
      zoom: 5,                      // مثال: زووم 5
      gestureHandling: 'greedy',
      zoomControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
    });

    mapInstanceRef.current = map;

    /***************************************************************
     *  استدعاء fetchAdsByBounds مع حدود افتراضية
     *  إذا أردت تغطية العالم بأكمله:
     *  { lat: -85, lng: -180 }, { lat: 85, lng: 180 }
     ***************************************************************/
    const defaultBounds = new window.google.maps.LatLngBounds(
      { lat: 16.0, lng: 34.0 }, // South-West
      { lat: 32.0, lng: 56.0 }  // North-East
    );
    fetchAdsByBounds(defaultBounds);
  }, [isLoaded, fetchAdsByBounds]);

  /***************************************************************
   * 10) ربط مستمع idle (وإعادة ربطه عند تغيّر fetchAdsByBounds)
   ***************************************************************/
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    const map = mapInstanceRef.current;

    const handleIdle = () => {
      console.log('%c[AdsMap] (idle listener) - تحريك/تكبير الخريطة انتهى', 'color: magenta;');
      const bounds = map.getBounds();
      if (bounds) {
        fetchAdsByBounds(bounds);
      }
    };

    const listener = map.addListener('idle', handleIdle);

    // تنظيف عند تغيّر الدالة أو الخروج
    return () => {
      window.google.maps.event.removeListener(listener);
    };
  }, [fetchAdsByBounds]);

  /**
   * 11) عند تغيير الفلاتر (عبر MapFilters) → إعادة جلب البيانات بالحدود الحالية
   */
  useEffect(() => {
    console.log(
      '%c[AdsMap] useEffect - filters changed:',
      'color: green; font-weight: bold;',
      filters
    );

    if (!mapInstanceRef.current) return;
    const bounds = mapInstanceRef.current.getBounds();
    if (bounds) {
      console.log(
        '%c[AdsMap] (filters changed) - نستدعي fetchAdsByBounds بالـ bounds الحالية',
        'color: green;'
      );
      fetchAdsByBounds(bounds);
    }
  }, [filters, fetchAdsByBounds]);

  /***************************************************************
   * 12) عرض الخريطة والـ UI
   ***************************************************************/
  if (loadError) {
    return <div style={{ color: 'red' }}>{loadError}</div>;
  }

  if (!isLoaded) {
    return <div>جاري تحميل الخرائط...</div>;
  }

  // لتغيير نوع الخريطة (MapType) من MapControls
  const handleMapTypeChange = (type) => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setMapTypeId(type);
    }
  };

  return (
   <>
    {/* <Box sx={{ marginTop: '64px' }}> */}

   
      {/* 
        مكوّن الفلاتر (ابن) → يستلم فلاتر الأب ودالة تحديثها
        إضافة خاصية logoUrl لتمرير الشعار 
      */}
      <MapFilters 
        filters={filters} 
        onFilterChange={handleFilterChange} 
        logoUrl={logoUrl} 
      />
<div style={{ position: 'fixed', ...style }}>

      {/* <div style={{ position: 'relative', ...style }}> */}
        <div ref={mapRef} style={{ width: '100%', height: '100%' }} />

        <MapControls onMapTypeChange={handleMapTypeChange} />

        {selectedAdId && (
          <PropertyInfoWindow
            domainName={domainName}
            ads={adsData}
            selectedAdId={selectedAdId}
            onSelectAd={selectAdById}
            onClose={() => {
              if (activeMarkerRef.current) {
                revertMarkerIcon(activeMarkerRef.current);
                activeMarkerRef.current = null;
              }
              setSelectedAdId(null);
            }}
          />
        )}
      </div>
      {/* </Box> */}
      </>
  );
}


// // المسار: src/app/adsMap/component/PropertyInfoWindow.jsx

// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import {
//   Box,
//   Typography,
//   IconButton,
// } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Manipulation, Pagination } from 'swiper';

// // استيراد ملفات CSS الأساسية لـ Swiper
// import 'swiper/css';
// import 'swiper/css/pagination';

// export function PropertyInfoWindow({
//   ads = [],
//   selectedAdId = null,   // سيحدد الإعلان الذي يتم الانتقال إليه في السلايدر
//   onSelectAd,            // دالة يتم استدعاؤها عند تغيير الشريحة
//   onClose,               // دالة تُستدعى عند الضغط على زر الإغلاق (X)
//   domainName,
// }) {
//   // ============== (1) الدوال المساعدة لقراءة/التحقق من "مقروء" ==============
//   const readAdsFromStorage = useCallback(() => {
//     if (typeof window === 'undefined') return [];
//     try {
//       const stored = localStorage.getItem('readAds');
//       return stored ? JSON.parse(stored) : [];
//     } catch (error) {
//       console.error('خطأ أثناء قراءة البيانات من localStorage:', error);
//       return [];
//     }
//   }, []);

//   const isAdRead = useCallback(
//     (adId) => {
//       const readAds = readAdsFromStorage();
//       return readAds.includes(adId);
//     },
//     [readAdsFromStorage]
//   );

//   // ============== (2) إدارة السلايدر عبر مرجع (للقفز إلى إعلان محدد) ==============
//   const swiperRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // ============== (3) تغيير الشريحة عند اختيار إعلان من الخريطة ==============
//   useEffect(() => {
//     if (!ads.length) return;
//     if (!selectedAdId) return;
//     if (!swiperRef.current) return;

//     // ابحث عن فهرس الإعلان المختار
//     const foundIndex = ads.findIndex((item) => item._id === selectedAdId);
//     if (foundIndex !== -1) {
//       swiperRef.current.slideTo(foundIndex);
//     }
//   }, [ads, selectedAdId]);

//   // ============== (4) عند تغيّر الشريحة الفعّالة في السلايدر ==============
//   const handleSlideChange = (swiper) => {
//     const newIndex = swiper.activeIndex;
//     setCurrentIndex(newIndex);

//     // إذا تم تمرير دالة onSelectAd ووجد إعلان في هذا الفهرس، استدعها
//     if (onSelectAd && ads[newIndex]?._id) {
//       onSelectAd(ads[newIndex]._id);
//     }
//   };

//   // ============== (5) إخفاء المكوّن إن لم يكن هناك إعلانات أو لا يوجد إعلان مختار ==============
//   if (!ads.length || !selectedAdId) {
//     return null;
//   }

//   return (
//     <Box sx={styles.container}>
//       {/* زر الإغلاق في الزاوية العلوية */}
//       <IconButton
//         onClick={onClose}
//         sx={styles.closeBtn}
//         size="small"
//         aria-label="close"
//       >
//         <CloseIcon />
//       </IconButton>

//       <Swiper
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//         onSlideChange={handleSlideChange}
//         slidesPerView={1}
//         spaceBetween={10}
//         centeredSlidesBounds={true}
//         grabCursor={true}
//         pagination={{ clickable: true }}
//         modules={[Manipulation, Pagination]}
//         className="mySwiper"
//         style={{ width: '100%', height: '40vh' }}
//         breakpoints={{
//           600: {
//             slidesPerView: 3,
//             centeredSlides: true,
//           },
//           300: {
//             slidesPerView: 1.3,
//             centeredSlides: true,
//           },
//         }}
//       >
//         {ads.map((ad, index) => (
//           <SwiperSlide key={ad._id || index}>
//             {/* تمرير الدومين لبطاقة الإعلان لأجل إعادة التوجيه */}
//             <AdCard ad={ad} isAdRead={isAdRead} domainName={domainName} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </Box>
//   );
// }

// /**
//  * بطاقة الإعلان الواحدة
//  * - عند النقر على البطاقة يتم التوجّه إلى المسار المطلوب:
//  *   /domainName/Advertisement/_id
//  */
// function AdCard({ ad, isAdRead, domainName }) {
//   const defaultImage = '/assets/img/home4/letest-car1.png';
  
//   // قيم افتراضية
//   const {
//     _id,
//     isFeatured = false,
//     statusText = 'متاح',
//     propertyType = '',
//     images = [],
//     title = 'بدون عنوان',
//     city = '',
//     district = '',
//     bedrooms,
//     bathrooms,
//     landSize,
//     discountPrice,
//     originalPrice,
//     subCategory = {},
//   } = ad || {};

//   const mainLabel = subCategory?.label ? subCategory.label : title;
//   const readStatus = isAdRead(_id) ? 'مقروء' : 'غير مقروء';
//   const locationString = [city, district].filter(Boolean).join(' - ');
//   const mainImage = images[0] || defaultImage;

//   // دالة التوجّه عند النقر على البطاقة
//   const handleCardClick = () => {
//     // سنوجّه المستخدم إلى المسار: /domainName/Advertisement/_id
//     window.location.href = `/${domainName}/Advertisement/${_id}`;
//   };

//   return (
//     <div
//       style={{
//         position: 'relative',
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'stretch',
//         backgroundColor: '#fff',
//         border: isFeatured ? '2px solid #EFB93F' : '1px solid #ddd',
//         borderRadius: '8px',
//         overflow: 'hidden',
//         width: '100%',
//         maxWidth: '500px',
//         margin: '0 auto',
//         // إن كان الإعلان ليس "متاح"، نطبق التدرج الرمادي على الكارت كله
//         filter: statusText !== 'متاح' ? 'grayscale(100%)' : 'none',
//         cursor: 'pointer', // مؤشر الفأرة يصبح على شكل يد
//       }}
//       onClick={handleCardClick} // اضغط على البطاقة بأكملها
//     >
//       {/* بادج "إعلان مميز" */}
//       {isFeatured && (
//         <div style={styles.featuredBadge}>
//           <span>إعلان مميز</span>
//         </div>
//       )}

//       {/* شريط حالة ديناميكي (إذا لم يكن "متاح") */}
//       {statusText && statusText !== 'متاح' && (
//         <div style={styles.statusRibbon}>
//           <span>{statusText}</span>
//         </div>
//       )}

//       {/* قسم الصورة (يسار) */}
//       <div style={styles.imageContainer}>
//         {/* نوع العقار (propertyType) في أعلى اليمين للصورة */}
//         {propertyType && (
//           <div style={styles.propertyTypeBadge}>
//             <span>{propertyType}</span>
//           </div>
//         )}

//         <img
//           src={mainImage}
//           alt="صورة الإعلان"
//           style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//         />
//       </div>

//       {/* قسم المحتوى (يمين) */}
//       <div style={styles.contentContainer}>
//         <div
//           style={{
//             ...styles.readStatusBadge,
//             backgroundColor: isAdRead(_id) ? '#9e9e9e' : '#2196f3',
//           }}
//         >
//           {readStatus}
//         </div>
        
//         {/* عرض subCategory.label بدل العنوان */}
//         <Typography variant="h6" sx={{ mb: 0.5 }}>
//           {mainLabel}
//         </Typography>

//         {locationString && (
//           <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
//             <i className="bi bi-geo-alt" /> {locationString}
//           </Typography>
//         )}

//         {/* بعض الخصائص (غرف، دورات مياه، مساحة) */}
//         <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
//           {bedrooms > 0 && (
//             <span style={styles.featureItem}>
//               <img src="/assets/img/home1/icon/bed2.svg" alt="غرفة" width="16" />
//               <span>{`${bedrooms} غرفة`}</span>
//             </span>
//           )}
//           {bathrooms > 0 && (
//             <span style={styles.featureItem}>
//               <img src="/assets/img/home1/icon/bath2.svg" alt="دورة مياه" width="16" />
//               <span>{`${bathrooms} دورة مياه`}</span>
//             </span>
//           )}
//           {landSize > 0 && (
//             <span style={styles.featureItem}>
//               <img src="/assets/img/home1/icon/size2.svg" alt="المساحة" width="16" />
//               <span>{`${landSize} م²`}</span>
//             </span>
//           )}
//         </div>

//         {/* السعر (discountPrice أو originalPrice) */}
//         <div style={{ marginTop: 'auto' }}>
//           {discountPrice ? (
//             <>
//               <Typography
//                 variant="h6"
//                 sx={{
//                   color: '#000',
//                   alignItems: 'center',
//                   mr: 1
//                 }}
//               >
//                 {discountPrice}
//                 <Box
//                   component="img"
//                   src="/assets/img/inner-page/icon/Saudi_Riyal_Symbol-2.svg"
//                   alt="رمز العملة السعودية"
//                   sx={{ width: 20, height: 20, ml: 1, mr: 0.5 }}
//                 />
//               </Typography>
//               {originalPrice && (
//                 <Typography
//                   variant="body2"
//                   component="del"
//                   sx={{
//                     color: 'red',
//                     display: 'inline-flex',
//                     alignItems: 'center'
//                   }}
//                 >
//                   {originalPrice}
//                   <Box
//                     component="img"
//                     src="/assets/img/inner-page/icon/Saudi_Riyal_Symbol-2.svg"
//                     alt="رمز العملة السعودية"
//                     sx={{ width: 14, height: 14, ml: 1, mr: 0.5 }}
//                   />
//                 </Typography>
//               )}
//             </>
//           ) : originalPrice ? (
//             <Typography
//               variant="h6"
//               sx={{
//                 color: '#000',
//                 display: 'inline-flex',
//                 alignItems: 'center'
//               }}
//             >
//               {originalPrice}
//               <Box
//                 component="img"
//                 src="/assets/img/inner-page/icon/Saudi_Riyal_Symbol-2.svg"
//                 alt="رمز العملة السعودية"
//                 sx={{ width: 20, height: 20, ml: 1 }}
//               />
//             </Typography>
//           ) : (
//             <Typography variant="body2">بدون سعر</Typography>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// // =========== تنسيقات إضافية ===========
// const styles = {
//   container: {
//     position: 'absolute',
//     bottom: 20,
//     left: 0,
//     width: '100%',
//     textAlign: 'center',
//     zIndex: 9999,
//     pointerEvents: 'auto',
//     touchAction: 'none',
//   },
//   closeBtn: {
//     position: 'absolute',
//     top: 5,
//     right: 5,
//     zIndex: 10000,
//   },

//   // البادج "إعلان مميز"
//   featuredBadge: {
//     position: 'absolute',
//     top: 0,
//     right: 0,
//     width: '120px',
//     height: '30px',
//     background: '#EFB93F',
//     color: 'black',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     lineHeight: '30px',
//     clipPath: 'polygon(100% 0, 100% 100%, 20% 100%, 0 0)',
//     zIndex: 2,
//     pointerEvents: 'none',
//   },

//   // شريط الحالة إذا لم يكن "متاح"
//   statusRibbon: {
//     position: 'absolute',
//     top: '15px',
//     left: '-20px',
//     transform: 'rotate(-45deg)',
//     background: '#FF3B30',
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     width: '100px',
//     padding: '3px 0',
//     borderRadius: '5px',
//     boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
//     zIndex: 3,
//     pointerEvents: 'none',
//   },

//   // قسم الصورة
//   imageContainer: {
//     position: 'relative',
//     width: '150px',
//     height: '130px', // ارتفاع أقل للصورة
//     flexShrink: 0,
//     overflow: 'hidden',
//   },

//   // بادج المقروء/غير المقروء
//   readStatusBadge: {
//     position: 'absolute',
//     top: '5px',
//     left: '5px',
//     color: '#fff',
//     fontSize: '0.7rem',
//     fontWeight: 'bold',
//     padding: '2px 5px',
//     borderRadius: '4px',
//     zIndex: 2,
//   },

//   // بادج نوع العقار
//   propertyTypeBadge: {
//     position: 'absolute',
//     top: '70%',
//     right: '5px',
//     background: '#EFB93F',
//     color:'#000',
//     padding: '3px 6px',
//     fontSize: '0.7rem',
//     borderRadius: '4px',
//     zIndex: 2,
//   },

//   // قسم المحتوى
//   contentContainer: {
//     flex: 1,
//     display: 'flex',
//     flexDirection: 'column',
//     padding: '8px',
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//   },

//   // تنسيق عناصر الخصائص (غرف، دورات مياه...)
//   featureItem: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '4px',
//   },
// };

// المسار: src/app/adsMap/component/PropertyInfoWindow.jsx

import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Box,
  Typography,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Manipulation } from 'swiper';

import 'swiper/css';

export function PropertyInfoWindow({
  ads = [],
  selectedAdId = null,
  onSelectAd,
  onClose,
  domainName,
}) {
  // (1) دوال للمقروء/غير المقروء
  const readAdsFromStorage = useCallback(() => {
    if (typeof window === 'undefined') return [];
    try {
      const stored = localStorage.getItem('readAds');
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('خطأ أثناء قراءة البيانات من localStorage:', error);
      return [];
    }
  }, []);

  const isAdRead = useCallback(
    (adId) => {
      const readAds = readAdsFromStorage();
      return readAds.includes(adId);
    },
    [readAdsFromStorage]
  );

  // (2) مرجع للسوايبر + الحالة
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // (3) إذا تغيّر selectedAdId في الأب، نحرّك السوايبر للعنصر الموافق
  useEffect(() => {
    if (!ads.length) return;
    if (!selectedAdId) return;
    if (!swiperRef.current) return;

    const foundIndex = ads.findIndex((item) => item._id === selectedAdId);

    // نتأكد أولًا أن الـ foundIndex مختلف عن المؤشر الحالي كي لا ندخل في حلقة
    if (foundIndex !== -1 && foundIndex !== swiperRef.current.activeIndex) {
      swiperRef.current.slideTo(foundIndex);
    }
    // ملاحظة: لا نستخدم currentIndex في التبعيات
    // لأننا نريد فقط التحقق من changed selectedAdId أو تبدّل ads
  }, [ads, selectedAdId]);

  // (4) عند تغيّر الشريحة في سوايبر
  const handleSlideChange = (swiper) => {
    const newIndex = swiper.activeIndex;

    // منع التحديث إذا المؤشر لم يتغير (يحمي من الحلقة اللانهائية)
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);

      // إذا لديك دالة تخبر الأب بأن الشريحة المختارة تغيرت
      if (onSelectAd && ads[newIndex]?._id) {
        onSelectAd(ads[newIndex]._id);
      }
    }
  };

  // (5) إخفاء نافذة المعلومات إن لم يوجد إعلانات أو إعلان مختار
  if (!ads.length || !selectedAdId) {
    return null;
  }

  return (
    <Box sx={styles.container}>
      {/* زر الإغلاق */}
      <IconButton
        onClick={onClose}
        sx={styles.closeBtn}
        size="small"
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        slidesPerView={1}
        spaceBetween={10}
        centeredSlidesBounds={true}
        grabCursor={true}
        modules={[Manipulation]}
        className="mySwiper"
        style={{
          width: '100%',
          height: 'auto',
          // تفعيل النقر داخل السوايبر فقط
          pointerEvents: 'auto',
        }}
        breakpoints={{
          600: {
            slidesPerView: 3,
            centeredSlides: true,
          },
          300: {
            slidesPerView: 1.3,
            centeredSlides: true,
          },
        }}
      >
        {ads.map((ad, index) => (
          <SwiperSlide key={ad._id || index}>
            <AdCard ad={ad} isAdRead={isAdRead} domainName={domainName} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

/**
 * بطاقة الإعلان
 */
function AdCard({ ad, isAdRead, domainName }) {
  const defaultImage = '/assets/img/home4/letest-car1.png';
  
  const {
    _id,
    isFeatured = false,
    statusText = 'متاح',
    propertyType = '',
    images = [],
    title = 'بدون عنوان',
    city = '',
    district = '',
    bedrooms,
    bathrooms,
    landSize,
    discountPrice,
    originalPrice,
    subCategory = {},
  } = ad || {};

  const mainLabel = subCategory?.label || title;
  const readStatus = isAdRead(_id) ? 'مقروء' : 'غير مقروء';
  const locationString = [city, district].filter(Boolean).join(' - ');
  const mainImage = images[0] || defaultImage;

  const handleCardClick = () => {
    window.location.href = `/Advertisement/${_id}`;
  };

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
        border: isFeatured ? '2px solid #EFB93F' : '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '500px',
        margin: '0 auto',
        filter: statusText !== 'متاح' ? 'grayscale(100%)' : 'none',
        cursor: 'pointer',
      }}
      onClick={handleCardClick}
    >
      {isFeatured && (
        <div style={styles.featuredBadge}>
          <span>إعلان مميز</span>
        </div>
      )}

      {statusText && statusText !== 'متاح' && (
        <div style={styles.statusRibbon}>
          <span>{statusText}</span>
        </div>
      )}

      <div style={styles.imageContainer}>
        {propertyType && (
          <div style={styles.propertyTypeBadge}>
            <span>{propertyType}</span>
          </div>
        )}
        <img
          src={mainImage}
          alt="صورة الإعلان"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <div style={styles.contentContainer}>
        <div
          style={{
            ...styles.readStatusBadge,
            backgroundColor: isAdRead(_id) ? '#9e9e9e' : '#2196f3',
          }}
        >
          {readStatus}
        </div>

        <Typography variant="h6" sx={{ mb: 0.5 }}>
          {mainLabel}
        </Typography>

        {locationString && (
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
            <i className="bi bi-geo-alt" /> {locationString}
          </Typography>
        )}

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {bedrooms > 0 && (
            <span style={styles.featureItem}>
              <img src="/assets/img/home1/icon/bed2.svg" alt="غرفة" width="16" />
              <span>{`${bedrooms} غرفة`}</span>
            </span>
          )}
          {bathrooms > 0 && (
            <span style={styles.featureItem}>
              <img src="/assets/img/home1/icon/bath2.svg" alt="دورة مياه" width="16" />
              <span>{`${bathrooms} دورة مياه`}</span>
            </span>
          )}
          {landSize > 0 && (
            <span style={styles.featureItem}>
              <img src="/assets/img/home1/icon/size2.svg" alt="المساحة" width="16" />
              <span>{`${landSize} م²`}</span>
            </span>
          )}
        </div>

        <div style={{ marginTop: 'auto' }}>
          {discountPrice ? (
            <>
              <Typography
                variant="h6"
                sx={{
                  color: '#000',
                  alignItems: 'center',
                  mr: 1
                }}
              >
                {discountPrice}
                <Box
                  component="img"
                  src="/assets/img/inner-page/icon/Saudi_Riyal_Symbol-2.svg"
                  alt="ريال"
                  sx={{ width: 20, height: 20, ml: 1, mr: 0.5 }}
                />
              </Typography>
              {originalPrice && (
                <Typography
                  variant="body2"
                  component="del"
                  sx={{
                    color: 'red',
                    display: 'inline-flex',
                    alignItems: 'center'
                  }}
                >
                  {originalPrice}
                  <Box
                    component="img"
                    src="/assets/img/inner-page/icon/Saudi_Riyal_Symbol-2.svg"
                    alt="ريال"
                    sx={{ width: 14, height: 14, ml: 1, mr: 0.5 }}
                  />
                </Typography>
              )}
            </>
          ) : originalPrice ? (
            <Typography
              variant="h6"
              sx={{
                color: '#000',
                display: 'inline-flex',
                alignItems: 'center'
              }}
            >
              {originalPrice}
              <Box
                component="img"
                src="/assets/img/inner-page/icon/Saudi_Riyal_Symbol-2.svg"
                alt="ريال"
                sx={{ width: 20, height: 20, ml: 1 }}
              />
            </Typography>
          ) : (
            <Typography variant="body2">بدون سعر</Typography>
          )}
        </div>
      </div>
    </div>
  );
}

// =========== تنسيقات إضافية ===========
const styles = {
  container: {
    position: "sticky",
    bottom: 20,
    left: 0,
    width: '100%',
    zIndex: 9999,
    height: '40vh',
    pointerEvents: 'none',

    // وسوم إعلامية للتحكم بالارتفاع في الشاشات الصغيرة:
    '@media (max-width: 600px)': {
      height: '25vh',
    },

    // مثلاً في الشاشات من 900px وأعلى:
    '@media (min-width: 900px)': {
      height: '25vh',
    },
  },
  closeBtn: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 10000,
    pointerEvents: 'auto',
  },

  featuredBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '120px',
    height: '30px',
    background: '#EFB93F',
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: '30px',
    clipPath: 'polygon(100% 0, 100% 100%, 20% 100%, 0 0)',
    zIndex: 2,
    pointerEvents: 'none',
  },

  statusRibbon: {
    position: 'absolute',
    top: '15px',
    left: '-20px',
    transform: 'rotate(-45deg)',
    background: '#FF3B30',
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    width: '100px',
    padding: '3px 0',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    zIndex: 3,
    pointerEvents: 'none',
  },

  imageContainer: {
    position: 'relative',
    width: '150px',
    height: '130px',
    flexShrink: 0,
    overflow: 'hidden',
  },

  readStatusBadge: {
    position: 'absolute',
    top: '5px',
    left: '5px',
    color: '#fff',
    fontSize: '0.7rem',
    fontWeight: 'bold',
    padding: '2px 5px',
    borderRadius: '4px',
    zIndex: 2,
    pointerEvents: 'none',
  },

  propertyTypeBadge: {
    position: 'absolute',
    top: '70%',
    right: '5px',
    background: '#EFB93F',
    color:'#000',
    padding: '3px 6px',
    fontSize: '0.7rem',
    borderRadius: '4px',
    zIndex: 2,
    pointerEvents: 'none',
  },

  contentContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '8px',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
};

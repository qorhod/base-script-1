



// import React, { useEffect, useState } from "react";
// import { SwiperSlide } from "swiper/react";
// import apiClient from "../../api/apiClient"; // استيراد API client
// import FeaturedAdCard from "./FeaturedAdCard"; // استيراد الكومبوننت الخاص بالإعلانات

// const AdList = ({ domainName }) => {
//   const [ads, setAds] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchAds = async () => {
//       try {
//         setLoading(true);
//         const response = await apiClient.getUserProfile(domainName, 10, 1); // استدعاء API
//         const fetchedAds = response.data.profile.ads; // الحصول على الإعلانات من البيانات المسترجعة
//         setAds(fetchedAds || []); // تعيين الإعلانات
//       } catch (err) {
//         setError("Failed to load ads. Please try again.");
//         console.error("Error fetching ads:", err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (domainName) {
//       fetchAds(); // استدعاء دالة جلب البيانات إذا كان domainName موجود
//     }
//   }, [domainName]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <>
//       {ads.map((ad, index) => (
//         <div 
//                 key={index} // وضع key هنا على العنصر الخارجي
//                 className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp item" 
//                 data-wow-delay="400ms"
//               >
//           <div className="product-card">
//             <FeaturedAdCard
//                         domainName={domainName}

//               adid={ad._id} 
//                title={ad.title}
//               adType="إعلان" // يمكنك تخصيصها إذا كانت غير موجودة في البيانات
//               city={ad.city}
//               features={{
//                 rooms: ad.features?.rooms || 0,
//                 bathrooms: ad.features?.bathrooms || 0,
//                 size: ad.features?.size || "N/A",

//               }}
//               discountPrice={ad.discountPrice}
//               images={ad.images}          // <-- أضف هذا
//               district={ad.district}

//               subCategory={ad.subCategory}          // <-- أضف هذا
//               propertyType={ad.propertyType}          // <-- أضف هذا
//               bedrooms = {ad.bedrooms}
//               bathrooms = {ad.bathrooms}
//               landSize = {ad.landSize}
//               originalPrice={ad.originalPrice || null} // إذا لم يكن موجودًا، يمكن تجاهله
//               image={ad.image || "/assets/img/logo1.png"} // صورة افتراضية إذا لم تكن موجودة
//               isFeatured={ad.isFeatured || false
              
//               } // تعيين افتراضي إذا لم يكن موجودًا
//               statusText={ad.statusText || ""}
//             />
//           </div>
//           </div>
//       ))}
//     </>
//   );
// };

// export default AdList;


// ><><><><

import React from "react";
import FeaturedAdCard from "./FeaturedAdCard";

const AdList = ({ ads = [], domainName = "" }) => {
  return (
    <>
      {ads.map((ad, index) => (
        <div
          key={index}
          className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp item"
          data-wow-delay="400ms"
        >
          <div className="product-card">
            <FeaturedAdCard
              domainName={domainName}
              adid={ad._id}
              title={ad.title}
              adType="إعلان" // يمكنك تخصيصها إذا كانت غير موجودة في البيانات
              city={ad.city}
              features={{
                rooms: ad.features?.rooms || 0,
                bathrooms: ad.features?.bathrooms || 0,
                size: ad.features?.size || "N/A",
              }}
              discountPrice={ad.discountPrice}
              images={ad.images}
              district={ad.district}
              subCategory={ad.subCategory}
              propertyType={ad.propertyType}
              bedrooms={ad.bedrooms}
              bathrooms={ad.bathrooms}
              landSize={ad.landSize}
              originalPrice={ad.originalPrice || null}
              image={ad.image || "/assets/img/logo1.png"} // صورة افتراضية إذا لم تكن موجودة
              isFeatured={ad.isFeatured || false}
              statusText={ad.statusText || ""}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default AdList;

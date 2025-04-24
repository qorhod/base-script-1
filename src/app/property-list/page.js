


// "use client";

// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import useSWR from "swr";
// import Breadcrumb from "@/components/common/Breadcrumb";
// import PartnerSlide from "@/components/view/Partner/PartnerSlide";
// import AdList from "@/components/FeaturedAdCard/AdList";
// import apiClient from "@/api/apiClient";
// import useDomain from "@/hooks/useDomain";
// import FilterComponent from "./Components/FilterComponent";

// const fetchAds = async ([domainName, filters, limit, pageNumber]) => {
//   console.log("جاري جلب الإعلانات باستخدام:");
//   console.log("الدومين:", domainName);
//   console.log("الفلاتر:", filters);
//   console.log("الحد:", limit, "الصفحة:", pageNumber);

//   const response = await apiClient.getUserProfile({
//     websiteUrl: domainName,
//     limit,
//     page: pageNumber,
//     subCategoryLabel: filters.subCategoryLabel,
//     propertyType: filters.propertyType,
//     city: filters.city,
//     district: filters.district,
//     isFeatured: filters.isFeatured,
//     sort: filters.sort,
//   });
//   console.log("الاستجابة من API:", response?.data);
//   // نفترض أن بيانات الإعلانات موجودة في response.data.profile.ads
//   return response?.data?.profile?.ads || [];
// };

// const Page = () => {
//   // 1) قراءة الدومين من الهوك
//   const domainName = useDomain();

//   // 2) حالات عرض الإعلانات والفلاتر والصفحات
//   const [filters, setFilters] = useState({
//     subCategoryLabel: "",
//     propertyType: "",
//     city: "",
//     district: "",
//     isFeatured: "",
//     sort: "",
//   });

//   const [limit, setLimit] = useState(10);
//   const [pageNumber, setPageNumber] = useState(1);

//   // 3) استخدام SWR لجلب الإعلانات
//   const { data: ads, error, isLoading, mutate } = useSWR(
//     domainName ? [domainName, filters, limit, pageNumber] : null,
//     fetchAds,
//     {
//       revalidateOnFocus: false,
//     }
//   );

//   // سجل لتأكيد أن SWR جلب البيانات
//   useEffect(() => {
//     console.log("تم تحديث الإعلانات:", ads);
//   }, [ads]);

//   // 4) حفظ إعدادات Grid/List
//   const [isGridView, setIsGridView] = useState(true);

//   useEffect(() => {
//     const savedView = localStorage.getItem("viewPreference");
//     if (savedView === "list") {
//       setIsGridView(false);
//     }
//   }, []);

//   const handleGridClick = () => {
//     setIsGridView(true);
//     localStorage.setItem("viewPreference", "grid");
//   };

//   const handleListClick = () => {
//     setIsGridView(false);
//     localStorage.setItem("viewPreference", "list");
//   };

//   // 5) دوال التحكم بالفلاتر
//   const handleFilterChange = (newFilters) => {
//     console.log("تغيرت الفلاتر:", newFilters);
//     setFilters(newFilters);
//     setPageNumber(1); // إعادة الصفحة الأولى عند تغيير الفلاتر
//     mutate();
//   };

//   const handleFilterSubmit = (e) => {
//     e.preventDefault();
//     console.log("تم تقديم الفلاتر:", filters);
//     setPageNumber(1);
//     mutate();
//   };

//   // 6) إدارة حالات التحميل والأخطاء
//   if (!domainName) {
//     return <div>جاري التعرّف على الدومين...</div>;
//   }
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//   if (error) {
//     console.error("خطأ في جلب الإعلانات:", error);
//     return <div>Error: Failed to load ads. Please try again.</div>;
//   }

//   // 7) التصيير النهائي للصفحة
//   return (
//     <>
//       <Breadcrumb pageName="Property Listing System" pageTitle="Property Listing System" />

//       {/* منطقة الفلاتر */}
//       <div className="home6-search-area two mb-100">
//         <div className="container">
//           <FilterComponent
//             filters={filters}
//             onFilterChange={handleFilterChange}
//             onFilterSubmit={handleFilterSubmit}
//           />
//           {/* عرض بيانات الفلاتر الحالية للمراقبة */}
//           <pre>{JSON.stringify(filters, null, 2)}</pre>
//         </div>
//       </div>

//       {/* قسم عرض الإعلانات */}
//       <div className="product-page no-sidebar mb-100">
//         <div className="container">
//           <div className="row g-xl-4 gy-5">
//             <div className="col-xl-12">
//               <div className="row mb-40">
//                 <div className="col-lg-12">
//                   <div className="show-item-and-filte">
//                     <p>Showing {ads?.length || 0} property(ies)</p>
//                     <div className="filter-view">
//                       <div className="filter-atra">
//                         <h6>Sort By:</h6>
//                       </div>

//                       {/* أزرار تغيير نمط العرض */}
//                       <div className="view d-xl-flex d-none">
//                         <ul className="btn-group list-grid-btn-group">
//                           <li className={`grid ${isGridView ? "active" : ""}`} onClick={handleGridClick}>
//                             <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
//                               <mask id="mask0_1631_19" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x={0} y={0} width={14} height={14}>
//                                 <rect width={14} height={14} fill="#D9D9D9" />
//                               </mask>
//                               <g mask="url(#mask0_1631_19)">
//                                 <path d="M5.47853 6.08726H0.608726C0.272536 6.08726 0 5.81472 0 5.47853V0.608726C0 0.272536 0.272536 0 0.608726 0H5.47853C5.81472 0 6.08726 0.272536 6.08726 0.608726V5.47853C6.08726 5.81472 5.81472 6.08726 5.47853 6.08726Z" />
//                                 <path d="M13.3911 6.08726H8.52132C8.18513 6.08726 7.9126 5.81472 7.9126 5.47853V0.608726C7.9126 0.272536 8.18513 0 8.52132 0H13.3911C13.7273 0 14 0.272536 14 0.608726V5.47853C14 5.81472 13.7273 6.08726 13.3911 6.08726Z" />
//                                 <path d="M5.47853 14.0013H0.608726C0.272536 14.0013 0 13.7288 0 13.3926V8.52279C0 8.1866 0.272536 7.91406 0.608726 7.91406H5.47853C5.81472 7.91406 6.08726 8.1866 6.08726 8.52279V13.3926C6.08726 13.7288 5.81472 14.0013 5.47853 14.0013Z" />
//                                 <path d="M13.3916 14.0013H8.52181C8.18562 14.0013 7.91309 13.7288 7.91309 13.3926V8.52279C7.91309 8.1866 8.18562 7.91406 8.52181 7.91406H13.3916C13.7278 7.91406 14.0003 8.1866 14.0003 8.52279V13.3926C14.0003 13.7288 13.7278 14.0013 13.3916 14.0013Z" />
//                               </g>
//                             </svg>
//                           </li>
//                           <li className={`lists ${!isGridView ? "active" : ""}`} onClick={handleListClick}>
//                             <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14">
//                               <mask id="mask0_1631_3" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x={0} y={0} width={14} height={14}>
//                                 <rect width={14} height={14} fill="#D9D9D9" />
//                               </mask>
//                               <g mask="url(#mask0_1631_3)">
//                                 <path d="M1.21747 2C0.545203 2 0 2.55848 0 3.24765C0 3.93632 0.545203 4.49433 1.21747 4.49433C1.88974 4.49433 2.43494 3.93632 2.43494 3.24765C2.43494 2.55848 1.88974 2 1.21747 2Z" />
//                                 <path d="M1.21747 5.75195C0.545203 5.75195 0 6.30996 0 6.99913C0 7.68781 0.545203 8.24628 1.21747 8.24628C1.88974 8.24628 2.43494 7.68781 2.43494 6.99913C2.43494 6.30996 1.88974 5.75195 1.21747 5.75195Z" />
//                                 <path d="M1.21747 9.50586C0.545203 9.50586 0 10.0643 0 10.753C0 11.4417 0.545203 11.8821 1.21747 11.8821C1.88974 11.8821 2.43494 11.4417 2.43494 10.753C2.43494 10.0643 1.88974 9.50586 1.21747 9.50586Z" />
//                               </g>
//                             </svg>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* عرض الإعلانات */}
//               <div className="list-grid-main">
//                 <div className={`list-grid-product-wrap ${!isGridView ? "list" : "grid"}-group-wrapper`}>
//                   <div className="row g-4 justify-content-center mb-40">
//                     <AdList domainName={domainName} ads={ads} />
//                   </div>

//                   {/* التصفيح (Pagination) بسيط */}
//                   <div className="row">
//                     <div className="col-lg-12">
//                       <div className="pagination-and-next-prev">
//                         <div className="pagination">
//                           <ul>
//                             {[1, 2, 3, 4, 5].map((num) => (
//                               <li key={num} className={pageNumber === num ? "active" : ""}>
//                                 <a
//                                   onClick={(e) => {
//                                     e.preventDefault();
//                                     console.log("تغيير الصفحة إلى:", num);
//                                     setPageNumber(num);
//                                     mutate();
//                                   }}
//                                   href="#"
//                                 >
//                                   {num.toString().padStart(2, "0")}
//                                 </a>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>

//                         <div className="next-prev-btn">
//                           <ul>
//                             <li>
//                               <a
//                                 onClick={(e) => {
//                                   e.preventDefault();
//                                   const newPage = Math.max(pageNumber - 1, 1);
//                                   console.log("السابق، الصفحة:", newPage);
//                                   setPageNumber(newPage);
//                                   mutate();
//                                 }}
//                                 href="#"
//                               >
//                                 <svg xmlns="http://www.w3.org/2000/svg" width={7} height={14} viewBox="0 0 7 14">
//                                   <path d="M0 7.00008L7 0L2.54545 7.00008L7 14L0 7.00008Z" />
//                                 </svg>{" "}
//                                 Prev
//                               </a>
//                             </li>
//                             <li>
//                               <a
//                                 onClick={(e) => {
//                                   e.preventDefault();
//                                   const newPage = pageNumber + 1;
//                                   console.log("التالي، الصفحة:", newPage);
//                                   setPageNumber(newPage);
//                                   mutate();
//                                 }}
//                                 href="#"
//                               >
//                                 Next
//                                 <svg xmlns="http://www.w3.org/2000/svg" width={7} height={14} viewBox="0 0 7 14">
//                                   <path d="M7 7.00008L0 0L4.45455 7.00008L0 14L7 7.00008Z" />
//                                 </svg>
//                               </a>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   {/* نهاية التصفيح */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* قسم الشركاء أو المحتوى الإضافي */}
//       <div className="trusted-partner-section mb-100">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="sub-title">
//                 <h6>Our Trusted Partners</h6>
//                 <div className="dash" />
//               </div>
//               <div className="partner-slider">
//                 <div className="marquee_text2">
//                   <PartnerSlide />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Page;



//ـ+ـ+ـ+ـ+ـ+ـ+ـ+ـ+ـ+ـ





// "use client";

// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import useSWR from "swr";
// import Breadcrumb from "@/components/common/Breadcrumb";
// import PartnerSlide from "@/components/view/Partner/PartnerSlide";
// import AdList from "@/components/FeaturedAdCard/AdList";
// import apiClient from "@/api/apiClient";
// import useDomain from "@/hooks/useDomain";
// import FilterComponent from "./Components/FilterComponent";

// const fetchAds = async ([domainName, filters, limit, pageNumber]) => {
//   console.log("جاري جلب الإعلانات باستخدام:");
//   console.log("الدومين:", domainName);
//   console.log("الفلاتر:", filters);
//   console.log("الحد:", limit, "الصفحة:", pageNumber);

//   const response = await apiClient.getUserProfile({
//     websiteUrl: domainName,
//     limit,
//     page: pageNumber,
//     subCategoryLabel: filters.subCategoryLabel,
//     propertyType: filters.propertyType,
//     city: filters.city,
//     district: filters.district,
//     isFeatured: filters.isFeatured,
//     sort: filters.sort,
//   });
//   console.log("الاستجابة من API:", response?.data);
//   // نفترض أن بيانات الإعلانات موجودة في response.data.profile.ads
//   return response?.data?.profile?.ads || [];
// };

// const Page = () => {
//   // 1) قراءة الدومين من الهوك
//   const domainName = useDomain();

//   // 2) حالات عرض الإعلانات والفلاتر والصفحات
//   const [filters, setFilters] = useState({
//     subCategoryLabel: "",
//     propertyType: "",
//     city: "",
//     district: "",
//     isFeatured: "",
//     sort: "",
//   });

//   const [limit, setLimit] = useState(3);
//   const [pageNumber, setPageNumber] = useState(1);

//   // 2-1) حالات المدن والأحياء
//   const [cityOptions, setCityOptions] = useState([]);
//   const [districtOptions, setDistrictOptions] = useState([]);

//   // 3) استخدام SWR لجلب الإعلانات
//   const { data: ads, error, isLoading, mutate } = useSWR(
//     domainName ? [domainName, filters, limit, pageNumber] : null,
//     fetchAds,
//     {
//       revalidateOnFocus: false,
//     }
//   );

//   // سجل لتأكيد أن SWR جلب البيانات
//   useEffect(() => {
//     console.log("تم تحديث الإعلانات:", ads);
//   }, [ads]);

//   // 4) حفظ إعدادات Grid/List
//   const [isGridView, setIsGridView] = useState(true);

//   useEffect(() => {
//     const savedView = localStorage.getItem("viewPreference");
//     if (savedView === "list") {
//       setIsGridView(false);
//     }
//   }, []);

//   const handleGridClick = () => {
//     setIsGridView(true);
//     localStorage.setItem("viewPreference", "grid");
//   };

//   const handleListClick = () => {
//     setIsGridView(false);
//     localStorage.setItem("viewPreference", "list");
//   };

//   // 5) دوال التحكم بالفلاتر
//   const handleFilterChange = (newFilters) => {
//     console.log("تغيرت الفلاتر:", newFilters);
//     setFilters(newFilters);
//     setPageNumber(1); // إعادة الصفحة الأولى عند تغيير الفلاتر
//     // عند تغير المدينة في الفلاتر، نقوم بجلب الأحياء مباشرة
//     if (newFilters.city) {
//       apiClient.getCitiesAndDistricts(domainName, newFilters.city)
//         .then((response) => {
//           const { districts } = response.data;
//           setDistrictOptions(districts);
//         })
//         .catch((error) => {
//           console.error("خطأ في جلب الأحياء:", error.response?.data || error.message);
//           setDistrictOptions([]);
//         });
//     } else {
//       setDistrictOptions([]);
//     }
//     mutate();
//   };

//   const handleFilterSubmit = (e) => {
//     e.preventDefault();
//     console.log("تم تقديم الفلاتر:", filters);
//     setPageNumber(1);
//     mutate();
//   };

//   // 5-1) عند تحميل الصفحة، جلب جميع المدن (يكون استدعاء واحد)
//   useEffect(() => {
//     if (domainName) {
//       apiClient.getCitiesAndDistricts(domainName)
//         .then((response) => {
//           const { cities } = response.data;
//           setCityOptions(cities);
//         })
//         .catch((error) => {
//           console.error("خطأ في جلب المدن:", error.response?.data || error.message);
//           setCityOptions([]);
//         });
//     }
//   }, [domainName]);

//   // 6) إدارة حالات التحميل والأخطاء
//   if (!domainName) {
//     return <div>جاري التعرّف على الدومين...</div>;
//   }
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
//   if (error) {
//     console.error("خطأ في جلب الإعلانات:", error);
//     return <div>Error: Failed to load ads. Please try again.</div>;
//   }

//   // 7) التصيير النهائي للصفحة
//   return (
//     <>
//       <Breadcrumb pageName="Property Listing System" pageTitle="Property Listing System" />

//       {/* منطقة الفلاتر */}
//       <div className="home6-search-area two mb-100">
//         <div className="container">
//           <FilterComponent
//             filters={filters}
//             cityOptions={cityOptions}         // إرسال المدن الديناميكية
//             districtOptions={districtOptions} // إرسال الأحياء الديناميكية
//             onFilterChange={handleFilterChange}
//             onFilterSubmit={handleFilterSubmit}
//           />
//           {/* عرض بيانات الفلاتر الحالية للمراقبة */}
//           <pre>{JSON.stringify(filters, null, 2)}</pre>
//         </div>
//       </div>

//       {/* قسم عرض الإعلانات */}
//       <div className="product-page no-sidebar mb-100">
//         <div className="container">
//           <div className="row g-xl-4 gy-5">
//             <div className="col-xl-12">
//               <div className="row mb-40">
//                 <div className="col-lg-12">
//                   <div className="show-item-and-filte">
//                     <p>Showing {ads?.length || 0} property(ies)</p>
//                     <div className="filter-view">
//                       <div className="filter-atra">
//                         <h6>Sort By:</h6>
//                       </div>

//                       {/* أزرار تغيير نمط العرض */}
//                       <div className="view d-xl-flex d-none">
//                         <ul className="btn-group list-grid-btn-group">
//                           <li className={`grid ${isGridView ? "active" : ""}`} onClick={handleGridClick}>
//                             {/* أيقونة Grid */}
//                           </li>
//                           <li className={`lists ${!isGridView ? "active" : ""}`} onClick={handleListClick}>
//                             {/* أيقونة List */}
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* عرض الإعلانات */}
//               <div className="list-grid-main">
//                 <div className={`list-grid-product-wrap ${!isGridView ? "list" : "grid"}-group-wrapper`}>
//                   <div className="row g-4 justify-content-center mb-40">
//                     <AdList domainName={domainName} ads={ads} />
//                   </div>

//                   {/* التصفيح (Pagination) بسيط */}
//                   <div className="row">
//                     <div className="col-lg-12">
//                       <div className="pagination-and-next-prev">
//                         <div className="pagination">
//                           <ul>
//                             {[1, 2, 3, 4, 5].map((num) => (
//                               <li key={num} className={pageNumber === num ? "active" : ""}>
//                                 <a
//                                   onClick={(e) => {
//                                     e.preventDefault();
//                                     console.log("تغيير الصفحة إلى:", num);
//                                     setPageNumber(num);
//                                     mutate();
//                                   }}
//                                   href="#"
//                                 >
//                                   {num.toString().padStart(2, "0")}
//                                 </a>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>

//                         <div className="next-prev-btn">
//                           <ul>
//                             <li>
//                               <a
//                                 onClick={(e) => {
//                                   e.preventDefault();
//                                   const newPage = Math.max(pageNumber - 1, 1);
//                                   console.log("السابق، الصفحة:", newPage);
//                                   setPageNumber(newPage);
//                                   mutate();
//                                 }}
//                                 href="#"
//                               >
//                                 Prev
//                               </a>
//                             </li>
//                             <li>
//                               <a
//                                 onClick={(e) => {
//                                   e.preventDefault();
//                                   const newPage = pageNumber + 1;
//                                   console.log("التالي، الصفحة:", newPage);
//                                   setPageNumber(newPage);
//                                   mutate();
//                                 }}
//                                 href="#"
//                               >
//                                 Next
//                               </a>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   {/* نهاية التصفيح */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* قسم الشركاء أو المحتوى الإضافي */}
//       <div className="trusted-partner-section mb-100">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="sub-title">
//                 <h6>Our Trusted Partners</h6>
//                 <div className="dash" />
//               </div>
//               <div className="partner-slider">
//                 <div className="marquee_text2">
//                   <PartnerSlide />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Page;





"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import useSWR from "swr";
import Home5About from "@/components/view/about/Home5About";
import Home5HowItWork from "@/components/view/howItWork/Home5HowItWork";

import Breadcrumb from "@/components/common/Breadcrumb";
import PartnerSlide from "@/components/view/Partner/PartnerSlide";
import AdList from "@/components/FeaturedAdCard/AdList";
import apiClient from "@/api/apiClient";
import useDomain from "@/hooks/useDomain";
import FilterComponent from "./Components/FilterComponent";

// تعديل الدالة لتُعيد كائن يحتوي على الإعلانات وعددها الكلي
const fetchAds = async ([domainName, filters, limit, pageNumber]) => {
  console.log("جاري جلب الإعلانات باستخدام:");
  console.log("الدومين:", domainName);
  console.log("الفلاتر:", filters);
  console.log("الحد:", limit, "الصفحة:", pageNumber);

  const response = await apiClient.getUserProfile({
    websiteUrl: domainName,
    limit,
    page: pageNumber,
    subCategoryLabel: filters.subCategoryLabel,
    propertyType: filters.propertyType,
    city: filters.city,
    district: filters.district,
    isFeatured: filters.isFeatured,
    sort: filters.sort,
  });
  console.log("الاستجابة من API:", response?.data);
  return {
    ads: response?.data?.profile?.ads || [],
    totalCount: response?.data?.profile?.totalCount || 0,
  };
};

const Page = () => {
  // 1) قراءة الدومين من الهوك
  const domainName = useDomain();

  // 2) حالات عرض الإعلانات والفلاتر والصفحات
  const [filters, setFilters] = useState({
    subCategoryLabel: "",
    propertyType: "",
    city: "",
    district: "",
    isFeatured: "",
      // اجعل القيمة الابتدائية "newest" أو أي نص يفهمه الـ Backend لديك
      sort: "newest",
      });

  // يمكنك تغيير قيمة limit حسب الحاجة
  const [limit, setLimit] = useState(12);
  const [pageNumber, setPageNumber] = useState(1);

  // 2-1) حالات المدن والأحياء
  const [cityOptions, setCityOptions] = useState([]);
  const [districtOptions, setDistrictOptions] = useState([]);

  // 3) استخدام SWR لجلب الإعلانات (الآن الدالة تُعيد كائنًا يحتوي على ads و totalCount)
  const { data, error, isLoading, mutate } = useSWR(
    domainName ? [domainName, filters, limit, pageNumber] : null,
    fetchAds,
    {
      revalidateOnFocus: false,
    }
  );

  // استخراج الإعلانات وعدد الصفحات
  const ads = data?.ads || [];
  const totalCount = data?.totalCount || 0;
  const totalPages = Math.ceil(totalCount / limit);

  // سجل لتأكيد أن SWR جلب البيانات
  useEffect(() => {
    console.log("تم تحديث الإعلانات:", ads);
  }, [ads]);

  // 4) حفظ إعدادات Grid/List
  const [isGridView, setIsGridView] = useState(true);

  useEffect(() => {
    const savedView = localStorage.getItem("viewPreference");
    if (savedView === "list") {
      setIsGridView(false);
    }
  }, []);

  const handleGridClick = () => {
    setIsGridView(true);
    localStorage.setItem("viewPreference", "grid");
  };

  const handleListClick = () => {
    setIsGridView(false);
    localStorage.setItem("viewPreference", "list");
  };

  // 5) دوال التحكم بالفلاتر
  const handleFilterChange = (newFilters) => {
    console.log("تغيرت الفلاتر:", newFilters);
    setFilters(newFilters);
    setPageNumber(1); // إعادة الصفحة الأولى عند تغيير الفلاتر
    // عند تغير المدينة في الفلاتر، نقوم بجلب الأحياء مباشرة
    if (newFilters.city) {
      apiClient.getCitiesAndDistricts(domainName, newFilters.city)
        .then((response) => {
          const { districts } = response.data;
          setDistrictOptions(districts);
        })
        .catch((error) => {
          console.error("خطأ في جلب الأحياء:", error.response?.data || error.message);
          setDistrictOptions([]);
        });
    } else {
      setDistrictOptions([]);
    }
    mutate();
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    console.log("تم تقديم الفلاتر:", filters);
    setPageNumber(1);
    mutate();
  };

  // 5-1) عند تحميل الصفحة، جلب جميع المدن (يكون استدعاء واحد)
  useEffect(() => {
    if (domainName) {
      apiClient.getCitiesAndDistricts(domainName)
        .then((response) => {
          const { cities } = response.data;
          setCityOptions(cities);
        })
        .catch((error) => {
          console.error("خطأ في جلب المدن:", error.response?.data || error.message);
          setCityOptions([]);
        });
    }
  }, [domainName]);

  // 6) إدارة حالات التحميل والأخطاء
  if (!domainName) {
    return <div>جاري التعرّف على الدومين...</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error("خطأ في جلب الإعلانات:", error);
    return <div>Error: Failed to load ads. Please try again.</div>;
  }

  // حساب نافذة الصفحات (Sliding Window)
  const maxPageButtons = 5;
  let startPage = Math.max(1, pageNumber - Math.floor(maxPageButtons / 2));
  let endPage = startPage + maxPageButtons - 1;
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxPageButtons + 1);
  }
  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  // 7) التصيير النهائي للصفحة
  return (
    <>
      {/* <Breadcrumb pageName="Property Listing System" pageTitle="Property Listing System" /> */}

      {/* منطقة الفلاتر */}
      <div className="two mb-100">
        <div className="container">
          <FilterComponent
            filters={filters}
            cityOptions={cityOptions}         // إرسال المدن الديناميكية
            districtOptions={districtOptions} // إرسال الأحياء الديناميكية
            onFilterChange={handleFilterChange}
            onFilterSubmit={handleFilterSubmit}
          />
          {/* عرض بيانات الفلاتر الحالية للمراقبة */}
          {/* <pre>{JSON.stringify(filters, null, 2)}</pre> */}
        </div>
      </div>

      {/* قسم عرض الإعلانات */}
      <div className="product-page no-sidebar mb-100">
        <div className="container">
          <div className="row g-xl-4 gy-5">
            <div className="col-xl-12">
              <div className="row mb-40">
                <div className="col-lg-12">
                  <div className="show-item-and-filte">
                    {/* <p>Showing {ads.length} property(ies)</p> */}
                    <div className="filter-view">
                      {/* <div className="filter-atra">
                        <h6>Sort By:</h6>
                      </div> */}

                      {/* أزرار تغيير نمط العرض */}
                      <div className="view d-xl-flex d-none">
                        <ul className="btn-group list-grid-btn-group">
                          <li
                            className={`grid ${isGridView ? "active" : ""}`}
                            onClick={handleGridClick}
                          >
                            {/* أيقونة Grid */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={14}
                              viewBox="0 0 14 14"
                            >
                              <mask
                                id="mask0_1631_19"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x={0}
                                y={0}
                                width={14}
                                height={14}
                              >
                                <rect width={14} height={14} fill="#D9D9D9" />
                              </mask>
                              <g mask="url(#mask0_1631_19)">
                                <path d="M5.47853 6.08726H0.608726C0.272536 6.08726 0 5.81472 0 5.47853V0.608726C0 0.272536 0.272536 0 0.608726 0H5.47853C5.81472 0 6.08726 0.272536 6.08726 0.608726V5.47853C6.08726 5.81472 5.81472 6.08726 5.47853 6.08726Z" />
                                <path d="M13.3911 6.08726H8.52132C8.18513 6.08726 7.9126 5.81472 7.9126 5.47853V0.608726C7.9126 0.272536 8.18513 0 8.52132 0H13.3911C13.7273 0 14 0.272536 14 0.608726V5.47853C14 5.81472 13.7273 6.08726 13.3911 6.08726Z" />
                                <path d="M5.47853 14.0013H0.608726C0.272536 14.0013 0 13.7288 0 13.3926V8.52279C0 8.1866 0.272536 7.91406 0.608726 7.91406H5.47853C5.81472 7.91406 6.08726 8.1866 6.08726 8.52279V13.3926C6.08726 13.7288 5.81472 14.0013 5.47853 14.0013Z" />
                                <path d="M13.3916 14.0013H8.52181C8.18562 14.0013 7.91309 13.7288 7.91309 13.3926V8.52279C7.91309 8.1866 8.18562 7.91406 8.52181 7.91406H13.3916C13.7278 7.91406 14.0003 8.1866 14.0003 8.52279V13.3926C14.0003 13.7288 13.7278 14.0013 13.3916 14.0013Z" />
                              </g>
                            </svg>
                          </li>
                          <li
                            className={`lists ${!isGridView ? "active" : ""}`}
                            onClick={handleListClick}
                          >
                            {/* أيقونة List */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={14}
                              viewBox="0 0 14 14"
                            >
                              <mask
                                id="mask0_1631_3"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x={0}
                                y={0}
                                width={14}
                                height={14}
                              >
                                <rect width={14} height={14} fill="#D9D9D9" />
                              </mask>
                              <g mask="url(#mask0_1631_3)">
                                <path d="M1.21747 2C0.545203 2 0 2.55848 0 3.24765C0 3.93632 0.545203 4.49433 1.21747 4.49433C1.88974 4.49433 2.43494 3.93632 2.43494 3.24765C2.43494 2.55848 1.88974 2 1.21747 2Z" />
                                <path d="M1.21747 5.75195C0.545203 5.75195 0 6.30996 0 6.99913C0 7.68781 0.545203 8.24628 1.21747 8.24628C1.88974 8.24628 2.43494 7.68781 2.43494 6.99913C2.43494 6.30996 1.88974 5.75195 1.21747 5.75195Z" />
                                <path d="M1.21747 9.50586C0.545203 9.50586 0 10.0643 0 10.753C0 11.4417 0.545203 11.8821 1.21747 11.8821C1.88974 11.8821 2.43494 11.4417 2.43494 10.753C2.43494 10.0643 1.88974 9.50586 1.21747 9.50586Z" />
                              </g>
                            </svg>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* عرض الإعلانات */}
              <div className="list-grid-main">
                <div className={`list-grid-product-wrap ${!isGridView ? "list" : "grid"}-group-wrapper`}>
                  <div className="row g-4 justify-content-center mb-40">
                    <AdList domainName={domainName} ads={ads} />
                  </div>

                  {/* التصفيح (Pagination) */}
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="pagination-and-next-prev">
                        <div className="pagination">
                          <ul>
                            {/* زر الصفحة الأولى إذا لم يكن في البداية */}
                            {startPage > 1 && (
                              <li>
                                <a
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setPageNumber(1);
                                    mutate();
                                  }}
                                  href="#"
                                >
                                  01
                                </a>
                              </li>
                            )}
                            {/* إذا كان هناك فجوة بين الصفحة الأولى والنطاق */}
                            {startPage > 2 && <li>...</li>}
                            {pageNumbers.map((num) => (
                              <li key={num} className={pageNumber === num ? "active" : ""}>
                                <a
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setPageNumber(num);
                                    mutate();
                                  }}
                                  href="#"
                                >
                                  {num.toString().padStart(2, "0")}
                                </a>
                              </li>
                            ))}
                            {/* إذا كان هناك فجوة بين نهاية النطاق والصفحة الأخيرة */}
                            {endPage < totalPages - 1 && <li>...</li>}
                            {/* زر الصفحة الأخيرة */}
                            {endPage < totalPages && (
                              <li>
                                <a
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setPageNumber(totalPages);
                                    mutate();
                                  }}
                                  href="#"
                                >
                                  {totalPages.toString().padStart(2, "0")}
                                </a>
                              </li>
                            )}
                          </ul>
                        </div>

                        <div className="next-prev-btn">
                          <ul>
                            <li>
                              <a
                                onClick={(e) => {
                                  e.preventDefault();
                                  const newPage = Math.max(pageNumber - 1, 1);
                                  setPageNumber(newPage);
                                  mutate();
                                }}
                                href="#"
                              >
                                السابق
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={(e) => {
                                  e.preventDefault();
                                  const newPage = Math.min(pageNumber + 1, totalPages);
                                  setPageNumber(newPage);
                                  mutate();
                                }}
                                href="#"
                              >
                                التالي 
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* نهاية التصفيح */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* قسم الشركاء أو المحتوى الإضافي */}
      {/* <div className="trusted-partner-section mb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="sub-title">
                <h6>Our Trusted Partners</h6>
                <div className="dash" />
              </div>
              <div className="partner-slider">
                <div className="marquee_text2">
                  <PartnerSlide />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Home5HowItWork />

    </>
  );
};

export default Page;

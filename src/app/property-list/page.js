

// //


// "use client";

// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import useSWR from "swr";
// import Home5About from "@/components/view/about/Home5About";
// import Home5HowItWork from "@/components/view/howItWork/Home5HowItWork";

// import Breadcrumb from "@/components/common/Breadcrumb";
// import PartnerSlide from "@/components/view/Partner/PartnerSlide";
// import AdList from "@/components/FeaturedAdCard/AdList";
// import apiClient from "@/api/apiClient";
// import useDomain from "@/hooks/useDomain";
// import FilterComponent from "./Components/FilterComponent";

// // تعديل الدالة لتُعيد كائن يحتوي على الإعلانات وعددها الكلي
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
//   return {
//     ads: response?.data?.profile?.ads || [],
//     totalCount: response?.data?.profile?.totalCount || 0,
//   };
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
//       // اجعل القيمة الابتدائية "newest" أو أي نص يفهمه الـ Backend لديك
//       sort: "newest",
//       });

//   // يمكنك تغيير قيمة limit حسب الحاجة
//   const [limit, setLimit] = useState(12);
//   const [pageNumber, setPageNumber] = useState(1);

//   // 2-1) حالات المدن والأحياء
//   const [cityOptions, setCityOptions] = useState([]);
//   const [districtOptions, setDistrictOptions] = useState([]);

//   // 3) استخدام SWR لجلب الإعلانات (الآن الدالة تُعيد كائنًا يحتوي على ads و totalCount)
//   const { data, error, isLoading, mutate } = useSWR(
//     domainName ? [domainName, filters, limit, pageNumber] : null,
//     fetchAds,
//     {
//       revalidateOnFocus: false,
//     }
//   );

//   // استخراج الإعلانات وعدد الصفحات
//   const ads = data?.ads || [];
//   const totalCount = data?.totalCount || 0;
//   const totalPages = Math.ceil(totalCount / limit);

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

//   // حساب نافذة الصفحات (Sliding Window)
//   const maxPageButtons = 5;
//   let startPage = Math.max(1, pageNumber - Math.floor(maxPageButtons / 2));
//   let endPage = startPage + maxPageButtons - 1;
//   if (endPage > totalPages) {
//     endPage = totalPages;
//     startPage = Math.max(1, endPage - maxPageButtons + 1);
//   }
//   const pageNumbers = [];
//   for (let i = startPage; i <= endPage; i++) {
//     pageNumbers.push(i);
//   }

//   // 7) التصيير النهائي للصفحة
//   return (
//     <>
//       {/* <Breadcrumb pageName="Property Listing System" pageTitle="Property Listing System" /> */}

//       {/* منطقة الفلاتر */}
//       <div className="two mb-100">
//         <div className="container">
//           <FilterComponent
//             filters={filters}
//             cityOptions={cityOptions}         // إرسال المدن الديناميكية
//             districtOptions={districtOptions} // إرسال الأحياء الديناميكية
//             onFilterChange={handleFilterChange}
//             onFilterSubmit={handleFilterSubmit}
//           />
//           {/* عرض بيانات الفلاتر الحالية للمراقبة */}
//           {/* <pre>{JSON.stringify(filters, null, 2)}</pre> */}
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
//                     {/* <p>Showing {ads.length} property(ies)</p> */}
//                     <div className="filter-view">
//                       {/* <div className="filter-atra">
//                         <h6>Sort By:</h6>
//                       </div> */}

//                       {/* أزرار تغيير نمط العرض */}
//                       <div className="view d-xl-flex d-none">
//                         <ul className="btn-group list-grid-btn-group">
//                           <li
//                             className={`grid ${isGridView ? "active" : ""}`}
//                             onClick={handleGridClick}
//                           >
//                             {/* أيقونة Grid */}
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width={14}
//                               height={14}
//                               viewBox="0 0 14 14"
//                             >
//                               <mask
//                                 id="mask0_1631_19"
//                                 style={{ maskType: "alpha" }}
//                                 maskUnits="userSpaceOnUse"
//                                 x={0}
//                                 y={0}
//                                 width={14}
//                                 height={14}
//                               >
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
//                           <li
//                             className={`lists ${!isGridView ? "active" : ""}`}
//                             onClick={handleListClick}
//                           >
//                             {/* أيقونة List */}
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               width={14}
//                               height={14}
//                               viewBox="0 0 14 14"
//                             >
//                               <mask
//                                 id="mask0_1631_3"
//                                 style={{ maskType: "alpha" }}
//                                 maskUnits="userSpaceOnUse"
//                                 x={0}
//                                 y={0}
//                                 width={14}
//                                 height={14}
//                               >
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

//                   {/* التصفيح (Pagination) */}
//                   <div className="row">
//                     <div className="col-lg-12">
//                       <div className="pagination-and-next-prev">
//                         <div className="pagination">
//                           <ul>
//                             {/* زر الصفحة الأولى إذا لم يكن في البداية */}
//                             {startPage > 1 && (
//                               <li>
//                                 <a
//                                   onClick={(e) => {
//                                     e.preventDefault();
//                                     setPageNumber(1);
//                                     mutate();
//                                   }}
//                                   href="#"
//                                 >
//                                   01
//                                 </a>
//                               </li>
//                             )}
//                             {/* إذا كان هناك فجوة بين الصفحة الأولى والنطاق */}
//                             {startPage > 2 && <li>...</li>}
//                             {pageNumbers.map((num) => (
//                               <li key={num} className={pageNumber === num ? "active" : ""}>
//                                 <a
//                                   onClick={(e) => {
//                                     e.preventDefault();
//                                     setPageNumber(num);
//                                     mutate();
//                                   }}
//                                   href="#"
//                                 >
//                                   {num.toString().padStart(2, "0")}
//                                 </a>
//                               </li>
//                             ))}
//                             {/* إذا كان هناك فجوة بين نهاية النطاق والصفحة الأخيرة */}
//                             {endPage < totalPages - 1 && <li>...</li>}
//                             {/* زر الصفحة الأخيرة */}
//                             {endPage < totalPages && (
//                               <li>
//                                 <a
//                                   onClick={(e) => {
//                                     e.preventDefault();
//                                     setPageNumber(totalPages);
//                                     mutate();
//                                   }}
//                                   href="#"
//                                 >
//                                   {totalPages.toString().padStart(2, "0")}
//                                 </a>
//                               </li>
//                             )}
//                           </ul>
//                         </div>

//                         <div className="next-prev-btn">
//                           <ul>
//                             <li>
//                               <a
//                                 onClick={(e) => {
//                                   e.preventDefault();
//                                   const newPage = Math.max(pageNumber - 1, 1);
//                                   setPageNumber(newPage);
//                                   mutate();
//                                 }}
//                                 href="#"
//                               >
//                                 السابق
//                               </a>
//                             </li>
//                             <li>
//                               <a
//                                 onClick={(e) => {
//                                   e.preventDefault();
//                                   const newPage = Math.min(pageNumber + 1, totalPages);
//                                   setPageNumber(newPage);
//                                   mutate();
//                                 }}
//                                 href="#"
//                               >
//                                 التالي 
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
//       {/* <div className="trusted-partner-section mb-100">
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
//       </div> */}
//       <Home5HowItWork />

//     </>
//   );
// };

// export default Page;






"use client";

import React, { useState, useEffect } from "react";
import useSWR from "swr";
import AdList from "@/components/FeaturedAdCard/AdList";
import FilterComponent from "./Components/FilterComponent";
import apiClient from "@/api/apiClient";
import useDomain from "@/hooks/useDomain";
import Home5HowItWork from "@/components/view/howItWork/Home5HowItWork";

/* =========================================================
   1) دالة الجلب — تُرجِع ads دائمًا كمصفوفة حتى لو كان إعلانًا واحدًا
   ========================================================= */
const fetchAds = async ([domainName, filters, limit, page]) => {
  const res = await apiClient.getUserProfile({
    websiteUrl: domainName,
    limit,
    page,
    subCategoryLabel: filters.subCategoryLabel,
    propertyType: filters.propertyType,
    city: filters.city,
    district: filters.district,
    // أرسِل isFeatured فقط إذا كانت قيمته truthy
    ...(filters.isFeatured && { isFeatured: filters.isFeatured }),
    sort: filters.sort,
  });

  const rawAds = res?.data?.profile?.ads;
  const ads = Array.isArray(rawAds) ? rawAds : rawAds ? [rawAds] : [];

  return {
    ads,
    totalCount: res?.data?.profile?.totalCount ?? ads.length,
  };
};

const Page = () => {
  /* =========================================================
     2) الحالات العامة
     ========================================================= */
  const domainName = useDomain();
  const [filters, setFilters] = useState({
    subCategoryLabel: "",
    propertyType: "",
    city: "",
    district: "",
    isFeatured: "",      // "" | "true" مثلاً
    sort: "newest",
  });
  const [limit] = useState(12);
  const [pageNumber, setPageNumber] = useState(1);

  // خيارات المدن والأحياء
  const [cityOptions, setCityOptions] = useState([]);
  const [districtOptions, setDistrictOptions] = useState([]);

  /* =========================================================
     3) SWR
     ========================================================= */
  const {
    data,
    error,
    isLoading,
    mutate,
  } = useSWR(
    domainName ? [domainName, filters, limit, pageNumber] : null,
    fetchAds,
    { revalidateOnFocus: false }
  );

  const ads = data?.ads ?? [];
  const totalPages = Math.ceil((data?.totalCount ?? 0) / limit);

  /* =========================================================
     4) Grid / List toggle
     ========================================================= */
  // const [isGridView, setIsGridView] = useState(
  //   () => localStorage.getItem("viewPreference") !== "list"
  // );
  // const toggleView = (grid) => {
  //   setIsGridView(grid);
  //   localStorage.setItem("viewPreference", grid ? "grid" : "list");
  // };


const [isGridView, setIsGridView] = useState(true); // البداية افتراضية

useEffect(() => {
  if (typeof window !== "undefined") {
    const viewPreference = localStorage.getItem("viewPreference");
    setIsGridView(viewPreference !== "list");
  }
}, []);

const toggleView = (grid) => {
  setIsGridView(grid);
  if (typeof window !== "undefined") {
    localStorage.setItem("viewPreference", grid ? "grid" : "list");
  }
};


  /* =========================================================
     5) فلترة البيانات
     ========================================================= */
  const handleFilterChange = (newFilters) => {
    setFilters((prev) => {
      const updated = { ...prev, ...newFilters };
      setPageNumber(1);

      // عند تغيير المدينة اجلب الأحياء
      if (updated.city) {
        apiClient
          .getCitiesAndDistricts(domainName, updated.city)
          .then(({ data }) => setDistrictOptions(data.districts))
          .catch(() => setDistrictOptions([]));
      } else {
        setDistrictOptions([]);
      }

      // أعد الجلب فورًا بالمفتاح الجديد
      mutate([domainName, updated, limit, 1], { revalidate: true });
      return updated;
    });
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    setPageNumber(1);
    mutate([domainName, filters, limit, 1], { revalidate: true });
  };

  /* =========================================================
     6) تحميل المدن عند أول فتح
     ========================================================= */
  useEffect(() => {
    if (!domainName) return;
    apiClient
      .getCitiesAndDistricts(domainName)
      .then(({ data }) => setCityOptions(data.cities))
      .catch(() => setCityOptions([]));
  }, [domainName]);

  /* =========================================================
     7) حالات التحميل والأخطاء
     ========================================================= */
  if (!domainName) return <div>جاري التعرّف على الدومين…</div>;
  if (isLoading) return <div>Loading…</div>;
  if (error) return <div>خطأ في جلب الإعلانات، حاول مجددًا.</div>;

  /* =========================================================
     8) أرقام الصفحات (Sliding Window)
     ========================================================= */
  const maxBtns = 5;
  let start = Math.max(1, pageNumber - Math.floor(maxBtns / 2));
  let end = Math.min(totalPages, start + maxBtns - 1);
  start = Math.max(1, end - maxBtns + 1);
  const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

  /* =========================================================
     9) التصيير
     ========================================================= */
  return (
    <>
      {/* الفلاتر */}
      <section className="two mb-100">
        <div className="container">
          <FilterComponent
            filters={filters}
            cityOptions={cityOptions}
            districtOptions={districtOptions}
            onFilterChange={handleFilterChange}
            onFilterSubmit={handleFilterSubmit}
          />
        </div>
      </section>

      {/* الإعلانات */}
      <section className="product-page no-sidebar mb-100">
        <div className="container">
          <div className="row g-xl-4 gy-5">
            <div className="col-xl-12">
              {/* أزرار Grid / List */}
              <div className="row mb-40">
                <div className="col-lg-12">
                  <div className="filter-view d-xl-flex d-none">
                    <ul className="btn-group list-grid-btn-group">
                      <li
                        className={`grid ${isGridView ? "active" : ""}`}
                        onClick={() => toggleView(true)}
                      >
                        {/* أيقونة Grid */}■
                      </li>
                      <li
                        className={`lists ${!isGridView ? "active" : ""}`}
                        onClick={() => toggleView(false)}
                      >
                        {/* أيقونة List */}≡
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* قائمة الإعلانات */}
              <div className="list-grid-main">
                <div
                  className={`list-grid-product-wrap ${
                    isGridView ? "grid" : "list"
                  }-group-wrapper`}
                >
                  <div className="row g-4 justify-content-center mb-40">
                    <AdList domainName={domainName} ads={ads} />
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="pagination-and-next-prev">
                          <div className="pagination">
                            <ul>
                              {start > 1 && (
                                <li>
                                  <a
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setPageNumber(1);
                                      mutate();
                                    }}
                                  >
                                    01
                                  </a>
                                </li>
                              )}
                              {start > 2 && <li>…</li>}
                              {pages.map((num) => (
                                <li
                                  key={num}
                                  className={pageNumber === num ? "active" : ""}
                                >
                                  <a
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setPageNumber(num);
                                      mutate();
                                    }}
                                  >
                                    {String(num).padStart(2, "0")}
                                  </a>
                                </li>
                              ))}
                              {end < totalPages - 1 && <li>…</li>}
                              {end < totalPages && (
                                <li>
                                  <a
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setPageNumber(totalPages);
                                      mutate();
                                    }}
                                  >
                                    {String(totalPages).padStart(2, "0")}
                                  </a>
                                </li>
                              )}
                            </ul>
                          </div>

                          <div className="next-prev-btn">
                            <ul>
                              <li>
                                <a
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setPageNumber((p) => Math.max(p - 1, 1));
                                  }}
                                >
                                  السابق
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setPageNumber((p) =>
                                      Math.min(p + 1, totalPages)
                                    );
                                  }}
                                >
                                  التالي
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* /Pagination */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* محتوى إضافي */}
      <Home5HowItWork />
    </>
  );
};

export default Page;

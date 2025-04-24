
// "use client";

// import React, { useState, useEffect } from "react";
// import { FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";

// const FilterComponent = ({ filters, onFilterChange, onFilterSubmit }) => {
//   // الحالة المحلية لتخزين تغييرات المستخدم دون إرسالها فوراً
//   const [localFilters, setLocalFilters] = useState(filters);

//   // مزامنة الحالة المحلية مع القيم الخارجية عند تغيرها
//   useEffect(() => {
//     setLocalFilters(filters);
//   }, [filters]);

//   // تحديث الحالة المحلية عند اختيار قيمة جديدة
//   const handleLocalChange = (key, value) => {
//     const updated = { ...localFilters, [key]: value };
//     console.log(`تغيير ${key} إلى:`, value);
//     setLocalFilters(updated);
//   };

//   // عند الضغط على زر "بحث" يتم إرسال الحالة المحلية إلى المكوّن الأب
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("تم تقديم الفلاتر:", localFilters);
//     onFilterChange(localFilters);
//     onFilterSubmit(e);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           gap: "16px",
//           justifyContent: "center",
//         }}
//       >
//         {/* فلتر تصنيف فرعي */}
//         <FormControl variant="outlined" style={{ minWidth: 200 }}>
//           <InputLabel>تصنيف فرعي</InputLabel>
//           <Select
//             value={localFilters.subCategoryLabel}
//             onChange={(e) =>
//               handleLocalChange("subCategoryLabel", e.target.value)
//             }
//             label="تصنيف فرعي"
//           >
//             <MenuItem value="">
//               <em>اختر</em>
//             </MenuItem>
//             <MenuItem value="CategoryA">CategoryA</MenuItem>
//             <MenuItem value="CategoryB">CategoryB</MenuItem>
//             <MenuItem value="CategoryC">CategoryC</MenuItem>
//           </Select>
//         </FormControl>

//         {/* فلتر نوع العقار */}
//         <FormControl variant="outlined" style={{ minWidth: 200 }}>
//           <InputLabel>نوع العقار</InputLabel>
//           <Select
//             value={localFilters.propertyType}
//             onChange={(e) =>
//               handleLocalChange("propertyType", e.target.value)
//             }
//             label="نوع العقار"
//           >
//             <MenuItem value="">
//               <em>اختر</em>
//             </MenuItem>
//             <MenuItem value="بيع">بيع</MenuItem>
//             <MenuItem value="إيجار">إيجار</MenuItem>
//             {/* <MenuItem value="For Rent">For Rent</MenuItem> */}
//           </Select>
//         </FormControl>

//         {/* فلتر المدينة */}
//         <FormControl variant="outlined" style={{ minWidth: 200 }}>
//           <InputLabel>المدينة</InputLabel>
//           <Select
//             value={localFilters.city}
//             onChange={(e) => handleLocalChange("city", e.target.value)}
//             label="المدينة"
//           >
//             <MenuItem value="">
//               <em>اختر</em>
//             </MenuItem>
//             <MenuItem value="الرياض">الرياض</MenuItem>
//             <MenuItem value="جدة">جدة</MenuItem>
//             <MenuItem value="الدمام">الدمام</MenuItem>
//             <MenuItem value="ابها">ابها</MenuItem>
//           </Select>
//         </FormControl>

//         {/* فلتر الحي */}
//         <FormControl variant="outlined" style={{ minWidth: 200 }}>
//           <InputLabel>الحي</InputLabel>
//           <Select
//             value={localFilters.district}
//             onChange={(e) => handleLocalChange("district", e.target.value)}
//             label="الحي"
//           >
//             <MenuItem value="">
//               <em>اختر</em>
//             </MenuItem>
//             <MenuItem value="DistrictX">DistrictX</MenuItem>
//             <MenuItem value="DistrictY">DistrictY</MenuItem>
//             <MenuItem value="DistrictZ">DistrictZ</MenuItem>
//           </Select>
//         </FormControl>

//         {/* فلتر المميزة */}
//         <FormControl variant="outlined" style={{ minWidth: 200 }}>
//           <InputLabel>هل هو مميز؟</InputLabel>
//           <Select
//             value={localFilters.isFeatured}
//             onChange={(e) => handleLocalChange("isFeatured", e.target.value)}
//             label="هل هو مميز؟"
//           >
//             <MenuItem value="">
//               <em>اختر</em>
//             </MenuItem>
//             <MenuItem value="true">مميز</MenuItem>
//             <MenuItem value="false">عادي</MenuItem>
//           </Select>
//         </FormControl>

//         {/* فلتر الترتيب */}
//         <FormControl variant="outlined" style={{ minWidth: 200 }}>
//           <InputLabel>ترتيب حسب</InputLabel>
//           <Select
//             value={localFilters.sort}
//             onChange={(e) => handleLocalChange("sort", e.target.value)}
//             label="ترتيب حسب"
//           >
//             <MenuItem value="">
//               <em>اختر</em>
//             </MenuItem>
//             <MenuItem value="newest">حديث</MenuItem>
//             <MenuItem value="oldest">قديم</MenuItem>
//           </Select>
//         </FormControl>

//         {/* زر التقديم */}
//         <FormControl style={{ minWidth: 200 }}>
//           <Button
//             variant="contained"
//             type="submit"
//             sx={{
//               backgroundColor: "#EFB93F",
//               color: "#fff",
//               "&:hover": { backgroundColor: "#d9a832" },
//             }}
//           >
//             بحث
//           </Button>
//         </FormControl>
//       </div>
//     </form>
//   );
// };

// export default FilterComponent;


"use client";

import React, { useState, useEffect } from "react";
import { Box, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import baseTheme from "@/context/theme";

// إنشاء تبيان فاتح خاص بمكون الفلتر عبر تجاوز الإعدادات الأساسية
const lightFilterTheme = createTheme({
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    mode: "light", // تغيير الوضع إلى فاتح
    background: {
      default: "#ffffff", // خلفية فاتحة عامة
      paper: "#ffffff",   // خلفية ورقية فاتحة
      section: "#e0e0e0",
    },
    text: {
      primary: "#000000", // نص داكن ليتناسب مع الخلفية الفاتحة
      secondary: "#555555",
    },
    primary: {
      main: "#1976d2",    // لون رئيسي مناسب للوضع الفاتح
    },
  },
});

const FilterComponent = ({
  filters,
  cityOptions,      // استقبل خيارات المدن
  districtOptions,  // استقبل خيارات الأحياء
  onFilterChange,
  onFilterSubmit,
}) => {
  // الحالة المحلية لتخزين تغييرات المستخدم دون إرسالها فوراً
  const [localFilters, setLocalFilters] = useState(filters);

  // مزامنة الحالة المحلية مع القيم الخارجية عند تغيرها
  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  // تحديث الحالة المحلية عند اختيار قيمة جديدة
  const handleLocalChange = (key, value) => {
    const updated = { ...localFilters, [key]: value };
    console.log(`تغيير ${key} إلى:`, value);
    setLocalFilters(updated);
    // في حالة تغيير المدينة، يمكننا إرسال التغيير مباشرة لعرض الأحياء المحدثة
    if (key === "city") {
      onFilterChange({ ...updated, district: "" });
    }
  };

  // عند الضغط على زر "بحث" يتم إرسال الحالة المحلية إلى المكون الأب
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("تم تقديم الفلاتر:", localFilters);
    onFilterChange(localFilters);
    onFilterSubmit(e);
  };

  return (
    <ThemeProvider theme={lightFilterTheme}>
      <form onSubmit={handleSubmit}>
        {/* حاوية الفلاتر على شكل كبسولة */}
        <Box
          sx={{
            backgroundColor: "background.paper",
            borderRadius: "50px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            padding: "20px 30px",
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* فلتر تصنيف فرعي */}
          <FormControl variant="outlined" sx={{ minWidth: 200 }}>
            <InputLabel>تصنيف فرعي</InputLabel>
            <Select
              value={localFilters.subCategoryLabel}
              onChange={(e) => handleLocalChange("subCategoryLabel", e.target.value)}
              label="تصنيف فرعي"
            >
              <MenuItem value="">
                <em>اختر</em>
              </MenuItem>
              <MenuItem value="أرض سكنية">أرض سكنية</MenuItem>
              <MenuItem value="أرض تجارية">أرض تجارية</MenuItem>
              <MenuItem value="أرض زراعية">أرض زراعية</MenuItem>
              <MenuItem value="أرض صناعية">أرض صناعية</MenuItem>
              <MenuItem value="فيلا مستقلة">فيلا مستقلة</MenuItem>
              <MenuItem value="فيلا متصلة">فيلا متصلة</MenuItem>
              <MenuItem value="قصر فاخر">قصر فاخر</MenuItem>
              <MenuItem value="شقة سكنية">شقة سكنية</MenuItem>
              <MenuItem value="استوديو">استوديو</MenuItem>
              <MenuItem value="لوفت">لوفت</MenuItem>
              <MenuItem value="بنتهاوس">بنتهاوس</MenuItem>
              <MenuItem value="دور كامل">دور كامل</MenuItem>
              <MenuItem value="دور أرضي">دور أرضي</MenuItem>
              <MenuItem value="دور علوي">دور علوي</MenuItem>
              <MenuItem value="عمارة سكنية">عمارة سكنية</MenuItem>
              <MenuItem value="عمارة تجارية">عمارة تجارية</MenuItem>
              <MenuItem value="برج سكني">برج سكني</MenuItem>
              <MenuItem value="برج تجاري">برج تجاري</MenuItem>
              <MenuItem value="محل">محل</MenuItem>
              <MenuItem value="معرض">معرض</MenuItem>
              <MenuItem value="محل تجاري كبير">محل تجاري كبير</MenuItem>
              <MenuItem value="شاليه">شاليه</MenuItem>
              <MenuItem value="استراحة">استراحة</MenuItem>
              <MenuItem value="منتجع">منتجع</MenuItem>
              <MenuItem value="مستودع">مستودع</MenuItem>
              <MenuItem value="سكن عمّال">سكن عمّال</MenuItem>
              <MenuItem value="أرض فضاء">أرض فضاء</MenuItem>
              <MenuItem value="مزرعة">مزرعة</MenuItem>
              <MenuItem value="حوش">حوش</MenuItem>
              <MenuItem value="محمية">محمية</MenuItem>
            </Select>
          </FormControl>

          {/* فلتر نوع العقار */}
          <FormControl variant="outlined" sx={{ minWidth: 200 }}>
            <InputLabel>نوع العقار</InputLabel>
            <Select
              value={localFilters.propertyType}
              onChange={(e) => handleLocalChange("propertyType", e.target.value)}
              label="نوع العقار"
            >
              <MenuItem value="">
                <em>اختر</em>
              </MenuItem>
              <MenuItem value="بيع">بيع</MenuItem>
              <MenuItem value="إيجار">إيجار</MenuItem>
            </Select>
          </FormControl>

          {/* فلتر المدينة: استخدام البيانات الديناميكية */}
          <FormControl variant="outlined" sx={{ minWidth: 200 }}>
            <InputLabel>المدينة</InputLabel>
            <Select
              value={localFilters.city}
              onChange={(e) => handleLocalChange("city", e.target.value)}
              label="المدينة"
            >
              <MenuItem value="">
                <em>اختر</em>
              </MenuItem>
              {cityOptions.map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* فلتر الحي: استخدام البيانات الديناميكية */}
          <FormControl variant="outlined" sx={{ minWidth: 200 }}>
            <InputLabel>الحي</InputLabel>
            <Select
              value={localFilters.district}
              onChange={(e) => handleLocalChange("district", e.target.value)}
              label="الحي"
            >
              <MenuItem value="">
                <em>اختر</em>
              </MenuItem>
              {districtOptions.map((district) => (
                <MenuItem key={district} value={district}>
                  {district}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* فلتر المميزة */}
          <FormControl variant="outlined" sx={{ minWidth: 200 }}>
            <InputLabel>هل هو مميز؟</InputLabel>
            <Select
              value={localFilters.isFeatured}
              onChange={(e) => handleLocalChange("isFeatured", e.target.value)}
              label="هل هو مميز؟"
            >
              <MenuItem value="">
                <em>اختر</em>
              </MenuItem>
              <MenuItem value="true">مميز</MenuItem>
              <MenuItem value="false">عادي</MenuItem>
            </Select>
          </FormControl>

          {/* فلتر الترتيب */}
          <FormControl variant="outlined" sx={{ minWidth: 200 }}>
            <InputLabel>ترتيب حسب</InputLabel>
            <Select
              value={localFilters.sort}
              onChange={(e) => handleLocalChange("sort", e.target.value)}
              label="ترتيب حسب"
            >
              <MenuItem value="">
                <em>اختر</em>
              </MenuItem>
              <MenuItem value="newest">حديث</MenuItem>
              <MenuItem value="oldest">قديم</MenuItem>
            </Select>
          </FormControl>

          {/* زر التقديم */}
          <FormControl sx={{ minWidth: 200 }}>
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#EFB93F",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: "50px",
                padding: "10px 20px",
                "&:hover": { backgroundColor: "#d9a832" },
              }}
            >
              بحث
            </Button>
          </FormControl>
        </Box>
      </form>
    </ThemeProvider>
  );
};

export default FilterComponent;

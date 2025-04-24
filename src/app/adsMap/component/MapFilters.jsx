// // فلتر للبيانات 


// // src/app/adsMap/component/MapFilters.jsx

// import React, { useState } from 'react';

// export default function MapFilters({ onFilterChange }) {
//   const [propertyType, setPropertyType] = useState('');
//   const [city, setCity] = useState('');
//   const [district, setDistrict] = useState('');
//   const [subCategoryLabel, setSubCategoryLabel] = useState('');

//   // عندما يضغط المستخدم على زر "تطبيق" (أو يحدث تغيير)،
//   // نمرّر القيم للأب من خلال onFilterChange
//   const handleApplyFilters = () => {
//     onFilterChange({
//       propertyType,
//       city,
//       district,
//       subCategoryLabel,
//     });
//   };

//   return (
//     <div style={{ background: '#f5f5f5', padding: '1rem', margin: '1rem', borderRadius: '8px' }}>
//       <h4>فلاتر البحث</h4>

//       <label>نوع العقار:</label>
//       <input
//         type="text"
//         value={propertyType}
//         onChange={(e) => setPropertyType(e.target.value)}
//         placeholder="مثال: apartment"
//       />
//       <br />

//       <label>المدينة:</label>
//       <input
//         type="text"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         placeholder="مثال: Riyadh"
//       />
//       <br />

//       <label>الحي:</label>
//       <input
//         type="text"
//         value={district}
//         onChange={(e) => setDistrict(e.target.value)}
//         placeholder="مثال: AlOlaya"
//       />
//       <br />

//       <label>اسم التصنيف الفرعي:</label>
//       <input
//         type="text"
//         value={subCategoryLabel}
//         onChange={(e) => setSubCategoryLabel(e.target.value)}
//         placeholder="مثال: Rent"
//       />
//       <br />

//       <button onClick={handleApplyFilters} style={{ marginTop: '1rem' }}>
//         تطبيق الفلاتر
//       </button>
//     </div>
//   );
// }



import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
  useTheme,
} from '@mui/material';

export default function MapFilters({ filters, onFilterChange , logoUrl}) {
  const { subCategoryLabel, propertyType } = filters;

  // فلتر صفقة العقار (بيع/إيجار/الكل)
  const handleDealTypeChange = (event, newValue) => {
    if (newValue !== null) {
      onFilterChange({ ...filters, propertyType: newValue });
    }
  };

  // فلتر نوع العقار
  const handlePropertyTypeChange = (event, newValue) => {
    if (newValue !== null) {
      onFilterChange({ ...filters, subCategoryLabel: newValue });
    }
  };

  // كسرات الشاشة
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // قائمة أنواع العقارات
  const subCategoryOptions = [
    'الكل',
    'أرض سكنية',
    'أرض تجارية',
    'أرض زراعية',
    'أرض صناعية',
    'فيلا مستقلة',
    'فيلا متصلة',
    'قصر فاخر',
    'شقة سكنية',
    'استوديو',
    'لوفت',
    'بنتهاوس',
    'دور كامل',
    'دور أرضي',
    'دور علوي',
    'عمارة سكنية',
    'عمارة تجارية',
    'برج سكني',
    'برج تجاري',
    'محل',
    'معرض',
    'محل تجاري كبير',
    'شاليه',
    'استراحة',
    'منتجع',
    'مستودع',
    'سكن عمّال',
    'أرض فضاء',
    'مزرعة',
    'حوش',
    'محمية',
  ];

  // ستايل الأزرار الأساسي
  const toggleGroupStyles = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgb(227, 225, 225)',
    borderRadius: '16px',
    p: 0.5,
    // عند صغر الشاشة نسمح بالتمرير الأفقي إذا احتجنا
    flexWrap: isMobile ? 'nowrap' : 'wrap',
    overflowX: isMobile ? 'auto' : 'visible',

    '&::-webkit-scrollbar': {
      display: 'none',
    },
    scrollbarWidth: 'none',

    // مظهر الأزرار (سواء المختارة أم لا)
    '& .MuiToggleButtonGroup-grouped': {
      border: 0,
      margin: 0,
      color: '#555',
      fontWeight: 500,
      transition: 'all 0.3s ease',
      borderRadius: '8px',

      '&:not(:first-of-type)': {
        borderLeft: 0,
      },
      '&:hover': {
        backgroundColor: '#e0e0e0',
      },
    },

    // مظهر الزر وهو في الحالة "مُختار"
    '& .MuiToggleButton-root.Mui-selected': {
      backgroundColor: '#fff',
      color: '#000',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      borderRadius: '8px',
    },
    '& .MuiToggleButton-root.Mui-selected:hover': {
      backgroundColor: '#f9f9f9',
    },
  };

  return (
    <AppBar
    //   position="sticky"
    //  position="static"
    position="fixed"

      sx={{
        // top: 0 ,
        // background: 'linear-gradient(to right, #EFB93F, #FFD067)',
        background: 'linear-gradient(to right, #ffffff, #ffffff)',

        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 1,
          px: { xs: 2, md: 3 },
          py: 1,
        }}
      >
        {/* الشعار */}
        {logoUrl &&
        <Box
          component="img"
        
             src={logoUrl }

          alt="شعار عقاراتي"
          sx={{
            maxHeight: { xs: '50px', md: '60px' },
            width: 'auto',
          }}
        />
 }

        {/* حاوية الفلاتر */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            flex: 1, // تأخذ بقية المساحة لتمدد الأزرار
            justifyContent: 'flex-end',
            overflowX: 'auto', // للتمرير الأفقي عند صغر الشاشة
          }}
        >
          {/* فلتر صفقة العقار (بيع/إيجار/الكل) */}
          <ToggleButtonGroup
            exclusive
            value={propertyType}
            onChange={handleDealTypeChange}
            sx={toggleGroupStyles}
          >
            <ToggleButton value="الكل">الكل</ToggleButton>
            <ToggleButton value="بيع">بيع</ToggleButton>
            <ToggleButton value="إيجار">إيجار</ToggleButton>
          </ToggleButtonGroup>

          {/* فلتر نوع العقار (المصفوفة) */}
          <ToggleButtonGroup
            exclusive
            value={subCategoryLabel}
            onChange={handlePropertyTypeChange}
            sx={{
              ...toggleGroupStyles,
              position: 'relative',
              maxWidth: { xs: '60vw', sm: '400px' },
              flexWrap: 'nowrap',
              overflowX: 'auto',
              whiteSpace: 'nowrap',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            {subCategoryOptions.map((type) => (
              <ToggleButton key={type} value={type}>
                {type}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

// // مكون ازرار التحكم 
// // المسار: src/app/adsMap/component/MapControls.js
// import React from 'react';
// import { Box, Button, ButtonGroup } from '@mui/material';

// export function MapControls({ onMapTypeChange }) {
//   return (
//     <Box
//       sx={{
//         position: 'absolute',
//         top: '10px',
//         right: '10px',
//         zIndex: 9999,
//       }}
//     >
//       <ButtonGroup variant="contained">
//         <Button onClick={() => onMapTypeChange('roadmap')}>خريطة عادية</Button>
//         <Button onClick={() => onMapTypeChange('satellite')}>قمر صناعي</Button>
//       </ButtonGroup>
//     </Box>
//   );
// }




import React, { useState } from 'react';
import { Box, Button } from '@mui/material';

// استيراد الأيقونات من مكتبة MUI
import MapIcon from '@mui/icons-material/Map';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';

export function MapControls({ onMapTypeChange }) {
  // حالة محلية لتتبع نوع الخريطة
  const [mapType, setMapType] = useState('roadmap');

  const handleToggleMapType = () => {
    // عند النقر على الزر، نقوم بالتبديل بين 'roadmap' و 'satellite'
    const newType = mapType === 'roadmap' ? 'satellite' : 'roadmap';
    setMapType(newType);
    onMapTypeChange(newType);
  };

  return (
    <Box
      sx={{
        position:"fixed",

        // position: 'absolute',
        top: '100px',
        right: '10px',
        zIndex: 9999,

        // تنسيقات خلفية وإطار ظل للمربع الحاوي
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
          // لون خلفية الزر
          backgroundColor: '#EFB93F',
          // عند التحويم أو الضغط يمكن التحكم باللون أيضًا (مثال لتفتيح اللون)
          '&:hover': {
            backgroundColor: '#DBA038',
          },
        }}
      >
        {/* إن كانت الخريطة عادية، اعرض أيقونة القمر الصناعي؛ والعكس صحيح */}
        {mapType === 'roadmap' ? (
          <SatelliteAltIcon sx={{ color: '#000' }} />
        ) : (
          <MapIcon sx={{ color: '#000' }} />
        )}
      </Button>
    </Box>
  );
}

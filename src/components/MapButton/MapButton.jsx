

import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn'; // ✅ استيراد أيقونة الموقع من MUI

function MapButton({ latitude, longitude, city, district }) {
  if (latitude === null || latitude === undefined || longitude === null || longitude === undefined) {
    return null;
  }

  const handleOpenMap = () => {
    const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(mapUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        marginBottom: '20px',
      }}
    >
      <button
        onClick={handleOpenMap}
        style={{
          padding: '8px 16px',
          backgroundColor: '#efb93f', // لون الخلفية
          color: '#000',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '14px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <LocationOnIcon style={{ width: 20, height: 20, marginLeft: '6px', color: '#000' }} />
        للوصول إلى الموقع
      </button>
    </div>
  );
}

export default MapButton;

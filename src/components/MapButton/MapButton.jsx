// import React from 'react';

// function MapButton({ latitude, longitude, city, district }) {
//   // دالة فتح الرابط في علامة تبويب جديدة
//   const handleOpenMap = () => {
//     const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
//     window.open(mapUrl, '_blank');
//   };

//   // نصيّة تحوي keyframes لحركة wiggle
//   const wiggleKeyframes = `
//     @keyframes wiggle {
//       0%   { transform: translateY(-50%) translateX(0); }
//       50%  { transform: translateY(-50%) translateX(5px); }
//       100% { transform: translateY(-50%) translateX(0); }
//     }
//   `;

//   return (
//     <>
//       {/* حقن تحريك wiggle في وسم <style> */}
//       <style>{wiggleKeyframes}</style>

//       <div  style={{ position: 'relative', marginBottom: '20px' }}>
//         <button
//           onClick={handleOpenMap}
//           style={{
//             padding: '8px 16px',
//             backgroundColor: '#efb93f', // لون خلفية يشبه زر تيكتوك
//             color: '#000',
//             fontWeight: 'bold',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer',
//             fontSize: '14px',
//             boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
//             display: 'inline-flex',
//             alignItems: 'center', // لجعل الأيقونة والنص في سطر واحد
//             position: 'relative', // حتى يتم تموضع السهم داخله
//           }}
//         >
//           {/* أيقونة الموقع الثابتة */}
//           <img
//             src="/assets/img/inner-page/icon/location.svg"
//             alt="Location Icon"
//             style={{
//               width: '20px',
//               height: '20px',
//               marginRight: '8px', // مسافة بين الأيقونة والنص
//             }}
//           />
//           {/* نص الزر: يعرض المدينة والحي */}
//          للوصول إلى الموقع
//          {/* <br/>
//          { city} - {district} */}

//           {/* السهم المتحرك داخل الزر (نفس فكرة arrow-wiggle) */}
//           <img
//             src="/assets/img/inner-page/icon/arrow-wiggle.svg"
//             alt="Arrow Wiggle"
//             style={{
//               position: 'absolute',
//               top: '50%',          
//               right: '120%',       // يمكنك ضبطه لتعديل المسافة الأفقية
//               transform: 'translateY(-50%) rotate(180deg)',
//               width: '130px',
//               height: 'auto',
//               animation: 'wiggle 1.2s infinite', // تطبيق الـkeyframes
//             }}
//           />
//         </button>
//       </div>
//     </>
//   );
// }

// export default MapButton;




// import React from 'react';

// function MapButton({ latitude, longitude, city, district }) {
//   // دالة فتح الرابط في علامة تبويب جديدة
//   const handleOpenMap = () => {
//     const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
//     window.open(mapUrl, '_blank');
//   };

//   return (
//     // حاوية خارجية flex بعرض كامل وتوسّط أفقي للزر
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         width: '100%',
//         marginBottom: '20px',
//       }}
//     >
//       <button
//         onClick={handleOpenMap}
//         style={{
//           padding: '8px 16px',
//           backgroundColor: '#efb93f', // لون الخلفية
//           color: '#000',
//           fontWeight: 'bold',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: 'pointer',
//           fontSize: '14px',
//           boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
//           display: 'inline-flex',
//           alignItems: 'center',  // لجعل الأيقونة والنص في سطر واحد
//           justifyContent: 'center',
//         }}
//       >
//         {/* أيقونة الموقع */}
//         <img
//           src="/assets/img/inner-page/icon/location.svg"
//           alt="Location Icon"
//           style={{
//             width: '20px',
//             height: '20px',
//             marginRight: '1px', // مسافة بين الأيقونة والنص
//             marginLeft: '6px',
//           }}
//         />
//         {/* نص الزر */}
//         للوصول إلى الموقع
//       </button>
//     </div>
//   );
// }

// export default MapButton;



import React from 'react';

function MapButton({ latitude, longitude, city, district }) {
  // ‼️ إذا ما فيه إحداثيات، لا نرسم أي شيء
  if (latitude === null || latitude === undefined || longitude === null || longitude === undefined) {
    return null;
  }

  // دالة فتح الرابط في علامة تبويب جديدة
  const handleOpenMap = () => {
    const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(mapUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    // حاوية خارجية flex بعرض كامل وتوسّط أفقي للزر
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
          alignItems: 'center',  // لجعل الأيقونة والنص في سطر واحد
          justifyContent: 'center',
        }}
      >
        {/* أيقونة الموقع */}
        <img
          src="/assets/img/inner-page/icon/location.svg"
          alt="Location Icon"
          style={{
            width: '20px',
            height: '20px',
            marginRight: '1px', // مسافة بين الأيقونة والنص
            marginLeft: '6px',
          }}
        />
        {/* نص الزر */}
        للوصول إلى الموقع
      </button>
    </div>
  );
}

export default MapButton;

// import React from 'react';
// import IconButton from '@mui/material/IconButton';
// import { FaMapMarkerAlt } from 'react-icons/fa';

// const LocationButton = ({ locationUrl, locationName }) => {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column', // ترتيب عمودي
//         alignItems: 'center',
//         gap: '5px', // تقليل المسافة بين الأيقونة والنص
//       }}
//     >
//       <IconButton
//         aria-label="Open Location"
//         href={locationUrl}
//         target="_blank"
//         sx={{
//           backgroundColor: '#efb93f',
//           '&:hover': { backgroundColor: '#d6a436' },
//           color: '#000',
//         }}
//       >
//         <FaMapMarkerAlt style={{ fontSize: '1.5rem', color: '#000' }} />
//       </IconButton>
//       <p style={{ margin: 0, fontSize: '14px', color: '#000' }}>{locationName}</p>
//     </div>
//   );
// };

// export default LocationButton;




import React from 'react';
import IconButton from '@mui/material/IconButton';
import { FaMapMarkerAlt, FaPhone, FaWhatsapp } from 'react-icons/fa';

const LocationButton = ({ branches = [] }) => {
  // إن لم يوجد فروع على الإطلاق، نعرض رسالة بسيطة
  if (!branches || branches.length === 0) {
    return <p>لا يوجد فروع حالياً.</p>;
  }

  return (
    // حاوية خارجية تجعل المحتوى بالمنتصف باستخدام justifyContent: 'center'
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {/* الحاوية الداخلية تحتفظ بشكلها العام */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {branches.map((branch, index) => {
          const {
            branchName,
            locationUrl,
            phoneNumber,
            whatsappNumber
          } = branch;

          return (
            <React.Fragment key={index}>
              {/* كتلة الفرع نفسها */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {/* السطر الأول: الموقع الجغرافي (اسم الفرع + رابط) */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <IconButton
                    aria-label="Branch Location"
                    href={locationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: '#efb93f',
                      '&:hover': { backgroundColor: '#d6a436' },
                      color: '#000',
                    }}
                  >
                    <FaMapMarkerAlt style={{ fontSize: '1.5rem' }} />
                  </IconButton>
                  <a
                    href={locationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#000', textDecoration: 'none', fontWeight: 'bold' }}
                  >
                    {branchName || 'فرع بدون اسم'}
                  </a>
                </div>

                {/* السطر الثاني: رقم الهاتف */}
                {phoneNumber && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <IconButton
                      aria-label="Call Branch"
                      href={`tel:${phoneNumber}`}
                      sx={{
                        backgroundColor: '#efb93f',
                        '&:hover': { backgroundColor: '#d6a436' },
                        color: '#000',
                      }}
                    >
                      <FaPhone style={{ fontSize: '1.5rem' }} />
                    </IconButton>
                    <a
                      href={`tel:${phoneNumber}`}
                      style={{ color: '#000', textDecoration: 'none' }}
                    >
                      {phoneNumber}
                    </a>
                  </div>
                )}

                {/* السطر الثالث: رقم الواتساب */}
                {whatsappNumber && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <IconButton
                      aria-label="WhatsApp Branch"
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: '#efb93f',
                        '&:hover': { backgroundColor: '#d6a436' },
                        color: '#000',
                      }}
                    >
                      <FaWhatsapp style={{ fontSize: '1.5rem' }} />
                    </IconButton>
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#000', textDecoration: 'none' }}
                    >
                      WhatsApp
                    </a>
                  </div>
                )}
              </div>

              {/* خط فاصل بين الفروع (لا يظهر بعد آخر فرع) */}
              {index < branches.length - 1 && (
                <hr style={{ margin: '10px 0', borderColor: '#ccc' }} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default LocationButton;

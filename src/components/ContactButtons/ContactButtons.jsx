// import React from 'react';

// function ContactButtons({ phoneNumber, whatsAppNumber }) {
//   // إن كانت جميع القيم فارغة، لا نعرض شيئًا
//   if (!phoneNumber && !whatsAppNumber) {
//     return null;
//   }

//   // معالجة رابط الواتساب النهائي
//   let finalWhatsAppLink = '';
//   if (whatsAppNumber) {
//     // إن كان الرابط يحتوي مسبقًا على "wa.me" نفترض أنه كامل وجاهز
//     if (whatsAppNumber.includes('wa.me')) {
//       finalWhatsAppLink = whatsAppNumber;
//     } else {
//       // إن لم يكن كذلك، نضيف عليه "https://wa.me/"
//       finalWhatsAppLink = `https://wa.me/${whatsAppNumber}`;
//     }
//   }

//   return (
//     <div style={{ display: 'flex', gap: '10px' }}>
//       {/* زر الاتصال (tel:) */}
//       {phoneNumber && (
//         <a
//           href={`tel:${phoneNumber}`}
//           style={{
//             padding: '8px 16px',
//             backgroundColor: '#4CAF50',
//             color: '#fff',
//             borderRadius: '5px',
//             textDecoration: 'none',
//             textAlign: 'center',
//           }}
//         >
//           اتصل
//         </a>
//       )}

//       {/* زر الواتساب */}
//       {whatsAppNumber && (
//         <a
//           href={finalWhatsAppLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{
//             padding: '8px 16px',
//             backgroundColor: '#25D366',
//             color: '#fff',
//             borderRadius: '5px',
//             textDecoration: 'none',
//             textAlign: 'center',
//           }}
//         >
//           واتساب
//         </a>
//       )}
//     </div>
//   );
// }

// export default ContactButtons;
import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';  

function ContactButtons({ phoneNumber, whatsAppNumber }) {
  // إن كانت جميع القيم فارغة، لا نعرض شيئًا
  if (!phoneNumber && !whatsAppNumber) {
    return null;
  }

  // دالة تساعدنا على تنسيق الرقم حسب الشروط المطلوبة للعرض
  const formatPhoneNumber = (number) => {
    if (number.startsWith('+9665')) {
      // مثال: +9665 123 4567 => 05 123 4567
      return number.replace('+9665', '05');
    } else if (number.startsWith('+966')) {
      // مثال: +966 55 => 55
      return number.replace('+966', '');
    }
    // في حال لم يبدأ بـ +966، نُعيده كما هو
    return number;
  };

  // الرقم الذي سيُعرض للمستخدم بعد التنسيق
  const displayPhoneNumber = phoneNumber ? formatPhoneNumber(phoneNumber) : '';

  // معالجة رابط الواتساب النهائي
  let finalWhatsAppLink = '';
  if (whatsAppNumber) {
    // إن كان الرابط يحتوي مسبقًا على "wa.me" نفترض أنه كامل وجاهز
    if (whatsAppNumber.includes('wa.me')) {
      finalWhatsAppLink = whatsAppNumber;
    } else {
      // إن لم يكن كذلك، نضيف عليه "https://wa.me/"
      finalWhatsAppLink = `https://wa.me/${whatsAppNumber}`;
    }
  }

  // تنسيق أساسي للأزرار
  const baseButtonStyle = {
    display: 'flex',
    flexDirection: 'column', // يجعل الأيقونة فوق والنص تحت
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',               // مسافة بين الأيقونة والنص
    padding: '12px 20px',
    backgroundColor: 'rgb(239, 185, 63)',
    color: '#000',           // اللون الأسود للنص
    borderRadius: '8px',
    textDecoration: 'none',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    transition: 'transform 0.2s ease-in-out',
    cursor: 'pointer',
    width: '130px',          // عرض ثابت (اختياري) لتنسيق الأزرار
    textAlign: 'center',
  };

  // لإضافة حركة تكبير خفيفة عند المرور بالماوس
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div 
      style={{ 
        display: 'flex', 
        gap: '16px', 
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* زر الاتصال (tel:) - يظهر فقط إن وُجد phoneNumber */}
      {phoneNumber && (
        <a
          // نستخدم الرقم الأصلي في رابط الاتصال
          href={`tel:${phoneNumber}`}
          style={baseButtonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaPhone style={{ fontSize: '1.5rem', color: '#000' }} />
          {/* نعرض الرقم بعد تنسيقه بالشروط */}
          <span style={{ direction: 'ltr', unicodeBidi: 'bidi-override' }}>
            {displayPhoneNumber}
          </span>
        </a>
      )}

      {/* زر الواتساب - يظهر فقط إن وُجد whatsAppNumber */}
      {whatsAppNumber && (
        <a
          href={finalWhatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          style={baseButtonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaWhatsapp style={{ fontSize: '1.5rem', color: '#000' }} />
          <span>WhatsApp</span>
        </a>
      )}
    </div>
  );
}

export default ContactButtons;

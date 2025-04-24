



// import React, { useEffect, useState } from 'react';
// import IconButton from '@mui/material/IconButton';
// import {
//   FaFacebook,
//   FaTwitter,
//   FaInstagram,
//   FaLinkedin,
//   FaYoutube,
//   FaSnapchatGhost,
//   FaPinterest,
//   FaTiktok,
//   FaTelegramPlane,
//   FaWhatsapp,
// } from 'react-icons/fa';
// import apiClient from "../../../api/apiClient"; // استيراد API client

// const Home5SocialMediaButtons = ({ domainName }) => {
//   const [socialLinks, setSocialLinks] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // تعريف الأيقونات مع أسمائها واللون
//   const platforms = {
//     Facebook: <FaFacebook style={{ color: '#000' }} />,
//     Twitter: <FaTwitter style={{ color: '#000' }} />,
//     Instagram: <FaInstagram style={{ color: '#000' }} />,
//     LinkedIn: <FaLinkedin style={{ color: '#000' }} />,
//     YouTube: <FaYoutube style={{ color: '#000' }} />,
//     Snapchat: <FaSnapchatGhost style={{ color: '#000' }} />,
//     Pinterest: <FaPinterest style={{ color: '#000' }} />,
//     TikTok: <FaTiktok style={{ color: '#000' }} />,
//     Telegram: <FaTelegramPlane style={{ color: '#000' }} />,
//     WhatsApp: <FaWhatsapp style={{ color: '#000' }} />,
//   };

//   // جلب بيانات السوشيال ميديا من API
//   useEffect(() => {
//     const fetchSocialMedia = async () => {
//       setLoading(true);
//       setError(null);

//       if (!domainName) {
//         setError("Domain name is required");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await apiClient.getSocialMedia(domainName); // استدعاء API
//         setSocialLinks(response.data?.socialMedia || {}); // تخزين الروابط
//       } catch (err) {
//         console.error("Error fetching social media data:", err);
//         setError("Failed to load social media links.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSocialMedia();
//   }, [domainName]);

//   // عرض أثناء التحميل
//   if (loading) {
//     return <p>Loading social media links...</p>;
//   }

//   // عرض رسالة خطأ إن وُجدت
//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div
//       style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(4, 1fr)',
//         gap: '10px',
//         justifyItems: 'center',
//       }}
//     >
//       {Object.keys(platforms).map((platform) => {
//         const link = socialLinks[platform]; // الحصول على الرابط من API
//         if (!link) return null; // عدم عرض الأيقونة إذا لم يكن هناك رابط

//         return (
//           <IconButton
//             key={platform}
//             aria-label={platform}
//             href={link}
//             target="_blank"
//             sx={{
//               backgroundColor: '#efb93f',
//               '&:hover': {
//                 backgroundColor: '#efb93f',
//                 boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
//               },
//               color: '#000',
//             }}
//           >
//             {platforms[platform]}
//           </IconButton>
//         );
//       })}
//     </div>
//   );
// };

// export default Home5SocialMediaButtons;





import React from 'react';
import IconButton from '@mui/material/IconButton';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaSnapchatGhost,
  FaPinterest,
  FaTiktok,
  FaTelegramPlane,
  FaWhatsapp,
  FaEnvelope,  // أضفنا أيقونة البريد
} from 'react-icons/fa';

const Home5SocialMediaButtons = ({ socialMedia = {} }) => {
  // كائن يعرّف المنصات والأيقونات المرتبطة بها
  const platforms = {
    Facebook: <FaFacebook style={{ color: '#000' }} />,
    Twitter: <FaTwitter style={{ color: '#000' }} />,
    Instagram: <FaInstagram style={{ color: '#000' }} />,
    LinkedIn: <FaLinkedin style={{ color: '#000' }} />,
    YouTube: <FaYoutube style={{ color: '#000' }} />,
    Snapchat: <FaSnapchatGhost style={{ color: '#000' }} />,
    Pinterest: <FaPinterest style={{ color: '#000' }} />,
    TikTok: <FaTiktok style={{ color: '#000' }} />,
    Telegram: <FaTelegramPlane style={{ color: '#000' }} />,
    WhatsApp: <FaWhatsapp style={{ color: '#000' }} />,
  };

  // مفتاح للتحقق إن كان هناك أي منصة تواصل اجتماعي غير الإيميل
  const hasAnyPlatform = Object.keys(platforms).some((platform) => !!socialMedia[platform]);

  return (
    <div style={{ textAlign: 'center' }}>
      {/* شبكة الأيقونات الخاصة بالسوشال ميديا (إذا وجدت أي منصة) */}
      {hasAnyPlatform && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '10px',
            justifyItems: 'center',
          }}
        >
          {Object.keys(platforms).map((platform) => {
            const link = socialMedia[platform];
            if (!link) return null; // إذا لم يوجد رابط، لا نعرض أيقونة المنصة

            return (
              <IconButton
                key={platform}
                aria-label={platform}
                href={link}
                target="_blank"
                sx={{
                  backgroundColor: '#efb93f',
                  '&:hover': {
                    backgroundColor: '#efb93f',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                  },
                  color: '#000',
                }}
              >
                {platforms[platform]}
              </IconButton>
            );
          })}
        </div>
      )}

      {/* في حال وُجد إيميل، نعرض خط فاصل ثم الإيميل */}
      {socialMedia.email && (
        <>
          {/* خط فاصل قبل الإيميل */}
          <hr
            style={{
              margin: '16px auto',
              borderColor: '#ccc',
              width: '100%' // يمكنك تعديله حسب رغبتك
            }}
          />

          <div
            style={{
              marginTop: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <IconButton
              aria-label="Email"
              href={`mailto:${socialMedia.email}`}
              sx={{
                backgroundColor: '#efb93f',
                '&:hover': {
                  backgroundColor: '#efb93f',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                },
                color: '#000',
              }}
            >
              <FaEnvelope style={{ color: '#000' }} />
            </IconButton>
            <span style={{ fontSize: '14px', color: '#000' }}>
              {socialMedia.email}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Home5SocialMediaButtons;

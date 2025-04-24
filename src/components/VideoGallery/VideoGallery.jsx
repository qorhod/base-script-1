// import React, { useState, useRef, useEffect } from 'react';

// const VideoGallery = ({ videos }) => {
//   const [isOpen, setOpen] = useState(false);
//   const [currentVideo, setCurrentVideo] = useState(null);
//   const videoRefs = useRef([]);

//   const handleOpenVideo = (videoUrl) => {
//     setCurrentVideo(videoUrl);
//     setOpen(true);
//   };

//   const handleLoadedData = (index) => {
//     const vid = videoRefs.current[index];
//     if (vid) {
//       // إيقاف الفيديو فور تحميل الإطار الأول ليبقى ثابتاً
//       vid.pause();
//     }
//   };

//   return (
//     <div 
//       className="video-gallery" 
//       style={{
//         maxWidth: '600px', 
//         margin: '40px auto',
//         padding: '0 20px',
//         boxSizing: 'border-box',
//       }}
//     >
//         <h3> الفيديو :</h3>
//       {videos.map((video, index) => (
//         <div className="single-item" key={index} style={{ marginBottom: '30px' }}>
//           <div className="title" style={{ marginBottom: '15px' }}>
//             <h5 
//               style={{
//                 fontSize: '16px', 
//                 fontWeight: '600', 
//                 margin: 0,
//                 color: '#333',
//               }}
//             >
//               {/* {`شاهد الفيديو ${index + 1}`} */}
//             </h5>
//           </div>
//           <div
//             className="poperty-video-area"
//             onClick={() => handleOpenVideo(video)}
//             style={{
//               position: 'relative',
//               cursor: 'pointer',
//               borderRadius: '10px',
//               overflow: 'hidden',
//               boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//               width: '100%',
//               paddingTop: '46.56%', // نسبة 406/872 * 100
//             }}
//           >
//             <video
//               ref={(el) => (videoRefs.current[index] = el)}
//               src={video}
//               preload="metadata"
//               muted
//               playsInline
//               autoPlay
//               onLoadedData={() => handleLoadedData(index)}
//               style={{
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 width: '100%',
//                 height: '100%',
//                 objectFit: 'cover'
//               }}
//             ></video>
//             <div
//               className="play-btn"
//               style={{
//                 position: 'absolute',
//                 left: 0,
//                 top: 0,
//                 width: '100%',
//                 height: '100%',
//                 backgroundColor: 'rgba(0, 0, 0, 0.1)',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}
//             >
//               <span
//                 style={{
//                   display: 'inline-flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   backgroundColor: 'rgba(0, 0, 0, 0.6)',
//                   borderRadius: '50%',
//                   width: '50px',
//                   height: '50px',
//                   fontSize: '12px',
//                   fontWeight: 'bold',
//                   textAlign: 'center',
//                   border: '2px solid #efb93f',
//                   color: '#efb93f',
//                 }}
//               >
//                 مشاهدة
//               </span>
//             </div>
//           </div>
//         </div>
//       ))}

//       {isOpen && (
//         <React.Fragment>
//           <div
//             style={{
//               position: 'fixed',
//               top: 0,
//               left: 0,
//               width: '100%',
//               height: '100%',
//               backgroundColor: 'rgba(0, 0, 0, 0.8)',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               zIndex: 1000,
//               padding: '20px',
//               boxSizing: 'border-box',
//             }}
//           >
//             <video
//               src={currentVideo}
//               controls
//               autoPlay
//               style={{
//                 maxWidth: '100%',
//                 maxHeight: '100%',
//                 borderRadius: '10px',
//               }}
//             />
//             <button
//               onClick={() => setOpen(false)}
//               style={{
//                 position: 'absolute',
//                 top: '20px',
//                 right: '20px',
//                 padding: '8px 16px',
//                 backgroundColor: '#ff4d4d',
//                 color: '#fff',
//                 border: 'none',
//                 borderRadius: '5px',
//                 cursor: 'pointer',
//                 fontSize: '14px',
//                 boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
//               }}
//             >
//               إغلاق
//             </button>
//           </div>
//         </React.Fragment>
//       )}
//     </div>
//   );
// };

// export default VideoGallery;



import React, { useState, useRef } from 'react';

const transformYoutubeUrl = (url) => {
  if (!url) return "";

  // إذا كان الرابط يحوي مسبقًا "/embed/" فنرجعه كما هو
  if (url.includes('/embed/')) {
    return url;
  }

  // إذا كان الرابط يحوي "watch?v=" فنحوله إلى صيغة embed
  if (url.includes('watch?v=')) {
    const splittedUrl = url.split('watch?v=');
    const videoIdPart = splittedUrl[1] || "";
    // لو في بارامترات إضافية بعد الـvideoId نفصلها
    const videoId = videoIdPart.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }

  // في حال لم ينطبق أي مما سبق، نرجع الرابط كما هو
  return url;
};

const VideoGallery = ({ videos, youtubeUrl, tiktokUrl }) => {
  const [isOpen, setOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const videoRefs = useRef([]);

  // نحوّل رابط يوتيوب إلى صيغة embed إن لزم
  const embedYoutubeUrl = transformYoutubeUrl(youtubeUrl);

  // عند النقر على الفيديو المصغّر:
  const handleOpenVideo = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setOpen(true);
  };

  // إيقاف الفيديو فور تحميل الإطار الأول (كي يكون ثابتًا)
  const handleLoadedData = (index) => {
    const vid = videoRefs.current[index];
    if (vid) {
      vid.pause();
    }
  };

  // تحريك wiggle للسهم في زر تيكتوك
  const wiggleKeyframes = `
    @keyframes wiggle {
      0%   { transform: translateY(-50%) translateX(0); }
      50%  { transform: translateY(-50%) translateX(5px); }
      100% { transform: translateY(-50%) translateX(0); }
    }
  `;
  const hasVideos = !!(tiktokUrl || youtubeUrl || (videos?.length));

  return (
    <div
      className="video-gallery custom-bg"
      style={{
        maxWidth: '600px',
        margin: '40px auto',
        padding: '0 20px',
        boxSizing: 'border-box',
      }}
    >
{hasVideos && (
  <>
    <h3>الفيديوهات:</h3>
    <br />
  </>
)}            <br/>

      {/* حقن الـ keyframes داخل العنصر */}
      <style>{wiggleKeyframes}</style>

      {/* زر فتح التغطية على تيكتوك (إن توفر رابط tiktokUrl) */}
      {tiktokUrl && (
        <div style={{ position: 'relative', marginBottom: '20px' }}>
          <button
            onClick={() => window.open(tiktokUrl, '_blank')}
            style={{
              padding: '8px 16px',
              backgroundColor: '#efb93f',
              color: '#000',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '14px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
              display: 'inline-flex',
              alignItems: 'center', // لتنسيق النص والأيقونة جنبًا إلى جنب
            }}
          >
            <img
              src="/assets/img/inner-page/icon/tiktok-svg.svg"
              alt="TikTok Icon"
              style={{
                width: '20px',
                height: '20px',
                marginLeft: '8px', // مسافة بين النص والأيقونة
              }}
            />
            مشاهدة التغطية على تيكتوك
            {/* <img
              src="/assets/img/inner-page/icon/arrow-wiggle.svg" // عدّل المسار لو أردت
              alt="Arrow Wiggle"
              style={{
                position: 'absolute',
                top: '50%',          // في منتصف ارتفاع الزر عموديًا
                right: '70%',       // اجعل السهم على يسار الزر (باستخدام right بدل left)
                transform: 'translateY(-50%) rotate(180deg)',
                // rotate(180deg) لقلب السهم إذا كان يشير يمينًا وتريد توجيهه إلى الزر
                width: '130px',
                height: 'auto',
                animation: 'wiggle 1.2s infinite', // تطبيق الـkeyframes
              }}
            /> */}
          </button>
        </div>
      )}


      {/* عرض فيديو يوتيوب (إن توفر رابط youtubeUrl) */}
      {youtubeUrl && (
        <div style={{ marginBottom: '30px' }}>
          <div
            style={{
              position: 'relative',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              width: '100%',
              paddingTop: '46.56%', // نفس نسبة الأبعاد المستخدمة للفيديو
            }}
          >
            <iframe
              src={embedYoutubeUrl}
              title="YouTube Video"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
            />
          </div>
        </div>
      )}

      {/* عرض الفيديوهات من مصفوفة videos */}
      {videos?.map((video, index) => (
        <div
          className="single-item"
          key={index}
          style={{ marginBottom: '30px' }}
        >
          <div className="title" style={{ marginBottom: '15px' }}>
            <h5
              style={{
                fontSize: '16px',
                fontWeight: '600',
                margin: 0,
                color: '#333',
              }}
            >
              {/* يمكن وضع عنوان هنا إن أردت */}
            </h5>
          </div>
          <div
            className="poperty-video-area"
            onClick={() => handleOpenVideo(video)}
            style={{
              position: 'relative',
              cursor: 'pointer',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              width: '100%',
              paddingTop: '46.56%',
            }}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video}
              preload="metadata"
              muted
              playsInline
              autoPlay
              onLoadedData={() => handleLoadedData(index)}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                // الخلفية السوداء في حال لم يظهر الإطار الأول
                backgroundColor: '#000', 
              }}
            />
            <div
              className="play-btn"
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  border: '2px solid #efb93f',
                  color: '#efb93f',
                }}
              >
                مشاهدة
              </span>
            </div>
          </div>
        </div>
      ))}

      {/* نافذة الفيديو الكبيرة عند النقر */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            padding: '20px',
            boxSizing: 'border-box',
          }}
        >
          <video
            src={currentVideo}
            controls
            autoPlay
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              borderRadius: '10px',
              backgroundColor: '#000',
            }}
          />
          <button
            onClick={() => setOpen(false)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              padding: '8px 16px',
              backgroundColor: '#ff4d4d',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '14px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
            }}
          >
            إغلاق
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;

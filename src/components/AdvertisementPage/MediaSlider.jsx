import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // تأكد من استيراد أنماط Swiper
import apiClient from "../../api/apiClient";

const MediaSlider = ({ domainName, adId }) => {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        console.log("Fetching media for domain:", domainName, "and adId:", adId); // تسجيل الدومين و ID الإعلان
        setLoading(true);

        const response = await apiClient.getAd(domainName, adId); // استدعاء API بالطريقة الجديدة
        console.log("API Response:", response.data); // تسجيل الاستجابة الكاملة من API

        // استخراج الحقول مباشرةً
        const { image, images, videos } = response.data || {};
        console.log("Extracted Media:", { image, images, videos }); // تسجيل الوسائط المستخرجة

        // تشكيل مصفوفة الوسائط
        const allMedia = [
          ...(image ? [{ type: "image", url: image }] : []), // الصورة الأولى
          ...(images?.map((img) => ({ type: "image", url: img })) || []), // الصور الإضافية
          ...(videos?.map((vid) => ({ type: "video", url: vid })) || []), // الفيديوهات
        ];

        console.log("Formatted Media Array:", allMedia); // تسجيل المصفوفة النهائية للوسائط
        setMedia(allMedia);
      } catch (err) {
        setError("تعذر تحميل الوسائط. يرجى المحاولة مرة أخرى.");
        console.error("Error fetching media:", err.message); // تسجيل الخطأ
      } finally {
        setLoading(false);
        console.log("Media fetching complete."); // تأكيد انتهاء العملية
      }
    };

    if (domainName && adId) {
      fetchMedia();
    }
  }, [domainName, adId]); // إضافة adId كعنصر متابعة

  if (loading) {
    return <div>جاري التحميل...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  console.log("Rendering MediaSlider with media:", media); // تسجيل البيانات عند عرضها

  return (
    <Swiper
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      navigation={true}
      pagination={{ clickable: true }}
      className="swiper product-img-slider"
    >
      {media.map((item, index) => (
        <SwiperSlide key={index} className="swiper-slide">
          {item.type === "image" ? (
            <img
              src={item.url}
              alt={`Media ${index}`}
              style={{ width: "100%", height: "auto", objectFit: "cover" }} // ضبط الحجم
              onError={(e) => {
                console.error("Image failed to load:", item.url); // تسجيل إذا فشل تحميل الصورة
                e.target.src = "/assets/img/default-image.png"; // صورة افتراضية
              }}
            />
          ) : (
            <video controls style={{ width: "100%", height: "auto", objectFit: "cover" }}>
              <source src={item.url} type="video/mp4" />
              المتصفح الخاص بك لا يدعم تشغيل الفيديو.
            </video>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MediaSlider;



"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import SelectComponent from "@/uitils/SelectComponent";

// استيراد الـContext من ملف منفصل
import AdsContext from "@/context/AdsContext";
import apiClient from "@/api/apiClient"; // للاتصال بالـAPI

import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

// استيراد الهوك المخصص لجلب الدومين
import useDomain from "@/hooks/useDomain";

import MessageModal from "@/components/uiModal/MessageModal";
import GallerySlider from "@/components/AdvertisementPage/GallerySlider";
import PropertyDetails from "@/components/PropertyDetails/PropertyDetails";
import Home5HowItWork from "@/components/view/howItWork/Home5HowItWork";
import VideoGallery from "@/components/VideoGallery/VideoGallery";
import PlanImages from "@/components/PlanImages/PlanImages";
import Home5FeatureProject from "@/components/view/featuredProperty/Home5FeatureProject";
import SingleLocationMap from "@/components/PropertyMap/PropertyMap";

import MapButton from "@/components/MapButton/MapButton";
import ContactButtons from "@/components/ContactButtons/ContactButtons";

export default function Page() {
  const customBgStyle = {
    backgroundColor: "#f9f9f9",
    padding: "15px",
    borderRadius: "8px",
  };

  // 1) جلب اسم الدومين عبر الهوك
  const domainName = useDomain();

  // 2) حقل لحفظ المعرف الخاص بالإعلان (adId)
  const [adId, setAdId] = useState("");

  // 3) جلب ads عامّة (من getUserProfile)
  const [ads, setAds] = useState([]);

  // 4) جلب بيانات الإعلان كاملة (adData) من getAd(domainName, adId)
  const [adData, setAdData] = useState(null);

  // 5) حالات للتحميل والخطأ إن لزم
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // استخراج adId من المسار
  useEffect(() => {
    if (typeof window !== "undefined") {
      const segments = window.location.pathname.split("/").filter(Boolean);
      // مسار كهذا: /Advertisement/67ae1ce34527fc62577e983f
      // سيعطي:
      // segments[0] = "Advertisement"
      // segments[1] = "67ae1ce34527fc62577e983f"
  
      if (segments[0] === "Advertisement") {
        setAdId(segments[1] || "");
      }
    }
  }, []);
  

  // جلب الإعلانات العامة الخاصة بالمستخدم
  useEffect(() => {
    async function fetchProfileAds() {
      if (!domainName) return; // لو لم يكن هناك دومين بعد
      try {
        const response = await apiClient.getUserProfile(domainName, 10, 1);
        const fetchedAds = response.data?.profile?.ads || [];
        setAds(fetchedAds);
      } catch (err) {
        console.error("خطأ في جلب الإعلانات:", err);
      }
    }
    fetchProfileAds();
  }, [domainName]);

  // جلب كامل بيانات الإعلان المحدد (adData)
  useEffect(() => {
    async function fetchAdData() {
      // قبل تنفيذ الطلب، نفحص في الكونسول:
      console.log("===== fetchAdData START =====");
      console.log("domainName:", domainName);
      console.log("adId:", adId);

      if (!domainName || !adId) {
        console.log("لا يمكن الجلب، إما domainName أو adId غير متوفر.");
        console.log("===== fetchAdData END (No Request) =====");
        return;
      }

      try {
        setLoading(true);
        setError(null);

        // استدعاء دالة getAd
        const response = await apiClient.getAd(domainName, adId);
        const data = response.data;

        setAdData(data);

        console.log("نجح استدعاء getAd، تم جلب البيانات:", data);
      } catch (err) {
        console.error("خطأ في جلب بيانات الإعلان:", err);
        setError("تعذر تحميل بيانات هذا الإعلان.");
      } finally {
        setLoading(false);
        console.log("===== fetchAdData END =====");
      }
    }

    fetchAdData();
  }, [domainName, adId]);

  // أمثلة على الفيديوهات
  const videos = [
    "https://blokah.s3.me-south-1.amazonaws.com/public-posts/1733821477605_ftvn3qmzaio.mp4",
    "https://blokah.s3.me-south-1.amazonaws.com/public-posts/1733821477605_ftvn3qmzaio.mp4",
  ];

  // صور المخطط (الكروكي)
  const planImages = [
    "/assets/img/inner-page/plan-01.png",
    "/assets/img/inner-page/plan-02.png",
    "/assets/img/inner-page/plan-03.png",
  ];

  // مثال على نصّ التفاصيل
  const text = `من 4 طوابق
دور البيسمنت (القبو) يتكون من :
... الخ
`;

  // ايكونات الخدمات الواصله للعقار
  const serviceIcons = {
    electricity: "/assets/img/inner-page/icon/electricity.svg",
    water: "/assets/img/inner-page/icon/water.svg",
    sewer: "/assets/img/inner-page/icon/sewer.svg",
    fiber: "/assets/img/inner-page/icon/fiber.svg",
    phone: "/assets/img/inner-page/icon/phone.svg",
    flood: "/assets/img/inner-page/icon/flood.svg",
    none: "/assets/img/inner-page/icon/none.svg",
  };

  // تنسيق النص - استبدال السطور الجديدة بـ <br />
  const formattedText = text.replace(/\n/g, "<br />");

  // إعداد سوايبر
  const slideSettings = useMemo(() => {
    return {
      speed: 1500,
      spaceBetween: 24,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".next-51",
        prevEl: ".prev-51",
      },
    };
  }, []);

  // أثناء التحميل أو الخطأ
  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        جاري تحميل بيانات الإعلان...
      </div>
    );
  }
  if (error) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px", color: "red" }}>
        {error}
      </div>
    );
  }

  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${adData?.lat},${adData?.lng}`;

  return (
    <AdsContext.Provider value={{ ads, domainName }}>
      <MessageModal />

      {/* خريطة العقار */}
      <div className="poperty-details-pages mb-100">
        <SingleLocationMap
          apiKey={"AIzaSyBI5yN7eJdLSAeXmZ6NOQT4RNkqnYfcpVM"}
          lat={adData?.lat}
          lng={adData?.lng}
          zoom={12}
          markerIconUrl="/assets/img/inner-page/icon/address.svg"
          style={{ width: "100%", height: "600px" }}
        />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="container">
          {/* معرض صور وفيديو الإعلان */}
          <GallerySlider media={adData?.images} />

          <div className="row g-lg-4 gy-5 ">
            <div>
              <div className="poperty-details-content">
                {/* معلومات أساسية عن العقار */}
                <div className="poperty-info mb-70">
                  <h2 style={{ fontWeight: "bold" }}>
                    {adData?.title || ""}
                  </h2>

                  <div className="custom-bg" style={customBgStyle}>
                    {/* السعر الرئيسي + نوع العقار */}
                    <div className="price custom-bg" style={customBgStyle}>
                      {adData?.discountPrice ? (
                        // إن وُجد سعر مخفّض
                        <strong>
                          {adData?.discountPrice}
                          <img
                            src="/assets/img/inner-page/icon/Saudi_Riyal_Symbol-2.svg"
                            alt="ريال"
                            style={{
                              width: "30px",
                              height: "30px",
                              marginLeft: "6px",
                              marginRight: "6px",
                              verticalAlign: "middle",
                            }}
                          />
                        </strong>
                      ) : adData?.originalPrice ? (
                        // إن لم يوجد سعر مخفّض، نتحقق من وجود سعر أصلي
                        <strong>
                          {adData?.originalPrice}
                          <img
                            src="/assets/img/inner-page/icon/Saudi_Riyal_Symbol-2.svg"
                            alt="ريال"
                            style={{
                              width: "30px",
                              height: "30px",
                              marginLeft: "6px",
                              marginRight: "6px",

                              verticalAlign: "middle",
                            }}
                          />
                        </strong>
                      ) : (
                        <strong></strong>
                      )}
                      <span>{adData?.propertyType}</span>
                    </div>

                    {/* إذا وُجد كلا السعرين (المخفّض والأصلي)، نعرض السعر الأصلي مشطوباً */}
                    {adData?.discountPrice && adData?.originalPrice && (
                      <del style={{ color: "red" }}>
                        {adData?.originalPrice}
                        <img
                          src="/assets/img/inner-page/icon/Saudi_Riyal_Symbol-2.svg"
                          alt="ريال"
                          style={{
                            width: "16px",
                            height: "16px",
                            marginLeft: "6px",
                            marginRight: "6px",
                            verticalAlign: "middle",
                          }}
                        />
                      </del>
                    )}

                    {/* السعر قابل للتفاوض؟ */}
                    <div>
                      {adData?.isPriceNegotiable && (
                        <div
                          style={{
                            marginTop: "1px",
                            marginRight: "6px",
                            marginBottom: "1px",
                            marginLeft: "8px",
                          }}
                        >
                          <p
                            className="bluavailable"
                            style={{
                              fontSize: "13px",
                              fontWeight: "bold",
                              marginTop: "10px",
                              marginBottom: "5px",
                              color:"#000000",
                            }}
                          >
                            <img
                              src="/assets/img/inner-page/icon/verified.svg"
                              alt="Verified icon"
                              width={14}
                              height={14}
                              style={{ marginRight: "6px", marginLeft: "6px" }}
                            />
                            السعر قابل للتفاوض
                          </p>
                        </div>
                      )}

                      {/* يقبل التمويل العقاري؟ */}
                      {adData?.acceptMortgage && (
                        <div
                          className="condition"
                          style={{
                            marginTop: "2px",
                            marginRight: "6px",
                            marginBottom: "1px",
                            marginLeft: "8px",
                          }}
                        >
                          <p
                            className="bluavailable"
                            style={{ fontSize: "13px", fontWeight: "bold" ,                               color:"#000000",
                            }}
                          >
                            <img
                              src="/assets/img/inner-page/icon/verified.svg"
                              alt="Verified icon"
                              width={14}
                              height={14}
                              style={{
                                marginRight: "6px",
                                marginLeft: "6px",
                              }}
                            />
                            يقبل التمويل العقاري
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* حالة توفر العقار + المدينة والحي */}
                  <div
                    className="location-and-condition custom-bg"
                    style={customBgStyle}
                  >
                    <div className="condition">
                      <a
                        href="#"
                        className={
                          adData?.statusText === "متاح"
                            ? "available"
                            : "unavailable"
                        }
                      >
                        {/* أيقونة داخل الـSVG (يمكنك استبدالها بما تشاء) */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={14}
                          height={14}
                          viewBox="0 0 14 14"
                        >
                          <circle
                            cx="7"
                            cy="7"
                            r="6"
                            fill={
                              adData?.statusText === "متاح"
                                ? "#4caf50"
                                : "#f44336"
                            }
                          />
                        </svg>
                        حالة توفر العقار : {adData?.statusText}
                      </a>
                    </div>
                    <div className="location">
                      <Link legacyBehavior href={googleMapsLink} passHref>
                        <a target="_blank" rel="noopener noreferrer">
                          <i className="bi bi-geo-alt" />
                          {adData?.city && adData?.district
                            ? `${adData?.city} - ${adData?.district}`
                            : adData?.city || adData?.district || ""}
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* مواصفات المشروع + النزاعات + الإلتزامات */}
                <h5>مواصفات المشروع</h5>
                <div className="single-item mb-50 custom-bg" style={customBgStyle}>
                  <div className="title mb-15" />
                  <p
                    style={{ whiteSpace: "pre-wrap" }}
                    dangerouslySetInnerHTML={{
                      __html: adData?.propertyDetails || formattedText,
                    }}
                  />

                  <h5>النزاعات على العقار أو المنفعة</h5>
                  <p
                    style={{ whiteSpace: "pre-wrap" }}
                    dangerouslySetInnerHTML={{
                      __html: adData?.disputes || "لا يوجد",
                    }}
                  />

                  <h5>الإلتزامات على العقار</h5>
                  <p
                    style={{ whiteSpace: "pre-wrap" }}
                    dangerouslySetInnerHTML={{
                      __html: adData?.obligations || "لا يوجد",
                    }}
                  />

                  {/* رقم الإعلان */}
                  <div>
                    {adData?.adNumber && (
                      <div className="condition">
                        <p
                          className="bluavailable"
                          style={{ fontSize: "13px", fontWeight: "bold" }}
                        >
                          <img
                            src="/assets/img/inner-page/icon/verified.svg"
                            alt="Verified icon"
                            width={14}
                            height={14}
                            style={{
                              marginRight: "6px",
                              marginLeft: "6px",
                            }}
                          />
                          رقم الإعلان : {adData?.adNumber}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* تفاصيل العقار */}
                <h5>تفاصيل العقار</h5>
                <div className="single-item mb-50 custom-bg" style={customBgStyle}>
                  <PropertyDetails
                    landSize={adData?.landSize}
                    buildingArea={adData?.buildingSize}
                    streetWidth={adData?.streetWidth}
                    bedrooms={adData?.bedrooms}
                    laundry={adData?.laundryRooms}
                    bathrooms={adData?.bathrooms}
                    maidRoom={adData?.maidRooms}
                    gym={adData?.gym}
                    cinema={adData?.cinemaHall}
                    swimming={adData?.swimmingPool}
                    cameras={adData?.cameras}
                    balcony={adData?.balcony}
                    elevator={adData?.elevator}
                    storage={adData?.storage}
                    buildYear={adData?.propertyAge}
                    garage={adData?.garage}
                    floorsCount={adData?.floorsCount}
                    surroundingStreetsCount={adData?.surroundingStreetsCount}
                  />
                </div>

                {/* واجهات العقار */}
                {adData?.directions?.length > 0 && (
                  <>
                    <h5>واجهة العقار</h5>
                    <div
                      className="single-item mb-30 custom-bg"
                      style={customBgStyle}
                    >
                      <div className="kye-features">
                        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                          {adData.directions.map((dir, index) => {
                            let translatedDir = "";
                            switch (dir) {
                              case "north":
                                translatedDir = "شمال";
                                break;
                              case "south":
                                translatedDir = "جنوب";
                                break;
                              case "east":
                                translatedDir = "شرق";
                                break;
                              case "west":
                                translatedDir = "غرب";
                                break;
                              default:
                                translatedDir = dir;
                            }

                            return (
                              <li key={index} style={{ marginBottom: "6px" }}>
                                <span
                                  style={{ fontSize: "1.2rem", marginRight: "8px" }}
                                >
                                  •
                                </span>
                                {translatedDir}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </>
                )}

                {/* خدمات العقار */}
                {adData?.services?.length > 0 && (
                  <>
                    <h5>خدمات العقار</h5>
                    <div
                      className="single-item mb-30 custom-bg"
                      style={customBgStyle}
                    >
                      <div className="kye-features">
                        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                          {adData.services.map((service, index) => {
                            let translatedService = "";
                            switch (service) {
                              case "electricity":
                                translatedService = "كهرباء";
                                break;
                              case "water":
                                translatedService = "المياه";
                                break;
                              case "sewer":
                                translatedService = "الصرف الصحي";
                                break;
                              case "fiber":
                                translatedService = "ألياف ضوئية";
                                break;
                              case "phone":
                                translatedService = "هاتف";
                                break;
                              case "flood":
                                translatedService = "تصريف الفيضانات";
                                break;
                              case "none":
                                translatedService = "لا يوجد خدمات";
                                break;
                              default:
                                translatedService = service;
                            }

                            const iconPath =
                              serviceIcons[service] ||
                              "/fallback-icon.svg";

                            return (
                              <li
                                key={index}
                                style={{
                                  marginBottom: "6px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <img
                                  src={iconPath}
                                  alt={service}
                                  style={{
                                    width: 24,
                                    height: 24,
                                    marginRight: "8px",
                                  }}
                                />
                                <span>{translatedService}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </>
                )}

                {/* فيديو العقار إن وجد */}
                <VideoGallery
                  videos={adData?.videos || []}
                  youtubeUrl={adData?.youtubeLink}
                  tiktokUrl={adData?.tiktokLink}
                />
              </div>
            </div>

            {/* زر الخريطة + أزرار الاتصال */}
            <div className="custom-bg" style={customBgStyle}>
              <div className="poperty-details-sb">
                <MapButton
                  latitude={adData?.lat}
                  longitude={adData?.lng}
                  city={adData?.city}
                  district={adData?.district}
                />
              </div>
              <br />
              <br />
              <ContactButtons
                phoneNumber={adData?.phoneNumber}
                whatsAppNumber={adData?.whatsappNumber}
              />
            </div>
          </div>
        </div>
      </div>

      {/* قسم إعلانات أخرى / Projects */}
      {/* <Home5FeatureProject /> */}
      <Home5HowItWork />
    </AdsContext.Provider>
  );
}

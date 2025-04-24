import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";

const FeaturedAdCard = ({
  domainName='',
  adid ='',
  title = '',
  adType = '',      // برامتر نوع الإعلان (بيع، إيجار، إلخ)
  city = '',
  features = {},
  price = '',
  originalPrice = '',
  image = '',
  discountPrice='',
  propertyType='',
  subCategory='',
  images = [],      // <-- هنا نعرفه كمصفوفة فارغة افتراضيًا
  district='',
  isFeatured = false,
  statusText = '',  // برامتر النص الديناميكي (مباع، مؤجر، إلخ)
  bedrooms = '',
  bathrooms = '',
  landSize = '',
}) => {
  const defaultImage = "/assets/img/home4/letest-car1.png"; // الصورة الافتراضية
  
  const locationString = [city, district].filter(Boolean).join(' - ');

  return (
    <SwiperSlide className="swiper-slide">
      <div
        className="product-card4"
        style={{
          border: isFeatured ? "3px solid #EFB93F" : "none",
          position: "relative",
          zIndex: 1,
          // إذا كانت الحالة غير متاح/مباع إلخ فنجعل الصورة رمادية
          filter: statusText !== "متاح" ? "grayscale(100%)" : "none"
        }}
      >

        {/* صورة الإعلان */}
        <div
          className="product-img"
          style={{
            width: "100%",
            maxWidth: "407px",
            height: "222px",
            overflow: "hidden",
            borderRadius: "8px",
          }}
        >
          <div className="batch">
            <span>{propertyType || ''}</span>
          </div>
          <img
            src={images?.[0] || defaultImage}
            alt="إعلان"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* شريط حالة ديناميكي (يظهر فقط إن كان غير متاح) */}
        {statusText && statusText !== "متاح" && (
          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "-20px",
              transform: "rotate(-45deg)",
              background: "#FF3B30",
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              width: "140px",
              padding: "5px 0",
              borderRadius: "5px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
              zIndex: 3,
              pointerEvents: "none",
            }}
          >
            <span>{statusText}</span>
          </div>
        )}

        {/* شريط إعلان مميز */}
        {isFeatured && (
          <div
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              width: "150px",
              height: "40px",
              background: "#EFB93F",
              color: "black",
              textAlign: "center",
              fontWeight: "bold",
              lineHeight: "40px",
              clipPath: "polygon(100% 0, 100% 100%, 15% 100%, 0 0)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          >
            <span>إعلان مميز</span>
          </div>
        )}

        {/* محتوى الإعلان */}
        <div className="product-content">
          <h6>
            {adType && (
              <Link legacyBehavior href={`/Advertisement/${adid}`}>
                <a>{subCategory.label || 'إعلان'}</a>
              </Link>
            )}
          </h6>

          {/* المدينة والحي */}
          <div className="location">
            {`${city} - ${district}` && (
              <Link legacyBehavior href={`/Advertisement/${adid}`}>
                <a>
                  <i className="bi bi-geo-alt" /> {locationString}
                </a>
              </Link>
            )}
          </div>

          {/* بعض المميزات (عدد الغرف، دورات المياه، المساحة) */}
          <ul className="features">
            {bedrooms > 0 && (
              <li>
                <img
                  src="/assets/img/home1/icon/bed2.svg"
                  alt="غرفة"
                />
                {`${bedrooms} غرفة`}
              </li>
            )}
            {bathrooms > 0 && (
              <li>
                <img
                  src="/assets/img/home1/icon/bath2.svg"
                  alt="دورة مياه"
                />
                {`${bathrooms} دورة مياه`}
              </li>
            )}
            {landSize > 0 && (
              <li>
                <img
                  src="/assets/img/home1/icon/size2.svg"
                  alt="المساحة"
                />
                {`المساحة- ${landSize} م²`}
              </li>
            )}
          </ul>

          {/* زر التفاصيل + السعر */}
          <div className="button-and-price">
            <Link legacyBehavior href={`/Advertisement/${adid}`}>
              <a className="primary-btn3">التفاصيل</a>
            </Link>

            <div className="price-area">
              {/* إن وُجد سعر مخفض نعرضه مع الأيقونة، 
                  وإلا نعرض السعر الأصلي مع الأيقونة. 
                  وإن وُجدا كلاهما نعرض الأصلي بشطب. */}

              {discountPrice ? (
                <h6>
                  {discountPrice}{" "}
                  <img
                    src="/assets/img/inner-page/icon/Saudi_Riyal_Symbol-2.svg"
                    alt="ريال"
                    style={{
                      width: "16px",
                      height: "16px",
                      marginLeft: "6px",
                      verticalAlign: "middle",
                    }}
                  />
                </h6>
              ) : (
                originalPrice && (
                  <h6>
                    {originalPrice}{" "}
                    <img
                      src="/assets/img/inner-page/icon/Saudi_Riyal_Symbol-2.svg"
                      alt="ريال"
                      style={{
                        width: "16px",
                        height: "16px",
                        marginLeft: "6px",
                        verticalAlign: "middle",
                      }}
                    />
                  </h6>
                )
              )}

              {/* السعر الأصلي بشطب لو فيه خصم */}
              {discountPrice && originalPrice && (
                <del style={{ color: "red" }}>
                  {originalPrice}{" "}
                  <img
                    src="/assets/img/inner-page/icon/Saudi_Riyal_Symbol-2.svg"
                    alt="ريال"
                    style={{
                      width: "16px",
                      height: "16px",
                      marginLeft: "6px",
                      verticalAlign: "middle",
                    }}
                  />
                </del>
              )}
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default FeaturedAdCard;

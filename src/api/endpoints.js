const API_ENDPOINTS = {
    GET_USER_PROFILE: '/user/profile/websiteUrl/', // endpoint الأساسي

    // GET_USER_PROFILE: '/user/profile/domain/', // endpoint الأساسي

    


    GET_AD: '/user/ads/websiteUrl/', // نقطة النهاية لجلب إعلان معين بستخدام id 
    // أضف هذا المفتاح لمسار الخريطة
    GET_ADS_MAP: '/user/ads/mapForWebsiteUrl',  // يطابق ما في الراوتر

    GET_SOCIAL_MEDIA: '/website/socialMediaForWebsiteUrl/', // نقطة النهاية الجديدة

    GET_USER_PROFILE_BY_DOMAIN: '/website/websiteUrl/',// جلب البيانات الأساسية للمسخمدم من خلال الدومين 

  // إضافة نقطة النهاية الجديدة إحضار بيانات المدن والأحياء 
  GET_CITIES_AND_DISTRICTS: '/user/cities-and-districts'


};

export default API_ENDPOINTS;

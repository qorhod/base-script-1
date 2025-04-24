// import axiosInstance from './axiosInstance';
// import API_ENDPOINTS from './endpoints';

// const apiClient = {
//     getUserProfile: (domainName, limit = 10, page = 1) =>
//         axiosInstance.get(`${API_ENDPOINTS.GET_USER_PROFILE}${domainName}`, {
//             params: { limit, page },
//         }),

//     getSocialMedia: (domainName) =>
//         axiosInstance.get(`${API_ENDPOINTS.GET_SOCIAL_MEDIA}${domainName}`),


//     getAd: (domainName, id) =>
//         axiosInstance.get(`${API_ENDPOINTS.GET_AD}${domainName}/${id}`), // جلب إعلان معين باستخدام domainName و id
    


//     // الدالة الجديدة لجلب الإعلانات ضمن نطاق الخريطة
//     // getAdsMap: (domainName, minLat, maxLat, minLng, maxLng) => {
//     //     return axiosInstance.get(`${API_ENDPOINTS.GET_ADS_MAP}`, {
//     //         params: {
//     //             domainName,
//     //             minLat,
//     //             maxLat,
//     //             minLng,
//     //             maxLng,
//     //         },
//     //     });
//     // },


// // الدالة لجلب الإعلانات ضمن نطاق الخريطة مع الفلاتر الإضافية
// getAdsMap: (domainName, minLat, maxLat, minLng, maxLng, propertyType, city, district, subCategoryLabel) => {
//     return axiosInstance.get(`${API_ENDPOINTS.GET_ADS_MAP}`, {
//         params: {
//             domainName,
//             minLat,
//             maxLat,
//             minLng,
//             maxLng,
//             // القيم الإضافية
//             propertyType,
//             city,
//             district,
//             subCategoryLabel,
//         },
//     });
// },



// };




// export default apiClient;






// المسار: /Users/abdulaziz/Desktop/RTL-Version-1/src/api/apiClient.js

import axiosInstance from './axiosInstance';
import API_ENDPOINTS from './endpoints';

const apiClient = {


  // getUserProfile: (websiteUrl, limit = 10, page = 1) =>
  //   axiosInstance.get(`${API_ENDPOINTS.GET_USER_PROFILE}${websiteUrl}`, {
  //       params: { limit, page },
  //   }),

  
  getUserProfile: ({
    websiteUrl,
    limit = 3,
    page = 1,
    subCategoryLabel,
    propertyType,
    city,
    district,
    isFeatured,
    sort,
  }) => {
    return axiosInstance.get(`${API_ENDPOINTS.GET_USER_PROFILE}${websiteUrl}`, {
      params: {
        limit,
        page,
        subCategoryLabel,
        propertyType,
        city,
        district,
        isFeatured,
        sort,
      },
    });
  },
  
    // getUserProfile: (domainName, limit = 10, page = 1) =>
    //     axiosInstance.get(`${API_ENDPOINTS.GET_USER_PROFILE}${domainName}`, {
    //         params: { limit, page },
    //     }),




        





    // getSocialMedia: (domainName) =>
    //     axiosInstance.get(`${API_ENDPOINTS.GET_SOCIAL_MEDIA}${domainName}`),

    getSocialMedia: (websiteUrl) =>
      axiosInstance.get(`${API_ENDPOINTS.GET_SOCIAL_MEDIA}${websiteUrl}`),



    // getAd: (domainName, id) =>
    //     axiosInstance.get(`${API_ENDPOINTS.GET_AD}${domainName}/${id}`),



    getAd: (websiteUrl, id) =>
      axiosInstance.get(`${API_ENDPOINTS.GET_AD}${websiteUrl}/${id}`),



// جلب المدن والإحياء 

  // الدالة الجديدة لجلب المدن والأحياء
  getCitiesAndDistricts: (websiteUrl, city = null) =>
    axiosInstance.get(`${API_ENDPOINTS.GET_CITIES_AND_DISTRICTS}`, {
      params: {
        websiteUrl,
        city
      }
    }),



  // جلب البيانات الساسه للموقع من خلال الدمين 

  // getUserProfileByDomain: (domainName) => {
  //   return axiosInstance.get(`${API_ENDPOINTS.GET_USER_PROFILE_BY_DOMAIN}${domainName}`);
  // },

  getUserProfileByDomain: (websiteUrl) => {
    return axiosInstance.get(`${API_ENDPOINTS.GET_USER_PROFILE_BY_DOMAIN}${websiteUrl}`);
  },


    // ---------------------------------------------
    // إذا لم تعد تحتاج الدالة GET، يمكنك التعليق عليها:
    // getAdsMap: (domainName, minLat, maxLat, minLng, maxLng, propertyType, city, district, subCategoryLabel) => {
    //     return axiosInstance.get(`${API_ENDPOINTS.GET_ADS_MAP}`, {
    //         params: {
    //             domainName,
    //             minLat,
    //             maxLat,
    //             minLng,
    //             maxLng,
    //             propertyType,
    //             city,
    //             district,
    //             subCategoryLabel,
    //         },
    //     });
    // },

    // ---------------------------------------------
//     // الدالة الجديدة لجلب الإعلانات ضمن نطاق الخريطة مع الفلاتر عبر POST + FormData
//     postAdsMap: (
//       domainName,
//       minLat,
//       maxLat,
//       minLng,
//       maxLng,
//       propertyType,
//       city,
//       district,
//       subCategoryLabel
//     ) => {
//       // تكوين كائن FormData
//       const formData = new FormData();
//       formData.append('domainName', domainName);
//       formData.append('minLat', minLat);
//       formData.append('maxLat', maxLat);
//       formData.append('minLng', minLng);
//       formData.append('maxLng', maxLng);
//       formData.append('propertyType', propertyType || '');
//       formData.append('city', city || '');
//       formData.append('district', district || '');
//       formData.append('subCategoryLabel', subCategoryLabel || '');

//       // إرسال الطلب عبر axiosInstance
//       return axiosInstance.post(`${API_ENDPOINTS.GET_ADS_MAP}`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//     },
// };

  // الدالة الجديدة لجلب الإعلانات ضمن نطاق الخريطة مع الفلاتر عبر POST + FormData
  postAdsMap: (
    websiteUrl,
    minLat,
    maxLat,
    minLng,
    maxLng,
    propertyType,
    city,
    district,
    subCategoryLabel
  ) => {
    // تكوين كائن FormData
    const formData = new FormData();
    formData.append('websiteUrl', websiteUrl);
    formData.append('minLat', minLat);
    formData.append('maxLat', maxLat);
    formData.append('minLng', minLng);
    formData.append('maxLng', maxLng);
    formData.append('propertyType', propertyType || '');
    formData.append('city', city || '');
    formData.append('district', district || '');
    formData.append('subCategoryLabel', subCategoryLabel || '');

    // إرسال الطلب عبر axiosInstance
    return axiosInstance.post(`${API_ENDPOINTS.GET_ADS_MAP}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};





export default apiClient;

// /**
//  * دالة تُرجع قائمة المسارات بناءً على اسم المستخدم
//  * @param {string} username - اسم المستخدم الديناميكي
//  * @returns {object} - كائن يحتوي على المسارات
//  */
// export function getRoutes(username) {
//   return {
//     [`${username}/index`]: "/index5",
//     [`${username}/property-list`]: "/property-list",
//     [`${username}/map`]: "/adsMap",
//     [`${username}/about`]: "/about",
//     [`${username}/Advertisement`]: "/property-list/deatils1",

//     // إضافة المزيد من المسارات هنا
//   };
// }



/**
 * دالة تُرجع قائمة المسارات (ثابتة هذه المرة بدون استخدام username)
 * @returns {object} - كائن يحتوي على المسارات
 */
export function getRoutes() {
  return {
    "/index": "/index5",
    "/property-list": "/property-list",
    "/map": "/adsMap",
    "/about": "/about",
    "/Advertisement": "/property-list/deatils1",

    // أضف المزيد من المسارات الثابتة حسب حاجتك
  };
}

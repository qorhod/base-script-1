



// import { NextResponse } from "next/server";
// import { getRoutes } from "./routes";
// import apiClient from "./api/apiClient";

// /**
//  * دالة للمحافظة على الدومين حتى أول ظهور لـ .com أو .sa
//  * وإزالة أي جزء آخر (subdomain أو منفذ port أو امتداد بعد .com/.sa)
//  */
// function sanitizeHostname(hostname) {
//   console.log("[Middleware] Original hostname:", hostname);

//   // إزالة المنفذ مثلاً ":3000"
//   let clean = hostname.split(":")[0];

//   // إزالة "www." لو وُجدت في البداية
//   clean = clean.replace(/^www\./, "");

//   // البحث عن أول ظهور لـ .com
//   const idxCom = clean.indexOf(".com");
//   if (idxCom !== -1) {
//     // الاحتفاظ بكل شيء حتى .com بما في ذلك ".com"
//     const sanitized = clean.substring(0, idxCom + 4);
//     console.log("[Middleware] Sanitized domain (stopped at .com):", sanitized);
//     return sanitized;
//   }

//   // البحث عن أول ظهور لـ .sa
//   const idxSa = clean.indexOf(".sa");
//   if (idxSa !== -1) {
//     // الاحتفاظ بكل شيء حتى .sa بما في ذلك ".sa"
//     const sanitized = clean.substring(0, idxSa + 3);
//     console.log("[Middleware] Sanitized domain (stopped at .sa):", sanitized);
//     return sanitized;
//   }

//   // إن لم نجد .com أو .sa نعيده كما هو
//   console.log("[Middleware] No .com or .sa found, return as is:", clean);
//   return clean;
// }

// export async function middleware(request) {
//   // استنساخ الكائن ليمكننا التعديل عليه
//   const url = request.nextUrl.clone();
//   const { pathname, hostname } = url;

//   console.log("[Middleware] Request pathname:", pathname);
//   console.log("[Middleware] Request hostname (raw):", hostname);

//   // السماح بمسارات النظام الخاصة بـ Next.js والملفات الثابتة
//   if (
//     pathname.startsWith("/_next") ||
//     pathname.startsWith("/static") ||
//     pathname.startsWith("/assets")
//   ) {
//     console.log("[Middleware] System path or assets => NextResponse.next()");
//     return NextResponse.next();
//   }

//   // نظف الدومين بحيث يتوقف عند .com أو .sa (ويزيل أي "www." أو منفذ)
//   // const websiteUrl = sanitizeHostname(hostname);

//   const websiteUrl ="qorhod.sa"
//   console.log("[Middleware] Final websiteUrl to use in API call:", websiteUrl);

//   let predefinedWebsiteUrl;

//   try {
//     console.log("[Middleware] Calling apiClient.getUserProfile with:", websiteUrl);
//     // جلب بيانات المستخدم من الـ API بناءً على الدومين النظيف
//     const response = await apiClient.getUserProfile(websiteUrl);

//     console.log("[Middleware] API response received:", response.data);

//     predefinedWebsiteUrl = response.data?.profile?.websiteUrl;

//     // التحقق من صحة الدومين الذي أرجعه الـ API
//     if (!predefinedWebsiteUrl || predefinedWebsiteUrl !== websiteUrl) {
//       console.error("[Middleware] Domain mismatch => Invalid domain or user not found.");
//       throw new Error("Invalid domain or user not found.");
//     }
//   } catch (error) {
//     console.error("[Middleware] Error fetching user data:", error.message);

//     url.pathname = `/error`;
//     url.searchParams.set(
//       "message",
//       error.response?.data?.error ||
//         "Error occurred while fetching user data."
//     );
//     console.log("[Middleware] Rewriting to /error with query:", url.searchParams.toString());
//     return NextResponse.rewrite(url);
//   }

//   // تقسيم المسار إلى أجزاء بعد التأكّد من الدومين
//   const segments = pathname.split("/").filter(Boolean);
//   console.log("[Middleware] Segments after split/filter:", segments);

//   // إذا لم يوجد أي قسم في المسار (مثلاً إذا كان فقط "/") => التوجيه للصفحة الرئيسية
//   if (segments.length === 0) {
//     console.log("[Middleware] No segments => rewrite to /index5");
//     url.pathname = "/index5";
//     // تمرير websiteUrl للصفحة الوجهة
//     url.searchParams.set("websiteUrl", predefinedWebsiteUrl);
//     return NextResponse.rewrite(url);
//   }

//   // بناء سلسلة المسار الفعلية (مثلاً "Advertisement/123")
//   const actualPath = segments.join("/");
//   console.log("[Middleware] actualPath derived:", actualPath);

//   // جلب المسارات الثابتة (دون معاملات) من دالة getRoutes
//   const routes = getRoutes();

//   // -------------------------------------------
//   // (1) التحقق من المسارات الثابتة (Static Routes)
//   // -------------------------------------------
//   // المفاتيح في getRoutes هي بشكل "/index" أو "/about" ... إلخ
//   // لذلك نضيف "/" أمام actualPath للتحقق
//   console.log("[Middleware] Checking if route is static =>", `/${actualPath}`);
//   if (routes[`/${actualPath}`]) {
//     console.log("[Middleware] Found static route => rewriting to:", routes[`/${actualPath}`]);
//     url.pathname = routes[`/${actualPath}`];
//     url.searchParams.set("websiteUrl", predefinedWebsiteUrl);
//     return NextResponse.rewrite(url);
//   }

//   // -------------------------------------------
//   // (2) مسار ديناميكي للإعلانات: Advertisement/:id
//   // -------------------------------------------
//   if (actualPath.startsWith("Advertisement/")) {
//     console.log("[Middleware] Advertisement dynamic route detected.");
//     // مثال: actualPath = "Advertisement/123"
//     const splitted = actualPath.split("/"); // ["Advertisement", "123"]
//     const advertisementId = splitted[1];    // "123"

//     try {
//       // تحقق من وجود الإعلان من الـ API
//       console.log("[Middleware] Checking ad existence =>", advertisementId);
//       await apiClient.getAd(predefinedWebsiteUrl, advertisementId);

//       // إذا الإعلان موجود
//       console.log("[Middleware] Ad found => rewriting to /property-list/deatils1");
//       url.pathname = "/property-list/deatils1";
//       url.searchParams.set("id", advertisementId);
//       url.searchParams.set("websiteUrl", predefinedWebsiteUrl);

//       return NextResponse.rewrite(url);
//     } catch (err) {
//       console.error("[Middleware] Error fetching ad data:", err.message);

//       // الإعلان غير موجود أو خطأ آخر
//       url.pathname = `/error`;
//       url.searchParams.set(
//         "message",
//         err.response?.data?.error ||
//           `Ad #${advertisementId} for domain "${predefinedWebsiteUrl}" not found.`
//       );
//       return NextResponse.rewrite(url);
//     }
//   }

//   // -------------------------------------------
//   // (3) منع أي شيء يأتي بعد "map/"
//   // -------------------------------------------
//   if (actualPath.startsWith("map/")) {
//     console.log("[Middleware] path starts with map/ => rewriting to /error");
//     url.pathname = `/error`;
//     url.searchParams.set(
//       "message",
//       `Invalid path after 'map' for domain: "${predefinedWebsiteUrl}" (No extra allowed).`
//     );
//     return NextResponse.rewrite(url);
//   }

//   // -------------------------------------------
//   // (4) إذا لم نجد مسارًا مطابقًا إطلاقًا
//   // -------------------------------------------
//   console.log("[Middleware] No matching route => rewriting to /error");
//   url.pathname = `/error`;
//   url.searchParams.set("message", `Invalid path for domain: "${predefinedWebsiteUrl}"`);
//   return NextResponse.rewrite(url);
// }

import { NextResponse } from "next/server";
import { getRoutes } from "./routes";

export async function middleware(request) {
  // نسخ الكائن الأصلي للتعديل عليه
  const url = request.nextUrl.clone();
  const { pathname, hostname } = url;

  console.log("[Middleware] Request pathname:", pathname);
  console.log("[Middleware] Request hostname (raw):", hostname);

  // (A) السماح بمسارات النظام والملفات الثابتة
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/assets")
  ) {
    console.log("[Middleware] System path or assets => NextResponse.next()");
    return NextResponse.next();
  }

  // تقسيم المسار إلى مقاطع (segments)
  const segments = pathname.split("/").filter(Boolean);
  console.log("[Middleware] Segments after split/filter:", segments);

  // إذا لم يوجد أي قسم في المسار => وجهه إلى /index5
  if (segments.length === 0) {
    console.log("[Middleware] No segments => rewrite to /index5");
    url.pathname = "/index5";
    return NextResponse.rewrite(url);
  }

  // بناء المسار
  const actualPath = segments.join("/");
  console.log("[Middleware] actualPath derived:", actualPath);

  // جلب المسارات الثابتة من الدالة getRoutes
  const routes = getRoutes();

  // (1) التحقق من المسارات الثابتة
  // لاحظ أننا نتحقق من وجود المفتاح بالشكل: '/about' أو '/contact' .. وهكذا
  if (routes[`/${actualPath}`]) {
    console.log("[Middleware] Found static route => rewriting to:", routes[`/${actualPath}`]);
    url.pathname = routes[`/${actualPath}`];
    return NextResponse.rewrite(url);
  }

  // (2) **إضافة مسار Advertisement/:id** 
  // إذا كان الجزء الأول "Advertisement"
  if (segments[0] === "Advertisement") {
    // ينبغي أن يكون المسار على شكل /Advertisement/123
    // أي مقطعين فقط: ["Advertisement", "123"]
    if (segments.length === 2) {
      const advertisementId = segments[1];
      console.log("[Middleware] Advertisement route detected. ID:", advertisementId);

      // هنا بإمكانك مثلاً إعادة التوجيه إلى صفحة التفاصيل
      // مثال: /property-list/deatils1 وتمرير ID كـ query params
      url.pathname = "/property-list/deatils1";
      url.searchParams.set("id", advertisementId);

      return NextResponse.rewrite(url);

      /**
       * ملاحظة: في حال أردت التحقق من وجود الإعلان فعليًّا عبر API،
       * يمكنك استدعاء API مثلاً هنا ثم إكمال المنطق حسب نجاح/فشل الاستدعاء.
       */
    } else {
      // يعني إما عدم وجود ID أو وجود مسارات إضافية بعده
      console.log("[Middleware] Invalid Advertisement path => rewriting to /error");
      url.pathname = "/error";
      url.searchParams.set("message", "يجب أن يكون المسار على شكل /Advertisement/123 فقط.");
      return NextResponse.rewrite(url);
    }
  }

  // (3) منع أي شيء يأتي بعد "map/"
  if (actualPath.startsWith("map/")) {
    console.log("[Middleware] path starts with map/ => rewriting to /error");
    url.pathname = "/error";
    url.searchParams.set("message", "Invalid path after 'map' (No extra allowed).");
    return NextResponse.rewrite(url);
  }

  // (4) إذا لم تتم مطابقة أي شيء أعلاه => الخطأ
  console.log("[Middleware] No matching route => rewriting to /error");
  url.pathname = "/error";
  url.searchParams.set("message", `Invalid path for domain: "${hostname}"`);
  return NextResponse.rewrite(url);
}

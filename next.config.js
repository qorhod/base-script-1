/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // إعادة توجيه الأصول (Assets)
      {
        source: "/:user/assets/:path*",
        destination: "/assets/:path*",
      },
      // إعادة توجيه المسارات الديناميكية للمستخدمين
      {
        source: "/:user/:path*",
        destination: "/:path*",
      },
      // إعداد Proxy لطلبات API
      {
        source: "/api/:path*",
        destination: "http://localhost:3000/api/:path*",
        // destination: "http://172.20.10.13:3000/api/:path*",

      },
    ];
  },
};

module.exports = nextConfig;

// next.config.js
const withPWA = require("next-pwa");

module.exports = withPWA({
  images: {
    domains: ["res.cloudinary.com"],
  },
  pwa: {
    disable: process.env.NODE_ENV === "development",
    register: true,
    scope: "/app",
    sw: "service-worker.js",
    dest: "public",
    skipWaiting: true,
  },
  async redirects() {
    return [
      {
        source: "/resources",
        destination: "/illustration-resources",
        permanent: true,
      },
      {
        source: "/bookshelf",
        destination: "/library",
        permanent: true,
      },
    ];
  },
});

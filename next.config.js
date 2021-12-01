// next.config.js
const withPWA = require("next-pwa");

module.exports = withPWA({
  images: {
    domains: ["res.cloudinary.com"],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  async redirects() {
    return [
      {
        source: "/resources",
        destination: "/illustration-resources",
        permanent: true,
      },
    ];
  },
});

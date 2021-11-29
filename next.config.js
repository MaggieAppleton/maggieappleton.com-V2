// next.config.js
module.exports = {
  images: {
    domains: ["res.cloudinary.com"],
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
};

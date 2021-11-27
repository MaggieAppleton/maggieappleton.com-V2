// next.config.js
module.exports = {
  images: {
    domains: [
      "res.cloudinary.com",
      "images-na.ssl-images-amazon.com",
      "pics.cdn.librarything.com",
      "upload.wikimedia.org",
      "i.gr-assets.com",
      "i.pinimg.com",
      "libcom.org",
      "image.isu.pub",
      "resonanceaudiodistro.files.wordpress.com",
    ],
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

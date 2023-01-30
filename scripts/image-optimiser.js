// https://www.npmjs.com/package/imagemagick

/**
 * Run me with "node scripts/image-optimiser.js [post-directory-name]"
 */

const im = require("imagemagick");
const fs = require("fs");
const path = require("path");

const widths = [440, 800, 1100, 1300, 1800];
const postName = process.argv.slice(2)[0];

const pathPrefix = "public/images/posts";
const pathToPostImages = path.join(pathPrefix, postName);

const imagesFileNames = fs.readdirSync(pathToPostImages);

imagesFileNames.forEach((fileName) => {
  widths.forEach((width) => {
    const { name, ext } = path.parse(fileName);
    // Only resize images => ignore gifs, svgs, etc.
    if (![".jpg", ".jpeg", ".png", ".webp", ".avif"].includes(ext)) return;
    const destinationFileName = `${name}-${width}.jpg`;

    try {
      im.resize({
        srcPath: path.join(pathToPostImages, fileName),
        dstPath: path.join(pathToPostImages, destinationFileName),
        width,
        quality: 100,
        format: "jpg",
        strip: true,
      });
    } catch (err) {
      console.log(err);
    }
  });
});

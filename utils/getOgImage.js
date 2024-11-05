// const playwright = require("playwright-aws-lambda");
// const { createHash } = require("crypto");
// const fs = require("fs");

// /**
//  * title is only passed in for logging purposes
//  */
// async function getOgImage(path, title) {
//   if (process.env.NODE_ENV === "development") {
//     return "og image will be generated in production";
//   }

//   const baseUrl = "https://maggieappleton.com";
//   const url = `${baseUrl}${path}`;
//   const hash = createHash("md5").update(url).digest("hex");
//   const browser = await playwright.launchChromium({ headless: true });
//   const ogImageDir = `./public/images/og`;
//   const imagePath = `${ogImageDir}/${hash}.png`;
//   const publicPath = `${baseUrl}/images/og/${hash}.png`;

//   // try {
//   //   fs.statSync(imagePath);
//   //   return publicPath;
//   // } catch (error) {
//   //   // file does not exist, so we create it
//   // }

//   // console.log("generating og image for", title);
//   const page = await browser.newPage();
//   await page.setViewportSize({ width: 1200, height: 630 });
//   await page.goto(url, { waitUntil: "networkidle" });
//   const buffer = await page.screenshot({ type: "png" });
//   await browser.close();

//   fs.mkdirSync(ogImageDir, { recursive: true });
//   fs.writeFileSync(imagePath, buffer);

//   return publicPath;
// }

// export default getOgImage;

import BasicImage from "./BasicImage";

export default function BasicImageOptimised(props) {
  if (!props.src) {
    const message = "You need to pass a src attribute to a BasicImageOptimised component";
    console.error(message);
    throw new Error(message); // Remove this if it gets annoying
  }

  let srcSet;
  const srcParts = props.src.split("/");

  if (srcParts[1] === "images" && srcParts[2] === "posts") {
    const postName = srcParts[3];
    const imageName = srcParts[4].split(".").slice(0, -1).join(".");
    const pathPrefix = "/images/posts";
    const widths = [440, 800, 1100, 1300, 1800];
    srcSet = widths
      .map(width => {
        const src = `${pathPrefix}/${postName}/${imageName}-${width}.jpg ${width}w`;
        return src;
      })
      .join(", ");
  }

  return <BasicImage srcSet={srcSet} {...props} />;
}

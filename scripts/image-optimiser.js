// api: node scripts/image-optimiser.js [postName]

// make an array of config objects
// each object will have: an output name postfix, a width, (quality level?)
// Also have a standard config object for common transformations: "strip"

// find the public/images/posts/[postName] directory
// require imageMagick
// loop through config objects
// call im.convert() for each config and pass it the command line args:
// - path to input image
// - "-strip"
// - "-resize" "[width]"
// - "-quality" "[quality]"
// - path to output

// OR USE THE .resize() api instead...

//https://www.npmjs.com/package/imagemagick
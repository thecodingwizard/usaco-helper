const withCSS = require("@zeit/next-css");
const withPurgeCSS = require("next-purgecss");

// TODO: do this automatically
// Uncomment for production
// module.exports = withCSS(withPurgeCSS({}));

// Uncomment for development
module.exports = withCSS({});


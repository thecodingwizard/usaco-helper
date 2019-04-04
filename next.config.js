const withCSS = require("@zeit/next-css");
const withPurgeCSS = require("next-purgecss");
module.exports = withCSS(withPurgeCSS({}));

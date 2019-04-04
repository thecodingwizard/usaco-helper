const withCSS = require("@zeit/next-css");
const withPurgeCSS = require("next-purgecss");

if (process.env.NODE_ENV === "production") {
  module.exports = withCSS(withPurgeCSS({}));
} else {
  module.exports = withCSS({});
}


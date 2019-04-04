const withCSS = require("@zeit/next-css");
const withPurgeCSS = require("next-purgecss");

if (process.env.NODE_ENV === "production") {
  module.exports = withCSS(withPurgeCSS({
    target: "serverless"
  }));
} else {
  module.exports = withCSS({});
}


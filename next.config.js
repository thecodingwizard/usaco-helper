const withCSS = require("@zeit/next-css");
const withPurgeCSS = require("next-purgecss");

if (process.env.NODE_ENV === "production") {
  class TailwindExtractor {
    static extract(content) {
      return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
    }
  }

  module.exports = withCSS(withPurgeCSS({
    target: "serverless",
    purgeCss: {
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ["html", "js", "ts", "tsx", "jsx"]
        }
      ]
    }
  }));
} else {
  module.exports = withCSS({});
}


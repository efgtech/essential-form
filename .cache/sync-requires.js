const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/kirsty/Documents/essential-form/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/kirsty/Documents/essential-form/src/pages/index.js"))),
  "component---src-pages-quote-bp-js": hot(preferDefault(require("/home/kirsty/Documents/essential-form/src/pages/quote-bp.js"))),
  "component---src-pages-quote-js": hot(preferDefault(require("/home/kirsty/Documents/essential-form/src/pages/quote.js"))),
  "component---src-pages-results-js": hot(preferDefault(require("/home/kirsty/Documents/essential-form/src/pages/results.js")))
}


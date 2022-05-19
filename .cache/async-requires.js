// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-quote-bp-js": () => import("./../../../src/pages/quote-bp.js" /* webpackChunkName: "component---src-pages-quote-bp-js" */),
  "component---src-pages-quote-js": () => import("./../../../src/pages/quote.js" /* webpackChunkName: "component---src-pages-quote-js" */),
  "component---src-pages-results-js": () => import("./../../../src/pages/results.js" /* webpackChunkName: "component---src-pages-results-js" */)
}


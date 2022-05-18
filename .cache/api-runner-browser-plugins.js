module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-google-gtag/gatsby-browser.js'),
      options: {"plugins":[],"includeInDevelopment":true,"trackingIds":[null],"gtagConfig":{"optimize_id":"OPT_CONTAINER_ID","anonymize_ip":true,"cookie_expires":0},"pluginConfig":{"head":true}},
    },{
      plugin: require('../node_modules/gatsby-plugin-fontawesome-css/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-facebook-pixel/gatsby-browser.js'),
      options: {"plugins":[]},
    }]

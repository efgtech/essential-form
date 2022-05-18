/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: `/quote`,

  plugins: [
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: false,
        id: process.env.GATSBY_HOTJAR_ID,
        sv: process.env.GATSBY_HOTJAR_SNIPPET_VERSION,
      },
    },
  ],
};

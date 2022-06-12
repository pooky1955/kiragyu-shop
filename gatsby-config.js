require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `KIRAGYU`,
    description: `Shop art prints by @kiragyu`,
    author: `James Liang and Jane Hao`,
  },

  flags: {
    DEV_SSR: false,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        disableAutoprefixing: true,
        disableMinification: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Price"],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/images`,
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `src/markdown-pages/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    // `gatsby-transformer-ffmpeg`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        base64Width: 20,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kiragyu Shop`,
        short_name: `Kiragyu`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/queenicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    //`gatsby-plugin-preact`,
    "gatsby-plugin-offline",
  ],
};

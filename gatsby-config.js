module.exports = {
  siteMetadata: {
    title: `Blancc State`,
    author: `Jan Czizikow`,
    description: `Official Website of Blancc State Production Label`,
    siteUrl: `https://www.blanccstate.com`,
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        showSpinner: false,
        color: '#b64b4b',
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 840,
              linkImagesToOriginal: false,
              sizeByPixelDensity: true,
              backgroundColor: 'transparent',
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './static/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-PNQ4FDK',
        includeInDevelopment: false,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Blancc State',
        short_name: 'Blancc State',
        start_url: '/',
        background_color: '#27282A',
        theme_color: '#27282A',
        display: 'minimal_ui',
        icons: [
          {
            'src': 'android-chrome-36x36.png',
            'sizes': '36x36',
            'type': 'image/png',
          },
          {
            'src': 'android-chrome-48x48.png',
            'sizes': '48x48',
            'type': 'image/png',
          },
          {
            'src': 'android-chrome-72x72.png',
            'sizes': '72x72',
            'type': 'image/png',
          },
          {
            'src': 'android-chrome-96x96.png',
            'sizes': '96x96',
            'type': 'image/png',
          },
          {
            'src': 'android-chrome-144x144.png',
            'sizes': '144x144',
            'type': 'image/png',
          },
          {
            'src': 'android-chrome-192x192.png',
            'sizes': '192x192',
            'type': 'image/png',
          },
          {
            'src': 'android-chrome-256x256.png',
            'sizes': '256x256',
            'type': 'image/png',
          },
          {
            'src': 'android-chrome-384x384.png',
            'sizes': '384x384',
            'type': 'image/png',
          },
          {
            'src': 'android-chrome-512x512.png',
            'sizes': '512x512',
            'type': 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-next',
    'gatsby-plugin-glamor',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    // make sure to put last in the array
    `gatsby-plugin-netlify`,
  ],
};

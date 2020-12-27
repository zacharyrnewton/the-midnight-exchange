// const path = require(`path`)
const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
require("dotenv").config({
  path: `.env.${activeEnv}`,
})
console.log(`Using environment config: '${activeEnv}'`)
console.log(process.env.NODE_ENV)
module.exports = {
  siteMetadata: {
    title: process.env.SITE_TITLE,
    description: process.env.SITE_DESCRIPTION,
    author: process.env.SITE_AUTHOR,
    url: process.env.SITE_URL,
    siteUrl: process.env.SITE_URL,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-plugin-sass`,
    //   options: {
    //     implementation: require("sass"),
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Story Archives`,
        short_name: `THEME`,
        lang: `en-US`,
        start_url: `/`,
        background_color: `#0F0F0F`,
        theme_color: `#EBE1CE`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: true,
        anonymize: false,
        respectDNT: false,
        pageTransitionDelay: 0,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                url
              }
            }
          }
        `,
        feeds: [
          {
            // Channel Data
            title: `Story Archives`,
            generator: `The Midnight Exchange`,
            description: `Story Archives is a show about Entertainment, focusing on film and television. Episodes vary from general convos about relevant entertainment news, commentaries on television shows, and deep dive film reviews.`,
            // Need to update
            categories: [
              `Arts`,
            ],
            site_url: `${process.env.SITE_URL}`,
            feed_url: `${process.env.SITE_URL}/podcast.xml`,
            image_url: `${process.env.SITE_URL}/images/channel/artwork.jpg`,
            language: `en-US`,
            copyright: `© 2020 Story Archives`,
            custom_namespaces: {
              itunes: `http://www.itunes.com/dtds/podcast-1.0.dtd`,
              googleplay: `http://www.google.com/schemas/play-podcasts/1.0`,
              webfeeds: `http://webfeeds.org/rss/1.0`,
            },
            custom_elements: [

              { 'itunes:title': 'Story Archives' },
              { 'itunes:subtitle': 'Story Archives is a show about Entertainment, focusing on film and television.' },
              { 'itunes:type': 'episodic' },
              { 'itunes:author': 'Story Archives' },
              {
                'itunes:owner': [
                  { 'itunes:name': 'Story Archives' },
                  { 'itunes:email': 'podcast@themidnightexchange.com' }
                ]
              },
              {
                'itunes:image': {
                  _attr: {
                    href: `${process.env.SITE_URL}/images/channel/artwork.jpg`
                  }
                }
              },
              { 'itunes:summary': `Story Archives is a show about Entertainment, focusing on film and television. Episodes vary from general convos about relevant entertainment news, commentaries on television shows, and deep dive film reviews.` },
              { 'itunes:explicit': false },
              // Need to update
              {
                'itunes:category': [
                  {
                    _attr: {
                      text: 'Arts'
                    }
                  }
                ]
              },
              { 'googleplay:author': 'Story Archives' },
              {
                'googleplay:image': {
                  _attr: {
                    href: `${process.env.SITE_URL}/images/channel/artwork.jpg`
                  }
                }
              },
              {
                'webfeeds:cover': {
                  _attr: {
                    image: `${process.env.SITE_URL}/images/channel/artwork.jpg`
                  }
                }
              },
              { 'webfeeds:icon': `${process.env.SITE_URL}/images/channel/icon.jpg` },
              {
                'webfeeds:related': {
                  _attr: {
                    layout: 'card',
                    target: 'browser'
                  }
                }
              },
              { 'webfeeds:logo': `${process.env.SITE_URL}/images/channel/logo.jpg` },
              { 'webfeeds:accentColor': 'CD6209' },
            ],
            query: `
              {
                allPodcasts {
                  totalCount
                  edges {
                    node {
                      id
                      title
                      description
                      isExplicit
                      podcastDuration
                      podcastUrl
                      tempUrl
                      podcastFileType
                      podcastFileSize
                      pubDate
                      season
                      episode
                    }
                  }
                }
              }
            `,
            serialize: ({ query: { site, allPodcasts } }) => {

              const siteData = site.siteMetadata;

              const showNotesFooter = `<br/><p><b>Find Story Archives online:<b/></p><ul><li><a href="https://www.instagram.com/storyarchives/">Instagram</a></li></ul>`;

              return allPodcasts.edges.map(edge => {

                const podcast = edge.node;

                return Object.assign({}, podcast, {

                  // Episode Data
                  guid: podcast.id,
                  title: podcast.title,
                  description: podcast.description + showNotesFooter,
                  url: podcast.tempUrl,
                  date: podcast.pubDate,
                  enclosure: { url: podcast.tempUrl, type: podcast.podcastFileType, size: Math.round(podcast.podcastFileSize) },
                  // link: 'this will be a link to the webpage it is on in the future',
                  pubDate: podcast.pubDate,
                  custom_elements: [
                    { 'content:encoded': podcast.description + showNotesFooter },
                    { 'itunes:title': podcast.title },
                    { 'itunes:summary': podcast.description + showNotesFooter },
                    { 'itunes:episodeType': 'full' },
                    {
                      'itunes:image': {
                        _attr: {
                          href: `${process.env.SITE_URL}/images/channel/artwork.jpg`
                        }
                      }
                    },
                    { 'itunes:explicit': podcast.isExplicit },
                    { 'itunes:duration': Math.round(podcast.podcastDuration) },
                    { 'itunes:season': podcast.season },
                    { 'itunes:episode': podcast.episode },
                    {
                      'webfeeds:cover': {
                        _attr: {
                          image: `${process.env.SITE_URL}/images/channel/artwork.jpg`
                        }
                      }
                    },
                  ],
                });
              });
            },
            output: '/podcast.xml',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [`/admin`, `/admin/*`, `/podcast`, `/login`],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

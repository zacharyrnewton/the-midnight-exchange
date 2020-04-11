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
    `gatsby-plugin-sass`,
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
        name: `The Midnight Exchange`,
        short_name: `THEME`,
        start_url: `/`,
        background_color: `#0F0F0F`,
        theme_color: `#EBE1CE`,
        display: `minimal-ui`,
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
            title: `The Midnight Exchange`,
            generator: `The Midnight Exchange`,
            description: `It’s that at ease feeling you get when you’re out with friends, talking over drinks in that dimly lit lounge with the good music. It’s about approaching life with a sense of curiosity and expectation; diving into any subject that gets your attention. It’s about spending time, having conversations you’ll never forget. This—is The Midnight Exchange.`,
            // Need to update
            categories: [
              `Arts`,
            ],
            site_url: `https://themidnightexchange.com/`,
            feed_url: `https://themidnightexchange.com/podcast.xml`,
            image_url: `https://themidnightexchange.com/images/channel/artwork.jpg`,
            language: `en-US`,
            copyright: `© 2020 The Midnight Exchange`,
            custom_namespaces: {
              itunes: `http://www.itunes.com/dtds/podcast-1.0.dtd`,
              googleplay: `http://www.google.com/schemas/play-podcasts/1.0`,
              webfeeds:  `http://webfeeds.org/rss/1.0`,
            },
            custom_elements: [
              { 'itunes:title': 'The Midnight Exchange'},
              { 'itunes:subtitle': 'Having conversations you’ll never forget.'},
              { 'itunes:type': 'episodic'},
              { 'itunes:author': 'The Midnight Exchange' },
              { 'itunes:owner': [
                { 'itunes:name': 'The Midnight Exchange'},
                { 'itunes:email': 'podcast@themidnightexchange.com'}
                ]
              },
              { 'itunes:image': {
                  _attr: {
                    href: 'https://themidnightexchange.com/images/channel/artwork.jpg'
                  }
                }
              },
              { 'itunes:summary': 'It’s that at ease feeling you get when you’re out with friends, talking over drinks in that dimly lit lounge with the good music. It’s about approaching life with a sense of curiosity and expectation; diving into any subject that gets your attention. It’s about spending time, having conversations you’ll never forget. This—is The Midnight Exchange.' },
              { 'itunes:explicit': false },
              // Need to update
              { 'itunes:category': [
                {
                  _attr: {
                    text: 'Arts'
                  }
                }
              ]},
              { 'googleplay:author': 'The Midnight Exchange' },
              { 'googleplay:image': {
                  _attr: {
                    href: 'https://themidnightexchange.com/images/channel/artwork.jpg'
                  }
                }
              },
              { 'webfeeds:cover': {
                  _attr: {
                    image: 'https://themidnightexchange.com/images/channel/artwork.jpg'
                  }
                }
              },
              { 'webfeeds:icon': 'https://themidnightexchange.com/images/channel/icon.jpg' },
              { 'webfeeds:related': {
                  _attr: {
                    layout: 'card',
                    target: 'browser'
                  }
                }
              },
              { 'webfeeds:logo': 'https://themidnightexchange.com/images/channel/logo.jpg' },
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

              const showNotesFooter = `<br/><p><b>Find The Midnight Exchange online:<b/></p><ul><li><a href="https://twitter.com/THEMEpodcast">Twitter</a></li><li><a href="https://www.instagram.com/themidnightexchange/">Instagram</a></li><li><a href="https://www.facebook.com/themidnightexchange">Facebook</a></li><li><a href="https://themidnightexchange.com">themidnightexchange.com</a></li></ul><br /><p><b>Looking for Mario?</b><br /><a href="https://mbusto.com">mbusto.com</a></p><p><b>Looking for Zachary?</b><br /><a href="https://zacharynewton.me">zacharynewton.me</a></p>`;

              return allPodcasts.edges.map(edge => {

                const podcast = edge.node;

                return Object.assign({}, podcast, {

                  // Episode Data
                  guid: podcast.id,
                  title: podcast.title,
                  description: podcast.description + showNotesFooter,
                  url: podcast.tempUrl,
                  date: podcast.pubDate,
                  enclosure: {url: podcast.tempUrl, type: podcast.podcastFileType, size: Math.round(podcast.podcastFileSize)},
                  // link: 'this will be a link to the webpage it is on in the future',
                  pubDate: podcast.pubDate,
                  custom_elements: [
                    { 'content:encoded': podcast.description + showNotesFooter},
                    { 'itunes:title': podcast.title },
                    { 'itunes:summary': podcast.description + showNotesFooter},
                    { 'itunes:episodeType': 'full' },
                    { 'itunes:image': {
                      _attr: {
                        href: siteData.url + 'images/channel/artwork.jpg'
                      }
                    }},
                    { 'itunes:explicit': podcast.isExplicit },
                    { 'itunes:duration': Math.round(podcast.podcastDuration) },
                    { 'itunes:season': podcast.season },
                    { 'itunes:episode': podcast.episode },
                    { 'webfeeds:cover': {
                        _attr: {
                          image: 'https://themidnightexchange.com/images/channel/artwork.jpg'
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
        exclude: [`/admin`,`/admin/*`,`/podcast`,`/login`],
      },
    },
  
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

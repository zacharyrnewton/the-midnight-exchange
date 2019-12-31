module.exports = {
  siteMetadata: {
    title: `The Midnight Exchange`,
    description: `It’s that at ease feeling you get when you’re out with friends, talking over drinks in that dimly lit lounge with the good music. It’s about approaching life with a sense of curiosity and expectation; diving into any subject that gets your attention. It’s about spending time, having conversations you’ll never forget. This—is The Midnight Exchange.`,
    author: `@THEMEpodcast`,
    url: `https://themidnightexchange.com/`
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
              `Technology`,
              `Arts`,
            ],
            site_url: `https://themidnightexchange.com/`,
            feed_url: `https://themidnightexchange.com/podcast.xml`,
            image_url: `https://themidnightexchange.com/images/channel/artwork.jpg`,
            language: `en-US`,
            copyright: `© 2019 The Midnight Exchange`,
            custom_namespaces: {
              itunes: `http://www.itunes.com/dtds/podcast-1.0.dtd`,
              googleplay: `http://www.google.com/schemas/play-podcasts/1.0`,
            },
            custom_elements: [
              { 'itunes:title': 'The Midnight Exchange'},
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
                    text: 'Technology'
                  }
                }
              ]},
              { 'googleplay:author': 'The Midnight Exchange' },
              { 'googleplay:image': {
                  _attr: {
                    href: 'https://themidnightexchange.com/images/channel/artwork.jpg'
                  }
                }
              }
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
                      podcastFileType
                      podcastFileSize
                      pubDate
                    }
                  }
                }
              }
            `,
            serialize: ({ query: { site, allPodcasts } }) => {

              const siteData = site.siteMetadata;

              const showNotesFooter = `<p>Find The Midnight Exchange online:</p><ul><li><a href="https://twitter.com/THEMEpodcast">Twitter</a></li><li><a href="https://www.instagram.com/themidnightexchange/">Instagram</a></li><li><a href="https://www.facebook.com/themidnightexchange">Facebook</a></li><li><a href="https://themidnightexchange.com">themidnightexchange.com</a></li></ul><p>Looking for Mario?<br /><a href="https://mbusto.com">mbusto.com</a></p><p>Looking for Zachary?<br /><a href="https://zacharynewton.me">zacharynewton.me</a></p>`;

              return allPodcasts.edges.map(edge => {

                const podcast = edge.node;

                return Object.assign({}, podcast, {

                  // Episode Data
                  guid: podcast.id,
                  title: podcast.title,
                  description: podcast.description + showNotesFooter,
                  url: podcast.podcastUrl,
                  date: podcast.pubDate,
                  enclosure: {url: podcast.podcastUrl, type: podcast.podcastFileType, size: Math.round(podcast.podcastFileSize)},
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
                  ],
                });
              });
            },
            output: '/podcast.xml',
          },
        ],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

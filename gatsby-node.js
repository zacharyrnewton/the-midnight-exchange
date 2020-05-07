/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
// require("dotenv").config({
//   path: `.env.${activeEnv}`,
// })

const firebase = require("firebase/app")
const firestore = require("firebase/firestore")
const storage = require("firebase/firestore")

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /firebase/,
            use: loaders.null(),
          },
          {
            test: /react-rte/,
            use: loaders.null(),
          },
          {
            test: /\.css$/,
            loaders: ["style-loader", "css-loader?modules"],
          },
        ],
      },
    })
  }
}

const fetch = require("node-fetch")
exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  // Fetch Podcasts

  try {
    if (process.env.GATSBY_ACTIVE_ENV === "production") {
      firebase.initializeApp({
        apiKey: "AIzaSyDTwoTFhhTqzzlRg-PhHx3ky1zIp6Epn_I",
        authDomain: "the-midnight-exchange.firebaseapp.com",
        databaseURL: "https://the-midnight-exchange.firebaseio.com",
        projectId: "the-midnight-exchange",
        storageBucket: "the-midnight-exchange.appspot.com",
        messagingSenderId: "153446151275",
        appId: "1:153446151275:web:569bd5141e4c91e8",
        measurementId: "G-KK9TK915WM",
      })
    } else {
      firebase.initializeApp({
        apiKey: "AIzaSyCM-QxRX2jfpqrtOlqYslya0lp4u7RlxTE",
        authDomain: "the-midnight-exchange-staging.firebaseapp.com",
        databaseURL: "https://the-midnight-exchange-staging.firebaseio.com",
        projectId: "the-midnight-exchange-staging",
        storageBucket: "the-midnight-exchange-staging.appspot.com",
        messagingSenderId: "514443679557",
        appId: "1:514443679557:web:8e1661970d6f572466502c",
        measurementId: "G-9YMMNFWTZS",
      })
    }

    // Fetch the data
    const podcastData = await firebase
      .firestore()
      .collection("podcasts")
      .get()
      .then(function(podcasts) {
        podcasts.forEach(function(podcast) {
          const podcastData = podcast.data()
          const podcastFileType = podcastData.podcastUrl
          console.log(podcastFileType)

          const node = {
            // Required Fields
            id: podcast.id,
            parent: `Podcasts`,
            ...podcastData,
            internal: {
              type: `Podcasts`,
              contentDigest: createContentDigest(podcastData),
              description: `This is the data for each podcast from Firebase.`,
            },
          }
          console.log(podcast.id, " => ", node)
          actions.createNode(node)
        })
      })
  } catch (error) {
    console.log(error)
  }
}

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPodcasts {
        nodes {
          id
          title
          season
          pubDate
          podcastUrl
          podcastFileType
          podcastFileSize
          podcastDuration
          isExplicit
          description
          episode
        }
      }
    }
  `)

  const podcast = path.resolve("src/templates/podcast.js")

  pages.data.allPodcasts.nodes.forEach(node => {
    createPage({
      path: `/episode/${node.id}`,
      component: podcast,
      context: {
        id: node.id,
      },
    })
  })

  // const adminPodcast = path.resolve("src/templates/adminPodcast.js")

  // pages.data.allPodcasts.nodes.forEach(node => {
  //   createPage({
  //     path: `/admin/podcast/${node.id}`,
  //     component: adminPodcast,
  //     context: {
  //       id: node.id,
  //     },
  //   })
  // })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/admin/)) {
    page.matchPath = "/admin/*"

    // Update the page.
    createPage(page)
  }
}

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const firebase = require("firebase/app");
const firestore = require("firebase/firestore");

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /firebase/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
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


const fetch = require('node-fetch');
exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {

  // Fetch Podcasts

  try {

    // initializeApp
    firebase.initializeApp({
      apiKey: "AIzaSyDTwoTFhhTqzzlRg-PhHx3ky1zIp6Epn_I",
      authDomain: "the-midnight-exchange.firebaseapp.com",
      databaseURL: "https://the-midnight-exchange.firebaseio.com",
      projectId: "the-midnight-exchange",
      storageBucket: "the-midnight-exchange.appspot.com",
      messagingSenderId: "153446151275",
      appId: "1:153446151275:web:569bd5141e4c91e8",
      measurementId: "G-KK9TK915WM"
    })

    // Fetch the data
    const podcastData = await firebase.firestore().collection("podcasts").get().then(function(podcasts){
      podcasts.forEach(function(podcast) {
        const podcastData = podcast.data()
        const node = {
          id: podcast.id,
          parent: "Podcasts",
          ...podcastData,
          internal: {
            type: 'Podcasts',
            contentDigest: createContentDigest(podcastData),
          }
        };

        // console.log(podcast.id, " => ", podcast.data())

        console.log(podcast.id, " => ", node)

        actions.createNode(node);

      })
    });

  } catch (error) {
    console.log(error);
  }

};

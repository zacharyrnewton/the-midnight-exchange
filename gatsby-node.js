/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
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


// exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
//   const { createNode } = actions
//
//   firebase.initializeApp({
//     apiKey: "AIzaSyDTwoTFhhTqzzlRg-PhHx3ky1zIp6Epn_I",
//     authDomain: "the-midnight-exchange.firebaseapp.com",
//     databaseURL: "https://the-midnight-exchange.firebaseio.com",
//     projectId: "the-midnight-exchange",
//     storageBucket: "the-midnight-exchange.appspot.com",
//     messagingSenderId: "153446151275",
//     appId: "1:153446151275:web:569bd5141e4c91e8",
//     measurementId: "G-KK9TK915WM"
//   })
//   // Data
//   const db = await firebase.firestore();
//   db.collection("podcasts").get().then(function(podcasts) {
//       podcasts.forEach(function(podcast) {
//           // doc.data() is never undefined for query doc snapshots
//           // const podcast = doc.doc.ref();
//           // console.log(podcast.id, " => ", podcast.data());
//           // const nodeContent = JSON.stringify(podcast)
//
//           const nodeMeta = {
//             // id: createNodeId(podcast.id),
//             id: createNodeId("TestNode-testid"),
//             parent: "podcasts",
//             children: [
//
//             ],
//             internal: {
//               type: `TestNode`,
//               // mediaType: `text/html`,
//               content: `nodeContent`,
//               contentDigest: createContentDigest("testNode")
//               // contentDigest: createContentDigest(podcast.data())
//             }
//           }
//
//           const node = Object.assign({}, nodeMeta, podcast.data())
//
//           actions.createNode(nodeMeta);
//           console.log(nodeMeta);
//       });
//   });
// }


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
        console.log(podcast.id, " => ", podcast.data())
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

        // Create the actual data node
        actions.createNode(node);

      })
    });

  } catch (error) {
    console.log(error);
  }

};

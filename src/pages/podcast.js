import React from "react"
import Layout from "../components/default-layout"
import SEO from "../components/seo"
import firebase from "../services/firebase-config"

const db = firebase.firestore();
// var docRef = db.collection("podcasts");

db.collection("podcasts").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
});

// docRef.get().then(function(doc) {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch(function(error) {
//     console.log("Error getting document:", error);
// });

const IndexPage = () => (
  <Layout>
    <SEO title="Podcast" />
    <h1>HELLO WORLD</h1>
  </Layout>
)

export default IndexPage

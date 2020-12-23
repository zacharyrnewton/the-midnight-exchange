import * as functions from "firebase-functions"
import fetch from "node-fetch"

exports.writeToPodcasts = functions.firestore
  .document("podcasts/{podcastId}")
  .onWrite((change, context) => {
    const document = change.after.exists ? change.after.data() : null

    console.log(`Updated Podcast: ${document ? document.title : null}`)

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Travis-API-Version": "3",
        Authorization: "token fkl85-8EjBiFN88pl-yz3A",
      },
      body: JSON.stringify({
        branch: "master",
        message: `Updated Podcast: ${document ? document.title : null}`,
      }),
    }

    fetch(
      "https://api.travis-ci.com/repo/zacharyrnewton%2Fthe-midnight-exchange/requests",
      options
    )
      .then(response => {
        if (response.ok) {
          console.log(response)
        } else {
          console.log("Error in Response")
        }
      })
      .catch(error => {
        console.log(error)
      })

    return 0
  })

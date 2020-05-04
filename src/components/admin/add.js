import React from "react"
import { Link, navigate } from "gatsby"
import SEO from "../seo"
import style from "../../sass/admin.module.sass"
import firebase from "../../services/firebase-config"
import Rte from "./add/rte"

function add(event) {
  event.stopPropagation()
  event.preventDefault()

  // Firestore Reference
  const db = firebase.firestore()

  // Get Form Data
  const podcastFile = document.getElementById("podcastFile").files[0]
  const title = document.getElementById("podcastName").value
  const description = document.getElementById("podcastDescription").value
  const isExplicit = JSON.parse(
    document.getElementById("podcastExplicit").value
  )
  const season = parseInt(document.getElementById("podcastSeason").value)
  const episode = parseInt(document.getElementById("podcastEpisode").value)
  const pubDatePreFormat = new Date(
    document.getElementById("podcastPublishDate").value
  )
  const pubDate = pubDatePreFormat.toUTCString()

  // Get Progress Bar
  const uploader = document.getElementById("uploader")

  // Create a storage Reference
  const storageRef = firebase
    .storage()
    .ref("podcasts/" + title + "/" + podcastFile.name)

  // Upload file
  const task = storageRef.put(podcastFile)

  // Update Progress Bar
  task.on(
    "state_changed",

    function progress(snapshot) {
      const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      uploader.value = percentage
    },

    function error(error) {
      alert("Error adding storage: ", error)
      return null
    },

    function complete() {
      updateDB()
    }
  )

  // Update Database
  function updateDB() {
    storageRef.getDownloadURL().then(function(url) {
      const podcastUrl = url

      // Get File Type
      storageRef
        .getMetadata()
        .then(function(metadata) {
          const podcastFileType = metadata.contentType
          const podcastFileSize = metadata.size

          // Get Duration
          const audio = new Audio()
          audio.src = podcastUrl
          audio.addEventListener("loadedmetadata", event => {
            const podcastDuration = audio.duration

            db.collection("podcasts")
              .add({
                title: title,
                description: description,
                isExplicit: isExplicit,
                season: season,
                episode: episode,
                podcastUrl: podcastUrl,
                tempUrl: podcastUrl,
                podcastDuration: podcastDuration,
                podcastFileType: podcastFileType,
                podcastFileSize: podcastFileSize,
                pubDate: pubDate,
              })

              .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id)
                alert(
                  `Podcast Duration: ${podcastDuration} \n Podcast File Size: ${podcastFileSize} \n Podcast File Type: ${podcastFileType} \n Podcast Status: Uploaded Successfully!`
                )
                navigate(/admin/)
              })

              .catch(function(error) {
                console.error("Error adding document: ", error)
              })
          })
        })
        .catch(function(error) {
          console.log("Failed to get metadata")
        })
    })
  }
}

const AddPodcast = () => (
  <>
    <SEO title="Admin Add Podcast" />
    <div className={style.contentWrapper}>
      <h1>Add Podcast</h1>
      <form className={style.podcastForm}>
        {/* Title */}
        <div className={style.inputWrapper}>
          <label htmlFor="podcastName">Title</label>
          <input
            type="text"
            id="podcastName"
            name="podcastName"
            placeholder="Title"
            required
          />
        </div>
        {/* Description or Shownotes */}
        <div className={style.inputWrapper}>
          <label htmlFor="podcastDescription">Description/Show Notes</label>
          <Rte
            id={"podcastDescription"}
            name={"podcastDescription"}
            className={style.rte}
            editorClassName={"editorClassName"}
            toolbarClassName={"toolbarClassName"}
            placeholder={"Show Notes"}
            required
          />
        </div>
        {/* Explicit Flag */}
        <div className={style.inputWrapper}>
          <label htmlFor="podcastExplicit">Is this episode explicit?</label>
          <select id="podcastExplicit" name="podcastExplicit">
            <option value="false" defaultValue>
              No
            </option>
            <option value="true">Yes</option>
          </select>
        </div>
        {/* Season */}
        <div className={style.inputWrapper}>
          <label htmlFor="podcastSeason">Season</label>
          <input
            type="number"
            id="podcastSeason"
            name="podcastSeason"
            step="1"
            placeholder="Season number"
            required
          />
        </div>
        {/* Episode */}
        <div className={style.inputWrapper}>
          <label htmlFor="podcastEpisode">Episode</label>
          <input
            type="number"
            id="podcastEpisode"
            name="podcastEpisode"
            step="1"
            placeholder="Episode number"
            required
          />
        </div>
        {/* Publish Date */}
        <div className={style.inputWrapper}>
          <label htmlFor="podcastPublishDate">Publish Date</label>
          <input
            type="datetime-local"
            id="podcastPublishDate"
            name="podcastPublishDate"
            required
          />
        </div>
        {/* Audio Upload */}
        <div className={style.addFile}>
          <label htmlFor="podcastFile">Upload .mp3 file</label>
          <input
            type="file"
            id="podcastFile"
            name="podcastFile"
            accept="audio/mpeg, audio/mpeg3, audio/mp4"
          />
        </div>
        <progress id="uploader" value="0" max="100"></progress>
        {/* Scheduled for Date */}
        {/*<div className={style.inputWrapper}>
          <label htmlFor="podcastSchedule">Schedule</label>
          <input type="datetime-local" id="podcastSchedule" name="podcastSchedule"/>
        </div>*/}
        {/* Add Podcast */}
        <button id="btnLogin" onClick={add}>
          Add Podcast
        </button>
        <Link to="/admin/" className={style.cancelButton}>
          Cancel
        </Link>
      </form>
    </div>
  </>
)

export default AddPodcast

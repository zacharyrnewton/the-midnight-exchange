import React from "react"
import { Link, navigate } from "gatsby"
import SEO from "../seo"
import style from "../../sass/admin.module.sass"
import firebase from "../../services/firebase-config"



function add(event) {
  event.stopPropagation();
  event.preventDefault();
  // Firestore Reference
  const db = firebase.firestore();

  // Get Form Data
  const title = document.getElementById('podcastName').value;
  const description = document.getElementById('podcastDescription').value;
  const isExplicit = document.getElementById('podcastExplicitYes').value;

  // Post Data
  db.collection("podcasts").add({
      title: title,
      description: description,
      isExplicit: isExplicit
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      navigate(/admin/);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
};



const IndexPage = () => (
  <>
    <SEO title="Admin Add Podcast" />
    <div className={style.contentWrapper}>
      <h1>Add Podcast</h1>
      <form className={style.podcastForm}>
        <div className={style.addFile + " " + style.inputWrapper}>
          <label htmlFor="podcastFile">Upload .mp3 file</label>
          <input type="file" id="podcastFile" name="podcastFile" accept="audio/mpeg, audio/mp4" />
        </div>
        <div className={style.inputWrapper}>
          <label htmlFor="podcastFile">Title</label>
          <input type="text" id="podcastName" name="podcastName" required/>
        </div>
        <div className={style.inputWrapper}>
          <label htmlFor="podcastDescription">Description/Show-notes</label>
          <textarea id="podcastDescription" name="podcastDescription" required></textarea>
        </div>
        <div className={style.inputWrapper + style.inputExplicit}>
          <p>Is this episode explicit?</p>
          <div>
            <input type="radio" id="podcastExplicitYes" name="explicit" value="Yes"/>
            <label htmlFor="Yes">Yes</label>
          </div>
          <div>
            <input type="radio" id="podcastExplicitNo" name="explicit" value="No" defaultChecked/>
            <label htmlFor="No">No</label>
          </div>
        </div>
        <div className={style.inputWrapper}>
          <label htmlFor="podcastPublishDate">Publish Date</label>
          <input type="date" id="podcastPublishDate" name="podcastPublishDate" required/>
        </div>
        <div className={style.inputWrapper}>
          <label htmlFor="podcastSchedule">Schedule</label>
          <input type="datetime-local" id="podcastSchedule" name="podcastSchedule"/>
        </div>
        <button id="btnLogin" onClick={add}>Add Podcast</button>
      </form>
      <Link to="/admin/" className={style.cancelButton}>Cancel</Link>
    </div>
  </>
)

export default IndexPage

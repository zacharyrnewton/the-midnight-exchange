import React from "react"
import { Link } from "gatsby"
import SEO from "../seo"
import style from "../../sass/admin.module.sass"
// import firebase from "../../services/firebase-config"

const IndexPage = () => (
  <>
    <SEO title="Admin Add Podcast" />
    <div className={style.contentWrapper}>
      <h1>Add Podcast</h1>
      <form>
        <div className={style.addFile}>
          <label for="podcastFile">Upload .mp3 file</label>
          <input type="file" id="podcastFile" name="podcastFile" accept="audio/mpeg, audio/mp4" required/>
        </div>
        <div className={style.inputWrapper}>
          <label for="podcastFile">Title</label>
          <input type="text" id="podcastName" name="podcastName" required/>
        </div>
        <div className={style.inputWrapper}>
          <label for="podcastDescription">Description/Show-notes</label>
          <textarea id="podcastDescription" name="podcastDescription" required></textarea>
        </div>
        <div className={style.inputWrapper + style.inputExplicit}>
          <p>Is this episode explicit?</p>
          <div>
            <input type="radio" id="podcastExplicitYes" name="explicit" value="Yes"/>
            <label for="Yes">Yes</label>
          </div>
          <div>
            <input type="radio" id="podcastExplicitNo" name="explicit" value="No" checked/>
            <label for="No">No</label>
          </div>
        </div>
        <div className={style.inputWrapper}>
          <label for="podcastPublishDate">Publish Date</label>
          <input type="date" id="podcastPublishDate" name="podcastPublishDate" required/>
        </div>
        <div className={style.inputWrapper}>
          <label for="podcastSchedule">Schedule</label>
          <input type="datetime-local" id="podcastSchedule" name="podcastSchedule"/>
        </div>
        <Link to="/admin/" className={style.cancelButton}>Cancel</Link>
      </form>
    </div>
  </>
)

export default IndexPage

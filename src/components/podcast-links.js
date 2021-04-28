import React from "react"
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

const PodcastLinks = ({ siteTitle }) => (
  <div className="podcast-links">
    {/* <a href="https://podcasts.apple.com/us/podcast/the-midnight-exchange/id1500209456" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Apple Podcasts"
      onClick={e => {
        // e.preventDefault()
        trackCustomEvent({
          category: "Podcast Links",
          action: "Podcast Link Click",
          label: "Apple Podcasts",
        })
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46"><g transform="translate(-782 -970)"><circle cx="23" cy="23" r="23" transform="translate(782 970)" fill="#ebe1ce" opacity="0"/><path d="M17.483,31.94c-.336,1.243-1.606,1.532-2.839,1.532s-2.5-.289-2.839-1.532a47.638,47.638,0,0,1-1.345-8.683c0-2.3,2.036-2.86,4.184-2.86s4.184.562,4.184,2.86a47.685,47.685,0,0,1-1.345,8.683ZM10.255,18.864a6.276,6.276,0,1,1,8.778,0,.393.393,0,0,0,.041.6,4.349,4.349,0,0,1,1.388,1.658.39.39,0,0,0,.618.124,9.414,9.414,0,1,0-12.872,0,.39.39,0,0,0,.618-.123,4.349,4.349,0,0,1,1.388-1.658.393.393,0,0,0,.041-.6ZM14.644,0A14.649,14.649,0,0,0,8.22,27.811a.392.392,0,0,0,.558-.413c-.156-1.014-.284-2.023-.353-2.9a.394.394,0,0,0-.175-.295,11.506,11.506,0,1,1,12.628.106c-.065.918-.2,2-.368,3.088a.392.392,0,0,0,.558.413A14.649,14.649,0,0,0,14.644,0Zm0,10.46a4.184,4.184,0,1,0,4.184,4.184A4.184,4.184,0,0,0,14.644,10.46Z" transform="translate(790 976)" fill="#ebe1ce"/></g></svg>
    </a>
    <a href="https://podcasts.google.com/?feed=aHR0cHM6Ly90aGVtaWRuaWdodGV4Y2hhbmdlLmNvbS9wb2RjYXN0LnhtbA" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Google Podcasts"
      onClick={e => {
        // e.preventDefault()
        trackCustomEvent({
          category: "Podcast Links",
          action: "Podcast Link Click",
          label: "Google Podcasts",
        })
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46">
        <g transform="translate(-844 -970)">
          <circle cx="23" cy="23" r="23" transform="translate(844 970)" fill="#ebe1ce" opacity="0"/>
          <g transform="translate(849.5 975.5)">
            <path d="M4.375,208.732v2.386a2.188,2.188,0,0,1-4.375,0v-2.386a2.188,2.188,0,0,1,4.375,0Z" transform="translate(0 -192.426)" fill="#ebe1ce"/>
            <path d="M448,208.795q0-.031,0-.062a2.188,2.188,0,0,1,4.375,0q0,.031,0,.062h0v2.386h0a2.187,2.187,0,0,1-4.373,0h0v-2.386h0Z" transform="translate(-417.375 -192.426)" fill="#ebe1ce"/>
            <path d="M114.92,118.324v2.386a2.187,2.187,0,0,1-4.375,0v-2.386a2.187,2.187,0,0,1,4.375,0Zm0-14.318v7.805h0a2.187,2.187,0,0,1-4.374,0h0v-7.805a2.188,2.188,0,0,1,4.375,0Z" transform="translate(-102.988 -94.858)" fill="#ebe1ce"/>
            <path d="M337.455,106.392a2.188,2.188,0,1,0,4.375,0v-2.386a2.188,2.188,0,0,0-4.375,0Z" transform="translate(-314.387 -94.858)" fill="#ebe1ce"/>
            <path d="M224,4.574a2.188,2.188,0,0,0,4.375,0V2.188a2.188,2.188,0,0,0-4.375,0Zm0,25.852a2.188,2.188,0,0,1,4.375,0v2.386a2.188,2.188,0,0,1-4.375,0Z" transform="translate(-208.688)" fill="#ebe1ce"/>
            <path d="M337.455,234.914a2.188,2.188,0,1,1,4.375,0v7.756a2.188,2.188,0,0,1-4.375,0Z" transform="translate(-314.387 -216.818)" fill="#ebe1ce"/>
            <path d="M228.375,133.1v12.727a2.188,2.188,0,0,1-4.375,0V133.1a2.188,2.188,0,0,1,4.375,0Z" transform="translate(-208.688 -121.961)" fill="#ebe1ce"/>
          </g>
        </g>
      </svg>
    </a>
    <a href="https://open.spotify.com/show/6rMXC0PcPvRSi3r8ULqVjI?si=V7fltxHfQ2mr6YZsCTpiCw" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Spotify Podcasts"
      onClick={e => {
        // e.preventDefault()
        trackCustomEvent({
          category: "Podcast Links",
          action: "Podcast Link Click",
          label: "Spotify Podcasts",
        })
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46"><g transform="translate(-906 -970)"><circle cx="23" cy="23" r="23" transform="translate(906 970)" fill="#ebe1ce" opacity="0"/><path d="M16.213,8A16.213,16.213,0,1,0,32.426,24.213,16.219,16.219,0,0,0,16.213,8ZM22.8,31.856a1.247,1.247,0,0,1-.7-.235c-4.079-2.458-8.826-2.563-13.513-1.6a4.221,4.221,0,0,1-.778.17,1.018,1.018,0,0,1-1.033-1.033,1.036,1.036,0,0,1,.889-1.1c5.354-1.183,10.826-1.079,15.494,1.713a1.106,1.106,0,0,1,.634,1.079.988.988,0,0,1-.994,1.007Zm1.759-4.289a1.614,1.614,0,0,1-.8-.275,21.186,21.186,0,0,0-15.6-1.922,2.693,2.693,0,0,1-.778.17,1.269,1.269,0,0,1-1.268-1.268,1.286,1.286,0,0,1,1.013-1.353,21.989,21.989,0,0,1,6.394-.889A22.885,22.885,0,0,1,25.085,25a1.363,1.363,0,0,1,.739,1.288A1.267,1.267,0,0,1,24.555,27.567Zm2.027-4.982a1.5,1.5,0,0,1-.843-.255c-4.655-2.778-12.977-3.445-18.364-1.942a3.105,3.105,0,0,1-.843.17,1.509,1.509,0,0,1-1.523-1.543,1.545,1.545,0,0,1,1.138-1.562,27.4,27.4,0,0,1,7.682-.994c4.772,0,9.774.994,13.428,3.125a1.535,1.535,0,0,1,.843,1.477,1.515,1.515,0,0,1-1.517,1.523Z" transform="translate(913.001 969)" fill="#ebe1ce"/></g></svg>
    </a> */}
    <a href="/podcast.xml" className="icon-link" rel="alternate" type="application/rss+xml" aria-label="RSS Feed"
      onClick={e => {
        // e.preventDefault()
        trackCustomEvent({
          category: "Podcast Links",
          action: "Podcast Link Click",
          label: "RSS Feed",
        })
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46"><g transform="translate(-968 -970)"><circle cx="23" cy="23" r="23" transform="translate(968 970)" fill="#ebe1ce" opacity="0"/><path d="M8.373,57.1a4.187,4.187,0,1,1-4.187-4.187A4.187,4.187,0,0,1,8.373,57.1ZM19.857,60.19A19.879,19.879,0,0,0,1.1,41.431,1.045,1.045,0,0,0,0,42.476v3.143a1.047,1.047,0,0,0,.973,1.047A14.649,14.649,0,0,1,14.622,60.315a1.047,1.047,0,0,0,1.047.973h3.143a1.045,1.045,0,0,0,1.046-1.1Zm9.43.019A29.309,29.309,0,0,0,1.079,32,1.045,1.045,0,0,0,0,33.047v3.142a1.049,1.049,0,0,0,1.01,1.046A24.062,24.062,0,0,1,24.053,60.278a1.049,1.049,0,0,0,1.046,1.01h3.142A1.045,1.045,0,0,0,29.288,60.209Z" transform="translate(976.001 946.001)" fill="#ebe1ce"/></g></svg>
    </a>
  </div>
)


export default PodcastLinks

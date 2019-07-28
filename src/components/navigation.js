import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navigation = ({ siteTitle }) => (
  <nav>
    <Link to="/">Home
      <svg xmlns="http://www.w3.org/2000/svg" width="67.199" height="32" viewBox="0 0 67.199 32">
        <path d="M-43-37V-69h6.4v12.8h19.2v6.4H-36.6V-37Z" transform="translate(81.4 69)" fill="#ebe1ce"/>
        <rect width="19.2" height="6.4" transform="translate(48)" fill="#ebe1ce"/>
        <rect width="19.2" height="6.4" transform="translate(48 25.6)" fill="#ebe1ce"/>
        <rect width="6.4" height="32" fill="#ebe1ce"/>
        <rect width="6.4" height="32" transform="translate(12.8)" fill="#ebe1ce"/>
        <rect width="6.4" height="32" transform="translate(25.6)" fill="#ebe1ce"/>
      </svg>
    </Link>
    <div>
      <a href="https://www.instagram.com/themidnightexchange/" target="_blank" rel="noopener noreferrer" className="social-link icon-link">Instagram
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
          <g transform="translate(-1714 -58)">
            <circle cx="22" cy="22" r="22" transform="translate(1714 58)" fill="#ebe1ce" opacity="0"/>
            <path d="M14.589,38.967a7.516,7.516,0,1,0,7.516,7.516A7.5,7.5,0,0,0,14.589,38.967Zm0,12.4a4.886,4.886,0,1,1,4.886-4.886,4.9,4.9,0,0,1-4.886,4.886Zm9.577-12.71a1.753,1.753,0,1,1-1.753-1.753A1.749,1.749,0,0,1,24.166,38.659Zm4.978,1.779A8.676,8.676,0,0,0,26.776,34.3a8.733,8.733,0,0,0-6.142-2.368c-2.42-.137-9.675-.137-12.1,0A8.72,8.72,0,0,0,2.4,34.29,8.7,8.7,0,0,0,.028,40.432c-.137,2.42-.137,9.675,0,12.1A8.676,8.676,0,0,0,2.4,58.67a8.744,8.744,0,0,0,6.142,2.368c2.42.137,9.675.137,12.1,0a8.676,8.676,0,0,0,6.142-2.368,8.733,8.733,0,0,0,2.368-6.142C29.282,50.107,29.282,42.859,29.144,40.438ZM26.017,55.124a4.947,4.947,0,0,1-2.787,2.787c-1.93.765-6.509.589-8.641.589s-6.718.17-8.641-.589a4.947,4.947,0,0,1-2.787-2.787c-.765-1.93-.589-6.509-.589-8.641s-.17-6.718.589-8.641a4.947,4.947,0,0,1,2.787-2.787c1.93-.765,6.509-.589,8.641-.589s6.718-.17,8.641.589a4.947,4.947,0,0,1,2.787,2.787c.765,1.93.589,6.509.589,8.641S26.783,53.2,26.017,55.124Z" transform="translate(1721.814 34.568)" fill="#ebe1ce"/>
          </g>
        </svg>
      </a>
      <a href="https://twitter.com/THEMEpodcast" target="_blank" rel="noopener noreferrer" className="social-link icon-link">Twitter
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
          <g transform="translate(-1766 -58)">
            <circle cx="22" cy="22" r="22" transform="translate(1766 58)" fill="#ebe1ce" opacity="0"/>
            <path d="M30.05,54.861c.021.3.021.6.021.893,0,9.074-6.907,19.53-19.53,19.53A19.4,19.4,0,0,1,0,72.2a14.2,14.2,0,0,0,1.658.085,13.747,13.747,0,0,0,8.522-2.933,6.876,6.876,0,0,1-6.418-4.76,8.657,8.657,0,0,0,1.3.106,7.26,7.26,0,0,0,1.806-.234,6.865,6.865,0,0,1-5.5-6.737v-.085a6.913,6.913,0,0,0,3.1.871,6.874,6.874,0,0,1-2.125-9.181,19.511,19.511,0,0,0,14.153,7.183,7.749,7.749,0,0,1-.17-1.573,6.871,6.871,0,0,1,11.88-4.7,13.514,13.514,0,0,0,4.357-1.658,6.846,6.846,0,0,1-3.018,3.783,13.761,13.761,0,0,0,3.953-1.063A14.755,14.755,0,0,1,30.05,54.861Z" transform="translate(1771.045 19.358)" fill="#ebe1ce"/>
          </g>
        </svg>
      </a>
      <a href="https://www.facebook.com/themidnightexchange" target="_blank" rel="noopener noreferrer" className="social-link icon-link">Facebook
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
          <g transform="translate(-1818 -58)">
            <circle cx="22" cy="22" r="22" transform="translate(1818 58)" fill="#ebe1ce" opacity="0"/>
            <path d="M39.653,18.839l.93-6.061H34.767V8.845c0-1.658.812-3.275,3.417-3.275h2.644V.409A32.244,32.244,0,0,0,36.135,0c-4.79,0-7.92,2.9-7.92,8.159v4.62H22.89v6.061h5.324V33.492h6.553V18.839Z" transform="translate(1807.648 63.253)" fill="#ebe1ce"/>
          </g>
        </svg>
      </a>
    </div>
  </nav>
)

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation

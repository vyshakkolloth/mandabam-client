import React from 'react'
import "./Server.css"

const ServerError = () => {
  return (
    <div><div className="server-error-page">
    <div className="error-container">
      <h1 className="error-title">500</h1>
      <p className="error-description">Internal Server Error</p>
      <div className="error-animation"></div>
      <p className="error-message">Oops! Something went wrong on our server.</p>
      <a href="/" className="error-link">
        Go Back Home
      </a>
    </div>
  </div></div>
  )
}

export default ServerError
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// --- GitHub Pages SPA redirect decode ---
// public/404.html redirects deep links (e.g. /services on a hard refresh)
// to /?p=/services so GitHub Pages' static server can serve *something*.
// This restores the real URL before React Router takes over, so refreshing
// any page or sharing a direct link works normally.
;(function restoreRoute() {
  const params = new URLSearchParams(window.location.search)
  const redirectPath = params.get('p')
  if (redirectPath) {
    const url = redirectPath + window.location.hash
    window.history.replaceState(null, '', url)
  }
})()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

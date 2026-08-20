import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import HudStrip from './components/HudStrip'
import Header from './components/Header'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'

import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Certifications from './pages/Certifications'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function RouteScan() {
  const location = useLocation()
  const [key, setKey] = useState(0)

  useEffect(() => {
    setKey((k) => k + 1)
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [location.pathname])

  return <div className="route-scan" key={key} />
}

export default function App() {
  const location = useLocation()

  return (
    <div className="app-shell">
      <RouteScan />
      <HudStrip />
      <Header />
      <main className="app-main">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/certifications" element={<PageTransition><Certifications /></PageTransition>} />
            <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
            <Route path="/blog/:slug" element={<PageTransition><BlogPost /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import BlogPost from './pages/BlogPost'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Cookies from './pages/Cookies'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <BackToTop />
      <Header />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App


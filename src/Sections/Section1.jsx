import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import PrivacyNotice from '../pages/PrivacyNotice'

const Section1 = () => {
  return (
    <div className="min-h-fit bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_32%),linear-gradient(180deg,_#020617_0%,_#0f172a_48%,_#111827_100%)]">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-notice" element={<PrivacyNotice />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default Section1

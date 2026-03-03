import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Docs from './pages/Docs'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'
import './styles/index.css'

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        {/* Background Effects - only show on main page */}
        <Routes>
          <Route path="/" element={
            <>
              <div className="bg-grid" />
              <div className="orb orb-green" />
              <div className="orb orb-purple" />
              <div className="orb orb-blue" />
              <Hero />
            </>
          } />
          <Route path="/docs" element={<Docs />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

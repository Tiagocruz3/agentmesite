import Hero from './components/Hero'
import './styles/index.css'

function App() {
  return (
    <div className="app-wrapper">
      {/* Background Effects */}
      <div className="bg-grid" />
      <div className="orb orb-green" />
      <div className="orb orb-purple" />
      <div className="orb orb-blue" />
      
      {/* Main Content */}
      <Hero />
    </div>
  )
}

export default App

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Maps from './components/Maps'
import About from './components/About'
import Footer from './components/Footer'
import './styles/app.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Maps />
      <About />
      <Footer />
    </div>
  )
}

export default App

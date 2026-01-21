
/**
 * This is the main entry point to the app holds all components
 * interlinked
 * - Also loads its main styling from the App.css
 */
import './App.css'
import Navbar from './components/NavBar'
import LandingPage from './pages/LandingPage'
import Footer from './components/Footer'
function App() {

  return (
    <>
    <Navbar/>
    <LandingPage/>
    <Footer/>
    </>
  )
}

export default App

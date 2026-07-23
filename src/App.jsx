import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import HowIBuild from './components/HowIBuild.jsx'
import Centralize from './components/Centralize.jsx'
import Work from './components/Work.jsx'
import StackMarquee from './components/StackMarquee.jsx'
import Community from './components/Community.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <HowIBuild />
      <Centralize />
      <Work />
      <StackMarquee />
      <Community />
      <Contact />
    </div>
  )
}

export default App

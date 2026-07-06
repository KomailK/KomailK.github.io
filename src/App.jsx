import { useTheme } from './hooks/useTheme.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Projects from './components/Projects.jsx'
import Platforms from './components/Platforms.jsx'
import Certifications from './components/Certifications.jsx'
import SoftSkills from './components/SoftSkills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Platforms />
        <Certifications />
        <SoftSkills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

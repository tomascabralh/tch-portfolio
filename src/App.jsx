
import './index.css'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import NavigationBar from './sections/NavigationBar'

function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <NavigationBar />
    </>
  )
}

export default App

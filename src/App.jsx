
import './index.css'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import NavigationBar from './sections/NavigationBar'
import Header from './sections/Header'
function App() {
  return (
    <>
      <Header />
      <Skills />
      <Projects />
      <Contact />
      <NavigationBar backgroundColor='grey' />
    </>
  )
}

export default App

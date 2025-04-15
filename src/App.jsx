
import './index.css'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import NavigationBar from './sections/NavigationBar'

function App() {
  return (
    <>
      <div className="bg-pink-500 text-white text-4xl p-10">
        If you see pink, Tailwind is working
      </div>
      <div className="bg-black text-white text-3xl p-10">
        Tailwind is working 🎉
      </div>
      <NavigationBar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <NavigationBar />
    </>
  )
}

export default App

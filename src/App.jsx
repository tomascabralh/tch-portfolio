
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
      <div className='lg:max-w-[1440px] lg:mx-auto'>
        <Header />
        <Skills />
        <Projects />
      </div>
      <div className='bg-[#242424]'>
        <Contact />
        <NavigationBar />
      </div>
    </>
  )
}

export default App

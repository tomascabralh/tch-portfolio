import { Helmet } from 'react-helmet';
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
      <Helmet>
        <title>Portfolio | Tomas Cabral</title>
        <meta name="description" content="Portfolio website showcasing my projects and skills" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <main>
        <div className='lg:max-w-[1440px] lg:mx-auto'>
          <Header />
          <Skills />
          <Projects />
        </div>
        <footer className='bg-[#242424]'>
          <Contact />
          <NavigationBar />
        </footer>
      </main>
    </>
  )
}

export default App

import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import './App.css'
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
import Timeline from './components/Timeline/Timeline'
import timelineData from './components/Timeline/TimelineData'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      
      <Header />

      <main>
        <About />
        <Timeline data={timelineData}/>
        <Skills />
        <Projects />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App

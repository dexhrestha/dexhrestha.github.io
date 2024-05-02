import { useState,useEffect,useContext, useRef } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Certifications from './components/Certifications/Certifications'
import Footer from './components/Footer/Footer'


import './App.css'
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
import Timeline from './components/Timeline/Timeline'
import timelineData from './components/Timeline/TimelineData'


import { skills } from './portfolio'

const Home = () => {
  const [{ themeName }] = useContext(ThemeContext)
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const [loading, setLoading] = useState(true);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    // Simulating loading time
    const timeout = setTimeout(() => {
      setLoading(false);
      if (window.location.hash === '#projects') {
        scrollToSection(projectsRef);
      }
    }, 2000); // Adjust the timeout as needed

    return () => clearTimeout(timeout);
  }, []);



  
  return (
    loading ? (
        // Display loading spinner while components are loading
        <div>Loading...</div>
      ) : (
    <div id='top' className={`${themeName} app`}>
      
      <Header scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToSkills={() => scrollToSection(skillsRef)}
        scrollToContact={() => scrollToSection(contactRef)}  />

      <main>
        <About />
        <Timeline data={timelineData}/>
        <Skills skills={skills} skillsRef={skillsRef} header/>
        <Projects projectsRef={projectsRef}/>
        <Certifications />
        <Contact contactRef={contactRef}/>
      </main>
      <ScrollToTop />
      <Footer />
    </div>)
      
  )
}

export default Home

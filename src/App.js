import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState,useEffect,useContext, useRef } from 'react'
import { ThemeContext } from './contexts/theme'

import Home from './Home';
import Research from './components/Research/Research';
import Portfolio from './components/Portfolio/Portfolio';
import ErrorPage from './components/ErrorPage/error404';
import Header from './components/Header/Header';


import ScrollToTop from './components/ScrollToTop/ScrollToTop';



const App = () => {
  const [{ themeName }] = useContext(ThemeContext);
  const scrollRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);


  const [currentPage, setCurrentPage] = useState('');

  const [loading, setLoading] = useState(true);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };


  useEffect(() => {
    // Simulating loading time
    const timeout = setTimeout(() => {
      setLoading(false);
      switch (window.location.hash) {
        case '#projects':
          scrollToSection(projectsRef);
          break;
        case '#skills':
          scrollToSection(skillsRef);
          break;
        case '#contact':
          scrollToSection(contactRef);
          break;
        case '#top':
          scrollToSection(scrollRef);
          break;
        default:
          break;
      }
    }, 2000); 

    setCurrentPage(window.location.hash)

    return () => clearTimeout(timeout);
  }, []);


  return (
    
    loading ? (
      <div className="center_loading">
          <img src="logo192.png" alt="Loading..." className="heartbeat" />
      </div>      ) : (
   
     
            
      <Router>
         <div id='top' ref={scrollRef} className={`${themeName} app`}>
        <Header currentPage={currentPage} scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToSkills={() => scrollToSection(skillsRef)}
        scrollToContact={() => scrollToSection(contactRef)}  />

          <Routes>
            <Route path="/" element={<Home scrollToSection={scrollToSection} projectsRef={projectsRef} skillsRef={skillsRef} contactRef={contactRef} />} />
            <Route path="research" element={<Research />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        <ScrollToTop scrollToTop={()=>scrollToSection(scrollRef)}/>
        </div>
      </Router>
      

    )
  )
};

export default App;


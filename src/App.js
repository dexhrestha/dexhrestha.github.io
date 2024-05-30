import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState,useEffect,useContext, useRef } from 'react'
import { ThemeContext } from './contexts/theme'



import Home from './Home';
import Publication from './components/Publication/Publication';
import Portfolio from './components/Portfolio/Portfolio';
import ErrorPage from './components/ErrorPage/error404';
import Header from './components/Header/Header';
import NotionElement from './components/NotionElement/NotionElement';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Loader from './components/Loader/Loader';
import { about } from './portfolio';


const App = () => {
  const [{ themeName }] = useContext(ThemeContext);
  const scrollRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const blogsRef = useRef(null);
  const {name} = about;

  const [currentPage, setCurrentPage] = useState('');

  const [loading, setLoading] = useState(true);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  fetch(`${process.env.REACT_APP_NOTION_URL}`)

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
        case '#blogs':
          scrollToSection(blogsRef);
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
    
    
     
            
      <Router>
         <div id='top' ref={scrollRef} className={`${themeName} app`}>
         {loading ?null:<Header currentPage={currentPage} scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToSkills={() => scrollToSection(skillsRef)}
        scrollToContact={() => scrollToSection(contactRef)}
        scrollToBlogs={() => scrollToSection(blogsRef)}  />}

          <Routes>
            <Route path="blog/:blogSlug" element={<NotionElement/>} />
            <Route path="publication" element={<Publication />} />
            <Route path="portfolio" element={<Portfolio />} />
            
            <Route path="/" element={loading ? <Loader name = {name} /> : <Home loaded={!loading} scrollToSection={scrollToSection} projectsRef={projectsRef} skillsRef={skillsRef} contactRef={contactRef}   blogsRef={blogsRef}/>} />
            
            <Route path="/*" element={<ErrorPage />} />
            
          </Routes>
        <ScrollToTop scrollToTop={()=>scrollToSection(scrollRef)}/>
        </div>
      </Router>
      

    
  )
};

export default App;


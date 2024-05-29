import React, { useEffect, useState } from 'react';

import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'


import Contact from './components/Contact/Contact'
import Certifications from './components/Certifications/Certifications'
import Footer from './components/Footer/Footer'
import Blogs from './components/Blogs/Blogs'

import './App.css'
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
import Timeline from './components/Timeline/Timeline'
import timelineData from './components/Timeline/TimelineData'


import { skills } from './portfolio'

const Home = ({skillsRef,projectsRef,contactRef,blogsRef}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    console.log('blogs')
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 20); // Adjust the timeout as needed

    return () => clearTimeout(timeout);
  }, []);

   return (<div >
      <main className={`fade-in ${loaded ? 'loaded' : ''}`} >
        <About />
        <Timeline data={timelineData}/>
        <Skills skills={skills} skillsRef={skillsRef} header/>
        <Projects projectsRef={projectsRef}/>
        <Blogs blogsRef={blogsRef}/>
        <Certifications />
        <Contact contactRef={contactRef}/>
      </main>
      <Footer />
    </div>)
};

export default Home

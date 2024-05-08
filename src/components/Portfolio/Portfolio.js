import { Grid } from '@mui/material';
import './Portfolio.css'; // Import the CSS file
import uniqid from 'uniqid';
import { useContext,useState,useEffect } from 'react'
import { ThemeContext } from '../../contexts/theme'

import ScrollToTop from '../ScrollToTop/ScrollToTop'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import AboutMin from '../About/AboutMin';
import Skills from '../Skills/Skills';
import { projects } from '../../portfolio';

const Portfolio = () => {
  const [{ themeName }] = useContext(ThemeContext)

  const stackSet = new Set();
  projects.forEach((project) => {
    project.stack.forEach((technology) => {
      stackSet.add({ name: technology });
    });
  });

  const [projectsData,setProjectsData] = useState(null);

  useEffect(()=>{
    const fetchData = async ()=>{
    try {
      // const response = await fetch(`https://notion-api.splitbee.io/v1/page/${blogSlug}`);
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/get_projects`)
      const data = await response.json();  
      setProjectsData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
},[])


  
  return (
    <div id='top' className={`${themeName} app`}>
      
      <main>
      <Grid container direction='column'  >
        {/* Left Row */}
        <Grid item className="leftRow" alignContent='center'>
          <AboutMin />         
        </Grid>
        {/* Right Row */}
        <Grid item xs >
        <section  className="rightRow center">
        <h2 className='section__title'>Portfolio</h2>
          <Skills skills={[...stackSet]} header={false} filter/>
                {projectsData ? (
        projectsData.map((project) => (
          <ProjectContainer key={uniqid()} project={project} className="research__center" />
        ))
      ) : null}
        
          <Contact />
        </section>

        
        </Grid>
      </Grid>
      </main>
      <ScrollToTop/>
      <Footer />      
    </div>
  );
};

export default Portfolio;

import { Grid } from '@mui/material';
import './Portfolio.css'; // Import the CSS file
import uniqid from 'uniqid';
import { useContext } from 'react'
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

  // Convert set to array for easier manipulation
  const stackArray = Array.from(stackSet);
  
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
          {projects.map((project) => (<ProjectContainer key={uniqid()} project={project} className="research__center"/>))}
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

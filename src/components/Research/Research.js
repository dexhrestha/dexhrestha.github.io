
import { Grid, Paper, List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material';
import './Research.css'; // Import the CSS file
import uniqid from 'uniqid';
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'


import ScrollToTop from '../ScrollToTop/ScrollToTop'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import AboutMin from '../About/AboutMin';

const projects = [
  { id: 1, name: 'Project 1', description: 'Description of Project 1',src:"#"},
  { id: 2, name: 'Project 2', description: 'Description of Project 2',src:"#"},
  // Add more projects as needed
];

const Research = () => {
  const [{ themeName }] = useContext(ThemeContext)


  return (
    <div id='top' className={`${themeName} app`}>

      <main>
      <Grid container direction='column' >
        {/* Left Row */}
        <Grid item className="leftRow" alignItems='center' alignContent='center'>
          <AboutMin />         
        </Grid>
        {/* Right Row */}
        <Grid item xs >
        <section  className="rightRow">
        <h2 className='section__title'>Publications</h2>
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

export default Research;

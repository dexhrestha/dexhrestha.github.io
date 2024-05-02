


import { Grid, Paper, List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Research.css'; // Import the CSS file

import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'

import Header from '../Header/Header'
import ScrollToTop from '../ScrollToTop/ScrollToTop'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import AboutMin from '../About/AboutMin';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

const projects = [
  { id: 1, name: 'Project 1', description: 'Description of Project 1',src:"#"},
  { id: 2, name: 'Project 2', description: 'Description of Project 2',src:"#"},
  // Add more projects as needed
];

const Research = () => {
  const classes = useStyles();
  const [{ themeName }] = useContext(ThemeContext)


  return (
    <div id='top' className={`${themeName} app`}>
       
       <Header />

      <main>
      <Grid container direction='column'  alignItems='Center'>
        {/* Left Row */}
        <Grid item className="leftRow">
          <AboutMin />         
        </Grid>
        {/* Right Row */}
        <Grid item xs >
        <section  className="rightRow center">
        <h2 className='section__title'>Publications</h2>
          {projects.map((project) => (<ProjectContainer project={project} className="research__center"/>))}
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

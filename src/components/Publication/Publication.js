import { CircularProgress, Grid } from '@mui/material';
import './Publication.css'; // Import the CSS file
import uniqid from 'uniqid';
import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../contexts/theme';

import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import AboutMin from '../About/AboutMin';
import Skills from '../Skills/Skills';

const Publication = () => {
  const [{ themeName }] = useContext(ThemeContext);

  const [publicationData, setPublicationData] = useState(null);
  const [stackArray, setStackArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const topics = await fetch(`${process.env.REACT_APP_BACKEND_URL}/get_topics/publication`);
        const topics_data = await topics.json();
        setStackArray(topics_data);

        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/get_publications`);
        const data = await response.json();
        setPublicationData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id='top' className={`${themeName} app`}>
      <main>
        <Grid container direction='column'>
          {/* Left Row */}
          <Grid item className="leftRow" alignItems='center' alignContent='center'>
            <AboutMin />
          </Grid>
          {/* Right Row */}
          <Grid item xs>
            {publicationData ? (
              <section className="rightRow">
                <h2 className='section__title'>Publication</h2>
                {stackArray ? <Skills skills={[...stackArray]} header={false} filter /> : null}
                <div className='project__container'>
                {publicationData.map((project) => (
                  <ProjectContainer key={uniqid()} project={project} className="publication__center" />
                ))}
                </div>
                <Contact />
                <Footer />
              </section>
            ) : (
              <section className="rightRow center">
                <h2 className='section__title'>Publication</h2>
                <CircularProgress color='inherit' />
              </section>
            )}
          </Grid>
        </Grid>
      </main>
      <ScrollToTop />
      
    </div>
  );
};

export default Publication;

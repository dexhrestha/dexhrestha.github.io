
import { Grid } from '@mui/material';
import './Research.css'; // Import the CSS file
import uniqid from 'uniqid';
import { useContext,useState,useEffect } from 'react'
import { ThemeContext } from '../../contexts/theme'


import ScrollToTop from '../ScrollToTop/ScrollToTop'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import AboutMin from '../About/AboutMin';


const Research = () => {
  const [{ themeName }] = useContext(ThemeContext)


  const [researchData,setResearchData] = useState(null);

  useEffect(()=>{
    const fetchData = async ()=>{
    try {
      // const response = await fetch(`https://notion-api.splitbee.io/v1/page/${blogSlug}`);
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/get_researches`)
      const data = await response.json();  
      setResearchData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
},[])

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
       
        {researchData ? (
  <section className="rightRow">
    <h2 className='section__title'>Research</h2>
    {researchData.map((project) => (
      <ProjectContainer key={uniqid()} project={project} className="research__center" />
    ))}
    <Contact />
  </section>
) : null}

        </Grid>
      </Grid>
      
      </main>
      <ScrollToTop/>
      <Footer />      
    </div>
  );
};

export default Research;

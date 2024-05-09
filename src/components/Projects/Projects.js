import uniqid from 'uniqid'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'
import { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'




const Projects = ({projectsRef}) => {

   const [projectsData,setProjectsData] = useState(null);

  useEffect(()=>{
    const fetchData = async ()=>{
    try {
      // const response = await fetch(`https://notion-api.splitbee.io/v1/page/${blogSlug}`);
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/get_projects/3`)
      const data = await response.json();  
      setProjectsData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
},[])


  return (
    (projectsData?
    <section id='projects' ref={projectsRef} className='section projects'>
      <h2 className='section__title'>Recent PROJECTS</h2>
      <p> Crunching Numbers, Unveiling Stories: Your Data Odyssey Awaits! </p>

      <div className='projects__grid'>
        {projectsData.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
    :<div className='center'><CircularProgress color='inherit' /></div>)
  )
}

export default Projects

import uniqid from 'uniqid'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Blogs.css'
import { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'




const Blogs = ({blogsRef}) => {

   const [blogsData,setBlogsData] = useState(null);

  useEffect(()=>{
    const fetchData = async ()=>{
    try {
      // const response = await fetch(`https://notion-api.splitbee.io/v1/page/${blogSlug}`);
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/get_publications/3`)
      const data = await response.json();  
      setBlogsData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
},[])


  return (
    (blogsData?
    <section id='blogs' ref={blogsRef} className='section blogs bordered'>
      <h2 className='section__title'>Recent Blogs</h2>
      <p> Adventures in Learning: Tales of Professional Growth </p>

      <div className='blogs__grid'>
        {blogsData.map((blog) => (
          <ProjectContainer key={uniqid()} project={blog} />
        ))}
      </div>
    </section>
    :<div className='center'><CircularProgress color='inherit' /></div>)
  )
}

export default Blogs

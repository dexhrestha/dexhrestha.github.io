import './Portfolio.css';
import React from "react";
import { Carousel, Card } from "../ui/apple-cards-carousel";
import { useState,useEffect } from 'react';
import NotionElement from '../NotionElement/NotionElement';


export function Projects() {
  const [projects,setProjects] = useState(null);

  useEffect(()=>{
    const fetchData = async ()=>{
    try {
      // const response = await fetch(`https://notion-api.splitbee.io/v1/page/${blogSlug}`);
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/get_projects/5`)
      const data = await response.json();  
      data.forEach((item)=>{
        item.category = item.tags[0];
        item.src = item.img_src;
        item.title = item.name;
        item.content = <NotionElement blogUrl={item.blog_url.substring("/#/blog/".length)}/>
      })

      ;
      setProjects(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
},[])


    const cards = projects?projects.map((card, index) => (
      <div className="card" key={index}>

      <Card  key={card.src} card={card} index={index} />
      </div>
    )):<></>;
  
    return (
      <div className="w-full h-full py-20">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
            Portfolio
        </h2>
        {projects?<Carousel items={cards} />:<></>}
      </div>
    );
  }


  export default Projects;
import React, { useEffect, useState } from "react";
import {StickyScroll} from "../ui/sticky-scroll-reveal"; // Adjust the path accordingly

import {projects as projs} from "../../portfolio";

export default function Projects() {
  const [projects,setProjects] = useState(null);

  useEffect(()=>{
    const fetchData = async ()=>{
    try {
      // const response = await fetch(`https://notion-api.splitbee.io/v1/page/${blogSlug}`);
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/get_projects/4`)
      const data = await response.json();  
      data['content']=     
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={data.img_src}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt={data.name}
        />
      </div>
      ;
      setProjects(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
},[])

  
  return (
   (projects?<div className={`w-full h-full`}>
      <StickyScroll content={projects} className="h-full" />
    </div>:<></>)
  );
};



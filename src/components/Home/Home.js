import React from "react";
import { Hero } from "../Hero/Hero";
import Projects from "../Projects/Projects";
import { Carousel,Card } from "../ui/apple-cards-carousel";
import Publications from "../Publications/Publications";
import { Timeline } from "../Timeline/Timeline";
import { GridBackground } from "../GridBackground/GridBackground";
import SpotlightComponent  from "../Spotlight/Spotlight";
import { HoverEffect } from "../ui/card-hover-effect";

const skills = [
  {
    title: "SQL",
    description: "Specialized in SQL for querying and managing relational databases with efficiency and precision.",
    icon: "database",
  },
  {
    title: "Python",
    description: "Utilize Python for a wide range of applications, from data analysis to machine learning and automation.",
    icon: "code",
  },
  {
    title: "PowerBI",
    description: "Expert in PowerBI, creating insightful reports and interactive dashboards for data-driven decision-making.",
    icon: "chart-line",
  },
  {
    title: "R Programming",
    description: "Skilled in R programming for advanced statistical analysis and comprehensive data visualization.",
    icon: "r fa-solid",
  },
  {
    title: "React",
    description: "Develop modern web applications with React, focusing on efficient, dynamic, and user-friendly interfaces.",
    icon: "react fa-brands",
  },
  {
    title: "Azure",
    description: "Leverage Microsoft Azure for scalable cloud solutions, including computing, storage, and data services.",
    icon: "cloud",
  },
];



const data = [
    {
      category: "Artificial Intelligence",
      title: "You can do more with AI.",
      src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <img />,
    },
    {
      category: "Productivity",
      title: "Enhance your productivity.",
      src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <img />,
    },
    {
      category: "Product",
      title: "Launching the new Apple Vision Pro.",
      src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <img />,
    },
  
    {
      category: "Product",
      title: "Maps for your iPhone 15 Pro Max.",
      src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <img />,
    },
    {
      category: "iOS",
      title: "Photography just got better.",
      src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <img />,
    },
    {
      category: "Hiring",
      title: "Hiring for a Staff Software Engineer",
      src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <img />,
    },
  ];

const Home = () => {
  const cards = data.map((card, index) => (
    <Card className='cover' key={card.src} card={card} index={index} />
  ));

    return (

        <div className="p-2 md:p-5 rounded-tl-2xl border dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-auto">
        
          <div
                key={"about" }
                className="flex gap-2 flex-1 w-full max-h-screen h-full rounded-lg  bg-gray-100 dark:bg-neutral-800"
              >
                       <Hero />
              </div>
   
              <div
                key={"timeline"}
                className="w-full rounded-lg  bg-gray-100 dark:bg-neutral-800"
              >
                <GridBackground>
                    <Timeline />
                </GridBackground>

              </div>
   
              <div
                key="skills"
                className="w-full rounded-lg bg-gray-100 dark:bg-neutral-800"
              >
                <GridBackground>
                  <div className="max-w-5xl mx-4 py-4">
                  
                    <h2 className="text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                      Skills
                    </h2>
                    <div className="mt-2 py-6">
                      <HoverEffect className="items-start" items={skills} />
                    </div>
                    
                  </div>

                  </GridBackground>                
              </div>


              
              <div
                key={"project"}
                className="w-full rounded-lg  bg-gray-100 dark:bg-neutral-800"
              >
                    <Projects />
              </div>

              <div
                key={"portfolio" }
                className="w-full rounded-lg  bg-gray-100 dark:bg-neutral-800"
              >
                <GridBackground>

                <Publications title={'Recent Blogs'}/>
                </GridBackground>                                    
              </div>

              <div
                key={"contact" }
                className="w-full rounded-lg  bg-gray-100 dark:bg-neutral-800"
              >
                <SpotlightComponent />
                                    
              </div>
              

        </div>
    );
  };



  export default Home;


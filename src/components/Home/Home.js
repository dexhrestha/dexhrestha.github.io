import React from "react";
import { Hero } from "../Hero/Hero";
import Projects from "../Projects/Projects";
import { Carousel,Card } from "../ui/apple-cards-carousel";
import Publications from "../Publications/Publications";
import { Timeline } from "../ui/timeline";
import { GridBackground } from "../GridBackground/GridBackground";
import SpotlightComponent  from "../Spotlight/Spotlight";
import { HoverEffect } from "../ui/card-hover-effect";
import Certifications from "../Certifications/Certifications";
import { certifications,time } from "../../portfolio";

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

const timelineData = [
  {
    title: "October 2023",
    content: (
      <div>
        <p className="text-orange-400 dark:text-neutral-200 text-4xl md:text-2xl font-bold mb-8">
        Future Anthem
        </p>
        <ul>
    <li title="Gaussian Mixture Model in PySpark" className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
        ✅ Developed a Gaussian Mixture Model in <strong>PySpark</strong>, increasing precision for identifying positive play behavior by <strong>20%</strong>.
    </li>
    <li title="Power BI Optimization" className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
    ✅ Updated and optimized <strong>Power BI</strong> dashboards using DAX, improving data interpretation, and enabling real-time monitoring.
    </li>
    <li title="Quality Assurance and Model Testing" className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
    ✅ Supported data scientists with quality assurance and statistical model testing, documenting procedures.
    </li>
    <li title="Predictive Model for Player Retention" className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
    ✅ Assisted in developing a predictive model for player retention, contributing to <strong>8%</strong> improvement in predicting player churn.
    </li>
</ul>
        
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://i.ibb.co/BV1BzZC/Screenshot-2024-08-28-at-21-39-08.png"
            alt="startup template"
            width="500"
            height="500"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "July 2023",
    content: (
      <div>
        <p className="text-blue-400 dark:text-neutral-200 text-4xl md:text-2xl font-bold mb-8">
        University of Greenwich
        </p>
        <ul>
    <li title="Gaussian Mixture Model in PySpark" className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
        ✅ Developed and implemented a Python-based automation solution to bypass data size limitations in <strong>ORBIS</strong>.
    </li>
    <li title="Power BI Optimization" className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
    ✅ Transitioned to a longitudinal database  For efficient storage and management of the extracted data.
    </li>
    <li title="Quality Assurance and Model Testing" className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
    ✅ Documented code and created comprehensive user guides to ensure ease of use and maintenance for future developers.
    </li>
</ul>
        
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.accommodationforstudents.com/website/university-guides/gb/university-of-greenwich/uni.jpg"
            alt="startup template"
            width="500"
            height="500"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },{
    title: "December 2022",
    content: (
      <div>
        <p className="text-blue-900 dark:text-neutral-200 text-4xl md:text-2xl font-bold mb-8">
          Nimble Clinical Research
        </p>
        <ul>
    <li title="Gaussian Mixture Model in PySpark" className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
        ✅ Led the development of a clinical data analysis platform, processing over 50 million clinical records with a <strong>90%</strong> reduction in processing time compared to previous system based on <strong>SAS</strong>.
    </li>
    <li title="Power BI Optimization" className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
    ✅ Developed a comprehensive data visualization component within the clinical data analysis system, utilizing <strong>R</strong> programming language and <strong>Plotly</strong> library.
    </li>
    <li title="Quality Assurance and Model Testing" className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
    ✅ Implemented a scalable PDF reporting system leveraging <strong>Jinja</strong> templating engine within the clinical data analysis platform facilitating the generation of customizable reports and optimizing data visualization.
    </li>
    <li title="Predictive Model for Player Retention" className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
    ✅ Ensured quality assurance and compliance standards by designing and implementing an <strong>ELT pipeline</strong> for data loading from <strong>Azure</strong>data storage, maintaining data integrity and security.
    </li>
</ul>
        
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://i.ibb.co/7zjC5B4/DSC-1009.jpg"
            alt="startup template"
            width="500"
            height="500"
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  }]

const Home = () => {
  // const cards = data.map((card, index) => (
  //   <Card className='cover' key={card.src} card={card} index={index} />
  // ));

    return (

        <div className="p-2 md:p-5 rounded-tl-2xl border dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-auto">
        
          <div
                key={"about" }
                className="flex gap-2 flex-1 w-full max-h-screen h-full rounded-lg  bg-gray-100 dark:bg-neutral-800"
              >
                                       <GridBackground>
                                       <Hero />
                </GridBackground>
                       
              </div>
              <div
                key={"certifications"}
                className="w-full rounded-lg  bg-gray-100 dark:bg-neutral-800"
              >
                    <GridBackground>
                      <Certifications certifications={certifications}/>
                    </GridBackground>


              </div>
              <div
                key={"timeline"}
                className="w-full rounded-lg  bg-gray-100 dark:bg-neutral-800"
              >
                <GridBackground>
                    <Timeline data = {timelineData}/>
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


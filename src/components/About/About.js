import React from "react";
import {
  IconBrandPython,
  IconFileInfo,
  IconBrandBlogger,
  IconCertificate,
} from "@tabler/icons-react";
import MetricCard from "../cards/metric-cards";
import SkillsGrid from "../cards/skills-card";
import SpotlightComponent from "../Spotlight/Spotlight";

export default function About({ title }) {
  return (
    <div className="p-2 md:p-5  bg-gray-100 dark:bg-neutral-800 flex flex-col gap-6 w-full h-full">
      {/* About Section */}
      <div
        key={"about"}
        className="flex flex-col gap-6 w-full bg-gray-100 dark:bg-neutral-800 p-5 rounded-lg"
      >
        <h2 className="text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans py-2">
          {title ? title : "👋"} <br />
          Hello there! I&apos;m Dipesh Shrestha
        </h2>

        <div className="flex flex-col gap-6">
          {/* Project Metrics Cards */}
          <div className="flex md:px-5 gap-4 mb-6">
            <div className="h-32 w-full sm:w-1/2 lg:w-1/4 rounded-lg bg-gray-100 dark:bg-neutral-800 p-4 flex items-center justify-between shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <MetricCard icon={<IconBrandPython />} label="Projects" metric={32} />
            </div>
            <div className="h-32 w-full sm:w-1/2 lg:w-1/4 rounded-lg bg-gray-100 dark:bg-neutral-800 p-4 flex items-center justify-between shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <MetricCard icon={<IconFileInfo />} label="Research Papers" metric={2} />
            </div>
            <div className="h-32 w-full sm:w-1/2 lg:w-1/4 rounded-lg bg-gray-100 dark:bg-neutral-800 p-4 flex items-center justify-between shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <MetricCard icon={<IconBrandBlogger />} label="Blog Posts" metric={3} />
            </div>
            <div className="h-32 w-full sm:w-1/2 lg:w-1/4 rounded-lg bg-gray-100 dark:bg-neutral-800 p-4 flex items-center justify-between shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <MetricCard icon={<IconCertificate />} label="Data Science Certifications" metric={3} />
            </div>
          </div>

          <SkillsGrid skills={skills} />

          <div className="rounded-lg dark:bg-neutral-800 p-4">
            <p className="text-lg leading-relaxed mb-6">
              Over the past five years, I&apos;ve worked across various industries, including finance, healthcare, and e-commerce, where I’ve developed robust models that drive business growth. My expertise spans machine learning, data visualization, and big data analytics, with a particular focus on predictive modeling and natural language processing.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              What sets me apart is my ability to not only develop advanced algorithms but also to communicate complex findings to stakeholders in a clear and impactful way. I’m proficient in <span className="text-indigo-600 font-semibold">Python</span>, <span className="text-indigo-600 font-semibold">R</span>, <span className="text-indigo-600 font-semibold">SQL</span>, and have hands-on experience with frameworks like <span className="text-indigo-600 font-semibold">TensorFlow</span> and <span className="text-indigo-600 font-semibold">PyTorch</span>. I’m also skilled in using cloud platforms such as <span className="text-indigo-600 font-semibold">AWS</span> and <span className="text-indigo-600 font-semibold">Google Cloud</span> for deploying scalable data solutions.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              When I’m not crunching numbers, you can find me exploring new tech trends, contributing to open-source projects, or mentoring aspiring data scientists. I’m always on the lookout for exciting opportunities to apply my skills and collaborate on innovative projects.
            </p>
            <p className="text-lg leading-relaxed">
              Feel free to explore my portfolio to see some of the work I’ve done. Let’s connect and create something extraordinary together!
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div
        key={"contact"}
        className="w-full rounded-lg bg-gray-100 dark:bg-neutral-800 p-5"
      >
        <SpotlightComponent />
      </div>
    </div>
  );
}

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

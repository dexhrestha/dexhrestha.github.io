import React from "react";
// import { ShootingStars } from "../ui/shooting-stars";
// import { StarsBackground } from "../ui/stars-background";
import { TypewriterComponent } from "../Typwriter/Typewriter";
import './Hero.css';
import AnimatedButton from "../buttons/BorderMagic";
import {
  IconBrandGithubFilled,
  IconBrandInstagram,
  IconBrandLinkedin
} from "@tabler/icons-react";


import {hero} from "../../portfolio";


const roles = [
  'Data Scientist',
  'Data Engineer',
  'Software Engineer',
  'Data Analyst',
];

export function Hero() {
    return (
      <div className="h-screen max-h-screen rounded-md bg-transparent flex flex-col items-center justify-center relative w-full px-4 md:px-8 lg:px-12 overflow-hidden">
  <div className="flex flex-col items-center justify-center relative w-full max-w-5xl px-4 md:px-8">
    <div className="about__image w-32 h-32 md:w-80 md:h-80 rounded-full overflow-hidden bg-cover bg-center border-2 border-white shadow-md mb-4" />
    <h2 className="relative text-3xl md:text-5xl text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600 my-4">
    Hi, I am Dipesh Shrestha
    </h2>
    <TypewriterComponent words={roles} />
    <p className="relative text-sm md:text-lg max-w-xl mx-auto text-center tracking-tight font-medium bg-clip-text text-black dark:text-transparent dark:bg-gradient-to-b dark:from-gray-200 dark:via-gray-100 dark:to-white p-2 md:p-4">
    As a Certified Data Professional with a Masters in Data Science, I bring versatile experience and expertise in Machine Learning, Big Data, and AI Technologies. Passionate about solving complex problems, I offer unique insights and proven success in data-driven decision making, effectively communicating intricate data insights to drive impactful results.
    </p>
    <div className="buttons flex flex-col md:flex-row gap-4 text-center items-center justify-center mb-4">
  {/* Visible on all screens */}
  <a href={hero.resume_link}>
    <AnimatedButton>
      Resume
    </AnimatedButton>
  </a>

  {/* Hidden on small screens, visible on medium and larger screens */}
  <a href='/#/portfolio'>
    <AnimatedButton className="hidden md:block">
      Portfolio
    </AnimatedButton>
  </a>
 
  {/* Social icons container */}
  <div className="flex gap-4 mt-4 md:flex">
    <a href={hero.github} aria-label='github' className='link link--icon'>
      <IconBrandGithubFilled className="text-black dark:text-white" />
    </a>
    <a href={hero.linkedin} aria-label='linkedin' className='link link--icon'>
      <IconBrandLinkedin className="text-black  dark:text-white" />
    </a>
    {/* <a href='#' aria-label='instagram' className='link link--icon'>
      <IconBrandInstagram className="text-black dark:text-white" />
    </a> */}
  </div>
</div>

  </div>
  {/* <ShootingStars /> */}
  {/* <StarsBackground /> */}
</div>

    
    );
  }
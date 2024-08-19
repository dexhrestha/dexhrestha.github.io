import React from "react";
import {cn} from '../../utils/cn';
import  { Spotlight }  from "../ui/spotlight";
import AnimatedButton from "../buttons/BorderMagic";
import { IconBrandLinkedin, IconMail } from "@tabler/icons-react";

const SpotlightComponent = ()=> {
  return (
<div className="h-[30rem] w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden md:h-[30rem] lg:h-[40rem]">
<Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Interested in hiring me <br />  in your team?
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            I&apos;m interested in data-driven roles where I can use my skills to create positive impact. I&apos;m keen to explore new opportunities that align with my interests.
        </p>
        <div className="flex flex-col sm:flex-row pt-10 justify-center gap-3">
        <AnimatedButton >
                <IconBrandLinkedin />
                <span>Connect on Linkedin</span>
            </AnimatedButton>
            <AnimatedButton>
                <IconMail/>
                <span>Connect on Email</span>
            </AnimatedButton>
        </div>
      </div>
    </div>
  );
}

export default SpotlightComponent;


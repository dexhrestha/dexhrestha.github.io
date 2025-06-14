import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";

export default function Certifications({ certifications }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center my-10 px-5">
      {certifications.map((cert, index) => (
        <a href={cert.href} key={index}>
          <BackgroundGradient
            className="rounded-[22px] min-w-[200px] max-w-full sm:max-w-[300px] p-4 sm:p-6 bg-white dark:bg-zinc-900 flex flex-col items-center"
          >
            <div className="flex justify-center w-full h-[175px] sm:h-[200px]">
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <span>Valid Until: </span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                {cert.date}
              </span>
            </button>
          </BackgroundGradient>
        </a>
      ))}
    </div>
  );
}

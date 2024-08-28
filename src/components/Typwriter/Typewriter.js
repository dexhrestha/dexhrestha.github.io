import React from "react";
import { FlipWords } from "../ui/flip-words";
export function TypewriterComponent({words}) {

  return (
      <div>
<h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-3xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-black dark:bg-gradient-to-b dark:from-white dark:via-gray-200 dark:to-gray-400 flex items-center">
<span> A </span> <FlipWords className="text-black" words={words} />
        </h2>
      </div>
  );
}

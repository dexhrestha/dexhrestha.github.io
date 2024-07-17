import React from "react";
import { FlipWords } from "../ui/flipWords";

import './Typing.css'

export function Typing({words}) {

  return (
      <div className="text">
        <span> A </span> <FlipWords words={words} />
      </div>
  );
}
